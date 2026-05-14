// src/components/ui/ScrollReveal.jsx
import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = ({
  as: Tag = "div",
  children,
  delay = 0,
  threshold = 0.12,
  once = true,
  className = "",
}) => {
  const { elementRef, isVisible } = useScrollReveal({ threshold, once });

  return (
    <Tag
      ref={elementRef}
      className={`${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
