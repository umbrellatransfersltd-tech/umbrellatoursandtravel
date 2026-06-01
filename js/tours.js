// ========== Tour Data ==========
const toursData = [
  {
    id: 1,
    title: 'London Sightseeing',
    region: 'London',
    duration: 'Full Day',
    durationDays: 1,
    price: 95,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (314 reviews)',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    alt: 'London iconic landmarks'
  },
  {
    id: 2,
    title: 'London to Warner Bros. Studio (Harry Potter)',
    region: 'South East England',
    duration: 'Full Day',
    durationDays: 1,
    price: 175,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (214 reviews)',
    image: 'https://images.unsplash.com/photo-1590080876126-7ece9e2b1cf0?w=600&q=80',
    alt: 'Warner Bros Studio Harry Potter sets'
  },
  {
    id: 3,
    title: 'London to Oxford + Bicester Village',
    region: 'South East England',
    duration: 'Full Day',
    durationDays: 1,
    price: 165,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (189 reviews)',
    image: 'https://images.unsplash.com/photo-1580112184751-a2f0f3c79034?w=600&q=80',
    alt: 'Oxford dreaming spires'
  },
  {
    id: 4,
    title: 'London to Cambridge',
    region: 'East England',
    duration: 'Full Day',
    durationDays: 1,
    price: 155,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (176 reviews)',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80',
    alt: 'Cambridge River Cam and colleges'
  },
  {
    id: 5,
    title: 'London to Leeds Castle + Dover Cliffs + Canterbury',
    region: 'South East England',
    duration: 'Full Day',
    durationDays: 1,
    price: 175,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (187 reviews)',
    image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=600&q=80',
    alt: 'White Cliffs of Dover'
  },
  {
    id: 6,
    title: 'London to Brighton + Hove',
    region: 'South East England',
    duration: 'Full Day',
    durationDays: 1,
    price: 145,
    rating: 4.7,
    stars: '★★★★★',
    ratingText: '4.7 (142 reviews)',
    image: 'https://images.unsplash.com/photo-1570304816841-906a17d4d6b3?w=600&q=80',
    alt: 'Brighton seafront and Palace Pier'
  },
  {
    id: 7,
    title: 'London to Stonehenge + Bath',
    region: 'South West England',
    duration: 'Full Day',
    durationDays: 1,
    price: 185,
    rating: 4.9,
    stars: '★★★★★',
    ratingText: '4.9 (231 reviews)',
    image: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=600&q=80',
    alt: 'Stonehenge standing stones'
  },
  {
    id: 8,
    title: 'Southampton Cruise Transfers + Day Trips',
    region: 'South East England',
    duration: 'Half Day',
    durationDays: 1,
    price: 195,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (98 reviews)',
    image: 'https://images.unsplash.com/photo-1520209268518-aec60b8bb5d8?w=600&q=80',
    alt: 'Southampton cruise port'
  },
  {
    id: 9,
    title: 'Dover Cruise Transfers + Day Trips',
    region: 'South East England',
    duration: 'Half Day',
    durationDays: 1,
    price: 165,
    rating: 4.8,
    stars: '★★★★★',
    ratingText: '4.8 (112 reviews)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Dover cruise port and cliffs'
  }
];

// ========== State ==========
let activeRegion = 'All';
let activeDuration = 'All';

// ========== Render Tours ==========
function createTourCard(tour) {
  return `
    <div class="tour-card fade-in" data-region="${tour.region}" data-duration="${tour.durationDays}">
      <div class="tour-card-img">
        <img src="${tour.image}" alt="${tour.alt}" loading="lazy">
        <span class="tour-region-badge">${tour.region}</span>
      </div>
      <div class="tour-card-body">
        <h3 class="tour-title">${tour.title}</h3>
        <div class="tour-meta">
          <span class="tour-duration">⏱ ${tour.duration}</span>
          <span class="tour-price">From £${tour.price.toLocaleString()} <span>/ person</span></span>
        </div>
        <div class="tour-rating">
          <span class="stars">${tour.stars}</span>
          <span>${tour.ratingText}</span>
        </div>
        <a href="contact.html" class="btn-book-tour">Book Now</a>
      </div>
    </div>
  `;
}

function filterTours() {
  return toursData.filter(tour => {
    const regionMatch = activeRegion === 'All' || tour.region === activeRegion;
    let durationMatch = true;
    if (activeDuration === 'Half Day') durationMatch = tour.duration === 'Half Day';
    else if (activeDuration === 'Full Day') durationMatch = tour.duration === 'Full Day';
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
      'london': 'London',
      'south-east': 'South East England',
      'south-west': 'South West England',
      'east-england': 'East England'
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
