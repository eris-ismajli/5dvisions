import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Eye className="w-8 h-8 text-[#1e3a8a]" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-[#1e3a8a]">5D Vision</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-[#1e3a8a] transition-colors py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[#1e3a8a] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-all text-center"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
