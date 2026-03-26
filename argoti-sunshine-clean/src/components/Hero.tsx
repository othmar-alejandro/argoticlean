import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Leaf, Star } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )
      .fromTo(
        '.hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        '.hero-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.hero-trust',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        '-=0.5'
      )
      .fromTo(
        '.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.hero-image-container',
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        '-=0.6'
      );
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-[#fbfbfd]"
    >
      {/* Subtle mesh bg */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-[#E8A020]/10 to-[#00b4a6]/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#1a3a5c]/8 to-[#0071e3]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Split layout: left content / right image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow border border-[#E8A020]/30 text-xs font-semibold text-[#1a3a5c] uppercase tracking-widest mb-7 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] animate-pulse" />
              Miami's Trusted Cleaning Standard
            </div>

            {/* Title */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-[64px] font-bold text-[#1d1d1f] leading-[1.08] tracking-tight mb-6">
              Bring Shine<br />
              & Comfort<br />
              to Every{' '}
              <span className="shimmer-gold">Space.</span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-lg md:text-xl text-[#6e6e73] mb-8 leading-relaxed font-light max-w-[480px]">
              We do not just clean, we restore your peace of mind. Trusted by 523+ Miami families and businesses with eco-friendly products and meticulous care.
            </p>



            {/* Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1a3a5c] text-white text-base font-semibold rounded-full hover:bg-[#E8A020] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Book Your Cleaning
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:7869343686"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border-2 border-[#1a3a5c]/15 text-[#1a3a5c] text-base font-semibold rounded-full hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300 shadow-sm hover:-translate-y-1"
              >
                (786) 934-3686
              </a>
            </div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="hero-image-container relative flex justify-center lg:justify-end mt-16 lg:mt-0 w-full lg:w-[500px] mx-auto lg:mr-0">
            {/* The Arch Background Container */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-t-[12rem] rounded-b-[3rem] overflow-hidden bg-white shadow-2xl border-[10px] border-white z-0 mt-10">
              <img
                src="/images/luxury_miami_condo_bg.png"
                alt="Luxury Miami Home Interior"
                className="w-full h-full object-cover object-center scale-105 opacity-90 blur-[2px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/20 via-transparent to-black/5" />
            </div>

            {/* The cut-out cleaner breaking out of the frame */}
            <div className="absolute bottom-0 left-1/2 -translate-x-[48%] w-[130%] max-w-[580px] z-10 pointer-events-none pb-2">
              <img
                src="/images/hispanic_cleaner_nobg.png"
                alt="Argoti Sunshine Clean Professional"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating stats card — top-left */}
            <div className="absolute top-24 -left-4 md:-left-12 z-20 float-anim" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 flex items-center justify-center">
                  <Star size={18} className="text-[#E8A020]" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#1d1d1f] tracking-tight">5-Star Service</div>
                  <div className="text-xs text-[#6e6e73] font-medium mt-0.5">523+ Miami families</div>
                </div>
              </div>
            </div>

            {/* Floating stats card — bottom-right */}
            <div className="absolute bottom-16 -right-2 md:-right-8 z-20 float-anim" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00b4a6]/15 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-[#00b4a6]" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#1d1d1f] tracking-tight">10,000+ Hours</div>
                  <div className="text-xs text-[#6e6e73] font-medium mt-0.5">Combined experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Booking bar below hero */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/80 px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
            <select
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-[#1d1d1f] cursor-pointer py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
              defaultValue=""
            >
              <option value="" disabled>What Service Do You Need?</option>
              <option value="residential">Residential Cleaning</option>
              <option value="deep">Deep Clean</option>
              <option value="airbnb">Airbnb Turnover</option>
              <option value="commercial">Commercial Cleaning</option>
            </select>
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            <select
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-[#1d1d1f] cursor-pointer py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
              defaultValue=""
            >
              <option value="" disabled>Choose Your City</option>
              <option value="miami">Miami, FL</option>
              <option value="coral_gables">Coral Gables</option>
              <option value="brickell">Brickell</option>
              <option value="doral">Doral</option>
            </select>
            <a
              href="#booking"
              className="w-full sm:w-auto flex-shrink-0 px-7 py-3 bg-[#E8A020] text-white text-sm font-bold rounded-xl hover:bg-[#d4911a] transition-all duration-300 shadow hover:-translate-y-[1px] text-center"
            >
              Get Free Estimate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
