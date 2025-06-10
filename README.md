# RenAcquire Investment Banking Website

Clone of a professional investment banking website for RenAcquire Limited, featuring modern design, responsive layout, and comprehensive service showcases.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Pages Overview](#pages-overview)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🏦 About

RenAcquire Limited is a leading advisory and investment banking firm committed to fostering economic growth and financial empowerment. This website showcases the company's services including:

- **Wealth Management** - Personalized services for High Net-Worth Individuals
- **Transaction Structuring** - Complex corporate transaction execution
- **Lending Solutions** - Tailored financing for public sector entities
- **Cutting-edge Advisory** - Strategic advisory solutions for businesses

## ✨ Features

- **Responsive Design** - Mobile-first approach with hamburger navigation
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Chat functionality, modals, and smooth scrolling
- **Multi-page Architecture** - Comprehensive coverage of company information
- **Professional Branding** - Consistent color scheme and typography
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠 Technologies Used

- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Font Awesome** - Professional icons and visual elements
- **Google Fonts** - Inter & Playfair Display typography
- **Flag Icon CSS** - International flag representations

## 📁 Project Structure

```
RenAcquire_LagoSmart/
├── 📄 README.md              # Project documentation
├── 📄 index.html             # Main homepage (GitHub Pages entry point)
├── 🖼️ image/                  # Images and assets
│   ├── favicon.ico
│   └── logo.png
├── 📱 webpages/               # Additional HTML pages
│   ├── about-us.html         # Company information
│   ├── services.html         # Service offerings
│   ├── industries.html       # Industry focus
│   ├── careers.html          # Career opportunities
│   ├── contact.html          # Contact information
│   └── events.html           # Company events
├── 🎨 styles/                 # CSS stylesheets
│   ├── global.css            # Global styles and variables
│   ├── about-us.css          # About page styles
│   ├── careers.css           # Careers page styles
│   ├── contact.css           # Contact page styles
│   ├── events.css            # Events page styles
│   ├── industries.css        # Industries page styles
│   └── service.css           # Services page styles
├── ⚡ javascript/             # JavaScript functionality
│   ├── global.js             # Core navigation and interactions
│   ├── about-us.js           # About page functionality
│   ├── careers.js            # Careers page features
│   ├── contact.js            # Contact form handling
│   ├── events.js             # Events page functionality
│   ├── industries.js         # Industries page features
│   └── service.js            # Services page interactions
└── 📸 screenshots/           # Page screenshots
    ├── about-us.png
    ├── career.png
    ├── footer.png
    ├── home.jpg
    ├── industries.png
    ├── login.png
    └── services.png
```

## 🚀 Installation & Setup

### Prerequisites

- A modern web browser connected to the internet (Chrome, Firefox, Safari, Edge)
- A local web server (recommended for proper functionality)

### Setup Instructions

1. **Clone or Download the Project**

   ```bash
   git clone https://github.com/aisaac498/Renacquire-Clone.git
   cd Renacquire-Clone
   ```

2. **Start a Local Server**

   **Option A: Using VS Code Live Server Extension**

   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

   **Option B: Using Python (if installed)**

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option C: Using Node.js (if installed)**

   ```bash
   npx http-server
   ```

3. **Access the Website**
   - Open your browser and navigate to:
   - **Main Page**: `http://localhost:8000/index.html` (or just `http://localhost:8000/`)
   - Or use the port number shown by your chosen server
   - **GitHub Pages**: https://aisaac498.github.io/Renacquire-Clone/

## 📖 Usage

### Running Locally or via GitHub Pages

The website can be accessed in multiple ways:

**Local Development:**
1. **Set `index.html` as your starting page**
2. **Navigate through the site using the navigation menu**
3. **Test responsive design by resizing the browser window**

**GitHub Pages (Live Site):**
- Visit: https://aisaac498.github.io/Renacquire-Clone/
- Automatically serves `index.html` as the homepage

### Key Navigation Points

- **Home** (`index.html`) - Main landing page with company overview
- **About Us** (`webpages/about-us.html`) - Company mission, vision, and leadership
- **Services** (`webpages/services.html`) - Detailed service offerings
- **Industries** (`webpages/industries.html`) - Industry expertise and focus areas
- **Careers** (`webpages/careers.html`) - Job opportunities and company culture
- **Contact** (`webpages/contact.html`) - Contact information and forms
- **Events** (`webpages/events.html`) - Company events and announcements

## 📄 Pages Overview

### 🏠 Home Page (`index.html`)

- **Hero Section** - Main value proposition and call-to-action
- **About Section** - Company overview and mission statement
- **Services Grid** - Core service offerings with detailed descriptions
- **Wealth Management** - Dedicated section for investment services
- **News Section** - Latest company news and market insights
- **Interactive Elements** - Chat button and smooth navigation

### ℹ️ About Us Page (`about-us.html`)

- **Company Mission & Vision** - Core values and objectives
- **Leadership Message** - Message from Managing Director Funke Okoya
- **Team Overview** - Professional expertise and experience
- **Company Approach** - Strategic methodology and client focus

### 🔧 Services Page (`services.html`)

- **Comprehensive Service Portfolio** - Detailed service descriptions
- **Investment Benefits** - Why choose RenAcquire for investments
- **Professional Guidance** - Expert advisory capabilities
- **Client-Focused Solutions** - Personalized service approach

### 💼 Careers Page (`careers.html`)

- **Company Culture** - Work environment and values
- **Career Opportunities** - Current and future job openings
- **Employee Benefits** - Professional development and growth
- **Investment Portfolio Showcase** - Current and past investments

## 🖼️ Screenshots

The project includes screenshots of key pages in the `screenshots/` directory:

- `home.jpg` - Homepage layout and design
- `about-us.png` - About us page structure
- `services.png` - Services page showcase
- `career.png` - Careers page layout
- `industries.png` - Industries page design
- `login.png` - Login modal interface
- `footer.png` - Footer design and links

## 🎨 Design System

### Color Palette

- **Primary**: `#004952` (Dark Teal) - Headers and primary elements
- **Secondary**: `#03444a` (Medium Teal) - Secondary text
- **Accent**: `#00973a` (Green) - Call-to-action buttons
- **Text**: `#333` (Dark Gray) - Main content
- **Light**: `#605e5e` (Medium Gray) - Muted text

### Typography

- **Headers**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-serif)
- **Icons**: Font Awesome 6.0

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 GitHub Pages Deployment

This website is deployed using GitHub Pages and is accessible at:
**https://aisaac498.github.io/Renacquire-Clone/**

### How GitHub Pages is Set Up

1. **Repository Structure**: The `index.html` file in the root directory serves as the homepage
2. **Automatic Deployment**: GitHub Pages automatically builds and deploys from the `master` branch
3. **Custom Domain**: Can be configured in repository settings if needed
4. **SSL**: Automatically provided by GitHub Pages

### To Enable GitHub Pages for Your Fork

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Select "Deploy from a branch"
4. Choose "master" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be available at `https://[username].github.io/[repository-name]/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 Development Notes

- The project uses semantic HTML5 for better accessibility
- CSS custom properties ensure consistent theming
- JavaScript modules provide modular functionality
- All images are optimized for web performance
- The site follows modern web development best practices
