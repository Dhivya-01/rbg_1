// "use client";
// import React, { useState, useEffect, useRef } from "react";

// export function Proof() {
//   const [visibleItems, setVisibleItems] = useState(new Set());
//   const [counters, setCounters] = useState({});
//   const sectionRef = useRef(null);

//   const stats = [
//     {
//       icon: "⚡",
//       value: 40,
//       suffix: "%",
//       label: "Faster Deployment",
//       description: "Reduce model deployment time from weeks to hours"
//     },
//     {
//       icon: "🎯",
//       value: 99.9,
//       suffix: "%",
//       label: "Platform Uptime",
//       description: "Enterprise-grade reliability and performance"
//     },
//     {
//       icon: "🔄",
//       value: 500,
//       suffix: "+",
//       label: "Models Managed",
//       description: "Successfully deployed and monitored models"
//     },
//     {
//       icon: "🌍",
//       value: 25,
//       suffix: "+",
//       label: "Enterprise Clients",
//       description: "Trusted by leading organizations worldwide"
//     }
//   ];

//   const benefits = [
//     {
//       title: "Enterprise Security",
//       description: "Bank-grade security with SOC2 compliance and end-to-end encryption",
//       icon: "🔒"
//     },
//     {
//       title: "Scalable Infrastructure",
//       description: "Auto-scaling cloud infrastructure that grows with your business",
//       icon: "📈"
//     },
//     {
//       title: "24/7 Monitoring",
//       description: "Continuous monitoring with intelligent alerts and anomaly detection",
//       icon: "👁️"
//     },
//     {
//       title: "Expert Support",
//       description: "Dedicated support from ML engineers and platform specialists",
//       icon: "🎧"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute('data-index'));
//             setVisibleItems(prev => new Set(prev).add(index));
            
//             // Start counter animation for stats
//             if (entry.target.classList.contains('stat-item')) {
//               const targetValue = stats[index].value;
//               let currentValue = 0;
//               const increment = targetValue / 60; // 60 frames for smooth animation
              
//               const timer = setInterval(() => {
//                 currentValue += increment;
//                 if (currentValue >= targetValue) {
//                   currentValue = targetValue;
//                   clearInterval(timer);
//                 }
//                 setCounters(prev => ({
//                   ...prev,
//                   [index]: Math.floor(currentValue * 10) / 10
//                 }));
//               }, 16); // ~60fps
//             }
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const items = sectionRef.current?.querySelectorAll('.animated-item');
//     items?.forEach(item => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 bg-gradient-to-br from-red-25 via-white to-red-50 relative overflow-hidden">
      
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             📊 Platform Performance
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Built for
//             <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//               Performance & Scale
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our platform delivers measurable results with enterprise-grade performance and reliability.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               data-index={idx}
//               className={`stat-item animated-item text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100/50 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
//                 visibleItems.has(idx) 
//                   ? 'animate-fade-in-up opacity-100' 
//                   : 'opacity-0 translate-y-10'
//               }`}
//               style={{ animationDelay: `${idx * 200}ms` }}
//             >
//               <div className="text-4xl mb-4 animate-bounce">{stat.icon}</div>
//               <div className="text-4xl font-bold text-gray-900 mb-2">
//                 {counters[idx] || 0}{stat.suffix}
//               </div>
//               <div className="text-lg font-semibold text-red-600 mb-2">{stat.label}</div>
//               <div className="text-sm text-gray-600">{stat.description}</div>
//             </div>
//           ))}
//         </div>

//         {/* Benefits Section */}
//         <div className="max-w-5xl mx-auto">
//           <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-red-100/50">
            
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                 Why Enterprise Teams Choose MLloOps
//               </h3>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Built specifically for enterprise ML teams who need reliability, security, and scalability.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {benefits.map((benefit, idx) => (
//                 <div
//                   key={idx}
//                   data-index={idx + 10}
//                   className={`animated-item flex items-start gap-4 p-6 bg-gradient-to-br from-red-50/50 to-red-100/50 rounded-2xl border border-red-100/30 hover:shadow-lg transition-all duration-500 ${
//                     visibleItems.has(idx + 10) 
//                       ? 'animate-slide-in-left opacity-100' 
//                       : 'opacity-0 translate-x-10'
//                   }`}
//                   style={{ animationDelay: `${(idx + 4) * 200}ms` }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
//                     {benefit.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
//                     <p className="text-gray-600">{benefit.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="text-center mt-12 pt-8 border-t border-red-100">
//               <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
//                 <span>Request Enterprise Demo</span>
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
//             </div>
//           </div>
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
        
