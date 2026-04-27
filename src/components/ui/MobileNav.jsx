import React from "react";
import navEl from "../../constants/navEls";

export const MobileNav = ({ isOpen }) => {
  return (
    <nav
      className="fixed top-0 left-0 h-dvh w-full bg-primary flex items-center justify-between z-40 px-15"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <ul className="w-full flex flex-col items-center justify-center gap-2.5">
        {navEl.map((el) => (
          <li key={el.id} className="w-full">
            <button
              className={
                el.id != navEl.length
                  ? "font-light text-4xl text-text border-b border-b-0.5 border-b-border-b w-full py-3"
                  : "w-full px-10 py-4 mt-5 bg-accent uppercase text-sm"
              }
            >
              {el.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
