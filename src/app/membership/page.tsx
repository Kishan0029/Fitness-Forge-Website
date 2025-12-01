"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Info, Dumbbell, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function MembershipPage() {
  const mensPlans = [
    {
      name: "1 MONTH",
      price: 2500,
      period: "month",
      description: "Perfect for short-term commitment",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support"
      ]
    },
    {
      name: "3 MONTHS",
      price: 6250,
      period: "3 months",
      description: "Great for building consistency",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Better value than monthly"
      ]
    },
    {
      name: "6 MONTHS",
      price: 9350,
      period: "6 months",
      description: "Ideal for serious fitness goals",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Significant savings"
      ]
    },
    {
      name: "1 YEAR",
      price: 12500,
      period: "year",
      description: "Best value for dedicated members",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Priority class booking",
        "Maximum savings"
      ]
    }
  ];

  const womensStudentsPlans = [
    {
      name: "1 MONTH",
      price: 1875,
      period: "month",
      description: "Perfect for short-term commitment",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support"
      ]
    },
    {
      name: "3 MONTHS",
      price: 4750,
      period: "3 months",
      description: "Great for building consistency",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Better value than monthly"
      ]
    },
    {
      name: "6 MONTHS",
      price: 7000,
      period: "6 months",
      description: "Ideal for serious fitness goals",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Significant savings"
      ]
    },
    {
      name: "1 YEAR",
      price: 9500,
      period: "year",
      description: "Best value for dedicated members",
      features: [
        "Full gym access",
        "All equipment and facilities",
        "Locker facilities",
        "Expert trainer support",
        "Priority class booking",
        "Maximum savings"
      ]
    }
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
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
          >
            MEMBERSHIP PLANS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            Choose Your Path to Greatness
          </motion.p>
        </div>
      </section>

      {/* Men's Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">MEN'S MEMBERSHIP</h2>
            <p className="text-xl text-[var(--gym-grey)]">Flexible membership options to fit your lifestyle</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mensPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full"
              >
                <Card 
                  className="relative p-8 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-2xl transition-all h-full flex flex-col"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-[var(--gym-grey)] text-sm mb-4">{plan.description}</p>
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-5xl font-bold text-black">₹{plan.price}</span>
                    </div>
                    <span className="text-[var(--gym-grey)] text-sm">/{plan.period}</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div 
                        key={feature} 
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--gym-grey)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/join" className="mt-auto">
                    <Button className="w-full bg-black hover:bg-black/90 text-white font-bold py-6 text-lg rounded-lg hover:scale-105 transition-all">
                      JOIN NOW
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's & Students Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-5xl font-bold text-black mb-4">WOMEN'S & STUDENTS MEMBERSHIP</h2>
            <p className="text-xl text-[var(--gym-grey)] mb-4">Special pricing for women and students (below 21 years)</p>
            <div className="inline-flex items-center gap-2 bg-[var(--gym-red)]/10 border border-[var(--gym-red)]/20 rounded-lg px-4 py-2 text-sm text-[var(--gym-red)]">
              <Info className="w-4 h-4" />
              <span className="font-semibold">Student ID and Aadhar Card mandatory for student verification</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womensStudentsPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full"
              >
                <Card 
                  className="relative p-8 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-2xl transition-all h-full flex flex-col"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-[var(--gym-grey)] text-sm mb-4">{plan.description}</p>
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-5xl font-bold text-black">₹{plan.price}</span>
                    </div>
                    <span className="text-[var(--gym-grey)] text-sm">/{plan.period}</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div 
                        key={feature} 
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--gym-grey)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/join" className="mt-auto">
                    <Button className="w-full bg-black hover:bg-black/90 text-white font-bold py-6 text-lg rounded-lg hover:scale-105 transition-all">
                      JOIN NOW
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-black mb-4">PERSONAL TRAINING</h2>
            <p className="text-xl text-[var(--gym-grey)] mb-2">Starting at ₹5000/month</p>
            <p className="text-lg text-[var(--gym-grey)]">Contact us at <a href="tel:+918722584343" className="text-[var(--gym-red)] font-bold hover:underline">+91 87225 84343</a> for more details</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Technical Fitness Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="p-6 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                <div className="mb-4">
                  <div className="bg-[var(--gym-red)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">TECHNICAL FITNESS SKILLS</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--gym-grey)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Strength & Functional Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Weight Management & Fat Loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Muscle Gain & Endurance Coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>HIIT, Cross-Training & Cardiovascular Workouts</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Knowledge-Based Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="p-6 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                <div className="mb-4">
                  <div className="bg-[var(--gym-red)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">KNOWLEDGE-BASED SKILLS</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--gym-grey)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Form & Technique Correction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Basic Nutrition & Supplement Guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Injury Prevention & Body Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Custom Workout Planning & Periodization</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Client Handling Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="p-6 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                <div className="mb-4">
                  <div className="bg-[var(--gym-red)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">CLIENT HANDLING SKILLS</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--gym-grey)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Personalized Workout Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Progress Tracking & Goal Setting (SMART Goals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Client Motivation & Relationship Building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Fitness Assessments & Reporting</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Communication & Coaching Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="p-6 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                <div className="mb-4">
                  <div className="bg-[var(--gym-red)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">COMMUNICATION & COACHING</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--gym-grey)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Clear Communication & Active Listening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Exercise Demonstration & Corrective Feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Positive Reinforcement & Empathy</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Professional & Organizational Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Card className="p-6 border-2 border-[var(--gym-grey)]/20 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                <div className="mb-4">
                  <div className="bg-[var(--gym-red)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">PROFESSIONAL SKILLS</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--gym-grey)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Time Management & Session Planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Record Keeping & Confidentiality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                    <span>Punctuality, Consistency, & Discipline</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-center mb-12"
          >
            ALL PLANS INCLUDE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">No Joining Fees</h3>
                <p className="text-[var(--gym-grey)] text-sm">Start immediately with no hidden costs</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Modern Equipment</h3>
                <p className="text-[var(--gym-grey)] text-sm">State-of-the-art machines and facilities</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Free Trial</h3>
                <p className="text-[var(--gym-grey)] text-sm">Try before you commit</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Expert Trainers</h3>
                <p className="text-[var(--gym-grey)] text-sm">Professional guidance for your fitness journey</p>
              </div>
            </motion.div>
          </div>
          
          {/* Group Discount Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-12 p-6 bg-[var(--gym-red)]/10 border-2 border-[var(--gym-red)] rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-[var(--gym-red)]">GROUP DISCOUNT AVAILABLE!</h3>
            <p className="text-white text-lg">
              Special group discount for yearly memberships when 5 or more people join together
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}