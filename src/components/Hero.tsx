import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroBanner from 'figma:asset/heroBanner.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroBanner}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2420]/90 via-[#3D3531]/85 to-[#2A2420]/90" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Transforming Spaces,<br />
              <span className="text-[#C9B8A8]">Creating Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional interior and exterior design solutions that bring your vision to life
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#C9B8A8] hover:bg-[#B5A394] text-gray-900 px-8 py-6"
              >
                Get Started
              </Button>
              <Button
                onClick={() => document.getElementById('interior')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-[#C9B8A8] text-[#C9B8A8] hover:bg-[#C9B8A8] hover:text-gray-900 px-8 py-6"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
          >
            <ArrowDown className="text-[#C9B8A8]" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}