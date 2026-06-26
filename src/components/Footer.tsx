import React from 'react';
import { useLocale } from '../hooks/use-locale';
import { Tractor, Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { locale, t } = useLocale();

  const handlePageClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-dark text-gray-300 border-t border-earth-slate pt-16 pb-8" id="corporate-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Col 1: Bio (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handlePageClick('home')}>
            <div className="bg-brand-red text-white p-2 rounded-lg">
              <Tractor className="h-5 w-5" />
            </div>
            <span className="font-display text-2xl font-black text-white tracking-tight">
              SB <span className="text-brand-red">Agrotech</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
            {t('footerDesc')}
          </p>
          
          {/* Socials */}
          <div className="flex space-x-3 pt-2">
            <a href="https://facebook.com" target="_blank" referrerPolicy="no-referrer" className="p-2 bg-earth-slate rounded-lg hover:bg-brand-red hover:text-white transition-colors text-gray-400">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" referrerPolicy="no-referrer" className="p-2 bg-earth-slate rounded-lg hover:bg-brand-red hover:text-white transition-colors text-gray-400">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" referrerPolicy="no-referrer" className="p-2 bg-earth-slate rounded-lg hover:bg-brand-red hover:text-white transition-colors text-gray-400">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" referrerPolicy="no-referrer" className="p-2 bg-earth-slate rounded-lg hover:bg-brand-red hover:text-white transition-colors text-gray-400">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] border-b border-white/5 pb-2">
            {t('quickLinks')}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-sans font-semibold">
            <li>
              <button onClick={() => handlePageClick('home')} className="hover:text-brand-red transition-all text-left">
                {t('home')}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('products')} className="hover:text-brand-red transition-all text-left">
                {t('products')}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('about')} className="hover:text-brand-red transition-all text-left">
                {t('about')}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('contact')} className="hover:text-brand-red transition-all text-left">
                {t('contact')}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Core Catalog items (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] border-b border-white/5 pb-2">
            {t('coreCatalog')}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-400">
            <li>
              <button onClick={() => handlePageClick('products')} className="hover:text-brand-red transition-all text-left text-xs">
                {locale === 'en' ? 'SB-55 Pro Tractors' : 'एसबी-55 प्रो ट्रैक्टर'}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('products')} className="hover:text-brand-red transition-all text-left text-xs">
                {locale === 'en' ? 'SB Rotavator Extreme Series' : 'एसबी रोटावेटर एक्सट्रीम श्रृंखला'}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('products')} className="hover:text-brand-red transition-all text-left text-xs">
                {locale === 'en' ? 'SB SeedMaster Drills' : 'एसबी सीडमास्टर मशीनें'}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('products')} className="hover:text-brand-red transition-all text-left text-xs">
                {locale === 'en' ? 'SB-90 Heavy Combine Harvester' : 'एसबी-90 कंबाइन हार्वेस्टर'}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Business support links (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] border-b border-white/5 pb-2">
            {t('businessSupport')}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-400">
            <li>
              <button onClick={() => handlePageClick('contact')} className="hover:text-brand-red transition-all text-left font-bold text-white text-xs">
                {t('dealerships')}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('contact')} className="hover:text-brand-red transition-all text-left text-xs">
                {t('partsCatalog')}
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick('contact')} className="hover:text-brand-red transition-all text-left text-xs">
                {t('warranty')}
              </button>
            </li>
            <li className="pt-2 flex items-center space-x-1 text-xs text-gray-500 font-sans">
              <MapPin className="h-3.5 w-3.5 text-brand-red" />
              <span>Rajkot, Gujarat, India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Corporate bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-earth-slate pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>
          &copy; {currentYear} SB Agrotech. {t('rightsReserved')}
        </p>
        <p className="font-mono">
          {locale === 'en' ? 'ISO 9001:2015 REGISTERED' : 'आईएसओ 9001:2015 प्रमाणित'}
        </p>
      </div>
    </footer>
  );
};
