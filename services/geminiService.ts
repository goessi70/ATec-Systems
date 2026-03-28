export const getSecurityAdvice = async (userPrompt: string) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API key is not defined.");
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      systemInstruction: {
        parts: [{
          text: `Sie sind ein professioneller Sicherheitsberater für ATec Systems, einen zertifizierten Errichter von Ajax Systems Alarmanlagen. \nBeraten Sie Kunden kompetent zu Einbruchschutz, Brandschutz und Videoüberwachung. \nAntworten Sie auf Deutsch, professionell, vertrauenserweckend und präzise. \nErwähnen Sie die Vorteile von Ajax Systems (kabellos, 868MHz, Jeweller-Protokoll, lange Batterielaufzeit, Smartphone-App).`
        }]
      },
      generationConfig: {
        temperature: 0.7,
      }
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Gemini API Error:", response.status, errorBody);
    
    // Specifically catch Quota/Billing errors (429) to inform the user
    if (response.status === 429) {
      throw new Error("QUOTA_EXCEEDED");
    }
    
    throw new Error("Verbindungsfehler zur KI-API");
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error("Unerwartetes API-Antwortformat");
  }

  return text;
};
