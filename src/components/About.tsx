import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Truck, Shirt, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Man Behind the Brand</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I am Prince Enim, a dedicated student at the <strong>Accra Technical University</strong> studying <strong>Logistics and Transportation</strong>. 
              My journey began with a passion for high-quality fabrics and a dream to provide affordable yet premium clothing to the youth of Ghana.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <GraduationCap className="text-blue-600" />,
                  title: "ATU Scholar",
                  desc: "Applying logistics principles to optimize supply chain."
                },
                {
                  icon: <Truck className="text-blue-600" />,
                  title: "Logistics Expert",
                  desc: "Ensuring every delivery is swift and secure."
                },
                {
                  icon: <Shirt className="text-blue-600" />,
                  title: "Fashion Curator",
                  desc: "Selecting only the finest materials for you."
                },
                {
                  icon: <BookOpen className="text-blue-600" />,
                  title: "Constant Learner",
                  desc: "Growing the business while mastering my craft."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/brand-logo-988b1ea6-1770587270325.webp" 
                alt="Brand Identity" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-3xl text-white hidden md:block">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Customer Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;