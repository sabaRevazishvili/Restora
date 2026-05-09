// src/components/Portfolio.jsx
import React from "react";
import { SectionHeader, ScrollReveal } from "./ui";
import { portfolioProjects } from "../constants";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-28 bg-surface-raised overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="Curation of Excellence"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal
      delay={project.delay}
      className="group relative aspect-4/3 bg-surface-card border border-gold/30 cursor-pointer overflow-hidden transition-all duration-750 hover:scale-[1.03] hover:border-gold"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-surface-card to-surface-base" />

      {/* Abstract mesh/texture for visual interest within card */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L100 0"
            stroke="var(--color-gold)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0 80 L80 0"
            stroke="var(--color-gold)"
            strokeWidth="0.2"
            fill="none"
          />
          <path
            d="M20 100 L100 20"
            stroke="var(--color-gold)"
            strokeWidth="0.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/90 to-transparent pt-20">
        <div className="inline-block px-3 py-1 bg-gold text-text-inverse text-[10px] font-sans uppercase tracking-widest mb-3 rounded-sm">
          {project.category}
        </div>
        <h3 className="font-serif text-2xl text-text-primary">
          {project.title}
        </h3>
      </div>
    </ScrollReveal>
  );
};

export default Portfolio;
