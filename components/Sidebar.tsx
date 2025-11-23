import React, { useState } from 'react';
import { Search, Mail, TrendingUp, MessageSquare } from 'lucide-react';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { askAiAssistant } from '../services/geminiService';

export const Sidebar: React.FC<{ contextText?: string }> = ({ contextText }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const trendingPosts = MOCK_POSTS.slice(0, 3);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("https://formspree.io/f/mjkzzdgg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, form_location: 'sidebar_widget' })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert("There was an issue subscribing. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an issue subscribing. Please try again.");
    }
  };

  const handleAskAi = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!aiQuestion.trim()) return;
      setAiLoading(true);
      const answer = await askAiAssistant(aiQuestion, contextText || "General Tech Blog context");
      setAiAnswer(answer);
      setAiLoading(false);
  };

  return (
    <aside className="space-y-8 w-full">
      {/* Search Widget */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 dark:text-white flex items-center gap-2">
          <Search size={18} /> Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button className="absolute right-2 top-2.5 text-gray-400 hover:text-brand-500">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* AI Assistant Widget */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800">
        <h3 className="font-bold text-lg mb-2 text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
           <MessageSquare size={18} /> AI Assistant
        </h3>
        <p className="text-xs text-indigo-700 dark:text-indigo-300 mb-4">Ask questions about this content or tech in general.</p>
        <form onSubmit={handleAskAi} className="space-y-3">
            <input 
                type="text" 
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="What is...?"
                className="w-full p-2 text-sm rounded border border-indigo-200 dark:border-indigo-700 dark:bg-gray-800 dark:text-white"
            />
            <button 
                type="submit" 
                disabled={aiLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
                {aiLoading ? 'Thinking...' : 'Ask Gemini'}
            </button>
        </form>
        {aiAnswer && (
            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-indigo-900 animate-fade-in">
                <strong>AI:</strong> {aiAnswer}
            </div>
        )}
      </div>

      {/* Newsletter Widget */}
      <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl border border-brand-100 dark:border-brand-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white flex items-center gap-2">
          <Mail size={18} /> Newsletter
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Join 10,000+ subscribers getting the best tech tips weekly.
        </p>
        {subscribed ? (
          <div className="text-green-600 font-medium bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-center">
            Thanks for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-gray-500 mt-3 text-center">
          No spam, unsubscribe anytime.
        </p>
      </div>

      {/* Ad Placeholder */}
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-300 dark:border-gray-600">
        <span className="font-semibold">Ad Space</span>
        <span className="text-xs">300x250</span>
      </div>

      {/* Trending Posts */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 dark:text-white flex items-center gap-2">
          <TrendingUp size={18} /> Trending
        </h3>
        <div className="space-y-4">
          {trendingPosts.map((post, idx) => (
            <Link to={`/post/${post.id}`} key={post.id} className="group flex gap-4 items-start">
              <span className="text-2xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-brand-200 transition-colors">
                0{idx + 1}
              </span>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};