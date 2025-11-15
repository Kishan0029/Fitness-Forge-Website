"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dumbbell, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
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
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg rounded-lg transition-all shadow-xs hover:scale-105">
                BOOK A FREE TRIAL
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">WHY CHOOSE FITNESS FORGE?</h2>
            <p className="text-xl text-[var(--gym-grey)]">Belgaum's premier fitness destination</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Dumbbell className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">EQUIPMENT</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  All equipment seen in fitness videos, most spacious gym in Belgaum
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">EXPERT TRAINERS</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  Exceptional and knowledgeable trainers dedicated to your success
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">PRISTINE FACILITIES</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  Meticulously cleaned, well-maintained, with continuous fresh air ventilation
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">NATURE & POOL</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  Only gym in town close to nature with swimming pool and parking facility
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">DIET CAFE ACCESS</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  On-site nutrition cafe for healthy meals and supplements
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">BODY COMPOSITION ANALYZER</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  Advanced technology to track your fitness progress accurately
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="h-full"
            >
              <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl h-full flex flex-col">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Dumbbell className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">SUPPLEMENT STORE</h3>
                <p className="text-[var(--gym-grey)] flex-grow">
                  Quality supplements and nutrition products available on-site
                </p>
              </Card>
            </motion.div>
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
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80" 
                alt="Strength Training"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">STRENGTH TRAINING</h3>
                <p className="text-[var(--gym-grey)] mb-4">Build muscle and increase power</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80" 
                alt="Functional Training"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">FUNCTIONAL TRAINING</h3>
                <p className="text-[var(--gym-grey)] mb-4">Improve everyday movement and performance</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1599447292325-8fcfb6a6136e?w=600&q=80" 
                alt="Kids Gymnastics"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">KIDS GYMNASTICS</h3>
                <p className="text-[var(--gym-grey)] mb-4">Fun and safe fitness for children</p>
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