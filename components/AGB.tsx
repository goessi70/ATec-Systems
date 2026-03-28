import React from 'react';
import { translations, Language } from '../translations';

const AGB: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].agbPage;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">{t?.tag || 'AGB'}</span>
          <h1 className={`text-3xl md:text-5xl font-black mb-8 tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>{t?.title || 'Allgemeine Geschäftsbedingungen'}</h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className={`space-y-12 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <section>
            <p className="font-medium opacity-80 italic">
              Die Allgemeinen Geschäftsbedingungen werden in Kürze hier veröffentlicht.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AGB;
