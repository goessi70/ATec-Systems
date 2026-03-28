export const getSecurityAdvice = async (userPrompt: string) => {
  const response = await fetch('/api/gemini', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: userPrompt })
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("QUOTA_EXCEEDED");
    }
    
    const errorBody = await response.text();
    console.error("Backend Proxy Error:", response.status, errorBody);
    throw new Error("Verbindungsfehler zur KI-API");
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error("Unerwartetes API-Antwortformat");
  }

  return text;
};
