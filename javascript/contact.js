// Contact Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form functionality
    initContactForm();
    initCountryDropdown();
    initScrollAnimations();
});

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const fullName = contactForm.querySelector('input[placeholder="Full name"]').value;
            const email = contactForm.querySelector('input[placeholder="Email"]').value;
            const phone = contactForm.querySelector('input[placeholder="Phone"]').value;
            const companyName = contactForm.querySelector('input[placeholder="Company name"]').value;
            const position = contactForm.querySelector('input[placeholder="Position"]').value;
            
            // Basic validation
            if (!fullName || !email) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            submitContactForm({
                fullName,
                email,
                phone,
                companyName,
                position
            });
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handler
function submitContactForm(data) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        document.querySelector('.contact-form').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showMessage('Thank you for contacting us! We will get back to you soon.', 'success');
        
        console.log('Contact form submitted:', data);
    }, 1500);
}

// Country data with comprehensive international list
const COUNTRIES = [
    { name: 'United States', code: '+1', flag: 'us' },
    { name: 'Canada', code: '+1', flag: 'ca' },
    { name: 'United Kingdom', code: '+44', flag: 'gb' },
    { name: 'Germany', code: '+49', flag: 'de' },
    { name: 'France', code: '+33', flag: 'fr' },
    { name: 'Italy', code: '+39', flag: 'it' },
    { name: 'Spain', code: '+34', flag: 'es' },
    { name: 'Netherlands', code: '+31', flag: 'nl' },
    { name: 'Belgium', code: '+32', flag: 'be' },
    { name: 'Switzerland', code: '+41', flag: 'ch' },
    { name: 'Austria', code: '+43', flag: 'at' },
    { name: 'Sweden', code: '+46', flag: 'se' },
    { name: 'Norway', code: '+47', flag: 'no' },
    { name: 'Denmark', code: '+45', flag: 'dk' },
    { name: 'Finland', code: '+358', flag: 'fi' },
    { name: 'Poland', code: '+48', flag: 'pl' },
    { name: 'Czech Republic', code: '+420', flag: 'cz' },
    { name: 'Hungary', code: '+36', flag: 'hu' },
    { name: 'Slovakia', code: '+421', flag: 'sk' },
    { name: 'Slovenia', code: '+386', flag: 'si' },
    { name: 'Croatia', code: '+385', flag: 'hr' },
    { name: 'Romania', code: '+40', flag: 'ro' },
    { name: 'Bulgaria', code: '+359', flag: 'bg' },
    { name: 'Greece', code: '+30', flag: 'gr' },
    { name: 'Portugal', code: '+351', flag: 'pt' },
    { name: 'Ireland', code: '+353', flag: 'ie' },
    { name: 'Luxembourg', code: '+352', flag: 'lu' },
    { name: 'Iceland', code: '+354', flag: 'is' },
    { name: 'Russia', code: '+7', flag: 'ru' },
    { name: 'Ukraine', code: '+380', flag: 'ua' },
    { name: 'Belarus', code: '+375', flag: 'by' },
    { name: 'Lithuania', code: '+370', flag: 'lt' },
    { name: 'Latvia', code: '+371', flag: 'lv' },
    { name: 'Estonia', code: '+372', flag: 'ee' },
    { name: 'China', code: '+86', flag: 'cn' },
    { name: 'Japan', code: '+81', flag: 'jp' },
    { name: 'South Korea', code: '+82', flag: 'kr' },
    { name: 'India', code: '+91', flag: 'in' },
    { name: 'Australia', code: '+61', flag: 'au' },
    { name: 'New Zealand', code: '+64', flag: 'nz' },
    { name: 'Singapore', code: '+65', flag: 'sg' },
    { name: 'Malaysia', code: '+60', flag: 'my' },
    { name: 'Thailand', code: '+66', flag: 'th' },
    { name: 'Indonesia', code: '+62', flag: 'id' },
    { name: 'Philippines', code: '+63', flag: 'ph' },
    { name: 'Vietnam', code: '+84', flag: 'vn' },
    { name: 'Hong Kong', code: '+852', flag: 'hk' },
    { name: 'Taiwan', code: '+886', flag: 'tw' },
    { name: 'Brazil', code: '+55', flag: 'br' },
    { name: 'Mexico', code: '+52', flag: 'mx' },
    { name: 'Argentina', code: '+54', flag: 'ar' },
    { name: 'Chile', code: '+56', flag: 'cl' },
    { name: 'Colombia', code: '+57', flag: 'co' },
    { name: 'Peru', code: '+51', flag: 'pe' },
    { name: 'Venezuela', code: '+58', flag: 've' },
    { name: 'Uruguay', code: '+598', flag: 'uy' },
    { name: 'Paraguay', code: '+595', flag: 'py' },
    { name: 'Bolivia', code: '+591', flag: 'bo' },
    { name: 'Ecuador', code: '+593', flag: 'ec' },
    { name: 'South Africa', code: '+27', flag: 'za' },
    { name: 'Nigeria', code: '+234', flag: 'ng' },
    { name: 'Kenya', code: '+254', flag: 'ke' },
    { name: 'Ghana', code: '+233', flag: 'gh' },
    { name: 'Egypt', code: '+20', flag: 'eg' },
    { name: 'Morocco', code: '+212', flag: 'ma' },
    { name: 'Tunisia', code: '+216', flag: 'tn' },
    { name: 'Algeria', code: '+213', flag: 'dz' },
    { name: 'Israel', code: '+972', flag: 'il' },
    { name: 'Turkey', code: '+90', flag: 'tr' },
    { name: 'Saudi Arabia', code: '+966', flag: 'sa' },
    { name: 'UAE', code: '+971', flag: 'ae' },
    { name: 'Qatar', code: '+974', flag: 'qa' },
    { name: 'Kuwait', code: '+965', flag: 'kw' },
    { name: 'Bahrain', code: '+973', flag: 'bh' },
    { name: 'Oman', code: '+968', flag: 'om' },
    { name: 'Jordan', code: '+962', flag: 'jo' },
    { name: 'Lebanon', code: '+961', flag: 'lb' },
    { name: 'Pakistan', code: '+92', flag: 'pk' },
    { name: 'Bangladesh', code: '+880', flag: 'bd' },
    { name: 'Sri Lanka', code: '+94', flag: 'lk' }
];

