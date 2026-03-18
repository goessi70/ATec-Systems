
import React from 'react';
import { translations, Language } from '../translations';

const PrivacyPolicy: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].privacy;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">{t.tag}</span>
          <h1 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className={`space-y-12 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.section1Title}</h2>
            <h3 className="font-bold mb-2">{t.section1Sub}</h3>
            <p>{t.section1Text}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.section2Title}</h2>
            <h3 className="font-bold mb-2">{t.section2Sub}</h3>
            <p>{t.section2Text}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.section3Title}</h2>
            <p>{t.section3Text}</p>
          </section>

          <section className="pt-12 border-t border-slate-800/10">
            <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.securityTitle}</h2>
            <p className="text-xs">
              {t.securityText}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
