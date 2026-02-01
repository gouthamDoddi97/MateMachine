const sharp = require('sharp');
const fs = require('fs');

async function createSquareFavicon() {
  try {
    // Read the original logo
    const image = sharp('./public/fav2.png');
    const metadata = await image.metadata();
    
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
    
    // Create different sizes for favicon directly without padding
    const sizes = [16, 32, 180, 192, 512];
    
    for (const size of sizes) {
      await sharp('./public/fav2.png')
        .resize(size, size)
        .toFile(`./public/favicon_io/favicon-${size}x${size}.png`);
      console.log(`Created ${size}x${size} favicon`);
    }
    
    // Rename specific sizes to match standard names
    fs.renameSync('./public/favicon_io/favicon-16x16.png', './public/favicon_io/favicon-16x16.png');
    fs.renameSync('./public/favicon_io/favicon-32x32.png', './public/favicon_io/favicon-32x32.png');
    fs.renameSync('./public/favicon_io/favicon-180x180.png', './public/favicon_io/apple-touch-icon.png');
    fs.renameSync('./public/favicon_io/favicon-192x192.png', './public/favicon_io/android-chrome-192x192.png');
    fs.renameSync('./public/favicon_io/favicon-512x512.png', './public/favicon_io/android-chrome-512x512.png');
    
    // Create .ico file (32x32 is standard)
    await sharp('./public/fav2.png')
      .resize(32, 32)
      .toFile('./public/favicon_io/favicon.ico');
    
    console.log('✅ All favicon files created successfully!');
    
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createSquareFavicon();
