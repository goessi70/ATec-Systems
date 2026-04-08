
import React from 'react';
import { translations, Language } from '../translations';

const LegalNotice: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].legal;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">{t.tag}</span>
          <h1 className={`text-2xl md:text-4xl font-black mb-8 tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className={`space-y-12 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.provider}</h2>
            <p className="font-bold">ATec Systems</p>
            <p>Allrütiweg 9</p>
            <p>CH-6343 Rotkreuz</p>
            <p>{lang === 'de' ? 'Schweiz' : 'Switzerland'}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.represented}</h2>
            <p>{t.representatives}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.contact}</h2>
            <p>Phone: +41 (0) 79 521 80 10</p>
            <p>Email: info@atec-systems.ch</p>
          </section>

          <section className="pt-12 border-t border-slate-800/10">
            <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.disclaimer}</h2>
            <div className="space-y-6">
              {t.disclaimerSections.map((section, idx) => (
                <div key={idx}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{section.title}</h3>
                  <p className="text-sm leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
