// src/components/ui/Card.jsx
import React from "react";
import {
  Lightbulb,
  LayoutTemplate,
  Workflow,
  ChefHat,
  Waves,
  Wine,
} from "lucide-react";

const iconMap = {
  "Concept Development": Lightbulb,
  "Interior Curation": LayoutTemplate,
  "Operational Precision": Workflow,
  "Culinary Strategy": ChefHat,
  "Brand Resonance": Waves,
  "Beverage Curation": Wine,
};

const Card = ({ children, className = "", service }) => {
  const IconComponent = iconMap[service.title] || HelpCircle;
  
  const baseStyles = "bg-surface-card transition-all duration-300 p-8";
  const borderStyles = "border border-border-subtle hover:border-gold";
  const hoverStyles = "hover:-translate-y-1 hover:shadow-xl";

  const combinedClasses = `${baseStyles} ${borderStyles} ${hoverStyles} ${className}`;

  return (
    <div className={combinedClasses}>
      <div className="absolute top-0 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500" />
      <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 w-8 h-8">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl text-text-primary mb-4">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default Card;
