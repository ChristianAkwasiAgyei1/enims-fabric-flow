import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter">ENIM COLLECTIONS</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Premium fashion curated by Prince Enim. Combining the discipline of Logistics & Transportation with the art of modern style.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Business Hours</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
              <li>Sun: Closed (Study Day)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Enim Collections. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for Prince Enim - ATU Student Entrepreneur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;