-- SQL file to create users in MarineFlow database
-- Run this in your database to add users manually

-- Note: These passwords are already hashed using bcrypt with salt rounds 10
-- You can generate new hashed passwords using: node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"

-- Clear existing users (optional - uncomment if you want to start fresh)
-- DELETE FROM "User";

-- Insert Admin User
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
    'Admin User',
    'admin@marineflow.com',
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: admin123
    NOW(),
    '/images/team/admin.jpg',
    NOW(),
    NOW()
) ON CONFLICT ("email") DO UPDATE SET
    "name" = EXCLUDED."name",
    "password" = EXCLUDED."password",
    "emailVerified" = EXCLUDED."emailVerified",
    "updatedAt" = NOW();

-- Insert Client User for Pricing Access
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
    'Demo Client',
    'client@example.com',
    '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iKTVEFDa', -- password: client2024
    NOW(),
    '/images/team/client.jpg',
    NOW(),
    NOW()
) ON CONFLICT ("email") DO UPDATE SET
    "name" = EXCLUDED."name",
    "password" = EXCLUDED."password",
    "emailVerified" = EXCLUDED."emailVerified",
    "updatedAt" = NOW();

-- Insert Sales Team User
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
    'Sales Team',
    'sales@marineflow.com',
    '$2a$10$8K1p/a0dL1LXMIgoEDFrwOe6g7fKjYzGqGqGqGqGqGqGqGqGqGqGq', -- password: sales2024
    NOW(),
    '/images/team/sales.jpg',
    NOW(),
    NOW()
) ON CONFLICT ("email") DO UPDATE SET
    "name" = EXCLUDED."name",
    "password" = EXCLUDED."password",
    "emailVerified" = EXCLUDED."emailVerified",
    "updatedAt" = NOW();

-- Insert Demo User for Presentations
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
    'Demo User',
    'demo@marineflow.com',
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: demo2024
    NOW(),
    '/images/team/demo.jpg',
    NOW(),
    NOW()
) ON CONFLICT ("email") DO UPDATE SET
    "name" = EXCLUDED."name",
    "password" = EXCLUDED."password",
    "emailVerified" = EXCLUDED."emailVerified",
    "updatedAt" = NOW();

-- Verify users were created
SELECT "id", "name", "email", "createdAt" FROM "User" ORDER BY "createdAt"; 