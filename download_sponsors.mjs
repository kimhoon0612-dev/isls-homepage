import fs from 'fs';
import path from 'path';
import https from 'https';

const sponsorImages = [
  "/images/sponsor/2024/s_06.jpg",
  "/images/sponsor/2025/s_08.gif",
  "/images/sponsor/2023/s_62.gif",
  "/images/sponsor/2023/s_65.png",
  "/images/sponsor/2023/s_45.png",
  "/images/sponsor/2024/s_76.jpg",
  "/images/sponsor/2024/s_78.gif",
  "/images/sponsor/2024/s_79.jpg",
  "/images/sponsor/2024/s_80.gif",
  "/images/sponsor/2024/s_83.jpg",
  "/images/sponsor/2024/s_85.jpg",
  "/images/sponsor/2024/s_87.gif",
  "/images/sponsor/2024/s_88.gif",
  "/images/sponsor/2024/s_89.gif",
  "/images/sponsor/2024/s_90.gif",
  "/images/sponsor/2025/s_09.gif",
  "/images/sponsor/2024/s_92.gif",
  "/images/sponsor/2025/s_01.gif",
  "/images/sponsor/2025/s_03.gif",
  "/images/sponsor/2025/s_04.jpg",
  "/images/sponsor/2025/s_05.jpg",
  "/images/sponsor/2025/s_06.gif",
  "/images/sponsor/2025/s_07.gif",
  "/images/sponsor/2025/s_10.gif",
  "/images/sponsor/2025/s_12.gif",
  "/images/sponsor/2025/s_13.gif",
  "/images/sponsor/2025/s_14.gif",
  "/images/sponsor/2026/s_01.jpg",
  "/images/sponsor/2026/s_02.gif"
];

const download = (url, dest) => {
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
};

async function downloadAll() {
  const baseUrl = 'https://www.isls-liversurgeon.org';
  
  for (const src of sponsorImages) {
    const url = baseUrl + src;
    const filename = path.basename(src);
    const dest = path.join(process.cwd(), 'public', 'images', 'sponsor', filename);
    
    console.log(`Downloading ${url} to ${dest}...`);
    try {
      await download(url, dest);
    } catch (e) {
      console.error(`Failed to download ${url}: ${e.message}`);
    }
  }
  
  console.log('All downloads completed or attempted.');
}

downloadAll();
