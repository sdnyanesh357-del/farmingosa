import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/use-locale';
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const { locale, t } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
      titleKey: "heroTitle1",
      descKey: "heroDesc1",
      cta: "products",
      ctaLabel: "products"
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594140733857-e11b6518cb43?auto=format&fit=crop&q=80&w=1600",
      titleKey: "heroTitle2",
      descKey: "heroDesc2",
      cta: "concierge",
      ctaLabel: "concierge",
      badge: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1600",
      titleKey: "heroTitle3",
      descKey: "heroDesc3",
      cta: "contact",
      ctaLabel: "contact"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const defaultWhatsappMsg = encodeURIComponent(
    locale === 'hi' 
      ? 'नमस्ते एसबी एग्रोटेक! मुझे आधुनिक कृषि उपकरणों की जानकारी चाहिए।' 
      : 'Hello SB Agrotech! I would like to enquire about your modern farming machinery.'
  );

  return (
    <div className="relative h-[85vh] sm:h-[90vh] md:h-[92vh] w-full overflow-hidden bg-earth-dark pt-16" id="hero-slider">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={t(slide.titleKey as any)}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out filter brightness-[0.45]"
            referrerPolicy="no-referrer"
          />

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/90 via-transparent to-transparent"></div>

          {/* Content Card */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-left text-white space-y-6 relative">
                <div className="w-20 h-1 bg-brand-red"></div>
                <span className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase block">
                  {locale === 'en' ? 'Precision Engineering for Bharat' : 'भारत के लिए परिशुद्ध इंजीनियरिंग'}
                </span>
                
                {slide.badge && (
                  <div className="inline-flex items-center space-x-2 bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg border border-red-500/20 animate-pulse">
                    <Sparkles className="h-3 w-3" />
                    <span>{locale === 'en' ? 'AI SENSING TECH' : 'एआई सेंसिंग तकनीक'}</span>
                  </div>
                )}

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1]">
                  {t(slide.titleKey as any).split(' ').map((word, wIdx) => {
                    const isLast = wIdx === t(slide.titleKey as any).split(' ').length - 1;
                    return (
                      <span key={wIdx} className={isLast ? 'text-brand-red' : ''}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans font-medium max-w-xl">
                  {t(slide.descKey as any)}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    onClick={() => {
                      setCurrentPage(slide.cta);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center justify-center space-x-2 font-sans font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                      slide.cta === 'concierge' 
                        ? 'bg-brand-red text-white hover:bg-brand-red-hover' 
                        : 'bg-white text-earth-dark hover:bg-gray-100'
                    }`}
                  >
                    <span className="uppercase tracking-wider text-xs">{t(slide.ctaLabel as any)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={`https://wa.me/919999999999?text=${defaultWhatsappMsg}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center space-x-2 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-sans font-bold py-4 px-8 rounded-xl transition-colors uppercase tracking-wider text-xs"
                  >
                    <span>{locale === 'en' ? 'WhatsApp Chat' : 'व्हाट्सएप चैट'}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Nav Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-red text-white p-2.5 rounded-full backdrop-blur-sm transition-colors border border-white/10"
        aria-label="Previous Slide"
        id="hero-prev-btn"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-red text-white p-2.5 rounded-full backdrop-blur-sm transition-colors border border-white/10"
        aria-label="Next Slide"
        id="hero-next-btn"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5" id="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-brand-red' : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
