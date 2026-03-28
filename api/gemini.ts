import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS setup for preflight requests (if needed)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt in request body' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Gemini API key is not defined in environment variables.");
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
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
      console.error("Gemini Backend API Error:", response.status, errorBody);
      
      return res.status(response.status).json({ 
        error: "Gemini API failed", 
        details: errorBody 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error: any) {
    console.error("Exception in Gemini Vercel Function:", error.message);
    return res.status(500).json({ error: 'Internal server error while calling Gemini' });
  }
}
