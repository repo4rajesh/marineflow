# Manual Database User Creation

This guide shows you how to manually create users in your MarineFlow database.

## 🔐 **Method 1: Using the SQL File**

### **Step 1: Access Your Database**
```bash
# Using Prisma Studio (recommended)
npx prisma studio

# Or connect directly to your database
# - Local: Check your .env.local file for DATABASE_URL
# - Production: Use your database management tool
```

### **Step 2: Run the SQL File**
1. Open `database/create-users.sql`
2. Copy the content
3. Paste and execute in your database tool
4. Or run via command line:
```bash
psql $DATABASE_URL -f database/create-users.sql
```

## 🔐 **Method 2: Generate Custom Passwords**

### **Step 1: Generate Hashed Password**
```bash
# Run the password generator
node scripts/generate-password.js

# Or generate a specific password
node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"
```

### **Step 2: Create Custom SQL**
```sql
INSERT INTO "User" (
    "id", 
    "name", 
    "email", 
    "password", 
    "emailVerified", 
    "image", 
    "createdAt", 
    "updatedAt"
) VALUES (
    gen_random_uuid(),
    'Your Name',
    'your@email.com',
    '$2a$10$...your-hashed-password...',
    NOW(),
    '/images/team/user.jpg',
    NOW(),
    NOW()
);
```

## 📋 **Default Users Created**

| Email | Password | Purpose |
|-------|----------|---------|
| `admin@marineflow.com` | `admin123` | Full admin access |
| `client@example.com` | `client2024` | Pricing calculator access |
| `sales@marineflow.com` | `sales2024` | Sales team access |
| `demo@marineflow.com` | `demo2024` | Demo presentations |

## 🛠 **Database Connection Details**

### **Local Development**
```bash
# Check your .env.local file
DATABASE_URL="postgresql://username:password@localhost:5432/marineflow"
```

### **Production (Vercel)**
- Database: Neon PostgreSQL
- Connection: Available in Vercel dashboard
- Use Vercel's database management tools

## ⚠️ **Important Notes**

1. **Password Security**: Always use strong passwords in production
2. **Email Verification**: Users are marked as verified by default
3. **Image Paths**: Update image paths to match your actual images
4. **UUID Generation**: Uses `gen_random_uuid()` for unique IDs
5. **Conflict Handling**: Uses `ON CONFLICT` to update existing users

## 🔍 **Verify Users**

After creating users, verify they exist:
```sql
SELECT "id", "name", "email", "createdAt" 
FROM "User" 
ORDER BY "createdAt";
```

## 🚀 **Quick Commands**

```bash
# Generate a new password hash
node -e "console.log(require('bcryptjs').hashSync('newpassword', 10))"

# Open database in browser
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Seed database with default users
npx prisma db seed
``` 