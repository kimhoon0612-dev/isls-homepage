const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({});

async function main() {
  console.log("Seeding notices...");

  const notices = [
    {
      title: "Invitation the Bid for Single Topic Symposium 2026",
      content: "<p><strong>Invitation the Bid for Single Topic Symposium (STS)</strong></p><p>The International Society of Liver Surgeons (ISLS) invites you to host the upcoming STS in 2026. Please find the attached bid manual for more information.</p>",
      isImportant: true,
      viewCount: 124,
      createdAt: new Date("2025-07-25T00:00:00Z"),
    },
    {
      title: "Announcement for the 2024 Fellowship Awardee",
      content: "<p>We are proud to announce the awardee of the 2024 ISLS Paolo Muiesan Fellowship Program. Congratulations to the selected candidate who will embark on a one-year training program at the designated host institution.</p>",
      isImportant: false,
      viewCount: 89,
      createdAt: new Date("2024-10-28T00:00:00Z"),
    },
    {
      title: "ISLS Paolo Muiesan Fellowship Program",
      content: "<p>The ISLS Paolo Muiesan Fellowship Program has been established to commemorate Dr. Paolo Muiesan who sadly passed away last year. This program supports young liver surgeons to develop their clinical and academic skills.</p>",
      isImportant: true,
      viewCount: 312,
      createdAt: new Date("2023-10-26T00:00:00Z"),
    }
  ];

  for (const notice of notices) {
    await prisma.notice.create({
      data: notice,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
