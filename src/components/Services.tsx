import { motion } from 'motion/react';
import { Home, Building, Palette, PenTool, Ruler, Hammer } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces',
    },
    {
      icon: Building,
      title: 'Exterior Design',
      description: 'Stunning exterior designs that create lasting first impressions',
    },
    {
      icon: Palette,
      title: '3D Visualization',
      description: 'Realistic 3D renders to help you visualize your dream space',
    },
    {
      icon: PenTool,
      title: 'Space Planning',
      description: 'Optimal space utilization with functional and aesthetic layouts',
    },
    {
      icon: Ruler,
      title: 'Architectural Design',
      description: 'Complete architectural solutions from concept to construction',
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Transform existing spaces with our expert renovation services',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FAF8F6] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-[#E8E3DE]"
            >
              <service.icon className="w-12 h-12 text-[#C9B8A8] mb-4" />
              <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}