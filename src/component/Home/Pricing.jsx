"use client";
import React, { useState, useEffect, useRef } from "react";

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('enterprise');
  const sectionRef = useRef(null);

  const accessTiers = [
    {
      id: 'startup',
      name: "Startup Access",
      description: "For early-stage teams building their first ML products",
      badge: "Limited Spots",
      features: [
        "Core ML pipeline tools",
        "Basic monitoring dashboard", 
        "Community support",
        "Standard integrations",
        "Up to 3 team members"
      ],
      cta: "Request Startup Access"
    },
    {
      id: 'enterprise',
      name: "Enterprise Access", 
      description: "For established teams requiring enterprise-grade capabilities",
      badge: "Most Popular",
      popular: true,
      features: [
        "Full platform access",
        "Advanced monitoring & alerts",
        "Priority support",
        "Custom integrations", 
        "Unlimited team members",
        "Dedicated success manager",
        "Custom SLAs"
      ],
      cta: "Request Enterprise Access"
    },
    {
      id: 'custom',
      name: "Custom Solution",
      description: "Tailored platform solutions for unique requirements", 
      badge: "White Glove",
      features: [
        "Fully customized platform",
        "On-premise deployment",
        "Custom security controls",
        "Dedicated infrastructure",
        "24/7 dedicated support",
        "Custom feature development",
        "Training & onboarding"
      ],
      cta: "Discuss Requirements"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Early Access
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Request Platform
            <span className="block bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
              Access
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join the exclusive beta program and be among the first to experience the next generation of ML operations.
          </p>
        </div>

        {/* Access Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {accessTiers.map((tier, idx) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-md rounded-3xl border-2 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl cursor-pointer ${
                tier.popular 
                  ? 'border-rose-200 shadow-2xl scale-105' 
                  : 'border-rose-100/50 hover:border-rose-200'
              } ${selectedPlan === tier.id ? 'ring-2 ring-rose-400' : ''} ${
                isVisible 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${600 + idx * 200}ms` }}
              onClick={() => setSelectedPlan(tier.id)}
            >
              
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {tier.badge}
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 hover:opacity-30 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative  p-8">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-6 transition-transform duration-500">
                    <span className="text-white text-2xl font-bold">
                      {tier.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
                </div>

                {/* Badge */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                    {tier.badge}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  {tier.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-xl'
                      : 'bg-rose-50 hover:bg-rose-100 text-rose-600 hover:shadow-lg'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-rose-50/50 to-rose-100/50 rounded-3xl p-8 border border-rose-100/50">
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Tell us about your team and we'll get you set up with the right access level.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Team Size</label>
                  <select className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300">
                    <option>1-5 people</option>
                    <option>6-20 people</option>
                    <option>21-100 people</option>
                    <option>100+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your ML use case</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
                  placeholder="Describe your current ML challenges and what you're looking to achieve..."
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-full hover:from-rose-500 hover:to-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <span>Submit Access Request</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within 24 hours</span>
                </div>
                <p>We'll review your request and get back to you with next steps.</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}



export default Pricing