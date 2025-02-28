"use client";

import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function QuizPage() {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveQuizToDatabase = async (quizData) => {
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        throw new Error('Failed to save quiz to database');
      }

      const savedQuiz = await response.json();
      console.log('Saved Quiz:', savedQuiz);
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };

  const generateQuiz = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `Create a 5-question multiple choice quiz about ${topic}. 
        Format each question with the question text, 4 options, and the correct answer.
        Return the quiz in JSON format.`;
        
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Log raw response for debugging
      console.log('API Response:', text);
      
      try {
        // Validate response contains valid JSON
        if (!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
          throw new Error('Invalid JSON format in API response');
        }
        
        const quizData = JSON.parse(text);
        
        // Validate quiz data structure
        if (!quizData || !quizData.questions || !Array.isArray(quizData.questions)) {
          throw new Error('Invalid quiz data structure');
        }
        
        setQuiz(quizData);
        
        // Save the generated quiz to the database
        await saveQuizToDatabase(quizData);

      } catch (parseError) {
        console.error('Parsing error:', parseError);
        throw new Error(`Failed to parse quiz data: ${parseError.message}`);
      }

    } catch (err) {
      console.error('Quiz generation error:', err);
      setError(`Failed to generate quiz: ${err.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Quiz (Console Output)</h1>
      
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
            onClick={generateQuiz}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Generating...' : 'Generate Quiz'}
          </button>
        </div>

        {error && console.error('Quiz Error:', error)}
        {quiz && console.log('Generated Quiz:', quiz)}
      </div>
    </div>
  );
}
