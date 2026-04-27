import React, { useState } from "react";
import logo from "../assets/icons/Restora-logo-bg-sm.png";
import { Menu, X } from "lucide-react";
import { MobileNav } from "./ui/MobileNav";
import navEl from "../constants/navEls";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full bg-primary flex flex-row items-center justify-between p-5 z-50 md:px-7 lg:px-15">
        <div className="flex flex-col justify-center items-start">
          <img className="h-8 md:h-10 " src={logo} alt="Restora Logo" />
          <p className="text-tiny md:text-xs text-text">From Chaos to Succes</p>
        </div>
        <ul className="hidden md:flex flex-row items-center justify-center gap-10">
          {navEl.slice(0, -1).map((el) => (
            <li key={el.id}>
              <button className="text-base uppercase text-text lg:text-lg">
                {el.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="hidden md:block px-8 py-3 border border-accent bg-transparent uppercase text-base text-text">
          Start a Project
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {isOpen ? (
            <X className="w-8.5 h-8.5 text-text" />
          ) : (
            <Menu className="w-8.5 h-8.5 text-text" />
          )}
        </button>
      </nav>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
