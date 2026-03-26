import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    tl.fromTo(
      '.about-text > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    ).fromTo(
      '.about-img-wrap',
      { opacity: 0, scale: 0.95, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section id="about-us" ref={containerRef} className="py-32 bg-[#fbfbfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: images */}
          <div className="about-img-wrap relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-3">
              <img
                src="/images/generated_hero_satisfied_client.png"
                alt="Argoti Sunshine Clean Professional"
                className="rounded-[2rem] w-full h-[480px] object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#E8A020] text-white rounded-2xl px-6 py-5 shadow-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-xs font-semibold opacity-90 uppercase tracking-wider mt-0.5">Years Serving Miami</div>
            </div>
          </div>

          {/* Right: text */}
          <div className="about-text order-1 lg:order-2">
            <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">Who We Are</p>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] leading-tight tracking-tight mb-6">
              The standard of clean.{' '}
              <span className="text-gradient-argoti">Redefined.</span>
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed font-light mb-6">
              Argoti Sunshine Clean was founded in Miami with one mission: to bring exceptional, trustworthy cleaning services to every home and business we serve. We are not just cleaners, we are specialists in restoring peace of mind.
            </p>
            <p className="text-lg text-[#6e6e73] leading-relaxed font-light mb-8">
              Our teams are background-checked, fully insured, and trained to the highest standards using eco-friendly products that are safe for your family and pets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
