import fs from 'fs';

async function fetchHtml() {
  const res = await fetch('https://www.isls-liversurgeon.org/03_events/s31.html');
  const html = await res.text();
  fs.writeFileSync('c:/Users/김훈/Desktop/프로그램 개발/260426_ISLS 홈페이지/s31_events.html', html);
  console.log("Saved s31_events.html");
}

fetchHtml();
