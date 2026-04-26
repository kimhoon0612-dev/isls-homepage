import * as cheerio from 'cheerio';

async function checkUrl(url) {
  const res = await fetch(url);
  if (!res.ok) {
    console.log(url, 'NOT OK');
    return;
  }
  const html = await res.text();
  const $ = cheerio.load(html);
  const mainCol = $('.mainCol').html();
  if (mainCol) {
    console.log(url, 'has .mainCol, length:', mainCol.length);
  } else {
    console.log(url, 'no .mainCol');
  }
}

async function run() {
  await checkUrl('https://www.isls-liversurgeon.org/02_membership/s21.html');
  await checkUrl('https://www.isls-liversurgeon.org/02_membership/s22.html');
  await checkUrl('https://www.isls-liversurgeon.org/02_membership/s23.html');
  await checkUrl('https://www.isls-liversurgeon.org/02_membership/s24.html');
}

run();
