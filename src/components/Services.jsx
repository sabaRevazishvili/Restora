// src/components/Services.jsx
import React from 'react';
import { Card, Icon, SectionHeader, ScrollReveal } from './ui';
import { services } from '../constants';

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-16 md:py-28 bg-surface-raised"
    >
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Our Services"
            title="A Comprehensive Approach"
            subtitle="We provide end-to-end consulting for the modern restaurateur, ensuring every facet of your business is primed for success."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 100}>
              <Card 
                bordered 
                hover 
                className="group relative overflow-hidden flex flex-col h-full"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500" />
                
                <Icon 
                  name={service.title} 
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-serif text-xl text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
