// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import StartProject from "./components/StartProject";
import Footer from "./components/Footer";
import SectionDivider from "./components/ui/SectionDivider";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <StartProject />
      </main>

      <Footer />
    </div>
  );
}
