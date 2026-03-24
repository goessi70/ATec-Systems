import React, { useState } from 'react';
import { translations, Language } from '../translations';
const Contact: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark,
lang }) => {
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const t = translations[lang].contact;
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setLoading(true);
setError(null);
const formData = new FormData(e.currentTarget);
const data = {
name: formData.get('name'),
email: formData.get('email'),
interest: formData.get('interest'),
message: formData.get('message'),
};
try {
const response = await fetch('/api/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
});
if (response.ok) {
setSubmitted(true);
} else { const result = await response.json();
setError(result.error || 'Fehler beim Senden der Nachricht.');
}
} catch (err) {
setError('Verbindung zum Server konnte nicht hergestellt werden.');
} finally {
setLoading(false);
}
};
const contactInfo = [
{ icon: 'fa-phone', label: t.labels.phone, val: '+41 (0) 79 521 80 10',
href: 'tel:+41795218010' },
{ icon: 'fa-envelope', label: t.labels.email, val: 'info@atec-systems.ch',
href: 'mailto:info@atec-systems.ch' },
{ icon: 'fa-location-dot', label: t.labels.headquarters, val: 'AllrÃ¼tiweg
9, CH-6343 Rotkreuz', href: null }
];
return (
<div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate
-950' : 'bg-white'}`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-20">


<div className="lg:w-1/3 space-y-12">
<div> <span className="text-blue-500 font-bold uppercase tracking-[0.2em]
text-[10px] mb-4 block">{t.tag}</span>
<h2 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter ${
isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h2>
<div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
<p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
{t.subtitle}
</p>
</div>
<div className="space-y-6">
{contactInfo.map(item => (
<div key={item.label} className={`flex items-start gap-6 p-6 rounded-2xl
border ${
isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200
shadow-sm'
}`}>
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center
justify-center text-blue-500 shrink-0">
 <i className={`fas ${item.icon}`}></i> </div>
<div className="overflow-hidden">
 <div className="text-[9px] uppercase font-bold text-slate-500 tracking-
widest mb-1">{item.label}</div>
 {item.href ? (
 <a href={item.href} className={`font-bold block transition-colors hover:
text-blue-500 whitespace-nowrap overflow-hidden text-ellipsis text-sm ${
isDark ? 'text-white' : 'text-slate-900'}`}>  {item.val}
 </a>
 ) : (
 <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-
900'}`}>
 {item.val}
 </div>
 )}
</div>
</div>
))}
</div>
</div>
<div className={`lg:w-2/3 p-12 rounded-[3rem] border transition-all ${
isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200
shadow-2xl shadow-blue-500/5' }`}>
{submitted ? (
<div className="text-center py-20 animate-fadeIn">
<div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex
items-center justify-center mx-auto mb-8 border border-green-500/20">
<i className="fas fa-check text-4xl"></i>
</div>
<h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-
slate-900'}`}>{t.successTitle}</h3>
<p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{
t.successDesc}</p>
<button onClick={() => setSubmitted(false)} className="mt-10 text-blue-500
font-bold hover:underline uppercase tracking-widest text-[10px]">{t.newMsg
}</button> </div>


) : (
<form onSubmit={handleSubmit} className="space-y-8">
{error && ( <div className="p-4 bg-red-500/10 border border-red-500/20
text-red-500 rounded-xl text-sm font-bold flex items-center gap-3">
 <i className="fas fa-exclamation-circle"></i>
 {error}
</div>
)}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
 <label className={`block text-[10px] uppercase font-black tracking-widest
mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.labels.name}</
label>  <input name="name" type="text" required placeholder={t.
placeholders.name} className={`w-full px-6 py-4 rounded-xl border focus:
outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${
isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-600'
: 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
 }`} />
</div>
<div>  <label className={`block text-[10px] uppercase font-black tracking-
widest mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.labels.
email}</label>  <input name="email" type="email" required placeholder="
name@atec-systems.ch" className={`w-full px-6 py-4 rounded-xl border focus
:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${
isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-600'
: 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
 }`} />
</div>
</div>
<div>
<label className={`block text-[10px] uppercase font-black tracking-widest
mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.labels.interest}
</label> <select name="interest" className={`w-full px-6 py-4 rounded-xl
border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
appearance-none text-sm ${  isDark ? 'bg-slate-800 border-slate-700 text-
white' : 'bg-slate-50 border-slate-200 text-slate-900'
}`}>
 {t.interests.map(i => <option key={i} value={i}>{i}</option>)}
</select>
</div>
<div>
<label className={`block text-[10px] uppercase font-black tracking-widest
mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.labels.message}<
/label> <textarea name="message" rows={6} required placeholder={t.
placeholders.message} className={`w-full px-6 py-4 rounded-xl border focus
:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${
isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-600'
: 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400' }`}
></textarea>
</div>
<button
type="submit"
disabled={loading} className={`w-full bg-blue-600 text-white py-5 rounded-
2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-
500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center
justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`} >
{loading && <i className="fas fa-circle-notch animate-spin"></i>}


{loading ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...') : t.submit}
</button>
</form>
)}
</div>
</div>
</div>
</div>
);
};
export default Contact;
