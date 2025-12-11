import { motion } from 'motion/react';
import { Award, Users, Lightbulb, CheckCircle } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Lightbulb, value: '1000+', label: 'Projects Completed' },
  ];

  const features = [
    'Innovative Design Solutions',
    'Professional Team',
    'Quality Assurance',
    'On-Time Delivery',
    'Affordable Pricing',
    'Customer Satisfaction',
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">About Vishwakarma Design</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate designers dedicated to creating beautiful, functional spaces
            that reflect your unique style and needs.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 text-[#C9B8A8] mx-auto mb-4" />
              <div className="text-4xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl text-gray-900 mb-6">Why Choose Us?</h3>
              <p className="text-gray-600 mb-6">
                At Vishwakarma Design, we believe that great design is more than just aesthetics. 
                It's about creating spaces that enhance your lifestyle and bring your vision to life. 
                Our team combines creativity with technical expertise to deliver exceptional results.
              </p>
              <p className="text-gray-600">
                From conceptual design to final execution, we handle every aspect of your project 
                with professionalism and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#C9B8A8] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}