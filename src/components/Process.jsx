// src/components/Process.jsx
import React from "react";
import { ScrollReveal } from "./ui";
import { processSteps } from "../constants";

const Process = () => {
  return (
    <section
      id="process"
      className="py-16 md:py-28 bg-surface-section overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className={`flex flex-col mb-16 text-center items-center`}>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
              How We Work
            </h2>
            <span className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-4">
              Our Process
            </span>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, idx) => (
              <StepItem key={step.id} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal
      threshold={0.2}
      className="relative flex flex-col md:flex-row items-center"
    >
      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full z-10" />

      {/* Content Area */}
      <div
        className={`w-full md:w-1/2 ${isEven ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24 md:order-last"}`}
      >
        <div
          className={`relative p-8 md:p-0 ${!isEven ? "md:text-left" : "md:text-right"}`}
        >
          {/* Ghost Number */}
          <div
            className={`absolute -top-8 ${isEven ? "right-4" : "left-4"} font-serif text-[6rem] text-gold opacity-[0.12] pointer-events-none select-none`}
          >
            {step.number}
          </div>

          <div className="relative z-10">
            <span className="font-serif text-gold text-xl mb-4 block">
              {step.number}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
              {step.title}
            </h3>
            <p className="text-text-secondary font-sans leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Empty spacer for mobile layout logic */}
      <div className="hidden md:block md:w-1/2" />

      {/* Timeline Accent (Mobile) */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gold/40" />
    </ScrollReveal>
  );
};

export default Process;
