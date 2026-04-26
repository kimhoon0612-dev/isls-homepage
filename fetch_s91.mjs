import fs from 'fs';

async function fetchForm() {
  const url = 'https://www.isls-liversurgeon.org/99_donation/s91.html';
  console.log('Fetching', url);
  try {
    const res = await fetch(url);
    const html = await res.text();
    fs.writeFileSync('legacy_s91.html', html);
    console.log("Saved legacy_s91.html");
  } catch (err) {
    console.error(err);
  }
}

fetchForm();
