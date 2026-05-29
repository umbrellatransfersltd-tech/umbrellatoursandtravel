const stats = [
  { value: '500+', label: 'Tours', icon: '🗺️' },
  { value: '50+', label: 'Destinations', icon: '📍' },
  { value: '10,000+', label: 'Happy Travelers', icon: '😊' },
  { value: '15+', label: 'Years Experience', icon: '🏆' },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: '#FF6B35' }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-90 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
