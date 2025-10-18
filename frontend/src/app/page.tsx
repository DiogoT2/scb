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
  // In a real app, you would fetch this data from Strapi
  // const homepage = await strapi.getHomepage();
  // const news = await strapi.getFeaturedNews();

  return (
    <Layout>
      <HeroSection
        title="Welcome to Sport Clube Borbense"
        subtitle="Where passion meets tradition, and every match tells a story of dedication, teamwork, and community spirit."
        ctaText="Join Our Community"
        ctaLink="/join"
      />
      
      <QuickStats stats={sampleStats} />
      
      <NewsGrid
        news={[]} // Empty for now - will be populated when content types are added
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