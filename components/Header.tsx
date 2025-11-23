import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Cpu } from 'lucide-react';
import { CATEGORIES } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white" onClick={closeMenu}>
            <div className="bg-brand-600 p-1.5 rounded-lg text-white">
              <Cpu size={24} />
            </div>
            TechEase<span className="text-brand-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${location.pathname === '/' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-300'}`}>
              Home
            </Link>
            {CATEGORIES.map(cat => (
               <Link 
                 key={cat.id}
                 to={`/category/${cat.slug}`} 
                 className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
               >
                 {cat.name}
               </Link>
            ))}
             <Link to="/about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link 
                to="/contact"
                className="hidden md:block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
                Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-brand-600" onClick={closeMenu}>
                Home
              </Link>
               {CATEGORIES.map(cat => (
               <Link 
                 key={cat.id}
                 to={`/category/${cat.slug}`} 
                 className="px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-brand-600"
                 onClick={closeMenu}
               >
                 {cat.name}
               </Link>
            ))}
              <Link to="/about" className="px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-brand-600" onClick={closeMenu}>
                About
              </Link>
               <Link to="/contact" className="px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-brand-600" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};