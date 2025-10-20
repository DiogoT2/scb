# Vercel Deployment Guide

## Your Backend URL
**`https://scb-production.up.railway.app`**

## Step 1: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository: `DiogoT2/scb`
5. Set the **Root Directory** to: `frontend`
6. Click "Deploy"

## Step 2: Configure Environment Variables

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```
NEXT_PUBLIC_STRAPI_URL = https://scb-production.up.railway.app
NEXT_PUBLIC_STRAPI_TOKEN = (leave empty for now)
```

3. Click "Save"
4. Go to **Deployments** tab
5. Click "Redeploy" on the latest deployment

## Step 3: Create Strapi Admin

1. Go to: `https://scb-production.up.railway.app/admin`
2. Create your first administrator account
3. Use this to manage your website content

## Step 4: Test Your Deployment

1. Your frontend will be at: `https://your-project-name.vercel.app`
2. Your backend is at: `https://scb-production.up.railway.app`
3. Test that both are working

## Troubleshooting

- If frontend can't connect to backend, check environment variables
- If backend is down, check Railway logs
- Make sure both services are running
