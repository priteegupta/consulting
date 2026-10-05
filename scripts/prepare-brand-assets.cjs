const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processBrandAssets() {
  const publicDir = path.resolve(__dirname, '../public');
  const rawPath = path.join(publicDir, 'logo-raw.png');
  
  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  // 1. Create a version with cleaned background (removing the smoke/fog around edges, keeping crisp metallic mark and text)
  // Let's create an alpha mask where the bright logo pixels keep full opacity, and the hazy white/grey smoke is cleared to transparent
  const cleanData = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = cleanData[idx];
      const g = cleanData[idx + 1];
      const b = cleanData[idx + 2];
      const a = cleanData[idx + 3];
      
      // Calculate distance from center/edges or brightness
      // In the raw image, the smoke is whitish/grey (r~=g~=b) with low/medium saturation, whereas gold has high r, g, lower b.
      // And the core logo letters are high contrast.
      // Outside the core bounding box (x: 120-910, y: 48-290), clear smoke completely
      if (x < 118 || x > 915 || y < 45 || y > 295) {
        cleanData[idx + 3] = 0;
      } else {
        // Inside bounding box, attenuate the cloudy haze
        // Check if pixel is part of the background cloud
        // The background cloud is mostly greyish with low saturation
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;
        const brightness = (r + g + b) / 3;
        
        // Gold elements have good saturation and brightness
        // White letters "CONSULTING" have high brightness > 220
        // Silver letters have metallic gradient
        // The background haze has brightness 120-200 with low saturation < 0.15
        if (saturation < 0.12 && brightness > 120 && brightness < 235 && (x < 350 || y < 65 || y > 230)) {
          // Softly fade background smoke
          const factor = Math.max(0, 1 - (235 - brightness) / 100);
          cleanData[idx + 3] = Math.min(cleanData[idx + 3], Math.floor(factor * 255));
        }
      }
    }
  }

  // Save full cleaned logo
  await sharp(cleanData, { raw: { width, height, channels } })
    .png()
    .toFile(path.join(publicDir, 'logo-clean.png'));

  // Also trim the full logo tightly
  await sharp(path.join(publicDir, 'logo-raw.png'))
    .extract({ left: 120, top: 45, width: 790, height: 250 })
    .png()
    .toFile(path.join(publicDir, 'logo-full.png'));

  // Also create a dark-theme optimized version where the smoke is blended onto deep charcoal #0c0d0e
  // Create a deep charcoal background and composite the logo with screen / blend mode
  const bg = await sharp({
    create: {
      width: 790,
      height: 250,
      channels: 4,
      background: { r: 12, g: 13, b: 14, alpha: 1 }
    }
  }).png().toBuffer();

  const croppedRaw = await sharp(rawPath)
    .extract({ left: 120, top: 45, width: 790, height: 250 })
    .toBuffer();

  // Save logo-dark (on #0c0d0e)
  await sharp(bg)
    .composite([{ input: croppedRaw, blend: 'screen' }])
    .png()
    .toFile(path.join(publicDir, 'logo-dark.png'));

  // Save the emblem crop (the 4 mark with film perforations)
  // Emblem is approximately left: 120, top: 50, width: 235, height: 215
  await sharp(rawPath)
    .extract({ left: 120, top: 50, width: 235, height: 215 })
    .png()
    .toFile(path.join(publicDir, 'logo-emblem.png'));

  // Generate favicon sizes from emblem
  const sizes = [16, 32, 48, 64, 180, 512];
  for (const s of sizes) {
    await sharp(path.join(publicDir, 'logo-emblem.png'))
      .resize(s, s, { fit: 'contain', background: { r: 12, g: 13, b: 14, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, `favicon-${s}x${s}.png`));
  }

  // Default favicon.ico and favicon.png
  await sharp(path.join(publicDir, 'favicon-32x32.png'))
    .toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(path.join(publicDir, 'favicon-32x32.png'))
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('Brand assets generated successfully!');
}

processBrandAssets().catch(console.error);
