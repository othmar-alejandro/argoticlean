import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    tl.fromTo(
      '.contact-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        '.contact-info-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.contact-form',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#E8A020]/6 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Contact Info */}
          <div>
            <div className="contact-header mb-12">
              <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">Get in Touch</p>
              <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                Let's start a{' '}
                <span className="text-gradient-argoti">
                  conversation.
                </span>
              </h2>
              <p className="text-xl text-[#6e6e73] font-light max-w-md">
                Have a special request or need a custom quote? Our Miami team is ready to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call Us', detail: '(786) 934-3686', link: 'tel:7869343686', accent: '#E8A020' },
                { icon: Mail, title: 'Email Us', detail: 'info@argoticlean.com', link: 'mailto:info@argoticlean.com', accent: '#1a3a5c' },
                { icon: MapPin, title: 'Service Area', detail: 'Miami, FL & Surrounding Areas', link: '#', accent: '#1a3a5c' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="contact-info-item group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-[#fbfbfd] transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.accent}15` }}
                  >
                    <item.icon size={20} style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h4 className="text-[#1d1d1f] font-semibold mb-0.5">{item.title}</h4>
                    <p className="text-[#6e6e73] text-sm">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.instagram.com/argotisunshineservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#fbfbfd] border border-gray-200 rounded-full text-sm font-medium text-[#1d1d1f] hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
              >
                <Instagram size={16} />
                Follow on Instagram
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#fbfbfd] border border-gray-200 rounded-full flex items-center justify-center text-[#6e6e73] hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8A020]/5 to-[#1a3a5c]/5 rounded-[2.5rem] transform rotate-2 scale-105 -z-10" />
            <div className="bg-white/90 backdrop-blur-xl border border-gray-100 p-10 sm:p-12 rounded-[2.5rem] shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" id="firstName" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="First Name" />
                    <label htmlFor="firstName" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">First Name</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="lastName" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Last Name" />
                    <label htmlFor="lastName" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Last Name</label>
                  </div>
                </div>

                <div className="relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Email Address</label>
                </div>

                <div className="relative group">
                  <input type="tel" id="contactPhone" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                  <label htmlFor="contactPhone" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Phone Number</label>
                </div>

                <div className="relative group">
                  <select id="service" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select a Service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="airbnb">Airbnb Turnover</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="move">Move In/Out</option>
                  </select>
                </div>

                <div className="relative group">
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent resize-none" placeholder="Your Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">How can we help you?</label>
                </div>

                <button className="w-full py-4 bg-[#1a3a5c] text-white font-semibold rounded-full hover:bg-[#E8A020] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
