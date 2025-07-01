import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;