import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A2E' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-2xl">☂️</span>
              <span><span style={{ color: '#FF6B35' }}>Umbrella</span> Tours</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted travel partner for over 15 years. We craft unforgettable journeys to the world&apos;s most extraordinary destinations.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  style={{ backgroundColor: '#FF6B35' }}
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-white text-sm font-bold"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Tours', href: '/tours' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popular Tours</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Safari Adventure in Kenya',
                'Machu Picchu Explorer',
                'Northern Lights Iceland',
                'Bali Cultural Journey',
                'Japan Cherry Blossom',
              ].map((tour) => (
                <li key={tour}>
                  <Link href="/tours" className="hover:text-white hover:underline transition-colors">
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6B35' }}>📍</span>
                <span>123 Explorer Avenue, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#FF6B35' }}>📞</span>
                <a href="tel:+254700000000" className="hover:text-white transition-colors">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#FF6B35' }}>✉️</span>
                <a href="mailto:info@umbrellatours.com" className="hover:text-white transition-colors">info@umbrellatours.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#FF6B35' }}>🕐</span>
                <span>Mon–Sat: 8am – 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Umbrella Tours & Travel. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
