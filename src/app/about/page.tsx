"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const trainers = [
    {
      name: "Marcus Steel",
      role: "Head Strength Coach",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
      specialty: "Powerlifting & Olympic Lifting"
    },
    {
      name: "Sarah Phoenix",
      role: "CrossFit Director",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
      specialty: "CrossFit & HIIT Training"
    },
    {
      name: "David Forge",
      role: "Personal Training Lead",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      specialty: "Body Transformation"
    },
    {
      name: "Jessica Blaze",
      role: "Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      specialty: "Sports Nutrition & Meal Planning"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
          >
            ABOUT FITNESS FORGE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            Where Champions Are Forged
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-black mb-6">OUR STORY</h2>
              <p className="text-lg text-[var(--gym-grey)] mb-4">
                Founded in 2018, Fitness Forge began with a simple mission: to build a space where individuals could push their limits, break barriers, and forge their strongest selves.
              </p>
              <p className="text-lg text-[var(--gym-grey)] mb-4">
                What started as a 4800 sq. ft. gym has grown into a powerful fitness community that continues to expand. Over the years, we've upgraded, evolved, and transformed—now standing proudly as a 6500 sq. ft. state-of-the-art training facility. We've seen incredible journeys, celebrated real progress, and built a family that supports each other through every rep, every set, and every challenge.
              </p>
              <p className="text-lg text-[var(--gym-grey)]">
                Today, Fitness Forge is more than just a gym—it's a movement. A place where discipline meets determination, where strength is built inside and out, and where your transformation truly begins.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                alt="Fitness Forge Gym"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">OUR VALUES</h2>
            <p className="text-xl text-[var(--gym-grey)]">The principles that drive us forward</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">DISCIPLINE</h3>
                <p className="text-[var(--gym-grey)]">
                  Consistency and dedication are the keys to lasting success
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">PASSION</h3>
                <p className="text-[var(--gym-grey)]">
                  We live and breathe fitness, and it shows in everything we do
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">COMMUNITY</h3>
                <p className="text-[var(--gym-grey)]">
                  Together we're stronger, supporting each other every step
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">EXCELLENCE</h3>
                <p className="text-[var(--gym-grey)]">
                  We strive for excellence in training, service, and results
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Trainers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">MEET OUR TRAINERS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Expert coaches dedicated to your success</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                    <p className="text-[var(--gym-red)] font-semibold mb-2">{trainer.role}</p>
                    <p className="text-[var(--gym-grey)] text-sm">{trainer.specialty}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}