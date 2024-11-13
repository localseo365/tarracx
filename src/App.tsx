import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import WorkAreas from './components/WorkAreas';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <div className="relative bg-white">
        <Services />
        <WhyChoose />
        <Process />
        <WorkAreas />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}

export default App;