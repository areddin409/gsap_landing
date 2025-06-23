/**
 * @fileoverview Hero section component with advanced GSAP animations
 * Features text splitting animations, parallax effects, and scroll-triggered interactions
 */

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

/**
 * Hero Component
 * 
 * The main hero section of the landing page featuring:
 * - Character-by-character text animation using GSAP SplitText
 * - Line-by-line subtitle reveal animations
 * - Parallax scrolling effects for decorative elements
 * - Responsive design with mobile/desktop content variations
 * - Gradient text effects and smooth easing transitions
 * 
 * @component
 * @returns {JSX.Element} The rendered hero section
 * 
 * @example
 * ```jsx
 * import Hero from './components/Hero';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <Hero />
 *       // ... rest of app
 *     </div>
 *   );
 * }
 * ```
 * 
 * @requires gsap - For animations and ScrollTrigger
 * @requires gsap/SplitText - For text splitting animations (GSAP Club plugin)
 */
const Hero = () => {
  /**
   * GSAP Animation Setup
   * 
   * Implements multiple animation sequences:
   * 1. Text splitting and character animation for the main title
   * 2. Line-by-line reveal for subtitle text
   * 3. Parallax scroll effects for decorative leaf elements
   */
  useGSAP(() => {
    // Split main title into individual characters and words for granular animation
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    
    // Split subtitle into lines for sequential reveal animation
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    // Apply gradient text effect to each character
    heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

    // Animate title characters from bottom with staggered timing
    gsap.from(heroSplit.chars, {
      yPercent: 100,        // Start 100% below their final position
      duration: 1.8,        // Animation duration in seconds
      ease: 'expo.out',     // Exponential easing for smooth deceleration
      stagger: 0.06,        // 0.06s delay between each character animation
    });

    // Animate subtitle lines with fade-in and slide-up effect
    gsap.from(paragraphSplit.lines, {
      opacity: 0,           // Start completely transparent
      yPercent: 100,        // Start 100% below their final position
      duration: 1.8,        // Match title animation duration
      ease: 'expo.out',     // Consistent easing with title
      stagger: 0.06,        // Stagger each line reveal
      delay: 1,             // Wait 1 second before starting (note: typo in original "dealy")
    });

    // Create parallax scroll animation for decorative elements
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',     // Element that triggers the animation
          start: 'top top',     // Start when hero top hits viewport top
          end: 'bottom top',    // End when hero bottom hits viewport top
          scrub: true,          // Smooth animation tied to scroll position
        },
      })
      .to('.right-leaf', { y: 200 }, 0)   // Move right leaf down 200px
      .to('.left-leaf', { y: -200 }, 0);  // Move left leaf up 200px (both start at same time)
  }, []); // Empty dependency array ensures animation runs once on mount

  return (
    <>
      <section id="hero" className="noisy">
        {/* Main Hero Title */}
        <h1 className="title">MOJITO</h1>
        
        {/* Decorative Elements for Parallax Effect */}
        <img
          src="/images/hero-left-leaf.png"
          alt="Decorative left leaf element"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="Decorative right leaf element" 
          className="right-leaf"
        />

        {/* Main Content Container */}
        <div className="body">
          <div className="content">
            {/* Desktop-only tagline section */}
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            {/* Call-to-action section with description */}
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
