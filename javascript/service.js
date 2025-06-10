// Services Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize services page functionality
    initScrollAnimations();
    initServiceInteractions();
});

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in animations to main sections
    const fadeElements = document.querySelectorAll(`
        .hero-content,
        .services-content h2,
        .why-invest h2,
        .why-invest > p
    `);

    fadeElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Add slide animations to images
    const slideLeftElements = document.querySelectorAll(`
        .hero-image,
        .services-image
    `);

    slideLeftElements.forEach((el, index) => {
        el.classList.add('slide-in-left');
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Add staggered animations to service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${0.3 + index * 0.1}s`;
        observer.observe(item);
    });

    // Add staggered animations to benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${0.2 + index * 0.1}s`;
        observer.observe(item);
    });
}

// Service interactions and hover effects
function initServiceInteractions() {
    // Enhanced hover effects for benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    benefitItems.forEach(item => {
        const icon = item.querySelector('.benefit-icon');
        
        item.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Smooth scrolling for any internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click tracking for analytics (if needed)
    const serviceElements = document.querySelectorAll('.service-item, .benefit-item');
    serviceElements.forEach(element => {
        element.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log(`Service/Benefit clicked: ${title}`);
            // Here you could add analytics tracking
        });
    });
}

// Utility function to handle responsive image loading
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add lazy loading if not already present
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // You could set a fallback image here
        });
        
        // Add load event for smooth transitions
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
    });
}

// Initialize image optimization when DOM is ready
document.addEventListener('DOMContentLoaded', optimizeImages);

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(function() {
        // Add any resize-specific functionality here if needed
        console.log('Window resized - services page');
    }, 100);
});

// Preload critical images for better performance
function preloadImages() {
    const criticalImages = [
        'https://static.wixstatic.com/media/3c1252_089618a14ebd48a1b01686a0c8f734bc~mv2.jpg/v1/fill/w_490,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/office-meeting.jpg',
        'https://static.wixstatic.com/media/3c1252_c0c6cdf47fe44698943ca2782a5be863~mv2.jpeg/v1/fill/w_400,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/city-buildings.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();