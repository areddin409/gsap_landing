# GSAP Cocktail Landing Page 🍹

A stunning, fully responsive cocktail bar landing page featuring immersive GSAP animations, scroll-triggered effects, and a modern design. Built with React, this project showcases advanced animation techniques and interactive storytelling for a premium cocktail experience.

## ✨ Features

### 🎬 Advanced Animations
- **GSAP SplitText**: Character-by-character and word-by-word text reveals
- **Scroll-Triggered Animations**: Elements animate as they enter the viewport
- **Video Scrubbing**: Background video playback synchronized with scroll position
- **Parallax Effects**: Decorative elements move at different speeds during scroll
- **Mask Reveal Animation**: Cinematic image reveals with scaling and masking effects
- **Staggered Grid Animations**: Sequential image grid reveals with perfect timing

### 🎨 Visual Effects
- **Noise Texture Overlays**: Subtle texture effects with opacity controls
- **Gradient Text Effects**: Dynamic text gradients applied via CSS
- **Radial Gradients**: Atmospheric background effects
- **Custom Typography**: Modern Negra and DM Serif fonts for brand personality
- **Interactive Hover States**: Smooth transitions on interactive elements

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Adaptive Animations**: Different animation timings for mobile and desktop
- **Responsive Layouts**: CSS Grid and Flexbox for flexible layouts
- **Touch-Friendly**: Optimized for mobile interaction

### 🧩 Interactive Components
- **Dynamic Cocktail Menu**: Interactive slider with recipe details
- **Animated Navigation**: Scroll-triggered navbar with smooth transitions
- **Image Galleries**: Responsive grid layouts with hover effects
- **Contact Information**: Animated contact section with social links

## 🚀 Tech Stack

- **Frontend**: React 19.1.0
- **Animation**: GSAP 3.13.0 with @gsap/react and SplitText plugin
- **Styling**: Tailwind CSS 4.1.10 with custom utilities
- **Build Tool**: Vite 6.3.5
- **Responsive**: react-responsive for breakpoint detection
- **Linting**: ESLint with custom configuration
- **Formatting**: Prettier for consistent code style

## 🌐 Live Demo

The project is deployed and live on Vercel. Experience the full interactive design and animations in production.

**🚀 [View Live Site](https://gsap-landing-nu.vercel.app/) ✨**

> *Click to explore the immersive cocktail experience with all GSAP animations and scroll effects*

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gsap_landing
```

2. Install dependencies:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
gsap_landing/
├── public/
│   ├── fonts/           # Custom font files
│   ├── images/          # Image assets and graphics
│   └── videos/          # Background video files
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx    # About section with image grid
│   │   ├── Art.jsx      # Mask reveal showcase section
│   │   ├── Cocktails.jsx # Parallax cocktail lists
│   │   ├── Contact.jsx  # Footer with contact info
│   │   ├── Hero.jsx     # Main hero with video background
│   │   ├── Menu.jsx     # Interactive cocktail slider
│   │   └── Navbar.jsx   # Animated navigation
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and utilities
├── constants/
│   └── index.js         # Project constants and data
├── .prettierrc          # Prettier configuration
├── eslint.config.js     # ESLint configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Component Overview

### Hero Section
- **Main Title Animation**: Character-by-character reveal with gradient effects
- **Video Background**: Scroll-synchronized video scrubbing
- **Parallax Leaves**: Decorative elements with depth effects
- **Responsive Content**: Adaptive layout for mobile and desktop

### Cocktails Section
- **Parallax Lists**: Popular and loved cocktails with smooth parallax
- **Scroll Animations**: Lists animate independently as they enter view
- **Decorative Elements**: Animated leaf graphics

### About Section
- **Text Splitting**: Word-by-word title animation
- **Image Grid**: Responsive grid with staggered reveal animations
- **Social Proof**: Customer ratings and testimonials

### Art Section
- **Mask Animation**: Cinematic reveal of cocktail imagery
- **Three-Phase Timeline**: Fade out → Scale/Reveal → Fade in
- **Feature Lists**: Dynamic content from constants

### Menu Section
- **Interactive Slider**: Navigate through cocktail recipes
- **Dynamic Content**: Recipe details and ingredients
- **Smooth Transitions**: GSAP-powered slide animations

### Contact Section
- **Text Animations**: Word-by-word reveals with SplitText
- **Business Information**: Hours, location, and contact details
- **Social Links**: Animated social media navigation

## 🎯 Key Features

### Animation System
- **GSAP ScrollTrigger**: Advanced scroll-based animations
- **Custom Timelines**: Coordinated animation sequences
- **Performance Optimized**: Smooth 60fps animations
- **Mobile Responsive**: Adapted animations for touch devices

### Design System
- **Custom Utilities**: Tailwind CSS extensions for common patterns
- **Typography Scale**: Consistent font sizing and spacing
- **Color Palette**: Carefully chosen colors for cocktail theme
- **Interactive States**: Hover effects and transitions

### Accessibility
- **ARIA Labels**: Screen reader support for interactive elements
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive image alternatives
- **Keyboard Navigation**: Accessible navigation patterns

## 🔧 Development Notes

### GSAP Integration
- Uses `@gsap/react` hooks for React integration
- SplitText plugin for advanced text animations
- ScrollTrigger for scroll-based effects
- Custom easing and timing for brand personality

### Performance Optimizations
- Lazy loading for images and video
- Optimized animation performance
- Minimal bundle size with tree shaking
- Efficient re-renders with React hooks

## 📄 License

This project is private and proprietary. All rights reserved.
