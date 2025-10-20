'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from '@/components/ui/Image';
import { formatDate, truncateText } from '@/lib/utils';
import { News } from '@/types/strapi';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface NewsGridProps {
  news: News[];
  title?: string;
  showAll?: boolean;
}

export function NewsGrid({ news, title = 'Latest News', showAll = false }: NewsGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for news cards
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Title animation
      gsap.fromTo(
        '.news-title',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [news]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const displayNews = showAll ? news : news.slice(0, 3);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="news-title text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, match results, and club announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayNews.length > 0 ? displayNews.map((article) => (
            <motion.div
              key={article.id}
              ref={addToRefs}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card variant="elevated" hover className="h-full">
                <Link href={`/news/${article.attributes?.slug || 'article'}`}>
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    {article.attributes.featuredImage?.data ? (
                      <OptimizedImage
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.featuredImage.data.attributes.url}`}
                        alt={article.attributes?.title || 'Article image'}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          SCB
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {article.attributes?.category || 'general'}
                      </span>
                    </div>
                    {article.attributes?.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </Link>

                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{formatDate(article.attributes?.publishedAt || new Date().toISOString())}</span>
                    <span>By {article.attributes?.author || 'Unknown'}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    <Link
                      href={`/news/${article.attributes?.slug || 'article'}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {article.attributes?.title || 'Untitled'}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {article.attributes?.excerpt || truncateText((article.attributes?.content || '').replace(/<[^>]*>/g, ''), 120)}
                  </p>
                  <Link
                    href={`/news/${article.attributes?.slug || 'article'}`}
                    className="inline-flex items-center text-primary hover:text-primary-600 font-medium mt-4 transition-colors duration-200"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p>No news articles available yet.</p>
                <p className="text-sm mt-2">Content will appear here once the CMS is configured.</p>
              </div>
            </div>
          )}
        </div>

        {!showAll && news.length > 3 && (
          <div className="text-center mt-12">
            <Link href="/news">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
