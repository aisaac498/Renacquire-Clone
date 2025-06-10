// Events Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initScrollAnimations();
    initEventRegistration();
    initNewsletterSignup();
    initEventFiltering();
    initImageLazyLoading();
    
    console.log('Events page initialized');
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Event registration functionality
function initEventRegistration() {
    const registerButtons = document.querySelectorAll('.register-btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Simulate registration process
            setTimeout(() => {
                showRegistrationModal(this);
                
                // Reset button state
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 1500);
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 151, 58, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 151, 58, 0.3)';
        });
    });
}

// Registration modal
function showRegistrationModal(button) {
    const eventCard = button.closest('.event-card');
    const eventTitle = eventCard.querySelector('h4').textContent;
    const eventDate = eventCard.querySelector('.event-date span').textContent;
    const eventPrice = eventCard.querySelector('.event-price').textContent;
    
    const modal = document.createElement('div');
    modal.className = 'registration-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Event Registration</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="event-summary">
                        <h4>${eventTitle}</h4>
                        <p><i class="fas fa-calendar-alt"></i> ${eventDate}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${eventPrice}</p>
                    </div>
                    <form class="registration-form">
                        <div class="form-group">
                            <label for="fullName">Full Name *</label>
                            <input type="text" id="fullName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="company">Company</label>
                            <input type="text" id="company">
                        </div>
                        <div class="form-group">
                            <label for="position">Job Title</label>
                            <input type="text" id="position">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone">
                        </div>
                        <button type="submit" class="submit-registration">Complete Registration</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles dynamically
    addModalStyles();
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(modal);
    });
    
    // Handle form submission
    const form = modal.querySelector('.registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegistrationSubmit(form, modal);
    });
}

function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        .registration-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .registration-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: scale(0.8) translateY(50px);
            transition: transform 0.3s ease;
        }
        
        .registration-modal.active .modal-content {
            transform: scale(1) translateY(0);
        }
        
        .modal-header {
            padding: 25px 30px 15px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            color: var(--primary-color);
            font-size: 24px;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #333;
        }
        
        .modal-body {
            padding: 25px 30px 30px;
        }
        
        .event-summary {
            background: var(--light-bg);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
        }
        
        .event-summary h4 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .event-summary p {
            color: var(--secondary-color);
            margin: 5px 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: var(--primary-color);
        }
        
        .submit-registration {
            width: 100%;
            background: linear-gradient(135deg, var(--button-color), #007f30);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .submit-registration:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 151, 58, 0.3);
        }
    `;
    
    document.head.appendChild(styles);
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

function handleRegistrationSubmit(form, modal) {
    const submitBtn = form.querySelector('.submit-registration');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = ' Registration Successful!';
        submitBtn.style.background = '#28a745';
        
        setTimeout(() => {
            closeModal(modal);
            showSuccessMessage();
        }, 1500);
    }, 2000);
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h4>Registration Successful!</h4>
            <p>You'll receive a confirmation email shortly.</p>
        </div>
    `;
    
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--button-color), #007f30);
        color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 151, 58, 0.3);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    const successContent = message.querySelector('.success-content');
    successContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        message.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 4000);
}

// Newsletter signup functionality
function initNewsletterSignup() {
    const newsletterForm = document.querySelector('.newsletter-form-container');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const checkbox = this.querySelector('input[type="checkbox"]');
            const submitBtn = this.querySelector('.subscribe-btn');
            
            if (!checkbox.checked) {
                showNotification('Please agree to receive marketing communications.', 'error');
                return;
            }
            
            // Add loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.textContent = ' Subscribed!';
                submitBtn.style.background = '#28a745';
                this.querySelector('input[type="email"]').value = '';
                checkbox.checked = false;
                
                showNotification('Successfully subscribed to our newsletter!', 'success');
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }
}

// Event filtering (for future enhancement)
function initEventFiltering() {
    // This can be expanded to include category filtering
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h4').textContent.toLowerCase();
            console.log(`Filter events by category: ${category}`);
            // Implementation for filtering would go here
        });
    });
}

// Lazy loading for images
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10002;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add some interactive effects to event cards
document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Gallery lightbox effect
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h4').textContent;
            
            createLightbox(img.src, title);
        });
    });
}

function createLightbox(src, title) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay">
            <div class="lightbox-content">
                <img src="${src}" alt="${title}">
                <div class="lightbox-title">${title}</div>
                <button class="lightbox-close">&times;</button>
            </div>
        </div>
    `;
    
    // Add lightbox styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10003;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(lightbox);
    
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => closeLightbox(lightbox));
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox(lightbox);
    });
}

function closeLightbox(lightbox) {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(lightbox);
    }, 300);
}

// Initialize gallery lightbox
document.addEventListener('DOMContentLoaded', function() {
    initGalleryLightbox();
});