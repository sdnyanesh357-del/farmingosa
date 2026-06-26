import React from 'react';
import { useLocale } from '../hooks/use-locale';
import { milestonesData } from '../lib/products-data';
import { Award, Briefcase, Calendar, Globe, MapPin, Users, Hammer, ShieldAlert } from 'lucide-react';

export const About: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <section className="py-16 md:py-24 bg-white" id="corporate-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Legacy Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20" id="about-legacy-grid">
          
          {/* Text block (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
              {locale === 'en' ? 'OUR HERITAGE' : 'हमारी विरासत'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {t('aboutTitle')}
            </h2>
            <div className="h-1.5 w-16 bg-brand-red rounded-full"></div>
            
            <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              {t('aboutIntro')}
            </p>
            
            <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
              {locale === 'en' 
                ? 'SB Agrotech has always pushed the boundaries of durability. From the Rajkot tooling forge to heavy-industry robotics assembly, we stand beside our farmers. Every seam, weld, and gearbox is engineered for heavy soil penetration so that food growers can work their acreage with complete mechanical confidence.'
                : 'एसबी एग्रोटेक ने हमेशा विनिर्माण की सीमाओं को बढ़ाया है। राजकोट के छोटे कारखाने से लेकर भारी रोबोटिक वेल्डिंग लाइनों तक, हम अपने किसानों के साथ खड़े हैं। प्रत्येक सीम, वेल्ड और गियरबॉक्स को मिट्टी की गहरी जुताई के लिए इंजीनियर किया गया है ताकि हमारे अन्नदाता पूर्ण विश्वास के साथ काम कर सकें।'}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-left">
              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow">
                <Hammer className="h-6 w-6 text-brand-red mb-2" />
                <span className="font-display font-bold text-gray-900 block">
                  {locale === 'en' ? 'Forged with Integrity' : 'अखंड वेल्डिंग सुरक्षा'}
                </span>
                <span className="text-xs text-gray-400 font-sans">
                  {locale === 'en' ? 'Boron steel heat treats' : 'बोरोन स्टील शॉक ट्रीटमेंट'}
                </span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow">
                <Award className="h-6 w-6 text-brand-red mb-2" />
                <span className="font-display font-bold text-gray-900 block">
                  {locale === 'en' ? 'Certified Quality' : 'आईएसओ प्रमाणित'}
                </span>
                <span className="text-xs text-gray-400 font-sans">
                  {locale === 'en' ? 'ISO 9001:2015 Approved' : 'आईएसओ मानकों के अनुसार'}
                </span>
              </div>
            </div>
          </div>

          {/* Factsheet Card (5 columns) */}
          <div className="lg:col-span-5" id="factsheet-card">
            <div className="bg-gradient-agro text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border border-earth-slate">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-red/10 rounded-full filter blur-xl"></div>
              
              <h3 className="font-display text-2xl font-bold uppercase tracking-[0.12em] border-b border-white/10 pb-4 mb-6 flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-brand-red" />
                <span>{t('factsheetTitle')}</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 font-bold uppercase tracking-[0.12em]">
                    <Calendar className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{t('establishedYear')}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{t('factsheet1')}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 font-bold uppercase tracking-[0.12em]">
                    <MapPin className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{t('factoryLocation')}</span>
                  </div>
                  <span className="text-xs font-semibold text-white text-right max-w-[200px]">{t('factsheet2')}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 font-bold uppercase tracking-[0.12em]">
                    <Users className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{t('workforceSize')}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{t('factsheet3')}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 font-bold uppercase tracking-[0.12em]">
                    <Globe className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{t('exportMarkets')}</span>
                  </div>
                  <span className="text-xs font-semibold text-white text-right max-w-[180px]">{t('factsheet4')}</span>
                </div>
              </div>

              {/* Security Alert Badge */}
              <div className="bg-white/10 p-4 rounded-xl mt-8 flex items-start space-x-3 text-xs border border-white/5">
                <ShieldAlert className="h-5 w-5 text-brand-red shrink-0" />
                <p className="text-gray-300 font-sans leading-relaxed">
                  {locale === 'en' 
                    ? 'All SB Agrotech units are equipped with carbon neutral waste filtration systems for soil safety.' 
                    : 'मिट्टी की सुरक्षा के लिए एसबी एग्रोटेक के सभी उत्पादन संयत्र अपशिष्ट जल निस्पंदन प्रणालियों से लैस हैं।'}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Alternating Milestones Timeline */}
        <div className="mt-24" id="corporate-milestones">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              {t('milestonesTitle')}
            </h3>
            <div className="h-1 w-12 bg-brand-red mx-auto my-2 rounded-full"></div>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative max-w-5xl mx-auto px-4">
            
            {/* Center vertical bar (Desktop-only) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>

            {/* Alternating Cards */}
            <div className="space-y-12 relative" id="timeline-cards-container">
              {milestonesData.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                const mTitle = locale === 'hi' ? milestone.titleHi : milestone.titleEn;
                const mDesc = locale === 'hi' ? milestone.descHi : milestone.descEn;

                return (
                  <div 
                    key={milestone.year} 
                    className={`flex flex-col md:flex-row items-stretch md:items-center relative ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Date Sphere Node on center bar */}
                    <div className="absolute left-6 md:left-1/2 top-4 md:top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-red z-20 flex items-center justify-center -translate-x-1/2 shadow-sm font-sans font-black text-[10px] text-brand-red">
                      {idx + 1}
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                    }`}>
                      <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative">
                        
                        {/* Year Badge */}
                        <span className="inline-block bg-brand-red text-white text-xs font-bold font-mono px-3.5 py-1 rounded-lg mb-3 tracking-wider">
                          {milestone.year}
                        </span>

                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {mTitle}
                        </h4>

                        <p className="text-sm text-gray-400 font-sans leading-relaxed">
                          {mDesc}
                        </p>

                      </div>
                    </div>

                    {/* Space filler columns (Desktop-only empty col on opposite side) */}
                    <div className="hidden md:block w-1/2"></div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
