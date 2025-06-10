// About Us Page JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations and interactions
  initScrollAnimations();
  initImageLazyLoading();
  initSmoothScrolling();
  addInitialAnimations();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Trigger staggered animations for content items
        if (entry.target.classList.contains("content-grid")) {
          animateContentItems(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(`
        .fade-in,
        .slide-in-left,
        .slide-in-right,
        .content-item,
        .director-message,
        .content-grid,
        .section-content
    `);

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Animate content items with stagger
function animateContentItems(grid) {
  const items = grid.querySelectorAll(".content-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 150);
  });
}

// Image lazy loading for better performance
function initImageLazyLoading() {
  const images = document.querySelectorAll("img");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach((img) => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });
}

// Add initial animations to elements
function addInitialAnimations() {
  // Hero content initial animation
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add("visible");
    }, 200);
  }

  if (heroImage) {
    setTimeout(() => {
      heroImage.classList.add("visible");
    }, 400);
  }

  // Add hover effects to images
  const images = document.querySelectorAll(
    ".side-image img, .director-image img"
  );
  images.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        const navbarHeight =
          document.querySelector(".navbar")?.offsetHeight || 0;
        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // Add parallax effect to hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".about-hero");

    if (hero) {
      const rate = scrolled * -0.3;
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Add dynamic CSS for enhanced animations
function addDynamicStyles() {
  const aboutUsStyle = document.createElement("style");
  aboutUsStyle.id = "about-us-dynamic-styles";
  aboutUsStyle.textContent = `
    .content-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .content-item.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-content.visible {
        animation: fadeInUp 0.8s ease both;
    }
    
    .hero-image.visible {
        animation: fadeInUp 0.8s ease 0.2s both;
    }
    
    img {
        transition: transform 0.3s ease;
    }
    
    .side-image img:hover,
    .director-image img:hover {
        transform: scale(1.02) !important;
    }
  `;
  
  // Check if styles already exist to prevent duplicates
  if (!document.getElementById("about-us-dynamic-styles")) {
    document.head.appendChild(aboutUsStyle);
  }
}

// Initialize dynamic styles
addDynamicStyles();

// Initialize scroll progress indicator
window.addEventListener("scroll", function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  // You can add a progress bar here if needed
  document.documentElement.style.setProperty(
    "--scroll-progress",
    scrolled + "%"
  );
});

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1";
  });

  if (img.complete) {
    img.style.opacity = "1";
  } else {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
  }
});
