import React, { useState } from 'react';
import { Button } from './ui/button';
import { processBasketballImage } from '../utils/processBasketball';

export const ImageProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessImage = async () => {
    setIsProcessing(true);
    try {
      await processBasketballImage();
    } catch (error) {
      console.error('Failed to process image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4">
      <Button 
        onClick={handleProcessImage} 
        disabled={isProcessing}
        className="mb-4"
      >
        {isProcessing ? 'Processing Basketball Image...' : 'Process Basketball Image'}
      </Button>
      {isProcessing && (
        <p className="text-sm text-muted-foreground">
          Removing background from basketball image...
        </p>
      )}
    </div>
  );
};