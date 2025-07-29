const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function verifyAndFixUsers() {
  try {
    console.log('🔍 Checking users in database...\n');
    
    // Get all users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        emailVerified: true,
      }
    });

    console.log(`Found ${users.length} users:\n`);

    // Test passwords and fix if needed
    const testPasswords = {
      'admin@marineflow.com': 'admin123',
      'client@example.com': 'client2024',
      'sales@marineflow.com': 'sales2024',
      'demo@marineflow.com': 'demo2024'
    };

    for (const user of users) {
      console.log(`👤 ${user.name} (${user.email})`);
      
      const expectedPassword = testPasswords[user.email];
      if (expectedPassword) {
        const isValid = await bcrypt.compare(expectedPassword, user.password);
        console.log(`   Password valid: ${isValid ? '✅' : '❌'}`);
        
        if (!isValid) {
          console.log(`   🔧 Fixing password...`);
          const newHash = await bcrypt.hash(expectedPassword, 10);
          await prisma.user.update({
            where: { id: user.id },
            data: { password: newHash }
          });
          console.log(`   ✅ Password fixed`);
        }
      } else {
        console.log(`   ⚠️  No test password defined for this user`);
      }
      console.log('');
    }

    console.log('🎉 User verification complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the verification
verifyAndFixUsers(); 