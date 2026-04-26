import fs from 'fs';
import * as cheerio from 'cheerio';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const html = fs.readFileSync('s41_notice.html', 'utf8');
  const $ = cheerio.load(html);
  
  const notices = [];
  
  $('.panel-default').each((i, el) => {
    const a = $(el).find('.panel-heading a');
    const dateStr = a.find('span').text().trim();
    const title = a.text().replace(dateStr, '').trim();
    let content = $(el).find('.panel-body').html() || '';
    
    // Fix relative image paths
    content = content.replace(/src="\/ckimages\//g, 'src="https://www.isls-liversurgeon.org/ckimages/');
    
    // Convert dateStr to Date object, fallback to now if invalid
    let createdAt = new Date();
    if (dateStr) {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed)) {
        createdAt = parsed;
      }
    }

    if (title) {
      notices.push({
        title,
        content,
        isImportant: i < 2, // Arbitrary rule for important notices
        viewCount: Math.floor(Math.random() * 500) + 100, // Dummy view count
        createdAt
      });
    }
  });
  
  console.log(`Found ${notices.length} notices on page 1.`);
  
  // Clear existing notices
  await prisma.notice.deleteMany({});
  
  // Insert new notices
  for (const notice of notices) {
    await prisma.notice.create({
      data: notice
    });
  }
  
  console.log("Seeded database with new notices.");
  await prisma.$disconnect();
}

main().catch(console.error);
