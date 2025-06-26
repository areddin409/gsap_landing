import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { goodLists, featureLists } from '../../constants/index.js';

/**
 * Art Component
 *
 * An immersive section showcasing cocktail craftsmanship through a cinematic
 * mask reveal animation. Features a dramatic transition from feature lists
 * to a masked image reveal with content overlay.
 *
 * Features:
 * - Scroll-triggered mask animation that reveals a cocktail image
 * - Staggered fade-out of initial content elements
 * - Dynamic image scaling and mask positioning effects
 * - Responsive animation timing for mobile and desktop
 * - Feature lists imported from constants for easy maintenance
 * - Pinned section during animation for enhanced visual impact
 *
 * Animation Sequence:
 * 1. Fade out feature lists and title text
 * 2. Scale and reveal masked cocktail image
 * 3. Fade in final overlay content
 *
 * Dependencies:
 * - gsap: Core animation library with ScrollTrigger
 * - @gsap/react: React hooks for GSAP integration
 * - react-responsive: Media query hook for responsive behavior
 * - ../../constants: Feature lists data
 *
 * @returns {JSX.Element} The art section with mask reveal animation
 */
const Art = () => {
  // Responsive breakpoint detection for mobile-specific scroll triggers
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Responsive scroll trigger start position
    const start = isMobile ? 'top 20%' : 'top top';

    // Main mask reveal timeline with scroll synchronization
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5, // Smooth animation tied to scroll with slight lag
        pin: true, // Pin section during animation for cinematic effect
      },
    });

    // Three-phase animation sequence
    maskTimeline
      // Phase 1: Fade out initial content with stagger
      .to('.will-fade', {
        opacity: 0,
        stagger: 0.2, // Sequential fade for visual flow
        ease: 'power1.inOut',
      })
      // Phase 2: Reveal and scale the masked cocktail image
      .to('.masked-img', {
        scale: 1.3, // Zoom in for dramatic effect
        maskPosition: 'center', // Center the mask reveal
        maskSize: '400%', // Expand mask to reveal full image
        duration: 1,
        ease: 'power1.inOut',
      })
      // Phase 3: Fade in the final overlay content
      .to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Section title - will fade out during animation */}
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          {/* Left feature list - imported from constants */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="Checkmark icon" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* Central cocktail image with mask animation */}
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="Artfully crafted cocktail with garnish"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Right feature list - imported from constants */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="Checkmark icon" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Art;
