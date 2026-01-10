import { motion } from 'motion/react';
import { FlipCard } from './FlipCard';
import exampleImage from 'figma:asset/f10b5a596de90789818fabcf6e8f2e486e9e3625.png';
import kitchen2d from 'figma:asset/interior/kitchen-1-2d.png';
import kitchenRaw from 'figma:asset/interior/kitchen-1-actual.png';
import bathroom2d from 'figma:asset/interior/bathroom-2d.png';
import bathroomRaw from 'figma:asset/interior/bathroom-actual.png';

export function InteriorDesigns() {
  const designs = [
    {
      id: 1,
      title: 'Modern Kitchen',
      category: 'Kitchen',
      designImage: kitchen2d,
      actualImage: kitchenRaw,
      // useExample: true,
    },
    {
      id: 2,
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      designImage: bathroom2d,
      actualImage: bathroomRaw,
    },
    // {
    //   id: 3,
    //   title: 'Elegant Bathroom',
    //   category: 'Bathroom',
    //   designImage: 'https://images.unsplash.com/photo-1724786594096-9c87771b30bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYzNDc3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   actualImage: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0MDE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    // },
    // {
    //   id: 4,
    //   title: 'Contemporary Living Room',
    //   category: 'Living Room',
    //   designImage: 'https://images.unsplash.com/photo-1648475237029-7f853809ca14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHBsYW58ZW58MXx8fHwxNzYzNDg3MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   actualImage: 'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MzQ4MTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    // },
  ];

  return (
    <section id="interior" className="py-20 bg-[#FAF8F6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Interior Design Portfolio Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our residential and commercial interior design portfolio. Hover over each design to see the transformation from 2D plan to actual photo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                frontImage={design.useExample ? exampleImage : design.designImage}
                backImage={design.actualImage}
                frontLabel="2D Design"
                backLabel="Actual Photo"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}