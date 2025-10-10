"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gymInterior = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
  ];

  const training = [
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80"
  ];

  const transformations = [
    "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            GALLERY
          </h1>
          <p className="text-xl text-[var(--gym-red)] font-bold">
            See Where Champions Are Made
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="gym" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-14">
              <TabsTrigger value="gym" className="text-lg font-bold data-[state=active]:bg-[var(--gym-red)] data-[state=active]:text-white">
                GYM INTERIOR
              </TabsTrigger>
              <TabsTrigger value="training" className="text-lg font-bold data-[state=active]:bg-[var(--gym-red)] data-[state=active]:text-white">
                TRAINING
              </TabsTrigger>
              <TabsTrigger value="transformations" className="text-lg font-bold data-[state=active]:bg-[var(--gym-red)] data-[state=active]:text-white">
                TRANSFORMATIONS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gym">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gymInterior.map((image, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Gym interior ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {training.map((image, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Training ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transformations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transformations.map((image, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Transformation ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-[var(--gym-red)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}