"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { generateContent } from '@/app/configs/Aiconfig';
import Chatbot from "./Chatbot";

function CreateForm() {
  const [formDetails, setFormDetails] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  
  
   
  
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      console.log('Submitting form with details:', formDetails);
      const response = await generateContent(`Create a form based on: ${formDetails}`);
      console.log('AI Response:', response);
      setAiResponse(response);

      
      // Save to database
      const formData = {
        title: `Form - ${new Date().toLocaleString()}`,
        content: response
      };
      console.log('Saving form data:', formData);
      
      const savedForm = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      
      if (!savedForm.ok) {
        let errorData = {};
        try {
          errorData = await savedForm.json();
          console.error('Form save error:', {
            status: savedForm.status,
            statusText: savedForm.statusText,
            errorData
          });
        } catch (jsonError) {
          console.error('Failed to parse error response:', jsonError);
        }
        throw new Error(errorData.error || `Failed to save form (Status: ${savedForm.status})`, {
          cause: {
            details: errorData.details || 'No additional details available',
            code: errorData.code || 'UNKNOWN_ERROR'
          }
        });
      }

      console.log('Form saved successfully');

    } catch (error) {
      console.error('Form submission error:', error);
      setAiResponse(`Error: ${error.message || 'Failed to save form'}`);
      if (error.details) {
        console.error('Error details:', error.details);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setAiResponse('');
    setIsOpen(false);
    setFormDetails('');
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button asChild>
            <div>+CreateForm</div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create Form</DialogTitle>
            <div>
              <Textarea 
                className="my-2" 
                placeholder="Describe the form you want to create..." 
                value={formDetails}
                onChange={(e) => setFormDetails(e.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Creating...' : 'Create'}
                </Button>
              </div>
              {aiResponse && <Chatbot response={aiResponse} />}
            </div>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateForm;
