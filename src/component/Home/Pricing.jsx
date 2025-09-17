// "use client";
// import React, { useState, useEffect, useRef } from "react";

// import { cn } from "@/lib/utils";

// export function Pricing() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState('enterprise');
//   const sectionRef = useRef(null);

//   const accessTiers = [
//     {
//       id: 'startup',
//       name: "Starter Plan",
//       description: "Ideal for small teams exploring AI workflows.",
//       badge: "Limited Spots",
//       features: [
//         "Essential MLloOps™ tools",
//         "Basic monitoring dashboard", 
//         "Community-driven support",
//         "Standard integrations",
//         "Access for up to 3 team members"
//       ],
//       cta: "Get Started"
//     },
//     {
//       id: 'enterprise',
//       name: "Professional Plan", 
//       description: "Designed for growing teams that need advanced capabilities.",
//       badge: "Most Popular",
//       popular: true,
//       features: [
//         "Full MLloOps™ platform access",
//         "Enhanced monitoring &amp; alerts",
//         "Priority support",
//         "Flexible integrations", 
//         "Unlimited team members",
//         "Dedicated success manager",
//         "Service-level agreements (SLAs)"
//       ],
//       cta: "Upgrade to Pro"
//     },
//     {
//       id: 'custom',
//       name: "Enterprise Plan",
//       description: "Tailored for organizations with complex or regulated needs.", 
//       badge: "White Glove",
//       features: [
//         "Fully customizable MLloOps™ platform",
//         "Deployment on cloud or on-premise",
//         "Enterprise-grade security &amp; compliance",
//         "Dedicated infrastructure",
//         "24/7 premium support",
//         "Custom feature development",
//         "TEnd-to-end training &amp; onboarding"
//       ],
//       cta: "Contact Us"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 bg-white  overflow-hidden">
      
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-20 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-3000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             🚀 Early Access
//           </div>
//           <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//             Request Platform
//             <span className="block bg-[#e63946] bg-clip-text text-transparent">
//               Access
//             </span>
//           </h2>
//           <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//             Join the exclusive beta program and be among the first to experience the next generation of ML operations.
//           </p>
//         </div>

//         {/* Access Tiers */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//           {accessTiers.map((tier, idx) => (
//             <div
//   key={tier.id}
//   className={cn(
//     "relative p-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/40 shadow-md transition-all duration-300 group hover:shadow-glow hover:border-foreground/30 cursor-pointer",
//     tier.popular ? "scale-105 ring-2 ring-red-200" : "",
//     selectedPlan === tier.id ? "border-red-200" : "",
//     isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
//   )}
//   style={{ animationDelay: `${600 + idx * 200}ms` }}
//   onClick={() => setSelectedPlan(tier.id)}
// >
              
//               {/* Popular Badge */}
//               {tier.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-red-400 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
//                     ⭐ {tier.badge}
//                   </div>
//                 </div>
//               )}

//               {/* Background Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 hover:opacity-30 rounded-3xl transition-opacity duration-500"></div>

//               <div className="relative  p-8">
                
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-white  shadow-glow rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-6 transition-transform duration-500">
//                     <span className="text-black text-2xl font-bold">
//                       {tier.name.charAt(0)}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
//                 </div>

//                 {/* Badge */}
//                 <div className="text-center mb-8">
//                   <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold">
//                     <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
//                     {tier.badge}
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="space-y-4 mb-8">
//                   <h4 className="font-semibold text-gray-900">What's included:</h4>
//                   {tier.features.map((feature, featureIdx) => (
//                     <div key={featureIdx} className="flex items-start gap-3">
//                       <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button 
//                   className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
//                     tier.popular
//                       ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-xl'
//                       : 'bg-rose-50 hover:bg-rose-100 text-rose-600 hover:shadow-lg'
//                   }`}
//                 >
//                   {tier.cta}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Request Form */}
//        <div
//   className="relative bg-background rounded-2xl p-8 md:p-12 border "
// >
//   {/* Glow effect */}
//   <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-0 opacity-100 transition-opacity duration-300" />

//   <div className="text-center mb-8">
//     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//       Ready to Get Started?
//     </h3>
//     <p className="text-gray-600">
//       Tell us about your team and we'll get you set up with the right access
//       level.
//     </p>
//   </div>

