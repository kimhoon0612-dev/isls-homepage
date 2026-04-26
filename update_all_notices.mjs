import * as cheerio from 'cheerio';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allNotices = [];

  for (let page = 1; page <= 8; page++) {
    const url = `https://www.isls-liversurgeon.org/04_notice/s41.html?curPage=${page}&SearchID=&SearchKeyWord=&Bid=notice&PageSize=5&DelFlag=1`;
    console.log(`Fetching page ${page}: ${url}`);
    
    try {
      const res = await fetch(url);
      const html = await res.text();
      const $ = cheerio.load(html);
      
      $('.panel-default').each((i, el) => {
        const a = $(el).find('.panel-heading a');
        const dateStr = a.find('span').text().trim();
        const title = a.text().replace(dateStr, '').trim();
        let content = $(el).find('.panel-body').html() || '';
        
        // Fix relative image paths
        content = content.replace(/src="\/ckimages\//g, 'src="https://www.isls-liversurgeon.org/ckimages/');
        content = content.replace(/src="\/images\//g, 'src="https://www.isls-liversurgeon.org/images/');
        content = content.replace(/href="\/ckfinder\//g, 'href="https://www.isls-liversurgeon.org/ckfinder/');
        
        let createdAt = new Date();
        if (dateStr) {
          const parsed = new Date(dateStr);
          if (!isNaN(parsed)) {
            createdAt = parsed;
          }
        }

        if (title) {
          allNotices.push({
            title,
            content,
            isImportant: false, // Default
            viewCount: Math.floor(Math.random() * 500) + 100, // Dummy view count
            createdAt
          });
        }
      });
    } catch (e) {
      console.error(`Failed to fetch page ${page}:`, e);
    }
  }

  // Mark the first 2 of the most recent as important
  if (allNotices.length > 0) {
    allNotices[0].isImportant = true;
  }
  if (allNotices.length > 1) {
    allNotices[1].isImportant = true;
  }
  
  console.log(`Found a total of ${allNotices.length} notices.`);
  
  // Clear existing notices
  await prisma.notice.deleteMany({});
  
  // Insert new notices
  for (const notice of allNotices) {
    await prisma.notice.create({
      data: notice
    });
  }
  
  console.log("Seeded database with ALL new notices.");
  await prisma.$disconnect();
}

main().catch(console.error);
