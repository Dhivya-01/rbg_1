import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  FileSearch,
  Eraser,
  ScrollText,
  Brain,
  Shield,
  Files,
  LineChart,
  LayoutDashboard,
  ChevronRight,
  Building2,
  Award,
  Scan,
  FileOutput,
  Tags,
  Menu,
  X,
} from "lucide-react";

const DhvaniPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      icon: <FileSearch className="w-5 h-5 md:w-6 md:h-6" />,
      title: "AI-Powered OCR Technology",
      description:
        "Leverage cutting-edge Optical Character Recognition (OCR) technology to accurately extract text from scanned or image-based documents",
    },
    {
      icon: <Eraser className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Watermark Removal",
      description:
        "Utilizes advanced image processing techniques to remove watermarks from PDF documents, ensuring cleaner text extraction",
    },
    {
      icon: <ScrollText className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Postprocessing",
      description:
        "Refine extracted text using contextual analysis, validation, and reformatting for high-quality data",
    },
    {
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      title: "NLP analysis",
      description:
        "Utilizes state-of-the-art AI models to intelligently extract and categorize key details from documents",
    },
    {
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Secure Solution",
      description:
        "Ensures secure data handling and compliance with privacy standards, making it scalable for large datasets",
    },
    {
      icon: <Files className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Bulk Document Processing",
      description:
        "Supports processing multiple deeds of trust at once for efficient large-scale operations",
    },
    {
      icon: <LineChart className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Realtime feedback",
      description:
        "Enables immediate feedback on extraction success, with options for manual corrections",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Interactive Dashboard",
      description:
        "Provides an intuitive interface with dynamic visualizations to track progress and manage documents",
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
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient leading-tight">
            Deed Parser: Information Extraction from Mortgage Deed Documents
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Advanced AI powered text extraction algorithm designed to support
            United States Trust agencies in identifying required information
            from unstructured data.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center text-sm md:text-base">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Technological Advancements
              </h2>
              <div className="space-y-4">
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileSearch className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Advanced OCR and image processing for data extraction
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    NLP analysis for precise contextual understanding
                  </p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <LineChart className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Real-time insights for improved accuracy and efficiency
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
                    <h4 className="font-semibold mb-2">Vision Transcriber</h4>
                    <p className="text-xs md:text-sm">
                      Extract text and information from visual content
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2">Text Extractor</h4>
                    <p className="text-xs md:text-sm">
                      Identify and extract key information from documents
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold mb-2">Text Classifier</h4>
                    <p className="text-xs md:text-sm">
                      Automatically organize and label text content
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
                title: "Revolutionizing Legal Document Processing",
                icon: <FileText />,
                description:
                  "Setting a new benchmark in automated deed of trust extraction",
              },
              {
                title: "Empowering Legal Professional",
                icon: <Building2 />,
                description: "Enabling real-time AI-driven document analysis",
              },
              {
                title: "Transforming Legal Compliance",
                icon: <Shield />,
                description:
                  "Strengthening data security and compliance standards",
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

      {/* Footer Section */}

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

        @media (max-width: 640px) {
          .animate-gradient {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default DhvaniPage;
