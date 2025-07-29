const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testAuthentication() {
  try {
    console.log('🧪 Testing Authentication Process...\n');
    
    // Test credentials
    const testCredentials = [
      { email: 'admin@marineflow.com', password: 'admin123' },
      { email: 'client@example.com', password: 'client2024' },
      { email: 'sales@marineflow.com', password: 'sales2024' },
      { email: 'demo@marineflow.com', password: 'demo2024' }
    ];

    for (const cred of testCredentials) {
      console.log(`🔐 Testing: ${cred.email}`);
      
      // Step 1: Find user
      const user = await prisma.user.findUnique({
        where: { email: cred.email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          emailVerified: true
        }
      });

      if (!user) {
        console.log(`   ❌ User not found`);
        continue;
      }

      console.log(`   ✅ User found: ${user.name}`);
      console.log(`   📧 Email verified: ${user.emailVerified ? 'Yes' : 'No'}`);
      console.log(`   🔑 Has password: ${user.password ? 'Yes' : 'No'}`);

      // Step 2: Test password
      if (user.password) {
        const isPasswordValid = await bcrypt.compare(cred.password, user.password);
        console.log(`   🔐 Password valid: ${isPasswordValid ? '✅' : '❌'}`);
        
        if (!isPasswordValid) {
          console.log(`   🔧 Fixing password...`);
          const newHash = await bcrypt.hash(cred.password, 10);
          await prisma.user.update({
            where: { id: user.id },
            data: { password: newHash }
          });
          console.log(`   ✅ Password fixed`);
        }
      } else {
        console.log(`   ❌ No password set`);
      }
      
      console.log('');
    }

    console.log('🎉 Authentication test complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test
testAuthentication(); 