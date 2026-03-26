import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timeSlots = ['08:00 AM', '09:30 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
const services = ['Residential Cleaning', 'Deep Cleaning', 'Airbnb Turnover', 'Commercial Cleaning'];

export default function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(services[0]);

  const upcomingDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    tl.fromTo(
      '.booking-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      '.booking-widget',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
  }, { scope: containerRef });

  const handleNextStep = () => {
    if (step === 1 && selectedDate !== null && selectedTime) {
      setStep(2);
      gsap.fromTo('.step-2-content', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 });
    } else if (step === 2) {
      setStep(3);
      gsap.fromTo('.step-3-content', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
  };

  return (
    <section id="booking" ref={containerRef} className="py-32 bg-[#fbfbfd] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#E8A020]/8 to-[#00b4a6]/6 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="booking-title text-center mb-14">
          <p className="text-xs font-bold text-[#E8A020] uppercase tracking-[0.2em] mb-4">Reserve Your Spot</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-5 tracking-tight">
            Book your{' '}
            <span className="text-gradient-argoti">cleaning.</span>
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto font-light">
            Select a date and time that works for you. Fast, easy, and commitment-free.
          </p>
        </div>

        <div className="booking-widget relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8A020]/20 to-[#00b4a6]/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 -z-10" />
          <div className="bg-white/85 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

            {/* Left Sidebar */}
            <div className="bg-[#1a3a5c] p-10 lg:w-[280px] flex flex-col justify-between">
              <div>
                <img src="/images/logo.png" alt="Argoti Sunshine Clean" className="h-10 w-auto object-contain mb-8 brightness-110" />
                <h3 className="text-xl font-bold text-white mb-8 tracking-tight">Booking Summary</h3>

                <div className="space-y-7">
                  <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${step > 1 ? 'bg-[#E8A020] text-white' : 'bg-white/10 text-[#E8A020]'}`}>
                      {step > 1 ? <CheckCircle2 size={18} /> : <CalendarIcon size={18} />}
                    </div>
                    <div>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-1">Date & Time</p>
                      <p className="font-semibold text-white text-sm">
                        {selectedDate !== null ? upcomingDates[selectedDate].toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Select Date'}
                        {selectedTime ? `, ${selectedTime}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${step > 2 ? 'bg-[#E8A020] text-white' : 'bg-white/10 text-[#E8A020]'}`}>
                      {step > 2 ? <CheckCircle2 size={18} /> : <User size={18} />}
                    </div>
                    <div>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-1">Your Details</p>
                      <p className="font-semibold text-white text-sm">{step === 3 ? 'Provided' : 'Pending'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-7 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <CheckCircle2 size={14} className="text-[#E8A020]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs mt-2">
                  <CheckCircle2 size={14} className="text-[#E8A020]" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="p-10 lg:p-12 lg:flex-1 bg-transparent">

              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div className="step-1-content h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-8 tracking-tight">Select Date & Time</h3>

                  <div className="mb-8">
                    <h4 className="font-semibold text-[#1d1d1f] text-sm mb-4 uppercase tracking-wider">Available Dates</h4>
                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
                      {upcomingDates.map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(i)}
                          className={`flex-shrink-0 w-[72px] h-[88px] rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 snap-start ${
                            selectedDate === i
                              ? 'border-[#E8A020] bg-[#E8A020] text-white shadow-lg shadow-[#E8A020]/25 scale-105'
                              : 'border-gray-200 hover:border-[#E8A020]/50 hover:bg-amber-50/50 text-[#1d1d1f] bg-white'
                          }`}
                        >
                          <span className={`text-[10px] font-bold uppercase mb-1 ${selectedDate === i ? 'text-amber-100' : 'text-[#6e6e73]'}`}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                          <span className="text-xl font-bold tracking-tight">{date.getDate()}</span>
                          <span className={`text-[10px] ${selectedDate === i ? 'text-amber-100' : 'text-[#6e6e73]'}`}>{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-auto">
                    <h4 className="font-semibold text-[#1d1d1f] text-sm mb-4 uppercase tracking-wider">Available Times</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-xl border font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                            selectedTime === time
                              ? 'border-[#E8A020] bg-[#E8A020] text-white shadow-lg shadow-[#E8A020]/25 scale-[1.02]'
                              : 'border-gray-200 hover:border-[#E8A020]/50 hover:bg-amber-50/50 text-[#1d1d1f] bg-white'
                          }`}
                        >
                          <Clock size={14} className={selectedTime === time ? 'text-amber-100' : 'text-[#6e6e73]'} />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      disabled={selectedDate === null || selectedTime === null}
                      className="px-8 py-3.5 bg-[#1a3a5c] text-white font-bold rounded-full hover:bg-[#E8A020] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Continue
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: User Details */}
              {step === 2 && (
                <div className="step-2-content h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <button onClick={() => setStep(1)} className="p-2 rounded-full hover:bg-gray-100 text-[#6e6e73] transition-colors">
                      <ChevronLeft size={22} />
                    </button>
                    <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Your Details</h3>
                  </div>

                  <form className="space-y-7 mb-auto" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wider">Service Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map(service => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setSelectedService(service)}
                            className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all duration-300 text-left ${
                              selectedService === service
                                ? 'border-[#E8A020] bg-amber-50/50 text-[#E8A020] shadow-sm'
                                : 'border-gray-200 hover:border-[#E8A020]/50 text-[#1d1d1f]'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-7">
                      <div className="relative group">
                        <input type="text" id="bookFirstName" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="bookFirstName" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">First Name</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="bookLastName" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="bookLastName" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Last Name</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <input type="email" id="bookEmail" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Email Address" />
                      <label htmlFor="bookEmail" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Email Address</label>
                    </div>

                    <div className="relative group">
                      <input type="tel" id="bookPhone" className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#E8A020] transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                      <label htmlFor="bookPhone" className="absolute left-0 top-3 text-[#6e6e73] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8A020] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">Phone Number</label>
                    </div>
                  </form>

                  <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3.5 bg-[#1a3a5c] text-white font-bold rounded-full hover:bg-[#E8A020] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Confirm Booking
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="step-3-content h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E8A020] to-[#00b4a6] rounded-full flex items-center justify-center mb-7 shadow-xl shadow-[#E8A020]/30">
                    <Sparkles size={38} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1d1d1f] mb-3 tracking-tight">Booking Confirmed!</h3>
                  <p className="text-base text-[#6e6e73] max-w-sm mb-9 font-light">
                    Thank you for choosing Argoti Sunshine Clean! We'll reach out to confirm your appointment details shortly.
                  </p>
                  <a
                    href="tel:7869343686"
                    className="mb-4 text-sm font-semibold text-[#E8A020] hover:text-[#d4911a] transition-colors"
                  >
                    Questions? Call (786) 934-3686
                  </a>
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedDate(null);
                      setSelectedTime(null);
                    }}
                    className="px-7 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 text-sm"
                  >
                    Book Another Service
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
