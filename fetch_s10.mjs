import fs from 'fs';
fetch('https://www.isls-liversurgeon.org/10_fellowship/s10.html')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('s10_fellowship.html', text);
    console.log("Saved s10_fellowship.html");
  })
  .catch(console.error);
