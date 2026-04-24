import { useState } from 'react';

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBio = async (currentData) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace this mock implementation with a real API call (e.g., fetch to your backend)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return "Passionate software developer with expertise in building scalable web applications. I thrive in dynamic environments and love solving complex problems with clean code.";
    } catch (err) {
      setError(err.message || "Failed to generate bio");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const enhanceProjectDescription = async (description) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace this mock implementation with a real API call (e.g., fetch to your backend)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return "Engineered and deployed a full-stack application utilizing modern frameworks, resulting in a 20% increase in performance and improved user retention.";
    } catch (err) {
      setError(err.message || "Failed to enhance description");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { generateBio, enhanceProjectDescription, isLoading, error };
};
