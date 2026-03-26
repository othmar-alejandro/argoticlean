import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Twitter, Facebook, Youtube, Play, Star } from 'lucide-react';
import Booking from './Booking';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-anim-top', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, '-=0.6')
      .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-image-container', { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.2 }, '-=0.8')
      .fromTo('.hero-social', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
      .fromTo('.hero-bottom-bar', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5');

    // Perpetual infinite spin for the badge
    gsap.to('.rotating-badge', { rotation: 360, duration: 12, ease: 'none', repeat: -1 });
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative w-full overflow-hidden bg-[#eaf3fa] pt-32 flex flex-col justify-between" style={{ minHeight: '100dvh' }}>
      
      {/* Mesh Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply">
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#00b4a6]/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#E8A020]/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center flex-1">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center relative z-20 xl:-mt-12">
          
          {/* Floating Top Card */}
          <div className="hero-anim-top flex items-center gap-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-white/50 w-max mb-8">
             <div className="w-12 h-10 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden relative">
               <img src="/images/luxury_miami_condo_bg.png" className="w-full h-full object-cover" alt="Cleaning" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play size={12} className="text-white fill-white" />
               </div>
             </div>
             <div>
               <p className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wide">Argoti Standard</p>
               <p className="text-[10px] text-[#6e6e73]">Premium Care</p>
             </div>
          </div>

          {/* Title */}
          <h1 className="hero-title text-[3.5rem] leading-[1.05] sm:text-[4.5rem] lg:text-[5rem] font-black text-[#1d1d1f] tracking-tight mb-6">
            Enjoy The <br />
            Best <span className="text-[#00b4a6]">Cleaning</span><br />
            Service Stay Safe
          </h1>

          {/* Description */}
          <p className="hero-desc text-lg md:text-xl text-[#6e6e73] mb-10 leading-relaxed font-medium max-w-[420px]">
            We do not just clean, we restore your peace of mind. Trusted by Miami families with eco-friendly products and meticulous care.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex items-center gap-8">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00b4a6] text-white rounded-xl font-bold text-lg hover:bg-[#009b8f] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Booking Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about-us"
              className="text-[#1d1d1f] font-bold text-base hover:text-[#00b4a6] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#1d1d1f] hover:after:bg-[#00b4a6]"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & Decor */}
        <div className="hero-image-container w-full lg:w-[55%] relative flex justify-center lg:justify-end mt-20 lg:mt-0 xl:-mt-12">
          
          {/* Decorative Arrow SVG */}
          <div className="absolute top-2 -left-20 xl:block hidden opacity-30 select-none">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round">
               <path d="M10,140 Q50,20 140,80" />
               <path d="M125,75 L142,82 L130,95" />
            </svg>
          </div>

          {/* Social Icons Column */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pr-4 border-l border-gray-300/40 py-6 z-30">
            <a href="#" className="hero-social text-gray-500 hover:text-[#00b4a6] transition-colors rounded-full border border-gray-300 p-2"><Twitter size={16} /></a>
            <a href="#" className="hero-social text-gray-500 hover:text-[#00b4a6] transition-colors rounded-full border border-gray-300 p-2"><Facebook size={16} /></a>
            <a href="#" className="hero-social text-gray-500 hover:text-[#00b4a6] transition-colors rounded-full border border-gray-300 p-2"><Youtube size={16} /></a>
          </div>

          {/* Rotating Circular Stamp */}
          <div className="absolute -top-10 right-16 z-30 rotating-badge opacity-90 hidden md:block">
            <svg viewBox="0 0 100 100" width="110" height="110">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="text-[11px] font-black uppercase tracking-[0.2em] fill-[#1d1d1f]">
                <textPath href="#circlePath">
                  Argoti • Premium Service • Clean •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Shape Masked Layout */}
          <div className="relative z-10 w-full max-w-[500px] aspect-[4/5]">
             {/* The Base Background Architecture Shape */}
             <div className="absolute inset-0 rounded-t-[12rem] rounded-bl-[4rem] rounded-br-[1.5rem] overflow-hidden bg-white shadow-2xl">
                <img src="/images/luxury_miami_condo_bg.png" alt="Context" className="w-full h-full object-cover scale-105 opacity-80 blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00b4a6]/20 to-transparent mix-blend-multiply" />
             </div>

             {/* Out of bounds pop-out character */}
             <div className="absolute -bottom-2 -left-8 w-[125%] max-w-[600px] z-20 pointer-events-none">
                <img 
                  src="/images/hispanic_cleaner_nobg.png" 
                  alt="Argoti Clean Professional" 
                  className="w-full h-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
                  style={{ maskImage: "linear-gradient(to top, transparent 0%, black 8%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 8%)" }}
                />
             </div>

             {/* Review Overlay Card (Bottom Left) */}
             <div className="absolute bottom-6 -left-12 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 z-30 float-anim border border-gray-50">
               <div className="flex -space-x-3">
                 <img src="https://i.pravatar.cc/100?img=1" className="w-11 h-11 rounded-full border-2 border-white bg-gray-200" alt="Reviewer" />
                 <img src="https://i.pravatar.cc/100?img=2" className="w-11 h-11 rounded-full border-2 border-white bg-gray-200" alt="Reviewer" />
                 <div className="w-11 h-11 rounded-full border-2 border-white bg-[#1a3a5c] flex items-center justify-center text-white text-[10px] font-bold">+</div>
               </div>
               <div>
                 <p className="font-black text-xl text-[#1d1d1f] leading-none mb-0.5">523+</p>
                 <p className="text-[12px] text-[#6e6e73] font-semibold">Reviews</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* THE BOTTOM DARK TRUST/STATS SECTION */}
      <div className="hero-bottom-bar w-full relative z-20 xl:mt-8">
        <div className="w-full flex">
          {/* Raised tab part */}
          <div className="w-full sm:w-[50%] lg:w-[35%] bg-[#0f172a] rounded-tr-[3.5rem] p-8 lg:p-10 pb-0 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
             <p className="text-white text-base lg:text-lg font-bold max-w-[220px] leading-snug">
               We help real people do more with their time.
             </p>
          </div>
          {/* Empty right area above the main dark band to allow hero background to show */}
          <div className="w-full sm:w-[50%] lg:w-[65%] bg-transparent"></div>
        </div>
        
        {/* Main Base Drop */}
        <div className="bg-[#0f172a] w-full px-4 sm:px-6 lg:px-10 py-10 flex flex-col xl:flex-row items-center gap-10 lg:gap-16 relative">
           
           {/* Stats Block */}
           <div className="w-full xl:w-[28%] flex items-center justify-start gap-12">
             <div>
               <p className="text-white text-4xl lg:text-[2.5rem] font-bold mb-1 tracking-tight">523+</p>
               <p className="text-gray-400 text-sm font-medium">Miami Families</p>
             </div>
             <div className="hidden sm:block">
               <p className="text-white text-4xl lg:text-[2.5rem] font-bold mb-1 tracking-tight">100%</p>
               <p className="text-gray-400 text-sm font-medium">Satisfaction</p>
             </div>
           </div>

           {/* Integrated Booking / Services Right Side */}
           <div className="w-full xl:w-[72%]">
             <div className="w-full" style={{ padding: '4px' }}>
                <Booking />
             </div>
           </div>
           
        </div>
      </div>
    </section>
  );
}
