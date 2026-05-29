import Image from 'next/image';
import Link from 'next/link';
import { Tour } from '@/lib/types';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= Math.floor(rating) ? '#FF6B35' : '#d1d5db' }} className="text-sm">
          ★
        </span>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
  );
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span style={{ backgroundColor: '#FF6B35' }} className="text-white text-xs px-3 py-1 rounded-full font-medium">
            {tour.region}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
            {tour.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{tour.title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{tour.description}</p>
        <StarRating rating={tour.rating} />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>🕐 {tour.duration} days</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400">from</span>
            <p style={{ color: '#FF6B35' }} className="font-bold text-xl">${tour.price.toLocaleString()}</p>
          </div>
        </div>
        <Link
          href="/tours"
          style={{ backgroundColor: '#1A1A2E' }}
          className="mt-4 w-full block text-center text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 text-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
