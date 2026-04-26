import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const sections = [
  {
    category: 'membership',
    title: 'Membership',
    pages: [
      { route: 'about', url: 'https://www.isls-liversurgeon.org/02_membership/s21.html', id: '#About', title: 'About ISLS Membership' },
      { route: 'bylaws', url: 'https://www.isls-liversurgeon.org/02_membership/s26.html', id: '#By-laws', title: 'By-laws' },
      { route: 'journal', url: 'https://www.isls-liversurgeon.org/02_membership/s27.html', id: '#Journal', title: 'Journal' },
    ]
  },
  {
    category: 'events',
    title: 'Events',
    pages: [
      { route: 'congress', url: 'https://www.isls-liversurgeon.org/03_events/s31.html', id: '#ISLSCongress', title: 'ISLS Congress' },
      { route: 'symposia', url: 'https://www.isls-liversurgeon.org/03_events/s32.html', id: '#SingleTopic', title: 'Single Topic Symposia' },
      { route: 'webinars', url: 'https://www.isls-liversurgeon.org/03_events/s33.html', id: '#Webinar', title: 'ISLS Webinars' }
    ]
  },
  {
    category: 'donation',
    title: 'Donation',
    pages: [
      { route: 'why', url: 'https://www.isls-liversurgeon.org/99_donation/s91.html', id: '#WhyDonation', title: 'Why donation' },
      { route: 'wall', url: 'https://www.isls-liversurgeon.org/99_donation/s92.html', id: '#DonationWall', title: 'Donation Wall' }
      // Skipping make a donation because it's an external form or custom payment gateway
    ]
  },
  {
    category: 'committee',
    title: 'Committee',
    pages: [
      { route: '', url: 'https://www.isls-liversurgeon.org/09_committee/s91.html', id: '.col-md-9', title: 'Committee' }
    ]
  },
  {
    category: 'study-group',
    title: 'Study Group',
    pages: [
      { route: 'about', url: 'https://www.isls-liversurgeon.org/07_study/s71.html', id: '#About', title: 'About ISLS Study Group Platform' },
      { route: 'leaders', url: 'https://www.isls-liversurgeon.org/07_study/s72.html', id: '#StudyGroupLeaders', title: 'Study Group Leaders' }
    ]
  },
  {
    category: 'fellowship',
    title: 'Fellowship',
    pages: [
      { route: '', url: 'https://www.isls-liversurgeon.org/10_fellowship/s10.html', id: '.col-md-9', title: 'Fellowship' }
    ]
  },
  {
    category: 'relevant-meetings',
    title: 'Relevant Meetings',
    pages: [
      { route: '', url: 'https://www.isls-liversurgeon.org/05_meeting/s51.html', id: '.col-md-9', title: 'Relevant Meetings' }
    ]
  }
];

const generatePage = (category, title, route, contentHTML, menuTitle) => `
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "Placeholder", href: "#" }
  ];

  return (
    <SubLayout title="${title}" menuTitle="${menuTitle}" menuItems={[]} currentPath="/${category}${route ? '/' + route : ''}">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: \`${contentHTML.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} />
    </SubLayout>
  );
}
`;

async function scrapeAll() {
  for (const section of sections) {
    for (const page of section.pages) {
      try {
        console.log(`Fetching ${page.url}...`);
        const res = await fetch(page.url);
        const html = await res.text();
        const $ = cheerio.load(html);

        let content = $(page.id).html();
        
        // If ID failed, fallback to .col-md-9 or .sub-contents
        if (!content) {
           content = $('.col-md-9').html() || $('.sub-contents').html() || `<p>Content for ${page.title} is being updated.</p>`;
        }

        // Clean up relative paths
        content = content.replace(/src="\/images/g, 'src="https://www.isls-liversurgeon.org/images');
        content = content.replace(/href="\/data/g, 'href="https://www.isls-liversurgeon.org/data');

        // Create directory
        const dirPath = page.route ? path.join(process.cwd(), 'src', 'app', section.category, page.route) : path.join(process.cwd(), 'src', 'app', section.category);
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

        // Save file
        fs.writeFileSync(path.join(dirPath, 'page.tsx'), generatePage(section.category, page.title, page.route, content, section.title));
        console.log(`Generated page for /${section.category}/${page.route}`);
      } catch (e) {
        console.error(`Error fetching ${page.url}:`, e);
      }
    }
  }
}

scrapeAll();
