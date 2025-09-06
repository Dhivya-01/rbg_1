"use client";
import React, { useState, useEffect, useRef } from "react";

export function Details() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      description: "Seamlessly integrate with your existing data sources, databases, and cloud storage solutions in minutes.",
      details: [
        "Multi-cloud support (AWS, GCP, Azure)",
        "Real-time data streaming",
        "Automated data validation",
        "Smart schema detection"
      ],
      icon: "🔗",
      color: "from-blue-500 to-cyan-500",
      image: "/api/placeholder/400/300"
    },
    {
      number: "02", 
      title: "Build & Train Models",
      description: "Use our intuitive interface or APIs to build, experiment, and train your machine learning models at scale.",
      details: [
        "Drag-and-drop model builder",
        "Auto-ML capabilities", 
        "Experiment tracking",
        "Distributed training"
      ],
      icon: "🧠",
      color: "from-purple-500 to-violet-500",
      image: "/api/placeholder/400/300"
    },
    {
      number: "03",
      title: "Deploy & Monitor", 
      description: "Deploy models to production with automated monitoring, scaling, and performance optimization.",
      details: [
        "One-click deployment",
        "Auto-scaling infrastructure",
        "Performance monitoring",
        "A/B testing capabilities"
      ],
      icon: "🚀",
      color: "from-green-500 to-emerald-500", 
      image: "/api/placeholder/400/300"
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚙️ Simple Process
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get Started in
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            From data connection to production deployment, our streamlined workflow gets you up and running in minutes, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Steps Navigation */}
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeStep === idx ? 'scale-105' : 'hover:scale-102'
                } ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 200}ms` }}
                onClick={() => setActiveStep(idx)}
              >
                <div className={`relative p-6 rounded-3xl border-2 transition-all duration-500 ${
                  activeStep === idx 
                    ? 'bg-white shadow-2xl border-transparent' 
                    : 'bg-white/50 hover:bg-white/80 border-gray-200 hover:border-gray-300'
                }`}>
                  
                  {/* Active Indicator */}
                  {activeStep === idx && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-5 rounded-3xl`}></div>
                  )}

                  <div className="relative ">
                    <div className="flex items-start gap-6">
                      
                      {/* Step Number & Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 ${
                        activeStep === idx ? 'scale-110 rotate-3' : ''
                      }`}>
                        <span className="text-sm">{step.number}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        
                        {/* Title */}
                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          activeStep === idx ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <div className={`space-y-2 transition-all duration-500 ${
                          activeStep === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}>
                          {step.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-center gap-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`text-3xl transition-transform duration-300 ${
                        activeStep === idx ? 'animate-bounce' : ''
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Preview */}
          <div className={`relative transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Main Preview Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${steps[activeStep].color} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">{steps[activeStep].title}</h4>
                    <p className="text-white/80 text-sm">Step {steps[activeStep].number}</p>
                  </div>
                  <div className="text-3xl">
                    {steps[activeStep].icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${steps[activeStep].color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 animate-pulse`}>
                      {steps[activeStep].icon}
                    </div>
                    <p className="text-gray-600">Interactive Demo</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {steps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className={`w-5 h-5 text-gradient-to-r ${steps[activeStep].color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === idx 
                      ? `bg-gradient-to-r ${steps[activeStep].color} scale-125` 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveStep(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
            <span>Try It Now - Free</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}



export default Details