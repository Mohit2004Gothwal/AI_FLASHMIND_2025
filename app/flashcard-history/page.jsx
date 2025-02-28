"use client";
import React, { useEffect, useState } from 'react';

const FlashcardHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch('/api/flashcard-history');
      const allFlashcards = await response.json();
      setHistory(allFlashcards);
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Flashcard History</h2>
      <ul className="mt-4 space-y-2">
        {history.map((flashcard) => (
          <li key={flashcard.id} className="border p-4 rounded shadow">
            <strong>Content:</strong> {flashcard.content} <br />
            <strong>Created At:</strong> {flashcard.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardHistory;
