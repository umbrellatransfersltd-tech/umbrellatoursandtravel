// ========== Tour Data ==========
const toursData = [
  {
    id: 1,
    title: 'Safari Adventure in Kenya',
    region: 'Africa',
    duration: 7,
    price: 1299,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (124 reviews)',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
    alt: 'Kenya Safari'
  },
  {
    id: 2,
    title: 'Machu Picchu Explorer',
    region: 'South America',
    duration: 10,
    price: 1899,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (98 reviews)',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    alt: 'Machu Picchu'
  },
  {
    id: 3,
    title: 'Northern Lights Iceland',
    region: 'Europe',
    duration: 5,
    price: 2199,
    rating: 4.7,
    stars: '★★★★★',
    ratingText: '4.7 (76 reviews)',
    image: 'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80',
    alt: 'Northern Lights Iceland'
  },
  {
    id: 4,
    title: 'Bali Cultural Journey',
    region: 'Asia',
    duration: 8,
    price: 999,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (152 reviews)',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    alt: 'Bali'
  },
  {
    id: 5,
    title: 'Egyptian Pyramids Tour',
    region: 'Africa',
    duration: 6,
    price: 1499,
    rating: 4.6,
    stars: '★★★★☆',
    ratingText: '4.6 (89 reviews)',
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80',
    alt: 'Egyptian Pyramids'
  },
  {
    id: 6,
    title: 'Santorini Escape',
    region: 'Europe',
    duration: 7,
    price: 1799,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (201 reviews)',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    alt: 'Santorini'
  },
  {
    id: 7,
    title: 'Amazon Rainforest Trek',
    region: 'South America',
    duration: 9,
    price: 1599,
    rating: 4.7,
    stars: '★★★★★',
    ratingText: '4.7 (63 reviews)',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80',
    alt: 'Amazon Rainforest'
  },
  {
    id: 8,
    title: 'Japan Cherry Blossom',
    region: 'Asia',
    duration: 12,
    price: 2499,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (175 reviews)',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    alt: 'Japan Cherry Blossom'
  },
  {
    id: 9,
    title: 'Morocco Desert Safari',
    region: 'Africa',
    duration: 8,
    price: 1199,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (112 reviews)',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    alt: 'Morocco Desert'
  },
  {
    id: 10,
    title: 'Patagonia Adventure',
    region: 'South America',
    duration: 14,
    price: 2999,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (58 reviews)',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    alt: 'Patagonia'
  },
  {
    id: 11,
    title: 'Greek Islands Cruise',
    region: 'Europe',
    duration: 10,
    price: 2299,
    rating: 4.7,
    stars: '★★★★★',
    ratingText: '4.7 (143 reviews)',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
    alt: 'Greek Islands'
  },
  {
    id: 12,
    title: 'Thailand Beach Hopping',
    region: 'Asia',
    duration: 7,
    price: 899,
    rating: 4.6,
    stars: '★★★★☆',
    ratingText: '4.6 (188 reviews)',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80',
    alt: 'Thailand Beach'
  }
];

// ========== State ==========
let activeRegion = 'All';
let activeDuration = 'All';

// ========== Render Tours ==========
function createTourCard(tour) {
  return `
    <div class="tour-card fade-in" data-region="${tour.region}" data-duration="${tour.duration}">
      <div class="tour-card-img">
        <img src="${tour.image}" alt="${tour.alt}" loading="lazy">
        <span class="tour-region-badge">${tour.region}</span>
      </div>
      <div class="tour-card-body">
        <h3 class="tour-title">${tour.title}</h3>
        <div class="tour-meta">
          <span class="tour-duration">⏱ ${tour.duration} Days</span>
          <span class="tour-price">$${tour.price.toLocaleString()} <span>/ person</span></span>
        </div>
        <div class="tour-rating">
          <span class="stars">${tour.stars}</span>
          <span>${tour.ratingText}</span>
        </div>
        <button class="btn-book-tour" onclick="alert('Booking for ${tour.title} — contact us at umbrellatransfersltd@gmail.com')">Book Now</button>
      </div>
    </div>
  `;
}

function filterTours() {
  return toursData.filter(tour => {
    const regionMatch = activeRegion === 'All' || tour.region === activeRegion;
    let durationMatch = true;
    if (activeDuration === '1-5') durationMatch = tour.duration >= 1 && tour.duration <= 5;
    else if (activeDuration === '6-10') durationMatch = tour.duration >= 6 && tour.duration <= 10;
    else if (activeDuration === '11+') durationMatch = tour.duration >= 11;
    return regionMatch && durationMatch;
  });
}

function renderTours() {
  const grid = document.getElementById('tours-grid');
  const countEl = document.getElementById('tours-count');
  if (!grid) return;

  const filtered = filterTours();

  grid.innerHTML = filtered.length > 0
    ? filtered.map(createTourCard).join('')
    : '<p style="text-align:center;color:var(--text-mid);grid-column:1/-1;padding:40px;">No tours match your filters. Try different criteria.</p>';

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${toursData.length} tours`;
  }

  // Re-observe new elements for animation
  const newFadeEls = grid.querySelectorAll('.fade-in');
  if (window.scrollObserver) {
    newFadeEls.forEach(el => window.scrollObserver.observe(el));
  } else {
    newFadeEls.forEach(el => el.classList.add('visible'));
  }
}

// ========== Filter Buttons ==========
function setupFilters() {
  const regionBtns = document.querySelectorAll('[data-filter-region]');
  const durationBtns = document.querySelectorAll('[data-filter-duration]');

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      regionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegion = btn.dataset.filterRegion;
      renderTours();
    });
  });

  durationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      durationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDuration = btn.dataset.filterDuration;
      renderTours();
    });
  });
}

// ========== IntersectionObserver for dynamic cards ==========
window.scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      window.scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  renderTours();

  // Handle URL params (from search bar)
  const params = new URLSearchParams(window.location.search);
  const dest = params.get('destination');
  if (dest) {
    const regionMap = {
      kenya: 'Africa', japan: 'Asia', greece: 'Europe',
      peru: 'South America', bali: 'Asia', iceland: 'Europe',
      egypt: 'Africa', morocco: 'Africa', thailand: 'Asia',
      amazon: 'South America', patagonia: 'South America', santorini: 'Europe'
    };
    const key = dest.toLowerCase();
    for (const [k, v] of Object.entries(regionMap)) {
      if (key.includes(k)) {
        activeRegion = v;
        const matchBtn = document.querySelector(`[data-filter-region="${v}"]`);
        if (matchBtn) {
          document.querySelectorAll('[data-filter-region]').forEach(b => b.classList.remove('active'));
          matchBtn.classList.add('active');
        }
        renderTours();
        break;
      }
    }
  }
});
