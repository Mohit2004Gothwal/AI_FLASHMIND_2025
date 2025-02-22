"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Download, FileText, File, Maximize, Minimize } from "lucide-react";
import { saveAs } from 'file-saver';

function Chatbot({ response, className }) {
  const [copied, setCopied] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    const blob = new Blob([response], { type: 'application/pdf' });
    saveAs(blob, 'response.pdf');
  };

  const handleDownloadWord = () => {
    const blob = new Blob([response], { type: 'application/msword' });
    saveAs(blob, 'response.doc');
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`border rounded-lg p-4 bg-gray-50 ${isFullScreen ? 'fixed inset-0 z-50 m-0' : ''} ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">AI Response</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={toggleFullScreen}>
            {isFullScreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
            {copied && <span className="ml-1">Copied!</span>}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleDownloadPDF}>
            <File className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleDownloadWord}>
            <FileText className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className={`whitespace-pre-wrap text-sm ${isFullScreen ? 'h-[calc(100vh-100px)] overflow-auto' : ''}`}>
        {response}
      </div>
    </div>
  );
}

export default Chatbot;
