'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#1A1A2E' }} className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="text-2xl">☂️</span>
            <span>
              <span style={{ color: '#FF6B35' }}>Umbrella</span> Tours & Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/tours" className="text-gray-300 hover:text-white transition-colors duration-200">Tours</Link>
            <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors duration-200">Destinations</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
            <Link
              href="/tours"
              style={{ backgroundColor: '#FF6B35' }}
              className="text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-3">
              <Link href="/tours" className="text-gray-300 hover:text-white px-2 py-1" onClick={() => setIsOpen(false)}>Tours</Link>
              <Link href="/destinations" className="text-gray-300 hover:text-white px-2 py-1" onClick={() => setIsOpen(false)}>Destinations</Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-2 py-1" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-2 py-1" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link
                href="/tours"
                style={{ backgroundColor: '#FF6B35' }}
                className="text-white px-5 py-2 rounded-full font-semibold text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
