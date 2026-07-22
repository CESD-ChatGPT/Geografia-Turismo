// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Counter animation for stats
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('es-ES');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('es-ES');
            }
        };

        updateCounter();
    });
};

// Intersection Observer for counter animation
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// Form submission
const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = ctaForm.querySelector('input[type="email"]').value;
        const institution = ctaForm.querySelector('input[type="text"]').value;

        // Show success message
        const button = ctaForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = '✓ ¡Demo solicitada! Nos contactaremos pronto';
        button.style.background = '#10b981';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            ctaForm.reset();
        }, 3000);

        console.log('Demo solicitada:', { email, institution });
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add animation class on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation || 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(card => {
    animationObserver.observe(card);
});

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
if (navLinks) {
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            // Close menu on mobile if needed
            if (window.innerWidth < 768) {
                navLinks.style.display = 'none';
                setTimeout(() => {
                    navLinks.style.display = '';
                }, 500);
            }
        }
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Mouse tracking effect on hero
const hero = document.querySelector('.hero');
if (hero) {
    document.addEventListener('mousemove', (e) => {
        const cubes = document.querySelectorAll('.cube');
        const sphere = document.querySelector('.sphere');

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        cubes.forEach((cube, index) => {
            const offsetX = (x - 0.5) * 20 * (index + 1);
            const offsetY = (y - 0.5) * 20 * (index + 1);
            cube.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        if (sphere) {
            const offsetX = (x - 0.5) * 30;
            const offsetY = (y - 0.5) * 30;
            sphere.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    });
}

// Add button ripple effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple-animation 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Lazy loading animation for elements
const lazyElements = document.querySelectorAll('[data-animate]');
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            lazyObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

lazyElements.forEach(el => lazyObserver.observe(el));

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Scroll operations here
    }, 150);
}, { passive: true });
