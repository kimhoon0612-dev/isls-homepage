import fs from 'fs';
import path from 'path';

const newsletters = [
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_2026_02.html", filename: "newsletter_2026_02.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_2026_01.html", filename: "newsletter_2026_01.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_37_eng.html", filename: "newsletter_37_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_36_eng.html", filename: "newsletter_36_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_35_eng.html", filename: "newsletter_35_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_34_eng.html", filename: "newsletter_34_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_33_eng.html", filename: "newsletter_33_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_32_eng.html", filename: "newsletter_32_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_31_eng.html", filename: "newsletter_31_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_30_eng.html", filename: "newsletter_30_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_29_eng.html", filename: "newsletter_29_eng.html" },
  { url: "https://www.isls-liversurgeon.org/newsletter/newsletter_28_eng.html", filename: "newsletter_28_eng.html" },
];

const dir = path.join(process.cwd(), 'public', 'newsletter');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function downloadAndCenter() {
  for (const nl of newsletters) {
    try {
      console.log(`Downloading ${nl.url}...`);
      const res = await fetch(nl.url);
      let html = await res.text();
      
      // Fix relative image paths to absolute
      html = html.replace(/src="images\//g, 'src="https://www.isls-liversurgeon.org/newsletter/images/');
      html = html.replace(/src='images\//g, "src='https://www.isls-liversurgeon.org/newsletter/images/");
      html = html.replace(/src="\/images\//g, 'src="https://www.isls-liversurgeon.org/images/');
      html = html.replace(/background="images\//g, 'background="https://www.isls-liversurgeon.org/newsletter/images/');
      
      // Inject centering style
      const styleInjection = `
<style>
  body {
    background-color: #f4f4f4 !important;
    margin: 0 !important;
    padding: 20px 0 !important;
    text-align: center !important;
  }
  table {
    margin: 0 auto !important;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
</style>
`;
      if (html.includes('</head>')) {
        html = html.replace('</head>', styleInjection + '</head>');
      } else {
        html = styleInjection + html;
      }
      
      fs.writeFileSync(path.join(dir, nl.filename), html);
      console.log(`Saved ${nl.filename}`);
    } catch(err) {
      console.error(`Failed to download ${nl.filename}:`, err);
    }
  }
}

downloadAndCenter();