//         @keyframes slide-in-left {
//           0% {
//             opacity: 0;
//             transform: translateX(40px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s ease-out forwards;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
        
//         .from-red-25 {
//           background-color: #fefcfc;
//         }
//       `}</style>
//     </section>
//   );
// }



// export default Proof











"use client";
import React, { useState, useEffect, useRef } from "react";
import { Zap, Target, RotateCcw, Globe, Shield, TrendingUp, Eye, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Proof({ 
  withGlow = true,
  className 
}) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Zap,
      value: 40,
      suffix: "%",
      label: "Faster Deployment",
      description: "Launch and scale models quickly with MLStack APIs."
    },
    {
      icon: Target,
      value: 99.9,
      suffix: "%",
      label: "Platform Uptime",
      description: "Built-in compliance, audit logs, and governance."
    },
    {
      icon: RotateCcw,
      value: 500,
      suffix: "+",
      label: "Models Managed", description: "Human feedback keeps models improving."
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Enterprise Clients",
      description: "Run on cloud, on-premise, or hybrid setups."
    }
  ];

  const benefits = [
    {
      title: "Human + AI Synergy",
      description: "AI accelerates tasks, while human expertise ensures accuracy when it matters most.",
      icon: Shield
    },
    {
      title: "Confidence with Oversight",
      description: "Maker–Checker design routes low-confidence cases to people for review and learning.",
      icon: TrendingUp
    },
    {
      title: "Designed for Real Workflows",
      description: "Built for industries where errors have real human and business consequences.",
      icon: Eye
    },
    {
      title: "Learning from People",
      description: "Every correction by reviewers’ strength",
      icon: Headphones
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => new Set(prev).add(index));
            
            // Start counter animation for stats
            if (entry.target.classList.contains('stat-item')) {
              const targetValue = stats[index].value;
              let currentValue = 0;
              const increment = targetValue / 60; // 60 frames for smooth animation
              
              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [index]: Math.floor(currentValue * 10) / 10
                }));
              }, 16); // ~60fps
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('.animated-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={cn("overflow-hidden py-20", className)}>
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-muted-foreground">Platform Performance</span>
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Built for
            <span className="block text-muted-foreground mt-2">
              Performance & Scale
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform is engineered for speed, reliability, and enterprise-grade scalability — so your critical processes run without compromise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                data-index={idx}
                className={`stat-item animated-item relative text-center p-8 bg-background rounded-xl border hover:border-foreground/20 transition-all duration-300 group ${
                  visibleItems.has(idx) 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-muted rounded-lg group-hover:bg-muted/80 transition-colors">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {counters[idx] || 0}{stat.suffix}
                </div>
                <div className="text-base font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
                
                {/* Individual card glow effect */}
                {withGlow && (
                  <div className="pointer-events-none absolute inset-0 rounded-xl shadow-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border">
            
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
                Why Enterprises Choose MLloOps™
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Purpose-built for enterprises that demand accuracy, compliance, and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    data-index={idx + 10}
                    className={`animated-item relative flex items-start gap-4 p-6 bg-muted/50 rounded-xl border hover:bg-muted/80 transition-all duration-300 group ${
                      visibleItems.has(idx + 10) 
                        ? 'animate-slide-in-left opacity-100' 
                        : 'opacity-0 translate-x-10'
                    }`}
                    style={{ animationDelay: `${(idx + 4) * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center border flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                    
                    {/* Individual benefit glow effect */}
                    {withGlow && (
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t">
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <a href="#demo">
                  <span>Request Enterprise Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </div>

            {/* Main container glow effect */}
            {withGlow && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-30" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Proof;