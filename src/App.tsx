import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleGetDemo = () => {
    setShowComingSoon(true);
  };

  const handleBackToHome = () => {
    setShowComingSoon(false);
  };

  if (showComingSoon) {
    return <ComingSoon onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onGetDemo={handleGetDemo} />
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