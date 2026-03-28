import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-x-hidden selection:bg-[#0071e3]/20 selection:text-[#0071e3]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
