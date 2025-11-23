import { BlogPost, Category, Author } from './types';

export const SITE_NAME = "TechEase Hub";
export const SITE_DESCRIPTION = "Simplifying technology, automation, and AI for everyone.";

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Artificial Intelligence', slug: 'ai' },
  { id: '2', name: 'No-Code Tools', slug: 'no-code' },
  { id: '3', name: 'Productivity Hacks', slug: 'productivity' },
  { id: '4', name: 'Automation', slug: 'automation' },
];

const AUTHOR_JANE: Author = {
  id: '1',
  name: 'Jane Doe',
  avatar: 'https://picsum.photos/id/64/100/100',
  bio: 'Tech enthusiast and No-Code expert helping small businesses scale.'
};

const AUTHOR_JOHN: Author = {
  id: '2',
  name: 'John Smith',
  avatar: 'https://picsum.photos/id/91/100/100',
  bio: 'AI researcher and automation engineer.'
};

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 AI Tools to Automate Your Morning Routine',
    excerpt: 'Discover how to reclaim 2 hours of your day using these cutting-edge AI assistants.',
    content: `
      <p>Waking up is hard, but managing your morning shouldn't be. In this guide, we explore the top AI tools that can streamline your start to the day.</p>
      <h3>1. Smart Scheduling Assistants</h3>
      <p>Gone are the days of manually checking calendars. Tools like Reclaim.ai automatically organize your tasks.</p>
      <h3>2. AI-Powered News Summarizers</h3>
      <p>Get the gist of global news without doom-scrolling. Apps like Artifact (RIP) and its successors use AI to curate what matters.</p>
      <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-6 border-l-4 border-brand-500">
        <strong>Pro Tip:</strong> Combine these tools with a solid no-code dashboard for maximum efficiency.
      </div>
      <h3>Conclusion</h3>
      <p>Automation isn't just for businesses; it's for your personal sanity too.</p>
    `,
    coverImage: 'https://picsum.photos/id/1/800/400',
    category: 'Artificial Intelligence',
    author: AUTHOR_JOHN,
    publishedAt: '2023-10-25',
    readTime: '4 min read',
    tags: ['AI', 'Productivity', 'Automation'],
    featured: true,
    affiliateLinks: [
      { label: 'Try Reclaim.ai', url: '#', price: 'Free / $8mo' },
      { label: 'Get Jasper AI', url: '#', price: '$39/mo' }
    ]
  },
  {
    id: '2',
    title: 'No-Code Revolution: Build an App in 30 Minutes',
    excerpt: 'You don’t need a CS degree to build software anymore. Here is how to get started.',
    content: `<p>The barrier to entry for software development has never been lower.</p>`,
    coverImage: 'https://picsum.photos/id/20/800/400',
    category: 'No-Code Tools',
    author: AUTHOR_JANE,
    publishedAt: '2023-10-28',
    readTime: '6 min read',
    tags: ['No-Code', 'Bubble', 'Webflow'],
    featured: true,
    affiliateLinks: [
        { label: 'Start with Bubble', url: '#', price: 'Free Tier' }
    ]
  },
  {
    id: '3',
    title: 'Zapier vs. Make: Which Automation Tool Wins?',
    excerpt: 'A comprehensive showdown between the two giants of workflow automation.',
    content: `<p>When it comes to connecting your apps, there are two big players in town.</p>`,
    coverImage: 'https://picsum.photos/id/3/800/400',
    category: 'Automation',
    author: AUTHOR_JANE,
    publishedAt: '2023-11-01',
    readTime: '8 min read',
    tags: ['Zapier', 'Make', 'Comparison'],
    featured: false
  },
  {
    id: '4',
    title: 'The Future of Remote Work with VR',
    excerpt: 'Is the metaverse the new office? We tested 3 virtual workspaces.',
    content: `<p>Remote work is evolving beyond Zoom calls.</p>`,
    coverImage: 'https://picsum.photos/id/48/800/400',
    category: 'Productivity',
    author: AUTHOR_JOHN,
    publishedAt: '2023-11-05',
    readTime: '5 min read',
    tags: ['VR', 'Remote Work', 'Metaverse'],
    featured: false
  },
  {
    id: '5',
    title: '10 Hidden Mac Features for Power Users',
    excerpt: 'Boost your workflow with these secret shortcuts and settings.',
    content: `<p>Apple hides a lot of power behind its simple interface.</p>`,
    coverImage: 'https://picsum.photos/id/60/800/400',
    category: 'Productivity',
    author: AUTHOR_JANE,
    publishedAt: '2023-11-10',
    readTime: '3 min read',
    tags: ['Mac', 'Apple', 'Tips'],
    featured: false
  }
];