"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gymInterior = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/1-resized-1768320837622.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/2-resized-1768320837624.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/3-resized-1768320837629.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/4-resized-1768320837622.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/5-resized-1768320837621.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/6-resized-1768320837623.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/7-resized-1768320837622.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/8-resized-1768320837626.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/9-resized-1768320837624.webp?width=8000&height=8000&resize=contain",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/10-resized-1768320837626.webp?width=8000&height=8000&resize=contain"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/832196e6-00da-48a4-8759-95d70ba5b49d/2-resized-1768320837624.webp?width=1920&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
          >
            GALLERY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            See Where Champions Are Made
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">GYM INTERIOR</h2>
            <div className="w-24 h-1 bg-[var(--gym-red)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gymInterior.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gym interior ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <motion.button 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[var(--gym-red)] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </motion.button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={selectedImage} 
                alt="Full size"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
