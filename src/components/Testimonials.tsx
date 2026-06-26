import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/use-locale';
import { testimonialsData } from '../lib/products-data';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { locale, t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];
  const farmerName = locale === 'hi' ? current.nameHi : current.nameEn;
  const farmerLoc = locale === 'hi' ? current.locationHi : current.locationEn;
  const farmerCrop = locale === 'hi' ? current.cropHi : current.cropEn;
  const farmerText = locale === 'hi' ? current.textHi : current.textEn;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="customer-testimonials">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
            {locale === 'en' ? 'FARMER VOICES' : 'किसानों की आवाज'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {t('testimonialTitle')}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto my-3 rounded-full"></div>
          <p className="text-base text-gray-500 font-sans leading-relaxed">
            {t('testimonialSub')}
          </p>
        </div>

        {/* Side-by-Side Card Frame */}
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-0" id="testimonials-card">
          
          {/* Left: Farmer Image Sidebar (5 cols) */}
          <div className="col-span-1 md:col-span-5 relative h-72 md:h-auto bg-earth-dark overflow-hidden min-h-[340px]">
            <img
              src={current.avatar}
              alt={farmerName}
              className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.02] transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>

            {/* Verification & Crop badge info */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center space-x-1.5 bg-brand-red text-white text-[9px] font-bold uppercase tracking-[0.15em] py-1 px-2.5 rounded-full w-max">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{locale === 'en' ? 'Verified Purchaser' : 'प्रमाणित ग्राहक'}</span>
              </div>
              <h4 className="text-2xl font-display font-bold leading-tight">
                {farmerName}
              </h4>
              <p className="text-xs text-gray-300 font-sans font-medium">
                {farmerLoc}
              </p>
              
              <div className="border-t border-white/20 pt-2.5 mt-2 flex justify-between text-[11px] font-bold text-brand-red uppercase tracking-wider">
                <span>{locale === 'en' ? 'Primary Crop' : 'मुख्य फसल'}:</span>
                <span className="text-white font-medium">{farmerCrop}</span>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Quote panel (7 cols) */}
          <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-white relative">
            <div className="absolute top-8 right-8 text-brand-red/5">
              <Quote className="h-32 w-32 stroke-[1px]" />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Star Rating */}
              <div className="flex space-x-1 text-brand-gold">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold stroke-none" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-display font-medium text-gray-800 leading-relaxed italic">
                "{farmerText}"
              </blockquote>
            </div>

            {/* Carousel navigation and footer details */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-150 relative z-10">
              <div>
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest block">
                  {farmerName}
                </span>
                <span className="text-xs text-gray-400 font-sans font-semibold mt-0.5 block">
                  {farmerLoc}
                </span>
              </div>

              {/* Left Right Triggers */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-brand-red hover:text-white border border-gray-200 text-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                  id="testimonial-prev"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-brand-red hover:text-white border border-gray-200 text-gray-600 transition-colors"
                  aria-label="Next testimonial"
                  id="testimonial-next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
