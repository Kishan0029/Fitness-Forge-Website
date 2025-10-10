import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function MembershipPage() {
  const plans = [
    {
      name: "STARTER",
      price: 49,
      period: "month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access during off-peak hours",
        "Basic gym equipment access",
        "Locker room facilities",
        "1 complimentary fitness assessment",
        "Access to Zumba classes"
      ],
      popular: false
    },
    {
      name: "ATHLETE",
      price: 79,
      period: "month",
      description: "Our most popular plan for serious fitness enthusiasts",
      features: [
        "24/7 unlimited gym access",
        "All equipment and facilities",
        "Unlimited group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Guest pass (2x per month)",
        "Locker rental included"
      ],
      popular: true
    },
    {
      name: "CHAMPION",
      price: 129,
      period: "month",
      description: "Premium plan with all the extras for maximum results",
      features: [
        "Everything in Athlete plan",
        "4 personal training sessions/month",
        "Priority class booking",
        "Unlimited guest passes",
        "Free gym merchandise",
        "Body composition analysis",
        "Custom meal planning",
        "Supplement discounts (20%)"
      ],
      popular: false
    }
  ];

  const yearlyPlans = [
    {
      name: "ANNUAL ATHLETE",
      price: 790,
      period: "year",
      savings: "Save $158/year",
      description: "Our Athlete plan paid annually with 2 months free",
      features: [
        "All Athlete plan benefits",
        "2 months free (12 for price of 10)",
        "Free fitness assessment",
        "Priority support"
      ]
    },
    {
      name: "ANNUAL CHAMPION",
      price: 1290,
      period: "year",
      savings: "Save $258/year",
      description: "Our Champion plan paid annually with 2 months free",
      features: [
        "All Champion plan benefits",
        "2 months free (12 for price of 10)",
        "Free wellness package",
        "VIP status"
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
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            MEMBERSHIP PLANS
          </h1>
          <p className="text-xl text-[var(--gym-red)] font-bold">
            Choose Your Path to Greatness
          </p>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">MONTHLY PLANS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Flexible month-to-month membership options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative p-8 border-2 hover:shadow-2xl transition-all ${
                  plan.popular ? 'border-[var(--gym-red)] shadow-xl scale-105' : 'border-[var(--gym-grey)]/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--gym-red)] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--gym-grey)] text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold text-black">${plan.price}</span>
                    <span className="text-[var(--gym-grey)] mb-2">/{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--gym-grey)] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/join">
                  <Button 
                    className={`w-full font-bold py-6 text-lg rounded-lg ${
                      plan.popular 
                        ? 'bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white' 
                        : 'bg-black hover:bg-black/90 text-white'
                    }`}
                  >
                    JOIN NOW
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Plans */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ANNUAL PLANS</h2>
            <p className="text-xl text-[var(--gym-grey)]">Save big with our yearly memberships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {yearlyPlans.map((plan) => (
              <Card key={plan.name} className="bg-[var(--gym-grey)]/10 border-2 border-[var(--gym-grey)]/20 p-8 hover:border-[var(--gym-red)] hover:shadow-2xl transition-all">
                <div className="text-center mb-6">
                  <div className="inline-block bg-[var(--gym-red)] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {plan.savings}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--gym-grey)] text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-[var(--gym-grey)] mb-2">/{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--gym-grey)] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/join">
                  <Button className="w-full bg-[var(--gym-red)] hover:bg-[var(--gym-red)]/90 text-white font-bold py-6 text-lg rounded-lg">
                    JOIN NOW
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black mb-12">ALL PLANS INCLUDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">No Joining Fees</h3>
                <p className="text-[var(--gym-grey)] text-sm">Start immediately with no hidden costs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Cancel Anytime</h3>
                <p className="text-[var(--gym-grey)] text-sm">No long-term commitment required</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Free Trial</h3>
                <p className="text-[var(--gym-grey)] text-sm">Try before you commit</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[var(--gym-red)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Freeze Option</h3>
                <p className="text-[var(--gym-grey)] text-sm">Pause your membership when needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}