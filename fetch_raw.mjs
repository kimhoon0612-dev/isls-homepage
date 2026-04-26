import fs from 'fs';

async function main() {
  const res = await fetch('https://www.isls-liversurgeon.org/09_committee/s91.html');
  const html = await res.text();
  fs.writeFileSync('C:/Users/김훈/.gemini/antigravity/brain/87268939-6248-4b3a-92e8-a6e83e1839a3/scratch/committee_raw.html', html);
}
main();
