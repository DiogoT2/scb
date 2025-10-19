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

  // News methods (placeholder - will work when content types are added)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getNews(_params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
    pagination?: { page: number; pageSize: number };
  }): Promise<StrapiResponse<News[]>> {
    // Return empty data for now - will be populated when content types are added
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getNewsBySlug(_slug: string): Promise<StrapiResponse<News>> {
    // Return empty data for now
    return Promise.resolve({
      data: null as unknown as News,
      meta: {}
    });
  }

  async getFeaturedNews(): Promise<StrapiResponse<News[]>> {
    // Return empty data for now
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 3, pageCount: 0, total: 0 } }
    });
  }

  // Player methods (placeholder)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getPlayers(_params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
  }): Promise<StrapiResponse<Player[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getPlayerById(_id: number): Promise<StrapiResponse<Player>> {
    return Promise.resolve({
      data: null as unknown as Player,
      meta: {}
    });
  }

  async getActivePlayers(): Promise<StrapiResponse<Player[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  // Match methods (placeholder)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getMatches(_params?: {
    populate?: string;
    sort?: string;
    filters?: Record<string, unknown>;
  }): Promise<StrapiResponse<Match[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } }
    });
  }

  async getUpcomingMatches(): Promise<StrapiResponse<Match[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 5, pageCount: 0, total: 0 } }
    });
  }

  async getRecentMatches(): Promise<StrapiResponse<Match[]>> {
    return Promise.resolve({
      data: [],
      meta: { pagination: { page: 1, pageSize: 5, pageCount: 0, total: 0 } }
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
