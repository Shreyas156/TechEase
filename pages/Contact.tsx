import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'General'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mjkzzdgg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            interest: 'General'
        });
      } else {
        alert("There was a problem submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question about a tool? Want to partner for advertising? Or just want to say hi? Fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                  <p className="text-gray-500 text-sm">shreyaspeherkar04@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                  <p className="text-gray-500 text-sm">7841820609</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Office</h3>
                  <p className="text-gray-500 text-sm">Near old Z.P School Ganori</p>
                  <p className="text-gray-500 text-sm">Phulambri Chhatrapati Sambhajinagar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 font-medium hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-900 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-900 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label htmlFor="interest" className="text-sm font-medium text-gray-700 dark:text-gray-300">I'm interested in</label>
                             <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-900 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                             >
                                 <option value="General">General Inquiry</option>
                                 <option value="Advertising">Advertising / Sponsorship</option>
                                 <option value="Guest Post">Guest Posting</option>
                                 <option value="Consulting">Consulting Services</option>
                             </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-900 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                placeholder="How can we help?"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-900 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'} {!loading && <Send size={18} />}
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};