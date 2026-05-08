// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { Button, Icon } from './ui';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex flex-col items-center justify-center bg-surface-base hero-bloom hero-grain overflow-hidden border-t border-gold/20"
    >
      <div className="container mx-auto px-6 text-center z-10">
        {/* Eyebrow */}
        <div 
          className={`text-gold font-sans text-xs uppercase tracking-[0.25em] mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Elevated Hospitality Consulting
        </div>

        {/* Headline */}
        <h1 
          className={`font-serif text-text-primary leading-[1.05] mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Mastering the art of<br />
          <span className="italic text-sand">exceptional</span> dining.
        </h1>

        {/* Subheadline */}
        <p 
          className={`max-w-[520px] mx-auto text-text-secondary font-sans text-lg mb-12 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We partner with visionary restaurateurs to craft immersive experiences, 
          operational excellence, and enduring brand identities.
        </p>

        {/* CTA Group */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button href="#start-project" variant="primary">
            Start a Project
          </Button>
          <Button href="#services" variant="secondary" className="border-sand text-sand">
            Our Services
          </Button>
        </div>
      </div>

      {/* Pulsing Scroll Icon */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse-gentle">
        <Icon name="chevron-down" color="var(--color-gold)" size="md" />
      </div>
    </section>
  );
};

export default Hero;
