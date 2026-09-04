// Mobile nav toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-wrap');
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
});

// Contact form (no backend — shows success message)
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✅ Thank you! We will get back to you shortly.';
  e.target.reset();
  setTimeout(() => msg.textContent = '', 5000);
}
