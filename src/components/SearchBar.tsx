'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/tours');
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-2 px-4 py-2">
        <span className="text-gray-400 text-lg">📍</span>
        <div className="flex-1">
          <label className="text-xs text-gray-500 block">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where do you want to go?"
            className="w-full text-gray-800 text-sm outline-none placeholder-gray-400"
          />
        </div>
      </div>
      <div className="hidden md:block w-px bg-gray-200 my-2" />
      <div className="flex-1 flex items-center gap-2 px-4 py-2">
        <span className="text-gray-400 text-lg">📅</span>
        <div className="flex-1">
          <label className="text-xs text-gray-500 block">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full text-gray-800 text-sm outline-none"
          />
        </div>
      </div>
      <div className="hidden md:block w-px bg-gray-200 my-2" />
      <div className="flex-1 flex items-center gap-2 px-4 py-2">
        <span className="text-gray-400 text-lg">👤</span>
        <div className="flex-1">
          <label className="text-xs text-gray-500 block">Travelers</label>
          <select
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="w-full text-gray-800 text-sm outline-none bg-transparent"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        style={{ backgroundColor: '#FF6B35' }}
        className="text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity whitespace-nowrap text-sm"
      >
        Search Tours
      </button>
    </form>
  );
}
