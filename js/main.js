// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Feature accordion
document.querySelectorAll('.fl-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    item.closest('.feature-list').querySelectorAll('.fl-item').forEach(i => {
      i.classList.remove('is-open');
      i.querySelector('.fl-icon').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('is-open');
      item.querySelector('.fl-icon').textContent = '−';
    }
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => success.style.display = 'none', 5000);
}
