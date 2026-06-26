import React, { useState } from 'react';
import { useLocale } from '../hooks/use-locale';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { locale, t } = useLocale();
  const [showTooltip, setShowTooltip] = useState(false);

  const msgText = encodeURIComponent(
    locale === 'hi'
      ? 'नमस्ते एसबी एग्रोटेक! मुझे आधुनिक ट्रैक्टर और रोटावेटर की जानकारी चाहिए।'
      : 'Hello SB Agrotech! I am interested in learning more about your machinery catalogue.'
  );

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      id="floating-whatsapp-container"
    >
      {/* Tooltip text bubble */}
      <div 
        className={`bg-earth-dark text-white text-xs font-sans font-bold py-2 px-3 rounded-xl shadow-lg mr-3 transition-all duration-300 pointer-events-none whitespace-nowrap border border-earth-slate ${
          showTooltip 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-4'
        }`}
      >
        {locale === 'en' ? 'Enquire on WhatsApp' : 'व्हाट्सएप पर पूछें'}
      </div>

      {/* Pulsing button */}
      <a
        href={`https://wa.me/919999999999?text=${msgText}`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative bg-gradient-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulse-slow flex items-center justify-center border-2 border-white/20"
        aria-label="Contact SB Agrotech on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        
        {/* Outer Ring badge indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold"></span>
        </span>
      </a>
    </div>
  );
};
