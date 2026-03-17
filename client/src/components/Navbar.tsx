import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Produtos", href: "#products" },
    { label: "Contato", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.replace("#", "");
    onNavigate?.(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(31,180,151)] to-[rgb(30,233,155)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">SE</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-[#111]">
              Shine Express
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#333] font-medium hover:text-[rgb(31,180,151)] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#333]" />
            ) : (
              <Menu className="w-6 h-6 text-[#333]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-slide-up">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-[#333] font-medium hover:bg-gray-100 hover:text-[rgb(31,180,151)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
