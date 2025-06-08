
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import Icon from './Icon';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { COMPANY_NAME } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Helper component to render markdown-like text with typing animation
const MarkdownContent: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const animationTimeoutId = useRef<number | null>(null);
  const prevTextRef = useRef<string>(''); // To track actual prop changes

  useEffect(() => {
    // Only restart animation if the actual text prop has changed meaningfully
    if (text === prevTextRef.current && displayedText === text) {
      return; 
    }
    prevTextRef.current = text;

    if (animationTimeoutId.current) {
      clearTimeout(animationTimeoutId.current);
      animationTimeoutId.current = null;
    }

    // If the text is shorter than what's displayed (e.g. correction or full reset), snap to new text
    if (text.length < displayedText.length || !text.startsWith(displayedText.substring(0, Math.min(displayedText.length, text.length)))) {
        setDisplayedText(''); // Reset displayed text to start animation from scratch for new message
    }
    
    // Animate the difference
    let currentIndex = displayedText.length;
    // If text was reset, currentIndex should be 0 relative to new text
    if (text.length < displayedText.length || !text.startsWith(displayedText.substring(0, Math.min(displayedText.length, text.length)))) {
        currentIndex = 0;
    }


    const animate = (index: number) => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        animationTimeoutId.current = window.setTimeout(() => animate(index + 1), 25); // Adjust typing speed (ms)
      } else {
        animationTimeoutId.current = null;
      }
    };

    if (currentIndex < text.length) {
      // Start animation from the current length of displayedText up to the new text length
      animate(currentIndex);
    } else if (displayedText !== text) {
      // If no animation needed but text isn't fully displayed (e.g., initial empty or shorter text)
      setDisplayedText(text);
    }

    return () => {
      if (animationTimeoutId.current) {
        clearTimeout(animationTimeoutId.current);
        animationTimeoutId.current = null;
      }
    };
  }, [text, displayedText]); // Rerun when text (from prop) or displayedText (internal state) changes

  // Markdown parsing logic now operates on `displayedText`
  const lines = displayedText.split('\n');
  const elements: JSX.Element[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let listItems: JSX.Element[] = [];

  const processLineContent = (lineContent: string): (string | JSX.Element)[] => {
    const parts = lineContent.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold">{part.substring(2, part.length - 2)}</strong>;
      }
      return part;
    });
  };
  
  const endCurrentList = () => {
    if (listItems.length > 0) {
      if (listType === 'ul') {
        elements.push(<ul key={`list-${elements.length}-${Math.random()}`} className="list-disc list-inside pl-4 my-1 space-y-0.5">{listItems}</ul>);
      } else if (listType === 'ol') {
        elements.push(<ol key={`list-${elements.length}-${Math.random()}`} className="list-decimal list-inside pl-4 my-1 space-y-0.5">{listItems}</ol>);
      }
      listItems = [];
    }
    listType = null;
  };

  lines.forEach((line, lineIndex) => {
    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.*)/);
    const ulMatch = line.match(/^(\s*)[\*\-]\s+(.*)/);

    if (olMatch) {
      const content = olMatch[3];
      if (listType !== 'ol') {
        endCurrentList();
        listType = 'ol';
      }
      listItems.push(<li key={`li-${lineIndex}-${Math.random()}`}>{processLineContent(content)}</li>);
    } else if (ulMatch) {
      const content = ulMatch[2];
      if (listType !== 'ul') {
        endCurrentList();
        listType = 'ul';
      }
      listItems.push(<li key={`li-${lineIndex}-${Math.random()}`}>{processLineContent(content)}</li>);
    } else {
      endCurrentList();
      const trimmedLine = line.trim();
      if (trimmedLine || lineIndex < lines.length -1) { // Render line if it has content or if it's not the last (to preserve empty lines between paragraphs)
          elements.push(<p key={`p-${lineIndex}-${Math.random()}`} className="my-1 min-h-[1em]">{processLineContent(line)}</p>);
      }
    }
  });
  endCurrentList();

  // If elements is empty and original text was just whitespace or empty, render a non-breaking space to maintain bubble structure
  if (elements.length === 0 && displayedText.trim() === '') {
    return <p className="my-1 min-h-[1em]">&nbsp;</p>;
  }
  // If elements is empty but displayedText has content (e.g. single line not matching list/paragraph logic above)
  if (elements.length === 0 && displayedText) {
    return <p className="my-1 min-h-[1em]">{processLineContent(displayedText)}</p>;
  }

  return <>{elements}</>;
};


