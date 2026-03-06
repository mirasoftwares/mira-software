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

// Contact form → Web3Forms
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
        const payload = {
            access_key: '0a6f6fa8-dd44-4f62-9b7e-4f93dc972edf',
            subject: 'New enquiry from mirasoftware.co.za',
            from_name: form.firstName.value + ' ' + form.lastName.value,
            email: form.email.value,
            company: form.company.value,
            service: form.service.value,
            message: form.message.value
        };

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.success) {
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

// ── Email injection (split to avoid proxy obfuscation) ──
(function() {
    const u = 'info';
    const d = 'mirasoftware.co.za';
    const e = u + '@' + d;
    const h = 'mailto:' + e;

    const el = document.getElementById('contact-email');
    if (el) { el.href = h; el.textContent = e; }

    const se = document.getElementById('success-email');
    if (se) { se.textContent = e; }

    const ee = document.getElementById('error-email');
    if (ee) { ee.href = h; ee.textContent = e; }
})();
