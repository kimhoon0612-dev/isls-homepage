import fs from 'fs';
import path from 'path';

const generatePage = (title, route) => `
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "About ISLS Membership", href: "/membership/about" },
    { name: "Join or Renew", href: "/membership/join" },
    { name: "My ISLS Membership", href: "/membership/mypage" },
    { name: "VOD / E-Learning", href: "/membership/vod" },
    { name: "ISLS Members list", href: "/membership/members" },
    { name: "By-laws", href: "/membership/bylaws" },
    { name: "Journal", href: "/membership/journal" },
  ];

  return (
    <SubLayout title="${title}" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/${route}">
      <div className="prose max-w-none prose-lg text-gray-700">
        <h3>${title}</h3>
        <p>This section is currently under development. Detailed features for ${title} will be implemented here.</p>
      </div>
    </SubLayout>
  );
}
`;

const pages = {
  'about': 'About ISLS Membership',
  'join': 'Join or Renew',
  'mypage': 'My ISLS Membership',
  'vod': 'VOD / E-Learning',
  'members': 'ISLS Members list',
  'bylaws': 'By-laws',
  'journal': 'Journal'
};

for (const [route, title] of Object.entries(pages)) {
  const dir = path.join(process.cwd(), 'src', 'app', 'membership', route);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePage(title, route));
  console.log(`Generated page for ${route}`);
}
