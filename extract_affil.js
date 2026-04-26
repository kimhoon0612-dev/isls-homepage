const fs = require('fs');
const html = fs.readFileSync('legacy_signup_post.html', 'utf8');
const match = html.match(/<select name="selAffiliationCode"[^>]*>([\s\S]*?)<\/select>/);
if(match) {
  const optionsStr = match[1];
  const regex = /<option value="([^"]+)" eng-data="([^"]*)">([^<]+)<\/option>/g;
  let optMatch;
  const arr = [];
  while((optMatch = regex.exec(optionsStr)) !== null) {
    if(optMatch[1]) {
      arr.push({ value: optMatch[1], eng: optMatch[2] || '', kor: optMatch[3] });
    }
  }
  if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
  }
  fs.writeFileSync('src/data/affiliations.json', JSON.stringify(arr, null, 2));
  console.log('Saved ' + arr.length + ' affiliations to src/data/affiliations.json');
}
