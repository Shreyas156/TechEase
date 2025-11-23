import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Cpu, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
        body: JSON.stringify({ email, form_location: 'footer_widget' })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        // Fallback for UI if error, though usually we might want to alert
        console.error("Failed to subscribe");
      }
    } catch (error) {
       console.error(error);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <div className="bg-brand-600 p-1 rounded text-white">
                <Cpu size={20} />
              </div>
              TechEase
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Simplifying technology for everyone. We break down complex topics into easy-to-understand guides for beginners and businesses.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-brand-600">Home</Link></li>
              <li><Link to="/category/ai" className="hover:text-brand-600">AI Tools</Link></li>
              <li><Link to="/category/no-code" className="hover:text-brand-600">No-Code</Link></li>
              <li><Link to="/category/productivity" className="hover:text-brand-600">Productivity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-brand-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-600">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-600">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-brand-600">Write for Us</a></li>
            </ul>
          </div>

          {/* Newsletter Mini */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Stay Updated</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Get the latest tech trends delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded">
                <CheckCircle size={16} /> Subscribed!
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-brand-500 dark:text-white"
                  required
                />
                <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Go
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechEase Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-300">Terms</Link>
            <Link to="/cookies" className="hover:text-gray-600 dark:hover:text-gray-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};