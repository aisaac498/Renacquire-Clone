/* =============================================================================
   GLOBAL JAVASCRIPT - RenAcquire Investment Banking Website
   Core functionality for navigation, modals, and user interactions
   ============================================================================= */

/**
 * Initialize all website functionality when DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  initializeNavigation();
  initializeChatModal();
  initializeLoginModal();
  initializeSmoothScrolling();
});

/* =============================================================================
   NAVIGATION FUNCTIONALITY
   ============================================================================= */

/**
 * Initialize mobile navigation hamburger menu functionality
 */
function initializeNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  // Toggle mobile menu visibility when hamburger is clicked
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when any navigation link is clicked
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Only close the menu if it's currently open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });
}

/* =============================================================================
   SMOOTH SCROLLING FUNCTIONALITY
   ============================================================================= */

/**
 * Initialize smooth scrolling for anchor links within the page
 */
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only process if the href is not just "#" (empty anchor)
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calculate scroll position accounting for fixed navbar height
          const navbarHeight = document.querySelector(".navbar").offsetHeight;

          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

/* =============================================================================
   CHAT MODAL FUNCTIONALITY
   ============================================================================= */

/**
 * Initialize chat modal functionality for customer engagement
 */
function initializeChatModal() {
  // Create chat modal if it doesn't exist in DOM
  if (!document.querySelector(".chat-modal")) {
    createChatModal();
  }

  // Get modal elements
  const chatButton = document.querySelector(".chat-button a");
  const chatModal = document.querySelector(".chat-modal");
  const chatClose = document.querySelector(".chat-close");

  // Set up event listeners for modal interactions
  setupChatModalEventListeners(chatButton, chatModal, chatClose);
}

/**
 * Set up all event listeners for chat modal interactions
 */
function setupChatModalEventListeners(chatButton, chatModal, chatClose) {
  // Open modal when chat button is clicked
  if (chatButton) {
    chatButton.addEventListener("click", function (e) {
      e.preventDefault();
      openChatModal();
    });
  }

  // Close modal when close button is clicked
  if (chatClose) {
    chatClose.addEventListener("click", function () {
      closeChatModal();
    });
  }

  // Close modal when clicking outside the modal content
  if (chatModal) {
    chatModal.addEventListener("click", function (e) {
      if (e.target === chatModal) {
        closeChatModal();
      }
    });
  }

  // Close modal with escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      chatModal &&
      chatModal.classList.contains("active")
    ) {
      closeChatModal();
    }
  });
}

/**
 * Create and inject chat modal HTML into the document
 * Provides multiple contact options for user engagement
 */
function createChatModal() {
  const modalHTML = `
    <div class="chat-modal" id="chatModal">
      <div class="chat-modal-content">
        <div class="chat-header">
          <button class="chat-close" aria-label="Close chat">
            <i class="fas fa-times"></i>
          </button>
          <h3>How can we help you?</h3>
          <p>Choose the best way to get in touch with our team</p>
        </div>
        
        <div class="chat-body">
          <div class="chat-options">
            <a href="tel:+2348141325535" class="chat-option">
              <div class="chat-option-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="chat-option-content">
                <h4>Call Us Now</h4>
                <p>Speak directly with our experts</p>
              </div>
            </a>
            
            <a href="mailto:funke.okoya@renacquire.com" class="chat-option">
              <div class="chat-option-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="chat-option-content">
                <h4>Send Email</h4>
                <p>Get detailed information via email</p>
              </div>
            </a>
            
            <a href="#" class="chat-option" data-contact-link="true">
              <div class="chat-option-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="chat-option-content">
                <h4>Schedule Meeting</h4>
                <p>Book a consultation with our advisors</p>
              </div>
            </a>
            
            <a href="https://wa.me/2348141325535" class="chat-option" target="_blank">
              <div class="chat-option-icon">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div class="chat-option-content">
                <h4>WhatsApp Chat</h4>
                <p>Quick response via WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
        
        <div class="chat-footer">
          <p>We typically respond within 24 hours during business days</p>
        </div>
      </div>
    </div>
  `;

  // Inject modal HTML into document body
  document.body.insertAdjacentHTML("beforeend", modalHTML);
  
  // Set up dynamic contact link based on current page location
  setupDynamicContactLink();
}

