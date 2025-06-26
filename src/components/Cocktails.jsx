/**
 * @fileoverview Cocktails section component with GSAP parallax animations
 * Features dual lists of cocktails and mocktails with decorative leaf animations
 */

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js';

/**
 * Cocktails Component
 *
 * A showcase section featuring:
 * - Dual column layout for cocktails and mocktails
 * - Parallax leaf animations triggered by scroll
 * - Dynamic data rendering from external constants
 * - Responsive design with mobile-friendly layouts
 * - Decorative elements that enhance visual appeal
 * - Smooth scroll-triggered animation effects
 *
 * @component
 * @returns {JSX.Element} The rendered cocktails section with animated decorations
 *
 *
 * @requires gsap - For parallax animations and ScrollTrigger
 * @requires ../../constants - For cocktailLists and mockTailLists data
 */
const Cocktails = () => {
  /**
   * GSAP Parallax Animation Setup
   *
   * Creates scroll-triggered parallax effects for decorative leaf elements.
   * Both leaves animate from off-screen positions to create a dynamic
   * entrance effect as the user scrolls through the cocktails section.
   */
  useGSAP(() => {
    // Create timeline with scroll-triggered parallax animation
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails', // Element that triggers the animation
        start: 'top 30%', // Start when section top hits 30% of viewport
        end: 'bottom 80%', // End when section bottom hits 80% of viewport
        scrub: true, // Smooth animation tied to scroll position
      },
    });

    // Animate decorative leaves with parallax effect
    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100, // Start 100px to the left
        y: 100, // Start 100px below final position
      })
      .from('#c-right-leaf', {
        x: 100, // Start 100px to the right
        y: 100, // Start 100px below final position
      });
  });

  return (
    <section id="cocktails" className="noisy">
      {/* Decorative Elements for Parallax Animation */}
      <img
        src="/images/cocktail-left-leaf.png"
        alt="Decorative left leaf element"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="Decorative right leaf element"
        id="c-right-leaf"
      />

      {/* Main Content Container */}
      <div className="list">
        {/* Popular Cocktails Section */}
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Loved Mocktails Section */}
        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
