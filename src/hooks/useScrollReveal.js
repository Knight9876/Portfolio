import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll reveal animations.
 * @param {React.RefObject} ref - The ref of the element to animate.
 * @param {Object} options - Animation options.
 * @param {Object} from - GSAP from vars.
 * @param {Object} to - GSAP to vars.
 * @param {Object} scrollTriggerOptions - Overrides for ScrollTrigger.
 */
const useScrollReveal = (ref, { 
  from = { opacity: 0, y: 30 }, 
  to = { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, 
  scrollTriggerOptions = {} 
} = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    // Determine if we should animate children (stagger) or the ref itself
    const target = (to.stagger && ref.current.children.length > 0) 
      ? ref.current.children 
      : ref.current;

    const animation = gsap.fromTo(target, from, {
      ...to,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
        ...scrollTriggerOptions
      }
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [ref, from, to, scrollTriggerOptions]);
};

export default useScrollReveal;