// Country dropdown initialization
function initCountryDropdown() {
    const phoneWrapper = document.querySelector('.phone-input-wrapper');
    const countrySelect = document.querySelector('.country-select');
    const countryDropdown = document.querySelector('.country-dropdown');
    const selectedFlag = document.querySelector('.selected-flag');
    const countryList = document.querySelector('.country-list');
    const searchInput = document.querySelector('.country-search');
    
    if (!phoneWrapper || !countrySelect || !countryDropdown || !selectedFlag || !countryList) return;
    
    let filteredCountries = [...COUNTRIES];
    
    // Populate country list with accessibility features
    function renderCountries(countries) {
        countryList.innerHTML = '';
        countries.forEach((country, index) => {
            const option = document.createElement('div');
            option.className = 'country-option';
            option.setAttribute('data-code', country.code);
            option.setAttribute('data-country', country.flag);
            option.setAttribute('tabindex', '0');
            option.setAttribute('role', 'option');
            option.setAttribute('aria-label', `${country.name} ${country.code}`);
            option.innerHTML = `
                <span class="flag-icon flag-icon-${country.flag}" aria-hidden="true"></span>
                <span class="country-name">${country.name}</span>
                <span class="country-code">${country.code}</span>
            `;
            
            option.addEventListener('click', () => selectCountry(country, option));
            countryList.appendChild(option);
        });
    }
    
    // Select country function
    function selectCountry(country, option) {
        // Remove previous selection
        document.querySelectorAll('.country-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        // Update displayed flag and code
        selectedFlag.innerHTML = `
            <span class="flag-icon flag-icon-${country.flag}" aria-hidden="true"></span>
            <span class="country-code">${country.code}</span>
            <i class="fas fa-chevron-down dropdown-arrow" aria-hidden="true"></i>
        `;
        
        // Update accessibility attributes
        selectedFlag.setAttribute('aria-label', `Selected country: ${country.name} ${country.code}`);
        
        // Store selected country for form submission
        phoneWrapper.setAttribute('data-selected-country', JSON.stringify(country));
        
        // Remove auto-detection styling if present
        selectedFlag.classList.remove('auto-detected');
        
        // Close dropdown
        closeDropdown();
        
        // Focus phone input and optionally prepend country code
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            setTimeout(() => {
                phoneInput.focus();
                
                // If phone input is empty or doesn't start with +, add the country code
                if (!phoneInput.value || !phoneInput.value.startsWith('+')) {
                    phoneInput.value = country.code + ' ';
                    // Place cursor after the country code
                    phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
                }
            }, 100);
        }
        
        // Announce selection to screen readers
        announceToScreenReader(`Country selected: ${country.name} ${country.code}`);
    }
    
    // Search functionality with auto-selection
    function filterCountries(searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredCountries = COUNTRIES.filter(country => 
            country.name.toLowerCase().includes(term) || 
            country.code.includes(term)
        );
        renderCountries(filteredCountries);
        
        // Auto-select if exact code match
        if (term.startsWith('+')) {
            const exactMatch = COUNTRIES.find(country => 
                country.code.toLowerCase() === term
            );
            if (exactMatch) {
                autoSelectCountry(exactMatch);
            }
        }
    }
    
    // Auto-select country without closing dropdown
    function autoSelectCountry(country) {
        // Update displayed flag and code
        selectedFlag.innerHTML = `
            <span class="flag-icon flag-icon-${country.flag}" aria-hidden="true"></span>
            <span class="country-code">${country.code}</span>
            <i class="fas fa-chevron-down dropdown-arrow" aria-hidden="true"></i>
        `;
        
        // Update accessibility attributes
        selectedFlag.setAttribute('aria-label', `Selected country: ${country.name} ${country.code}`);
        
        // Highlight the matching option in dropdown
        document.querySelectorAll('.country-option').forEach(opt => opt.classList.remove('selected'));
        const matchingOption = document.querySelector(`[data-code="${country.code}"]`);
        if (matchingOption) {
            matchingOption.classList.add('selected');
        }
        
        // Announce selection to screen readers
        announceToScreenReader(`Country auto-selected: ${country.name} ${country.code}`);
    }
    
    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterCountries(e.target.value);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCountries.length > 0) {
                    const firstOption = countryList.querySelector('.country-option');
                    if (firstOption) firstOption.click();
                }
            }
        });
    }
    
    // Toggle dropdown visibility
    selectedFlag.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        const isOpen = countryDropdown.classList.contains('show');
        
        // Close if open, open if closed
        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });
    
    // Open dropdown function
    function openDropdown() {
        countrySelect.classList.add('active');
        countryDropdown.classList.add('show');
        
        // Set ARIA attributes for accessibility
        selectedFlag.setAttribute('aria-expanded', 'true');
        countryDropdown.setAttribute('aria-hidden', 'false');
        
        renderCountries(COUNTRIES);
        if (searchInput) {
            searchInput.value = '';
            setTimeout(() => searchInput.focus(), 100);
        }
        
        // Prevent page scroll when dropdown is open on mobile
        if (window.innerWidth <= 768) {
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close dropdown function
    function closeDropdown() {
        countrySelect.classList.remove('active');
        countryDropdown.classList.remove('show');
        
        // Set ARIA attributes for accessibility
        selectedFlag.setAttribute('aria-expanded', 'false');
        countryDropdown.setAttribute('aria-hidden', 'true');
        
        // Restore page scroll
        document.body.style.overflow = '';
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!phoneWrapper.contains(e.target)) {
            closeDropdown();
        }
    });
    
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && countryDropdown.classList.contains('show')) {
            e.preventDefault();
            closeDropdown();
            selectedFlag.focus();
        }
        
        // Arrow key navigation within dropdown
        if (countryDropdown.classList.contains('show')) {
            const options = countryList.querySelectorAll('.country-option');
            const currentFocus = document.activeElement;
            let currentIndex = Array.from(options).indexOf(currentFocus);
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                currentIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
                options[currentIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                currentIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                options[currentIndex].focus();
            } else if (e.key === 'Enter' && currentFocus.classList.contains('country-option')) {
                e.preventDefault();
                currentFocus.click();
            }
        }
        
        // Open dropdown with Enter or Space when focused on selector
        if ((e.key === 'Enter' || e.key === ' ') && e.target === selectedFlag) {
            e.preventDefault();
            if (!countryDropdown.classList.contains('show')) {
                openDropdown();
            }
        }
    });
    
    
    // Initialize accessibility attributes
    selectedFlag.setAttribute('role', 'combobox');
    selectedFlag.setAttribute('aria-expanded', 'false');
    selectedFlag.setAttribute('aria-haspopup', 'listbox');
    selectedFlag.setAttribute('tabindex', '0');
    selectedFlag.setAttribute('aria-label', 'Select country code');
    
    countryDropdown.setAttribute('role', 'listbox');
    countryDropdown.setAttribute('aria-hidden', 'true');
    countryList.setAttribute('role', 'presentation');
    
    if (searchInput) {
        searchInput.setAttribute('aria-label', 'Search countries');
        searchInput.setAttribute('placeholder', 'Search countries or codes...');
    }
    
    // Initialize with default countries
    renderCountries(COUNTRIES);
    
    // Add phone input monitoring for country code detection
    initPhoneInputMonitoring();
}

