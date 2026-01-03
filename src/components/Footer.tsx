import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2A2420] via-[#3D3531] to-[#2A2420] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">Vishwakarma Design</h3>
            <p className="text-gray-300 mb-4">
              Creating exceptional interior and exterior designs that transform spaces and exceed expectations. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-[#C9B8A8] p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#C9B8A8] p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#C9B8A8] p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#C9B8A8] p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-[#C9B8A8] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C9B8A8] transition-colors">Services</a></li>
              <li><a href="#interior" className="hover:text-[#C9B8A8] transition-colors">Interior Design</a></li>
              <li><a href="#exterior" className="hover:text-[#C9B8A8] transition-colors">Exterior Design</a></li>
              {/* <li><a href="#panoramic" className="hover:text-[#C9B8A8] transition-colors">Panoramic Views</a></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C9B8A8]" />
                <a href="mailto:info@vishwakarmadesign.in" className="hover:text-[#C9B8A8] transition-colors">
                  info@vishwakarmadesign.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#C9B8A8]" />
                <a href="tel:+911234567890" className="hover:text-[#C9B8A8] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Vishwakarma Design. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-[#C9B8A8] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C9B8A8] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#C9B8A8] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}