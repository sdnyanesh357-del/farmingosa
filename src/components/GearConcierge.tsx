import React, { useState } from 'react';
import { useLocale } from '../hooks/use-locale';
import { ConciergeInput } from '../types';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Tractor, 
  HelpCircle, 
  RotateCcw, 
  CheckCircle, 
  Calendar, 
  Cpu, 
  TrendingUp, 
  MessageSquare,
  Sprout,
  AlertCircle
} from 'lucide-react';

interface GearConciergeProps {
  setCurrentPage: (page: string) => void;
}

export const GearConcierge: React.FC<GearConciergeProps> = ({ setCurrentPage }) => {
  const { locale, t } = useLocale();

  // Multi-step Wizard State
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<ConciergeInput>({
    landSize: '5',
    soilType: 'claySoil',
    cropType: 'wheatCrop',
    budget: 'budgetMid',
    powerAvailability: 'powerMed',
    primaryChallenges: 'challengeLabor'
  });

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof ConciergeInput, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const startAnalysis = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    // Dynamic loading messages cycling
    const messages = locale === 'hi' 
      ? [
          "मिट्टी के सामंजस्य का विश्लेषण किया जा रहा है...",
          "बीज अंतरण वितरण अनुपात की गणना हो रही है...",
          "आपके बजट के लिए सब्सिडी की जांच की जा रही है...",
          "एसबी एग्रोटेक ट्रैक्टर हॉर्सपावर का मिलान किया जा रहा है..."
        ]
      : [
          "Analyzing clay soil shear rates...",
          "Calculating optimal seed spacing ratios...",
          "Matching tractor PTO spline requirements...",
          "Synthesizing high-durability implement config..."
        ];

    let msgIdx = 0;
    setLoadingText(messages[0]);
    const timer = setInterval(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      setLoadingText(messages[msgIdx]);
    }, 1500);

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs, locale })
      });

      if (!response.ok) {
        throw new Error(locale === 'hi' ? 'एआई इंजन से कनेक्ट करने में विफल।' : 'Failed to connect to the AI engine.');
      }

      const data = await response.json();
      setResult(data);
      setStep(4); // Advance to results phase
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected network error occurred.");
    } finally {
      clearInterval(timer);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setInputs({
      landSize: '5',
      soilType: 'claySoil',
      cropType: 'wheatCrop',
      budget: 'budgetMid',
      powerAvailability: 'powerMed',
      primaryChallenges: 'challengeLabor'
    });
    setResult(null);
    setError(null);
    setStep(1);
  };

  const generateQuoteMessage = () => {
    if (!result) return "";
    const nameList = result.implements?.map((i: any) => i.name).join(", ");
    return encodeURIComponent(
      locale === 'hi'
        ? `नमस्ते एसबी एग्रोटेक! मुझे एआई गियर सलाहकार द्वारा सुझाई गई योजना का कोटेशन चाहिए।\n\nअनुशंसित पावर: ${result.tractorHp}\nसुझाए गए उपकरण: ${nameList}\nअपेक्षित लाभ: ${result.roiEstimate}`
        : `Hello SB Agrotech! I would like a pricing quote for the AI-generated farm machinery plan.\n\nRecommended Power: ${result.tractorHp}\nRecommended Implements: ${nameList}\nExpected ROI: ${result.roiEstimate}`
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-16" id="ai-concierge-block">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm relative overflow-hidden mb-8 text-center sm:text-left">
          {/* Decorative sphere */}
          <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-red/5 rounded-full filter blur-xl"></div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 justify-center sm:justify-start">
            <div className="bg-gradient-accent text-white p-3 rounded-2xl shadow-md">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-earth-dark uppercase tracking-tight">
                {t('conciergeTitle')}
              </h2>
              <p className="text-xs uppercase font-bold text-brand-red tracking-widest font-sans mt-0.5">
                {locale === 'en' ? 'VIRTUAL FARMING SYSTEMS EXPERT' : 'वर्चुअल कृषि प्रणाली विशेषज्ञ'}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
            {t('conciergeSub')}
          </p>

          {/* Stepper Status Indicator Bar */}
          {step <= 3 && (
            <div className="mt-8 flex items-center justify-between" id="wizard-stepper">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex-1 flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full font-bold font-mono text-xs transition-all ${
                    step >= num 
                      ? 'bg-brand-red text-white shadow' 
                      : 'bg-gray-100 text-gray-400 border border-gray-200'
                  }`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`flex-1 h-1 mx-3 rounded-full transition-all ${
                      step > num ? 'bg-brand-red' : 'bg-gray-100'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Loading Box */}
        {loading && (
          <div className="bg-gradient-agro text-white p-12 rounded-3xl shadow-xl text-center flex flex-col items-center space-y-6" id="concierge-loader">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-brand-red opacity-75"></span>
              <div className="bg-brand-red text-white p-4 rounded-full shadow-lg relative z-10">
                <Tractor className="h-8 w-8 animate-bounce" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                {locale === 'en' ? 'Consulting Gemini Expert Systems...' : 'जेमिनी विशेषज्ञ प्रणाली से संपर्क जारी...'}
              </h3>
              <p className="text-sm text-gray-400 font-mono italic animate-pulse">
                {loadingText}
              </p>
            </div>

            <div className="w-64 bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-red h-full rounded-full w-2/3 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Error Display Card */}
        {error && !loading && (
          <div className="bg-rose-50 border border-rose-100 p-6 rounded-3xl flex items-start space-x-4 mb-8" id="concierge-error-card">
            <AlertCircle className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-rose-800">
              <h3 className="font-display font-bold text-lg">{locale === 'en' ? 'Analysis Obstruction' : 'विश्लेषण अवरोध'}</h3>
              <p className="text-xs sm:text-sm font-sans leading-relaxed">{error}</p>
              <button 
                onClick={handleReset}
                className="mt-2 text-xs font-bold text-brand-red underline hover:text-brand-red-hover"
              >
                {t('startOver')}
              </button>
            </div>
          </div>
        )}

        {/* Step Modules */}
        {!loading && !error && (
          <div id="wizard-steps-container">
            
            {/* Step 1: Farm Profile */}
            {step === 1 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 animate-fade-in-up">
                <h3 className="font-display text-xl sm:text-2xl font-black text-earth-dark uppercase border-b pb-2">
                  {locale === 'en' ? '1. Your Farm Profile' : '1. आपका कृषि विवरण'}
                </h3>

                {/* Acreage Slider Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                    <label htmlFor="landSize" className="uppercase tracking-wide">{t('landSizeLabel')}</label>
                    <span className="text-brand-red bg-brand-red-light px-2.5 py-1 rounded font-mono font-black">
                      {inputs.landSize} {locale === 'en' ? 'Acres' : 'एकड़'}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="landSize"
                    min="1"
                    max="100"
                    value={inputs.landSize}
                    onChange={(e) => handleInputChange('landSize', e.target.value)}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-red"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 font-mono">
                    <span>1 Acre</span>
                    <span>50 Acres</span>
                    <span>100+ Acres</span>
                  </div>
                </div>

                {/* Soil Types Selector Grid */}
                <div className="space-y-3">
                  <label htmlFor="soilType" className="text-xs font-black text-gray-400 uppercase tracking-wider block">
                    {t('soilTypeLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="soil-selector-grid">
                    {[
                      { id: 'claySoil', label: t('claySoil'), desc: 'Dense, rich, heavy clay' },
                      { id: 'sandySoil', label: t('sandySoil'), desc: 'Dry loam, low water retention' },
                      { id: 'alluvialSoil', label: t('alluvialSoil'), desc: 'Fertile river silt, loose soil' },
                      { id: 'redSoil', label: t('redSoil'), desc: 'Laterite hard gravel crust' }
                    ].map((soil) => (
                      <div
                        key={soil.id}
                        onClick={() => handleInputChange('soilType', soil.id)}
                        className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                          inputs.soilType === soil.id
                            ? 'bg-brand-red-light border-brand-red shadow-sm'
                            : 'bg-white border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <p className="text-sm font-bold text-earth-dark">{soil.label}</p>
                        <p className="text-[10px] text-gray-400 font-sans mt-0.5">{soil.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-brand-red text-white font-sans font-bold py-3 px-6 rounded-xl hover:bg-brand-red-hover hover:shadow transition-colors flex items-center space-x-2"
                  >
                    <span>{t('nextStep')}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Crops & HP Preference */}
            {step === 2 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 animate-fade-in-up">
                <h3 className="font-display text-xl sm:text-2xl font-black text-earth-dark uppercase border-b pb-2">
                  {locale === 'en' ? '2. Crop & Machinery Choices' : '2. फसल एवं मशीनरी विवरण'}
                </h3>

                {/* Primary crops */}
                <div className="space-y-3">
                  <label htmlFor="cropType" className="text-xs font-black text-gray-400 uppercase tracking-wider block">
                    {t('cropTypeLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'wheatCrop', label: t('wheatCrop'), desc: 'Cereals, mustard, and leguminous seeds' },
                      { id: 'riceCrop', label: t('riceCrop'), desc: 'Silt wetlands and deep puddle sowing' },
                      { id: 'cottonCrop', label: t('cottonCrop'), desc: 'Sugarcane, cotton cash stalks' },
                      { id: 'veggiesCrop', label: t('veggiesCrop'), desc: 'Rowed orchards, vineyards and fruit beds' }
                    ].map((crop) => (
                      <div
                        key={crop.id}
                        onClick={() => handleInputChange('cropType', crop.id)}
                        className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                          inputs.cropType === crop.id
                            ? 'bg-brand-red-light border-brand-red shadow-sm'
                            : 'bg-white border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <p className="text-sm font-bold text-earth-dark">{crop.label}</p>
                        <p className="text-[10px] text-gray-400 font-sans mt-0.5">{crop.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HP Preference */}
                <div className="space-y-3">
                  <label htmlFor="powerAvailability" className="text-xs font-black text-gray-400 uppercase tracking-wider block">
                    {t('powerLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'powerLow', label: t('powerLow'), specs: '20 - 35 HP' },
                      { id: 'powerMed', label: t('powerMed'), specs: '35 - 55 HP' },
                      { id: 'powerHigh', label: t('powerHigh'), specs: 'Above 55 HP' }
                    ].map((power) => (
                      <div
                        key={power.id}
                        onClick={() => handleInputChange('powerAvailability', power.id)}
                        className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                          inputs.powerAvailability === power.id
                            ? 'bg-brand-red-light border-brand-red shadow-sm'
                            : 'bg-white border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <p className="text-sm font-bold text-earth-dark">{power.label}</p>
                        <p className="text-xs text-brand-red font-mono font-bold mt-1">{power.specs}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="pt-6 border-t border-gray-100 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-gray-100 hover:bg-gray-200 text-earth-dark font-sans font-bold py-3 px-6 rounded-xl transition-colors flex items-center space-x-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{t('prevStep')}</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-brand-red text-white font-sans font-bold py-3 px-6 rounded-xl hover:bg-brand-red-hover hover:shadow transition-colors flex items-center space-x-2"
                  >
                    <span>{t('nextStep')}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Budget & Farm Bottlenecks */}
            {step === 3 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 animate-fade-in-up">
                <h3 className="font-display text-xl sm:text-2xl font-black text-earth-dark uppercase border-b pb-2">
                  {locale === 'en' ? '3. Budget & Core Impediments' : '3. बजट एवं कृषि चुनौतियां'}
                </h3>

                {/* Budget Range */}
                <div className="space-y-3">
                  <label htmlFor="budget" className="text-xs font-black text-gray-400 uppercase tracking-wider block">
                    {t('budgetLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'budgetBasic', label: t('budgetBasic'), bracket: '< 4L' },
                      { id: 'budgetMid', label: t('budgetMid'), bracket: '4 - 8L' },
                      { id: 'budgetPremium', label: t('budgetPremium'), bracket: '> 8L' }
                    ].map((bud) => (
                      <div
                        key={bud.id}
                        onClick={() => handleInputChange('budget', bud.id)}
                        className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                          inputs.budget === bud.id
                            ? 'bg-brand-red-light border-brand-red shadow-sm'
                            : 'bg-white border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <p className="text-xs font-bold text-gray-500">{bud.label}</p>
                        <p className="text-sm text-brand-red font-mono font-black mt-1">{bud.bracket}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impediment selection */}
                <div className="space-y-3">
                  <label htmlFor="primaryChallenges" className="text-xs font-black text-gray-400 uppercase tracking-wider block">
                    {t('challengesLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'challengeWeeds', label: t('challengeWeeds'), icon: Sprout },
                      { id: 'challengeWater', label: t('challengeWater'), icon: AlertCircle },
                      { id: 'challengeLabor', label: t('challengeLabor'), icon: HelpCircle },
                      { id: 'challengeSowing', label: t('challengeSowing'), icon: Cpu }
                    ].map((chal) => (
                      <div
                        key={chal.id}
                        onClick={() => handleInputChange('primaryChallenges', chal.id)}
                        className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex items-start space-x-3 ${
                          inputs.primaryChallenges === chal.id
                            ? 'bg-brand-red-light border-brand-red shadow-sm'
                            : 'bg-white border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <chal.icon className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-earth-dark leading-snug">{chal.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stepper buttons */}
                <div className="pt-6 border-t border-gray-100 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-gray-100 hover:bg-gray-200 text-earth-dark font-sans font-bold py-3 px-6 rounded-xl transition-colors flex items-center space-x-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{t('prevStep')}</span>
                  </button>
                  <button
                    onClick={startAnalysis}
                    className="bg-brand-red text-white font-sans font-bold py-3.5 px-8 rounded-xl hover:bg-brand-red-hover hover:shadow-lg transition-transform active:scale-95 flex items-center space-x-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>{t('calcRecommendation')}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: AI Recommendations Results Dashboard */}
            {step === 4 && result && (
              <div className="space-y-6 animate-fade-in-up" id="ai-concierge-results">
                
                {/* Result bio card */}
                <div className="bg-gradient-agro text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-earth-slate relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-44 h-44 bg-brand-red/15 rounded-full filter blur-2xl"></div>
                  
                  <div className="flex items-center space-x-2.5 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full w-max mb-6">
                    <CheckCircle className="h-4 w-4" />
                    <span>{locale === 'en' ? 'SENSING INTELLIGENCE COMPLETE' : 'एआई विश्लेषण सफलतापूर्वक पूर्ण'}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight uppercase">
                    {t('conciergeResultTitle')}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-1 uppercase tracking-wider">{t('conciergeResultSub')}</p>
                  
                  {/* Matching parameters summaries */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-left">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{locale === 'en' ? 'Acreage' : 'भूमि का आकार'}</span>
                      <p className="text-sm font-black font-mono text-white mt-0.5">{inputs.landSize} {locale === 'en' ? 'Acres' : 'एकड़'}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{locale === 'en' ? 'Soil Category' : 'मिट्टी'}</span>
                      <p className="text-sm font-black text-white mt-0.5 truncate">{t(inputs.soilType as any)}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{locale === 'en' ? 'Sowing Crop' : 'फसल'}</span>
                      <p className="text-sm font-black text-white mt-0.5 truncate">{t(inputs.cropType as any)}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{locale === 'en' ? 'Target Budget' : 'बजट ब्रैकेट'}</span>
                      <p className="text-sm font-black text-white mt-0.5 truncate">{t(inputs.budget as any).split(' ')[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Primary Recommendation: Tractor match & reason */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-left space-y-4">
                  <h4 className="font-display text-2xl font-black text-earth-dark uppercase border-b pb-2 flex items-center space-x-2">
                    <Tractor className="h-6 w-6 text-brand-red" />
                    <span>{locale === 'en' ? '1. Core Tractor Specification' : '1. मुख्य ट्रैक्टर विशिष्टता'}</span>
                  </h4>

                  <div className="p-4 bg-brand-red-light rounded-2xl inline-block">
                    <span className="text-xs font-black text-brand-red uppercase tracking-widest block">{locale === 'en' ? 'Recommended Power' : 'अनुशंसित शक्ति'}</span>
                    <span className="font-display text-3xl font-black text-brand-red mt-1 block">{result.tractorHp}</span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                    {result.tractorReason}
                  </p>
                </div>

                {/* Secondary Recommendations: Attachment implements cards list */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-left space-y-6">
                  <h4 className="font-display text-2xl font-black text-earth-dark uppercase border-b pb-2 flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-brand-red" />
                    <span>{locale === 'en' ? '2. Matching Attachments & Implements' : '2. सुझाई गई मशीनरी और रोटावेटर'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="concierge-implements-list">
                    {result.implements?.map((imp: any, idx: number) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-gray-100 p-5 rounded-2xl space-y-3 hover:border-brand-red/20 transition-all">
                        <span className="text-[10px] font-bold bg-brand-red text-white px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                          {locale === 'en' ? 'MODEL MATCH' : 'मॉडल मिलान'}
                        </span>
                        
                        <h5 className="font-display text-lg font-black text-earth-dark">
                          {imp.name}
                        </h5>

                        <div className="space-y-1 text-xs font-sans text-gray-600 leading-relaxed">
                          <p><strong className="text-earth-dark">{locale === 'en' ? 'Purpose' : 'उद्देश्य'}:</strong> {imp.purpose}</p>
                          <p><strong className="text-brand-red">{locale === 'en' ? 'Expected Benefit' : 'अपेक्षित परिणाम'}:</strong> {imp.expectedBenefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline calendar */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-left space-y-6">
                  <h4 className="font-display text-2xl font-black text-earth-dark uppercase border-b pb-2 flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-brand-red" />
                    <span>{locale === 'en' ? '3. Machinery Crop Calendar Plan' : '3. उपकरण संचालन क्रॉप कैलेंडर'}</span>
                  </h4>

                  <div className="space-y-4" id="concierge-crop-calendar">
                    {result.timeline?.map((time: any, idx: number) => (
                      <div key={idx} className="flex space-x-4 border-l-2 border-brand-red pl-4 relative">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-brand-red"></div>
                        <div className="space-y-1">
                          <span className="text-xs font-black text-brand-red uppercase tracking-wider block font-mono">
                            {time.stage}
                          </span>
                          <p className="text-sm font-bold text-earth-dark">{time.action}</p>
                          <p className="text-xs text-gray-400 font-sans"><strong className="text-gray-500 font-semibold">{locale === 'en' ? 'Machinery Used' : 'उपयोग की जाने वाली मशीन'}:</strong> {time.machineryUsed}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* expert agronomy advice */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-left space-y-4">
                  <h4 className="font-display text-2xl font-black text-earth-dark uppercase border-b pb-2 flex items-center space-x-2">
                    <Sprout className="h-6 w-6 text-brand-red" />
                    <span>{locale === 'en' ? '4. Expert Agronomy Advice' : '4. विशेषज्ञ कृषि सलाह'}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed italic border-l-4 border-brand-red-light bg-[#FAF9F6] p-4 rounded-r-xl">
                    "{result.expertAdvice}"
                  </p>
                </div>

                {/* Estimated ROI summary */}
                <div className="bg-brand-red-light border border-brand-red/15 rounded-3xl p-8 text-left space-y-3">
                  <div className="flex items-center space-x-2 text-brand-red">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-xs font-black uppercase tracking-widest">{locale === 'en' ? 'Calculated Productivity Return' : 'अनुमानित उत्पादकता लाभ'}</span>
                  </div>
                  <h4 className="font-display text-2xl font-black text-earth-dark uppercase tracking-tight">
                    {result.roiEstimate}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans">
                    {locale === 'en' 
                      ? '*Calculated based on average regional diesel consumption rates and automated welding field life-span logs.' 
                      : '*गणना औसत क्षेत्रीय डीजल खपत दरों और स्वचालित विनिर्माण क्षेत्र जीवन-काल लॉग पर आधारित है।'}
                  </p>
                </div>

                {/* Final quote checkout triggers */}
                <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col sm:flex-row justify-between items-stretch sm:items-center space-y-3 sm:space-y-0 gap-4" id="concierge-cta-row">
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-earth-dark font-sans font-bold py-3.5 px-6 rounded-xl transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>{t('startOver')}</span>
                  </button>

                  <a
                    href={`https://wa.me/919999999999?text=${generateQuoteMessage()}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-accent text-white font-sans font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{locale === 'en' ? 'Request Pricing Quote' : 'कोटेशन के लिए व्हाट्सएप करें'}</span>
                  </a>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
