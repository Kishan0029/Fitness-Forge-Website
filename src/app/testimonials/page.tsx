import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Michael Chen",
      age: 32,
      program: "Strength Training",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
      quote: "I've been training at Fitness Forge for 2 years now and the results speak for themselves. Lost 40 lbs, gained incredible strength, and found a community that keeps me motivated every single day.",
      rating: 5,
      achievement: "Lost 40 lbs, Gained 15 lbs Muscle"
    },
    {
      name: "Sarah Martinez",
      age: 28,
      program: "CrossFit",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      quote: "The trainers here are absolutely phenomenal. They pushed me beyond what I thought was possible. I'm now competing in CrossFit competitions and loving every minute of it!",
      rating: 5,
      achievement: "From Beginner to Competitor"
    },
    {
      name: "David Thompson",
      age: 45,
      program: "Personal Training",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80",
      quote: "At 45, I thought my best days were behind me. Fitness Forge proved me wrong. My personal trainer created a program that worked around my old injuries and I'm now in the best shape of my life.",
      rating: 5,
      achievement: "Best Shape at 45"
    },
    {
      name: "Jessica Lee",
      age: 35,
      program: "Zumba & Nutrition",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
      quote: "The combination of Zumba classes and nutrition coaching changed my life. I lost 50 lbs while having fun! The community here is so supportive and encouraging.",
      rating: 5,
      achievement: "Lost 50 lbs in 8 Months"
    },
    {
      name: "Marcus Johnson",
      age: 27,
      program: "Strength Training",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80",
      quote: "Coming from a college athlete background, I needed a gym that could match my intensity. Fitness Forge exceeded all expectations. The equipment, the trainers, the atmosphere—everything is top tier.",
      rating: 5,
      achievement: "Deadlift PR: 500 lbs"
    },
    {
      name: "Emily Rodriguez",
      age: 29,
      program: "Personal Training",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      quote: "I was intimidated by gyms before joining Fitness Forge. The staff made me feel welcome from day one. Now I'm confident, strong, and actually look forward to my workouts!",
      rating: 5,
      achievement: "From Intimidated to Confident"
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
            SUCCESS STORIES
          </h1>
          <p className="text-xl text-[var(--gym-red)] font-bold">
            Real People. Real Results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">1000+</div>
              <div className="text-lg text-[var(--gym-grey)]">Transformations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">50K+</div>
              <div className="text-lg text-[var(--gym-grey)]">Pounds Lost</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">98%</div>
              <div className="text-lg text-[var(--gym-grey)]">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--gym-red)] mb-2">4.9/5</div>
              <div className="text-lg text-[var(--gym-grey)]">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">HEAR FROM OUR MEMBERS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Their journeys, their victories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-8 border-2 hover:border-[var(--gym-red)] hover:shadow-xl transition-all">
                <Quote className="w-12 h-12 text-[var(--gym-red)]/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[var(--gym-red)] fill-current" />
                  ))}
                </div>
                <p className="text-[var(--gym-grey)] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-[var(--gym-grey)]">{testimonial.age} years old</p>
                  </div>
                </div>
                <div className="border-t border-[var(--gym-grey)]/20 pt-4">
                  <p className="text-sm text-[var(--gym-grey)] mb-1">Program: <span className="font-semibold text-black">{testimonial.program}</span></p>
                  <p className="text-sm font-bold text-[var(--gym-red)]">{testimonial.achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gym-red)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">READY TO WRITE YOUR SUCCESS STORY?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and become our next transformation success story
          </p>
          <a href="/join">
            <button className="bg-black hover:bg-black/90 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all">
              START YOUR JOURNEY
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}