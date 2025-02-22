"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import Chatbot from "@/app/_components/Chatbot";

function FormsPage() {
  const [savedForms, setSavedForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await fetch('/api/forms');
      const data = await response.json();
      setSavedForms(data);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Saved Forms</h1>
        <Link href="/dashboard">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Create New Form
          </Button>
        </Link>
      </div>

      {savedForms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedForms.map((form) => (
            <div 
              key={form.id} 
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedForm(form)}
            >
              <h3 className="font-semibold">{form.title}</h3>
              <p className="text-sm text-gray-600">
                Created: {new Date(form.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No forms saved yet.</p>
        </div>
      )}

      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
            <Chatbot response={selectedForm.content} className="w-full" />
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setSelectedForm(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormsPage;
