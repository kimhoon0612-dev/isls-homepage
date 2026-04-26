import * as cheerio from 'cheerio';
import fs from 'fs';

async function fetchHtml() {
  const res = await fetch('https://www.isls-liversurgeon.org/02_membership/s27.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  // Find the button
  const link = $('a:contains("Go to read IJS")').attr('href');
  console.log("Original Link:", link);
}

fetchHtml();
