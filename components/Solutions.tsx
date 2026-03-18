
import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { translations, Language } from '../translations';

const Solutions: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].solutions;
  const solutions = [
    { id: 'smart-home', title: lang === 'de' ? 'Wohnungen & Smart Home' : 'Apartments & Smart Home', icon: 'fa-home', img: ASSETS.solutions.home, category: 'Private' },
    { id: 'commercial', title: lang === 'de' ? 'Gewerbe & Einzelhandel' : 'Commercial & Retail', icon: 'fa-store', img: ASSETS.solutions.retail, category: 'Business' },
    { id: 'industrial', title: lang === 'de' ? 'Industrie & Lager' : 'Industrial & Warehouse', icon: 'fa-warehouse', img: ASSETS.solutions.industrial, category: 'Industry' },
    { id: 'hospitality', title: lang === 'de' ? 'Gastronomie & Hotels' : 'Gastronomy & Hotels', icon: 'fa-utensils', img: ASSETS.solutions.hotel, category: 'Hospitality' },
  ];

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner - Same design as Products/About */}
        <div className={`relative mb-32 rounded-[4rem] overflow-hidden border p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xl shadow-blue-500/5'
        }`}>
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <span className="inline-block bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              {t.tag}
            </span>
            <h2 className={`text-2xl md:text-4xl font-black mb-8 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className={`text-base mb-10 leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.subtitle}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                {t.cta}
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-110 group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <div className={`relative z-10 rounded-[3rem] overflow-hidden border shadow-2xl transform group-hover:scale-[1.03] group-hover:shadow-blue-500/10 transition-transform duration-700 ${isDark ? 'border-slate-800' : 'border-white'}`}>
              <img 
                src={ASSETS.solutions.home} 
                alt="Security Solutions Overview" 
                className="w-full h-full object-cover aspect-[16/10] grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">{t.tag}</span>
            <h2 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'de' ? 'Unsere Fokusgebiete' : 'Our Focus Areas'}
            </h2>
          </div>
        </div>

        {/* Solutions Grid - Card design matching Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((sol) => (
            <div key={sol.id} className={`group rounded-[3rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-sm hover:shadow-2xl'
            }`}>
              <div className="p-6">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[2.5rem] transition-all duration-500 ${isDark ? 'bg-slate-800/30 border border-slate-800' : 'bg-slate-100 border border-slate-200'}`}>
                  <img 
                    src={sol.img} 
                    alt={sol.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 rounded-[2.5rem]" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                      {sol.category}
                    </span>
                  </div>
                  <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl ${
                    isDark ? 'bg-slate-950 text-blue-500' : 'bg-white text-blue-600'
                  }`}>
                    <i className={`fas ${sol.icon} text-xl`}></i>
                  </div>
                </div>
              </div>
              
              <div className="px-12 pb-12 flex-grow flex flex-col">
                <h3 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{sol.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {sol.id === 'commercial' ? t.commercialDesc : 
                   sol.id === 'industrial' ? t.industrialDesc : 
                   sol.id === 'hospitality' ? t.hospitalityDesc : t.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {t.features.map(feat => (
                    <div key={feat} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                        <i className="fas fa-check text-[10px]"></i>
                      </div>
                      <span className={`font-bold text-[10px] uppercase tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-800/10">
                  <Link to="/kontakt" className={`block w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest border-2 transition-all text-center ${
                    isDark ? 'border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                  }`}>
                    {t.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
