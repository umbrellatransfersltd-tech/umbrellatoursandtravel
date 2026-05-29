'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,46,0.8)' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Exclusive Travel Deals
        </h2>
        <p className="text-gray-300 mb-8">
          Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.
        </p>
        {subscribed ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-white font-bold text-xl">You&apos;re subscribed!</p>
            <p className="text-gray-300 mt-2 text-sm">Watch your inbox for exclusive deals and travel inspiration.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-800 text-sm outline-none"
            />
            <button
              type="submit"
              style={{ backgroundColor: '#FF6B35' }}
              className="text-white px-7 py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}
        <p className="text-gray-400 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
