import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
         <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-400">
                <p>Last updated: October 26, 2023</p>
                <p>At TechEase Hub, we take your privacy seriously.</p>
                
                <h3>1. Information Collection</h3>
                <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a form, or communicate with us.</p>
                
                <h3>2. Affiliate Disclosure</h3>
                <p>TechEase Hub participates in various affiliate marketing programs. This means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>
                
                <h3>3. Cookies</h3>
                <p>We use cookies to analyze website traffic and optimize your website experience.</p>

                <h3>4. Contact</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@techeasehub.com.</p>
            </div>
        </div>
    </div>
  );
};