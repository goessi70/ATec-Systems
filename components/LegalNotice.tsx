
import React from 'react';
import { translations, Language } from '../translations';

const LegalNotice: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].legal;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">{t.tag}</span>
          <h1 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h1>
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
            <p>Philipp Schwerzmann {lang === 'de' ? '(Geschäftsleitung)' : '(Management)'}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.contact}</h2>
            <p>Phone: +41 (0) 79 521 80 10</p>
            <p>Email: info@atec-systems.ch</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.register}</h2>
            <p>{lang === 'de' ? 'Eintragung im Handelsregister.' : 'Registered in the Commercial Register.'}</p>
            <p>{lang === 'de' ? 'Registerort: Kanton Zug, Schweiz' : 'Register Location: Canton of Zug, Switzerland'}</p>
            <p>{lang === 'de' ? 'Registernummer: CHE-123.456.789' : 'Registration Number: CHE-123.456.789'}</p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.vat}</h2>
            <p>{lang === 'de' ? 'Umsatzsteuer-Identifikationsnummer gemäß gesetzlichen Bestimmungen:' : 'VAT identification number according to statutory provisions:'}</p>
            <p>CHE-123.456.789 MWST</p>
          </section>

          <section className="pt-12 border-t border-slate-800/10">
            <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.disclaimer}</h2>
            <p className="text-xs">
              {t.disclaimerText}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
