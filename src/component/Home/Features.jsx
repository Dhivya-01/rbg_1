"use client";
import React, { useState, useEffect, useRef } from "react";

export function Features() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  const features = [
    {
      icon: "🔄",
      title: "Automated ML Pipelines",
      description: "Build, test, and deploy ML models with zero-downtime automated pipelines",
      color: "from-blue-500 to-cyan-500",
      stats: "90% faster deployment"
    },
    {
      icon: "📊",
      title: "Real-time Monitoring",
      description: "Track model performance, data drift, and system health in real-time",
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "SOC2 compliant with end-to-end encryption and role-based access control",
      color: "from-purple-500 to-violet-500",
      stats: "Bank-grade security"
    },
    {
      icon: "🚀",
      title: "Auto-scaling Infrastructure",
      description: "Dynamically scale your ML workloads based on demand and usage patterns",
      color: "from-orange-500 to-red-500",
      stats: "Scale to millions"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Share models, experiments, and insights across your entire ML team",
      color: "from-red-500 to-rose-500",
      stats: "Used by 2K+ teams"
    },
    {
      icon: "🔗",
      title: "Universal Integrations",
      description: "Connect with 100+ tools including AWS, GCP, Azure, and popular ML frameworks",
      color: "from-indigo-500 to-purple-500",
      stats: "100+ integrations"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.feature-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50/30 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-rose-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚡ Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="block bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
              ML Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From model development to production deployment, our platform provides all the tools your team needs to succeed in machine learning operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`feature-item group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 ${
                visibleItems.has(idx) 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ anFeaturesimationDelay: `${idx * 150}ms` }}
            >
              
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Feature Content */}
              <div className="relative ">
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-opacity-10 px-3 py-1 rounded-full text-sm font-semibold`}>
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full animate-pulse`}></div>
                  {feature.stats}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full hover:from-rose-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
            <span>Explore All Features</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
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
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}



export default Features