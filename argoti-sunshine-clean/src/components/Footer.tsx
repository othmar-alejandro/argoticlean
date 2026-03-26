import { Instagram, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="Argoti Sunshine Clean"
              className="h-14 w-auto object-contain mb-5 brightness-[1.1]"
            />
            <p className="text-sm leading-relaxed max-w-xs text-white/50">
              Bringing sunshine and spotless perfection to every home and business in Miami, Florida.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/argotisunshineservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#E8A020] hover:border-[#E8A020] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#E8A020] hover:border-[#E8A020] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Residential Cleaning', 'Deep Cleaning', 'Airbnb Turnover', 'Commercial Cleaning', 'Move In/Out'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-[#E8A020] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '#about-us' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Book Now', href: '#booking' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#E8A020] transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#E8A020] flex-shrink-0" />
                <a href="tel:7869343686" className="hover:text-[#E8A020] transition-colors duration-200">
                  (786) 934-3686
                </a>
              </li>
              <li>
                <a href="mailto:info@argoticlean.com" className="hover:text-[#E8A020] transition-colors duration-200">
                  info@argoticlean.com
                </a>
              </li>
              <li>Miami, FL & Surrounding Areas</li>
            </ul>

            {/* Book CTA */}
            <a
              href="#booking"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#E8A020] text-white text-sm font-bold rounded-full hover:bg-[#d4911a] transition-all duration-300 shadow-lg hover:-translate-y-[1px]"
            >
              Book Now
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Argoti Sunshine Clean. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
          <p className="text-white/30">
            Powered by{' '}
            <a href="#" className="text-[#E8A020]/60 hover:text-[#E8A020] transition-colors">OAC Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
