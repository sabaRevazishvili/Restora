// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-surface-base hero-bloom hero-grain overflow-hidden border-t border-gold/20"
    >
      <div className="container mx-auto px-6 text-center z-10">
        {/* Eyebrow */}
        <div
          className={`text-gold font-sans text-xs uppercase tracking-[0.25em] mb-6 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Elevated Hospitality Consulting
        </div>

        {/* Headline */}
        <h1
          className={`font-serif text-text-primary leading-[1.05] mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
        >
          Mastering the art of
          <br />
          <span className="italic text-sand">exceptional</span> dining.
        </h1>

        {/* Subheadline */}
        <p
          className={`max-w-130 mx-auto text-text-secondary font-sans text-lg mb-12 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We partner with visionary restaurateurs to craft immersive
          experiences, operational excellence, and enduring brand identities.
        </p>

        {/* CTA Group */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-400ms ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button href="#start-project" variant="primary">
            Start a Project
          </Button>
          <Button
            href="#services"
            variant="secondary"
            className="border-sand text-sand"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
