import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Star, Twitter, Facebook, Youtube, ShieldCheck, Sparkles, CalendarCheck, PaintBucket, Smile } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-anim-top', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, '-=0.6')
      .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-image-container', { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.2 }, '-=0.8')
      .fromTo('.hero-social', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
      .fromTo('.hero-bottom-bar', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5');

    // Perpetual infinite spin for the badge text
    gsap.to('.rotating-badge', { rotation: 360, duration: 16, ease: 'none', repeat: -1 });
  }, { scope: containerRef });

  return (
    <>
      <section id="home" ref={containerRef} className="relative w-full overflow-hidden pt-32 flex flex-col justify-between min-h-[100dvh]" style={{ background: "radial-gradient(circle at bottom right, #fbf7f0, #ffffff 60%)" }}>
        
        {/* Soft Glow Ambient Accents using Brand Gold */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply">
          <div className="hero-glow absolute -top-40 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,_#E8A02015,_transparent_70%)] rounded-full blur-[80px]" />
          <div className="hero-glow absolute top-20 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_#1a3a5c10,_transparent_70%)] rounded-full blur-[80px]" />
        </div>

        {/* MAIN TOP SECTION (Text + Image) */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 pb-16 lg:pb-0">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20">
            
            {/* High-End Glassmorphism Floating Card */}
            <div className="hero-anim-top flex items-center gap-4 bg-white/40 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/60 w-max mb-8">
               <div className="w-10 h-10 rounded-full bg-white/80 border border-[#E8A020]/30 flex items-center justify-center overflow-hidden shadow-sm">
                 <ShieldCheck size={18} className="text-[#E8A020]" />
               </div>
               <div>
                 <p className="text-[11px] font-black text-[#1a3a5c] uppercase tracking-wide">Argoti Standard</p>
                 <p className="text-[10px] text-[#E8A020] font-bold">Premium Care</p>
               </div>
            </div>

            {/* Title - Brand Gold Gradient accent */}
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-[4.8rem] font-black text-[#1d1d1f] leading-[1.05] tracking-tight mb-6 relative">
              Enjoy The <br />
              Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A020] to-[#ffd78c]">Cleaning</span><br />
              Service Stay Safe
            </h1>

            {/* Description */}
            <p className="hero-desc text-lg md:text-xl text-[#1a3a5c]/80 mb-10 leading-relaxed font-medium max-w-[460px]">
              We do not just clean, we restore your peace of mind. Trusted by Miami families with eco-friendly products and meticulous care.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex items-center gap-6">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8A020] text-white rounded-xl font-bold text-lg hover:bg-[#d49018] shadow-[0_8px_20px_rgba(232,160,32,0.3)] hover:-translate-y-1 transition-all duration-300 group"
              >
                Booking Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about-us"
                className="text-[#1a3a5c] font-bold text-base hover:text-[#E8A020] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#1a3a5c] hover:after:bg-[#E8A020]"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Decor */}
          <div className="hero-image-container w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0 xl:-mt-12">
            
            {/* Decorative Arrow SVG */}
            <div className="absolute top-2 -left-12 xl:block hidden opacity-30 select-none drop-shadow-sm">
              <svg width="120" height="120" viewBox="0 0 150 150" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round">
                 <path d="M10,140 Q50,20 140,80" />
                 <path d="M125,75 L142,82 L130,95" />
              </svg>
            </div>

            {/* Social Icons Column - Pinned to right edge of container */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center z-30">
              <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent blur-md -z-10 right-[-20px] w-20" />
              <div className="border-l-2 border-white pl-4 flex flex-col gap-5 drop-shadow-md">
                <a href="#" className="hero-social text-[#1a3a5c] hover:text-white hover:bg-[#E8A020] transition-all duration-300 rounded-full border border-white/50 bg-white/70 backdrop-blur-md p-2.5 shadow-sm"><Twitter size={16} /></a>
                <a href="#" className="hero-social text-[#1a3a5c] hover:text-white hover:bg-[#E8A020] transition-all duration-300 rounded-full border border-white/50 bg-white/70 backdrop-blur-md p-2.5 shadow-sm"><Facebook size={16} /></a>
                <a href="#" className="hero-social text-[#1a3a5c] hover:text-white hover:bg-[#E8A020] transition-all duration-300 rounded-full border border-white/50 bg-white/70 backdrop-blur-md p-2.5 shadow-sm"><Youtube size={16} /></a>
              </div>
            </div>

            {/* Composite Badge: Spinning Ribbon + Static Center Badge */}
            <div className="absolute -top-6 right-8 z-30 hidden md:flex items-center justify-center w-[120px] h-[120px] select-none pointer-events-none">
              {/* Spinning Text Ribbon in brand color */}
              <div className="absolute inset-0 rotating-badge">
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text className="text-[10px] font-black uppercase tracking-[0.16em] fill-[#1a3a5c]">
                    <textPath href="#circlePath" startOffset="0%">
                      100% Satisfaction Guarantee • 
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Static Center Badge */}
              <div className="absolute w-[52px] h-[52px] bg-gradient-to-br from-[#1a3a5c] to-[#0f243b] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(26,58,92,0.4)] border-4 border-white z-10">
                 <ShieldCheck size={24} className="text-[#E8A020]" />
              </div>
            </div>

            {/* Main Shape Masked Layout */}
            <div className="relative z-10 w-full max-w-[440px] aspect-[4/5] mx-auto lg:mr-10">
               
               {/* Massive Ambient Glow behind image container */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_#E8A02020,_transparent_70%)] blur-[50px] -z-20 opacity-80" />

               {/* 🚀 THE OFFSET BACKGROUND SHAPE FOR ARCHITECTURAL DEPTH */}
               <div className="absolute inset-0 -top-6 -left-6 rounded-t-[12rem] rounded-bl-[4rem] rounded-br-[1.5rem] bg-gradient-to-br from-[#fdf2df] to-white/10 border border-white/60 backdrop-blur-lg shadow-xl -z-10" />

               {/* The Base Background Architecture Shape */}
               <div className="absolute inset-0 rounded-t-[12rem] rounded-bl-[4rem] rounded-br-[1.5rem] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/20">
                  <img src="/images/luxury_miami_condo_bg.png" alt="Context" className="w-full h-full object-cover scale-105 opacity-80 blur-[1px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent,_#1a3a5c80)] mix-blend-overlay" />
               </div>

               {/* Out of bounds pop-out character */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] max-w-[550px] z-20 pointer-events-none">
                  <img 
                    src="/images/hispanic_cleaner_nobg.png" 
                    alt="Argoti Clean Professional" 
                    className="w-full h-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
                    style={{ maskImage: "linear-gradient(to top, transparent 0%, black 10%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 10%)" }}
                  />
               </div>

               {/* High-End Glassmorphism Happy Customers Overlay (Bottom Left) */}
               <div className="absolute bottom-6 -left-8 md:-left-12 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center gap-4 z-30 float-anim">
                 <div className="flex -space-x-3">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Customer" />
                   <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Customer" />
                   <div className="w-10 h-10 rounded-full border-2 border-white bg-[#E8A020] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                     <Star size={12} className="fill-white" />
                   </div>
                 </div>
                 <div>
                   <p className="font-black text-lg text-[#1d1d1f] leading-none mb-0.5 tracking-tight drop-shadow-sm">523+</p>
                   <p className="text-[10px] text-[#1a3a5c] font-black uppercase tracking-wider">Happy Customers</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* THE BOTTOM DARK TRUST/STATS SECTION */}
        <div className="hero-bottom-bar w-full relative z-20 mt-12 lg:mt-6 xl:px-6 pb-6">
          
          {/* Layer 1: The Raised Tab anchored FLUSH to the left. */}
          <div className="w-full bg-transparent flex items-end">
            <div className="bg-[#0f172a] inline-block rounded-t-[2.5rem] px-6 sm:px-10 lg:px-12 pt-5 pb-2 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] relative z-20">
               <p className="text-white text-sm lg:text-base font-bold leading-snug w-[200px] sm:w-[240px]">
                 We help real people do more with their time.
               </p>
            </div>
          </div>
          
          {/* Layer 2: The Main Black Band running full width */}
          <div className="bg-[#0f172a] w-full rounded-b-[2.5rem] rounded-tr-[2.5rem] md:rounded-tr-[3rem] shadow-2xl relative z-10 -mt-[1px]">
            
            {/* The Main content band */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-8 xl:pb-10 pt-4 w-full flex flex-col xl:flex-row items-center gap-8 lg:gap-12">
               
               {/* Stats Block (Left Side within the dark bar) */}
               <div className="w-full xl:w-[25%] flex items-center justify-between sm:justify-start gap-12">
                 <div>
                   <p className="text-white text-3xl font-black mb-1 tracking-tight">523+</p>
                   <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Miami Families</p>
                 </div>
                 <div>
                   <p className="text-[#E8A020] text-3xl font-black mb-1 tracking-tight">100%</p>
                   <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Satisfaction</p>
                 </div>
               </div>

               {/* Process Steps Cards (Right Side) */}
               <div className="w-full xl:w-[75%] grid grid-cols-1 sm:grid-cols-3 gap-5">
                 
                 {/* Protocol Step 1 */}
                 <div className="flex justify-between items-center sm:block bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors group">
                   <div className="flex items-center gap-4 sm:gap-0 sm:flex-col sm:items-start pointer-events-none">
                     <div className="w-10 h-10 rounded-xl bg-[#E8A020]/20 flex items-center justify-center shrink-0 sm:mb-3 border border-[#E8A020]/30 shadow-inner group-hover:bg-[#E8A020]/30 transition-colors">
                       <CalendarCheck className="text-[#E8A020]" size={18} />
                     </div>
                     <div>
                       <p className="text-white font-bold text-base tracking-tight mb-1 flex items-center gap-2"><span className="text-[#E8A020] font-black">01</span> Book Online</p>
                       <p className="text-gray-400 text-[11px] font-medium leading-relaxed uppercase tracking-wider">Secure your slot in 60 seconds.</p>
                     </div>
                   </div>
                 </div>

                 {/* Protocol Step 2 */}
                 <div className="flex justify-between items-center sm:block bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors group">
                   <div className="flex items-center gap-4 sm:gap-0 sm:flex-col sm:items-start pointer-events-none">
                     <div className="w-10 h-10 rounded-xl bg-[#E8A020]/20 flex items-center justify-center shrink-0 sm:mb-3 border border-[#E8A020]/30 shadow-inner group-hover:bg-[#E8A020]/30 transition-colors">
                       <PaintBucket className="text-[#E8A020]" size={18} />
                     </div>
                     <div>
                       <p className="text-white font-bold text-base tracking-tight mb-1 flex items-center gap-2"><span className="text-[#E8A020] font-black">02</span> We Clean</p>
                       <p className="text-gray-400 text-[11px] font-medium leading-relaxed uppercase tracking-wider">Rigorous, spotless detailing.</p>
                     </div>
                   </div>
                 </div>

                 {/* Protocol Step 3 */}
                 <div className="flex justify-between items-center sm:block bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors group">
                   <div className="flex items-center gap-4 sm:gap-0 sm:flex-col sm:items-start pointer-events-none">
                     <div className="w-10 h-10 rounded-xl bg-[#E8A020]/20 flex items-center justify-center shrink-0 sm:mb-3 border border-[#E8A020]/30 shadow-inner group-hover:bg-[#E8A020]/30 transition-colors">
                         <Smile className="text-[#E8A020]" size={18} />
                     </div>
                     <div>
                       <p className="text-white font-bold text-base tracking-tight mb-1 flex items-center gap-2"><span className="text-[#E8A020] font-black">03</span> You Relax</p>
                       <p className="text-gray-400 text-[11px] font-medium leading-relaxed uppercase tracking-wider">Enjoy your restored sanctuary.</p>
                     </div>
                   </div>
                 </div>

               </div>
               
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
