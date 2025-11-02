"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Aditya Kulkarni",
      quote: "Great gym and experience, a bit expensive in general but they do offer a lot. Gym is spacious with multiple machines and equipment. I haven't found a similar spacious gym like this in Belgaum. Staff are friendly and helpful, overall a great experience.",
      rating: 5
    },
    {
      name: "Sanskruti Samant",
      quote: "Clean gym with good staff, well equipped and continuous fresh air ventilation. Preferable for Tilakwadi residents. It's just ₹1000–₹1500 more compared to other gym prices but worth it.",
      rating: 5
    },
    {
      name: "Craig Saunders",
      quote: "I have got to say that Fitness Forge is above the sun, moon and stars. All the equipment that you see on international bodybuilding videos is found there. It is very hygienic and meticulously cleaned on a regular basis. Every single trainer is excellent.",
      rating: 5
    },
    {
      name: "Vignesh S Waran",
      quote: "One of the best gyms in Belgaum. Trainers are exceptional, I have had a very good experience. I definitely recommend them to my friends and family.",
      rating: 5
    },
    {
      name: "Nikhil Morey",
      quote: "Only problem is its expensiveness ... rest all there are no complaints such. One of best equipped gyms, knowledgeable trainers ... worth the money.",
      rating: 5
    },
    {
      name: "Pankaj Gawade",
      quote: "Best gym ever experienced… good training guidance also.",
      rating: 5
    },
    {
      name: "Tejas Mirji",
      quote: "Unlike other gyms in the city, which are in the city center, this gym has parking facility and is surrounded by open landscape all around.",
      rating: 5
    },
    {
      name: "Rohit Pednekar",
      quote: "Well the only gym in town which is close to nature and has a swimming pool. This gym has more equipment than any other gym in the city.",
      rating: 5
    },
    {
      name: "Prasad Undale",
      quote: "The best and most heavily, well-equipped gym in Belgaum currently.",
      rating: 5
    },
    {
      name: "Rohan Sunthankar",
      quote: "A very clean place, well maintained gym, trainers are very nice and cooperative.",
      rating: 5
    },
    {
      name: "Audy B",
      quote: "Excellent gym with CrossFit and Yoga facilities. A must visit for fitness lovers.",
      rating: 5
    },
    {
      name: "H RJ",
      quote: "Well maintained. Knowledgeable and helpful trainers. Spacious. Bit expensive.",
      rating: 5
    },
    {
      name: "Rakesh Doshi",
      quote: "Great place and great environment for workout.",
      rating: 5
    },
    {
      name: "SOUL_NITROXX GAMING",
      quote: "Good gym.",
      rating: 5
    },
    {
      name: "Milind K",
      quote: "Good place for workout. Good ambiance.",
      rating: 5
    },
    {
      name: "Aarti Parmar",
      quote: "Very nice, awesome.",
      rating: 5
    },
    {
      name: "Parshuram Gore",
      quote: "Awesome.",
      rating: 5
    }
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const statsVariant = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, type: "spring" }
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
            SUCCESS STORIES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[var(--gym-red)] font-bold"
          >
            Real People. Real Results.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={statsVariant}>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">1000+</div>
              <div className="text-lg text-[var(--gym-grey)]">Transformations</div>
            </motion.div>
            <motion.div variants={statsVariant}>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">50K+</div>
              <div className="text-lg text-[var(--gym-grey)]">Pounds Lost</div>
            </motion.div>
            <motion.div variants={statsVariant}>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">98%</div>
              <div className="text-lg text-[var(--gym-grey)]">Satisfaction Rate</div>
            </motion.div>
            <motion.div variants={statsVariant}>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">4.9/5</div>
              <div className="text-lg text-[var(--gym-grey)]">Average Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">HEAR FROM OUR MEMBERS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Their journeys, their victories</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 border-2 hover:border-[var(--gym-red)] hover:shadow-xl transition-all h-full">
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-12 h-12 text-[var(--gym-red)] mb-4" />
                  </motion.div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-[var(--gym-red)] fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[var(--gym-grey)] mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-[var(--gym-grey)]/20 pt-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            READY TO WRITE YOUR SUCCESS STORY?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Join our community and become our next transformation success story
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="/join"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-black/90 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all"
            >
              START YOUR JOURNEY
            </motion.button>
          </motion.a>
        </div>
      </section>

      <Footer />
    </>
  );
}