
import { NavLink, Testimonial, Service, CaseStudy, HowItWorksStepContent } from './types';

export const COMPANY_NAME = "InnovatAI";
export const COMPANY_SLOGAN = "AI-Powered Growth, Simplified.";

export const FOUNDER_NAME = "Shivam Prasad";
export const FOUNDER_TITLE = "AI Developer & Founder";
export const FOUNDER_BIO = "Shivam is a passionate AI Developer dedicated to helping businesses leverage the power of artificial intelligence. With expertise in building custom AI tools, he focuses on delivering practical solutions that solve real-world problems and drive tangible results. Shivam believes in making AI accessible and affordable for startups and small businesses, empowering them to innovate and grow.";
export const FOUNDER_GITHUB = "https://github.com/shivamprasad1001"; 
export const FOUNDER_LINKEDIN = "https://linkedin.com/in/shivamprasad1001"; 
export const FOUNDER_IMAGE_PLACEHOLDER = "https://media.licdn.com/dms/image/v2/D5603AQG1JF4TjMh4qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709327770890?e=2147483647&v=beta&t=yH90N9z1qxW6ey5031FV_bHHXhFIh5CxXZAYaLtgsto";

export const CONTACT_EMAIL = "hello@innovateaisolutions.com"; // Replace with actual email
export const CONTACT_PHONE = "+91 90263941xx"; 
export const CALENDLY_LINK = "https://calendly.com/innovateai-demo/free-consultation"; // Replace with actual link

export enum RoutePath {
  HOME = '/',
  SERVICES = '/services',
  PORTFOLIO = '/portfolio',
  ABOUT_US = '/about',
  CONTACT = '/contact',
}

export const ROUTES: Record<string, RoutePath> = {
  HOME: RoutePath.HOME,
  SERVICES: RoutePath.SERVICES,
  PORTFOLIO: RoutePath.PORTFOLIO,
  ABOUT_US: RoutePath.ABOUT_US,
  CONTACT: RoutePath.CONTACT,
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Portfolio', path: ROUTES.PORTFOLIO },
  { label: 'About Us', path: ROUTES.ABOUT_US },
  { label: 'Contact', path: ROUTES.CONTACT },
];

export const HERO_HEADLINE = "Stop Wasting Time on Repetitive Tasks. We Build AI Tools That Work For You.";
export const HERO_SUBHEADLINE = "We provide custom AI chatbots, automation, and reporting solutions that save your business 10+ hours every week.";
export const PRIMARY_CTA_TEXT = "Book a Free Demo";

export const PROBLEM_STATEMENTS = [
  "Tired of manual data entry and repetitive tasks?",
  "Struggling with 24/7 customer support demands?",
  "Overwhelmed by data and need actionable insights?",
  "Losing leads due to slow response times?"
];

export const HOW_IT_WORKS_STEPS: HowItWorksStepContent[] = [
  { id: '1', title: "Free Consultation", description: "We dive deep to understand your challenges and goals." },
  { id: '2', title: "Custom Tool Development", description: "Our experts build your AI solution, fast. Days, not weeks." },
  { id: '3', title: "Deploy & Grow", description: "Integrate your new tool and watch your efficiency soar." },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: "InnovateAI Solutions transformed our customer service. The AI chatbot handles 80% of inquiries, freeing up our team for complex issues. We've saved over 15 hours a week!",
    name: "Priya Sharma",
    company: "Founder, Bloom & Grow E-Shop",
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    id: '2',
    quote: "The automation bot for our sales reporting is a game-changer. What used to take hours of manual work is now done in minutes. Accuracy is up, and my team is happier.",
    name: "Rajesh Kumar",
    company: "Sales Manager, Fintech Startup",
    image: "https://picsum.photos/seed/rajesh/100/100"
  },
  {
    id: '3',
    quote: "We were skeptical about AI, but Shivam and his team made it so easy. The custom analytics dashboard gives us insights we never had before, leading to a 20% increase in marketing ROI.",
    name: "Anjali Reddy",
    company: "CEO, Local Services Co.",
    image: "https://picsum.photos/seed/anjali/100/100"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'chatbot',
    iconName: 'chatbot',
    title: 'AI Chatbots & Customer Support Automation',
    description: 'Engage customers 24/7, answer queries instantly, and generate leads with intelligent chatbots for your website, WhatsApp, and Instagram.',
    detailedDescription: "Tired of missing customer inquiries after hours or repetitive questions bogging down your support team? Our AI-powered chatbots provide instant, accurate responses to common questions, guide users through your services, and can even qualify leads. We deploy them on your website, WhatsApp, Instagram DMs, and other platforms, ensuring seamless customer interaction anytime, anywhere.",
    benefits: ["24/7 Availability", "Instant Response Times", "Increased Lead Generation", "Reduced Support Costs", "Improved Customer Satisfaction"],
    whoIsItFor: "Businesses of all sizes looking to enhance customer engagement, automate support, and capture more leads across digital channels.",
    link: `${ROUTES.CONTACT}?service=chatbot`
  },
  {
    id: 'automation',
    iconName: 'automation',
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks in HR, sales, operations, and daily reporting to free up your team for strategic work.',
    detailedDescription: "Manual data entry, report generation, and routine administrative tasks can consume valuable time and resources. We build custom AI automation bots to handle these processes efficiently and accurately. From automating HR onboarding workflows to generating daily sales reports or managing inventory updates, our solutions streamline your operations and boost productivity.",
    benefits: ["Significant Time Savings", "Reduced Manual Errors", "Increased Operational Efficiency", "Improved Employee Focus on Core Tasks", "Scalable Operations"],
    whoIsItFor: "Companies looking to optimize workflows, reduce operational overhead, and empower their teams by automating mundane tasks in areas like HR, sales, finance, and operations.",
    link: `${ROUTES.CONTACT}?service=automation`
  },
  {
    id: 'analytics',
    iconName: 'analytics',
    title: 'AI-Powered Reporting & Analytics',
    description: 'Turn your raw data into actionable insights with custom dashboards, automated reports, and predictive analytics.',
    detailedDescription: "Data is only valuable if you can understand it and act on it. We develop AI-driven reporting and analytics solutions that transform complex datasets into clear, actionable insights. Get custom-built dashboards to monitor KPIs in real-time, automated reports delivered to your inbox, and predictive models to forecast trends and make data-driven decisions.",
    benefits: ["Data-Driven Decision Making", "Real-Time Performance Monitoring", "Identification of Trends & Opportunities", "Improved Business Forecasting", "Enhanced Reporting Efficiency"],
    whoIsItFor: "Businesses aiming to unlock the power of their data, gain deeper understanding of their performance, and make informed strategic decisions.",
    link: `${ROUTES.CONTACT}?service=analytics`
  },
  {
    id: 'custom',
    iconName: 'custom',
    title: 'Custom AI Solutions',
    description: 'Have a unique challenge? We design and build bespoke AI tools tailored to your specific business needs and goals.',
    detailedDescription: "Sometimes, off-the-shelf solutions just don't cut it. If you have a unique business problem or a specific AI-powered tool in mind, our team can help. We specialize in understanding client-specific requirements and developing tailored AI solutions from scratch, whether it's a specialized recommendation engine, a document processing tool, or a unique predictive model.",
    benefits: ["Solutions Perfectly Aligned with Your Needs", "Competitive Advantage through Unique Technology", "Scalability for Future Growth", "Direct Integration with Existing Systems", "Expert Guidance from Concept to Deployment"],
    whoIsItFor: "Organizations with specific, complex problems that require a tailored AI approach, or those looking to innovate with unique AI-driven functionalities.",
    link: `${ROUTES.CONTACT}?service=custom`
  }
];

