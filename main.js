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

// Contact form — Formspree
async function submitForm() {
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const company = document.getElementById('fcompany').value;
  const message = document.getElementById('fmessage').value;
  const msg = document.getElementById('formMsg');

  if (!name || !email || !message) {
    msg.style.color = 'red';
    msg.textContent = '⚠️ Please fill all required fields.';
    return;
  }

  const data = { name, email, company, message };

  try {
    const res = await fetch('https://formspree.io/f/maeyberb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      msg.style.color = 'green';
      msg.textContent = '✅ Thank you! We will get back to you shortly.';
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fcompany').value = '';
      document.getElementById('fmessage').value = '';
    } else {
      msg.style.color = 'red';
      msg.textContent = '❌ Something went wrong. Please email us directly at info@navegatorimarine.com';
    }
  } catch (e) {
    msg.style.color = 'red';
    msg.textContent = '❌ Network error. Please email us at info@navegatorimarine.com';
  }
  setTimeout(() => msg.textContent = '', 6000);
}
