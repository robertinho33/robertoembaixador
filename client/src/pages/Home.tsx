import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  const handleCTA = (action: string) => {
    if (action === "primary") {
      toast.success("Redirecionando para produtos...");
    } else {
      toast.info("Saiba mais sobre nossa história");
    }
  };

  const handleCtaClick = () => {
    toast.success("Iniciando sua transformação!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={handleNavigation} />
      <main className="flex-1 pt-16">
        <Hero onCtaClick={handleCTA} />
        <About />
        <Products />
        <CTA onCtaClick={handleCtaClick} />
      </main>
      <Footer />
    </div>
  );
}
