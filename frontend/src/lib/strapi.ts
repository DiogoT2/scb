import axios from 'axios';
import {
  StrapiResponse,
  News,
  Player,
  Match,
  History,
  Gallery,
  Homepage,
} from '@/types/strapi';

class StrapiClient {
  private client: ReturnType<typeof axios.create>;
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    this.client = axios.create({
      baseURL: `${this.baseURL}/api`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });
  }

  // Generic method to fetch data
  private async fetch<T>(endpoint: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data as T;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

        // News methods (now working with real Strapi data)
        async getNews(params?: {
          populate?: string;
          sort?: string;
          filters?: Record<string, unknown>;
          pagination?: { page: number; pageSize: number };
        }): Promise<StrapiResponse<News[]>> {
          return this.fetch<StrapiResponse<News[]>>('/articles', {
            populate: params?.populate || 'featuredImage',
            sort: params?.sort || 'publishedAt:desc',
            ...params?.filters,
            'pagination[page]': params?.pagination?.page || 1,
            'pagination[pageSize]': params?.pagination?.pageSize || 10,
          });
        }

        async getNewsBySlug(slug: string): Promise<StrapiResponse<News>> {
          return this.fetch<StrapiResponse<News>>('/articles', {
            'filters[slug][$eq]': slug,
            populate: 'featuredImage',
          });
        }

  async getFeaturedNews(): Promise<StrapiResponse<News[]>> {
    return this.fetch<StrapiResponse<News[]>>('/articles', {
      'filters[featured][$eq]': true,
      populate: 'featuredImage',
      sort: 'publishedAt:desc',
      'pagination[pageSize]': 3,
    });
  }

  // Player methods (now working with real Strapi data)
  async getPlayers(params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
    pagination?: { page: number; pageSize: number };
  }): Promise<StrapiResponse<Player[]>> {
    return this.fetch<StrapiResponse<Player[]>>('/players', {
      populate: params?.populate || 'photo',
      sort: params?.sort || 'jerseyNumber:asc',
      ...params?.filters,
      'pagination[page]': params?.pagination?.page || 1,
      'pagination[pageSize]': params?.pagination?.pageSize || 10,
    });
  }

  async getPlayerById(id: number): Promise<StrapiResponse<Player>> {
    return this.fetch<StrapiResponse<Player>>(`/players/${id}`, {
      populate: 'photo',
    });
  }

  async getActivePlayers(): Promise<StrapiResponse<Player[]>> {
    return this.fetch<StrapiResponse<Player[]>>('/players', {
      populate: 'photo',
      sort: 'jerseyNumber:asc',
      'pagination[pageSize]': 20,
    });
  }

  // Match methods (now working with real Strapi data)
  async getMatches(params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
    pagination?: { page: number; pageSize: number };
  }): Promise<StrapiResponse<Match[]>> {
    return this.fetch<StrapiResponse<Match[]>>('/matches', {
      populate: params?.populate || '',
      sort: params?.sort || 'matchDate:desc',
      ...params?.filters,
      'pagination[page]': params?.pagination?.page || 1,
      'pagination[pageSize]': params?.pagination?.pageSize || 10,
    });
  }

  async getUpcomingMatches(): Promise<StrapiResponse<Match[]>> {
    return this.fetch<StrapiResponse<Match[]>>('/matches', {
      'filters[status][$eq]': 'upcoming',
      sort: 'matchDate:asc',
      'pagination[pageSize]': 5,
    });
  }

  async getRecentMatches(): Promise<StrapiResponse<Match[]>> {
    return this.fetch<StrapiResponse<Match[]>>('/matches', {
      'filters[status][$eq]': 'finished',
      sort: 'matchDate:desc',
      'pagination[pageSize]': 5,
    });
  }

  // History methods (placeholder)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getHistory(_params?: {
    populate?: string;
    sort?: string;
  }): Promise<StrapiResponse<History[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  // Gallery methods (placeholder)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getGalleries(_params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
  }): Promise<StrapiResponse<Gallery[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  async getFeaturedGalleries(): Promise<StrapiResponse<Gallery[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 3, pageCount: 0, total: 0 } }
    });
  }

  // Homepage methods (placeholder)
  async getHomepage(): Promise<StrapiResponse<Homepage>> {
    return Promise.resolve({
      data: null as unknown as Homepage,
      meta: {}
    });
  }

  // Utility method to get media URL
  getMediaUrl(media: unknown): string {
    if (!media || typeof media !== 'object' || !('data' in media)) return '';
    const mediaData = media as { data?: { attributes?: { url?: string } } };
    if (!mediaData.data?.attributes?.url) return '';
    return `${this.baseURL}${mediaData.data.attributes.url}`;
  }

  // Utility method to get formatted date
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

// Create and export a singleton instance
export const strapi = new StrapiClient();
export default strapi;
