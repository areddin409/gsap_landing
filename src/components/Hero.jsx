/**
 * @fileoverview Hero section component with advanced GSAP animations and responsive video integration
 * Features text splitting animations, parallax effects, scroll-triggered video playback, and responsive design
 */

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * Hero Component
 *
 * The main hero section of the landing page featuring:
 * - Character-by-character text animation using GSAP SplitText
 * - Line-by-line subtitle reveal animations
 * - Parallax scrolling effects for decorative elements
 * - Responsive scroll-triggered video playback with pinning
 * - Mobile-first responsive design with different scroll behaviors
 * - Gradient text effects and smooth easing transitions
 *
 * @component
 * @returns {JSX.Element} The rendered hero section with video background
 *
 * @requires gsap - For animations and ScrollTrigger
 * @requires gsap/SplitText - For text splitting animations (GSAP Club plugin)
 * @requires react-responsive - For responsive breakpoint detection
 */
const Hero = () => {
  /**
   * Video element reference for controlling playback through GSAP animations
   * @type {React.RefObject<HTMLVideoElement>}
   */
  const videoRef = useRef();

  /**
   * Responsive breakpoint detection for mobile devices
   * Used to adjust animation parameters and scroll behaviors
   * @type {boolean} - true if viewport width is 767px or less
   */
  const isMobile = useMediaQuery({ maxWidth: 767 });

  /**
   * GSAP Animation Setup
   *
   * Implements multiple animation sequences:
   * 1. Text splitting and character animation for the main title
   * 2. Line-by-line reveal for subtitle text
   * 3. Parallax scroll effects for decorative leaf and arrow elements
   * 4. Responsive scroll-triggered video playback with timeline scrubbing
   */
  useGSAP(() => {
    // Split main title into individual characters and words for granular animation
    const heroSplit = new SplitText('.title', {
      type: 'chars, words',
    });

    // Split subtitle into lines for sequential reveal animation
    const paragraphSplit = new SplitText('.subtitle', {
      type: 'lines',
    });

    // Apply gradient text effect to each character before animation starts
    heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

    // Animate title characters from bottom with staggered timing
    gsap.from(heroSplit.chars, {
      yPercent: 100, // Start 100% below their final position
      duration: 1.8, // Animation duration in seconds
      ease: 'expo.out', // Exponential easing for smooth deceleration
      stagger: 0.06, // 0.06s delay between each character animation
    });

    // Animate subtitle lines with fade-in and slide-up effect
    gsap.from(paragraphSplit.lines, {
      opacity: 0, // Start completely transparent
      yPercent: 100, // Start 100% below their final position
      duration: 1.8, // Match title animation duration
      ease: 'expo.out', // Consistent easing with title
      stagger: 0.06, // Stagger each line reveal
      delay: 1, // Wait 1 second before starting subtitle animation
    });

    // Create parallax scroll animation for decorative elements
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero', // Element that triggers the animation
          start: 'top top', // Start when hero top hits viewport top
          end: 'bottom top', // End when hero bottom hits viewport top
          scrub: true, // Smooth animation tied to scroll position
        },
      })
      .to('.right-leaf', { y: 200 }, 0) // Move right leaf down 200px
      .to('.left-leaf', { y: -200 }, 0) // Move left leaf up 200px
      .to('.arrow', { y: 100 }, 0); // Move arrow down 100px (all start simultaneously)

    // Responsive scroll trigger values for video animation
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Create scroll-triggered video timeline with responsive parameters
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video', // Video element triggers the animation
        start: startValue, // Responsive start position
        end: endValue, // Responsive end position
        scrub: true, // Scrub video playback to scroll position
        pin: true, // Pin video element during scroll
      },
    });

    // Set up video timeline animation when metadata is loaded
    videoRef.current.onloadedmetadata = () => {
      // Animate video currentTime from 0 to full duration based on scroll
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []); // Empty dependency array ensures animation runs once on mount
  return (
    <>
      {/* Main Hero Section */}
      <section id="hero" className="noisy">
        {/* Main Hero Title - animated with SplitText */}
        <h1 className="title">MOJITO</h1>

        {/* Decorative Elements for Parallax Effects */}
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
          {/* Commented out arrow element - kept for potential future use */}
          <img src="/images/arrow.png" alt="arrow" className="arrow" />

          <div className="content">
            {/* Desktop-only tagline section - hidden on mobile */}
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
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-triggered Video Section */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted // Muted for autoplay compliance
          playsInline // Ensures inline playback on mobile
          preload="auto" // Preload video for smooth scrubbing
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
