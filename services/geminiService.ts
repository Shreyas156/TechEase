import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSummary = async (content: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "AI Service Unavailable (Missing API Key)";

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Summarize the following blog post content into 2-3 concise sentences that highlight the key value for a reader. Keep it engaging. Content: ${content.substring(0, 5000)}`; // Truncate to be safe

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating summary. Please try again later.";
  }
};

export const askAiAssistant = async (question: string, context: string): Promise<string> => {
    const ai = getAiClient();
    if (!ai) return "AI Service Unavailable";

    try {
        const model = 'gemini-2.5-flash';
        const prompt = `
        You are a helpful assistant for the 'TechEase Hub' blog.
        Context (Current Article Excerpt): "${context.substring(0, 1000)}..."
        
        User Question: ${question}
        
        Answer briefly and helpfully.
        `;

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
        });

        return response.text || "I couldn't answer that right now.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I encountered an error.";
    }
}