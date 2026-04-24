import { useState } from 'react';

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Groq API Key
  const apiKey = "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"; 

  const callGroq = async (promptText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant", // Fast and capable model
          messages: [
            {
              role: "system",
              content: "You are a professional CV writer. Provide concise, high-impact text. Output ONLY the requested text without greetings."
            },
            {
              role: "user",
              content: promptText
            }
          ],
          temperature: 0.7,
          max_tokens: 200
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to connect to AI");
      }

      return data.choices[0].message.content.trim();
    } catch (err) {
      console.error("Groq Error:", err);
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const generateBio = async (currentData) => {
    // Get the existing bio text from the user if it exists
    const currentBioText = currentData.bio || "";
    const jobTitle = currentData.jobTitle || 'Developer';
    const name = currentData.firstName || 'Ibrahim';

    let prompt = "";

    // If bio is empty or too short, generate a new one from scratch
    if (currentBioText.trim().length < 5) {
      prompt = `Write a professional 2-sentence developer bio for ${name} who works as a ${jobTitle}.`;
    } 
    // If bio already has content, enhance it and tie it to the job title
    else {
      prompt = `I am a ${jobTitle}. Enhance and professionalize this bio text: "${currentBioText}". Keep it professional, concise (2 sentences), and maintain the original meaning. Output ONLY the enhanced text.`;
    }

    const result = await callGroq(prompt);
    return result || "Experienced developer focused on building high-quality web applications.";
  };

  const enhanceProjectDescription = async (description) => {
    if (!description || description.length < 5) return "Please provide more details.";
    const prompt = `Rewrite this project description to be professional for a technical CV: "${description}". Use action verbs and keep it under 30 words.`;
    const result = await callGroq(prompt);
    return result || description;
  };

  return { generateBio, enhanceProjectDescription, isLoading, error };
};