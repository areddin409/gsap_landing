/**
 * @fileoverview Main application component for GSAP Landing Page
 * Orchestrates all page sections and registers GSAP plugins globally
 */

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

// Register GSAP plugins globally for all components
gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * App Component
 *
 * The root application component that:
 * - Registers GSAP plugins (ScrollTrigger, SplitText) globally
 * - Orchestrates the complete page layout and component hierarchy
 * - Provides the main semantic structure using <main> element
 * - Manages the flow between different page sections
 *
 * Page Structure:
 * 1. Navbar - Fixed navigation with scroll animations
 * 2. Hero - Main landing section with video and text animations
 * 3. Cocktails - Dual-column cocktail/mocktail listings
 * 4. About - Company information with image grids
 * 5. Art - Immersive masked image experience
 * 6. Menu - Interactive cocktail showcase slider
 * 7. Contact - Footer with contact info and social links
 *
 * @component
 * @returns {JSX.Element} The complete application layout
 *
 * @requires gsap - Core animation library
 * @requires gsap/ScrollTrigger - Scroll-triggered animations
 * @requires gsap/SplitText - Text splitting animations (GSAP Club plugin)
 */
const App = () => {
  return (
    <main>
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Hero Section - Main landing with video background */}
      <Hero />

      {/* Cocktails Showcase - Popular drinks and mocktails */}
      <Cocktails />

      {/* About Section - Company story and image gallery */}
      <About />

      {/* Art Section - Immersive masked image experience */}
      <Art />

      {/* Interactive Menu - Cocktail slider with recipes */}
      <Menu />

      {/* Footer/Contact - Business info and social links */}
      <Contact />
    </main>
  );
};

export default App;
