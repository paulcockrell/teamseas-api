import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const bob = await prisma.donation.create({
    data: {
      email: 'bob@cockrell.io',
      displayName: 'Bob',
      count: 5,
    },
  });

  console.log({ bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
