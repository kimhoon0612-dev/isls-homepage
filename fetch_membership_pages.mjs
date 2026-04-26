import fs from 'fs';

async function fetchPage(url, filename) {
  console.log('Fetching', url);
  try {
    const res = await fetch(url);
    const html = await res.text();
    fs.writeFileSync(filename, html);
    console.log("Saved", filename);
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  await fetchPage('https://www.isls-liversurgeon.org/02_membership/s25.html', 'legacy_s25.html');
  await fetchPage('https://www.isls-liversurgeon.org/02_membership/s26.html', 'legacy_s26.html');
}

main();
