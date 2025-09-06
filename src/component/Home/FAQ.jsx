"use client";
import React, { useState, useEffect, useRef } from "react";

export function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  const faqData = [
    {
      question: "How quickly can I get started with MLloOps?",
      answer: "You can be up and running in under 10 minutes! Simply sign up for a free account, connect your data sources, and start building your first ML pipeline. Our intuitive interface and guided setup process makes onboarding seamless.",
      category: "Getting Started",
      icon: "🚀"
    },
    {
      question: "What integrations do you support?",
      answer: "We support 100+ integrations including all major cloud providers (AWS, GCP, Azure), ML frameworks (TensorFlow, PyTorch, Scikit-learn), databases (PostgreSQL, MySQL, MongoDB), and data tools (Snowflake, Databricks, Apache Spark). Plus, we have a robust API for custom integrations.",
      category: "Integrations", 
      icon: "🔗"
    },
    {
      question: "Is my data secure with MLloOps?",
      answer: "Absolutely! We're SOC2 Type II compliant with enterprise-grade security. Your data is encrypted in transit and at rest, we never access your actual data, and you maintain full control. We also support VPC deployments and custom security configurations for enterprise clients.",
      category: "Security",
      icon: "🔒"
    },
    {
      question: "Can I try MLloOps for free?",
      answer: "Yes! We offer a generous free tier that includes up to 3 team members, 5 ML models, and 10GB storage. No credit card required. You can also start a 14-day free trial of our Professional plan to explore advanced features.",
      category: "Pricing",
      icon: "💳"
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support channels: 24/7 chat support, extensive documentation, video tutorials, and community forum. Professional plans include priority email support, while Enterprise customers get dedicated support managers and custom SLAs.",
      category: "Support", 
      icon: "🎧"
    },
    {
      question: "How does MLloOps handle model monitoring?",
      answer: "Our platform provides comprehensive monitoring including model performance metrics, data drift detection, prediction accuracy tracking, and automated alerts. You can set custom thresholds and get notified via email, Slack, or webhooks when issues arise.",
      category: "Features",
      icon: "📊"
    },
    {
      question: "Can I deploy models to my own infrastructure?",
      answer: "Yes! MLloOps supports deployment to your own cloud infrastructure, on-premises servers, or hybrid environments. We provide Kubernetes operators, Docker containers, and API endpoints to fit your deployment strategy.",
      category: "Deployment",
      icon: "🏗️"
    },
    {
      question: "What happens if I want to migrate away?",
      answer: "We believe in data portability and no vendor lock-in. You can export all your models, data, and configurations at any time. We also provide migration assistance and documentation to help you transition smoothly if needed.",
      category: "Data Portability", 
      icon: "📤"
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

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

    const items = sectionRef.current?.querySelectorAll('.faq-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ❓ Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about MLloOps. Can't find the answer you're looking for? 
            <button className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
              Chat with our team
            </button>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            All Questions
          </button>
          {categories.slice(0, 4).map((category, idx) => (
            <button 
              key={idx}
              className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-full text-sm font-medium transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`faq-item group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:shadow-xl transition-all duration-500 overflow-hidden ${
                visibleItems.has(idx) 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              
              {/* Question */}
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                onClick={() => toggleItem(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 ${
                      openItems.has(idx) ? 'scale-110 rotate-6' : ''
                    }`}>
                      {item.icon}
                    </div>

                    {/* Question Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        openItems.has(idx) ? 'text-blue-600' : 'text-gray-900 group-hover:text-gray-800'
                      }`}>
                        {item.question}
                      </h3>
                      <div className="text-sm text-gray-500 mt-1">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 ${
                    openItems.has(idx) 
                      ? 'border-blue-500 bg-blue-50 rotate-45' 
                      : 'group-hover:border-gray-300 group-hover:bg-gray-50'
                  }`}>
                    <svg 
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openItems.has(idx) ? 'text-blue-600' : 'text-gray-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-500 ease-in-out ${
                openItems.has(idx) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="ml-16 pr-12">
                    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500 transition-all duration-500 ${
                      openItems.has(idx) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our friendly support team is here to help. Get in touch and we'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Start Live Chat</span>
              </button>

              <button className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Support</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-blue-200">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert ML engineers</span>
                </div>
              </div>
            </div>
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}



export default FAQ