// Monitor phone input for country code typing
function initPhoneInputMonitoring() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;
    
    let debounceTimer;
    
    phoneInput.addEventListener('input', function(e) {
        // Allow only numbers, +, spaces, hyphens, and parentheses
        const allowedChars = /[^+\d\s\-\(\)]/g;
        const cursorPosition = e.target.selectionStart;
        const originalLength = e.target.value.length;
        
        // Remove invalid characters
        e.target.value = e.target.value.replace(allowedChars, '');
        
        // Adjust cursor position if characters were removed
        const newLength = e.target.value.length;
        const removedChars = originalLength - newLength;
        if (removedChars > 0) {
            e.target.setSelectionRange(cursorPosition - removedChars, cursorPosition - removedChars);
        }
        
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            detectCountryCodeInPhone(e.target.value);
        }, 300); // Debounce to avoid excessive calls
    });
    
    phoneInput.addEventListener('keypress', function(e) {
        // Allow: numbers, +, space, hyphen, parentheses, backspace, delete, arrow keys
        const allowedKeyCodes = [
            8,   // backspace
            9,   // tab
            46,  // delete
            37, 38, 39, 40, // arrow keys
            43,  // + 
            32,  // space
            45,  // hyphen -
            40,  // (
            41   // )
        ];
        
        const charCode = e.which || e.keyCode;
        const char = String.fromCharCode(charCode);
        
        // Allow if it's a control key, number, or allowed special character
        if (allowedKeyCodes.includes(charCode) || 
            (charCode >= 48 && charCode <= 57) || // numbers 0-9
            char === '+' || char === ' ' || char === '-' || char === '(' || char === ')') {
            return true;
        }
        
        // Prevent all other characters
        e.preventDefault();
        return false;
    });
    
    phoneInput.addEventListener('paste', function(e) {
        setTimeout(() => {
            // Clean pasted content
            const allowedChars = /[^+\d\s\-\(\)]/g;
            e.target.value = e.target.value.replace(allowedChars, '');
            detectCountryCodeInPhone(e.target.value);
        }, 10); // Small delay to ensure paste is complete
    });
}