/**
 * Set up dynamic contact link based on current page location
 */
function setupDynamicContactLink() {
  const contactLink = document.querySelector('[data-contact-link="true"]');
  if (contactLink) {
    // Check if we're in a webpages subdirectory or root
    const isInWebpages = window.location.pathname.includes('/webpages/');
    const contactUrl = isInWebpages ? 'contact.html' : 'webpages/contact.html';
    contactLink.href = contactUrl;
  }
}

/**
 * Open chat modal with animation effects
 * Prevents background scrolling and adds staggered animations
 */
function openChatModal() {
  const modal = document.querySelector(".chat-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    // Add staggered entrance animation to chat options
    const options = modal.querySelectorAll(".chat-option");
    options.forEach((option, index) => {
      option.style.animation = `slideInUp 0.3s ease ${index * 0.1}s both`;
    });
  }
}

/**
 * Close chat modal and restore normal page behavior
 * Removes animations and restores scrolling
 */
function closeChatModal() {
  const modal = document.querySelector(".chat-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling

    // Clean up animations
    const options = modal.querySelectorAll(".chat-option");
    options.forEach((option) => {
      option.style.animation = "";
    });
  }
}

/* =============================================================================
   LOGIN MODAL FUNCTIONALITY
   ============================================================================= */

/**
 * Initialize login modal functionality for user authentication
 */
function initializeLoginModal() {
  // Create login modal if it doesn't exist in DOM
  if (!document.querySelector(".modal-overlay")) {
    createLoginModal();
  }

  // Get modal elements
  const loginButtons = document.querySelectorAll(".login-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const toggleLink = document.querySelector(".toggle-mode");
  const emailSignupBtn = document.querySelector(".email-btn");
  const emailForm = document.querySelector(".email-form");
  const backBtn = document.querySelector(".back-btn");

  // Open modal when login button is clicked
  loginButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openLoginModal();
    });
  });

  // Close modal when close button is clicked
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      closeLoginModal();
    });
  }

  // Close modal when clicking outside
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        closeLoginModal();
      }
    });
  }

  // Toggle between login and signup
  if (toggleLink) {
    toggleLink.addEventListener("click", function (e) {
      e.preventDefault();
      toggleLoginMode();
    });
  }

  // Show email form
  if (emailSignupBtn) {
    emailSignupBtn.addEventListener("click", function () {
      showEmailForm();
    });
  }

  // Back to social login
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      showSocialLogin();
    });
  }

  // Close modal with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeLoginModal();
    }
  });

  // Handle form submission
  const emailFormElement = document.querySelector("#emailForm");
  if (emailFormElement) {
    emailFormElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handleFormSubmission(this);
    });
  }
}

