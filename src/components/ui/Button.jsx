// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  href, 
  type = 'button', 
  disabled = false, 
  loading = false, 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-sand text-text-inverse hover:bg-gold",
    secondary: "bg-transparent border border-sand text-sand hover:bg-sand/10",
    ghost: "bg-transparent text-text-primary hover:text-gold"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;
export { Button };
