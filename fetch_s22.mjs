import * as cheerio from 'cheerio';
import fs from 'fs';

async function fetchHtml() {
  const res = await fetch('https://www.isls-liversurgeon.org/02_membership/s22.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  // Usually the content is inside `#contents` or `.section`
  let content = $('.section').html() || $('#contents').html() || $('body').html();
  fs.writeFileSync('c:/Users/김훈/Desktop/프로그램 개발/260426_ISLS 홈페이지/s22_raw.html', content);
  console.log("Saved s22_raw.html");
}

fetchHtml();
