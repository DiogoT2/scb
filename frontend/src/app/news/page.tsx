import { Layout } from '@/components/layout/Layout';
import { NewsGrid } from '@/components/homepage/NewsGrid';
import { strapi } from '@/lib/strapi';

export default async function NewsPage() {
  // Fetch all news articles
  const newsResponse = await strapi.getNews({
    pagination: { page: 1, pageSize: 12 },
  }).catch(() => ({ data: [], meta: { pagination: { page: 1, pageSize: 12, pageCount: 0, total: 0 } } }));

  const news = newsResponse.data || [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Latest News
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, match reports, and club announcements from Sport Clube Borbense.
          </p>
        </div>

        {news.length > 0 ? (
          <NewsGrid
            news={news}
            title=""
            showAll={false}
          />
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
              No news articles yet
            </h2>
            <p className="text-muted-foreground">
              Check back soon for the latest updates from Sport Clube Borbense.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
