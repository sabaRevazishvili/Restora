// src/components/ui/ScrollReveal.jsx
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  threshold = 0.12, 
  once = true,
  className = '' 
}) => {
  const { elementRef, isVisible } = useScrollReveal({ threshold, once });

  return (
    <div 
      ref={elementRef}
      className={`${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
export { ScrollReveal };