//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
//                   <input 
//                     type="email" 
//                     className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
//                     placeholder="john@company.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
//                     placeholder="Your Company"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Team Size</label>
//                   <select className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300">
//                     <option>1-5 people</option>
//                     <option>6-20 people</option>
//                     <option>21-100 people</option>
//                     <option>100+ people</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your ML use case</label>
//                 <textarea 
//                   rows={4}
//                   className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 transition-colors duration-300"
//                   placeholder="Describe your current ML challenges and what you're looking to achieve..."
//                 ></textarea>
//               </div>

//               <div className="text-center">
//                 <button 
//                   type="submit"
//                   className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-full hover:from-rose-500 hover:to-rose-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
//                 >
//                   <span>Submit Access Request</span>
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-500">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Response within 24 hours</span>
//                 </div>
//                 <p>We'll review your request and get back to you with next steps.</p>
//               </div>
//             </form>
          
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }
//       `}</style>
//     </section>
//   );
// }



// export default Pricing
















import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Users, Shield, Zap, Building, Rocket } from 'lucide-react';

const UltraMinimalPricingUI = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [activeForm, setActiveForm] = useState(false);
  const sectionRef = useRef(null);

  const plans = [
    {
      id: 0,
      name: "Starter",
      desc: "Small teams",
      icon: Rocket,
      features: ["Essential tools", "Basic monitoring", "Community support", "3 members"]
    },
    {
      id: 1,
      name: "Professional", 
      desc: "Growing teams",
      icon: Building,
      badge: "Popular",
      features: ["Full platform", "Priority support", "Unlimited members", "Advanced features"]
    },
    {
      id: 2,
      name: "Enterprise",
      desc: "Large organizations",
      icon: Shield,
      features: ["Custom platform", "On-premise", "24/7 support", "White glove service"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 relative bg-background rounded-2xl p-4 md:p-12 border isolate">
        
        {/* Compact Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600 mb-4 text-lg">
            Early Access
          </div>
          <h1 className="text-4xl font-extrabold text-red-600 mb-3">Request Access</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join our beta program for next-generation ML operations
          </p>
        </div>

        {/* Compact Plan Selector */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-50 p-1 rounded-xl inline-flex w-full">
            {plans.map((plan, idx) => {
              const IconComponent = plan.icon;
              const isActive = selectedPlan === idx;
              
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(idx)}
                  className={`flex-1 relative px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-sm text-black' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <IconComponent className="w-4 h-4 text-red-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium flex items-center gap-1">
                        {plan.name}
                        {plan.badge && (
                          <span className="text-xs bg-black text-white px-1 rounded">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{plan.desc}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Features Display */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {plans[selectedPlan].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Form */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-50 rounded-xl p-6">
            
            {/* Form Toggle */}
            {!activeForm ? (
              <div className="text-center">
                <button
                  onClick={() => setActiveForm(true)}
                  className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
                >
                  Get {plans[selectedPlan].name} Access
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="mt-3 text-xs text-gray-500">
                  Response within 24 hours • No commitment required
                </div>
              </div>
            ) : (
              /* Expanded Form */
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Full name"
                  />
                  <input 
                    type="email" 
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Work email"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Company"
                  />
                  <select className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors">
                    <option>Team size</option>
                    <option>1-5</option>
                    <option>6-20</option>
                    <option>21-100</option>
                    <option>100+</option>
                  </select>
                </div>
                
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Describe your ML use case and requirements..."
                />
                
                <div className="flex items-center gap-3 pt-2">
                  <button className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Submit Request
                  </button>
                  <button 
                    onClick={() => setActiveForm(false)}
                    className="px-4 py-3 text-gray-500 hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Minimal Trust Indicators */}
        <div className={`mt-8 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>500+ teams</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>SOC 2</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>

        {/* Process Flow Indicator */}
        <div className={`mt-12 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span>Submit</span>
            </div>
            <div className="w-8 h-px bg-gray-200"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Review</span>
            </div>
            <div className="w-8 h-px bg-gray-200"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Access</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default UltraMinimalPricingUI;