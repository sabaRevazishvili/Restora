// src/components/Services.jsx
import React from "react";
import { Card, ScrollReveal } from "./ui";
import { services } from "../constants";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-28 bg-surface-raised">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className={`flex flex-col mb-16 text-center items-center`}>
            <span className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
              A Comprehensive Approach
            </h2>
            <p className="max-w-140 text-text-secondary font-sans">
              We provide end-to-end consulting for the modern restaurateur,
              ensuring every facet of your business is primed for success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 100}>
              <Card
                className="group relative overflow-hidden flex flex-col h-full"
                service={service}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
