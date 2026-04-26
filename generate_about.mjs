import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const generatePage = (title, contentHTML) => `
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "Greetings", href: "/about/greetings" },
    { name: "Council", href: "/about/council" },
    { name: "ISLS Member-at-Large", href: "/about/member-at-large" },
    { name: "ISLS Study Group Board", href: "/about/study-group-board" },
    { name: "Endorsement", href: "/about/endorsement" },
    { name: "ISLS Bid Manual", href: "/about/bid-manual" },
    { name: "Contact us", href: "/about/contact" },
  ];

  return (
    <SubLayout title="${title}" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/${title.toLowerCase().replace(/\s+/g, '-')}">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: \`${contentHTML.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} />
    </SubLayout>
  );
}
`;

async function scrapeAndGenerate() {
  try {
    const res = await fetch('https://www.isls-liversurgeon.org/01_about/s11.html');
    const html = await res.text();
    const $ = cheerio.load(html);

    // The original ISLS site has tab-pane or section divs.
    // We will extract text from specific sections.
    const sections = {
      'greetings': '#Greetings',
      'council': '#Council',
      'member-at-large': '#Member',
      'study-group-board': '#Board',
      'endorsement': '#Endorsement',
      'bid-manual': '#BidManual',
      'contact': '#ManagementOffice'
    };

    for (const [route, selector] of Object.entries(sections)) {
      let content = $(selector).html() || `<p>Content for ${route} will be updated soon.</p>`;
      
      // Clean up relative image paths
      content = content.replace(/src="\/images/g, 'src="https://www.isls-liversurgeon.org/images');

      const titleMap = {
        'greetings': 'Greetings',
        'council': 'Council',
        'member-at-large': 'ISLS Member-at-Large',
        'study-group-board': 'ISLS Study Group Board',
        'endorsement': 'Endorsement',
        'bid-manual': 'ISLS Bid Manual',
        'contact': 'Contact us'
      };

      const dir = path.join(process.cwd(), 'src', 'app', 'about', route);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(path.join(dir, 'page.tsx'), generatePage(titleMap[route], content));
      console.log(`Generated page for ${route}`);
    }

  } catch(e) {
    console.error(e);
  }
}
scrapeAndGenerate();
