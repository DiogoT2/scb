# Sport Clube Borbense Digital Platform

A modern, headless CMS-powered website for Sport Clube Borbense, built with Next.js 14, Strapi CMS, and advanced animations using GSAP and Framer Motion.

## 🏆 Features

- **Modern Architecture**: Headless CMS with Next.js 14 and TypeScript
- **Advanced Animations**: GSAP ScrollTrigger and Framer Motion for engaging user experiences
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: ISR, image optimization, and Core Web Vitals optimization
- **Content Management**: Easy-to-use Strapi CMS for non-technical users
- **SEO Ready**: Built-in SEO optimization and metadata management

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Framer Motion** - React animation library
- **Lottie** - Lightweight animations

### Backend
- **Strapi CMS** - Headless content management system
- **Node.js** - JavaScript runtime
- **SQLite** - Development database
- **GraphQL/REST API** - Flexible data fetching

## 📁 Project Structure

```
/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/      # App router pages
│   │   ├── components/ # Reusable components
│   │   ├── lib/      # API clients, utilities
│   │   └── types/    # TypeScript definitions
│   └── public/       # Static assets
│
├── backend/          # Strapi CMS
│   ├── config/       # Strapi configuration
│   ├── src/
│   │   ├── api/      # Content types & APIs
│   │   └── components/
│   └── public/       # Uploaded media
│
└── docs/            # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd scb-digital-platform
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Backend (create `backend/.env`):
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

   Frontend (create `frontend/.env.local`):
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   NEXT_PUBLIC_APP_NAME="Sport Clube Borbense"
   NEXT_PUBLIC_APP_DESCRIPTION="Official website of Sport Clube Borbense"
   ```

### Development

1. **Start the Strapi backend**
   ```bash
   cd backend
   npm run develop
   ```
   Access the admin panel at: http://localhost:1337/admin

2. **Start the Next.js frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   Access the website at: http://localhost:3000

## 📝 Content Management

### Strapi Admin Panel

1. Navigate to http://localhost:1337/admin
2. Create your admin account
3. Configure content types and permissions
4. Add your content

### Content Types

- **News**: Articles, announcements, and updates
- **Players**: Team roster with statistics
- **Matches**: Fixtures and results
- **History**: Club milestones and achievements
- **Gallery**: Photo collections
- **Homepage**: Hero content and quick stats

## 🎨 Customization

### Branding
- Update colors in `frontend/tailwind.config.ts`
- Replace logo in `frontend/public/logo.svg`
- Modify fonts in `frontend/src/app/globals.css`

### Animations
- GSAP animations in `frontend/src/components/homepage/`
- Framer Motion components in `frontend/src/components/ui/`
- Customize animation timing and effects

### Content Structure
- Modify content types in `backend/src/api/`
- Update API client in `frontend/src/lib/strapi.ts`
- Adjust TypeScript types in `frontend/src/types/strapi.ts`

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Backend (Various Options)
- **Strapi Cloud**: Managed hosting
- **Railway**: Easy deployment with database
- **DigitalOcean**: VPS with Docker
- **AWS/GCP**: Enterprise solutions

## 📊 Performance

- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based splitting
- **Caching**: ISR and API response caching
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Development Scripts

### Backend
```bash
npm run develop    # Start development server
npm run build      # Build for production
npm run start      # Start production server
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in the `docs/` folder

## 🎯 Roadmap

- [ ] Mobile app integration
- [ ] E-commerce functionality
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Social media integration
- [ ] Live match updates
- [ ] Fan engagement features

---

Built with ❤️ for Sport Clube Borbense
