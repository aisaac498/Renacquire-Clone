// Industries Page JavaScript

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initScrollAnimations();
  initContactForm();
  initIndustryHover();
});

// Scroll animations for elements
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.industry-item, .insight-item, .contact-section');
  animateElements.forEach(el => observer.observe(el));
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const formObject = {};
      
      // Get form values
      const inputs = this.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input.value.trim()) {
          formObject[input.name || input.placeholder.toLowerCase()] = input.value.trim();
        }
      });
      
      // Validate required fields
      const requiredFields = ['name', 'email'];
      const missingFields = requiredFields.filter(field => 
        !formObject[field] && !formObject[field.charAt(0).toUpperCase() + field.slice(1)]
      );
      
      if (missingFields.length > 0) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      // Email validation
      const email = formObject.email || formObject.Email;
      if (email && !isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
      this.reset();
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show form submission message
function showFormMessage(message, type) {
  // Remove any existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message element
  const messageEl = document.createElement('div');
  messageEl.className = `form-message ${type}`;
  messageEl.textContent = message;
  
  // Style the message
  messageEl.style.cssText = `
    padding: 12px 20px;
    margin-top: 15px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    ${type === 'success' 
      ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
      : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
    }
  `;
  
  // Add message after submit button
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.parentNode.insertBefore(messageEl, submitBtn.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.remove();
      }
    }, 5000);
  }
}

// Industry item hover effects
function initIndustryHover() {
  const industryItems = document.querySelectorAll('.industry-item, .insight-item');
  
  industryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      // Add subtle scale and shadow effects
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Add loading states and animations
function addLoadingAnimation() {
  // Stagger animation for industry items
  const industryItems = document.querySelectorAll('.industry-item');
  industryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Stagger animation for insight items
  const insightItems = document.querySelectorAll('.insight-item');
  insightItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
  });
}

// Initialize animations when page loads
addLoadingAnimation();