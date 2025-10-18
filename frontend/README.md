# Sport Clube Borbense - Frontend (Next.js)

This is the frontend application for the Sport Clube Borbense website, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Running Strapi backend

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   NEXT_PUBLIC_APP_NAME="Sport Clube Borbense"
   NEXT_PUBLIC_APP_DESCRIPTION="Official website of Sport Clube Borbense"
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   Open http://localhost:3000

## 🎨 Features

### Design System
- **Components**: Reusable UI components in `src/components/ui/`
- **Layout**: Header, Footer, and main layout components
- **Typography**: Inter and Poppins fonts
- **Colors**: Custom brand color palette
- **Responsive**: Mobile-first design approach

### Animations
- **GSAP**: Complex animations and scroll triggers
- **Framer Motion**: React component animations
- **Lottie**: Lightweight micro-interactions
- **Performance**: Optimized for 60fps animations

### Performance
- **Next.js 14**: App Router with latest features
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Route-based splitting
- **ISR**: Incremental Static Regeneration
- **Core Web Vitals**: Optimized for Google metrics

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── homepage/          # Homepage-specific components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and configurations
│   ├── strapi.ts          # Strapi API client
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript definitions
    └── strapi.ts          # Strapi content types
```

## 🧩 Components

### UI Components
- **Button**: Animated button with multiple variants
- **Card**: Flexible card component with hover effects
- **Image**: Optimized image component with loading states
- **Layout**: Header, Footer, and main layout wrapper

### Homepage Components
- **HeroSection**: Animated hero with GSAP
- **NewsGrid**: News articles with Framer Motion
- **QuickStats**: Animated statistics counters
- **CallToAction**: Engaging CTA sections

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links
- **Layout**: Main layout wrapper

## 🎭 Animations

### GSAP Animations
```typescript
// Hero section animations
gsap.fromTo(titleRef.current, {
  opacity: 0,
  y: 50,
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power3.out',
});

// Scroll-triggered animations
gsap.fromTo(cardsRef.current, {
  opacity: 0,
  y: 60,
}, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 80%',
  },
});
```

### Framer Motion
```typescript
// Component animations
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  Content
</motion.div>

// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  Page content
</motion.div>
```

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts`:
- Brand colors (primary, secondary, accent)
- Custom fonts (Inter, Poppins)
- Animation keyframes
- Custom utilities

### Next.js
Configuration in `next.config.ts`:
- Image optimization
- Bundle analysis
- Environment variables
- Performance optimizations

### TypeScript
Configuration in `tsconfig.json`:
- Strict type checking
- Path aliases (@/*)
- Next.js optimizations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
```css
/* Mobile styles (default) */
.component {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 640px) {
  .component {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: 3rem;
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Set environment variables
3. Deploy automatically

### Other Platforms
- **Netlify**: Static site hosting
- **AWS Amplify**: Full-stack hosting
- **Railway**: Simple deployment
- **Docker**: Container deployment

### Environment Variables
```env
# Required
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.com

# Optional
NEXT_PUBLIC_APP_NAME="Sport Clube Borbense"
NEXT_PUBLIC_APP_DESCRIPTION="Official website"
```

## 🛠️ Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Code Quality
- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Prettier**: Code formatting (recommended)

### Performance Monitoring
- **Core Web Vitals**: Built-in monitoring
- **Bundle Analyzer**: Bundle size analysis
- **Lighthouse**: Performance auditing

## 🎨 Customization

### Branding
1. **Colors**: Update `tailwind.config.ts`
2. **Fonts**: Modify `src/app/globals.css`
3. **Logo**: Replace `public/logo.svg`
4. **Favicon**: Update `src/app/favicon.ico`

### Content
1. **Homepage**: Modify `src/app/page.tsx`
2. **Components**: Update component files
3. **API**: Adjust `src/lib/strapi.ts`
4. **Types**: Update `src/types/strapi.ts`

### Animations
1. **GSAP**: Modify animation files
2. **Framer Motion**: Update component animations
3. **Timing**: Adjust animation durations
4. **Easing**: Change animation curves

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**
   - Check TypeScript errors
   - Verify import paths
   - Clear `.next` folder

2. **Animation issues**
   - Check GSAP registration
   - Verify ref assignments
   - Test in different browsers

3. **API connection**
   - Verify Strapi URL
   - Check CORS settings
   - Test API endpoints

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev

# Check bundle size
npm run build && npm run analyze
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Test animations across browsers
4. Optimize for performance
5. Update documentation

## 📊 Performance Metrics

### Target Metrics
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 600ms

### Optimization Techniques
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Bundle optimization