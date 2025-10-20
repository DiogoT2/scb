import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/homepage/HeroSection';
import { NewsGrid } from '@/components/homepage/NewsGrid';
import { QuickStats } from '@/components/homepage/QuickStats';
import { CallToAction } from '@/components/homepage/CallToAction';
import { strapi } from '@/lib/strapi';

// Sample data for development
const sampleStats = [
  { label: 'Years of History', value: '70+', icon: 'calendar' },
  { label: 'Trophies Won', value: '15', icon: 'trophy' },
  { label: 'Active Players', value: '25', icon: 'users' },
  { label: 'Community Members', value: '500+', icon: 'heart' },
];

export default async function Home() {
  // Fetch real data from Strapi
  const [featuredNewsResponse, playersResponse] = await Promise.all([
    strapi.getFeaturedNews().catch(() => ({ data: [], meta: { pagination: { page: 1, pageSize: 3, pageCount: 0, total: 0 } } })),
    strapi.getActivePlayers().catch(() => ({ data: [], meta: { pagination: { page: 1, pageSize: 20, pageCount: 0, total: 0 } } })),
  ]);

  const featuredNews = featuredNewsResponse.data || [];
  const players = playersResponse.data || [];

  // Update stats with real data
  const stats = [
    { label: 'Years of History', value: '70+', icon: 'calendar' },
    { label: 'Trophies Won', value: '15', icon: 'trophy' },
    { label: 'Active Players', value: players.length.toString(), icon: 'users' },
    { label: 'Community Members', value: '500+', icon: 'heart' },
  ];

  return (
    <Layout>
      <HeroSection
        title="Welcome to Sport Clube Borbense"
        subtitle="Where passion meets tradition, and every match tells a story of dedication, teamwork, and community spirit."
        ctaText="Join Our Community"
        ctaLink="/join"
      />
      
      <QuickStats stats={stats} />
      
      <NewsGrid
        news={featuredNews}
        title="Latest News"
        showAll={false}
      />
      
      <CallToAction
        title="Be Part of Our Story"
        description="Join thousands of fans who support Sport Clube Borbense. Whether you're a player, supporter, or community member, there's a place for you here."
        buttonText="Get Involved"
        buttonLink="/join"
      />
    </Layout>
  );
}