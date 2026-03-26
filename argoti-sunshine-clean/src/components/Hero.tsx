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
      className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#f8fafc]"
    >
      {/* Richer mesh bg to eliminate the 'too white' generic feel */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-[#E8A020]/20 to-[#00b4a6]/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-gradient-to-tr from-[#1a3a5c]/15 to-[#0071e3]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Split layout: left content / right image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8 self-start">
              <span className="w-2 h-2 rounded-full bg-[#E8A020] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#1a3a5c] uppercase">
                Miami's Trusted Cleaning Standard
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-[3.5rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem] font-bold text-[#1d1d1f] tracking-tight mb-8">
              Bring Shine <br />
              <span className="text-gradient-argoti block mt-1">& Comfort</span>
              to Every <span className="text-[#E8A020]">Space.</span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-lg md:text-xl text-[#6e6e73] mb-10 leading-relaxed font-light max-w-[480px]">
              We do not just clean, we restore your peace of mind. Trusted by 523+ Miami families and businesses with eco-friendly products and meticulous care.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-5">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a3a5c] text-white rounded-full font-medium text-lg hover:bg-[#112a45] hover:shadow-xl hover:shadow-[#1a3a5c]/20 transition-all duration-300 group"
              >
                Book Your Cleaning
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:7869343686"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a3a5c] rounded-full font-semibold text-lg hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300"
              >
                (786) 934-3686
              </a>
            </div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="hero-image-container relative flex justify-center lg:justify-end mt-16 lg:mt-0 w-full lg:w-[500px] mx-auto lg:mr-0">
            {/* The Arch Background Container */}
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-[8px] border-white z-0">
              <img
                src="/images/luxury_miami_condo_bg.png"
                alt="Luxury Miami Home Interior"
                className="w-full h-full object-cover object-center scale-105 opacity-90 blur-[2px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/50 via-[#1a3a5c]/5 to-transparent" />
            </div>

            {/* The cut-out cleaner breaking out of the frame */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-[48%] w-[140%] max-w-[550px] z-10 pointer-events-none">
              <img
                src="/images/hispanic_cleaner_nobg.png"
                alt="Argoti Sunshine Clean Professional"
                className="w-full h-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 12%)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 12%)"
                }}
              />
            </div>

            {/* Floating stats card — top-left */}
            <div className="absolute top-12 -left-6 md:-left-16 z-20 float-anim" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 flex items-center justify-center">
                  <Star size={18} className="text-[#E8A020]" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#1d1d1f] tracking-tight">5-Star Service</div>
                  <div className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mt-0.5">523+ Families</div>
                </div>
              </div>
            </div>

            {/* Floating stats card — bottom-right */}
            <div className="absolute bottom-16 -right-4 md:-right-10 z-20 float-anim" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00b4a6]/15 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-[#00b4a6]" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#1d1d1f] tracking-tight">10,000+ Hours</div>
                  <div className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mt-0.5">Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Booking bar below hero */}
        <div className="mt-20 lg:mt-24 relative z-30">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 px-3 py-3 flex flex-col sm:flex-row items-center gap-3">
            <select
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-[#1d1d1f] cursor-pointer py-3 px-4 rounded-xl hover:bg-gray-50 focus:bg-gray-50 transition-colors"
              defaultValue=""
            >
              <option value="" disabled>What Service Do You Need?</option>
              <option value="residential">Residential Cleaning</option>
              <option value="deep">Deep Clean</option>
              <option value="airbnb">Airbnb Turnover</option>
              <option value="commercial">Commercial Cleaning</option>
            </select>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <select
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-[#1d1d1f] cursor-pointer py-3 px-4 rounded-xl hover:bg-gray-50 focus:bg-gray-50 transition-colors"
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
              className="w-full sm:w-auto flex-shrink-0 px-8 py-4 bg-[#E8A020] text-white text-sm font-bold tracking-wide rounded-xl hover:bg-[#d4911a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px] text-center"
            >
              Get Free Estimate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
