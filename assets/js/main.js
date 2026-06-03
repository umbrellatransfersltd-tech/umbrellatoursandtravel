/* ============================================================
   Umbrella Tours & Travel — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ─── Utility helpers ──────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ─── DOM Ready ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initActiveNav();
    initSmoothScroll();
    initScrollReveal();
    initTestimonialSlider();
    initFAQ();
    initGalleryLightbox();
    initCounters();
    initFormValidation();
    initBackToTop();
    initHeroAnimation();
    initNewsletter();
  });

  /* ─── Header: sticky + glassmorphism ───────────────────── */
  function initHeader() {
    const header = $('#site-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Mobile Nav Toggle ────────────────────────────────── */
  function initMobileNav() {
    const hamburger = $('#hamburger');
    const mobileNav = $('#mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      if (isOpen) {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
      } else {
        closeMobileNav();
      }
    });

    // Close on link click
    $$('a', mobileNav).forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileNav();
      }
    });

    function closeMobileNav() {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  /* ─── Active Nav Link ──────────────────────────────────── */
  function initActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav__link, .mobile-nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const page = href.split('/').pop();
      if (page === current || (current === '' && page === 'index.html') ||
          (current === 'index.html' && page === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ─── Smooth Scrolling ─────────────────────────────────── */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = $(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-h')) || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ─── Scroll Reveal (IntersectionObserver) ─────────────── */
  function initScrollReveal() {
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-fade'];
    const elements = $$(revealClasses.join(','));
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  /* ─── Testimonial Slider ───────────────────────────────── */
  function initTestimonialSlider() {
    const slider = $('#testimonial-slider');
    if (!slider) return;

    const track   = slider.querySelector('.testimonial-track');
    const slides  = $$('.testimonial-slide', slider);
    const prevBtn = $('#slider-prev');
    const nextBtn = $('#slider-next');
    const dotsContainer = $('#slider-dots');
    if (!track || !slides.length) return;

    let current = 0;
    let autoTimer = null;
    const total = slides.length;

    // Build dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      $$('.slider-dot', dotsContainer || document).forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(next, 5000);
    }
    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // Touch swipe
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); startAuto(); }
    });

    startAuto();
  }

  /* ─── FAQ Accordion ────────────────────────────────────── */
  function initFAQ() {
    $$('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      if (!question) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        $$('.faq-item.open').forEach(open => open.classList.remove('open'));
        // Toggle current
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ─── Gallery Lightbox ─────────────────────────────────── */
  function initGalleryLightbox() {
    const items = $$('.gallery-item');
    const lightbox = $('#lightbox');
    if (!items.length || !lightbox) return;

    const img     = lightbox.querySelector('.lightbox__img');
    const counter = lightbox.querySelector('.lightbox__counter');
    const closeBtn= lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.lightbox__nav--next');
    let currentIdx = 0;

    const images = items.map(item => {
      const imgEl = item.querySelector('img');
      return { src: imgEl ? imgEl.src : '', alt: imgEl ? imgEl.alt : '' };
    });

    function openLightbox(index) {
      currentIdx = (index + images.length) % images.length;
      img.src = images[currentIdx].src;
      img.alt = images[currentIdx].alt;
      if (counter) counter.textContent = `${currentIdx + 1} / ${images.length}`;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { img.src = ''; }, 300);
    }

    items.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => openLightbox(currentIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => openLightbox(currentIdx + 1));

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightbox(currentIdx - 1);
      if (e.key === 'ArrowRight') openLightbox(currentIdx + 1);
    });
  }

  /* ─── Number Counter Animation ─────────────────────────── */
  function initCounters() {
    const counters = $$('.stat-count');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target) || 0;
        const isDecimal = el.dataset.decimal === 'true';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ─── Form Validation ──────────────────────────────────── */
  function initFormValidation() {
    // Contact form
    const contactForm = $('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(contactForm)) {
          showFormSuccess(contactForm, 'Thank you! Your enquiry has been received. We\'ll be in touch within 24 hours.');
          contactForm.reset();
        }
      });
      // Inline validation on blur
      $$('[data-validate]', contactForm).forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
          if (field.closest('.form-group').classList.contains('has-error')) {
            validateField(field);
          }
        });
      });
    }

    // Newsletter form(s)
    $$('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input) return;
        if (!isValidEmail(input.value.trim())) {
          input.style.borderColor = '#e53e3e';
          input.placeholder = 'Please enter a valid email';
          return;
        }
        input.style.borderColor = '';
        const btn = form.querySelector('.btn');
        if (btn) {
          btn.textContent = 'Subscribed!';
          btn.disabled = true;
          setTimeout(() => { btn.textContent = 'Subscribe'; btn.disabled = false; }, 3000);
        }
        form.reset();
      });
    });
  }

  function validateForm(form) {
    let valid = true;
    $$('[data-validate]', form).forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  function validateField(field) {
    const group = field.closest('.form-group');
    const errorEl = group ? group.querySelector('.form-error') : null;
    let error = '';

    const value = field.value.trim();
    const type = field.dataset.validate;

    if (field.required && !value) {
      error = 'This field is required.';
    } else if (type === 'email' && value && !isValidEmail(value)) {
      error = 'Please enter a valid email address.';
    } else if (type === 'phone' && value && !isValidPhone(value)) {
      error = 'Please enter a valid phone number.';
    } else if (type === 'minlength' && value && value.length < 10) {
      error = 'Please enter at least 10 characters.';
    }

    if (group) group.classList.toggle('has-error', !!error);
    if (errorEl) errorEl.textContent = error;
    return !error;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isValidPhone(phone) {
    return /^[\d\s\+\-\(\)]{7,20}$/.test(phone);
  }

  function showFormSuccess(form, message) {
    let successEl = form.querySelector('.form-success');
    if (!successEl) {
      successEl = document.createElement('div');
      successEl.className = 'form-success';
      form.appendChild(successEl);
    }
    successEl.textContent = message;
    successEl.style.display = 'block';
    setTimeout(() => { successEl.style.display = 'none'; }, 6000);
  }

  /* ─── Back to Top ──────────────────────────────────────── */
  function initBackToTop() {
    const btn = $('#back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Hero Background Animation ────────────────────────── */
  function initHeroAnimation() {
    const hero = $('.hero');
    if (!hero) return;
    // Trigger the parallax scale transition
    requestAnimationFrame(() => hero.classList.add('loaded'));
  }

  /* ─── Newsletter ────────────────────────────────────────── */
  function initNewsletter() {
    // Handled in initFormValidation
  }

})();
