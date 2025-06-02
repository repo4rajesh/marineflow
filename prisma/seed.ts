import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create a test user with hashed password
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@marineflow.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@marineflow.com',
      password: hashedPassword,
      image: '/images/team/admin.jpg',
      emailVerified: new Date(),
    },
  });

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'technology' },
      update: {},
      create: {
        name: 'Technology',
        slug: 'technology',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'operations' },
      update: {},
      create: {
        name: 'Operations',
        slug: 'operations',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'sustainability' },
      update: {},
      create: {
        name: 'Sustainability',
        slug: 'sustainability',
      },
    }),
  ]);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'ai' },
      update: {},
      create: {
        name: 'AI',
        slug: 'ai',
      },
    }),
    prisma.tag.upsert({
      where: { slug: 'automation' },
      update: {},
      create: {
        name: 'Automation',
        slug: 'automation',
      },
    }),
    prisma.tag.upsert({
      where: { slug: 'green-shipping' },
      update: {},
      create: {
        name: 'Green Shipping',
        slug: 'green-shipping',
      },
    }),
  ]);

  // Create blog posts
  const posts = await Promise.all([
    prisma.post.upsert({
      where: { slug: 'future-of-maritime-technology' },
      update: {},
      create: {
        title: 'The Future of Maritime Technology',
        slug: 'future-of-maritime-technology',
        content: 'Exploring how AI is transforming the maritime industry with advanced automation, predictive analytics, and intelligent decision-making systems...',
        excerpt: 'Exploring how AI is transforming the maritime industry with advanced automation, predictive analytics, and intelligent decision-making systems.',
        image: '/blog/maritime-tech.jpg',
        authorId: user.id,
        categoryId: categories[0].id,
        tags: {
          connect: [tags[0].id, tags[1].id].map(id => ({ id })),
        },
      },
    }),
    prisma.post.upsert({
      where: { slug: 'optimizing-port-operations' },
      update: {},
      create: {
        title: 'Optimizing Port Operations with AI',
        slug: 'optimizing-port-operations',
        content: 'Discover how artificial intelligence is revolutionizing port operations, reducing wait times, and improving overall efficiency in maritime logistics...',
        excerpt: 'Discover how artificial intelligence is revolutionizing port operations, reducing wait times, and improving overall efficiency in maritime logistics.',
        image: '/blog/port-operations.jpg',
        authorId: user.id,
        categoryId: categories[1].id,
        tags: {
          connect: [tags[0].id, tags[1].id].map(id => ({ id })),
        },
      },
    }),
    prisma.post.upsert({
      where: { slug: 'sustainable-shipping-practices' },
      update: {},
      create: {
        title: 'Sustainable Shipping Practices',
        slug: 'sustainable-shipping-practices',
        content: 'Learn about the latest sustainable practices in maritime shipping and how technology is helping reduce environmental impact...',
        excerpt: 'Learn about the latest sustainable practices in maritime shipping and how technology is helping reduce environmental impact.',
        image: '/blog/sustainable-shipping.jpg',
        authorId: user.id,
        categoryId: categories[2].id,
        tags: {
          connect: [tags[2].id].map(id => ({ id })),
        },
      },
    }),
  ]);

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 