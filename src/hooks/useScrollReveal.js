// src/hooks/useScrollReveal.js
import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (options.once === false) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold || 0.12,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { elementRef, isVisible };
};
