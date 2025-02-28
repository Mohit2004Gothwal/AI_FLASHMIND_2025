"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button'; // Corrected import path
import { Textarea } from '../../components/ui/textarea'; // Corrected import path
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'; // Corrected import path


import { generateContent } from '../configs/Aiconfig'; // Corrected import path

import Chatbot from "./Chatbot";

function Flashcardform() {
  const [flashcardContent, setFlashcardContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await generateContent(`Generate flashcards based on: ${flashcardContent}`);
      setAiResponse(response);
      
      // Save to database
      const savedFlashcard = await fetch('/api/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: response
        })
      });
      
      if (!savedFlashcard.ok) {
        const errorData = await savedFlashcard.json();
        console.error('Flashcard save error:', {
          status: savedFlashcard.status,
          statusText: savedFlashcard.statusText,
          errorData
        });
        throw new Error(errorData.error || `Failed to save flashcard (Status: ${savedFlashcard.status})`);
      }

    } catch (error) {
      console.error('Error:', error);
      setAiResponse(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setAiResponse('');
    setIsOpen(false);
    setFlashcardContent('');
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button asChild>
            <div>FlashCard Gen</div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Generate Flashcard</DialogTitle>
            <DialogDescription>
              <Textarea 
                className="my-2" 
                placeholder="Enter content for flashcard generation..." 
                value={flashcardContent}
                onChange={(e) => setFlashcardContent(e.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate'}
                </Button>
              </div>
              {aiResponse && <Chatbot response={aiResponse} />}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Flashcardform;
