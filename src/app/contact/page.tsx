"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
          >
            CONTACT US
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            We're Here to Help You Start Your Journey
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-4xl font-bold text-black mb-8"
              >
                GET IN TOUCH
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-lg text-[var(--gym-grey)] mb-8"
              >
                Have questions? Want to book a free trial? We'd love to hear from you. Reach out to us using any of the methods below.
              </motion.p>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <Card className="p-6 border-2 hover:border-[var(--gym-red)] transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-[var(--gym-red)] p-3 rounded-lg"
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">ADDRESS</h3>
                        <p className="text-[var(--gym-grey)]">
                          Dwarka Nagar, Godse Nagar<br />
                          Belagavi, Karnataka 590006
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Card className="p-6 border-2 hover:border-[var(--gym-red)] transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-[var(--gym-red)] p-3 rounded-lg"
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">PHONE</h3>
                        <p className="text-[var(--gym-grey)]">8722584343</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <Card className="p-6 border-2 hover:border-[var(--gym-red)] transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-[var(--gym-red)] p-3 rounded-lg"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">EMAIL</h3>
                        <p className="text-[var(--gym-grey)]">info@fitnessforge.com</p>
                        <p className="text-sm text-[var(--gym-grey)]">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Card className="p-6 border-2 hover:border-[var(--gym-red)] transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-[var(--gym-red)] p-3 rounded-lg"
                      >
                        <Clock className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">GYM HOURS</h3>
                        <p className="text-[var(--gym-grey)]">
                          Mon - Sat: 6:00 AM - 11:30 AM<br />
                          Mon - Sat: 4:00 PM - 10:00 PM<br />
                          Sunday: Holiday
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 border-2">
                <h2 className="text-3xl font-bold text-black mb-6">SEND US A MESSAGE</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-bold">NAME *</Label>
                    <Input 
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-bold">EMAIL *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-bold">PHONE</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="8722584343"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-bold">MESSAGE *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your fitness goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="mt-2 min-h-[150px]"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold py-6 text-lg rounded-lg hover:scale-105 transition-all"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[500px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3827.5437822!2d74.48949!3d15.837185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDUwJzEzLjkiTiA3NMKwMjknMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fitness Forge Location"
        />
      </section>

      <Footer />
    </>
  );
}