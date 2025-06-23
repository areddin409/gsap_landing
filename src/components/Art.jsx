/**
 * @fileoverview Art section component with advanced GSAP masking and scroll animations
 * Features responsive scroll-triggered animations, image masking effects, and dynamic content reveals
 */

import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { featureLists, goodLists } from '../../constants';
import { useGSAP } from '@gsap/react';

/**
 * Art Component
 *
 * An immersive art section featuring:
 * - Responsive scroll-triggered timeline animations
 * - Advanced image masking with scale and position effects
 * - Sequential fade-out animations for feature lists
 * - Pinned section behavior during scroll
 * - Dynamic content reveal with masked image scaling
 * - Mobile-first responsive animation parameters
 * - Feature list displays from external constants
 *
 * @component
 * @returns {JSX.Element} The rendered art section with masked image and feature lists
 *
 *
 * @requires gsap - For animations and ScrollTrigger
 * @requires react-responsive - For responsive breakpoint detection
 * @requires ../../constants - For featureLists and goodLists data
 */
const Art = () => {  /**
   * Responsive breakpoint detection for mobile devices
   * Used to adjust scroll trigger start positions and animation behaviors
   * @type {boolean} - true if viewport width is 767px or less
   */
  const isMobile = useMediaQuery({ maxWidth: 767 });

  /**
   * GSAP Animation Setup
   * 
   * Creates a complex scroll-triggered timeline with three main phases:
   * 1. Fade out feature lists and title with staggered timing
   * 2. Scale and unmask the central cocktail image
   * 3. Reveal the final masked content with fade-in effect
   * 
   * Uses responsive scroll trigger positions and pinning for immersive experience
   */
  useGSAP(() => {
    // Responsive scroll trigger start position
    const start = isMobile ? 'top 20%' : 'top top';

    // Create pinned scroll timeline with scrub animation
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',           // Element that triggers the animation
        start,                     // Responsive start position
        end: 'bottom center',      // End when section bottom hits viewport center
        scrub: 1.5,               // Smooth scrubbing with 1.5s lag for natural feel
        pin: true,                // Pin section during scroll for immersive effect
      },
    });

    // Phase 1: Fade out all feature content with staggered timing
    maskTimeline
      .to('.will-fade', {
        opacity: 0,               // Fade to transparent
        stagger: 0.2,             // 0.2s delay between each element
        ease: 'power1.inOut',     // Smooth power easing
      })
      // Phase 2: Reveal and scale the masked cocktail image
      .to('.masked-img', {
        scale: 1.2,               // Scale up by 20% for dramatic effect
        maskPosition: 'center',   // Center the mask position
        maskSize: '400%',         // Expand mask to 400% to reveal full image
        duration: 1,              // 1 second duration for this phase
        ease: 'power1.inOut',     // Consistent easing
      })
      // Phase 3: Reveal final content with fade-in
      .to('#masked-content', {
        opacity: 1,               // Fade in the final message
        duration: 1,              // 1 second fade duration
        ease: 'power1.inOut',     // Consistent easing throughout
      });
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Main Section Title - fades out during scroll animation */}
        <h2 className="will-fade">The ART</h2>

        {/* Main Content Layout with Feature Lists and Central Image */}
        <div className="content">
          {/* Left Feature List - fades out during scroll */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="Feature checkmark icon" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* Central Masked Cocktail Image - reveals and scales during animation */}
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="Artfully crafted cocktail showcase"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Right Feature List - fades out during scroll */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="Feature checkmark icon" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Reveal Content - appears after mask animation */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          {/* Hidden content that fades in at the end of the timeline */}
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
