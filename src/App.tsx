import { useState } from 'react';
import { Hero } from './components/Hero';
import { InteriorDesigns } from './components/InteriorDesigns';
import { ExteriorDesigns } from './components/ExteriorDesigns';
import { PanoramicView } from './components/PanoramicView';
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <InteriorDesigns />
      <ExteriorDesigns />
      {/* <PanoramicView /> */}
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}