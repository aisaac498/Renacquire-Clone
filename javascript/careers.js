/* =============================================================================
   CAREERS PAGE JAVASCRIPT - RenAcquire Investment Banking
   ============================================================================= */

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initCTAButton();
  initLogoAnimations();
  initParallaxEffect();
  initCareerCards();
});

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        if (entry.target.classList.contains('logos-grid')) {
          animateLogoItems(entry.target);
        }
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.what-works-grid, .careers-grid, .logos-grid');
  animateElements.forEach(el => observer.observe(el));
}

function initCTAButton() {
  const ctaButton = document.querySelector('.btn-primary');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      const careersSection = document.querySelector('.careers');
      if (careersSection) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        window.scrollTo({
          top: careersSection.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }
    });
    
    ctaButton.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
}

function initLogoAnimations() {
  const logoItems = document.querySelectorAll('.logo-item');
  
  logoItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.1)';
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.zIndex = '1';
    });
  });
}

function animateLogoItems(logoGrid) {
  const logoItems = logoGrid.querySelectorAll('.logo-item');
  
  logoItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

function initParallaxEffect() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      if (hero.querySelector('.hero::before')) {
        hero.style.transform = `translateY(${rate}px)`;
      }
      
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
}

function initCareerCards() {
  const careerCards = document.querySelectorAll('.career-card');
  
  careerCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  });
});

const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  
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
  
  .btn-primary {
    position: relative;
    overflow: hidden;
  }
  
  .animate-in {
    animation: fadeInUp 0.8s ease both;
  }
  
  .logo-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(style);