import fs from 'fs';
import path from 'path';

const liveImages = [
  { slug: 'my-jiffy-lube', file: '121693711_3542294332496101_608837742739006196_n.jpg', url: 'https://jessefulton.com/projects/121693711_3542294332496101_608837742739006196_n.jpg' },
  { slug: 'optus-house', file: 'Screenshot_2024-01-09_130927-crop.jpg', url: 'https://jessefulton.com/projects/Screenshot_2024-01-09_130927-crop.jpg' },
  { slug: 'terminal-tours', file: 'Screenshot_2024-01-09_112526.jpg', url: 'https://jessefulton.com/projects/Screenshot_2024-01-09_112526.jpg' },
  { slug: 'visa-riopool', file: 'RioPOOL_hero_LG.jpg', url: 'https://jessefulton.com/projects/RioPOOL_hero_LG.jpg' },
  { slug: 'salesforce-iq', file: 'sfiq-005.png', url: 'https://jessefulton.com/projects/sfiq-005.png' },
  { slug: 'sage-summit', file: '11794375_808478369249650_8352536067187652371_o.jpg', url: 'https://jessefulton.com/projects/11794375_808478369249650_8352536067187652371_o.jpg' },
  { slug: 'nike-jordan-retail', file: 'Screenshot_2024-01-09_112328.jpg', url: 'https://jessefulton.com/projects/Screenshot_2024-01-09_112328.jpg' },
];

const basePublicDir = '/Users/jessefulton/Projects/jessefulton.com/public/media/projects';

async function fetchLiveImages() {
  for (const item of liveImages) {
    const dir = path.join(basePublicDir, item.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const dest = path.join(dir, item.file);

    try {
      console.log(`Downloading ${item.slug}/${item.file}...`);
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buffer);
        console.log(`Saved: ${dest} (${buffer.length} bytes)`);
      } else {
        console.warn(`Failed (${res.status}): ${item.url}`);
      }
    } catch (e) {
      console.error(`Error: ${e.message}`);
    }
  }
}

fetchLiveImages();
