const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a canvas with the correct dimensions
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

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
ctx.font = 'bold 80px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('RYK', canvas.width / 2, canvas.height / 2 - 60);

// Add "INVESTMENTS" text
ctx.font = 'bold 60px sans-serif';
ctx.fillText('INVESTMENTS', canvas.width / 2, canvas.height / 2 + 20);

// Add tagline
ctx.font = '30px sans-serif';
ctx.fillText('Auténticos Sabores de Colombia', canvas.width / 2, canvas.height / 2 + 90);

// Save the image to the public directory
const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(path.join(__dirname, '../public/social-preview.jpg'), buffer);

console.log('Social preview image created successfully at public/social-preview.jpg');
