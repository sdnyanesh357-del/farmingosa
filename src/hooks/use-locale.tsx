import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '../types';

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: any) => string;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

import { translations } from '../lib/i18n';

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('sb_agro_locale');
      if (saved === 'en' || saved === 'hi') {
        return saved;
      }
    } catch (e) {
      // Ignored for SSR or safe environment
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('sb_agro_locale', newLocale);
    } catch (e) {
      // Ignored
    }
  };

  const t = (key: keyof typeof translations['en']): string => {
    const dict = translations[locale] || translations['en'];
    return (dict as any)[key] || (translations['en'] as any)[key] || String(key);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
