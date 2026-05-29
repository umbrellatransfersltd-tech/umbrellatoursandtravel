import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/lib/types';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href="/tours" className="block group">
      <div className="relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="font-bold text-xl">{destination.name}</h3>
          <p className="text-sm text-gray-300 mt-1">{destination.countries.join(' • ')}</p>
          <div className="flex items-center justify-between mt-2">
            <span style={{ color: '#FF6B35' }} className="text-sm font-semibold">{destination.tourCount} Tours</span>
            <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">Explore →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
