
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { translations, Language } from '../translations';

const Home: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ASSETS.home.slides;
  const t = translations[lang].home;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideData = slides[currentSlide][lang];
  const [iframeDoc, setIframeDoc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const catalogUrl = "https://ajax.systems/de/catalogue/";

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://corsproxy.io/?${encodeURIComponent(catalogUrl)}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.text();
      })
      .then(contents => {
        if (!contents) throw new Error('No content received');
        
        const baseTag = `<base href="${catalogUrl}">`;
        let finalHtml = contents;
        
        // More robust head tag detection
        const headMatch = finalHtml.match(/<head[^>]*>/i);
        
        if (headMatch) {
          const insertIndex = headMatch.index! + headMatch[0].length;
          finalHtml = finalHtml.slice(0, insertIndex) + baseTag + finalHtml.slice(insertIndex);
        } else {
          finalHtml = baseTag + finalHtml;
        }
        
        // Remove frame-breaking scripts
        finalHtml = finalHtml.replace(/window\.top\.location/g, 'window.self.location');
        finalHtml = finalHtml.replace(/top\.location/g, 'self.location');
        
        setIframeDoc(finalHtml);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch homepage catalog:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="animate-fadeIn">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 transition-all duration-1000 ${isDark ? 'bg-slate-950' : 'bg-white'}`}></div>
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-30' : 'opacity-0'}`}
            >
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover mix-blend-luminosity brightness-50" 
              />
            </div>
          ))}
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950' : 'from-white'} via-transparent to-transparent`}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 min-h-[450px] flex flex-col justify-center">
              <div key={`tag-${currentSlide}`} className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border backdrop-blur-xl animate-slideDown max-w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className={`font-black text-[6px] uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {slideData.tag}
                </span>
              </div>
              
              <div key={`content-${currentSlide}`} className="animate-slideUp space-y-6">
                <h1 className={`text-2xl md:text-4xl font-black leading-tight tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {slideData.title}
                </h1>
                <p className={`text-base font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {slideData.subtitle}
                </p>
                <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
                <p className={`text-base leading-relaxed max-w-lg font-medium opacity-70 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {slideData.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link to="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-500/30 active:scale-95">
                  {t.ctaConsult}
                </Link>
                <Link to="/produkte" className={`px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 active:scale-95 ${
                  isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-50'
                }`}>
                  {t.ctaCatalog}
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-12">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-700 relative overflow-hidden ${
                      idx === currentSlide ? 'w-20 bg-blue-500/20' : 'w-6 bg-slate-800'
                    }`}
                  >
                    {idx === currentSlide && (
                      <div className="absolute top-0 left-0 h-full bg-blue-500 animate-progressBar"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div key={`visual-${currentSlide}`} className="relative z-10 animate-float transition-all duration-1000">
                <div className={`relative rounded-[4rem] overflow-hidden border-4 shadow-2xl w-[450px] aspect-[4/5] ${isDark ? 'border-slate-800 shadow-blue-500/5' : 'border-white shadow-slate-200'}`}>
                  <img src={slides[currentSlide].image} className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110" alt={slideData.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>
                
                <div className={`absolute -bottom-6 -right-6 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl border animate-slideUp ${
                  isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl">
                      <i className={`fas ${slides[currentSlide].icon}`}></i>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-black tracking-widest opacity-50 mb-1">{t.tagline}</div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-lg font-black tracking-tighter">{t.secured}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AJAX Katalog Sektion */}
      <section className={`py-32 transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              {lang === 'de' ? 'Hardware Katalog' : 'Hardware Catalog'}
            </span>
            <h2 className={`text-3xl md:text-5xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'de' ? 'Das Ajax Portfolio direkt erleben' : 'Experience the Ajax Portfolio'}
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className={`relative w-full h-[85vh] rounded-[4rem] overflow-hidden border shadow-2xl ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-blue-500/5'
          }`}>
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className={`font-black text-[10px] uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {lang === 'de' ? 'Katalog wird geladen...' : 'Loading catalog...'}
                </p>
              </div>
            ) : iframeDoc ? (
              <iframe 
                srcDoc={iframeDoc} 
                className="w-full h-full border-none"
                title="Ajax Catalog"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <i className="fas fa-exclamation-triangle text-4xl text-amber-500 mb-6"></i>
                <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'de' ? 'Inhalt konnte nicht geladen werden' : 'Content could not be loaded'}
                </h3>
                <p className={`text-sm mb-8 max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {lang === 'de' 
                    ? 'Die externe Seite verhindert die direkte Anzeige. Sie können den Katalog stattdessen in einem neuen Fenster öffnen.' 
                    : 'The external site prevents direct display. You can open the catalog in a new window instead.'}
                </p>
                <a 
                  href={catalogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20"
                >
                  {lang === 'de' ? 'Katalog extern öffnen' : 'Open catalog externally'}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(1deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes progressBar { from { width: 0%; } to { width: 100%; } }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideDown { animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-progressBar { animation: progressBar 10s linear forwards; }
      `}</style>
    </div>
  );
};

export default Home;
