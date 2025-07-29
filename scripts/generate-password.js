const bcrypt = require('bcryptjs');

function generateHashedPassword(password) {
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(`Password: ${password}`);
  console.log(`Hashed: ${hashedPassword}`);
  console.log('---');
  return hashedPassword;
}

// Example usage
console.log('🔐 Password Hash Generator for MarineFlow Database\n');

// Generate hashes for common passwords
generateHashedPassword('admin123');
generateHashedPassword('client2024');
generateHashedPassword('sales2024');
generateHashedPassword('demo2024');

// If you want to generate a custom password, uncomment and modify:
// generateHashedPassword('your-custom-password');

console.log('📝 Instructions:');
console.log('1. Copy the hashed password above');
console.log('2. Use it in your SQL INSERT statement');
console.log('3. Replace the password field in the SQL file');
console.log('\n💡 Example SQL:');
console.log('INSERT INTO "User" ("email", "password", "name") VALUES (');
console.log("  'user@example.com',");
console.log("  '$2a$10$...hashedpassword...',");
console.log("  'User Name'");
console.log(');'); 