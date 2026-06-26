/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LocaleProvider, useLocale } from './hooks/use-locale';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductGrid } from './components/ProductGrid';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GearConcierge } from './components/GearConcierge';
import { Footer } from './components/Footer';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const { locale, t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-brand-red selection:text-white" id="sb-agrotech-app-root">
      
      {/* Dynamic Sticky Header */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fade-in-up" id="page-home">
            <Hero setCurrentPage={setCurrentPage} />
            
            {/* Introductory Teaser Section */}
            <section className="py-12 bg-white text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-black font-display text-earth-dark uppercase tracking-tight">
                  {t('tagline')}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-sans mt-3 leading-relaxed">
                  {locale === 'en' 
                    ? 'SB Agrotech has been delivering world-class tilling, seeding, and harvesting implements directly to commercial farms since 1991. Engineered in Gujarat, built for the global food grid.'
                    : 'एसबी एग्रोटेक 1991 से सीधे वाणिज्यिक खेतों में विश्व स्तरीय जुताई, बुवाई और कटाई के उपकरण वितरित कर रहा है। गुजरात में निर्मित, वैश्विक खाद्य ग्रिड के लिए तैयार।'}
                </p>
              </div>
            </section>

            <WhyChooseUs />
            <Gallery />
            <Testimonials />
          </div>
        )}

        {currentPage === 'products' && (
          <div className="animate-fade-in-up pt-12" id="page-products">
            <ProductGrid />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-fade-in-up pt-12" id="page-about">
            <About />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fade-in-up pt-12" id="page-contact">
            <Contact />
          </div>
        )}

        {currentPage === 'concierge' && (
          <div className="animate-fade-in-up pt-12" id="page-concierge">
            <GearConcierge setCurrentPage={setCurrentPage} />
          </div>
        )}
      </main>

      {/* Global Interactive Floating WhatsApp Pulsator */}
      <FloatingWhatsApp />

      {/* Corporate footer maps */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}
