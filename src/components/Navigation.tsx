import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/use-locale';
import { Menu, X, Tractor, Globe, MessageSquare } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'hi' : 'en');
  };

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'products', label: t('products') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('contact') },
    { id: 'concierge', label: t('concierge'), highlight: true }
  ];

  const handlePageClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsappMsg = encodeURIComponent(
    locale === 'hi' 
      ? 'नमस्ते एसबी एग्रोटेक! मुझे आधुनिक कृषि उपकरणों की जानकारी चाहिए।' 
      : 'Hello SB Agrotech! I would like to enquire about your modern farming machinery.'
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-3 border-b border-gray-100' 
        : 'bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-5'
    }`} id="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            onClick={() => handlePageClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="bg-brand-red text-white p-2 rounded-lg shadow-sm group-hover:bg-brand-red-hover transition-colors">
              <Tractor className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-2xl font-black text-brand-red tracking-tight uppercase">
                SB AGROTECH
              </span>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 -mt-0.5 font-sans">
                {locale === 'en' ? 'Quality Unmatched' : 'सर्वोत्तम गुणवत्ता'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-menu">
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageClick(item.id)}
                  className={`transition-colors py-2 px-1 relative ${
                    currentPage === item.id
                      ? 'text-brand-red font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red'
                      : 'hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-200"></div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="font-sans text-xs font-bold text-gray-600 px-3 py-1.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors uppercase tracking-widest"
              title="Change Language"
              id="desktop-lang-switch"
            >
              <span>{locale === 'en' ? 'HINDI' : 'ENGLISH'}</span>
            </button>

            {/* Quick Enquire Button */}
            <a
              href={`https://wa.me/919999999999?text=${defaultWhatsappMsg}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-brand-red text-white px-6 py-3 rounded-full text-xs font-bold shadow-lg shadow-red-900/10 hover:bg-brand-red-hover transition-all uppercase tracking-wider"
              id="desktop-enquire-wa"
            >
              <span>{t('enquireNow')}</span>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-2 md:hidden" id="mobile-controls">
            {/* Language Button on Mobile Navbar directly */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-earth-dark bg-gray-100 rounded-md border border-gray-200"
              title="Change Language"
            >
              <Globe className="h-5 w-5 text-brand-red" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex" id="mobile-menu-drawer">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="relative flex flex-col w-full max-w-xs ml-auto h-full bg-white shadow-2xl p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <Tractor className="h-6 w-6 text-brand-red" />
                <span className="font-display text-xl font-bold text-earth-dark">SB Agrotech</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md bg-gray-100 text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageClick(item.id)}
                  className={`text-left font-sans text-base font-bold p-3 rounded-md ${
                    currentPage === item.id
                      ? item.highlight
                        ? 'bg-brand-red text-white'
                        : 'bg-brand-red-light text-brand-red border-l-4 border-brand-red'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-6 border-t border-gray-100 mt-6 space-y-4">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 font-sans font-bold bg-gray-100 py-3 rounded-md"
                >
                  <Globe className="h-4 w-4 text-brand-red" />
                  <span>{locale === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}</span>
                </button>

                <a
                  href={`https://wa.me/919999999999?text=${defaultWhatsappMsg}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-red text-white font-bold py-3 rounded-md shadow-md"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{t('enquireNow')} (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
