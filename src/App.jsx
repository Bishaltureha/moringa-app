import { useState } from 'react';
import './App.css';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import TrustBar    from './components/TrustBar';
import About       from './components/About';
import Products    from './components/Products';
import WhyUs       from './components/WhyUs';
import HowItWorks  from './components/HowItWorks';
import Contact     from './components/Contact';
import Footer           from './components/Footer';
import WhatsAppButton   from './components/WhatsAppButton';

const PAGES = (setPage) => ({
  home:     <><Hero /><TrustBar /></>,
  about:    <About />,
  products: <Products />,
  whyus:    <WhyUs />,
  process:  <HowItWorks setPage={setPage} />,
  contact:  <Contact />,
});

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {PAGES(setPage)[page]}
      <Footer setPage={setPage} />
      <WhatsAppButton />
    </>
  );
}
