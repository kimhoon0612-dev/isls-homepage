import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape() {
  try {
    const res = await fetch('https://www.isls-liversurgeon.org/01_about/s11.html');
    const html = await res.text();
    const $ = cheerio.load(html);

    // Save the whole body to inspect
    fs.writeFileSync('about_raw.html', $('body').html() || html);
    console.log("Saved body to about_raw.html");
  } catch(e) {
    console.error(e);
  }
}
scrape();
