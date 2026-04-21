import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <main>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
