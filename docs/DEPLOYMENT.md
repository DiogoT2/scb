# Deployment Guide - Sport Clube Borbense Digital Platform

This guide covers deploying both the frontend (Next.js) and backend (Strapi) applications to production.

## 🚀 Deployment Overview

### Architecture
- **Frontend**: Next.js app deployed to Vercel
- **Backend**: Strapi CMS deployed to Railway/Strapi Cloud
- **Database**: PostgreSQL (production)
- **Media Storage**: Cloud storage (AWS S3, Cloudinary, etc.)

## 📋 Pre-Deployment Checklist

### Backend Preparation
- [ ] Set up production database
- [ ] Configure cloud media storage
- [ ] Set secure environment variables
- [ ] Test API endpoints
- [ ] Configure CORS for frontend domain
- [ ] Set up monitoring and logging

### Frontend Preparation
- [ ] Build and test locally
- [ ] Set environment variables
- [ ] Optimize images and assets
- [ ] Test responsive design
- [ ] Verify API connections
- [ ] Check performance metrics

## 🔧 Backend Deployment

### Option 1: Strapi Cloud (Recommended)

1. **Sign up for Strapi Cloud**
   - Visit [cloud.strapi.io](https://cloud.strapi.io)
   - Create an account
   - Start a new project

2. **Connect your repository**
   - Link your GitHub repository
   - Select the backend folder
   - Configure build settings

3. **Set environment variables**
   ```env
   DATABASE_URL=postgresql://...
   ADMIN_JWT_SECRET=your-secure-secret
   API_TOKEN_SALT=your-secure-salt
   TRANSFER_TOKEN_SALT=your-secure-salt
   APP_KEYS=key1,key2,key3,key4
   FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Deploy**
   - Strapi Cloud handles the deployment automatically
   - Access your admin panel at the provided URL

### Option 2: Railway

1. **Create Railway account**
   - Visit [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy backend**
   - Create new project
   - Connect GitHub repository
   - Select backend folder
   - Add PostgreSQL database

3. **Configure environment variables**
   ```env
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   ADMIN_JWT_SECRET=your-secure-secret
   API_TOKEN_SALT=your-secure-salt
   TRANSFER_TOKEN_SALT=your-secure-salt
   APP_KEYS=key1,key2,key3,key4
   FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Deploy**
   - Railway automatically deploys on push
   - Access your admin panel at the provided URL

### Option 3: DigitalOcean App Platform

1. **Create DigitalOcean account**
   - Visit [cloud.digitalocean.com](https://cloud.digitalocean.com)
   - Sign up for an account

2. **Create new app**
   - Go to Apps section
   - Create new app from GitHub
   - Select backend folder

3. **Configure database**
   - Add PostgreSQL database
   - Note the connection string

4. **Set environment variables**
   ```env
   DATABASE_URL=postgresql://...
   ADMIN_JWT_SECRET=your-secure-secret
   API_TOKEN_SALT=your-secure-salt
   TRANSFER_TOKEN_SALT=your-secure-salt
   APP_KEYS=key1,key2,key3,key4
   FRONTEND_URL=https://your-frontend-domain.com
   ```

5. **Deploy**
   - DigitalOcean builds and deploys automatically
   - Access your admin panel at the provided URL

## 🎨 Frontend Deployment

### Vercel (Recommended)

1. **Create Vercel account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the frontend folder

3. **Configure build settings**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Set environment variables**
   ```env
   NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.com
   NEXT_PUBLIC_APP_NAME="Sport Clube Borbense"
   NEXT_PUBLIC_APP_DESCRIPTION="Official website of Sport Clube Borbense"
   ```

5. **Deploy**
   - Vercel automatically deploys on push
   - Access your website at the provided URL

### Netlify

1. **Create Netlify account**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Create new site**
   - Click "New site from Git"
   - Connect your repository
   - Select frontend folder

3. **Configure build settings**
   - Build Command: `npm run build`
   - Publish Directory: `out` (for static export)
   - Or use: `.next` (for serverless functions)

4. **Set environment variables**
   ```env
   NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.com
   NEXT_PUBLIC_APP_NAME="Sport Clube Borbense"
   NEXT_PUBLIC_APP_DESCRIPTION="Official website of Sport Clube Borbense"
   ```

5. **Deploy**
   - Netlify builds and deploys automatically
   - Access your website at the provided URL

## 🗄️ Database Setup

### PostgreSQL (Production)

1. **Create database**
   ```sql
   CREATE DATABASE scb_production;
   CREATE USER scb_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE scb_production TO scb_user;
   ```

2. **Connection string**
   ```
   postgresql://scb_user:secure_password@host:port/scb_production
   ```

### Environment Variables
```env
DATABASE_URL=postgresql://user:password@host:port/database
```

## 📁 Media Storage Setup

### AWS S3

1. **Create S3 bucket**
   - Go to AWS S3 console
   - Create new bucket
   - Configure permissions

2. **Create IAM user**
   - Create user with S3 access
   - Generate access keys

3. **Configure Strapi**
   ```env
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_ACCESS_SECRET=your-secret-key
   AWS_REGION=your-region
   AWS_BUCKET=your-bucket-name
   ```

### Cloudinary

1. **Create Cloudinary account**
   - Visit [cloudinary.com](https://cloudinary.com)
   - Sign up for free account

2. **Get credentials**
   - Note your cloud name
   - Get API key and secret

3. **Configure Strapi**
   ```env
   CLOUDINARY_NAME=your-cloud-name
   CLOUDINARY_KEY=your-api-key
   CLOUDINARY_SECRET=your-api-secret
   ```

## 🔒 Security Configuration

### Environment Variables
Generate secure secrets:
```bash
# Generate JWT secret
openssl rand -base64 32

# Generate API token salt
openssl rand -base64 32

# Generate transfer token salt
openssl rand -base64 32

# Generate app keys
openssl rand -base64 32
```

### CORS Configuration
Update `backend/config/middlewares.js`:
```javascript
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://your-frontend-domain.com'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  // ... other middlewares
];
```

### SSL/HTTPS
- Ensure both frontend and backend use HTTPS
- Configure SSL certificates
- Set up redirects from HTTP to HTTPS

## 📊 Monitoring and Analytics

### Performance Monitoring
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Add tracking code
- **Core Web Vitals**: Monitor performance metrics

### Error Tracking
- **Sentry**: Error monitoring and performance tracking
- **LogRocket**: Session replay and error tracking

### Uptime Monitoring
- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Advanced monitoring features

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend
```

## 🚨 Troubleshooting

### Common Issues

1. **Build failures**
   - Check environment variables
   - Verify dependencies
   - Review build logs

2. **API connection issues**
   - Verify CORS settings
   - Check API URLs
   - Test endpoints manually

3. **Database connection errors**
   - Verify connection string
   - Check database permissions
   - Ensure database is running

4. **Media upload issues**
   - Check cloud storage configuration
   - Verify permissions
   - Test upload functionality

### Debug Steps
1. Check deployment logs
2. Test API endpoints
3. Verify environment variables
4. Check database connectivity
5. Test media uploads

## 📈 Performance Optimization

### Frontend
- Enable Vercel Analytics
- Optimize images
- Implement caching
- Monitor Core Web Vitals

### Backend
- Configure database indexes
- Implement API caching
- Optimize queries
- Monitor response times

## 🔄 Backup Strategy

### Database Backups
- Set up automated daily backups
- Store backups in multiple locations
- Test restore procedures

### Media Backups
- Use cloud storage with versioning
- Implement cross-region replication
- Regular backup verification

## 📞 Support

For deployment issues:
1. Check the troubleshooting section
2. Review platform documentation
3. Contact platform support
4. Create an issue in the repository

---

**Note**: Always test deployments in a staging environment before deploying to production.
