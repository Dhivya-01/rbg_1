import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Shield,
  Database,
  Waves,
  Globe2,
  Brain,
  Fingerprint,
  MessageSquare,
  LayoutDashboard,
  ChevronRight,
  Award,
  Building2,
  Menu,
  X,
} from "lucide-react";
import ExternalLink from '../ExternalLink';

const DhvaniPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      icon: <Database className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Voice Sample Database",
      description:
        "Secured storage and integration with LEA systems for comprehensive investigative analysis",
    },
    {
      icon: <Waves className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Noise Reduction & Diarization",
      description:
        "Advanced filtering and speaker separation for crystal-clear audio analysis",
    },
    {
      icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Multilingual Transcription",
      description:
        "Near real-time audio-to-text conversion across varied Indic languages",
    },
    {
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Deep Embedding Features",
      description:
        "Precise speaker identification through unique vocal trait analysis",
    },
    {
      icon: <Fingerprint className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Voice Fingerprinting",
      description:
        "Creates unique voice identifiers to track individuals across different cases",
    },
    {
      icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
      title: "NLP Analysis",
      description:
        "Advanced semantic analysis for intent detection and conversation categorization",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Interactive Dashboard",
      description:
        "Intuitive interface with dynamic visualizations for simplified data interpretation",
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
        <div className="max-w-7xl mx-auto text-center relative py-12 px-6">
  {/* Header Badge */}
  <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 rounded-full animate-bounce shadow-sm">
    <Shield className="w-5 h-5 text-blue-600 mr-2" />
    <span className="text-blue-600 text-sm font-medium">
      Selected By Indian Cyber Crime Coordination Centre
    </span>
  </div>

  {/* Main Heading */}
  <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 px-6 leading-snug">
    DHVANI: Voice Recognition Software to Combat Cyberfrauds
  </h1>

  {/* Subheading */}
  <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
    Advanced AI-powered voice recognition system designed to support Law
    Enforcement Agencies in identifying and tracking cybercriminals
    through sophisticated audio analysis.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-4">
    {/* Request for Demo Button */}
    <Link to="/contact">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
        Request for a Demo
        <ChevronRight className="ml-2 w-5 h-5 animate-pulse" />
      </button>
    </Link>

    {/* Get Started Button */}
   
    <ExternalLink
  href="https://dhvani.rbg.ai/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex justify-center items-center px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
>
  Get Started with DHVANI
</ExternalLink>
  </div>
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
                    State-of-the-art AI Orchestration and Customization
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Advanced Noise Removal Algorithms to Enhance Audio Quality
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Multilingual transcription with near real-time processing
                    Advanced NLP for sentiment and intent interpretation
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
                      Near Real Time Transcription Capability
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Enhancer
                    </h4>
                    <p className="text-xs md:text-sm">
                      Advanced Filtering and Speech Enhancement
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Diarizer
                    </h4>
                    <p className="text-xs md:text-sm">
                      Voice Centric Differentiation along with Transcription and
                      Identification
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Classifier
                    </h4>
                    <p className="text-xs md:text-sm">
                      Sophisticated and Reliable Deepfake Identification
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors sm:col-span-2">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">
                      Voice Clustering
                    </h4>
                    <p className="text-xs md:text-sm">
                      Vocal Similarity Based Clustering of Audio Files
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
                title: "Cyber Security",
                icon: <Shield />,
                description:
                  "Setting benchmarks in cybercrime investigation technology",
              },
              {
                title: "LEA Enhancement",
                icon: <Building2 />,
                description:
                  "Empowering law enforcement with advanced AI tools",
              },
              {
                title: "New Standard",
                icon: <Award />,
                description: "Strengthening India's fight against cyber fraud",
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
