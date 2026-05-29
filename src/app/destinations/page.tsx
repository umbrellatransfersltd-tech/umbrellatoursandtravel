import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/data';

export default function DestinationsPage() {
  return (
    <div style={{ backgroundColor: '#F8F9FA', paddingTop: '64px' }}>
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
          alt="Destinations Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,46,0.7)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Destinations</h1>
          <p className="text-gray-300 max-w-lg">
            Six continents, endless adventures. Choose your next destination and let us handle the rest.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span style={{ color: '#FF6B35' }} className="text-sm font-semibold uppercase tracking-widest">
            Where to Next?
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">All Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.id} href="/tours" className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span style={{ backgroundColor: '#FF6B35' }} className="text-white text-xs px-3 py-1 rounded-full font-medium">
                      {dest.tourCount} Tours
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{dest.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{dest.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.countries.map((country) => (
                      <span key={country} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {country}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{ color: '#FF6B35' }}
                    className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Explore Tours <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#1A1A2E' }} className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Can&apos;t Decide?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Our travel experts are here to help you choose the perfect destination for your dream trip.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: '#FF6B35' }}
          className="inline-block text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Talk to an Expert
        </Link>
      </div>
    </div>
  );
}
