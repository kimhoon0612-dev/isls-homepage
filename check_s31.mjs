import * as cheerio from 'cheerio';

async function fetchHtml() {
  const res = await fetch('https://www.isls-liversurgeon.org/03_events/s31.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  console.log($('.col-md-9').html() ? 'Has .col-md-9' : 'No .col-md-9');
  console.log($('.sub-contents').html() ? 'Has .sub-contents' : 'No .sub-contents');
  console.log($('#content').html() ? 'Has #content' : 'No #content');
  console.log($('section').length, 'sections found');
}

fetchHtml();
