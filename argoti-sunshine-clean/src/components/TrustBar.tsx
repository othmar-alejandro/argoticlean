import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Happy Families Served', value: '523+' },
  { label: 'Customer Satisfaction', value: '97.3%' },
  { label: 'Homes Cleaned', value: '1,247+' },
  { label: 'Satisfaction Guarantee', value: '100%' },
];

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.stat-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 bg-[#1a3a5c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center text-center px-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#E8A020] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
