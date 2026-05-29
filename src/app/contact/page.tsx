'use client';

import { useState } from 'react';

const contactInfo = [
  { icon: '📍', title: 'Visit Us', lines: ['123 Explorer Avenue', 'Nairobi, Kenya'] },
  { icon: '📞', title: 'Call Us', lines: ['+254 700 000 000', '+1 800 UMBRELLA'] },
  { icon: '✉️', title: 'Email Us', lines: ['info@umbrellatours.com', 'bookings@umbrellatours.com'] },
  { icon: '🕐', title: 'Office Hours', lines: ['Monday – Friday: 8am–6pm', 'Saturday: 9am–4pm'] },
];

const destinations = [
  'Africa', 'Europe', 'Asia', 'South America', 'North America', 'Oceania', 'Not sure yet'
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', destination: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', paddingTop: '64px' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#1A1A2E' }} className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a question about a tour? Want to plan a custom trip? Our travel experts are ready to help you create the journey of a lifetime.
        </p>
      </div>

      {/* Contact Info Cards */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">We typically respond within 24 hours.</p>

              {submitted ? (
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }} className="rounded-xl p-6 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-sm">Thank you for reaching out. One of our travel experts will be in touch within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', destination: '', message: '' }); }}
                    style={{ color: '#FF6B35' }}
                    className="mt-4 text-sm font-medium hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination Interest</label>
                    <select
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition-all"
                    >
                      <option value="">Select a region...</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your dream trip, preferred dates, group size, or any questions..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: '#FF6B35' }}
                    className="w-full text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder & FAQs */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div
                className="rounded-2xl overflow-hidden shadow-md h-64 flex items-center justify-center"
                style={{ backgroundColor: '#e5e7eb' }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-2">🗺️</div>
                  <p className="text-gray-500 font-medium">123 Explorer Avenue, Nairobi, Kenya</p>
                  <p className="text-gray-400 text-sm mt-1">Interactive map coming soon</p>
                </div>
              </div>

              {/* FAQ Cards */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'How far in advance should I book?', a: 'We recommend booking at least 3 months ahead, especially for peak season travel and popular tours.' },
                    { q: 'Can I customize a tour itinerary?', a: 'Absolutely! Contact us and our experts will tailor any tour to your preferences, budget, and schedule.' },
                    { q: 'What is your cancellation policy?', a: 'Free cancellation up to 30 days before departure. 50% refund for cancellations 15-30 days prior.' },
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <p className="font-semibold text-gray-800 text-sm mb-1">{faq.q}</p>
                      <p className="text-gray-500 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
