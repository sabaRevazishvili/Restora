// src/components/ui/Button.jsx
import React from "react";
import { Loader2 } from "lucide-react";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-sand text-text-inverse hover:bg-gold",
    secondary: "bg-transparent border border-sand text-sand hover:bg-sand/10",
    ghost: "bg-transparent text-text-primary hover:text-gold",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${combinedClasses} ${loading ? "pointer-events-none opacity-50" : ""}  `}
      >
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
