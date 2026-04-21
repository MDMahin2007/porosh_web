// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project navigation
const projectNav = {
    current: 0,
    total: 2,

    init() {
        const prevBtn = document.querySelector('.nav-arrow.prev');
        const nextBtn = document.querySelector('.nav-arrow.next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    },

    prev() {
        this.current = (this.current - 1 + this.total) % this.total;
        this.updateNumber();
    },

    next() {
        this.current = (this.current + 1) % this.total;
        this.updateNumber();
    },

    updateNumber() {
        const numberEl = document.querySelector('.project-number');
        if (numberEl) {
            numberEl.textContent = `0${this.current + 1} / 0${this.total}`;
        }
    }
};

projectNav.init();

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        // Simple validation
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });

        if (isValid) {
            alert('Message sent successfully! We will contact you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

//gallery section
let page = 1;

document.getElementById("next").onclick = () => {
    page++;
    alert("Next Page: " + page);
};

document.getElementById("prev").onclick = () => {
    if (page > 1) {
        page--;
        alert("Previous Page: " + page);
    }
};