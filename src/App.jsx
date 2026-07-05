import './App.css';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import TrustBar    from './components/TrustBar';
import About       from './components/About';
import Products    from './components/Products';
import WhyUs       from './components/WhyUs';
import HowItWorks  from './components/HowItWorks';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Products />
      <WhyUs />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
