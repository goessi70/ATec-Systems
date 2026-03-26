import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { translations, Language } from '../translations';

interface CookieConsentProps {
  isDark: boolean;
  lang: Language;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ isDark, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang].cookieBanner;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className={`max-w-4xl mx-auto rounded-3xl p-6 md:p-8 shadow-2xl border backdrop-blur-2xl ${
        isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300 shadow-blue-500/10' : 'bg-white/95 border-slate-100 text-slate-600 shadow-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-grow">
            <p className="text-sm md:text-base leading-relaxed font-medium">
              {t.text}{' '}
              <Link 
                to="/datenschutz" 
                className="text-blue-500 hover:text-blue-600 font-black underline underline-offset-4 decoration-2 transition-colors"
                onClick={() => setIsVisible(false)}
              >
                {t.link}
              </Link>
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={handleAccept}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-10 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-500/25 uppercase text-xs tracking-[0.2em]"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
