
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants/assets';
import { translations, Language } from '../translations';

const Products: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const [filter, setFilter] = useState('All');
  const [activeIframe, setActiveIframe] = useState<string | null>(null);
  const [iframeDoc, setIframeDoc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[lang].products;

  const filteredProducts = filter === 'All' ? ASSETS.products.list : ASSETS.products.list.filter(p => p.category === filter);

  const baselineLink = "/assets/Produkte.pdf/Einbruchschutz.pdf";
  const superiorLink = "/assets/Produkte.pdf/Einbruchschutz.pdf";
  const superiorProductIds = [3, 6]; // Products that stay in Iframe with Baseline
  const fireLink = "/assets/Produkte.pdf/Brandschutz.pdf";
  const videoLink = "/assets/Produkte.pdf/Videoüberwachung.pdf";
  const smartHomeLink = "/assets/Produkte.pdf/Smart-Home.pdf";

  useEffect(() => {
    if (activeIframe) {
      if (activeIframe.endsWith('.pdf')) {
        setIframeDoc(null);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      // Using allorigins.win as it's generally more stable for HTML content
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(activeIframe)}`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok.');
          return response.json();
        })
        .then(data => {
          const contents = data.contents;
          if (!contents) throw new Error('No content received');
          
          // Inject a <base> tag so relative assets load correctly
          const baseTag = `<base href="${activeIframe}">`;
          let finalHtml = contents;
          
          // More robust head tag detection (case-insensitive, handles attributes)
          const headMatch = finalHtml.match(/<head[^>]*>/i);
          
          if (headMatch) {
            const insertIndex = headMatch.index! + headMatch[0].length;
            finalHtml = finalHtml.slice(0, insertIndex) + baseTag + finalHtml.slice(insertIndex);
          } else {
            finalHtml = baseTag + finalHtml;
          }
          
          // Remove scripts that might cause frame-breaking or redirects
          finalHtml = finalHtml.replace(/window\.top\.location/g, 'window.self.location');
          finalHtml = finalHtml.replace(/top\.location/g, 'self.location');
          
          setIframeDoc(finalHtml);
          setIsLoading(false);
        })
        .catch(err => {
          console.warn("Could not proxy product details, showing fallback link:", err);
          setIsLoading(false);
          // Fallback to direct link if proxy fails
          setIframeDoc(null);
        });
    } else {
      setIframeDoc(null);
    }
  }, [activeIframe]);

  // Produkt-Features passend zum Look der "Lösungen"
  const getProductFeatures = (category: string) => {
    if (lang === 'de') {
      return ['Zertifiziert', 'Jeweller-Funk', 'App-Kontrolle', 'Lange Laufzeit'];
    }
    return ['Certified', 'Jeweller Tech', 'App Control', 'Long Battery'];
  };

  if (activeIframe) {
    return (
      <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActiveIframe(null)}
            className={`mb-10 inline-flex items-center space-x-3 font-black text-[10px] uppercase tracking-widest transition-all ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            <i className="fas fa-arrow-left"></i>
            <span>{lang === 'de' ? 'Zurück zur Übersicht' : 'Back to overview'}</span>
          </button>
          
          <div className={`relative w-full h-[80vh] rounded-[3rem] overflow-hidden border shadow-2xl animate-fadeIn ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
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
                title="Product Details"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : activeIframe?.endsWith('.pdf') ? (
              <iframe 
                src={activeIframe} 
                className="w-full h-full border-none"
                title="Product Details"
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
                  href={activeIframe} 
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
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner - Konsistentes Design über die ganze App */}
        <div className={`relative mb-32 rounded-[4rem] overflow-hidden border p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xl shadow-blue-500/5'
        }`}>
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <span className="inline-block bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              {t.bannerTag}
            </span>
            <h2 className={`text-2xl md:text-4xl font-black mb-8 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.bannerTitle}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className={`text-base mb-10 leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.bannerDesc}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              {[
                { label: t.icons.central, icon: 'fa-microchip' },
                { label: t.icons.sensors, icon: 'fa-wifi' },
                { label: t.icons.cameras, icon: 'fa-video' },
                { label: t.icons.app, icon: 'fa-mobile-screen' }
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 mx-auto transition-all hover:scale-110 ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-md'}`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-110 group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <img 
              src={ASSETS.custom.ajaxOverview} 
              alt="Das ATec Systems Sortiment" 
              className="relative z-10 w-full h-auto drop-shadow-2xl transform group-hover:scale-105 group-hover:shadow-blue-500/10 transition-all duration-700 grayscale group-hover:grayscale-0 rounded-[2.5rem]"
              onError={(e) => { e.currentTarget.src = ASSETS.home.slides[0].image; }}
            />
          </div>
        </div>

        {/* Sektions-Header mit Filtern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">{t.catalogTag}</span>
            <h2 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.catalogTitle}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Alarm', 'Fire', 'Video', 'Control'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : isDark ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? t.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Produkt-Grid - Exakt wie das Lösungen-Grid gestaltet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map(product => (
            <div key={product.id} className={`group rounded-[3rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-sm hover:shadow-2xl'
            }`}>
              <div className="p-6">
                {/* Bild-Container: aspect-[16/10] und object-cover wie bei den Lösungen */}
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[2.5rem] transition-all duration-500 ${isDark ? 'bg-slate-800/30 border border-slate-800' : 'bg-slate-100 border border-slate-200'}`}>
                  <img 
                    src={product.img} 
                    alt={product[lang].name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-700 rounded-[2.5rem]" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-12 pb-12 flex-grow flex flex-col">
                <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{product[lang].name}</h3>
                <p className={`text-xs leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{product[lang].desc}</p>
                
                {/* Feature-Liste - Identisch zu Lösungen */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {getProductFeatures(product.category).map(feat => (
                    <div key={feat} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                        <i className="fas fa-check text-[10px]"></i>
                      </div>
                      <span className={`font-bold text-[9px] uppercase tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-800/10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.certified}</span>
                  </div>
                  <button 
                    onClick={() => {
                      if (product.id === 1 || product.id === 2) {
                        setActiveIframe(superiorLink);
                      } else if (product.id === 3) {
                        setActiveIframe(baselineLink);
                      } else if (product.id === 4) {
                        setActiveIframe(fireLink);
                      } else if (product.id === 5) {
                        setActiveIframe(videoLink);
                      } else if (product.id === 6) {
                        setActiveIframe(smartHomeLink);
                      }
                    }}
                    className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest border-2 transition-all ${
                      isDark ? 'border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    {t.details}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Products;
