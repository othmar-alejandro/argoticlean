import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What is included in a regular cleaning?',
    answer: 'Our regular cleaning includes dusting all surfaces, vacuuming and mopping floors, bathroom sanitization (toilets, showers, sinks), and wiping down kitchen counters and appliances. We leave your home fresh every visit.',
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No — we bring our own professional-grade, eco-friendly cleaning supplies and equipment. If you have specific products you prefer, just let us know and we\'ll accommodate.',
  },
  {
    question: 'How do you handle pets?',
    answer: 'We love pets! Please let us know in advance if you have pets so we can send the right team. We use pet-safe, non-toxic products and are careful around your furry friends.',
  },
  {
    question: 'What if I\'m not satisfied with the cleaning?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy, contact us within 24 hours and we\'ll return to re-clean the specific areas at no additional charge.',
  },
  {
    question: 'Are your cleaners insured and bonded?',
    answer: 'Yes. All our professionals are fully insured, bonded, and undergo comprehensive background checks for your complete peace of mind.',
  },
  {
    question: 'Do you serve all Miami neighborhoods?',
    answer: 'We serve Miami, Brickell, Coral Gables, Doral, Kendall, Hialeah, and surrounding areas. Contact us to confirm availability for your neighborhood.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'Entirely up to you. Many clients provide a spare key or access code. We treat your home with the utmost respect and ensure it\'s securely locked when we leave.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.faq-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={containerRef} className="py-32 bg-[#fbfbfd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">Got Questions?</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            Frequently Asked{' '}
            <span className="text-gradient-argoti">Questions.</span>
          </h2>
          <p className="text-xl text-[#6e6e73] font-light">
            Everything you need to know about our Miami cleaning services.
          </p>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-gray-200 last:border-0"
            >
              <button
                className="w-full flex items-center justify-between text-left py-5 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-xl font-semibold tracking-tight transition-colors duration-200 ${openIndex === index ? 'text-[#E8A020]' : 'text-[#1d1d1f] group-hover:text-[#E8A020]'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#E8A020] text-white' : 'bg-gray-100 text-[#6e6e73] group-hover:bg-[#E8A020]/10 group-hover:text-[#E8A020]'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base text-[#6e6e73] leading-relaxed font-light pb-5 pr-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
