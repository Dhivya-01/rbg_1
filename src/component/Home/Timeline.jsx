
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Check, Menu, X } from 'lucide-react';

const ResponsiveTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const containerRef = useRef(null);
  const stepsRefs = useRef([]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Upload",
      description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
      details: [
        "Secure file upload with encryption",
        "Support for multiple file formats",
        "Batch processing capabilities",
        "Real-time upload status tracking"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
    },
    {
      id: 2,
      number: "02",
      title: "Preprocessing",
      description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
      details: [
        "Automated data standardization",
        "File compression and optimization",
        "Quality enhancement algorithms",
        "Format normalization processes"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
    },
    {
      id: 3,
      number: "03",
      title: "Transcription",
      description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
      details: [
        "Advanced OCR technology",
        "Speech-to-text conversion",
        "Multi-language support",
        "High accuracy transcription"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
    },
    {
      id: 4,
      number: "04",
      title: "Extraction",
      description: "Large Language Models extract key data points and generate structured JSON output with precision.",
      details: [
        "AI-powered data extraction",
        "Structured JSON output",
        "Intelligent field recognition",
        "Context-aware processing"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
    },
    {
      id: 5,
      number: "05",
      title: "Human Review",
      description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
      details: [
        "Expert quality assurance",
        "Manual validation process",
        "Error correction and feedback",
        "Continuous improvement loop"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
    },
    {
      id: 6,
      number: "06",
      title: "Post-Processing",
      description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
      details: [
        "Data validation algorithms",
        "Format standardization",
        "Compliance verification",
        "Final quality checks"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
    },
    {
      id: 7,
      number: "07",
      title: "Final Result",
      description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
      details: [
        "High-quality output guarantee",
        "Structured data format",
        "Ready for integration",
        "Comprehensive documentation"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
    },
    {
      id: 8,
      number: "08",
      title: "Client Approval",
      description: "Clients review the final output and approve or request modifications based on their requirements.",
      details: [
        "Interactive review interface",
        "Approval workflow management",
        "Revision request handling",
        "Client feedback integration"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
    },
    {
      id: 9,
      number: "09",
      title: "Report Download",
      description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
      details: [
        "Multiple export formats",
        "Instant download access",
        "Integration-ready files",
        "Comprehensive reporting"
      ],
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      
      setScrollProgress(progress);
      
      // Calculate active step based on scroll position
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [steps.length]);

  const scrollToStep = (index) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const targetScroll = (index / (steps.length - 1)) * (container.scrollHeight - container.clientHeight);
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    
    // Close sidebar on mobile after navigation
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 lg:hidden"> */}
        {/* <div className="flex items-center justify-between px-4 py-4"> */}
          {/* <div>
            <h1 className="text-xl font-bold text-gray-900">Our Process</h1>
            <p className="text-sm text-gray-600">Step {activeStep + 1} of {steps.length}</p>
          </div> */}
          {/* <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-red-100"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div> */}
        {/* <div className="px-4 pb-3">
          <div className="w-full h-1 bg-red-200 rounded-full">
            <div 
              className="h-full bg-gray-900 rounded-full transition-all duration-300"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div> */}
      {/* </div> */}

     

      <div className="flex min-h-screen pt-20 lg:pt-24">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {/* <div className={`
          fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
          w-80 lg:w-80 xl:w-96 bg-red-50 border-r border-gray-100 
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col pt-0 lg:pt-0
        `}> */}
        <div className={`
  fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
  w-80 lg:w-80 xl:w-96 shadow-glow opacity-0 opacity-100 transition-opacity duration-300
  transform transition-transform duration-300 ease-in-out lg:transform-none
  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  flex flex-col pt-0 lg:pt-0 shadow-glow-left  transition-shadow
`}>

          {/* Step Navigation */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-6 lg:pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Steps</h3>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(index)}
                  className={`w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-200 group ${
                    index === activeStep
                      ? 'bg-white shadow-sm border border-gray-200'
                      : 'hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold transition-all duration-200 ${
                      index === activeStep
                        ? 'bg-red-500 text-white'
                        : index < activeStep
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                    }`}>
                      {index < activeStep ? <Check className="w-3 h-3 lg:w-4 lg:h-4" /> : step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                        index === activeStep ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 truncate">
                        {step.description.substring(0, 40)}...
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="p-4 lg:p-6 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
            <div className="w-full h-1 bg-red-200 rounded-full">
              <div 
                className="h-full bg-gray-900 rounded-full transition-all duration-500"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {Math.round(scrollProgress * 100)}% Complete
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto"
          style={{ height: 'calc(100vh - 5rem)' }}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={el => stepsRefs.current[index] = el}
              className="min-h-screen flex items-center justify-center p-4 lg:p-8"
            >
              <div className="max-w-6xl mx-auto w-full">
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-xl text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                          {step.number}
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{step.title}</h2>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-6 lg:mb-0">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-100">
                        <button
                          onClick={() => index < steps.length - 1 && scrollToStep(index + 1)}
                          disabled={index === steps.length - 1}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 lg:px-7 py-3 lg:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
                        >
                          {index === steps.length - 1 ? 'Process Complete' : 'Next Step'}
                          {index < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
                        </button>
                        <span className="text-sm text-gray-500">
                          {index + 1} of {steps.length}
                        </span>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="bg-red-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
                      <div className="relative">
                        <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white shadow-glow opacity-0 opacity-100 transition-opacity duration-300  rounded-xl shadow-lg p-4 lg:p-6 flex items-center justify-center">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        {/* Decorative elements - hidden on mobile */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-50 hidden sm:block" />
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-30 hidden sm:block" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTimeline;