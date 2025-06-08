
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import { ROUTES } from './constants';
import { ThemeProvider } from './contexts/ThemeContext';
import AiChatbot from './components/AiChatbot'; // New import

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-darker transition-colors duration-300 ease-in-out">
          <Navbar />
          <main className="flex-grow transition-colors duration-300 ease-in-out">
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
              <Route path={ROUTES.PORTFOLIO} element={<PortfolioPage />} />
              <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
              <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <AiChatbot /> {/* Replaced ChatbotFabPlaceholder */}
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
