const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\KIIT\\.gemini\\antigravity-ide\\brain\\3b3471e2-cf8c-48d0-9c7c-af8a2051da0d';
const targetDir = path.resolve(__dirname, '../public/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);

const mapping = {
  'hero_production': 'hero-production',
  'intro_partner': 'intro-partner',
  'stage_construction': 'service-stage-construction',
  'advertising_commercial': 'service-advertising',
  'movie_production': 'service-movie-production',
  'events_production': 'service-events-production',
  'staffing_crew': 'service-staffing',
  'technical_support': 'service-technical-support',
  'pr_management': 'service-pr-management',
  'consulting_planning': 'service-consulting',
  'about_hero': 'about-hero',
  'cta_production': 'cta-production'
};

async function processImages() {
  console.log('Processing images...');
  for (const [prefix, targetName] of Object.entries(mapping)) {
    const match = files.find(f => f.startsWith(prefix) && (f.endsWith('.jpg') || f.endsWith('.png')));
    if (match) {
      const srcPath = path.join(brainDir, match);
      const destJpg = path.join(targetDir, `${targetName}.jpg`);
      const destWebp = path.join(targetDir, `${targetName}.webp`);
      
      console.log(`Processing ${match} -> ${targetName}`);
      
      // Save high quality WebP
      await sharp(srcPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(destWebp);

      // Save optimized JPEG
      await sharp(srcPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(destJpg);
    } else {
      console.warn(`Could not find image for prefix: ${prefix}`);
    }
  }
  console.log('Images processed successfully!');
}

processImages().catch(console.error);
