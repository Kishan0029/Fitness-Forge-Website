"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Dumbbell, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipPlan: "",
    goals: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the terms and conditions");
      return;
    }
    alert("Welcome to Fitness Forge! We'll contact you shortly to complete your registration.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      membershipPlan: "",
      goals: "",
      agreed: false
    });
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
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
          >
            JOIN FITNESS FORGE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            Your Transformation Starts Today
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            WHY JOIN TODAY?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Dumbbell className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">FREE TRIAL INCLUDED</h3>
              <p className="text-white/70">Try us out before committing</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">NO JOINING FEES</h3>
              <p className="text-white/70">Start immediately with no extra costs</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">PERSONAL ORIENTATION</h3>
              <p className="text-white/70">Free gym tour and equipment training</p>
            </motion.div>
          </div>
        </div>
      </section>

      "use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipPlan: "",
    goals: "",
    agreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formcarry.com/s/0inUlLiqrXw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you! Your registration has been submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          membershipPlan: "",
          goals: "",
          agreed: false,
        });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form. Please try again later.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 md:p-12 border-2">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-black mb-4">START YOUR MEMBERSHIP</h2>
              <p className="text-lg text-[var(--gym-grey)]">
                Fill out the form below and we'll get you started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-base font-bold">
                    FIRST NAME *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base font-bold">
                    LAST NAME *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-bold">
                  EMAIL ADDRESS *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-bold">
                  PHONE NUMBER *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label
                  htmlFor="membershipPlan"
                  className="text-base font-bold"
                >
                  SELECT MEMBERSHIP PLAN *
                </Label>
                <Select
                  value={formData.membershipPlan}
                  onValueChange={(value) =>
                    setFormData({ ...formData, membershipPlan: value })
                  }
                >
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Choose your plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">STARTER - $49/month</SelectItem>
                    <SelectItem value="athlete">
                      ATHLETE - $79/month (Most Popular)
                    </SelectItem>
                    <SelectItem value="champion">
                      CHAMPION - $129/month
                    </SelectItem>
                    <SelectItem value="annual-athlete">
                      ANNUAL ATHLETE - $790/year
                    </SelectItem>
                    <SelectItem value="annual-champion">
                      ANNUAL CHAMPION - $1290/year
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goals" className="text-base font-bold">
                  FITNESS GOALS *
                </Label>
                <Select
                  value={formData.goals}
                  onValueChange={(value) =>
                    setFormData({ ...formData, goals: value })
                  }
                >
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="What's your primary goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="strength">Increase Strength</SelectItem>
                    <SelectItem value="endurance">Build Endurance</SelectItem>
                    <SelectItem value="general-fitness">
                      General Fitness
                    </SelectItem>
                    <SelectItem value="competition">
                      Competition Training
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[var(--gym-grey)]/10 rounded-lg">
                <Checkbox
                  id="terms"
                  checked={formData.agreed}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreed: checked as boolean })
                  }
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-[var(--gym-grey)] cursor-pointer"
                >
                  I agree to the terms and conditions, privacy policy, and
                  membership agreement. I understand that I can cancel anytime
                  with 30 days notice.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold py-6 text-lg rounded-lg hover:scale-105 transition-all"
              >
                COMPLETE REGISTRATION
              </Button>

              <p className="text-center text-sm text-[var(--gym-grey)]">
                Questions? Call us at (555) 123-4567 or email info@fitnessforge.com
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}


      {/* What Happens Next */}
      <section className="py-20 bg-[var(--gym-grey)]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
          >
            WHAT HAPPENS NEXT?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[var(--gym-red)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                >
                  1
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-black">CONFIRMATION</h3>
                <p className="text-black/60">You'll receive a confirmation email with your membership details</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[var(--gym-red)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                >
                  2
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-black">ORIENTATION</h3>
                <p className="text-black/60">Schedule your free gym tour and equipment training session</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[var(--gym-red)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                >
                  3
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-black">START TRAINING</h3>
                <p className="text-black/60">Begin your transformation journey with full access to all facilities</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}