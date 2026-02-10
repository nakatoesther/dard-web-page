import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const navigation = {
  services: [
    { name: 'Profiling', href: '#' },
    { name: 'Field Force', href: '#' },
    { name: 'SME Zone', href: '#' },
    { name: 'Fertilizer Tool', href: '#' },
    { name: 'Market Linkages', href: '#' },
  ],
  company: [
    { name: 'How It Works', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Impact', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/axiomzorn/', icon: Linkedin },
    { name: 'Twitter/X', href: 'https://x.com/AxiomZorn', icon: () => <span className="font-bold text-xs">X</span> },
    { name: 'Facebook', href: 'https://www.instagram.com/p/C6V20ZRtpDx/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/p/C6V20ZRtpDx/', icon: Instagram },
  ],
};

const DARBFooter: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-6">
              {/* Splitting DARB into two colors to match the previous logo style */}
              <span className="text-white text-3xl font-bold tracking-tighter">DA</span>
              <span className="text-[#ff6b35] text-3xl font-bold tracking-tighter">RB</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-gray-300">
              Digital Agricultural Reference Bureau - Empowering farmers and agribusinesses through smart data solutions.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}><a href={item.href} className="hover:text-white transition-colors text-sm">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}><a href={item.href} className="hover:text-white transition-colors text-sm">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
            <ul className="space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}><a href={item.href} className="hover:text-white transition-colors text-sm">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-[#ff6b35]" />
                <a href="mailto:info@darbdata.com" className="hover:text-white text-sm break-all">
                  info@darbdata.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#ff6b35]" />
                <a href="tel:+256200903099" className="hover:text-white text-sm">+256 200 903 099</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} DARB Data. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DARBFooter;