import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/use-locale';
import { ShieldCheck, Cpu, Clock, Landmark, Users, Award, Tractor, Settings } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { locale, t } = useLocale();

  // Decorative counting state simulation
  const [counts, setCounts] = useState({
    farmers: 180,
    units: 30,
    awards: 1,
    years: 5
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({
        farmers: 250,
        units: 40,
        awards: 15,
        years: 35
      });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      id: 'farmers',
      value: locale === 'en' ? `${counts.farmers}K+` : `${counts.farmers / 100} लाख+`,
      label: t('farmersServed'),
      icon: Users
    },
    {
      id: 'units',
      value: `${counts.units}K+`,
      label: t('unitsProduced'),
      icon: Tractor
    },
    {
      id: 'awards',
      value: `${counts.awards}+`,
      label: t('awardsWon'),
      icon: Award
    },
    {
      id: 'years',
      value: `${counts.years}+`,
      label: t('expYears'),
      icon: Settings
    }
  ];

  const features = [
    {
      id: 1,
      title: t('feat1Title'),
      desc: t('feat1Desc'),
      icon: ShieldCheck,
      isRed: false
    },
    {
      id: 2,
      title: t('feat2Title'),
      desc: t('feat2Desc'),
      icon: Cpu,
      isRed: false
    },
    {
      id: 3,
      title: t('feat3Title'),
      desc: t('feat3Desc'),
      icon: Clock,
      isRed: true // Red background as requested
    },
    {
      id: 4,
      title: t('feat4Title'),
      desc: t('feat4Desc'),
      icon: Landmark,
      isRed: true // Red background as requested
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD] relative overflow-hidden" id="why-choose-us">
      {/* Decorative Blur Spheres */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
            {locale === 'en' ? 'ENGINEERING TRUST' : 'भरोसेमंद इंजीनियरिंग'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {t('whyChooseTitle')}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            {t('whyChooseSub')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16" id="stats-grid">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-gray-200 transition-all group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-red-light text-brand-red mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold font-display text-gray-900 group-hover:text-brand-red transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-[0.15em] mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="features-grid">
          {features.map((feat) => {
            const Icon = feat.icon;
            if (feat.isRed) {
              return (
                <div 
                  key={feat.id} 
                  className="bg-gradient-accent text-white p-8 md:p-10 rounded-2xl shadow-xl border border-brand-red/10 flex flex-col justify-between hover:scale-[1.01] transition-all"
                >
                  <div>
                    <div className="bg-white/15 text-white p-3.5 rounded-xl inline-flex mb-6 border border-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-display tracking-tight mb-3 text-white">
                      {feat.title}
                    </h3>
                    <p className="text-sm sm:text-base text-red-50 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-white/20 pt-4 flex items-center justify-between text-xs font-bold tracking-[0.15em] uppercase text-red-100">
                    <span>{locale === 'en' ? 'Included Service' : 'सेवा शामिल है'}</span>
                    <span>✓</span>
                  </div>
                </div>
              );
            } else {
              return (
                <div 
                  key={feat.id} 
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="bg-brand-red-light text-brand-red p-3.5 rounded-xl inline-flex mb-6 border border-brand-red/5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-display tracking-tight mb-3 text-gray-900">
                      {feat.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-bold text-brand-red tracking-[0.15em] uppercase">
                    <span>{locale === 'en' ? 'Quality Standard' : 'गुणवत्ता मानक'}</span>
                    <span className="text-gray-400">ISO Certified</span>
                  </div>
                </div>
              );
            }
          })}
        </div>

      </div>
    </section>
  );
};
