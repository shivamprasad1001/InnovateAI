import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  animationClass?: string; // e.g., 'animate-fadeInUp'
  delay?: number; // ms
}

export const useScrollAnimation = (options?: ScrollAnimationOptions): [React.RefObject<any>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<any>(null);

  const defaultOptions: ScrollAnimationOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Start animation when 10% of the element is visible
    triggerOnce: true,
    animationClass: 'animate-fadeInUp', // Default animation class
    delay: 0,
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (elementRef.current && defaultOptions.animationClass) {
              elementRef.current.classList.add('animated', ...defaultOptions.animationClass.split(' '));
            }
            if (defaultOptions.triggerOnce) {
              observer.unobserve(entry.target);
            }
          }, defaultOptions.delay);
        } else if (!defaultOptions.triggerOnce && isVisible) {
            // Optionally reset if not triggerOnce, though typically we want to keep it animated
            // setIsVisible(false);
            // if (elementRef.current && defaultOptions.animationClass) {
            //   elementRef.current.classList.remove('animated', ...defaultOptions.animationClass.split(' '));
            // }
        }
      });
    }, defaultOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      if (defaultOptions.animationClass) { // Ensure opacity is 0 initially for animations like fadeInUp
         currentElement.classList.add('animate-on-scroll');
      }
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.root, defaultOptions.rootMargin, defaultOptions.triggerOnce, defaultOptions.animationClass, defaultOptions.delay, isVisible]); // Add isVisible to dependencies if re-observing

  return [elementRef, isVisible];
};
