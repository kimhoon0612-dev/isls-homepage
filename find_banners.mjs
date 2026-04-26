import * as cheerio from 'cheerio';

const urls = {
  about: 'https://www.isls-liversurgeon.org/01_about/s11.html',
  membership: 'https://www.isls-liversurgeon.org/02_membership/s21.html',
  events: 'https://www.isls-liversurgeon.org/03_events/s31.html',
  donation: 'https://www.isls-liversurgeon.org/99_donation/s91.html',
  committee: 'https://www.isls-liversurgeon.org/09_committee/s91.html',
  study_group: 'https://www.isls-liversurgeon.org/07_study/s71.html',
  fellowship: 'https://www.isls-liversurgeon.org/10_fellowship/s10.html',
  relevant_meetings: 'https://www.isls-liversurgeon.org/05_meeting/s51.html',
  notice: 'https://www.isls-liversurgeon.org/04_notice/s41.html'
};

async function check() {
  for (const [key, url] of Object.entries(urls)) {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    let found = false;
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.includes('sub_img')) {
        console.log(key, '->', src);
        found = true;
      }
    });
    if (!found) {
      console.log(key, '-> No sub_img found');
    }
  }
}

check();
