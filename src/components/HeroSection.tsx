import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 26, 46, 0.65)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          style={{ backgroundColor: 'rgba(255, 107, 53, 0.2)', border: '1px solid rgba(255,107,53,0.5)', color: '#FF6B35' }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          ✈️ Your Journey Begins Here
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover the World with
          <span style={{ color: '#FF6B35' }}> Umbrella Tours</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Expertly crafted adventures to 50+ destinations worldwide. Your perfect journey, seamlessly organized — from safari to snowscape.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>

        {/* Popular searches */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="text-gray-400 text-sm">Popular:</span>
          {['Kenya Safari', 'Bali', 'Santorini', 'Japan', 'Machu Picchu'].map((tag) => (
            <span
              key={tag}
              className="text-sm text-gray-300 bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-1 rounded-full transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
