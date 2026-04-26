import fs from 'fs';

async function scrape() {
  try {
    const res = await fetch('https://www.isls-liversurgeon.org/');
    const html = await res.text();
    
    // Look for a section with class or id containing 'sponsor', 'partner', 'endorse'
    const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/gi;
    let match;
    const imgs = [];
    while ((match = imgRegex.exec(html)) !== null) {
      if(match[0].toLowerCase().includes('sponsor') || match[0].toLowerCase().includes('logo') || match[1].includes('upload') || match[1].includes('banner')) {
        imgs.push({ src: match[1], fullTag: match[0] });
      }
    }
    
    console.log(JSON.stringify(imgs, null, 2));
  } catch(e) {
    console.error(e);
  }
}
scrape();
