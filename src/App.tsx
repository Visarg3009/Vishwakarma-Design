import { Hero } from './components/Hero';
import { InteriorDesigns } from './components/InteriorDesigns';
import { ExteriorDesigns } from './components/ExteriorDesigns';
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <InteriorDesigns />
      <ExteriorDesigns />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}