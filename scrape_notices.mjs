import fs from 'fs';

async function fetchNotices() {
  const url = 'https://www.isls-liversurgeon.org/04_notice/s41.html';
  console.log('Fetching', url);
  try {
    const res = await fetch(url);
    const html = await res.text();
    fs.writeFileSync('s41_notice.html', html);
    console.log("Saved s41_notice.html");
  } catch (err) {
    console.error(err);
  }
}

fetchNotices();
