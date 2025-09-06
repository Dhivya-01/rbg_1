import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  // Feature Section Icons
  Volume2, // For noise removal (audio focus)
  Users, // For speaker separation (multiple speakers)
  Target, // For intent analysis (purpose/goals)
  HeartPulse, // For sentiment analysis (emotional state)
  ShieldCheck, // For toxic separation (protection with verification)
  LayoutDashboard, // For analytics dashboard (data visualization)

  // Tech Section Icons
  Brain, // For deep learning models
  Container, // For dockerized services
  Cloud, // For deployment options
  Settings, // For Own Your Model

  // MLStack Feature Icons
  FileText, // For voice transcriber
  Waves, // For voice enhancer
  Scan, // For voice recognition
  UsersRound, // For voice diarizer
  PieChart, // For voice classifier

  // Strategic Impact Icons
  Headphones, // For enhanced customer experience (customer service)
  Gauge, // For operational efficiency (performance)
  LineChart, // For data-driven decisions (analytics)
  Shield, // For data integrity (security)

  // Navigation/UI Icons
  ChevronRight, // For buttons/navigation
} from "lucide-react";

const DhvaniPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ["hero", "features", "tech", "impact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Volume2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Noise Removal",
      description:
        "Filters out background noise, capturing only clear, relevant conversation data for precise analysis",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Speaker-Separated Transcription",
      description:
        "Identifies who said what, creating organized, multi-speaker transcripts for better speaker-specific insights",
    },
    {
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Speaker Intent Analysis",
      description:
        "Detects the purpose of each conversation, helping organizations understand what callers need or aim to achieve",
    },
    {
      icon: <HeartPulse className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Speaker Sentiment Analysis",
      description:
        "Captures the emotional undertone of conversations, revealing customer satisfaction or dissatisfaction",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Toxic Separation",
      description:
        "Filters out deceptive or toxic content to maintain data integrity and ensure accurate insights",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Analytics Dashboards",
      description:
        "Offers intuitive visual dashboards for tracking and analyzing key metrics, trends, and insights across calls",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        id="hero"
        className={`pt-24 md:pt-32 pb-16 md:pb-20 px-4 relative overflow-hidden ${
          isVisible.hero ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="max-w-8xl mx-auto text-center relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient px-4">
            KnowVoice: Post Call Analytics and Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
            Advanced post-call analytics and insights solution that transforms
            voice interactions into actionable intelligence. Built on the
            powerful MLStack APIs, KnowVoice delivers comprehensive analysis by
            removing noise, providing speaker-separated transcriptions,
            detecting speaker intent and sentiment, and filtering out toxic
            content. With intuitive analytics dashboards, KnowVoice empowers
            businesses to track, visualize, and act on voice data insights to
            enhance customer interactions and strategic decision-making.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
            Request for a Demo
              <ChevronRight className="ml-2 w-4 h-4 animate-pulse" />
            </button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className={`py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden ${
          isVisible.features ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="tech"
        className={`py-16 md:py-20 px-4 relative overflow-hidden ${
          isVisible.tech ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Technological Advancements
              </h2>
              <div className="space-y-4">
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-bold">
                      Advanced Deep Learning Models-
                    </span>{" "}
                    Utilizes cutting-edge algorithms for noise reduction,
                    speaker identification, sentiment analysis, and intent
                    detection, ensuring high accuracy in voice analytics
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Container className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-bold">
                      Dockerized, Auto-Scalable Microservices-
                    </span>{" "}
                    Designed as containerized microservices, KnowVoice scales
                    automatically to handle fluctuating call volumes, making it
                    suitable for businesses with high data demands
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Cloud className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-bold">
                      Flexible Deployment Options-
                    </span>{" "}
                    Offers deployment flexibility, whether on-premises, in a
                    private cloud, or on a public cloud, to meet security and
                    compliance needs
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-bold">Own Your Model (OYM)-</span>
                    Allows clients to customize model configurations and
                    supports continuous learning, ensuring KnowVoice adapts to
                    evolving business requirements and improves over time
                  </p>
                </div>
              </div>
            </div>
            <div className="relative backface-hidden mt-8 md:mt-0">
              <div
                className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 md:p-8 rounded-2xl text-white 
                            transform hover:scale-105 transition-all duration-300 ease-in-out
                            will-change-transform"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Powered by RBG.AI's MLStack
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Transcriber
                    </h4>
                    <p className="text-xs md:text-sm">
                      Convert spoken language into text accurately and
                      efficiently
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semiboldfont-semibold mb-2 text-sm md:text-base">
                      Voice Enhancer{" "}
                    </h4>
                    <p className="text-xs md:text-sm">
                      Improve voice clarity by reducing background noise and
                      refining audio quality
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Recognition
                    </h4>
                    <p className="text-xs md:text-sm">
                      Identify speakers and understand voice patterns for
                      security, customer profiling, and more
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Diarizer
                    </h4>
                    <p className="text-xs md:text-sm">
                      Distinguish and label individual speakers within
                      conversations
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Classifier
                    </h4>
                    <p className="text-xs md:text-sm">
                      Categorize voice data based on mood, tone, or other
                      acoustic features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Impact */}
      <section
        id="impact"
        className={`py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden ${
          isVisible.impact ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Strategic Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Enhanced Customer Experience",
                icon: <Headphones />,
                description:
                  "Enables businesses to understand customer emotions and intent more accurately, allowing for more personalized and empathetic interactions",
              },
              {
                title: "Increased Operational Efficiency",
                icon: <Gauge />,
                description:
                  "Automates tasks like noise filtering, speaker separation, and sentiment analysis, reducing the time needed for manual call reviews and boosting efficiency",
              },
              {
                title: "Data-Driven Decision Making",
                icon: <LineChart />,
                description:
                  "Through detailed insights and visual dashboards, KnowVoice empowers managers to make informed decisions that enhance customer engagement and service quality",
              },
              {
                title: "Data Integrity and Reliability",
                icon: <Shield />,
                description:
                  "Ensures analytics are based on authentic customer interactions by filtering out toxic and misleading content, leading to more trustworthy insights",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 text-blue-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default DhvaniPage;
