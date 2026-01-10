import { motion } from 'motion/react';
import { FlipCard } from './FlipCard';
import bunglow2d from 'figma:asset/exterior/bunglow-2d.png';
import bunglowRaw from 'figma:asset/exterior/bunglow-actual.png';
import bunglow2d1 from 'figma:asset/exterior/bunglow-1-2d.png';
import bunglowRaw1 from 'figma:asset/exterior/bunglow-1-actual.png';
import bunglow2d2 from 'figma:asset/exterior/bunglow-2-2d.png';
import bunglowRaw2 from 'figma:asset/exterior/bunglow-2-actual.png';

export function ExteriorDesigns() {
  const designs = [
    {
      id: 1,
      title: 'Modern Home',
      category: 'Residential',
      designImage: bunglow2d,
      actualImage: bunglowRaw,
    },
    {
      id: 2,
      title: 'Luxury Bungalow',
      category: 'Bungalow',
      designImage: bunglow2d1,
      actualImage: bunglowRaw1,
    },
    {
      id: 3,
      title: 'Contemporary Villa',
      category: 'Villa',
      designImage: bunglow2d2,
      actualImage: bunglowRaw2,
    },
  ];

  return (
    <section id="exterior" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Exterior Design Portfolio Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our stunning exterior architecture and landscaping projects. The best architectural design services in Ahmedabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FlipCard
                title={design.title}
                category={design.category}
                frontImage={design.designImage}
                backImage={design.actualImage}
                frontLabel="Layout Plan"
                backLabel="Actual Photo"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}