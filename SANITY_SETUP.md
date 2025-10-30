# 🚀 Sanity Setup Guide for Greenhouse Pilates

## Quick Fix for the Error

The error shows that you need a valid Sanity project ID. Here's how to get one:

## Step 1: Create a Sanity Account
1. Go to https://www.sanity.io
2. Click "Get Started" 
3. Sign up with Google, GitHub, or email

## Step 2: Create a New Project
1. Once logged in, go to https://www.sanity.io/manage
2. Click "Create new project"
3. Choose:
   - Project name: "Greenhouse Pilates" 
   - Use the default dataset: "production"
   - Choose "Private" for visibility

## Step 3: Get Your Project ID
1. After creating the project, you'll see your Project ID
2. It will look something like: `abc123de` (lowercase letters and numbers only)
3. Copy this ID

## Step 4: Update Your .env.local File
Replace the placeholder with your actual project ID:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de  # Replace with your actual ID
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 5: Restart Both Servers
Kill the current processes and restart:

```bash
# Stop both servers (Ctrl+C in both terminals)
# Then restart:
npm run sanity:dev  # In one terminal
npm run dev         # In another terminal
```

## Step 6: Access Sanity Studio
1. Go to http://localhost:3333
2. You should now see the Sanity Studio login
3. Log in with the same account you created
4. You'll see the "דף הבית" (Home Page) document type

## Step 7: Create Your First Content
1. Click on "דף הבית" 
2. Fill in the Hero Section:
   - Upload a video or image
   - Edit the inspirational texts
   - Customize button text
   - Upload your logo
3. Click "Publish"

## Step 8: View Your Site
1. Go to http://localhost:3000
2. Your content from Sanity should now appear!

## Troubleshooting

If you still see errors:
- Make sure the project ID has no uppercase letters
- Check that you're logged into Sanity Studio
- Verify both servers are running
- Clear your browser cache and refresh

## Need a Project ID Right Now?

If you want to test quickly without creating an account, you can temporarily use Sanity's demo project:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=puj7p168
NEXT_PUBLIC_SANITY_DATASET=production
```
⚠️ Note: This is just for testing. Create your own project for production use!