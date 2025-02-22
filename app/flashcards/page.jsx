"use client";

import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function FlashcardPage() {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateFlashcards = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `Create 5 flashcards about ${topic}. 
        Each flashcard should have a question on the front and a detailed answer on the back.
        Return the flashcards in JSON format.`;
        
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        const flashcardData = JSON.parse(text);
        setFlashcards(flashcardData);
      } catch (parseError) {
        throw new Error('Failed to parse flashcard data');
      }
    } catch (err) {
      console.error('Flashcard generation error:', err);
      setError('Failed to generate flashcards. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Flashcard Generator</h1>
      
      <div className="max-w-md mx-auto">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={generateFlashcards}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Generating...' : 'Generate Flashcards'}
          </button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {flashcards && (
          <div className="space-y-4">
            {flashcards.map((card, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <div className="font-semibold mb-2">Q: {card.question}</div>
                <div className="text-gray-600">A: {card.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
