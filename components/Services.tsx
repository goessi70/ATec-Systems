
import React from 'react';
import { ASSETS } from '../constants/assets';
import { translations, Language } from '../translations';

const Services: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].services;
  const icons = ['fa-magnifying-glass', 'fa-pencil-ruler', 'fa-tools', 'fa-headset'];

  return (
    <div className={`py-32 transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">{t.tag}</span>
          <h2 className={`text-2xl md:text-4xl font-black mb-8 tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mb-8 mx-auto rounded-full"></div>
          <p className={`max-w-2xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {t.steps.map((step, idx) => (
            <div key={idx} className={`relative p-10 rounded-[2rem] border transition-all hover:-translate-y-2 ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-slate-50 border-slate-200 hover:border-blue-500/30'
            }`}>
              <div className="text-6xl font-black text-blue-500/10 absolute top-6 right-8">0{idx+1}</div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                <i className={`fas ${icons[idx]}`}></i>
              </div>
              <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-[3rem] p-12 md:p-20 overflow-hidden relative border ${
          isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-900 border-slate-900 text-white'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h3 className="text-2xl md:text-4xl font-black tracking-normal">{t.whyTitle}</h3>
              <div className="space-y-8">
                {t.reasons.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <i className={`fas ${i === 0 ? 'fa-shield-halved' : i === 1 ? 'fa-bolt' : 'fa-mobile-screen'} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
               <img 
                src={ASSETS.services.pro} 
                className="rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:shadow-blue-500/20 transition-all duration-700 w-full" 
                alt="Professional Installation" 
               />
               <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-[2rem] shadow-2xl animate-pulse z-10">
                  <div className="text-2xl font-black">24/7</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-80">{t.support}</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
