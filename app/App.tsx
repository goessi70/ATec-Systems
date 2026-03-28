
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Contact from '../components/Contact';
import LegalNotice from '../components/LegalNotice';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Founded from '../components/Founded';
import GeminiAssistant from '../components/GeminiAssistant';
import CookieConsent from '../components/CookieConsent';
import { translations, Language } from '../translations';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


const Navbar: React.FC<{ isDark: boolean; toggleTheme: () => void; lang: Language; setLang: (l: Language) => void }> = ({ isDark, toggleTheme, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang].nav;

  const navItems = [
    { label: t.home, href: '/' },
    { label: t.about, href: '/firmenportrait' },
    { label: t.products, href: '/produkte' },
    { label: t.solutions, href: '/loesungen' },
    { label: t.services, href: '/leistungen' },
    { label: t.contact, href: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 top-0 border-b transition-all duration-500 ${
      isDark ? 'bg-slate-950/90 border-slate-900' : 'bg-white/90 border-slate-100'
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className={`p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDark ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'bg-slate-900 shadow-lg shadow-slate-900/10'}`}>
                <i className="fas fa-shield-halved text-white text-2xl"></i>
              </div>
              <span className={`font-extrabold text-2xl tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                ATec <span className="text-blue-500">Systems</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-all duration-300 font-bold text-sm tracking-tight relative group py-2 ${
                    isActive(item.href) 
                      ? 'text-blue-500' 
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 nav-link-underline rounded-full ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
            
            <div className={`w-px h-6 mx-2 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
            
            {/* Language Toggle Button Group */}
            <div className="flex items-center bg-slate-800/20 rounded-xl p-1 border border-blue-500/10">
              <button 
                onClick={() => setLang('de')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === 'de' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                DE
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
            </div>

            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
                isDark ? 'bg-slate-950 text-yellow-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
              aria-label="Farbschema umschalten"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-base`}></i>
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className={`p-2 font-black text-xs ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {lang.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className={`p-2 ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}>
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 border-b' : 'max-h-0 opacity-0'} ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
        <div className="px-6 py-10 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : isDark ? 'text-slate-400 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className={`py-32 border-t transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-10">
              <i className="fas fa-shield-halved text-blue-500 text-3xl"></i>
              <span className={`font-black text-3xl tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                ATec <span className="text-blue-500">Systems</span>
              </span>
            </div>
            <p className="mb-10 max-w-sm text-lg leading-relaxed opacity-90 font-medium">
              {t.description}
            </p>
            <div className="flex space-x-6">
              {[ 'facebook-f', 'instagram', 'linkedin-in' ].map(icon => (
                <a key={icon} href="#" className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 shadow-sm">
                  <i className={`fab fa-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`font-black uppercase tracking-widest text-xs mb-10 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.quickLinks}</h4>
            <ul className="space-y-5 text-sm font-bold tracking-tight">
              <li><Link to="/produkte" className="hover:text-blue-500 transition-colors">{t.portfolio}</Link></li>
              <li><Link to="/loesungen" className="hover:text-blue-500 transition-colors">{t.concepts}</Link></li>
              <li><Link to="/leistungen" className="hover:text-blue-500 transition-colors">{t.maintenance}</Link></li>
              <li><Link to="/kontakt" className="hover:text-blue-500 transition-colors">{t.advice}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-black uppercase tracking-widest text-xs mb-10 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.contact}</h4>
            <ul className="space-y-8 text-base font-semibold">
              <li className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt mt-1.5 text-blue-500"></i>
                <span className="opacity-90">{t.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-blue-500"></i>
                <a href="tel:+41795218010" className="opacity-90 hover:text-blue-500 transition-colors whitespace-nowrap">+41 (0) 79 521 80 10</a>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-envelope text-blue-500"></i>
                <a href="mailto:info@atec-systems.ch" className="opacity-90 hover:text-blue-500 transition-colors whitespace-nowrap">info@atec-systems.ch</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`mt-32 pt-12 border-t text-sm font-bold flex flex-col md:flex-row justify-between items-center opacity-60 ${isDark ? 'border-slate-900' : 'border-slate-200'}`}>
          <p>&copy; {t.copyright}</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <Link to="/impressum" className="hover:text-blue-500 transition-colors">{t.impressum}</Link>
            <Link to="/datenschutz" className="hover:text-blue-500 transition-colors">{t.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Language>('de');

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <HashRouter>
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} setLang={setLang} />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isDark={isDark} lang={lang} />} />
            <Route path="/firmenportrait" element={<About isDark={isDark} lang={lang} />} />
            <Route path="/produkte" element={<Products isDark={isDark} lang={lang} />} />
            <Route path="/loesungen" element={<Solutions isDark={isDark} lang={lang} />} />
            <Route path="/leistungen" element={<Services isDark={isDark} lang={lang} />} />
            <Route path="/kontakt" element={<Contact isDark={isDark} lang={lang} />} />
            <Route path="/impressum" element={<LegalNotice isDark={isDark} lang={lang} />} />
            <Route path="/datenschutz" element={<PrivacyPolicy isDark={isDark} lang={lang} />} />
            <Route path="/gegruendet" element={<Founded isDark={isDark} lang={lang} />} />
          </Routes>
        </main>
        <Footer isDark={isDark} lang={lang} />
        <CookieConsent isDark={isDark} lang={lang} />
        <GeminiAssistant isDark={isDark} lang={lang} />
      </div>
    </HashRouter>
  );
};

export default App;
