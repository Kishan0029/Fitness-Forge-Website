"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Dumbbell, Users, Award, TrendingUp, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Droplets, Wind, Car } from "lucide-react";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Dumbbell,
      title: "EQUIPMENT",
      description: "All equipment seen in fitness videos, most spacious gym in Belgaum"
    },
    {
      icon: Users,
      title: "EXPERT TRAINERS",
      description: "Exceptional and knowledgeable trainers dedicated to your success"
    },
    {
      icon: Award,
      title: "PRISTINE FACILITIES",
      description: "Meticulously cleaned, well-maintained, with continuous fresh air ventilation"
    },
    {
      icon: TrendingUp,
      title: "NATURE & POOL",
      description: "Only gym in town close to nature with swimming pool facility"
    },
    {
      icon: CheckCircle,
      title: "DIET CAFE ACCESS",
      description: "On-site nutrition cafe for healthy meals and supplements"
    },
    {
      icon: Award,
      title: "BODY COMPOSITION ANALYZER",
      description: "Advanced technology to track your fitness progress accurately"
    },
    {
      icon: Dumbbell,
      title: "SUPPLEMENT STORE",
      description: "Quality supplements and nutrition products available on-site"
    },
    {
      icon: Wind,
      title: "FULL BODY STEAM",
      description: "Relax and rejuvenate with our full body steam facility"
    },
    {
      icon: Droplets,
      title: "SHOWER FACILITIES",
      description: "Normal and hot shower options for your comfort"
    },
    {
      icon: Car,
      title: "PARKING SPACE",
      description: "Convenient parking for both 2-wheelers and 4-wheelers"
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const gap = 24; // 6 in Tailwind = 24px
      
      // Check viewport size
      const isMobile = window.innerWidth < 768;
      const isDesktop = window.innerWidth >= 1024;
      
      if (isMobile) {
        // Mobile: 1 card visible, no gap
        const cardWidth = container.offsetWidth;
        const scrollPosition = index * cardWidth;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      } else if (isDesktop) {
        // Desktop: 1 card visible, full width
        const cardWidth = container.offsetWidth;
        const scrollPosition = index * cardWidth;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      } else {
        // Tablet: 4 cards visible, 3 gaps between
        const cardWidth = (container.offsetWidth - (gap * 3)) / 4;
        const scrollPosition = index * (cardWidth + gap);
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? features.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === features.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider"
          >
            FORGE YOUR STRENGTH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl text-[var(--gym-red)] font-bold mb-4"
          >
            Build Your Legacy.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Transform your body and mind at Fitness Forge. Where champions are made and limits are broken.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/join">
              <Button className="bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                JOIN NOW
              </Button>
            </Link>
            <Link href="/join">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg rounded-lg transition-all shadow-xs hover:scale-105">
                BOOK A FREE TRIAL
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">WHY CHOOSE FITNESS FORGE?</h2>
            <p className="text-xl text-[var(--gym-grey)]">Belgaum's premier fitness destination</p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white p-3 rounded-full shadow-xl transition-all hover:scale-110 ml-2 md:-ml-4"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white p-3 rounded-full shadow-xl transition-all hover:scale-110 mr-2 md:-mr-4"
              aria-label="Next feature"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Cards Container */}
            <div className="overflow-hidden -mx-4 md:mx-0">
              <div
                ref={scrollContainerRef}
                className="flex gap-0 md:gap-6 lg:gap-0 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full md:w-[calc((100%-72px)/4)] lg:w-full snap-center px-4 md:px-0"
                    >
                      <Card className="p-6 md:p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-[var(--gym-grey)] text-sm md:text-base flex-grow">
                          {feature.description}
                        </p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[var(--gym-red)] w-8' 
                      : 'bg-[var(--gym-grey)]/30 hover:bg-[var(--gym-grey)]/50'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">OUR PROGRAMS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Find the perfect training program for you</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer h-80"
            >
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80" 
                alt="Strength Training"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">STRENGTH TRAINING</h3>
                <p className="text-white/80 mb-4">Build muscle and increase power</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer h-80"
            >
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80" 
                alt="Functional Training"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">FUNCTIONAL TRAINING</h3>
                <p className="text-white/80 mb-4">Improve everyday movement and performance</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer h-80"
            >
              <img 
                src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&q=80" 
                alt="Kids Gymnastics"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">KIDS GYMNASTICS</h3>
                <p className="text-white/80 mb-4">Fun and safe fitness for children</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gym-red)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            READY TO START YOUR TRANSFORMATION?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Join hundreds of members who have already transformed their lives at Fitness Forge
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/join">
              <Button className="bg-black hover:bg-black/90 text-white font-bold px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all">
                GET STARTED TODAY
              </Button>
            </Link>
            <Link href="/membership">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--gym-red)] font-bold px-8 py-6 text-lg rounded-lg shadow-xs transition-all hover:scale-105">
                VIEW MEMBERSHIP PLANS
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">
                1000+
              </div>
              <div className="text-xl text-[var(--gym-grey)]">Active Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            >
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">
                10+
              </div>
              <div className="text-xl text-[var(--gym-grey)]">Expert Trainers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">
                17+
              </div>
              <div className="text-xl text-[var(--gym-grey)]">Years Trainers Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}