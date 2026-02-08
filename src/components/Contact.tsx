import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Prince will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden relative">
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full -ml-48 -mb-48" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-blue-100 text-lg mb-10">
                Interested in our collection or have a custom request? Reach out and let's discuss how we can elevate your style.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Call/WhatsApp</p>
                    <p className="text-white font-bold text-lg">+233 55 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Location</p>
                    <p className="text-white font-bold text-lg">Accra Technical University, Ghana</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="text-white font-bold text-lg">princeenim@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your WhatsApp number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;