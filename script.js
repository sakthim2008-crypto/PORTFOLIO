// Smooth scroll to section
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume/resume.pdf';
    link.download = 'Mari_Sakthi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add scroll event listener for navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scroll behavior for navigation links
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

// Add visible class for initial fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize fade-in elements
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        const delay = index * 100;
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.animation = `fadeInUp 0.8s ease forwards`;
            el.style.animationDelay = `${delay}ms`;
        }, 0);
    });

    // Check if elements are in viewport on load
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section - DISABLED to prevent overlap
// const heroSection = document.querySelector('.hero');
// if (heroSection) {
//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
//     });
// }

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in.visible {
        opacity: 1;
        animation: fadeInUp 0.8s ease forwards;
    }

    .nav-link.active {
        color: #6A0DAD;
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Handle contact card interactions
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Project card image loading
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('load', function () {
        this.parentElement.style.opacity = '1';
    });
    img.addEventListener('error', function () {
        this.parentElement.style.background = 'linear-gradient(135deg, #6A0DAD, #E6A8E6)';
        this.style.display = 'none';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Add escape key functionality if needed
    }
});

console.log('Portfolio script loaded successfully!');
