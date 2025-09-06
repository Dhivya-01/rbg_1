import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Updated to react-helmet-async

const Header = ({ data }) => {
  const { content, description, button } = data;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (button) {
      case "Explore Products":
        navigate("/MLloOps-");
        break;
      case "Try MLloOps":
        navigate("/MLloOps");
        break;
      case "Explore More":
        window.open(
          "https://github.com/rbg-research",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "Reach Us":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  const splitIntoWords = (text) => {
    return text.split(/\s+/).map((word, index, array) => ({
      word,
      isLast: index === array.length - 1,
    }));
  };

  return (
    <>
      <Helmet>
        <style>
          {`
            @keyframes fadeSlideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.98);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          `}
        </style>
      </Helmet>

      <div className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 xl:w-8/12 px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-0 lg:flex lg:items-center">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              {/* Background gradient */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-200 via-blue-200 to-green-200"></div>
              </div>

              {/* Product Badge */}
              <div className="relative mb-6 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  AI Product Platform
                </span>
              </div>

              {/* Main heading */}
              <h1 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight">
                {content &&
                  splitIntoWords(content).map(({ word, isLast }, index) => (
                    <React.Fragment key={index}>
                      <span
                        className={`
                          inline-block opacity-0
                          ${
                            index >= splitIntoWords(content).length - 3
                              ? "text-red-700"
                              : "text-zinc-900"
                          }
                          animate-[fadeSlideUp_0.7s_ease-out_forwards]
                          hover:animate-[pulse_1s_ease-in-out]
                        `}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {word}
                      </span>
                      {!isLast && (
                        <span className="inline-block w-[0.25em]"> </span>
                      )}
                    </React.Fragment>
                  ))}
              </h1>

              {/* Description */}
              {description && (
                <p
                  className="relative text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-600 mt-6 sm:mt-8 lg:mt-10 max-w-3xl opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] leading-relaxed"
                  style={{ animationDelay: "0.8s" }}
                >
                  {description}
                </p>
              )}

              {/* Product Features */}
              <div
                className="relative mt-8 sm:mt-10 lg:mt-12 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enterprise Ready
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Lightning Fast
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure & Compliant
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {button && (
                <div
                  className="relative mt-8 sm:mt-10 lg:mt-12 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: "1.2s" }}
                >
                  <button
                    onClick={handleButtonClick}
                    className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-2xl active:scale-95 lg:hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      {button}
                    </span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div
            className="w-full lg:w-5/12 xl:w-4/12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-0 lg:flex lg:items-center opacity-0 animate-[scaleIn_0.4s_ease-out_forwards]"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Product showcase container */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-3xl p-4 shadow-2xl w-full hover:shadow-3xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Intelligent AI Stacks
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Experience the future of AI with our comprehensive product ecosystem designed for modern businesses.
                    </p>
                  </div>
                  
                  {/* Product features */}
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">MLStack Text Stack</h4>
                        <p className="text-sm text-gray-600">Extract insights from text with intelligent classification and
                        summarization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">MLStack Image Stack</h4>
                        <p className="text-sm text-gray-600">Analyze and recognize images with advanced detection and segmentation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">MLStack Vision Stack</h4>
                        <p className="text-sm text-gray-600">Track and monitor visual data for deeper business insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
