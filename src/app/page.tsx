import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import TourCard from '@/components/TourCard';
import DestinationCard from '@/components/DestinationCard';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterSection from '@/components/NewsletterSection';
import { tours, destinations, testimonials } from '@/lib/data';
import Link from 'next/link';

const whyChooseUs = [
  {
    icon: '🧭',
    title: 'Expert Guides',
    desc: 'Our certified local guides bring destinations to life with insider knowledge and genuine passion.'
  },
  {
    icon: '💰',
    title: 'Best Prices',
    desc: 'We guarantee the best value for every tour. Find it cheaper elsewhere and we\'ll match it.'
  },
  {
    icon: '🛡️',
    title: 'Safe Travel',
    desc: 'Your safety is our top priority. All tours include comprehensive travel insurance coverage.'
  },
  {
    icon: '📞',
    title: '24/7 Support',
    desc: 'Round-the-clock assistance before, during, and after your trip — wherever you are.'
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Popular Destinations */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">
              Explore the Globe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Popular Destinations
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              From African savannas to Asian temples — find your perfect destination
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/destinations"
              style={{ border: '2px solid #FF6B35', color: '#FF6B35' }}
              className="inline-block px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">
              Handpicked For You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Featured Tours
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Our most popular tours, loved by thousands of travelers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.slice(0, 6).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tours"
              style={{ backgroundColor: '#FF6B35' }}
              className="inline-block text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#1A1A2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">
              Why Travel With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              The Umbrella Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-7 rounded-2xl group hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">
              Traveler Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Don&apos;t just take our word for it — hear from our happy travelers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
