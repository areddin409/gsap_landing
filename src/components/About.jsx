/**
 * @fileoverview About section component with GSAP text and grid animations
 * Features word-by-word text reveals and staggered grid image animations
 */

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

/**
 * About Component
 *
 * A comprehensive about section featuring:
 * - Word-by-word title animation using GSAP SplitText
 * - Scroll-triggered timeline animations
 * - Staggered grid image reveals with fade-in effects
 * - Responsive grid layout with different column spans
 * - Company statistics and customer testimonials
 * - Badge highlighting and brand messaging
 *
 * @component
 * @returns {JSX.Element} The rendered about section with animated content
 *
 *
 * @requires gsap - For animations and ScrollTrigger
 * @requires gsap/SplitText - For text splitting animations (GSAP Club plugin)
 */
const About = () => {
  /**
   * GSAP Animation Setup
   *
   * Implements scroll-triggered animations for:
   * 1. Word-by-word title reveal animation using SplitText
   * 2. Staggered grid image animations for visual impact
   *
   * Animation sequence:
   * - Title words animate with exponential easing and stagger
   * - Grid images follow with overlapping timeline for smooth flow
   */
  useGSAP(() => {
    // Split the main title into individual words for granular animation control
    const titleSplit = SplitText.create('#about h2', {
      type: 'words', // Split by words rather than characters for readable flow
    });

    // Create scroll-triggered timeline that starts when section enters viewport
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about', // Element that triggers the animation
        start: 'top center', // Start when section top hits viewport center
        // Note: No 'end' specified, so animation runs once and holds
      },
    });

    // Animate title words with sequential reveal effect
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, // Start completely transparent
        duration: 1, // 1 second per word animation
        yPercent: 100, // Start 100% below final position
        ease: 'expo.out', // Exponential easing for smooth deceleration
        stagger: 0.02, // 0.02s delay between each word
      })
      // Chain grid animation with slight overlap for smooth flow
      .from(
        '.top-grid div, .bottom-grid div', // Target all grid items in both grids
        {
          opacity: 0, // Start transparent
          duration: 1, // 1 second animation duration
          ease: 'power1.inOut', // Smooth power easing
          stagger: 0.04, // 0.04s delay between each grid item
        },
        '-=0.5' // Start 0.5s before previous animation ends
      );
  }, []); // Empty dependency array ensures animation runs once on mount
  return (
    <div id="about">
      {/* Content Header Section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          {/* Main Title and Badge Section */}
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          {/* Statistics and Description Section */}
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the frist muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            {/* Customer Rating and Statistics */}
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

      {/* Top Image Grid - 3 column responsive layout */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt1.png"
              alt="Cocktail preparation detail - muddling ingredients"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy">
            <img
              src="/images/abt2.png"
              alt="Bar atmosphere and cocktail crafting"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt5.png"
              alt="Premium cocktail ingredients and garnishes"
            />
          </div>
        </div>
      </div>

      {/* Bottom Image Grid - 2 column responsive layout */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img
              src="/images/abt3.png"
              alt="Cocktail presentation and final garnish details"
            />
          </div>
        </div>{' '}
        <div className="md:col-span-4">
          <div className="noisy">
            <img
              src="/images/abt4.png"
              alt="Bar tools and cocktail preparation process"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
