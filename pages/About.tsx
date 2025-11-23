import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8">About TechEase Hub</h1>
             <div className="prose prose-lg dark:prose-invert mx-auto">
                 <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                     TechEase Hub was born from a simple frustration: Technology is moving too fast, and the manuals are too boring.
                 </p>
                 <p>
                     We believe that <strong>Artificial Intelligence</strong>, <strong>Automation</strong>, and <strong>No-Code tools</strong> are the great equalizers of our time. They allow small businesses to compete with giants and individuals to reclaim their time.
                 </p>
                 <p>
                     Our mission is to strip away the jargon. We don't just tell you <em>what</em> a tool is; we show you exactly <em>how</em> to use it to make money, save time, or build something cool.
                 </p>
                 <h2 className="mt-12">Why Follow Us?</h2>
                 <ul className="text-left inline-block mx-auto">
                     <li>✅ <strong>Zero Fluff:</strong> We respect your time.</li>
                     <li>✅ <strong>Practical Tutorials:</strong> Step-by-step guides you can actually follow.</li>
                     <li>✅ <strong>Honest Reviews:</strong> We test everything before we recommend it.</li>
                 </ul>
             </div>
        </div>
    </div>
  );
};