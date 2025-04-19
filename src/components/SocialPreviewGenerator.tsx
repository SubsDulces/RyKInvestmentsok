import React, { useEffect, useRef } from 'react';

const SocialPreviewGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to 1200x630 (optimal for social media)
    canvas.width = 1200;
    canvas.height = 630;
    
    // Colombian flag colors
    const yellow = '#FCD116';
    const blue = '#0057B8';
    const red = '#CE1126';
    
    // Fill background with blue (top 50%)
    ctx.fillStyle = blue;
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
    
    // Fill middle with red (25%)
    ctx.fillStyle = red;
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 4);
    
    // Fill bottom with yellow (25%)
    ctx.fillStyle = yellow;
    ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height / 4);
    
    // Add semi-transparent overlay for better text visibility
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add logo/text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 80px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('RYK', canvas.width / 2, canvas.height / 2 - 60);
    
    // Add "INVESTMENTS" text
    ctx.font = 'bold 60px Montserrat, sans-serif';
    ctx.fillText('INVESTMENTS', canvas.width / 2, canvas.height / 2 + 20);
    
    // Add tagline
    ctx.font = '30px Montserrat, sans-serif';
    ctx.fillText('Auténticos Sabores de Colombia', canvas.width / 2, canvas.height / 2 + 90);
    
    // Download functionality
    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/jpeg');
    downloadLink.download = 'social-preview.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, []);
  
  return (
    <div className="hidden">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default SocialPreviewGenerator;
