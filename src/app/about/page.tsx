import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp } from "lucide-react";

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
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            ABOUT FITNESS FORGE
          </h1>
          <p className="text-xl text-[var(--gym-red)] font-bold">
            Where Champions Are Forged
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-black mb-6">OUR STORY</h2>
              <p className="text-lg text-[var(--gym-grey)] mb-4">
                Founded in 2014, Fitness Forge began with a simple mission: to create a space where individuals could push their limits, break through barriers, and forge their strongest selves.
              </p>
              <p className="text-lg text-[var(--gym-grey)] mb-4">
                What started as a small warehouse gym has grown into a thriving community of over 5,000 members. We've witnessed countless transformations, celebrated numerous victories, and built a family that supports each other through every rep, every set, and every challenge.
              </p>
              <p className="text-lg text-[var(--gym-grey)]">
                Today, Fitness Forge stands as more than just a gym—it's a movement. A place where discipline meets determination, where strength is built both physically and mentally, and where your legacy begins.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                alt="Fitness Forge Gym"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">OUR VALUES</h2>
            <p className="text-xl text-[var(--gym-grey)]">The principles that drive us forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">DISCIPLINE</h3>
              <p className="text-[var(--gym-grey)]">
                Consistency and dedication are the keys to lasting success
              </p>
            </Card>
            <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">PASSION</h3>
              <p className="text-[var(--gym-grey)]">
                We live and breathe fitness, and it shows in everything we do
              </p>
            </Card>
            <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">COMMUNITY</h3>
              <p className="text-[var(--gym-grey)]">
                Together we're stronger, supporting each other every step
              </p>
            </Card>
            <Card className="bg-[var(--gym-grey)]/10 border-[var(--gym-grey)]/20 p-8 text-center hover:border-[var(--gym-red)] transition-all">
              <div className="bg-[var(--gym-red)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">EXCELLENCE</h3>
              <p className="text-[var(--gym-grey)]">
                We strive for excellence in training, service, and results
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Trainers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">MEET OUR TRAINERS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Expert coaches dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.name} className="overflow-hidden border-2 hover:border-[var(--gym-red)] transition-all hover:shadow-xl">
                <img 
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}