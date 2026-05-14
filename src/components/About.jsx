// src/components/About.jsx
import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { stats } from "../constants/stats";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-surface-section">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-24 items-center">
        {/* Left Column - Content */}
        <ScrollReveal>
          <div className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-6">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary leading-tight mb-8">
            Pioneering the next chapter of culinary storytelling.
          </h2>
          <div className="space-y-6 text-text-secondary font-sans text-lg mb-12">
            <p>
              Restroa was founded on a simple belief: every guest interaction is
              an opportunity for a masterpiece. We blend strategic rigor with
              artistic intuition to help hospitality brands transcend the
              ordinary.
            </p>
            <p>
              From conceptualizing new ventures to revitalizing heritage
              landmarks, our multidisciplinary team provides the clarity and
              execution needed to navigate the complex hospitality landscape.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-border-subtle">
            {stats.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col ${idx !== stats.length - 1 ? "border-r border-border-subtle" : ""}`}
              >
                <span className="font-serif text-3xl md:text-4xl text-gold mb-1">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-text-secondary whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right Column - Decorative Graphic */}
        <ScrollReveal delay={150} className="relative max-w-full">
          <div className="relative aspect-square bg-surface-card border border-gold/30 flex items-center justify-center p-8 md:p-12 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] max-w-full overflow-hidden sm:overflow-visible">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              className="opacity-40 max-w-full"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                stroke="var(--color-gold)"
                strokeWidth="0.5"
                fill="none"
              />
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                stroke="var(--color-gold)"
                strokeWidth="0.5"
                fill="none"
                transform="rotate(45 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                stroke="var(--color-gold)"
                strokeWidth="0.5"
                fill="none"
              />
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="var(--color-gold)"
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                stroke="var(--color-gold)"
                strokeWidth="0.2"
              />
            </svg>

            {/* Accent corners - kept inside or hidden on mobile to avoid overflow */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/60 -translate-x-2 -translate-y-2 sm:-translate-x-4 sm:-translate-y-4" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/60 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
