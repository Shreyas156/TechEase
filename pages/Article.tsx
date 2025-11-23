import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { Sidebar } from '../components/Sidebar';
import { Clock, Calendar, Share2, Facebook, Linkedin, Sparkles, AlertCircle } from 'lucide-react';
import { generateSummary } from '../services/geminiService';

const XLogo = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_POSTS.find(p => p.id === id);
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const handleGenerateSummary = async () => {
    if (!post) return;
    setLoadingSummary(true);
    const result = await generateSummary(post.content + post.excerpt);
    setSummary(result);
    setLoadingSummary(false);
  };

  if (!post) {
    return <div className="container mx-auto p-8 text-center">Post not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header Background */}
      <div className="w-full h-96 relative">
        <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="container mx-auto max-w-6xl">
                <Link to={`/category/${post.category}`} className="inline-block bg-brand-600 text-white px-3 py-1 rounded-md text-sm font-bold mb-4">
                    {post.category}
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight shadow-sm">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                        <img src={post.author.avatar} className="w-10 h-10 rounded-full border-2 border-white/20" alt={post.author.name} />
                        <span className="font-medium text-white">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {post.publishedAt}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {post.readTime}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Main Content */}
          <main className="lg:col-span-8">
            
            {/* AI Summary Block */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-800 rounded-xl p-6 mb-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={20} /> AI Quick Summary
                    </h3>
                    {!summary && !loadingSummary && (
                        <button 
                            onClick={handleGenerateSummary}
                            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded transition-colors"
                        >
                            Generate
                        </button>
                    )}
                </div>
                
                {loadingSummary && (
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-3 py-1">
                            <div className="h-2 bg-indigo-200 dark:bg-indigo-700 rounded w-3/4"></div>
                            <div className="h-2 bg-indigo-200 dark:bg-indigo-700 rounded"></div>
                        </div>
                    </div>
                )}

                {summary && (
                    <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed animate-fade-in">
                        {summary}
                    </p>
                )}
                {!summary && !loadingSummary && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        Click generate to get a 2-sentence summary of this article powered by Gemini.
                    </p>
                )}
            </div>

            {/* Social Share Sidebar (Desktop Sticky) */}
            <div className="hidden xl:flex flex-col gap-4 fixed left-8 top-1/3 z-10">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-100 hover:text-brand-600 transition-colors cursor-pointer text-gray-500">
                    <Facebook size={20} />
                </div>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white transition-colors cursor-pointer text-gray-500">
                    <XLogo size={20} />
                </div>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer text-gray-500">
                    <Linkedin size={20} />
                </div>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors cursor-pointer text-gray-500">
                    <Share2 size={20} />
                </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-8 text-sm text-gray-500 dark:text-gray-400">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <p>
                    <strong>Disclosure:</strong> This post may contain affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you.
                </p>
            </div>

            {/* Article Body */}
            <div 
                className="prose prose-lg dark:prose-invert max-w-none mb-12 prose-a:text-brand-600 prose-headings:text-gray-900 dark:prose-headings:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Affiliate Comparison Table (Dynamic) */}
            {post.affiliateLinks && post.affiliateLinks.length > 0 && (
                <div className="my-12 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Recommended Tools</h3>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {post.affiliateLinks.map((link, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white dark:bg-gray-900 gap-4">
                                <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">{link.label}</span>
                                <div className="flex items-center gap-6">
                                    <span className="text-gray-500 dark:text-gray-400 font-medium">{link.price}</span>
                                    <a 
                                        href={link.url}
                                        className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center min-w-[140px]"
                                    >
                                        View Deal
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Author Bio */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 dark:border-gray-700">
                <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-full object-cover" />
                <div className="text-center sm:text-left">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About {post.author.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{post.author.bio}</p>
                    <div className="mt-4 flex justify-center sm:justify-start gap-4 text-gray-400">
                        <XLogo size={18} className="hover:text-black dark:hover:text-white cursor-pointer" />
                        <Linkedin size={18} className="hover:text-brand-500 cursor-pointer" />
                    </div>
                </div>
            </div>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
                <Sidebar contextText={post.content} />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};