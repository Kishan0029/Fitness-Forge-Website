"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dumbbell, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

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
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
            FORGE YOUR STRENGTH
          </h1>
          <p className="text-2xl md:text-4xl text-[var(--gym-red)] font-bold mb-4">
            Build Your Legacy.
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your body and mind at Fitness Forge. Where champions are made and limits are broken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button className="bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
                JOIN NOW
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg rounded-lg transition-all shadow-xs">
                BOOK A FREE TRIAL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">WHY CHOOSE FITNESS FORGE?</h2>
            <p className="text-xl text-[var(--gym-grey)]">We deliver results that matter</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">EXPERT TRAINERS</h3>
              <p className="text-[var(--gym-grey)]">
                Certified professionals dedicated to your success
              </p>
            </Card>
            <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">COMMUNITY</h3>
              <p className="text-[var(--gym-grey)]">
                Join a supportive family that pushes you forward
              </p>
            </Card>
            <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">TOP EQUIPMENT</h3>
              <p className="text-[var(--gym-grey)]">
                State-of-the-art facilities and modern equipment
              </p>
            </Card>
            <Card className="p-8 text-center border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">PROVEN RESULTS</h3>
              <p className="text-[var(--gym-grey)]">
                Track your progress and achieve your goals
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">OUR PROGRAMS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Find the perfect training program for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80" 
                alt="Strength Training"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">STRENGTH TRAINING</h3>
                <p className="text-[var(--gym-grey)] mb-4">Build muscle and increase power</p>
                <Link href="/programs">
                  <Button variant="outline" className="border-[var(--gym-red)] text-[var(--gym-red)] hover:bg-[var(--gym-red)] hover:text-white w-fit">
                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&q=80" 
                alt="CrossFit"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">CROSSFIT</h3>
                <p className="text-[var(--gym-grey)] mb-4">High-intensity functional fitness</p>
                <Link href="/programs">
                  <Button variant="outline" className="border-[var(--gym-red)] text-[var(--gym-red)] hover:bg-[var(--gym-red)] hover:text-white w-fit">
                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80" 
                alt="Personal Training"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold mb-2">PERSONAL TRAINING</h3>
                <p className="text-[var(--gym-grey)] mb-4">One-on-one customized coaching</p>
                <Link href="/programs">
                  <Button variant="outline" className="border-[var(--gym-red)] text-[var(--gym-red)] hover:bg-[var(--gym-red)] hover:text-white w-fit">
                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gym-red)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">READY TO START YOUR TRANSFORMATION?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of members who have already transformed their lives at Fitness Forge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button className="bg-black hover:bg-black/90 text-white font-bold px-8 py-6 text-lg rounded-lg">
                GET STARTED TODAY
              </Button>
            </Link>
            <Link href="/membership">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--gym-red)] font-bold px-8 py-6 text-lg rounded-lg shadow-xs transition-all">
                VIEW MEMBERSHIP PLANS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">5000+</div>
              <div className="text-xl text-[var(--gym-grey)]">Active Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">50+</div>
              <div className="text-xl text-[var(--gym-grey)]">Expert Trainers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">10+</div>
              <div className="text-xl text-[var(--gym-grey)]">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">24/7</div>
              <div className="text-xl text-[var(--gym-grey)]">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}