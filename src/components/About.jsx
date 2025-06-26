import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

/**
 * About Component
 * 
 * A comprehensive section showcasing the bar's philosophy and craftsmanship
 * through animated text reveals and a responsive image grid layout.
 * 
 * Features:
 * - GSAP SplitText animation for word-by-word title reveal
 * - Scroll-triggered animations for title and image grid
 * - Responsive grid layout with animated image reveals
 * - Customer rating display with social proof
 * - Detailed brand messaging about cocktail craftsmanship
 * - Decorative noisy texture overlays on images
 * 
 * Animation Sequence:
 * 1. Title words animate in with staggered timing
 * 2. Image grid elements fade in with sequential stagger
 * 3. All animations triggered when section enters viewport
 * 
 * Dependencies:
 * - gsap: Core animation library with ScrollTrigger
 * - gsap/SplitText: Text splitting plugin for word-level animation
 * - @gsap/react: React hooks for GSAP integration
 * 
 * @returns {JSX.Element} The about section with animated content and image grid
 */
const About = () => {
  useGSAP(() => {
    // Split the main title into individual words for staggered animation
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    });

    // Create scroll-triggered timeline for coordinated animations
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center', // Start when section top hits viewport center
      },
    });

    // Sequence animations for smooth visual flow
    scrollTimeline
      // Animate title words with upward slide and fade-in effect
      .from(titleSplit.words, {
        opacity: 0,        // Start completely transparent
        duration: 1,       // 1 second animation duration
        yPercent: 100,     // Start 100% below final position
        ease: 'expo.out',  // Smooth exponential easing
        stagger: 0.02,     // 0.02s delay between each word
      })
      // Animate image grid elements with staggered fade-in
      .from(
        '.top-grid div, .bottom-grid div', // Target all grid items
        {
          opacity: 0,             // Start transparent
          duration: 1,            // 1 second duration
          ease: 'power1.inOut',   // Smooth power easing
          stagger: 0.04,          // 0.04s delay between each grid item
        },
        '-=0.5' // Start 0.5s before previous animation completes
      );
  });

  return (
    <div id="about">
      {/* Main content section with responsive padding */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          {/* Primary content area with title and brand messaging */}
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          {/* Secondary content with description and social proof */}
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            {/* Customer rating and social proof display */}
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top row of image grid - responsive 3-6-3 layout */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="Bar interior showcasing elegant atmosphere" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="Master bartender crafting signature cocktail" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="Premium ingredients and garnish preparation" />
        </div>
      </div>

      {/* Bottom row of image grid - responsive 8-4 layout */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="Artfully presented cocktails on bar counter" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="Close-up of cocktail garnish and presentation details" />
        </div>
      </div>
    </div>
  );
};
export default About;
