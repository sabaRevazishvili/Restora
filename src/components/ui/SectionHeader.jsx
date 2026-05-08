// src/components/ui/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ 
  eyebrow, 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  const alignStyles = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col mb-16 ${alignStyles} ${className}`}>
      {eyebrow && (
        <div className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-[560px] text-text-secondary font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
export { SectionHeader };
