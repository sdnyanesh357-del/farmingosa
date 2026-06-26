import React, { useState } from 'react';
import { useLocale } from '../hooks/use-locale';
import { MapPin, Phone, Mail, Clock, MessageSquare, Landmark, CheckCircle, AlertTriangle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { locale, t } = useLocale();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general' // general, service, dealership
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    // Simulate submission
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: 'general'
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white relative" id="contact-coordinates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
            {locale === 'en' ? 'DIRECT ACCESS' : 'सीधी पहुंच'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {t('contactTitle')}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto my-3 rounded-full"></div>
          <p className="text-base text-gray-500 font-sans leading-relaxed">
            {t('contactSub')}
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="contact-outer-grid">
          
          {/* Left Column: Factory coordinates & B2B (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters details */}
            <div className="bg-white border border-gray-150 p-8 rounded-2xl space-y-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-3">
                {t('factoryAddress')}
              </h3>

              <div className="space-y-4 font-sans text-sm font-semibold text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-900 font-bold block">SB Agrotech Industrial Facility</span>
                    <span className="text-gray-500 font-medium font-sans">
                      {locale === 'en' 
                        ? 'Plot No. 45-C, GIDC Metoda Sector 3, Rajkot, Gujarat - 360021, India' 
                        : 'प्लॉट नंबर 45-सी, जीआईडीसी मटोडा सेक्टर 3, राजकोट, गुजरात - 360021, भारत'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-red shrink-0" />
                  <div>
                    <span className="text-gray-900 font-bold block">{t('phone')}</span>
                    <a href="tel:+919999999999" className="text-gray-500 font-medium hover:text-brand-red font-mono">+91 99999 99999</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-red shrink-0" />
                  <div>
                    <span className="text-gray-900 font-bold block">{t('email')}</span>
                    <a href="mailto:info@sbagrotech.com" className="text-gray-500 font-medium hover:text-brand-red font-mono">info@sbagrotech.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-red shrink-0" />
                  <div>
                    <span className="text-gray-900 font-bold block">{t('hours')}</span>
                    <span className="text-gray-500 font-medium font-sans">{t('hoursVal')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B card */}
            <div className="bg-gradient-agro text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border border-earth-slate" id="b2b-card">
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-brand-red/10 rounded-full filter blur-xl"></div>
              
              <div className="bg-brand-red text-white p-2.5 rounded-lg inline-flex mb-4">
                <Landmark className="h-5 w-5" />
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-[0.12em] mb-3">
                {t('b2bTitle')}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                {t('b2bDesc')}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-red font-black">EXPORTS & SUPPLY</span>
                <span className="text-white font-bold">b2b@sbagrotech.com</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact/Service inquiry form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-150 p-8 sm:p-10 rounded-2xl shadow-sm" id="contact-form-block">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
                    {t('nameLabel')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full bg-white border border-gray-200 text-gray-900 font-sans font-semibold text-sm py-3 px-4 rounded-xl focus:border-brand-red focus:outline-none transition-colors"
                  />
                </div>

                {/* Type/Purpose */}
                <div className="space-y-1.5">
                  <label htmlFor="type" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
                    {locale === 'en' ? 'Inquiry Type' : 'पूछताछ का प्रकार'}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 text-gray-900 font-sans font-semibold text-sm py-3 px-4 rounded-xl focus:border-brand-red focus:outline-none transition-colors appearance-none"
                  >
                    <option value="general">{locale === 'en' ? 'General Inquiry' : 'सामान्य पूछताछ'}</option>
                    <option value="service">{locale === 'en' ? 'Spare / Machine Service' : 'स्पेयर पार्ट्स / सर्विस सहायता'}</option>
                    <option value="dealership">{locale === 'en' ? 'Dealership Request' : 'डीलरशिप के लिए आवेदन'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
                    {t('phoneLabel')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full bg-white border border-gray-200 text-gray-900 font-sans font-semibold text-sm py-3 px-4 rounded-xl focus:border-brand-red focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
                    {t('emailLabel')} ({locale === 'en' ? 'Optional' : 'वैकल्पिक'})
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full bg-white border border-gray-200 text-gray-900 font-sans font-semibold text-sm py-3 px-4 rounded-xl focus:border-brand-red focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
                  {t('messageLabel')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={locale === 'en' ? 'State your equipment needs or serial support requirements...' : 'अपने आवश्यक कृषि उपकरणों का विवरण या प्रश्न लिखें...'}
                  className="w-full bg-white border border-gray-200 text-gray-900 font-sans font-semibold text-sm py-3 px-4 rounded-xl focus:border-brand-red focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start space-x-3 text-emerald-800 animate-fade-in-up">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-sans font-bold leading-relaxed">
                    {t('contactSuccess')}
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-start space-x-3 text-rose-800 animate-fade-in-up">
                  <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-sans font-bold leading-relaxed">
                    {t('contactError')}
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-accent text-white font-sans font-bold py-3.5 px-6 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center space-x-2 uppercase tracking-wider text-xs"
              >
                <MessageSquare className="h-5 w-5" />
                <span>{t('sendRequest')}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
