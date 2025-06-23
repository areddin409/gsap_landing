/**
 * @fileoverview Navigation component with GSAP scroll-triggered animations
 * Implements a responsive navbar that changes appearance on scroll
 */

import gsap from 'gsap';
import { navLinks } from '../../constants';
import { useGSAP } from '@gsap/react';

/**
 * Navbar Component
 *
 * A responsive navigation bar that features:
 * - Scroll-triggered background opacity animation using GSAP
 * - Dynamic navigation links from constants
 * - Logo and brand name display
 * - Smooth transitions with blur effects
 *
 * @component
 * @returns {JSX.Element} The rendered navigation component
 *
 */
const Navbar = () => {
  /**
   * GSAP Animation Setup
   *
   * Creates a scroll-triggered animation that transforms the navbar
   * background from transparent to semi-transparent with blur effect
   * when the navbar bottom reaches the top of the viewport
   */
  useGSAP(() => {
    // Create GSAP timeline with ScrollTrigger configuration
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav', // Element that triggers the animation
        start: 'bottom top', // Animation starts when nav bottom hits viewport top
        // Note: Could add 'end' and 'scrub' for more control
      },
    });

    // Animate navbar background on scroll
    navTween.fromTo(
      'nav', // Target element
      {
        backgroundColor: 'transparent', // Initial state: fully transparent
      },
      {
        backgroundColor: '#00000050', // Final state: 50% opacity black
        backgroundFilter: 'blur(10px)', // Add blur effect for modern glass morphism
        duration: 1, // Animation duration in seconds
        ease: 'power1.inOut', // Smooth easing function
      }
    );
  });

  return (
    <nav>
      <div>
        {/* Brand/Logo Section */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Velvet Pour logo"
            // Consider adding width/height for better performance
          />
          <p>Velvet Pour</p>
        </a>

        {/* Navigation Links */}
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
