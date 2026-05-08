// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  bordered = false, 
  padding = 'md' 
}) => {
  const baseStyles = "bg-surface-card transition-all duration-300";
  
  const borderStyles = bordered ? "border border-border-subtle hover:border-gold" : "";
  const hoverStyles = hover ? "hover:-translate-y-1 hover:shadow-xl" : "";
  
  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-12"
  };

  const combinedClasses = `${baseStyles} ${borderStyles} ${hoverStyles} ${paddings[padding]} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
export { Card };
