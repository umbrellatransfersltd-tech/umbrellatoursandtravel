'use client';

import { useState } from 'react';
import TourCard from '@/components/TourCard';
import { tours } from '@/lib/data';

const regions = ['All', 'Africa', 'Europe', 'Asia', 'South America', 'North America'];
const durations = ['All', '1-5 days', '6-9 days', '10+ days'];
const categories = ['All', 'Wildlife', 'Adventure', 'Cultural', 'Beach', 'Historical', 'Nature'];

export default function ToursPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const filtered = tours.filter((tour) => {
    const regionMatch = selectedRegion === 'All' || tour.region === selectedRegion;
    const categoryMatch = selectedCategory === 'All' || tour.category === selectedCategory;
    const priceMatch = tour.price <= maxPrice;
    let durationMatch = true;
    if (selectedDuration === '1-5 days') durationMatch = tour.duration <= 5;
    else if (selectedDuration === '6-9 days') durationMatch = tour.duration >= 6 && tour.duration <= 9;
    else if (selectedDuration === '10+ days') durationMatch = tour.duration >= 10;
    return regionMatch && categoryMatch && priceMatch && durationMatch;
  });

  const totalPages = Math.ceil(filtered.length / toursPerPage);
  const paginated = filtered.slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage);

  const resetFilters = () => {
    setSelectedRegion('All');
    setSelectedDuration('All');
    setSelectedCategory('All');
    setMaxPrice(3000);
    setCurrentPage(1);
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', paddingTop: '64px' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1A1A2E' }} className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore All Tours</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          {tours.length} handcrafted tours across {new Set(tours.map(t => t.region)).size} regions — your next adventure awaits
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-20">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-900 text-lg">Filters</h2>
                <button
                  onClick={resetFilters}
                  style={{ color: '#FF6B35' }}
                  className="text-sm font-medium hover:underline"
                >
                  Reset All
                </button>
              </div>

              {/* Region */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Destination</h3>
                <div className="space-y-2">
                  {regions.map((r) => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="region"
                        checked={selectedRegion === r}
                        onChange={() => { setSelectedRegion(r); setCurrentPage(1); }}
                        className="accent-orange-500"
                      />
                      <span className="text-sm text-gray-600">{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Duration</h3>
                <div className="space-y-2">
                  {durations.map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        checked={selectedDuration === d}
                        onChange={() => { setSelectedDuration(d); setCurrentPage(1); }}
                        className="accent-orange-500"
                      />
                      <span className="text-sm text-gray-600">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Category</h3>
                <div className="space-y-2">
                  {categories.map((c) => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === c}
                        onChange={() => { setSelectedCategory(c); setCurrentPage(1); }}
                        className="accent-orange-500"
                      />
                      <span className="text-sm text-gray-600">{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Max Price</h3>
                <input
                  type="range"
                  min={500}
                  max={3000}
                  step={100}
                  value={maxPrice}
                  onChange={(e) => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$500</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>${maxPrice.toLocaleString()}</span>
                  <span>$3,000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Tours Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 text-sm">
                Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> tours
              </p>
            </div>

            {paginated.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No tours found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
                <button onClick={resetFilters} style={{ backgroundColor: '#FF6B35' }} className="mt-4 text-white px-6 py-2.5 rounded-full text-sm font-semibold">
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginated.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-gray-100 transition-colors"
                    >
                      ← Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        style={
                          currentPage === page
                            ? { backgroundColor: '#FF6B35', color: 'white' }
                            : {}
                        }
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                          currentPage !== page ? 'border border-gray-300 hover:bg-gray-100' : ''
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-gray-100 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
