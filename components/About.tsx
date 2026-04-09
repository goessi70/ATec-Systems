
import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { translations, Language } from '../translations';

const About: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const mainImage = ASSETS.about.team;
  const t = translations[lang].about;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Haupt-Portrait Sektion (Design-Anpassung an Produktseite) */}
        <div className={`relative mb-32 rounded-[4rem] overflow-hidden border p-12 md:p-20 flex flex-col lg:flex-row items-center lg:items-start gap-16 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xl shadow-blue-500/5'
        }`}>
          <div className="lg:w-1/2 z-10 pt-4">
            <span className="inline-block bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.5em] px-5 py-2.5 rounded-full mb-10">
              {t.tag}
            </span>
            <h2 className={`text-2xl md:text-4xl font-black mb-10 leading-none tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.intro}
            </p>
            
            <div className="mb-12">
              <Link 
                to="/gegruendet" 
                className="inline-flex items-center space-x-3 text-blue-500 font-black uppercase tracking-widest text-[10px] group/link"
              >
                <span>{lang === 'de' ? 'Unsere ganze Geschichte' : 'Our full history'}</span>
                <i className="fas fa-arrow-right transition-transform group-hover/link:translate-x-2"></i>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-10">
              {[
                { val: '15+', label: t.stats.years, icon: 'fa-calendar-check' },
                { val: '500+', label: t.stats.projects, icon: 'fa-check-double' }
              ].map(stat => (
                <div key={stat.label} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-md'}`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-500">{stat.val}</div>
                    <div className={`text-[9px] uppercase font-bold tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-110 group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <div className={`relative z-10 rounded-[3rem] overflow-hidden border shadow-2xl transform group-hover:scale-[1.03] group-hover:shadow-blue-500/10 transition-transform duration-700 ${isDark ? 'border-slate-800' : 'border-white'}`}>
              <img 
                src={mainImage} 
                alt="ATec Systems Team" 
                className="w-full h-full object-cover object-top aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Team Sektion (ähnlich wie die Produkt-Liste) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">ATec Team</span>
            <h2 className={`text-2xl md:text-4xl font-black mb-8 tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.teamTitle}
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.teamSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ASSETS.about.members.map((member, i) => (
            <div key={i} className={`group rounded-[3rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-sm hover:shadow-2xl'
            }`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-800/10">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:shadow-xl transition-all duration-1000" />
                <div className="absolute top-8 left-8">
                  <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                    {t.roles[i]}
                  </span>
                </div>
              </div>
              <div className="p-10 text-center">
                <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <div className="flex items-center justify-center pt-6 border-t border-slate-800/10">
                  <span className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Expertise & Leadership</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
