import { removeBackground, loadImage } from './backgroundRemoval';

export const processBasketballImage = async () => {
  try {
    // Load the original basketball image
    const response = await fetch('/html-export/images/bascketball.png');
    const blob = await response.blob();
    
    // Convert to HTMLImageElement
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create a download link for the processed image
    const url = URL.createObjectURL(processedBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'basketball-no-bg.png';
    link.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    
    console.log('Basketball image processed and downloaded successfully');
  } catch (error) {
    console.error('Error processing basketball image:', error);
  }
};