
import { GoogleGenAI } from "@google/genai";

export const getSecurityAdvice = async (userPrompt: string) => {
  // Correctly initializing GoogleGenAI using a named parameter with process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userPrompt,
    config: {
      systemInstruction: `Sie sind ein professioneller Sicherheitsberater für ATec Systems, einen zertifizierten Errichter von Ajax Systems Alarmanlagen. 
      Beraten Sie Kunden kompetent zu Einbruchschutz, Brandschutz und Videoüberwachung. 
      Antworten Sie auf Deutsch, professionell, vertrauenserweckend und präzise. 
      Erwähnen Sie die Vorteile von Ajax Systems (kabellos, 868MHz, Jeweller-Protokoll, lange Batterielaufzeit, Smartphone-App).`,
      temperature: 0.7,
    },
  });

  // Accessing the generated text output via the .text property (not a method).
  return response.text;
};