export const INSTAGRAM_SELLER_CASE_STUDY: CaseStudy = {
  id: 'insta-seller-bot',
  client: 'Online Fashion Boutique (Instagram Seller)',
  challenge: 'The client, a popular Instagram-based fashion boutique, was overwhelmed by the sheer volume of direct messages (DMs) they received daily. Common questions about product availability, sizing, pricing, and shipping details consumed hours of manual effort, leading to delayed responses and potential lost sales. They needed a way to provide instant answers to frequent queries and qualify serious buyers efficiently.',
  solution: "We developed a custom AI-powered DM Auto-Reply Bot specifically for their Instagram account. The bot was trained on their product catalog, FAQs, and common customer interaction patterns. Key features included:\n- Natural Language Understanding (NLU) to interpret customer queries accurately.\n- Instant replies to FAQs regarding price, size, stock, shipping policy, and payment methods.\n- Ability to guide users to specific product posts or website links.\n- A hand-off protocol to a human agent for complex queries or when a purchase intent was high.\n- Daily summary reports of bot interactions and common unanswered questions for continuous improvement.",
  results: [
    "Reduced DM response time by 98% for common queries.",
    "Saved an average of 15+ hours of manual DM management per week.",
    "Captured 30% more qualified leads by engaging customers instantly.",
    "Increased customer satisfaction due to prompt and accurate information.",
    "Freed up the owner to focus on product curation and business growth."
  ],
  visuals: {
    screenshot: "[Placeholder: Screenshot of the Instagram DM bot interface interacting with a user]",
    flowchart: "[Placeholder: Flowchart illustrating the DM bot's decision-making process]",
    demoVideo: "[Placeholder: Short demo video showcasing the bot in action]"
  }
};

export const TECHNOLOGY_STACK: string[] = [
  "Python", "FastAPI", "Node.js", "React", 
  "OpenAI API", "Hugging Face Transformers", "LangChain",
  "TensorFlow", "PyTorch",
  "AWS", "Google Cloud Platform (GCP)", "Docker"
];

export const OUR_MISSION = "Our mission is to democratize artificial intelligence, making powerful custom AI tools accessible and affordable for startups and small businesses worldwide. We empower you to automate, innovate, and grow.";

export const OUR_VALUES = [
  { name: "Customization-First", description: "Your business is unique. Your AI tools should be too. We tailor every solution to your specific needs.", iconName: 'target' as const },
  { name: "Fast Delivery", description: "We deliver functional AI tools in days or weeks, not months, so you see results quickly.", iconName: 'rocket' as const },
  { name: "Personal Support", description: "We're your partners in AI. Expect dedicated support and collaboration throughout the journey.", iconName: 'userGroup' as const }
];

export const CONTACT_PAGE_HEADLINE = "Let's Build Something Amazing Together.";
export const CONTACT_FORM_HEADING = "Get in Touch";
export const CONTACT_BOOKING_PROMPT = "Ready to talk? Schedule your free 15-minute consultation here.";

export const TRUSTED_BY_LOGOS_PLACEHOLDER: string[] = [
  "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?text=ClientLogo2",
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?text=ClientLogo3",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?text=ClientLogo4",
  "https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?text=ClientLogo5",
];

export const teamMembers = [
  {
    name: "Raj Mishra",
    title: "Lead AI Engineer & Product Officer",
    bio: "Specializes in machine learning model development and deployment in AI/ML solutions.",
    image: "https://media.licdn.com/dms/image/v2/D5635AQHVvQ-MgeiV5w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1734343883018?e=1750104000&v=beta&t=IZTJeUGXwdSbYEm0EjxdPj9wE65zd8qaw9aBNl1U6pE", 
    linkedin: "https://www.linkedin.com/in/raj-mishra-51a3732a0/",
    github: "https://github.com/Raj-Mgif"
  },
  {
    name: "Ankit Kushwaha", 
    title: "Backend & Infrastructure Engineer",
    bio: "Expert in React, Node.js, and cloud architecture. Passionate about building scalable web applications and AI integrations.",
    image: "https://avatars.githubusercontent.com/u/119472022?v=4", 
    linkedin: "https://www.linkedin.com/in/ankit-kushwaha-013647259/",
    github: "https://github.com/Ankitkushwaha90"
  },

];
