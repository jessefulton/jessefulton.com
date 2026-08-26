import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = './public/media/illustrations';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const img1Path = '/Users/jessefulton/.gemini/antigravity-ide/brain/f8639f05-0803-4774-a08a-260a5c29fc44/.user_uploaded/media_1787720507822.png';
const img2Path = '/Users/jessefulton/.gemini/antigravity-ide/brain/f8639f05-0803-4774-a08a-260a5c29fc44/.user_uploaded/media_1787720507847.png';

async function processImage(srcPath, baseName) {
  const { data, info } = await sharp(srcPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  
  const rgbaDark = Buffer.alloc(width * height * 4);
  const rgbaWhite = Buffer.alloc(width * height * 4);
  const rgbaGold = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    
    const brightness = (r + g + b) / 3;
    
    let alpha = 255 - brightness;
    if (brightness > 240) alpha = 0;
    else if (brightness < 50) alpha = 255;
    else {
      alpha = Math.round(((240 - brightness) / 190) * 255);
    }

    // Titanium white lines (for dark theme)
    rgbaWhite[i * 4] = 244;     // R
    rgbaWhite[i * 4 + 1] = 245; // G
    rgbaWhite[i * 4 + 2] = 247; // B
    rgbaWhite[i * 4 + 3] = alpha;

    // Gold lines version
    rgbaGold[i * 4] = 229;     // R (#E5B80B)
    rgbaGold[i * 4 + 1] = 184; // G
    rgbaGold[i * 4 + 2] = 11;  // B
    rgbaGold[i * 4 + 3] = alpha;

    // Dark lines version
    rgbaDark[i * 4] = 12;     // R
    rgbaDark[i * 4 + 1] = 14; // G
    rgbaDark[i * 4 + 2] = 18; // B
    rgbaDark[i * 4 + 3] = alpha;
  }

  await sharp(rgbaWhite, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(outDir, `${baseName}-white.png`));

  await sharp(rgbaGold, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(outDir, `${baseName}-gold.png`));

  await sharp(rgbaDark, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(outDir, `${baseName}-dark.png`));

  fs.copyFileSync(srcPath, path.join(outDir, `${baseName}-orig.png`));

  console.log(`Processed ${baseName} successfully (${width}x${height})`);
}

async function main() {
  await processImage(img1Path, 'jesse-beanie');
  await processImage(img2Path, 'jesse-bald');
}

main().catch(console.error);
