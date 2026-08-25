import fs from 'fs';
import path from 'path';

const legacyDir = '/Users/jessefulton/Projects/jessefulton.com/contents/portfolio';
const publicDir = '/Users/jessefulton/Projects/jessefulton.com/public/media/projects';

const mappings = [
  { legacy: 'air-quest', dest: 'air-quest' },
  { legacy: 'wildlife-tracker', dest: 'ucsc-wildlife-tracker' },
  { legacy: 'drawing-machines', dest: 'drawing-machines' },
  { legacy: 'everybodys-google', dest: 'everybodys-google' },
  { legacy: 'flying-toasters-redux', dest: 'flying-toasters-redux' },
  { legacy: 'the-serendipity-engine', dest: 'the-serendipity-engine' },
  { legacy: 'simone', dest: 'simone' },
  { legacy: 'consumer-electronics-interfaces', dest: 'consumer-electronics-interfaces' },
  { legacy: 'live-visuals', dest: 'live-visuals' },
  { legacy: 'the-golden-hour', dest: 'the-golden-hour' },
  { legacy: 'm2s', dest: 'm2s' }
];

for (const m of mappings) {
  const srcImgDir = path.join(legacyDir, m.legacy, 'images');
  const targetDir = path.join(publicDir, m.dest);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  if (fs.existsSync(srcImgDir)) {
    const files = fs.readdirSync(srcImgDir);
    for (const file of files) {
      const srcFile = path.join(srcImgDir, file);
      const stat = fs.statSync(srcFile);
      if (stat.isFile()) {
        fs.copyFileSync(srcFile, path.join(targetDir, file));
      }
    }
    console.log(`Copied ${files.length} images for ${m.dest}`);
  }
}
