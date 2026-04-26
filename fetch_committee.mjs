import * as cheerio from 'cheerio';
import fs from 'fs';

async function main() {
  const res = await fetch('https://www.isls-liversurgeon.org/09_committee/s91.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  // Extract images
  const images = [];
  $('.con_detail img').each((i, el) => {
    images.push($(el).attr('src'));
  });
  console.log("Images found:", images);
  
  fs.writeFileSync('C:/Users/김훈/.gemini/antigravity/brain/87268939-6248-4b3a-92e8-a6e83e1839a3/scratch/committee_raw.html', $('.con_detail').html() || '');
}
main();
