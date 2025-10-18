# Sport Clube Borbense - Backend (Strapi CMS)

This is the backend CMS for the Sport Clube Borbense website, built with Strapi v5.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   DATABASE_FILENAME=.tmp/data.db
   HOST=0.0.0.0
   PORT=1337
   ADMIN_JWT_SECRET=your-admin-jwt-secret-here
   API_TOKEN_SALT=your-api-token-salt-here
   TRANSFER_TOKEN_SALT=your-transfer-token-salt-here
   APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
   FRONTEND_URL=http://localhost:3000
   ```

3. **Start the development server**
   ```bash
   npm run develop
   ```

4. **Access the admin panel**
   Open http://localhost:1337/admin and create your admin account.

## 📊 Content Types

### News
- **Fields**: title, slug, content, excerpt, featuredImage, author, category, featured, publishedAt
- **Categories**: match, transfer, club, youth, community, general
- **API**: `/api/news`

### Players
- **Fields**: name, position, jerseyNumber, age, nationality, bio, photo, stats, contractStart, contractEnd, isActive
- **Positions**: goalkeeper, defender, midfielder, forward
- **API**: `/api/players`

### Matches
- **Fields**: opponent, opponentLogo, matchDate, venue, competition, homeScore, awayScore, status, highlights, matchReport, attendance, referee
- **Status**: scheduled, live, finished, postponed, cancelled
- **API**: `/api/matches`

### History
- **Fields**: year, title, description, image, category, importance, order
- **Categories**: founding, trophy, milestone, player, stadium, achievement
- **API**: `/api/histories`

### Gallery
- **Fields**: title, description, images, category, featured, date
- **Categories**: match, training, events, stadium, history, youth, community
- **API**: `/api/galleries`

### Homepage
- **Fields**: heroTitle, heroSubtitle, heroImage, heroVideo, quickStats, featuredNews, callToAction
- **Type**: Single Type
- **API**: `/api/homepage`

## 🔧 Configuration

### Database
- **Development**: SQLite (`.tmp/data.db`)
- **Production**: PostgreSQL, MySQL, or MongoDB recommended

### Media Library
- **Local**: Files stored in `public/uploads/`
- **Cloud**: Configure cloud providers in `config/plugins.js`

### API Permissions
Configure public access in the admin panel:
1. Go to Settings > Users & Permissions > Roles
2. Edit the "Public" role
3. Enable read permissions for content types

## 🛠️ Development

### Available Scripts
```bash
npm run develop    # Start development server with auto-reload
npm run build      # Build for production
npm run start      # Start production server
npm run strapi     # Run Strapi CLI commands
```

### Custom Controllers
Located in `src/api/*/controllers/`

### Custom Services
Located in `src/api/*/services/`

### Lifecycle Hooks
Located in `src/api/*/content-types/*/lifecycles.js`

## 📝 Content Management

### Adding Content
1. Log into the admin panel
2. Navigate to Content Manager
3. Select the content type
4. Create new entries
5. Publish when ready

### Media Management
1. Go to Media Library
2. Upload images/videos
3. Organize with folders
4. Use in content entries

### User Management
1. Go to Settings > Users & Permissions
2. Create user accounts
3. Assign roles and permissions
4. Manage API tokens

## 🔒 Security

### API Security
- JWT tokens for authentication
- Role-based permissions
- CORS configuration
- Rate limiting (configurable)

### Best Practices
- Use strong passwords
- Regular security updates
- Backup database regularly
- Monitor API usage

## 🚀 Deployment

### Environment Setup
1. Set production environment variables
2. Configure production database
3. Set up media storage (cloud recommended)
4. Configure domain and SSL

### Deployment Options
- **Strapi Cloud**: Managed hosting
- **Railway**: Easy deployment
- **DigitalOcean**: VPS with Docker
- **AWS/GCP**: Enterprise solutions

### Production Checklist
- [ ] Set secure JWT secrets
- [ ] Configure production database
- [ ] Set up media cloud storage
- [ ] Enable SSL/HTTPS
- [ ] Configure CORS for frontend domain
- [ ] Set up monitoring and logging
- [ ] Create database backups

## 📊 API Documentation

### Base URL
- Development: `http://localhost:1337/api`
- Production: `https://your-domain.com/api`

### Authentication
```javascript
// Include JWT token in headers
headers: {
  'Authorization': `Bearer ${token}`
}
```

### Example Requests
```javascript
// Get all news
GET /api/news?populate=featuredImage&sort=publishedAt:desc

// Get single news article
GET /api/news/slug?populate=featuredImage

// Get active players
GET /api/players?filters[isActive][$eq]=true&populate=photo,stats

// Get upcoming matches
GET /api/matches?filters[status][$eq]=scheduled&sort=matchDate:asc
```

## 🐛 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check database configuration
   - Ensure database is running
   - Verify connection credentials

2. **Media upload issues**
   - Check file permissions
   - Verify upload limits
   - Check available disk space

3. **API permission errors**
   - Verify role permissions
   - Check API token validity
   - Review CORS settings

### Logs
- Development: Console output
- Production: Configure logging in `config/logger.js`

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Community](https://forum.strapi.io/)
- [Strapi GitHub](https://github.com/strapi/strapi)

## 🤝 Support

For backend-specific issues:
1. Check the troubleshooting section
2. Review Strapi documentation
3. Create an issue in the repository
4. Contact the development team
