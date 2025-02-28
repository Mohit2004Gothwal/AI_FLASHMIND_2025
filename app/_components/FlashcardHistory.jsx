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
    <div>
      <h2>Flashcard History</h2>
      <ul>
        {history.map((flashcard) => (
          <li key={flashcard.id}>
            <strong>Content:</strong> {flashcard.content} <br />
            <strong>Created At:</strong> {flashcard.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardHistory;
