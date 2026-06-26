import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/use-locale';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { locale, t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      id: "gallery-1",
      url: "https://images.unsplash.com/photo-1486754735734-325b58645962?auto=format&fit=crop&q=80&w=1200",
      captionEn: "Precision Laser Cutting & Robotic Welding Assembly",
      captionHi: "सटीक लेजर कटिंग और रोबोटिक वेल्डिंग असेंबली लाइन"
    },
    {
      id: "gallery-2",
      url: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=1200",
      captionEn: "On-Farm Implement Integration & Mechanical Alignment Testing",
      captionHi: "खेत पर उपकरण एकीकरण और यांत्रिक संरेखण परीक्षण"
    },
    {
      id: "gallery-3",
      url: "https://images.unsplash.com/photo-1594140733857-e11b6518cb43?auto=format&fit=crop&q=80&w=1200",
      captionEn: "Rugged Off-Road Durability & Slope Stress Testing Tracks",
      captionHi: "कठिन ऑफ-रोड स्थायित्व और ढलान तनाव परीक्षण ट्रैक"
    },
    {
      id: "gallery-4",
      url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=1200",
      captionEn: "SB-90 Harvester Operations in Golden Wheat Fields",
      captionHi: "स्वर्ण गेहूं के खेतों में एसबी-90 हार्वेस्टर का सफल संचालन"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD] border-y border-gray-100" id="media-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
            {locale === 'en' ? 'OUR VISUAL STORY' : 'हमारी दृश्य कहानी'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {locale === 'en' ? 'Manufacturing Excellence in Action' : 'विनिर्माण उत्कृष्टता का प्रदर्शन'}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto my-3 rounded-full"></div>
        </div>

        {/* Carousel Framework */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-earth-dark max-w-5xl mx-auto border border-gray-100" id="gallery-carousel">
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] w-full overflow-hidden">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-98 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={item.url}
                  alt={locale === 'en' ? item.captionEn : item.captionHi}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Caption card */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-left text-white z-20 flex items-center space-x-4 bg-black/40 backdrop-blur-md border-t border-white/10">
                  <div className="bg-brand-red p-3 rounded-xl shrink-0">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl font-bold font-sans tracking-wide">
                      {locale === 'en' ? item.captionEn : item.captionHi}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-brand-red tracking-[0.2em] mt-1">
                      {locale === 'en' ? `SB Agrotech Gujarat - Unit ${index + 1}` : `एसबी एग्रोटेक गुजरात - इकाई ${index + 1}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-brand-red text-white p-2.5 sm:p-3.5 rounded-full border border-white/15 transition-colors backdrop-blur-sm"
            aria-label="Previous gallery image"
            id="gallery-prev-btn"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-brand-red text-white p-2.5 sm:p-3.5 rounded-full border border-white/15 transition-colors backdrop-blur-sm"
            aria-label="Next gallery image"
            id="gallery-next-btn"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Thumbnail Selector Indicator bar */}
        <div className="flex justify-center space-x-2.5 mt-6" id="gallery-dots">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-brand-red' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to gallery image ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
