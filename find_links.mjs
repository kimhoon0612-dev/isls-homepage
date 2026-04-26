import * as cheerio from 'cheerio';

async function main() {
  const res = await fetch('https://www.isls-liversurgeon.org/');
  const html = await res.text();
  const $ = cheerio.load(html);
  $('a').each((i, el) => {
    const text = $(el).text().trim();
    if (text.toLowerCase().includes('committee')) {
      console.log('FOUND:', $(el).attr('href'), text);
    }
  });
}
main();
