import * as cheerio from 'cheerio';

async function fetchSponsors() {
  const res = await fetch('https://www.isls-liversurgeon.org/');
  const html = await res.text();
  const $ = cheerio.load(html);

  const sponsors = [];
  $('.logo-slider img').each((i, el) => {
    const parentA = $(el).closest('a');
    const href = parentA.attr('href') || '#';
    const src = $(el).attr('src');
    if (src) {
      const filename = src.split('/').pop();
      sponsors.push({ filename, href });
    }
  });
  
  // They also have another slider maybe? Let's also check just any a > img with sponsor inside
  $('a img[src*="sponsor"]').each((i, el) => {
    const parentA = $(el).closest('a');
    const href = parentA.attr('href') || '#';
    const src = $(el).attr('src');
    if (src) {
      const filename = src.split('/').pop();
      // Check if not already added
      if (!sponsors.find(s => s.filename === filename)) {
        sponsors.push({ filename, href });
      }
    }
  });

  console.log(JSON.stringify(sponsors, null, 2));
}

fetchSponsors();
