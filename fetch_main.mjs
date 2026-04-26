import fs from 'fs';

async function fetchMain() {
  console.log('Fetching main page');
  try {
    const res = await fetch('https://www.isls-liversurgeon.org/');
    const html = await res.text();
    fs.writeFileSync('legacy_main.html', html);
    console.log("Saved legacy_main.html");
  } catch (err) {
    console.error(err);
  }
}

fetchMain();
