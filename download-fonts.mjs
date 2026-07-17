import fs from 'fs';
import path from 'path';
import https from 'https';

const FONTS_DIR = path.join(process.cwd(), 'public', 'fonts');
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const fonts = [
    { name: 'playfair-display', variants: ['regular', '700', 'italic'] },
    { name: 'inter', variants: ['300', 'regular', '600'] }
  ];

  for (const font of fonts) {
    const res = await new Promise((resolve) => {
      https.get(`https://gwfh.mranv.com/api/fonts/${font.name}?subsets=latin`, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve(JSON.parse(data)));
      });
    });

    for (const variant of res.variants) {
      if (font.variants.includes(variant.id)) {
        const url = variant.woff2;
        const filename = `${font.name}-${variant.id}.woff2`;
        console.log(`Downloading ${filename}...`);
        await downloadFile(url, path.join(FONTS_DIR, filename));
      }
    }
  }
  console.log('Fonts downloaded.');
}

run();
