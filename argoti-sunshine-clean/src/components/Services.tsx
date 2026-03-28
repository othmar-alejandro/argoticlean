import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ServiceType = {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  colSpan: string;
  accent: string;
};

const services: ServiceType[] = [
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
    accent: '#1a3a5c',
  },
  {
    number: '03',
    title: '5-Star Airbnb Turnover',
    description: 'Designed for property managers. Rigorous detail that secures perfect ratings from tough guests.',
    features: ['Linen Changeover', 'Guest Welcome Setup', 'Restocking Essentials'],
    image: '/images/clean_bedroom.png',
    colSpan: 'md:col-span-1',
    accent: '#E8A020',
  },
  {
    number: '04',
    title: 'Commercial & Office',
    description: 'Impress clients and staff with a spotless, sanitized workspace. Flexible scheduling around your hours.',
    features: ['Common Area Cleaning', 'Workstation Sanitization', 'Restroom Deep Clean'],
    image: '/images/generated_office_cleaning.png',
    colSpan: 'md:col-span-1',
    accent: '#1a3a5c',
  },
  {
    number: '05',
    title: 'Post Construction',
    description: 'Remove all dust, debris, and marks after a renovation or new build. We leave your new space move-in ready.',
    features: ['Fine Dust Removal', 'Paint & Sticker Removal', 'Full Surface Detailing'],
    image: '/images/generated_post_construction_pro.png',
    colSpan: 'md:col-span-1',
    accent: '#E8A020',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<ServiceType | null>(null);

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
    <>
      <section id="services" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#E8A020]/10 to-[#1a3a5c]/5 rounded-full blur-[100px] -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">What We Offer</p>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a3a5c] to-[#E8A020]">Argoti</span>{' '}
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
                onClick={() => setActiveModal(service)}
                className={`service-card group cursor-pointer relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-${service.accent}/20 transition-all duration-700 ${service.colSpan} h-[440px]`}
              >
                <div className="absolute inset-0 z-0 bg-[#0f172a]">
                   <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ filter: "brightness(0.85) contrast(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-black/40 to-transparent group-hover:from-black/95 transition-all duration-700" />
                </div>

                 <div className="absolute inset-x-0 bottom-0 p-8 z-10 text-white flex flex-col justify-end">
                  <div
                    className="w-12 h-12 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/10 transition-colors"
                    style={{ background: `${service.accent}25`, borderColor: `${service.accent}40` }}
                  >
                     <span className="text-white font-bold tracking-widest text-lg">{service.number}</span>
                  </div>

                   <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight drop-shadow-md">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-light max-w-md text-sm line-clamp-2 group-hover:line-clamp-none group-hover:text-white transition-all duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative View Details button appearing on hover */}
                <div className="absolute top-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-20">
                  <span className="bg-[#1a3a5c]/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-md">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP FOR SERVICES */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f16]/80 backdrop-blur-md px-4" 
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-[2rem] max-w-4xl w-full shadow-2xl relative overflow-hidden transform scale-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-auto float-anim" 
            onClick={e => e.stopPropagation()}
          >
            {/* Left Image Side */}
            <div className="w-full md:w-2/5 h-48 md:h-auto md:min-h-[400px] relative shrink-0">
              <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/60 to-transparent" />
              <div 
                className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-12 h-12 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
                style={{ background: `${activeModal.accent}50` }}
              >
                <span className="text-white font-bold tracking-widest">{activeModal.number}</span>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-3/5 p-6 md:p-10 relative overflow-y-auto">
               <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-[#E8A020] hover:bg-[#fdf2df] w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white shadow-sm border border-gray-100 z-10"
                aria-label="Close"
               >
                 <X size={20} />
               </button>
               
               <h3 className="text-3xl md:text-4xl font-black text-[#1a3a5c] mb-4 tracking-tight pr-8">
                 {activeModal.title}
               </h3>
               <p className="text-[#6e6e73] text-lg leading-relaxed mb-8">
                 {activeModal.description}
               </p>
               
               <div className="mb-10 bg-[#fbf7f0] p-6 rounded-2xl border border-[#E8A020]/20">
                 <h4 className="text-sm font-black text-[#1a3a5c] uppercase tracking-wider mb-4 border-b border-[#E8A020]/20 pb-3">Included Checklist</h4>
                 <ul className="space-y-4">
                   {activeModal.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-[#1a3a5c] font-semibold text-[15px]">
                         <CheckCircle2 size={20} style={{ color: activeModal.accent }} className="shrink-0" />
                        {feature}
                      </li>
                   ))}
                 </ul>
               </div>

               <a 
                 href="#booking"
                 onClick={() => setActiveModal(null)}
                 className="flex items-center justify-center w-full text-center bg-[#1a3a5c] hover:bg-[#0f243b] text-white font-bold py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(26,58,92,0.3)] hover:shadow-xl hover:-translate-y-1"
               >
                 Lock in your {activeModal.title.split(' ')[0]} clean
               </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
