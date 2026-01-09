import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Thank you for your inquiry! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your dream project? Contact us today for a consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-gray-900 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Get in touch with us through any of the following methods.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#C9B8A8] p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <a href="mailto:vishwakarmadesigningsolutions@gmail.com" className="text-gray-600 hover:text-[#C9B8A8]">
                    vishwakarmadesigningsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C9B8A8] p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+917984269071" className="text-gray-600 hover:text-[#C9B8A8]">
                    +91 798-426-9071
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C9B8A8] p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 p-6 bg-[#E8E3DE] rounded-lg border border-[#D4C9C0]">
              <h4 className="text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 123 456 7890"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9B8A8] hover:bg-[#B5A394] text-gray-900"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}