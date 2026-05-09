// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Button } from "./ui";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface-raised/80 backdrop-blur-md border-b border-border-subtle py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Logo - Far Left */}
          <div className="flex justify-start">
            <a
              href="#hero"
              className="font-serif text-2xl text-sand tracking-wide"
            >
              Restroa
            </a>
          </div>

          {/* Desktop Nav Links - Center */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle - Far Right */}
          <div className="flex justify-end items-center">
            <Button
              href="#start-project"
              size="sm"
              variant="secondary"
              className="hidden md:inline-flex border-gold text-gold hover:bg-gold hover:text-text-inverse"
            >
              Start a Project
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden relative z-50 w-8 h-8 text-text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <span
                  className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[1.5px]" : "-translate-y-1"}`}
                ></span>
                <span
                  className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 translate-y-[-1.5px]" : "translate-y-1"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface-raised/98 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {[
            ...navLinks,
            { name: "Start a Project", href: "#start-project", isCTA: true },
          ].map((link, idx) => {
            if (link.isCTA) {
              return (
                <div
                  key={link.name}
                  className={`transition-all duration-500 transform ${
                    mobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                >
                  <Button
                    href={link.href}
                    variant="secondary"
                    className="text-xl px-12 border-gold text-gold hover:bg-gold hover:text-text-inverse"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Button>
                </div>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-serif text-text-primary text-3xl hover:text-gold transition-all duration-500 transform ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
