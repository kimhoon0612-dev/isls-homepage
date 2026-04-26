import fs from 'fs';
fetch('https://www.isls-liversurgeon.org/07_study/s71.html')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('s71_study.html', text);
    console.log("Saved s71_study.html");
  })
  .catch(console.error);
