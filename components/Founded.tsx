
import React from 'react';
import { translations, Language } from '../translations';
import { Link } from 'react-router-dom';

const Founded: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].about.founded;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <Link 
            to="/firmenportrait" 
            className={`inline-flex items-center space-x-2 text-sm font-bold transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <i className="fas fa-arrow-left"></i>
            <span>{translations[lang].nav.about}</span>
          </Link>
        </div>

        <div className={`relative mb-32 rounded-[4rem] overflow-hidden border p-12 md:p-20 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xl shadow-blue-500/5'
        }`}>
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              {t.tag}
            </span>
            <h1 className={`text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </h1>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className={`text-xl md:text-2xl font-bold mb-10 leading-tight text-blue-500`}>
              {t.subtitle}
            </p>
            <p className={`text-base leading-relaxed mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {t.milestones.map((milestone, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-sm'
              }`}>
                <div className="text-3xl font-black text-blue-600 mb-4">{milestone.year}</div>
                <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{milestone.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[3rem] p-12 text-center border ${isDark ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
          <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'de' ? 'Haben Sie Fragen zu unserer Geschichte?' : 'Do you have questions about our history?'}
          </h2>
          <Link 
            to="/kontakt" 
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            {translations[lang].nav.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Founded;
