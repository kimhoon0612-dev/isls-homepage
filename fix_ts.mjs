import fs from 'fs';

const files = [
  'c:/Users/김훈/Desktop/프로그램 개발/260426_ISLS 홈페이지/src/app/committee/page.tsx',
  'c:/Users/김훈/Desktop/프로그램 개발/260426_ISLS 홈페이지/src/app/fellowship/page.tsx',
  'c:/Users/김훈/Desktop/프로그램 개발/260426_ISLS 홈페이지/src/app/relevant-meetings/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('const menuItems = [];', 'const menuItems: { name: string; href: string }[] = [];');
  fs.writeFileSync(file, content);
}