// Detect and auto-select country based on phone input
function detectCountryCodeInPhone(phoneValue) {
    if (!phoneValue || !phoneValue.startsWith('+')) return;
    
    // Extract potential country code (up to 4 digits after +)
    const codeMatch = phoneValue.match(/^\+(\d{1,4})/);
    if (!codeMatch) return;
    
    const enteredCode = '+' + codeMatch[1];
    
    // Don't change if this is already the selected country
    const currentSelectedFlag = document.querySelector('.selected-flag .country-code');
    if (currentSelectedFlag && currentSelectedFlag.textContent === enteredCode) return;
    
    // Find matching country codes, prioritizing exact matches
    const exactMatch = COUNTRIES.find(country => country.code === enteredCode);
    const partialMatches = COUNTRIES.filter(country => 
        country.code.startsWith(enteredCode) && country.code !== enteredCode
    );
    
    if (exactMatch) {
        // Exact match found - auto-select this country
        updateSelectedCountry(exactMatch);
        announceToScreenReader(`Country detected: ${exactMatch.name} ${exactMatch.code}`);
    } else if (partialMatches.length === 1 && enteredCode.length >= 2) {
        // Only one partial match and user has typed at least 2 digits - likely the intended country
        updateSelectedCountry(partialMatches[0]);
        announceToScreenReader(`Country detected: ${partialMatches[0].name} ${partialMatches[0].code}`);
    }
    // If multiple partial matches or too short, don't auto-select to avoid confusion
}

// Update selected country without opening dropdown
function updateSelectedCountry(country, isAutoDetected = true) {
    const selectedFlag = document.querySelector('.selected-flag');
    if (!selectedFlag) return;
    
    // Update displayed flag and code
    selectedFlag.innerHTML = `
        <span class="flag-icon flag-icon-${country.flag}" aria-hidden="true"></span>
        <span class="country-code">${country.code}</span>
        <i class="fas fa-chevron-down dropdown-arrow" aria-hidden="true"></i>
    `;
    
    // Add visual feedback for auto-detection
    if (isAutoDetected) {
        selectedFlag.classList.add('auto-detected');
        setTimeout(() => {
            selectedFlag.classList.remove('auto-detected');
        }, 600);
    }
    
    // Update accessibility attributes
    selectedFlag.setAttribute('aria-label', `Selected country: ${country.name} ${country.code}`);
    
    // Store selected country for form submission
    const phoneWrapper = document.querySelector('.phone-input-wrapper');
    if (phoneWrapper) {
        phoneWrapper.setAttribute('data-selected-country', JSON.stringify(country));
    }
}

// Screen reader announcement function
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}


// Scroll animations
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

    // Add animation to elements
    const animatedElements = document.querySelectorAll(`
        .contact-left,
        .contact-right,
        .map-section .container
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        observer.observe(el);
    });
}

// Show message function
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        animation: slideInMessage 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutMessage 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInMessage {
        from { 
            transform: translateX(100%); 
            opacity: 0; 
        }
        to { 
            transform: translateX(0); 
            opacity: 1; 
        }
    }
    
    @keyframes slideOutMessage {
        from { 
            transform: translateX(0); 
            opacity: 1; 
        }
        to { 
            transform: translateX(100%); 
            opacity: 0; 
        }
    }

    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);