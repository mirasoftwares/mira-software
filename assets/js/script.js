// Navbar scroll shadow
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Hero Scroller ──
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

// Auto-advance every 4 seconds
let autoSlide = setInterval(nextSlide, 4000);

// Pause on hover
document.getElementById('heroScroller').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.getElementById('heroScroller').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 4000);
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form → Formspree
// SETUP: Go to https://formspree.io → New Form → connect info@mirasoftware.co.za
// Copy your form ID (looks like: xpwzabcd) and replace YOUR_FORM_ID below
const FORMSPREE_ID = 'YOUR_FORM_ID';

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const btn = document.getElementById('submit-btn');
    const errorEl = document.getElementById('form-error');
    const successEl = document.getElementById('form-success');

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
            field.style.borderColor = '#e53e3e';
            valid = false;
        }
    });
    if (!valid) return;

    // Loading state
    btn.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    errorEl.style.display = 'none';

    try {
        const data = new FormData(form);
        const response = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.style.display = 'none';
            successEl.style.display = 'block';
        } else {
            throw new Error('Submission failed');
        }
    } catch (err) {
        errorEl.style.display = 'block';
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        btn.style.opacity = '1';
    }
});
