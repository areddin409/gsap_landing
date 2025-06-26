/**
 * @fileoverview Contact/Footer section component with GSAP text animations and decorative effects
 * Features contact information, hours, social links, and animated leaf decorations
 */

import { openingHours, socials } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

/**
 * Contact Component
 *
 * The footer/contact section of the landing page featuring:
 * - Word-by-word title animation using GSAP SplitText
 * - Sequential content reveals with staggered timing
 * - Animated decorative leaf elements
 * - Complete contact information and business details
 * - Dynamic opening hours from external constants
 * - Social media links with accessibility features
 * - Responsive design for all screen sizes
 *
 * @component
 * @returns {JSX.Element} The rendered contact/footer section with animations
 *
 *
 * @requires gsap - For animations and ScrollTrigger
 * @requires gsap/SplitText - For text splitting animations (GSAP Club plugin)
 * @requires ../../constants - For openingHours and socials data
 */
const Contact = () => {
  /**
   * GSAP Animation Setup
   *
   * Implements scroll-triggered animations including:
   * 1. Word-by-word title reveal using SplitText
   * 2. Sequential content animation with staggered timing
   * 3. Decorative leaf animations for visual enhancement
   *
   * All animations are synchronized to create a cohesive entrance effect
   */
  useGSAP(() => {
    // Split main title into individual words for granular animation
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    // Create scroll-triggered timeline for coordinated animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact', // Element that triggers the animation
        start: 'top center', // Start when section top hits viewport center
      },
      ease: 'power1.inOut', // Consistent easing for all animations
    });

    // Sequence animations for smooth visual flow
    timeline
      // Animate title words with upward reveal effect
      .from(titleSplit.words, {
        opacity: 0, // Start completely transparent
        yPercent: 100, // Start 100% below final position
        stagger: 0.02, // 0.02s delay between each word
      })
      // Animate content sections with similar reveal effect
      .from('#contact h3, #contact p', {
        opacity: 0, // Start transparent
        yPercent: 100, // Start below final position
        stagger: 0.02, // Stagger each content element
      })
      // Animate right decorative leaf
      .to('#f-right-leaf', {
        x: '50', // Move out 50px for floating effect
        duration: 1, // 1 second animation duration
        ease: 'power1.inOut', // Smooth easing
      })
      // Animate left leaf simultaneously with right leaf
      .to(
        '#f-left-leaf',
        {
          x: '-50', // Match right leaf movement
          duration: 1, // Same duration for synchronization
          ease: 'power1.inOut', // Consistent easing
        },
        '<' // Start at same time as previous animation
      );
  });

  return (
    <footer id="contact">
      {/* Decorative Elements for Animation */}
      <img
        src="/images/footer-right-leaf.png"
        alt="Decorative right leaf element"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="Decorative left leaf element"
        id="f-left-leaf"
      />

      {/* Main Content Container */}
      <div className="content">
        {/* Main Section Title - animated with SplitText */}
        <h2>Where to Find Us</h2>

        {/* Physical Location Information */}
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@ajrcocktail.com</p>
        </div>

        {/* Business Hours - Dynamic content from constants */}
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(time => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        {/* Social Media Links - Dynamic with accessibility features */}
        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
              >
                <img
                  src={social.icon}
                  alt={`${social.name} social media icon`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Drink Image */}
      <img
        src="/images/footer-drinks.png"
        alt="Decorative cocktail illustration"
        className="drink-img"
      />
    </footer>
  );
};

export default Contact;
