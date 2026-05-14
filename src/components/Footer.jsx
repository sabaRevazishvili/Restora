// src/components/Footer.jsx
import React from "react";
import { socialLinks } from "../constants/social";

const Footer = () => {
  return (
    <footer className="bg-[#060402] border-t border-border-subtle">
      <div className="container mx-auto px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-secondary text-[10px] uppercase tracking-widest order-2 md:order-1">
          &copy; {new Date().getFullYear()} Restroa Consulting. All Rights
          Reserved.
        </div>

        <div className="flex gap-8 text-text-secondary text-[10px] uppercase tracking-widest order-3 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-gold transition-colors"
              aria-label={link.ariaLabel}
            >
              {link.platform}
            </a>
          ))}
        </div>

        <div className="font-serif text-sand lowercase italic text-lg order-1 md:order-3">
          elevating hospitality.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
