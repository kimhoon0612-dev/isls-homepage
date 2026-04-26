import fs from 'fs';
import path from 'path';

const menuItemsMap = {
  'membership': `[
    { name: "About ISLS Membership", href: "/membership/about" },
    { name: "Join or Renew", href: "/membership/join" },
    { name: "My ISLS Membership", href: "/membership/mypage" },
    { name: "VOD / E-Learning", href: "/membership/vod" },
    { name: "ISLS Members list", href: "/membership/members" },
    { name: "By-laws", href: "/membership/bylaws" },
    { name: "Journal", href: "/membership/journal" },
  ]`,
  'events': `[
    { name: "ISLS Congress", href: "/events/congress" },
    { name: "Single Topic Symposia", href: "/events/symposia" },
    { name: "ISLS Webinars", href: "/events/webinars" },
  ]`,
  'donation': `[
    { name: "Why donation", href: "/donation/why" },
    { name: "Donation Wall", href: "/donation/wall" },
    { name: "Make a donation", href: "/donation/make" },
  ]`,
  'committee': `[]`,
  'study-group': `[
    { name: "About ISLS Study Group Platform", href: "/study-group/about" },
    { name: "Study Group Leaders", href: "/study-group/leaders" },
  ]`,
  'fellowship': `[]`,
  'relevant-meetings': `[]`
};

function processDirectory(dir, category) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath, category);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for the placeholder menu array and replace it
      const placeholderRegex = /const menuItems = \[\s*{\s*name: "Placeholder", href: "#"\s*}\s*\];/;
      if (placeholderRegex.test(content)) {
        content = content.replace(placeholderRegex, `const menuItems = ${menuItemsMap[category]};`);
        
        // Also fix the <SubLayout menuItems={[]}> to <SubLayout menuItems={menuItems}>
        content = content.replace(/menuItems=\{\[\]\}/, 'menuItems={menuItems}');
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

const appDir = path.join(process.cwd(), 'src', 'app');

for (const category of Object.keys(menuItemsMap)) {
  const catDir = path.join(appDir, category);
  if (fs.existsSync(catDir)) {
    processDirectory(catDir, category);
  }
}
