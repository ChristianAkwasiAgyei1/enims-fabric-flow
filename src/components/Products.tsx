import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Street Tee",
    category: "Casual Wear",
    price: "GH₵ 120",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/clothing-collection-1-af101830-1770587263974.webp"
  },
  {
    id: 2,
    name: "Executive Polos",
    category: "Formal",
    price: "GH₵ 180",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/clothing-collection-2-d461f4e0-1770587263954.webp"
  },
  {
    id: 3,
    name: "Urban Cargo Pants",
    category: "Streetwear",
    price: "GH₵ 250",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/clothing-collection-1-af101830-1770587263974.webp"
  },
  {
    id: 4,
    name: "Signature Collection",
    category: "Limited Edition",
    price: "GH₵ 300",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/hero-prince-60c8a5a5-1770587263269.webp"
  }
];

const Products = () => {
  return (
    <section id="collection" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Collection</h2>
            <p className="mt-2 text-gray-500">Carefully curated styles for the modern individual.</p>
          </div>
          <button className="mt-6 md:mt-0 text-blue-600 font-semibold flex items-center hover:underline">
            View All Products <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    <Tag className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;