// Create login modal HTML
function createLoginModal() {
  const modalHTML = `
    <div class="modal-overlay" id="loginModal">
      <div class="modal">
        <div class="modal-header">
          <button class="modal-close" aria-label="Close modal">×</button>
          <h2 class="modal-title">Sign Up</h2>
          <p class="modal-subtitle">Already a member? <a href="#" class="toggle-mode">Log In</a></p>
        </div>
        
        <div class="modal-body">
          <div class="social-login">
            <button class="social-btn google">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
            
            <button class="social-btn facebook">
              <i class="fab fa-facebook-f"></i>
              Sign up with Facebook
            </button>
          </div>
          
          <div class="divider">
            <span>or</span>
          </div>
          
          <div class="email-signup">
            <button class="email-btn">Sign up with email</button>
          </div>

          <div class="email-form" id="emailFormContainer">
            <button class="back-btn">← Back to options</button>
            <form id="emailForm">
              <div class="form-group">
                <input type="email" class="form-input" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="text" class="form-input" placeholder="Full Name" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-input" placeholder="Password" required>
              </div>
              <div class="form-group" id="confirmPasswordGroup">
                <input type="password" class="form-input" placeholder="Confirm Password" required>
              </div>
              <button type="submit" class="submit-btn">Sign Up</button>
            </form>
          </div>
          
          <div class="modal-footer">
            Your profile will be set to public automatically when you sign up. You can change this later in your profile settings.
          </div>
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Open login modal
function openLoginModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Reset to initial state
    showSocialLogin();
    resetLoginMode();
  }
}

// Close login modal
function closeLoginModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Toggle between login and signup modes
function toggleLoginMode() {
  const title = document.querySelector(".modal-title");
  const subtitle = document.querySelector(".modal-subtitle");
  const toggleLink = document.querySelector(".toggle-mode");
  const confirmPasswordGroup = document.querySelector("#confirmPasswordGroup");
  const submitBtn = document.querySelector(".submit-btn");
  const socialBtns = document.querySelectorAll(".social-btn");
  const emailBtn = document.querySelector(".email-btn");

  if (title.textContent === "Sign Up") {
    // Switch to Login mode
    title.textContent = "Log In";
    subtitle.innerHTML = 'New here? <a href="#" class="toggle-mode">Sign Up</a>';
    confirmPasswordGroup.style.display = "none";
    submitBtn.textContent = "Log In";
    socialBtns.forEach(btn => {
      const textNode = btn.lastChild;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = textNode.textContent.replace("Sign up", "Log in");
      }
    });
    emailBtn.textContent = "Log in with email";
  } else {
    // Switch to Sign Up mode
    title.textContent = "Sign Up";
    subtitle.innerHTML = 'Already a member? <a href="#" class="toggle-mode">Log In</a>';
    confirmPasswordGroup.style.display = "block";
    submitBtn.textContent = "Sign Up";
    socialBtns.forEach(btn => {
      const textNode = btn.lastChild;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = textNode.textContent.replace("Log in", "Sign up");
      }
    });
    emailBtn.textContent = "Sign up with email";
  }

  // Re-attach event listener to new toggle link
  const newToggleLink = document.querySelector(".toggle-mode");
  newToggleLink.addEventListener("click", function (e) {
    e.preventDefault();
    toggleLoginMode();
  });
}

// Reset to signup mode
function resetLoginMode() {
  const title = document.querySelector(".modal-title");
  if (title.textContent !== "Sign Up") {
    toggleLoginMode();
  }
}

// Show email form
function showEmailForm() {
  const socialLogin = document.querySelector(".social-login");
  const divider = document.querySelector(".divider");
  const emailSignup = document.querySelector(".email-signup");
  const emailForm = document.querySelector(".email-form");
  const modalFooter = document.querySelector(".modal-footer");

  if (socialLogin) socialLogin.style.display = "none";
  if (divider) divider.style.display = "none";
  if (emailSignup) emailSignup.style.display = "none";
  if (modalFooter) modalFooter.style.display = "none";
  if (emailForm) emailForm.classList.add("active");
}

// Show social login
function showSocialLogin() {
  const socialLogin = document.querySelector(".social-login");
  const divider = document.querySelector(".divider");
  const emailSignup = document.querySelector(".email-signup");
  const emailForm = document.querySelector(".email-form");
  const modalFooter = document.querySelector(".modal-footer");

  if (socialLogin) socialLogin.style.display = "flex";
  if (divider) divider.style.display = "flex";
  if (emailSignup) emailSignup.style.display = "block";
  if (modalFooter) modalFooter.style.display = "block";
  if (emailForm) emailForm.classList.remove("active");
}

// Handle form submission
function handleFormSubmission(form) {
  const formData = new FormData(form);
  const submitBtn = form.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  // Show loading state
  submitBtn.textContent = "Please wait...";
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    alert("Form submitted successfully! (This is a demo)");
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    closeLoginModal();
  }, 2000);
}

// Add slide-in animation CSS
const globalStyle = document.createElement("style");
globalStyle.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(globalStyle);
