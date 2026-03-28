
import { GoogleGenAI } from "@google/genai";

export const getSecurityAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: userPrompt,
    config: {
      systemInstruction: `Sie sind ein professioneller Sicherheitsberater für ATec Systems, einen zertifizierten Errichter von Ajax Systems Alarmanlagen. 
      Beraten Sie Kunden kompetent zu Einbruchschutz, Brandschutz und Videoüberwachung. 
      Antworten Sie auf Deutsch, professionell, vertrauenserweckend und präzise. 
      Erwähnen Sie die Vorteile von Ajax Systems (kabellos, 868MHz, Jeweller-Protokoll, lange Batterielaufzeit, Smartphone-App).`,
      temperature: 0.7,
    },
  });

  return response.text;
};
