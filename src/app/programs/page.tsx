import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dumbbell, Zap, Music, User, Apple, CheckCircle } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      icon: Dumbbell,
      title: "STRENGTH TRAINING",
      description: "Build muscle mass, increase strength, and transform your physique with our comprehensive strength training program.",
      features: ["Free Weights", "Olympic Lifting", "Powerlifting", "Progressive Overload"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
    },
    {
      icon: Zap,
      title: "CROSSFIT",
      description: "High-intensity functional fitness that combines weightlifting, cardio, and gymnastics for total body conditioning.",
      features: ["WODs", "Olympic Lifts", "Metabolic Conditioning", "Skill Development"],
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80"
    },
    {
      icon: Music,
      title: "ZUMBA",
      description: "Dance your way to fitness with our energetic Zumba classes. Fun, effective cardio that doesn't feel like work.",
      features: ["Latin-Inspired Dance", "Cardio Workout", "Full Body Movement", "Group Energy"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
    },
    {
      icon: User,
      title: "PERSONAL TRAINING",
      description: "One-on-one coaching tailored to your specific goals, fitness level, and schedule. Get personalized attention and faster results.",
      features: ["Custom Programs", "Form Correction", "Goal Setting", "Accountability"],
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
    },
    {
      icon: Apple,
      title: "NUTRITION PLANS",
      description: "Expert nutrition guidance to fuel your workouts and optimize your results. Sustainable eating plans that fit your lifestyle.",
      features: ["Meal Planning", "Macro Tracking", "Supplement Advice", "Body Composition Analysis"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
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
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            OUR PROGRAMS
          </h1>
          <p className="text-xl text-[var(--gym-red)] font-bold">
            Find Your Perfect Fitness Path
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={program.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-black">{program.title}</h2>
                    </div>
                    <p className="text-lg text-[var(--gym-grey)] mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--gym-red)]" />
                          <span className="text-[var(--gym-grey)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/join">
                      <Button className="bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold px-8 py-6 text-lg rounded-lg">
                        GET STARTED
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?</h2>
          <p className="text-xl mb-8 text-[var(--gym-grey)]">
            Book a free consultation with one of our expert trainers to find your perfect fit
          </p>
          <Link href="/contact">
            <Button className="bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold px-8 py-6 text-lg rounded-lg">
              BOOK FREE CONSULTATION
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}