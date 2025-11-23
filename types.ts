export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  coverImage: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: string; // e.g., "5 min read"
  tags: string[];
  featured?: boolean;
  affiliateLinks?: { label: string; url: string; price: string }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}