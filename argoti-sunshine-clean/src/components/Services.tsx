import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Residential Cleaning',
    description: 'Maintain a spotless home with our scheduled weekly or bi-weekly cleaning services tailored for Miami families.',
    features: ['Dusting & Wiping', 'Vacuuming & Mopping', 'Bathroom Sanitization'],
    image: '/images/clean_floors.png',
    colSpan: 'md:col-span-2',
    accent: '#E8A020',
  },
  {
    number: '02',
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean. Baseboards, ovens, windows, walls — zero blind spots.',
    features: ['Baseboards & Blinds', 'Inside Appliances', 'Grout & Tiles'],
    image: '/images/generated_deep_cleaning.png',
    colSpan: 'md:col-span-1',
    accent: '#00b4a6',
  },
  {
    number: '03',
    title: '5-Star Airbnb Turnover',
    description: 'Designed for property managers. Rigorous detail that secures perfect ratings from tough guests.',
    features: ['Linen Changeover', 'Guest Welcome Setup', 'Restocking Essentials'],
    image: '/images/clean_bedroom.png',
    colSpan: 'md:col-span-1',
    accent: '#1a3a5c',
  },
  {
    number: '04',
    title: 'Commercial & Office',
    description: 'Impress clients and staff with a spotless, sanitized workspace. Flexible scheduling around your hours.',
    features: ['Common Area Cleaning', 'Workstation Sanitization', 'Restroom Deep Clean'],
    image: '/images/generated_office_cleaning.png',
    colSpan: 'md:col-span-1',
    accent: '#E8A020',
  },
  {
    number: '05',
    title: 'Post Construction',
    description: 'Remove all dust, debris, and marks after a renovation or new build. We leave your new space move-in ready.',
    features: ['Fine Dust Removal', 'Paint & Sticker Removal', 'Full Surface Detailing'],
    image: '/images/generated_post_construction_pro.png',
    colSpan: 'md:col-span-1',
    accent: '#00b4a6',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#E8A020]/5 to-[#00b4a6]/5 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">What We Offer</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            The{' '}
            <span className="text-gradient-argoti">Argoti</span>{' '}
            Standard.
          </h2>
          <p className="text-xl text-[#6e6e73] font-light">
            We transform your environment through meticulous care, flexible scheduling, and absolute professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
           {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 ${service.colSpan} h-[440px]`}
            >
              <div className="absolute inset-0 z-0">
                 <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-35 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 group-hover:via-black/85 transition-all duration-700" />
              </div>

               <div className="absolute inset-0 p-8 z-10 text-white flex flex-col justify-end">
                <div
                  className="w-12 h-12 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 shadow-lg"
                  style={{ background: `${service.accent}25`, borderColor: `${service.accent}40` }}
                >
                   <span className="text-white font-bold tracking-widest text-lg">{service.number}</span>
                </div>

                 <div className="transform group-hover:-translate-y-3 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light max-w-md mb-5 group-hover:text-white transition-colors duration-500 text-sm">
                    {service.description}
                  </p>
                </div>

                 <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-gray-200">
                         <CheckCircle2 size={14} style={{ color: service.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
