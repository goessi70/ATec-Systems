
import React, { useState, useRef, useEffect } from 'react';
import { getSecurityAdvice } from '../services/geminiService';
import { translations, Language } from '../translations';

const GeminiAssistant: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].assistant;
  
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial greeting based on language
  useEffect(() => {
    setMessages([{ role: 'ai', text: t.greeting }]);
  }, [lang, t.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getSecurityAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response || t.error }]);
    } catch (error: any) {
      if (error.message === "QUOTA_EXCEEDED") {
        setMessages(prev => [...prev, { role: 'ai', text: t.quotaError }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: t.connError }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className={`w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border mb-4 animate-slideUp ${
          isDark ? 'bg-slate-900 border-slate-800 shadow-blue-500/10' : 'bg-white border-slate-200'
        }`}>
          <div className={`p-5 flex items-center justify-between border-b ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                <i className="fas fa-robot text-white text-sm"></i>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</span>
                <span className="text-[10px] text-green-500 font-black uppercase tracking-widest">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-blue-500 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className={`flex-grow p-5 overflow-y-auto space-y-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10' 
                    : isDark ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700' : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`p-4 rounded-2xl shadow-sm rounded-tl-none flex space-x-1 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className={`p-4 border-t flex space-x-3 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className={`flex-grow text-sm bg-transparent focus:outline-none transition-colors ${isDark ? 'text-white placeholder-slate-600' : 'text-slate-900 placeholder-slate-400'}`}
            />
            <button onClick={handleSend} className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform active:scale-95 shadow-blue-500/30"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
};

export default GeminiAssistant;
