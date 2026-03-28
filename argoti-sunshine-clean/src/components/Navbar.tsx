import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Argoti Sunshine Clean"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#E8A020] after:to-[#1a3a5c] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7869343686"
              className="text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors"
            >
              (786) 934-3686
            </a>
            <a
              href="#booking"
              className="px-5 py-2.5 bg-[#1a3a5c] text-white text-sm font-semibold rounded-full hover:bg-[#E8A020] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1d1d1f] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/97 backdrop-blur-xl border-b border-gray-100 py-5 px-6 flex flex-col space-y-5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-[#1d1d1f] hover:text-[#E8A020] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="w-full text-center px-6 py-3 bg-[#1a3a5c] text-white font-semibold rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
