import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import Link from 'next/link';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '500+', label: 'Tours Completed' },
  { value: '50+', label: 'Destinations' },
];

const values = [
  { icon: '❤️', title: 'Passion', desc: 'We genuinely love travel and it shows in every itinerary we craft.' },
  { icon: '🌍', title: 'Sustainability', desc: 'We partner with eco-conscious operators and support local communities.' },
  { icon: '🎯', title: 'Excellence', desc: 'Every detail matters — from accommodation to airport transfers.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent pricing, honest reviews, and no hidden fees — ever.' },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#F8F9FA', paddingTop: '64px' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#1A1A2E' }} className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Umbrella Tours</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          For over 15 years, we&apos;ve been turning travel dreams into extraordinary memories — one perfect journey at a time.
        </p>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5">
                Born from a Love of Adventure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Umbrella Tours & Travel was founded in 2009 by James Odhiambo, a passionate explorer who believed that every person deserves to experience the world&apos;s wonders. Starting with just three safari tours in Kenya, James grew the company into a global operation spanning six continents.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our name comes from the idea that we shelter you from the complexities of travel — logistics, language barriers, safety concerns — while you focus on the joy of discovery. Like an umbrella in a storm, we&apos;ve got you covered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of 50+ passionate travel experts crafts bespoke itineraries for thousands of adventurers each year, from solo backpackers to family expeditions and corporate retreats.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="About Umbrella Tours"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: '#FF6B35' }} className="py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl leading-relaxed opacity-95">
            &ldquo;To connect people with the world&apos;s most extraordinary places through expertly guided, responsibly operated, and deeply memorable travel experiences.&rdquo;
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ color: '#FF6B35' }} className="text-4xl font-bold">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-7 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">Meet The Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">The People Behind Your Adventure</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p style={{ color: '#FF6B35' }} className="text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ backgroundColor: '#1A1A2E' }} className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Browse our curated tours or reach out to our team to plan something completely bespoke.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours" style={{ backgroundColor: '#FF6B35' }} className="inline-block text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Browse Tours
          </Link>
          <Link href="/contact" style={{ border: '2px solid white', color: 'white' }} className="inline-block px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