const AiChatbot: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [animationClassModal, setAnimationClassModal] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fabTimer = setTimeout(() => setShowFab(true), 500);
    return () => clearTimeout(fabTimer);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus();
      if (!chat && messages.length === 0) { // Initialize only if no chat and no initial messages
        initializeChat();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]); // Scroll on new messages or when loading indicator changes
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const initializeChat = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!process.env.API_KEY) {
        throw new Error("API key not found. Please set the API_KEY environment variable.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash-preview-04-17',
        config: {
          systemInstruction: `You are a friendly and highly knowledgeable AI assistant for ${COMPANY_NAME}, a company specializing in custom AI tools, chatbots, automation, and AI-powered analytics for startups and small businesses. Your goal is to provide helpful, concise, and accurate information about ${COMPANY_NAME}'s services, technology, and the benefits of AI. Be polite, engaging, and professional. If a user asks about pricing or specific project quotes, explain that it's best to book a free consultation for a personalized discussion. If you don't know an answer, admit it gracefully and suggest they contact support or book a consultation. You can also answer general questions about AI if relevant. Do not make up information. Keep responses relatively short and easy to read. Use Markdown for formatting lists and bold text where appropriate (e.g., "**bold text**", "1. Item one").`,
        },
      });
      setChat(newChat);
      
      // Send an initial greeting from the AI using the chat session
      const greetingText = `Hello! I'm ${COMPANY_NAME}'s AI assistant. How can I help you learn about our AI solutions today?`;
      const stream = await newChat.sendMessageStream({ message: "Introduce yourself." }); // Or a predefined initial prompt
      
      let aiResponseText = '';
      const aiMessageId = crypto.randomUUID();
      setMessages([{ id: aiMessageId, text: '', sender: 'ai', timestamp: new Date() }]);

      for await (const chunk of stream) {
        aiResponseText += chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: aiResponseText } : msg
        ));
      }
       if (!aiResponseText) { // Fallback if stream is empty
         setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: greetingText } : msg
        ));
      }


    } catch (err) {
      console.error("Chat initialization error:", err);
      const friendlyMessage = "Sorry, I'm having trouble connecting right now. Please ensure your API key is correctly configured or try again later.";
      setError(err instanceof Error ? `${err.message} - ${friendlyMessage}`: friendlyMessage);
      setMessages(prev => [...prev, { id: crypto.randomUUID(), text: friendlyMessage, sender: 'ai', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setAnimationClassModal('animate-scaleIn');
    setError(null); 
  };

  const closeModal = () => {
    setAnimationClassModal('animate-scaleOut');
    setTimeout(() => setIsModalOpen(false), 180);
  };

  const handleSendMessage = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading || !chat) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: trimmedInput,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chat.sendMessageStream({ message: trimmedInput });
      let aiResponseText = '';
      const aiMessageId = crypto.randomUUID();
      // Add a placeholder for the AI message that will be updated incrementally
      setMessages(prev => [...prev, { id: aiMessageId, text: '', sender: 'ai', timestamp: new Date() }]);

      for await (const chunk of stream) { 
        aiResponseText += chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: aiResponseText } : msg
        ));
      }
      if (!aiResponseText && !error) { 
         setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: "I'm sorry, I couldn't generate a response for that." } : msg
        ));
      }
    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(`Failed to get response: ${errorMessage}`);
      setMessages(prev => [...prev, { id: crypto.randomUUID(), text: "Sorry, I encountered an error. Please try again.", sender: 'ai', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };
  
  const fabIconName = isModalOpen ? "close" : "chatBubbleOutline";

  return (
    <>
      <button
        onClick={isModalOpen ? closeModal : openModal}
        className={`fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 transition-all duration-300 ease-in-out z-[70]
                    ${showFab ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transform hover:scale-110`}
        aria-label={isModalOpen ? "Close chat" : "Open chat assistant"}
        style={{ visibility: showFab ? 'visible' : 'hidden' }}
      >
        <Icon name={fabIconName} className="w-7 h-7" />
      </button>

      {isModalOpen && (
        <div 
          className={`fixed inset-0 bg-neutral-dark/50 dark:bg-black/60 flex items-end justify-center sm:items-center p-0 sm:p-4 z-[60] transition-opacity duration-300 ease-in-out ${animationClassModal === 'animate-scaleIn' ? 'animate-fadeIn' : 'animate-fadeOutBeforeRemove'}`}
          onClick={closeModal} 
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
        >
          <div 
            className={`bg-white dark:bg-neutral-dark rounded-t-lg sm:rounded-lg shadow-2xl w-full max-w-md h-[85vh] sm:h-[70vh] md:h-[600px] flex flex-col transition-all duration-300 ease-in-out ${animationClassModal}`}
            onClick={(e) => e.stopPropagation()} 
          >
            <header className="flex justify-between items-center p-4 border-b border-neutral-light dark:border-gray-700">
              <h3 id="chatbot-title" className="text-lg font-semibold text-neutral-dark dark:text-neutral-light">AI Assistant</h3>
              <button
                onClick={closeModal}
                className="text-neutral hover:text-neutral-dark dark:text-neutral-light dark:hover:text-white p-1 rounded-full"
                aria-label="Close chat"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </header>

            <main className="flex-grow overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-neutral-light dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl break-words ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white dark:bg-primary-dark' 
                      : 'bg-neutral-light dark:bg-neutral-darker text-neutral-dark dark:text-neutral-light'
                  }`}>
                    {msg.sender === 'ai' ? <MarkdownContent text={msg.text} /> : <div className="min-h-[1em]">{msg.text}</div>}
                     <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-light/70 text-right' : 'text-neutral/70 dark:text-gray-400/70 text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && messages.length > 0 && messages[messages.length -1]?.sender === 'user' && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 rounded-xl bg-neutral-light dark:bg-neutral-darker text-neutral-dark dark:text-neutral-light">
                    <div className="flex items-center space-x-1">
                      <span className="h-2 w-2 bg-neutral dark:bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0s'}}></span>
                      <span className="h-2 w-2 bg-neutral dark:bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.15s'}}></span>
                      <span className="h-2 w-2 bg-neutral dark:bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></span>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                 <div className="flex justify-start">
                    <div className="max-w-[85%] p-3 rounded-xl bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 break-words">
                        <p className="font-medium">Error:</p>
                        <p>{error}</p>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 border-t border-neutral-light dark:border-gray-700">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={isLoading ? "AI is thinking..." : "Type your message..."}
                  className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-neutral-dark dark:text-neutral-light placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 ease-in-out"
                  disabled={isLoading || !chat}
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={isLoading || !userInput.trim() || !chat}
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
                  aria-label="Send message"
                >
                  <Icon name="chevronRight" className="w-6 h-6" />
                </button>
              </form>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChatbot;
