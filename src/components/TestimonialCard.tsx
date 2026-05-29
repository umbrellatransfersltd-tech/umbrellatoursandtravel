import Image from 'next/image';
import { Testimonial } from '@/lib/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} style={{ color: '#FF6B35' }} className="text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
          <p style={{ color: '#FF6B35' }} className="text-xs mt-0.5">{testimonial.tour}</p>
        </div>
      </div>
    </div>
  );
}
