// ========== Sticky Navbar ==========
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll);
handleNavbarScroll();

// ========== Mobile Menu Toggle ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== Scroll Animation (IntersectionObserver) ==========
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeEls.forEach(el => observer.observe(el));
}

// ========== Search Bar Redirect ==========
const searchBtn = document.querySelector('.btn-search');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const destInput = document.querySelector('.search-bar input[type="text"]');
    const dest = destInput ? destInput.value.trim() : '';
    if (dest) {
      window.location.href = `tours.html?destination=${encodeURIComponent(dest)}`;
    } else {
      window.location.href = 'tours.html';
    }
  });
}

// Allow pressing Enter in search bar
const searchInput = document.querySelector('.search-bar input[type="text"]');
if (searchInput) {
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchBtn && searchBtn.click();
    }
  });
}

// ========== Current Page Nav Highlight ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.style.color = 'var(--primary)';
  }
});
