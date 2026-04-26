import fs from 'fs';

async function fetchPage(url, filename) {
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
  await fetchPage('https://www.isls-liversurgeon.org/00_members/signup.html', 'legacy_signup.html');
}

main();
