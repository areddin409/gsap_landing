/**
 * @fileoverview Interactive Menu section component with GSAP animations and cocktail slider
 * Features dynamic cocktail showcase with navigation tabs, arrow controls, and smooth transitions
 */

'use client';

import { allCocktails } from '../../constants/index.js';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * Menu Component
 *
 * An interactive cocktail menu featuring:
 * - Dynamic cocktail slider with tab navigation
 * - GSAP animations for smooth content transitions
 * - Previous/next arrow navigation with cocktail names
 * - Responsive design with decorative leaf elements
 * - Accessibility features including ARIA labels
 * - Real-time content updates based on selected cocktail
 * - Circular navigation (infinite loop) through cocktails
 *
 * @component
 * @returns {JSX.Element} The rendered interactive menu section
 *
 *
 * @requires gsap - For content transition animations
 * @requires react - For state management and refs
 * @requires ../../constants - For allCocktails data array
 */
const Menu = () => {
  /**
   * React Refs and State Management
   */
  const contentRef = useRef(); // Reference to content container for potential animations
  const [currentIndex, setCurrentIndex] = useState(0); // Currently selected cocktail index

  /**
   * GSAP Animation Setup
   *
   * Handles content transitions when cocktail selection changes.
   * Animates multiple elements with coordinated timing for smooth
   * visual transitions between different cocktail information.
   *
   * Dependencies: [currentIndex] - Re-runs animations when cocktail changes
   */
  useGSAP(() => {
    // Animate cocktail title with fade-in effect
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });

    // Animate cocktail image with slide-in from left
    gsap.fromTo(
      '.cocktail img',
      { opacity: 0, xPercent: -100 }, // Start: transparent and 100% left
      {
        xPercent: 0, // End: original position
        opacity: 1, // End: fully visible
        duration: 1, // 1 second transition
        ease: 'power1.inOut', // Smooth easing
      }
    );

    // Animate recipe title with upward slide and fade
    gsap.fromTo(
      '.details h2',
      { yPercent: 100, opacity: 0 }, // Start: below and transparent
      {
        yPercent: 0, // End: original position
        opacity: 100, // End: fully visible
        ease: 'power1.inOut', // Consistent easing
      }
    );

    // Animate recipe description with same upward transition
    gsap.fromTo(
      '.details p',
      { yPercent: 100, opacity: 0 }, // Start: below and transparent
      {
        yPercent: 0, // End: original position
        opacity: 100, // End: fully visible
        ease: 'power1.inOut', // Consistent easing
      }
    );
  }, [currentIndex]); // Re-run animations when currentIndex changes

  /**
   * Navigation Logic and Helper Functions
   */
  const totalCocktails = allCocktails.length; // Total number of available cocktails

  /**
   * Navigate to a specific cocktail by index
   * Implements circular navigation (wraps around at boundaries)
   *
   * @param {number} index - Target cocktail index (can be negative or beyond array length)
   */
  const goToSlide = index => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  /**
   * Get cocktail data at a specific offset from current index
   * Used for displaying previous/next cocktail information
   *
   * @param {number} indexOffset - Offset from current index (-1 for previous, +1 for next)
   * @returns {Object} Cocktail data object
   */
  const getCocktailAt = indexOffset => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  // Get cocktail data for current, previous, and next selections
  const currentCocktail = getCocktailAt(0); // Current cocktail
  const prevCocktail = getCocktailAt(-1); // Previous cocktail
  const nextCocktail = getCocktailAt(1); // Next cocktail

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* Decorative Elements */}
      <img
        src="/images/slider-left-leaf.png"
        alt="Decorative left leaf element"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="Decorative right leaf element"
        id="m-right-leaf"
      />

      {/* Accessibility: Screen reader heading */}
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      {/* Navigation Tabs - Dynamic cocktail selection */}
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`
				${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
			 `}
              onClick={() => goToSlide(index)}
              aria-pressed={isActive}
              aria-label={`Select ${cocktail.name} cocktail`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <div className="content">
        {/* Navigation Arrows with Preview Names */}
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
            aria-label={`Go to previous cocktail: ${prevCocktail.name}`}
          >
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="" aria-hidden="true" />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label={`Go to next cocktail: ${nextCocktail.name}`}
          >
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="" aria-hidden="true" />
          </button>
        </div>

        {/* Current Cocktail Display - Animated on change */}
        <div className="cocktail">
          <img
            src={currentCocktail.image}
            className="object-contain"
            alt={`${currentCocktail.name} cocktail presentation`}
          />
        </div>

        {/* Recipe Information - Animated content */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
