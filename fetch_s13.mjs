import * as cheerio from 'cheerio';
import fs from 'fs';

async function main() {
  const res = await fetch('https://www.isls-liversurgeon.org/01_about/s13.html');
  const data = await res.text();
  const $ = cheerio.load(data);
  const html = $('.con_detail').html();
  fs.writeFileSync('C:/Users/김훈/.gemini/antigravity/brain/87268939-6248-4b3a-92e8-a6e83e1839a3/scratch/s13_extracted.html', html || 'Not Found');
}
main();
