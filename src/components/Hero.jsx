import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * Hero Component
 *
 * The main landing section featuring animated title text, background video,
 * parallax leaf elements, and scroll-triggered animations.
 *
 * Features:
 * - GSAP text animation with SplitText for character-by-character reveal
 * - Scroll-triggered video scrubbing synchronized with scroll position
 * - Parallax leaf animations that move based on scroll
 * - Responsive behavior for mobile and desktop
 * - Gradient text effects applied via CSS classes
 *
 * Dependencies:
 * - @gsap/react: React hooks for GSAP
 * - gsap: Animation library with SplitText plugin
 * - react-responsive: Media query hook for responsive behavior
 *
 * @returns {JSX.Element} The hero section with animated content and video background
 */
const Hero = () => {
  // Video element reference for controlling playback via GSAP
  const videoRef = useRef();

  // Responsive breakpoint detection for mobile-specific animations
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Split title text into individual characters and words for animation
    const heroSplit = new SplitText('.title', {
      type: 'chars, words',
    });

    // Split subtitle text into lines for staggered line-by-line animation
    const paragraphSplit = new SplitText('.subtitle', {
      type: 'lines',
    });

    // Apply gradient CSS class to each character before animating
    // This ensures the gradient effect is visible during the animation
    heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

    // Animate title characters from bottom (yPercent: 100) with stagger
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06, // Delay between each character animation
    });

    // Animate subtitle lines with opacity and slide-up effect
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1, // Start after title animation begins
    });

    // Parallax animation for decorative leaf elements
    // Creates depth by moving elements at different speeds during scroll
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true, // Smooth animation tied to scroll position
        },
      })
      .to('.right-leaf', { y: 200 }, 0) // Move right leaf down
      .to('.left-leaf', { y: -200 }, 0) // Move left leaf up
      .to('.arrow', { y: 100 }, 0); // Move arrow down

    // Responsive scroll trigger values for video animation
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Video scrubbing timeline - advances video playback based on scroll
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true, // Ties animation directly to scroll position
        pin: true, // Pins the video element during animation
      },
    });

    // Set up video timeline once metadata is loaded
    // This ensures we know the video duration before animating
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration, // Scrub from start to end
      });
    };
  }, []);

  return (
    <>
      {/* Main hero section with noisy texture background */}
      <section id="hero" className="noisy">
        {/* Main title - animated with GSAP SplitText */}
        <h1 className="title">MOJITO</h1>

        {/* Decorative leaf images for parallax effect */}
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

        <div className="body">
          {/* Commented out arrow - kept for potential future use */}
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            {/* Desktop-only tagline and subtitle */}
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            {/* Call-to-action section with description and link */}
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails" aria-label="Navigate to cocktails section">
                View cocktails
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Background video container - positioned absolutely behind hero content */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
          aria-label="Background video showing cocktail preparation"
        />
      </div>
    </>
  );
};

export default Hero;
