import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { Sidebar } from '../components/Sidebar';
import { Clock, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredPost = MOCK_POSTS[0];
  const latestPosts = MOCK_POSTS.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="order-2 lg:order-1 space-y-6">
                <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                    {featuredPost.category}
                </span>
                <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {featuredPost.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-2">
                    <div className="flex items-center gap-2">
                        <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-8 h-8 rounded-full" />
                        <span className="font-medium text-gray-900 dark:text-gray-200">{featuredPost.author.name}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Clock size={16} /> {featuredPost.readTime}
                    </div>
                </div>
                <Link 
                    to={`/post/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-500/30"
                >
                    Read Article <ArrowRight size={18} />
                </Link>
            </div>
            <div className="order-1 lg:order-2">
                <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title} 
                    className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-md"
                />
            </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-8">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
                <Link to="/category/all" className="text-brand-600 hover:text-brand-700 font-medium">View All</Link>
            </div>

            <div className="grid gap-8">
                {latestPosts.map(post => (
                    <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <img 
                            src={post.coverImage} 
                            alt={post.title} 
                            className="w-full md:w-48 h-48 md:h-auto object-cover rounded-xl" 
                        />
                        <div className="flex flex-col justify-center flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{post.category}</span>
                                <span className="text-xs text-gray-400">{post.publishedAt}</span>
                            </div>
                            <Link to={`/post/${post.id}`}>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-brand-600 transition-colors">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>By {post.author.name}</span>
                                </div>
                                <Link to={`/post/${post.id}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-brand-600 flex items-center gap-1">
                                    Read <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 rounded-lg bg-brand-600 text-white">1</button>
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50">3</button>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
            <Sidebar />
        </div>
      </div>
    </div>
  );
};