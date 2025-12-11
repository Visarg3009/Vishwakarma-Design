import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { Button } from './ui/button';

export function PanoramicView() {
  const panoramas = [
    {
      id: 1,
      title: 'Modern Kitchen Design',
      url: 'https://panorama.2020.net/view/6xtlfb5yecjypkzexygwq/',
      description: 'Experience our luxury kitchen design in 360°',
    },
    {
      id: 2,
      title: 'Contemporary Living Space',
      url: 'https://panorama.2020.net/view/6xtlfb5yecjypkzexygwq/',
      description: 'Explore this elegant living area from every angle',
    },
  ];

  const openFullscreen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="panoramic" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">360° Design</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in our designs with interactive 360-degree views
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {panoramas.map((panorama, index) => (
            <motion.div
              key={panorama.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#FAF8F6] rounded-lg overflow-hidden shadow-lg border border-[#E8E3DE]"
            >
              <div className="relative h-[400px] md:h-[500px]">
                <iframe
                  src={panorama.url}
                  className="w-full h-full"
                  title={panorama.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{panorama.title}</h3>
                <p className="text-gray-600 mb-4">{panorama.description}</p>
                
                <Button
                  onClick={() => openFullscreen(panorama.url)}
                  className="w-full bg-[#C9B8A8] hover:bg-[#B5A394] text-gray-900"
                  size="lg"
                >
                  <Maximize2 className="mr-2" size={20} />
                  View in Full Screen
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#FAF8F6] p-6 rounded-lg border border-[#E8E3DE]">
            <h3 className="text-xl text-gray-900 mb-2">Interactive</h3>
            <p className="text-gray-600 text-sm">
              Click and drag to explore every angle of the space
            </p>
          </div>
          <div className="bg-[#FAF8F6] p-6 rounded-lg border border-[#E8E3DE]">
            <h3 className="text-xl text-gray-900 mb-2">Realistic</h3>
            <p className="text-gray-600 text-sm">
              High-quality 360° views that bring designs to life
            </p>
          </div>
          <div className="bg-[#FAF8F6] p-6 rounded-lg border border-[#E8E3DE]">
            <h3 className="text-xl text-gray-900 mb-2">Detailed</h3>
            <p className="text-gray-600 text-sm">
              Zoom in to see materials, finishes, and fine details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}