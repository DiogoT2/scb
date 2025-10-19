// Strapi base types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity {
  id: number;
  attributes: Record<string, unknown>;
  meta?: Record<string, unknown>;
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: StrapiMediaFormat;
      small?: StrapiMediaFormat;
      medium?: StrapiMediaFormat;
      large?: StrapiMediaFormat;
    };
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Content types
export interface News {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: StrapiResponse<StrapiMedia>;
    author: string;
    publishedAt: string;
    category: 'match' | 'transfer' | 'club' | 'youth' | 'community' | 'general';
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Player {
  id: number;
  attributes: {
    name: string;
    position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
    jerseyNumber?: number;
    age?: number;
    nationality?: string;
    bio?: string;
    photo?: StrapiResponse<StrapiMedia>;
    stats?: PlayerStats;
    contractStart?: string;
    contractEnd?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PlayerStats {
  goals: number;
  assists: number;
  matchesPlayed: number;
  yellowCards: number;
  redCards: number;
  season: string;
}

export interface Match {
  id: number;
  attributes: {
    opponent: string;
    opponentLogo?: StrapiResponse<StrapiMedia>;
    matchDate: string;
    venue: 'home' | 'away';
    competition: string;
    homeScore?: number;
    awayScore?: number;
    status: 'scheduled' | 'live' | 'finished' | 'postponed' | 'cancelled';
    highlights?: string;
    matchReport?: string;
    attendance?: number;
    referee?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface History {
  id: number;
  attributes: {
    year: number;
    title: string;
    description: string;
    image?: StrapiResponse<StrapiMedia>;
    category: 'founding' | 'trophy' | 'milestone' | 'player' | 'stadium' | 'achievement';
    importance: 'low' | 'medium' | 'high' | 'legendary';
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Gallery {
  id: number;
  attributes: {
    title: string;
    description?: string;
    images: StrapiResponse<StrapiMedia[]>;
    category: 'match' | 'training' | 'events' | 'stadium' | 'history' | 'youth' | 'community';
    featured: boolean;
    date?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Homepage {
  id: number;
  attributes: {
    heroTitle: string;
    heroSubtitle?: string;
    heroImage?: StrapiResponse<StrapiMedia>;
    heroVideo?: StrapiResponse<StrapiMedia>;
    quickStats: QuickStat[];
    featuredNews?: StrapiResponse<News[]>;
    callToAction?: CallToAction;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface QuickStat {
  label: string;
  value: string;
  icon?: string;
}

export interface CallToAction {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: StrapiResponse<StrapiMedia>;
}
