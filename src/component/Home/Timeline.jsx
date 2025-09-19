
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, Menu, X } from 'lucide-react';

// const ResponsiveTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const containerRef = useRef(null);
//   const stepsRefs = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;
      
//       const container = containerRef.current;
//       const scrollTop = container.scrollTop;
//       const scrollHeight = container.scrollHeight - container.clientHeight;
//       const progress = Math.min(scrollTop / scrollHeight, 1);
      
//       setScrollProgress(progress);
      
//       // Calculate active step based on scroll position
//       const stepIndex = Math.floor(progress * steps.length);
//       setActiveStep(Math.min(stepIndex, steps.length - 1));
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//       return () => container.removeEventListener('scroll', handleScroll);
//     }
//   }, [steps.length]);

//   const scrollToStep = (index) => {
//     if (!containerRef.current) return;
    
//     const container = containerRef.current;
//     const targetScroll = (index / (steps.length - 1)) * (container.scrollHeight - container.clientHeight);
    
//     container.scrollTo({
//       top: targetScroll,
//       behavior: 'smooth'
//     });
    
//     // Close sidebar on mobile after navigation
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Mobile Header */}
//       {/* <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 lg:hidden"> */}
//         {/* <div className="flex items-center justify-between px-4 py-4"> */}
//           {/* <div>
//             <h1 className="text-xl font-bold text-gray-900">Our Process</h1>
//             <p className="text-sm text-gray-600">Step {activeStep + 1} of {steps.length}</p>
//           </div> */}
//           {/* <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-red-100"
//           >
//             {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div> */}
//         {/* <div className="px-4 pb-3">
//           <div className="w-full h-1 bg-red-200 rounded-full">
//             <div 
//               className="h-full bg-gray-900 rounded-full transition-all duration-300"
//               style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//             />
//           </div>
//         </div> */}
//       {/* </div> */}

     

//       <div className="flex min-h-screen pt-20 lg:pt-24">
//         {/* Mobile Sidebar Overlay */}
//         {sidebarOpen && (
//           <div 
//             className="fixed inset-0 bg-red-400 bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* Sidebar */}
//         {/* <div className={`
//           fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
//           w-80 lg:w-80 xl:w-96 bg-red-50 border-r border-gray-100 
//           transform transition-transform duration-300 ease-in-out lg:transform-none
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//           flex flex-col pt-0 lg:pt-0
//         `}> */}
//         <div className={`
//   fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
//   w-80 lg:w-80 xl:w-96 shadow-glow opacity-0 opacity-100 transition-opacity duration-300
//   transform transition-transform duration-300 ease-in-out lg:transform-none
//   ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//   flex flex-col pt-0 lg:pt-0 shadow-glow-left  transition-shadow
// `}>

//           {/* Step Navigation */}
//           <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-6 lg:pt-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Steps</h3>
//             <div className="space-y-2">
//               {steps.map((step, index) => (
//                 <button
//                   key={step.id}
//                   onClick={() => scrollToStep(index)}
//                   className={`w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-200 group ${
//                     index === activeStep
//                       ? 'bg-white shadow-sm border border-gray-200'
//                       : 'hover:bg-white hover:shadow-sm'
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold transition-all duration-200 ${
//                       index === activeStep
//                         ? 'bg-red-500 text-white'
//                         : index < activeStep
//                           ? 'bg-green-100 text-green-700'
//                           : 'bg-red-100 text-red-600'
//                     }`}>
//                       {index < activeStep ? <Check className="w-3 h-3 lg:w-4 lg:h-4" /> : step.number}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
//                         index === activeStep ? 'text-gray-900' : 'text-gray-700'
//                       }`}>
//                         {step.title}
//                       </div>
//                       <div className="text-xs text-gray-500 mt-1 truncate">
//                         {step.description.substring(0, 40)}...
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Progress Bar */}
//           <div className="p-4 lg:p-6 border-t border-gray-200">
//             <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
//             <div className="w-full h-1 bg-red-200 rounded-full">
//               <div 
//                 className="h-full bg-gray-900 rounded-full transition-all duration-500"
//                 style={{ width: `${scrollProgress * 100}%` }}
//               />
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               {Math.round(scrollProgress * 100)}% Complete
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div 
//           ref={containerRef}
//           className="flex-1 overflow-y-auto"
//           style={{ height: 'calc(100vh - 5rem)' }}
//         >
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               ref={el => stepsRefs.current[index] = el}
//               className="min-h-screen flex items-center justify-center p-4 lg:p-8"
//             >
//               <div className="max-w-6xl mx-auto w-full">
//                 <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100 overflow-hidden">
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//                     {/* Content Side */}
//                     <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
//                       <div className="mb-6">
//                         <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-xl text-lg sm:text-xl lg:text-2xl font-bold mb-4">
//                           {step.number}
//                         </div>
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{step.title}</h2>
//                         <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
//                           {step.description}
//                         </p>
//                       </div>

//                       {/* Details */}
//                       <div className="space-y-3 mb-6 lg:mb-0">
//                         {step.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-start gap-3">
//                             <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
//                             <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Navigation */}
//                       <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-100">
//                         <button
//                           onClick={() => index < steps.length - 1 && scrollToStep(index + 1)}
//                           disabled={index === steps.length - 1}
//                           className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 lg:px-7 py-3 lg:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
//                         >
//                           {index === steps.length - 1 ? 'Process Complete' : 'Next Step'}
//                           {index < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
//                         </button>
//                         <span className="text-sm text-gray-500">
//                           {index + 1} of {steps.length}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Image Side */}
//                     <div className="bg-red-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
//                       <div className="relative">
//                         <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white shadow-glow opacity-0 opacity-100 transition-opacity duration-300  rounded-xl shadow-lg p-4 lg:p-6 flex items-center justify-center">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="max-w-full max-h-full object-contain"
//                           />
//                         </div>
//                         {/* Decorative elements - hidden on mobile */}
//                         <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-50 hidden sm:block" />
//                         <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-30 hidden sm:block" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveTimeline;


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, Menu, X } from 'lucide-react';

// const ResponsiveTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const stepsRefs = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the total page scroll
//       const scrollTop = window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = Math.min(scrollTop / docHeight, 1);
      
//       setScrollProgress(progress);
      
//       // Find which step is currently in view
//       let currentStep = 0;
//       stepsRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const elementTop = rect.top;
//           const elementBottom = rect.bottom;
//           const windowHeight = window.innerHeight;
          
//           // Consider a step active when it's in the center 40% of the viewport
//           const activeZoneTop = windowHeight * 0.3;
//           const activeZoneBottom = windowHeight * 0.7;
          
//           if (elementTop <= activeZoneBottom && elementBottom >= activeZoneTop) {
//             currentStep = index;
//           }
//         }
//       });
      
//       setActiveStep(currentStep);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Call once to set initial state
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToStep = (index) => {
//     const element = stepsRefs.current[index];
//     if (element) {
//       const elementTop = element.offsetTop;
//       const windowHeight = window.innerHeight;
//       const elementHeight = element.offsetHeight;
      
//       // Scroll to center the element in the viewport
//       const scrollTo = elementTop - (windowHeight - elementHeight) / 2;
      
//       window.scrollTo({
//         top: scrollTo,
//         behavior: 'smooth'
//       });
//     }
    
//     // Close sidebar on mobile after navigation
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Mobile Header */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 lg:hidden">
//         <div className="flex items-center justify-between px-4 py-4">
//           <div>
//             <h1 className="text-xl font-bold text-gray-900">Our Process</h1>
//             <p className="text-sm text-gray-600">Step {activeStep + 1} of {steps.length}</p>
//           </div>
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-red-100"
//           >
//             {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//         <div className="px-4 pb-3">
//           <div className="w-full h-1 bg-red-200 rounded-full">
//             <div 
//               className="h-full bg-gray-900 rounded-full transition-all duration-300"
//               style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex">
//         {/* Mobile Sidebar Overlay */}
//         {sidebarOpen && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* Sidebar */}
//         <div className={`
//           fixed lg:sticky lg:top-20 mt-24 inset-y-0 left-0 z-40 lg:z-auto
//           w-80 lg:w-80 xl:w-96 bg-red-50 border-r border-gray-100 
//           transform transition-transform duration-300 ease-in-out lg:transform-none
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//           flex flex-col h-screen
//         `}>
//           {/* Step Navigation */}
//           <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-6 lg:pt-6 mt-20 lg:mt-0">
//             <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Steps</h3>
//             <div className="space-y-2">
//               {steps.map((step, index) => (
//                 <button
//                   key={step.id}
//                   onClick={() => scrollToStep(index)}
//                   className={`w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-200 group ${
//                     index === activeStep
//                       ? 'bg-white shadow-sm border border-gray-200'
//                       : 'hover:bg-white hover:shadow-sm'
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold transition-all duration-200 ${
//                       index === activeStep
//                         ? 'bg-red-500 text-white'
//                         : index < activeStep
//                           ? 'bg-green-100 text-green-700'
//                           : 'bg-red-100 text-red-600'
//                     }`}>
//                       {index < activeStep ? <Check className="w-3 h-3 lg:w-4 lg:h-4" /> : step.number}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
//                         index === activeStep ? 'text-gray-900' : 'text-gray-700'
//                       }`}>
//                         {step.title}
//                       </div>
//                       <div className="text-xs text-gray-500 mt-1 truncate">
//                         {step.description.substring(0, 40)}...
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Progress Bar */}
//           <div className="p-4 lg:p-6 border-t border-gray-200">
//             <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
//             <div className="w-full h-1 bg-red-200 rounded-full">
//               <div 
//                 className="h-full bg-gray-900 rounded-full transition-all duration-500"
//                 style={{ width: `${scrollProgress * 100}%` }}
//               />
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               {Math.round(scrollProgress * 100)}% Complete
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 pt-20 lg:pt-0">
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               ref={el => stepsRefs.current[index] = el}
//               className="min-h-screen flex items-center justify-center p-4 lg:p-8"
//             >
//               <div className="max-w-6xl mx-auto w-full">
//                 <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100 overflow-hidden">
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//                     {/* Content Side */}
//                     <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
//                       <div className="mb-6">
//                         <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-xl text-lg sm:text-xl lg:text-2xl font-bold mb-4">
//                           {step.number}
//                         </div>
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{step.title}</h2>
//                         <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
//                           {step.description}
//                         </p>
//                       </div>

//                       {/* Details */}
//                       <div className="space-y-3 mb-6 lg:mb-0">
//                         {step.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-start gap-3">
//                             <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
//                             <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Navigation */}
//                       <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-100">
//                         <button
//                           onClick={() => index < steps.length - 1 && scrollToStep(index + 1)}
//                           disabled={index === steps.length - 1}
//                           className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 lg:px-7 py-3 lg:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
//                         >
//                           {index === steps.length - 1 ? 'Process Complete' : 'Next Step'}
//                           {index < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
//                         </button>
//                         <span className="text-sm text-gray-500">
//                           {index + 1} of {steps.length}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Image Side */}
//                     <div className="bg-red-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
//                       <div className="relative">
//                         <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white rounded-xl shadow-lg p-4 lg:p-6 flex items-center justify-center">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="max-w-full max-h-full object-contain"
//                           />
//                         </div>
//                         {/* Decorative elements - hidden on mobile */}
//                         <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-50 hidden sm:block" />
//                         <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-30 hidden sm:block" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveTimeline;

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, CheckCircle2, ArrowRight } from 'lucide-react';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const containerRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your requirements and business goals",
      detail: "We start by diving deep into your needs, analyzing your current situation, and identifying opportunities for improvement.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
    },
    {
      id: 2,
      title: "Planning",
      description: "Strategic roadmap and technical architecture",
      detail: "Creating a comprehensive plan with timelines, milestones, and technical specifications tailored to your objectives.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
    },
    {
      id: 3,
      title: "Design",
      description: "User experience and interface creation",
      detail: "Crafting intuitive designs that prioritize user experience while maintaining aesthetic appeal and functionality.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
    },
    {
      id: 4,
      title: "Development",
      description: "Building your application with modern technology",
      detail: "Writing clean, scalable code using the latest technologies and best practices for optimal performance.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
    },
    {
      id: 5,
      title: "Testing",
      description: "Quality assurance and performance optimization",
      detail: "Rigorous testing across multiple scenarios to ensure reliability, security, and seamless user experience.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
    },
    {
      id: 6,
      title: "Integration",
      description: "Connecting systems and third-party services",
      detail: "Seamlessly integrating with existing systems and external APIs to create a unified ecosystem.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
    },
    {
      id: 7,
      title: "Deployment",
      description: "Launching your application to production",
      detail: "Carefully orchestrated deployment with monitoring and rollback capabilities for a smooth launch.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
    },
    {
      id: 8,
      title: "Monitoring",
      description: "Performance tracking and issue resolution",
      detail: "Continuous monitoring of system health, performance metrics, and user behavior analytics.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
    },
    {
      id: 9,
      title: "Support",
      description: "Ongoing maintenance and feature updates",
      detail: "Long-term partnership with regular updates, maintenance, and feature enhancements as your business grows.",
      image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Check if the component is in viewport (visible)
      const isInViewport = containerTop < windowHeight && (containerTop + containerHeight) > 0;
      
      // Only show scroll indicator when component is actually being scrolled through
      const isActivelyScrolling = containerTop <= 0 && (containerTop + containerHeight) > windowHeight;
      
      setIsComponentVisible(isActivelyScrolling);

      if (!isInViewport) {
        return;
      }

      const scrollStart = containerTop;
      const scrollEnd = containerTop - windowHeight + containerHeight;
      const totalScrollDistance = Math.abs(scrollEnd - scrollStart);
      const currentScroll = Math.abs(scrollStart);
      
      const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
      setScrollProgress(progress);

      const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-white relative">
      
      {/* Sticky Header - visible only when component is active and before last step */}
      {isComponentVisible && activeStep < steps.length - 1 && (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1 text-xs font-medium text-red-600">
                  <Play size={12} />
                  Step {activeStep + 1} of {steps.length}
                </div>
                <h3 className="text-sm font-bold text-red-900 mt-1">
                  {steps[activeStep].title}
                </h3>
              </div>
              <div className="flex-1 max-w-md mx-8">
                <div className="h-1 bg-red-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-900 transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-xs text-red-500 font-medium">
                {Math.round(((activeStep + 1) / steps.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator - Only visible when component is actively being scrolled and before last step */}
      {isComponentVisible && activeStep < steps.length - 1 && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-30">
          <div className="flex flex-col items-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`
                  w-2 h-8 rounded-full transition-all duration-300 cursor-pointer
                  ${index <= activeStep ? 'bg-red-900' : 'bg-red-200 hover:bg-red-300'}
                `}
                onClick={() => {
                  // Optional: Allow users to click on indicators to jump to specific steps
                  const targetProgress = index / (steps.length - 1);
                  const containerHeight = containerRef.current?.scrollHeight || 0;
                  const targetScroll = containerRef.current?.offsetTop + (targetProgress * containerHeight);
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="sticky top-4 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-600 mb-6">
                  <Play size={16} />
                  Our Process
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How We Build Your
                  <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                    Digital Success
                  </span>
                </h2>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-red-200 min-h-[300px] flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-red-700 text-white rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit">
                  Step {activeStep + 1}
                  <ArrowRight size={16} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {steps[activeStep].description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${index <= activeStep 
                        ? 'bg-red-700 scale-110' 
                        : 'bg-red-300 hover:bg-red-400'
                      }
                    `}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
                  <img
                    src={steps[activeStep].image}
                    alt={`${steps[activeStep].title} illustration`}
                    className="w-full h-full object-contain p-8 transition-opacity duration-500"
                    style={{ 
                      filter: 'drop-shadow(0 10px 25px rgba(247, 16, 16, 0.1))'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - visible only when component is active and before last step */}
      {/* {isComponentVisible && activeStep < steps.length - 1 && (
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">
                {steps[activeStep].title}
              </span>
              <span className="text-xs text-gray-500">
                {activeStep + 1}/{steps.length}
              </span>
            </div>
            <div className="flex gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`
                    h-1 rounded-full flex-1 transition-all duration-300
                    ${index <= activeStep ? 'bg-gray-900' : 'bg-gray-200'}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      )} */}

      
    </div>
  );
};

export default ProcessFlow;



// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Play, CheckCircle2, ArrowRight } from 'lucide-react';

// const ProcessFlow = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   const steps = [
//     {
//       id: 1,
//       title: "Discovery",
//       description: "Understanding your requirements and business goals",
//       detail: "We start by diving deep into your needs, analyzing your current situation, and identifying opportunities for improvement.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       title: "Planning",
//       description: "Strategic roadmap and technical architecture",
//       detail: "Creating a comprehensive plan with timelines, milestones, and technical specifications tailored to your objectives.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       title: "Design",
//       description: "User experience and interface creation",
//       detail: "Crafting intuitive designs that prioritize user experience while maintaining aesthetic appeal and functionality.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       title: "Development",
//       description: "Building your application with modern technology",
//       detail: "Writing clean, scalable code using the latest technologies and best practices for optimal performance.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       title: "Testing",
//       description: "Quality assurance and performance optimization",
//       detail: "Rigorous testing across multiple scenarios to ensure reliability, security, and seamless user experience.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       title: "Integration",
//       description: "Connecting systems and third-party services",
//       detail: "Seamlessly integrating with existing systems and external APIs to create a unified ecosystem.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       title: "Deployment",
//       description: "Launching your application to production",
//       detail: "Carefully orchestrated deployment with monitoring and rollback capabilities for a smooth launch.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       title: "Monitoring",
//       description: "Performance tracking and issue resolution",
//       detail: "Continuous monitoring of system health, performance metrics, and user behavior analytics.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       title: "Support",
//       description: "Ongoing maintenance and feature updates",
//       detail: "Long-term partnership with regular updates, maintenance, and feature enhancements as your business grows.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const containerRect = container.getBoundingClientRect();
//       const containerTop = containerRect.top;
//       const containerHeight = containerRect.height;
//       const windowHeight = window.innerHeight;

//       if (containerTop > windowHeight || containerTop + containerHeight < 0) {
//         return;
//       }

//       const scrollStart = containerTop;
//       const scrollEnd = containerTop - windowHeight + containerHeight;
//       const totalScrollDistance = Math.abs(scrollEnd - scrollStart);
//       const currentScroll = Math.abs(scrollStart);
      
//       const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
//       setScrollProgress(progress);

//       const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
//       setActiveStep(stepIndex);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [steps.length]);

//   return (
//     <div ref={containerRef} className="min-h-[400vh] bg-white relative">
      
//       {/* Sticky Header - visible only before last step */}
//       {activeStep < steps.length - 1 && (
//         <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-red-100">
//           <div className="max-w-7xl mx-auto px-6 py-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1 text-xs font-medium text-red-600">
//                   <Play size={12} />
//                   Step {activeStep + 1} of {steps.length}
//                 </div>
//                 <h3 className="text-sm font-bold text-red-900 mt-1">
//                   {steps[activeStep].title}
//                 </h3>
//               </div>
//               <div className="flex-1 max-w-md mx-8">
//                 <div className="h-1 bg-red-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-red-900 transition-all duration-300 ease-out rounded-full"
//                     style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//                   />
//                 </div>
//               </div>
//               <div className="text-xs text-red-500 font-medium">
//                 {Math.round(((activeStep + 1) / steps.length) * 100)}%
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="sticky top-4 h-screen flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-600 mb-6">
//                   <Play size={16} />
//                   Our Process
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                   How We Build Your
//                   <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
//                     Digital Success
//                   </span>
//                 </h2>
//               </div>

//               <div className="bg-gray-50 rounded-3xl p-8 border border-red-200 min-h-[300px] flex flex-col justify-center">
//                 <div className="inline-flex items-center gap-2 bg-red-700 text-white rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit">
//                   Step {activeStep + 1}
//                   <ArrowRight size={16} />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   {steps[activeStep].title}
//                 </h3>
//                 <p className="text-gray-600 text-lg mb-6">
//                   {steps[activeStep].description}
//                 </p>
//                 <p className="text-gray-700 leading-relaxed">
//                   {steps[activeStep].detail}
//                 </p>
//               </div>

//               <div className="flex items-center gap-3 justify-center lg:justify-start">
//                 {steps.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`
//                       w-3 h-3 rounded-full transition-all duration-300
//                       ${index <= activeStep 
//                         ? 'bg-red-700 scale-110' 
//                         : 'bg-red-300 hover:bg-red-400'
//                       }
//                     `}
//                     onClick={() => setActiveStep(index)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="relative aspect-square max-w-lg mx-auto">
//                 <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
//                   <img
//                     src={steps[activeStep].image}
//                     alt={`${steps[activeStep].title} illustration`}
//                     className="w-full h-full object-contain p-8 transition-opacity duration-500"
//                     style={{ 
//                       filter: 'drop-shadow(0 10px 25px rgba(247, 16, 16, 0.1))'
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//                   {activeStep < steps.length - 1 && (
//         <div className="fixed right-6  transform -translate-y-1/2 hidden lg:block z-40">
//           <div className="flex flex-col items-center gap-2">
//             {steps.map((_, index) => (
//               <div
//                 key={index}
//                 className={`
//                   w-2 h-8 rounded-full transition-all duration-300
//                   ${index <= activeStep ? 'bg-red-900' : 'bg-red-200'}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
//         <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-4">
//           <div className="flex items-center justify-between mb-3">
//             <span className="text-sm font-medium text-gray-900">
//               {steps[activeStep].title}
//             </span>
//             <span className="text-xs text-gray-500">
//               {activeStep + 1}/{steps.length}
//             </span>
//           </div>
//           <div className="flex gap-1">
//             {steps.map((_, index) => (
//               <div
//                 key={index}
//                 className={`
//                   h-1 rounded-full flex-1 transition-all duration-300
//                   ${index <= activeStep ? 'bg-gray-900' : 'bg-gray-200'}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator - visible only before last step */}

//     </div>
//   );
// };

// export default ProcessFlow;










// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Play, CheckCircle2, ArrowRight } from 'lucide-react';

// const ProcessFlow = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);
//   const stepsRef = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       title: "Discovery",
//       description: "Understanding your requirements and business goals",
//       detail: "We start by diving deep into your needs, analyzing your current situation, and identifying opportunities for improvement.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       title: "Planning",
//       description: "Strategic roadmap and technical architecture",
//       detail: "Creating a comprehensive plan with timelines, milestones, and technical specifications tailored to your objectives.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       title: "Design",
//       description: "User experience and interface creation",
//       detail: "Crafting intuitive designs that prioritize user experience while maintaining aesthetic appeal and functionality.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       title: "Development",
//       description: "Building your application with modern technology",
//       detail: "Writing clean, scalable code using the latest technologies and best practices for optimal performance.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       title: "Testing",
//       description: "Quality assurance and performance optimization",
//       detail: "Rigorous testing across multiple scenarios to ensure reliability, security, and seamless user experience.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       title: "Integration",
//       description: "Connecting systems and third-party services",
//       detail: "Seamlessly integrating with existing systems and external APIs to create a unified ecosystem.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       title: "Deployment",
//       description: "Launching your application to production",
//       detail: "Carefully orchestrated deployment with monitoring and rollback capabilities for a smooth launch.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       title: "Monitoring",
//       description: "Performance tracking and issue resolution",
//       detail: "Continuous monitoring of system health, performance metrics, and user behavior analytics.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       title: "Support",
//       description: "Ongoing maintenance and feature updates",
//       detail: "Long-term partnership with regular updates, maintenance, and feature enhancements as your business grows.",
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const containerRect = container.getBoundingClientRect();
//       const containerTop = containerRect.top;
//       const containerHeight = containerRect.height;
//       const windowHeight = window.innerHeight;

//       // Check if container is in view
//       if (containerTop > windowHeight || containerTop + containerHeight < 0) {
//         return;
//       }

//       // Calculate scroll progress through the container
//       const scrollStart = containerTop;
//       const scrollEnd = containerTop - windowHeight + containerHeight;
//       const totalScrollDistance = Math.abs(scrollEnd - scrollStart);
//       const currentScroll = Math.abs(scrollStart);
      
//       const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
//       setScrollProgress(progress);

//       // Calculate which step should be active based on scroll progress
//       const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
//       setActiveStep(stepIndex);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [steps.length]);

//   return (
//     <div ref={containerRef} className="min-h-[400vh] bg-white relative">
//       {/* Sticky Header */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-red-100">
//         <div className="max-w-7xl mx-auto px-6 py-4">
       
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1 text-xs font-medium text-red-600">
//                 <Play size={12} />
//                 Step {activeStep + 1} of {steps.length}
//               </div>
//               <h3 className="text-sm font-bold text-red-900 mt-1">
//                 {steps[activeStep].title}
//               </h3>
//             </div>
            
//             {/* Progress Bar */}
//             <div className="flex-1 max-w-md mx-8">
//               <div className="h-1 bg-red-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-red-900 transition-all duration-300 ease-out rounded-full"
//                   style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//                 />
//               </div>
//             </div>
            
//             <div className="text-xs text-red-500 font-medium">
//               {Math.round(((activeStep + 1) / steps.length) * 100)}%
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="sticky top-4 h-screen flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Side - Content */}
//             <div className="space-y-8">
//               {/* Header */}
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-600 mb-6">
//                   <Play size={16} />
//                   Our Process
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                   How We Build Your
//                   <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
//                     Digital Success
//                   </span>
//                 </h2>
//               </div>

//               {/* Active Step Content */}
//               <div className="bg-gray-50 rounded-3xl p-8 border border-red-200 min-h-[300px] flex flex-col justify-center">
//                 <div className="inline-flex items-center gap-2 bg-red-700 text-white rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit">
//                   Step {activeStep + 1}
//                   <ArrowRight size={16} />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   {steps[activeStep].title}
//                 </h3>
//                 <p className="text-gray-600 text-lg mb-6">
//                   {steps[activeStep].description}
//                 </p>
//                 <p className="text-gray-700 leading-relaxed">
//                   {steps[activeStep].detail}
//                 </p>
//               </div>

//               {/* Step Navigation Dots */}
//               <div className="flex items-center gap-3 justify-center lg:justify-start">
//                 {steps.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`
//                       w-3 h-3 rounded-full transition-all duration-300
//                       ${index <= activeStep 
//                         ? 'bg-red-700 scale-110' 
//                         : 'bg-red-300 hover:bg-red-400'
//                       }
//                     `}
//                     onClick={() => setActiveStep(index)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Image */}
//             <div className="relative">
//               <div className="relative aspect-square max-w-lg mx-auto">
//                 {/* Image Container with Fade Transition */}
//                 <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
//                   <img
//                     src={steps[activeStep].image}
//                     alt={`${steps[activeStep].title} illustration`}
//                     className="w-full h-full object-contain p-8 transition-opacity duration-500"
//                     style={{ 
//                       filter: 'drop-shadow(0 10px 25px rgba(247, 16, 16, 0.1))'
//                     }}
//                   />
//                 </div>
                
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Steps Navigation */}
//       <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
//         <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-4">
//           <div className="flex items-center justify-between mb-3">
//             <span className="text-sm font-medium text-gray-900">
//               {steps[activeStep].title}
//             </span>
//             <span className="text-xs text-gray-500">
//               {activeStep + 1}/{steps.length}
//             </span>
//           </div>
//           <div className="flex gap-1">
//             {steps.map((_, index) => (
//               <div
//                 key={index}
//                 className={`
//                   h-1 rounded-full flex-1 transition-all duration-300
//                   ${index <= activeStep ? 'bg-gray-900' : 'bg-gray-200'}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-40">
//         <div className="flex flex-col items-center gap-2">
//           {steps.map((_, index) => (
//             <div
//               key={index}
//               className={`
//                 w-2 h-8 rounded-full transition-all duration-300
//                 ${index <= activeStep ? 'bg-red-900' : 'bg-red-200'}
//               `}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Final CTA Section */}
//       {/* <div className="relative z-10 bg-white pt-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center">
//             <div className="bg-gray-900 rounded-3xl p-12 text-white">
//               <h3 className="text-3xl font-bold mb-4">
//                 Ready to Start Your Journey?
//               </h3>
//               <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//                 Let's discuss how our proven process can transform your ideas into a powerful digital solution
//               </p>
//               <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
//                 Get Started Today
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default ProcessFlow;


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, ArrowUp } from 'lucide-react';

// const ResponsiveTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const stepsRefs = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = Math.min(scrollTop / docHeight, 1);
      
//       setScrollProgress(progress);
//       setShowScrollTop(scrollTop > 500);
      
//       // Find which step is currently in view
//       let currentStep = 0;
//       stepsRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const elementTop = rect.top;
//           const elementBottom = rect.bottom;
//           const windowHeight = window.innerHeight;
          
//           const activeZoneTop = windowHeight * 0.3;
//           const activeZoneBottom = windowHeight * 0.7;
          
//           if (elementTop <= activeZoneBottom && elementBottom >= activeZoneTop) {
//             currentStep = index;
//           }
//         }
//       });
      
//       setActiveStep(currentStep);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [steps.length]);

//   const scrollToStep = (index) => {
//     const element = stepsRefs.current[index];
//     if (element) {
//       const elementTop = element.offsetTop;
//       const windowHeight = window.innerHeight;
//       const elementHeight = element.offsetHeight;
      
//       const scrollTo = elementTop - (windowHeight - elementHeight) / 2;
      
//       window.scrollTo({
//         top: scrollTo,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="flex">
//         {/* Desktop Sidebar */}
//         <div className="hidden lg:block sticky top-32 w-80 xl:w-96 bg-red-50 border-r border-gray-100 h-screen">
//           <div className="flex flex-col h-full">
//             <div className="flex-1 overflow-y-auto p-6 pt-6 mt-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Steps</h3>
//               <div className="space-y-2">
//                 {steps.map((step, index) => (
//                   <button
//                     key={step.id}
//                     onClick={() => scrollToStep(index)}
//                     className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
//                       index === activeStep
//                         ? 'bg-white shadow-sm border border-gray-200'
//                         : 'hover:bg-white hover:shadow-sm'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
//                         index === activeStep
//                           ? 'bg-red-500 text-white'
//                           : index < activeStep
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                       }`}>
//                         {index < activeStep ? <Check className="w-4 h-4" /> : step.number}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className={`font-medium transition-colors duration-200 text-base ${
//                           index === activeStep ? 'text-gray-900' : 'text-gray-700'
//                         }`}>
//                           {step.title}
//                         </div>
//                         <div className="text-xs text-gray-500 mt-1 truncate">
//                           {step.description.substring(0, 40)}...
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200">
//               <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
//               <div className="w-full h-1 bg-red-200 rounded-full">
//                 <div 
//                   className="h-full bg-gray-900 rounded-full transition-all duration-500"
//                   style={{ width: `${scrollProgress * 100}%` }}
//                 />
//               </div>
//               <div className="text-xs text-gray-500 mt-1">
//                 {Math.round(scrollProgress * 100)}% Complete
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 pt-8 lg:pt-32">
//           {/* Mobile Section Heading */}
//           <div className="lg:hidden px-4 mb-8">
//             <div className="text-center">
//               <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h1>
//               <p className="text-gray-600">Follow our streamlined 9-step process</p>
//             </div>
//           </div>

//           {/* Scroll to Top Button */}
//           {showScrollTop && (
//             <button
//               onClick={scrollToTop}
//               className="fixed bottom-6 right-4 z-40 lg:bottom-8 lg:right-8 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
//             >
//               <ArrowUp className="w-5 h-5" />
//             </button>
//           )}

//           {/* Steps Content */}
//           <div className="space-y-8 lg:space-y-12 pb-20">
//             {steps.map((step, index) => (
//               <div
//                 key={step.id}
//                 ref={el => stepsRefs.current[index] = el}
//                 className="flex items-center justify-center p-4 lg:p-8"
//               >
//                 <div className="max-w-6xl mx-auto w-full">
//                   <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100 overflow-hidden">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//                       {/* Content Side */}
//                       <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
//                         <div className="mb-6">
//                           <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-xl text-lg sm:text-xl lg:text-2xl font-bold mb-4">
//                             {step.number}
//                           </div>
//                           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{step.title}</h2>
//                           <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
//                             {step.description}
//                           </p>
//                         </div>

//                         {/* Details */}
//                         <div className="space-y-3 mb-6 lg:mb-0">
//                           {step.details.map((detail, idx) => (
//                             <div key={idx} className="flex items-start gap-3">
//                               <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
//                               <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Navigation */}
//                         <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-100">
//                           <button
//                             onClick={() => index < steps.length - 1 && scrollToStep(index + 1)}
//                             disabled={index === steps.length - 1}
//                             className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 lg:px-7 py-3 lg:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
//                           >
//                             {index === steps.length - 1 ? 'Process Complete' : 'Next Step'}
//                             {index < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
//                           </button>
//                           <span className="text-sm text-gray-500">
//                             {index + 1} of {steps.length}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Image Side */}
//                       <div className="bg-red-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[250px] sm:min-h-[300px] lg:min-h-0">
//                         <div className="relative">
//                           <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white rounded-xl shadow-lg p-4 lg:p-6 flex items-center justify-center">
//                             <img
//                               src={step.image}
//                               alt={step.title}
//                               className="max-w-full max-h-full object-contain"
//                             />
//                           </div>
//                           {/* Decorative elements - hidden on mobile */}
//                           <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-50 hidden sm:block" />
//                           <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-30 hidden sm:block" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveTimeline;

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, Menu, X } from 'lucide-react';

// const ResponsiveTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [processComplete, setProcessComplete] = useState(false);
//   const stepsRefs = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the total page scroll
//       const scrollTop = window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = Math.min(scrollTop / docHeight, 1);
      
//       setScrollProgress(progress);
      
//       // Find which step is currently in view
//       let currentStep = 0;
//       stepsRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const elementTop = rect.top;
//           const elementBottom = rect.bottom;
//           const windowHeight = window.innerHeight;
          
//           // Consider a step active when it's in the center 40% of the viewport
//           const activeZoneTop = windowHeight * 0.3;
//           const activeZoneBottom = windowHeight * 0.7;
          
//           if (elementTop <= activeZoneBottom && elementBottom >= activeZoneTop) {
//             currentStep = index;
//           }
//         }
//       });
      
//       setActiveStep(currentStep);
      
//       // Check if process is complete (on last step and scrolled near bottom)
//       const isComplete = currentStep === steps.length - 1 && progress > 0.85;
//       setProcessComplete(isComplete);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Call once to set initial state
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [steps.length]);

//   const scrollToStep = (index) => {
//     const element = stepsRefs.current[index];
//     if (element) {
//       const elementTop = element.offsetTop;
//       const windowHeight = window.innerHeight;
//       const elementHeight = element.offsetHeight;
      
//       // Scroll to center the element in the viewport, accounting for navbar
//       const scrollTo = elementTop - (windowHeight - elementHeight) / 2 - 100; // Extra offset for navbar
      
//       window.scrollTo({
//         top: scrollTo,
//         behavior: 'smooth'
//       });
//     }
    
//     // Close sidebar on mobile after navigation
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Mobile Header - Only show when process is not complete */}
//       {!processComplete && (
//         <div className="fixed top-20 left-0 right-0 z-50 bg-white border-b border-gray-100 lg:hidden">
//           <div className="flex items-center justify-between px-4 py-4">
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">Our Process</h1>
//               <p className="text-sm text-gray-600">Step {activeStep + 1} of {steps.length}</p>
//             </div>
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-2 rounded-lg hover:bg-red-100"
//             >
//               {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//           <div className="px-4 pb-3">
//             <div className="w-full h-1 bg-red-200 rounded-full">
//               <div 
//                 className="h-full bg-gray-900 rounded-full transition-all duration-300"
//                 style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex">
//         {/* Mobile Sidebar Overlay */}
//         {sidebarOpen && !processComplete && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* Sidebar - Only show when process is not complete */}
//         {!processComplete && (
//           <div className={`
//             fixed lg:sticky lg:top-32 inset-y-0 left-0 z-40 lg:z-auto
//             w-80 lg:w-80 xl:w-96 bg-red-50 border-r border-gray-100 
//             transform transition-transform duration-300 ease-in-out lg:transform-none
//             ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//             flex flex-col h-screen
//           `}>
//             {/* Step Navigation */}
//             <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-6 lg:pt-6 mt-20 lg:mt-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Steps</h3>
//               <div className="space-y-2">
//                 {steps.map((step, index) => (
//                   <button
//                     key={step.id}
//                     onClick={() => scrollToStep(index)}
//                     className={`w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-200 group ${
//                       index === activeStep
//                         ? 'bg-white shadow-sm border border-gray-200'
//                         : 'hover:bg-white hover:shadow-sm'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold transition-all duration-200 ${
//                         index === activeStep
//                           ? 'bg-red-500 text-white'
//                           : index < activeStep
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                       }`}>
//                         {index < activeStep ? <Check className="w-3 h-3 lg:w-4 lg:h-4" /> : step.number}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
//                           index === activeStep ? 'text-gray-900' : 'text-gray-700'
//                         }`}>
//                           {step.title}
//                         </div>
//                         <div className="text-xs text-gray-500 mt-1 truncate">
//                           {step.description.substring(0, 40)}...
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <div className="p-4 lg:p-6 border-t border-gray-200">
//               <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
//               <div className="w-full h-1 bg-red-200 rounded-full">
//                 <div 
//                   className="h-full bg-gray-900 rounded-full transition-all duration-500"
//                   style={{ width: `${scrollProgress * 100}%` }}
//                 />
//               </div>
//               <div className="text-xs text-gray-500 mt-1">
//                 {Math.round(scrollProgress * 100)}% Complete
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Content */}
//         <div className={`flex-1 ${processComplete ? 'pt-32 lg:pt-32' : 'pt-20 lg:pt-32'}`}>
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               ref={el => stepsRefs.current[index] = el}
//               className="min-h-screen flex items-center justify-center p-4 lg:p-8"
//             >
//               <div className="max-w-6xl mx-auto w-full">
//                 <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100 overflow-hidden">
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//                     {/* Content Side */}
//                     <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
//                       <div className="mb-6">
//                         <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-xl text-lg sm:text-xl lg:text-2xl font-bold mb-4">
//                           {step.number}
//                         </div>
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{step.title}</h2>
//                         <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
//                           {step.description}
//                         </p>
//                       </div>

//                       {/* Details */}
//                       <div className="space-y-3 mb-6 lg:mb-0">
//                         {step.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-start gap-3">
//                             <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
//                             <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Navigation */}
//                       <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-100">
//                         <button
//                           onClick={() => index < steps.length - 1 && scrollToStep(index + 1)}
//                           disabled={index === steps.length - 1}
//                           className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 lg:px-7 py-3 lg:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
//                         >
//                           {index === steps.length - 1 ? 'Process Complete' : 'Next Step'}
//                           {index < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
//                         </button>
//                         <span className="text-sm text-gray-500">
//                           {index + 1} of {steps.length}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Image Side */}
//                     <div className="bg-red-50 p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
//                       <div className="relative">
//                         <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white rounded-xl shadow-lg p-4 lg:p-6 flex items-center justify-center">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="max-w-full max-h-full object-contain"
//                           />
//                         </div>
//                         {/* Decorative elements - hidden on mobile */}
//                         <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-50 hidden sm:block" />
//                         <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-30 hidden sm:block" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveTimeline;

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, ArrowRight } from 'lucide-react';

// const ProfessionalTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const stepsRefs = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       stepsRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const isVisible = rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4;
//           if (isVisible) {
//             setActiveStep(index);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-red-400 mb-4">Our Process</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A comprehensive 9-step workflow designed to transform your data with precision and reliability
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

//           {/* Steps */}
//           <div className="space-y-12">
//             {steps.map((step, index) => (
//               <div
//                 key={step.id}
//                 ref={el => stepsRefs.current[index] = el}
//                 className={`relative transition-all duration-500 ${
//                   index === activeStep ? 'opacity-100' : 'opacity-70'
//                 }`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-6 w-4 h-4 bg-white border-2 border-gray-300 rounded-full hidden md:block">
//                   <div className={`w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
//                     index === activeStep ? 'bg-red-400' : 
//                     index < activeStep ? 'bg-gray-400' : 'bg-transparent'
//                   }`}></div>
//                 </div>

//                 {/* Content Card */}
//                 <div className="md:ml-16 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
//                   <div className="grid md:grid-cols-3 gap-6 p-6">
//                     {/* Step Info */}
//                     <div className="md:col-span-2 space-y-4">
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 bg-red-400 text-white rounded-lg flex items-center justify-center font-bold text-sm">
//                           {step.number}
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-bold text-red-400">{step.title}</h3>
//                           <p className="text-sm text-gray-500">Step {index + 1} of {steps.length}</p>
//                         </div>
//                       </div>
                      
//                       <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      
//                       {/* Details Grid */}
//                       <div className="grid sm:grid-cols-2 gap-3">
//                         {step.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-start space-x-2">
//                             <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//                             <span className="text-sm text-gray-600">{detail}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Next Step Indicator */}
//                       {index < steps.length - 1 && (
//                         <div className="pt-4 border-t border-gray-100">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <span>Next: {steps[index + 1].title}</span>
//                             <ArrowRight className="w-4 h-4 ml-2" />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Image */}
//                     <div className="flex items-center justify-center">
//                       <div className="w-48 h-48 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center p-4">
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="max-w-full max-h-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Summary */}
//         <div className="mt-16 text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
//           <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Check className="w-8 h-8 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-red-400 mb-2">Process Complete</h3>
//           <p className="text-gray-600 mb-6">
//             Your data has been successfully processed through our comprehensive 9-step pipeline
//           </p>
//           <button className="bg-red-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTimeline;


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, ArrowRight, Clock, Users, Shield, Zap } from 'lucide-react';

// const ProfessionalAnimatedTimeline = () => {
//   const [visibleSteps, setVisibleSteps] = useState([]);
//   const [activeStep, setActiveStep] = useState(-1);
//   const [scrollDirection, setScrollDirection] = useState('down');
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const stepsRefs = useRef([]);
//   const animationTimeouts = useRef([]);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg",
//       icon: Shield,
//       color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg",
//       icon: Zap,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg",
//       icon: Clock,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg",
//       icon: Zap,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg",
//       icon: Users,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg",
//       icon: Shield,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg",
//       icon: Check,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg",
//       icon: Users,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg",
//       icon: ArrowRight,
//        color: "bg-gradient-to-b from-white to-Secondary/30 overflow-hidden"
//     }
//   ];

//   // Clear all timeouts
//   const clearAllTimeouts = () => {
//     animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
//     animationTimeouts.current = [];
//   };

//   // Handle scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const direction = currentScrollY > lastScrollY ? 'down' : 'up';
//       setScrollDirection(direction);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const stepIndex = parseInt(entry.target.dataset.stepIndex);
          
//           if (entry.isIntersecting) {
//             // Scrolling down - show steps sequentially
//             if (scrollDirection === 'down') {
//               setVisibleSteps(prev => {
//                 const newVisible = [...new Set([...prev, stepIndex])].sort((a, b) => a - b);
                
//                 // Clear previous timeouts
//                 clearAllTimeouts();
                
//                 // Animate only new steps
//                 const newSteps = newVisible.filter(step => !prev.includes(step));
//                 newSteps.forEach((step, idx) => {
//                   const timeout = setTimeout(() => {
//                     setActiveStep(step);
//                   }, idx * 200);
//                   animationTimeouts.current.push(timeout);
//                 });
                
//                 return newVisible;
//               });
//             } else {
//               // Scrolling up - show current step immediately
//               setVisibleSteps(prev => {
//                 if (!prev.includes(stepIndex)) {
//                   return [...prev, stepIndex].sort((a, b) => a - b);
//                 }
//                 return prev;
//               });
//               setActiveStep(stepIndex);
//             }
//           } else {
//             // Element is not visible
//             const rect = entry.target.getBoundingClientRect();
            
//             if (scrollDirection === 'up' && rect.bottom < 0) {
//               // Scrolling up and element is above viewport - remove it
//               setVisibleSteps(prev => {
//                 const filtered = prev.filter(step => step !== stepIndex);
                
//                 // Clear timeouts and set active step
//                 clearAllTimeouts();
                
//                 if (filtered.length > 0) {
//                   const timeout = setTimeout(() => {
//                     setActiveStep(Math.max(...filtered));
//                   }, 100);
//                   animationTimeouts.current.push(timeout);
//                 } else {
//                   setActiveStep(-1);
//                 }
                
//                 return filtered;
//               });
//             } else if (scrollDirection === 'down' && rect.top > window.innerHeight) {
//               // Scrolling down and element is below viewport - remove it
//               setVisibleSteps(prev => {
//                 const filtered = prev.filter(step => step !== stepIndex);
                
//                 if (filtered.length > 0) {
//                   setActiveStep(Math.max(...filtered));
//                 } else {
//                   setActiveStep(-1);
//                 }
                
//                 return filtered;
//               });
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.4,
//         rootMargin: '-20% 0px -20% 0px'
//       }
//     );

//     stepsRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       observer.disconnect();
//       clearAllTimeouts();
//     };
//   }, [scrollDirection]);

//   return (
    // <div className="bg-white">
    //   {/* Enhanced Header Section */}
    //   <div className="max-w-6xl mx-auto px-4 py-20">
    //     <div className="text-center mb-20">
    //       <div className="inline-flex items-center justify-center w-16 h-16 bg-background shadow-glow opacity-0 animate-scale-in delay-700 rounded-2xl mb-6">
    //         <Zap className="w-8 h-8 text-white" />
    //       </div>
    //       <h1 className="text-5xl font-bold text-red-400 mb-6 tracking-tight">Our Process</h1>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //         A comprehensive 9-step workflow designed to transform your data with precision, security, and reliability
    //       </p>
    //       <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
    //         <div className="flex items-center space-x-2">
    //           <Shield className="w-4 h-4" />
    //           <span>Enterprise Security</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <Clock className="w-4 h-4" />
    //           <span>Real-time Processing</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <Users className="w-4 h-4" />
    //           <span>Human-AI Collaboration</span>
    //         </div>
    //       </div>
    //     </div>

//         {/* Enhanced Timeline */}
//         <div className="relative">
//           {/* Dynamic Progress Line */}
//           <div className="absolute left-8 top-0 w-px bg-gray-200 hidden md:block transition-all duration-1000 ease-out"
//                style={{ 
//                  height: visibleSteps.length > 0 ? `${(Math.max(...visibleSteps) + 1) / steps.length * 100}%` : '0%'
//                }}>
//             {/* Progress indicator */}
//             <div className="absolute top-0 w-px bg-red-400 transition-all duration-1000 ease-out"
//                  style={{ 
//                    height: `${(activeStep + 1) / steps.length * 100}%`
//                  }}>
//             </div>
//           </div>

//           {/* Enhanced Steps */}
//           <div className="space-y-16">
//             {steps.map((step, index) => {
//               const isVisible = visibleSteps.includes(index);
//               const isActive = index === activeStep;
//               const isPrevious = visibleSteps.includes(index) && index < activeStep;
//               const IconComponent = step.icon;
              
//               return (
//                 <div
//                   key={step.id}
//                   ref={el => {
//                     stepsRefs.current[index] = el;
//                     if (el) el.dataset.stepIndex = index;
//                   }}
//                   className={`relative transition-all duration-800 ease-out transform ${
//                     isVisible 
//                       ? 'opacity-100 translate-y-0 scale-100' 
//                       : 'opacity-0 translate-y-16 scale-95'
//                   }`}
//                   style={{
//                     transitionDelay: isVisible ? `${(visibleSteps.indexOf(index) * 150)}ms` : '0ms'
//                   }}
//                 >
//                   {/* Enhanced Timeline Dot */}
//                   <div className={`absolute left-6 w-4 h-4 bg-white border-2 rounded-full hidden md:block transition-all duration-500 z-10 ${
//                     isVisible ? 'border-red-400 scale-125 shadow-lg' : 'border-gray-300 scale-100'
//                   }`}>
//                     <div className={`w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
//                       isActive ? 'bg-red-400 scale-150' : 
//                       isPrevious ? 'bg-gray-800 scale-100' : 
//                       'bg-transparent scale-75'
//                     }`}></div>
                    
//                     {/* Enhanced pulse effect */}
//                     {isActive && (
//                       <>
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-red-400 rounded-full animate-ping opacity-20"></div>
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-red-400 rounded-full animate-ping opacity-10 animation-delay-150"></div>
//                       </>
//                     )}
//                   </div>

//                   {/* Enhanced Content Card */}
//                   <div className={`md:ml-16 bg-white  rounded-xl transition-all duration-600 overflow-hidden ${
//                     isVisible 
//                       ? 'border-gray-200 shadow-xl transform translate-x-0' 
//                       : 'border-gray-100 shadow-none transform translate-x-12'
//                   } ${isActive ? 'ring-1 ring-red-400 ring-opacity-5 border-gray-300' : ''}`}>
                    
//                     {/* Card gradient background */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-opacity duration-500 ${
//                       isActive ? 'opacity-100' : 'opacity-0'
//                     }`}></div>
                    
//                     <div className="relative grid md:grid-cols-3 gap-8 p-8">
//                       {/* Enhanced Step Info */}
//                       <div className="md:col-span-2 space-y-6">
//                         <div className={`flex items-center space-x-4 transition-all duration-500 ${
//                           isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
//                         }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 200}ms` }}>
                          
//                           <div className={`w-14 h-14 bg-white text-red-500 rounded-xl flex items-center justify-center font-bold transition-all duration-600 ${
//                             isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
//                           }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 300}ms` }}>
//                             {step.number}
//                           </div>
                          
//                           <div className="flex-1">
//                             <div className={`transition-all duration-500 ${
//                               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                             }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 400}ms` }}>
//                               <div className="flex items-center space-x-2 mb-1">
//                                 <h3 className="text-2xl font-bold text-red-400">{step.title}</h3>
//                                 <IconComponent className="w-5 h-5 text-red-600" />
//                               </div>
//                               <p className="text-sm font-medium text-gray-500">Step {index + 1} of {steps.length}</p>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <p className={`text-gray-700 leading-relaxed text-lg transition-all duration-600 ${
//                           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//                         }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 500}ms` }}>
//                           {step.description}
//                         </p>
                        
//                         {/* Enhanced Details Grid */}
//                         <div className="grid sm:grid-cols-2 gap-4">
//                           {step.details.map((detail, idx) => (
//                             <div key={idx} className={`flex items-start space-x-3 p-3 bg-white bg-opacity-50 rounded-lg  transition-all duration-400 ${
//                               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
//                             }`} style={{ 
//                               transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 600 + (idx * 100)}ms` 
//                             }}>
//                               <div className={`w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
//                                 isVisible ? 'scale-100' : 'scale-0'
//                               }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 700 + (idx * 100)}ms` }}></div>
//                               <span className="text-sm text-gray-700 font-medium">{detail}</span>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Enhanced Next Step Indicator */}
//                         {index < steps.length - 1 && (
//                           <div className={`pt-6 border-t border-gray-200 transition-all duration-500 ${
//                             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                           }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 800}ms` }}>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center text-sm text-gray-600 font-medium">
//                                 <span>Next: {steps[index + 1].title}</span>
//                                 <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 ${
//                                   isActive ? 'translate-x-1 text-red-400' : ''
//                                 }`} />
//                               </div>
//                               <div className="text-xs text-gray-400">
//                                 {Math.round((index + 1) / steps.length * 100)}% Complete
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Enhanced Image Section */}
//                       <div className={`flex items-center justify-center transition-all duration-700 ${
//                         isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-6'
//                       }`} style={{ transitionDelay: `${(visibleSteps.indexOf(index) * 150) + 400}ms` }}>
//                         <div className={`relative w-52 h-52 bg-white rounded-2xl border-2 border-gray-100 flex items-center justify-center p-6 transition-all duration-500 ${
//                           isActive ? 'shadow-2xl scale-105 border-gray-200' : 'shadow-lg scale-100'
//                         }`}>
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="max-w-full max-h-full object-contain transition-transform duration-500"
//                           />
                          
//                           {/* Floating badge */}
//                           <div className={`absolute -top-3 -right-3 w-8 h-8 bg-red-400 text-white rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
//                             isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//                           }`}>
//                             {index + 1}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Enhanced Summary */}
//         <div className={`mt-20 text-center p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl  transition-all duration-1000 ${
//           visibleSteps.length >= steps.length - 1 
//             ? 'opacity-100 translate-y-0 scale-100' 
//             : 'opacity-0 translate-y-12 scale-95'
//         }`}>
//           <div className={`w-20 h-20 bg-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-700 ${
//             visibleSteps.length >= steps.length - 1 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
//           }`} style={{ transitionDelay: '200ms' }}>
//             <Check className="w-10 h-10 text-white" />
//           </div>
//           <h3 className={`text-3xl font-bold text-red-400 mb-4 transition-all duration-700 ${
//             visibleSteps.length >= steps.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//           }`} style={{ transitionDelay: '400ms' }}>
//             Process Complete
//           </h3>
//           <p className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 ${
//             visibleSteps.length >= steps.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//           }`} style={{ transitionDelay: '600ms' }}>
//             Your data has been successfully processed through our comprehensive 9-step pipeline with enterprise-grade security and precision
//           </p>
//           <button className={`bg-red-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-xl ${
//             visibleSteps.length >= steps.length - 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
//           }`} style={{ transitionDelay: '800ms' }}>
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalAnimatedTimeline;



// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Check, ArrowRight, Clock, Users, Shield, Zap, Play, Pause } from 'lucide-react';

// const AdvancedProcessFlow = () => {
//   const [visibleSteps, setVisibleSteps] = useState([]);
//   const [activeStep, setActiveStep] = useState(-1);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false);
//   const [hoveredStep, setHoveredStep] = useState(null);
//   const stepsRefs = useRef([]);
//   const autoPlayRef = useRef();

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Upload",
//       description: "Upload any format: text, scanned PDFs, images, or audio files through our secure platform.",
//       details: [
//         "Secure file upload with encryption",
//         "Support for multiple file formats",
//         "Batch processing capabilities",
//         "Real-time upload status tracking"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg",
//       icon: Shield,
//       color: "white",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Preprocessing",
//       description: "The system standardizes, compresses, and cleans the data, preparing it for accurate processing.",
//       details: [
//         "Automated data standardization",
//         "File compression and optimization",
//         "Quality enhancement algorithms",
//         "Format normalization processes"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg",
//       icon: Zap,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Transcription",
//       description: "Files such as images or audio are converted into machine-readable text using advanced AI technology.",
//       details: [
//         "Advanced OCR technology",
//         "Speech-to-text conversion",
//         "Multi-language support",
//         "High accuracy transcription"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg",
//       icon: Clock,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Extraction",
//       description: "Large Language Models extract key data points and generate structured JSON output with precision.",
//       details: [
//         "AI-powered data extraction",
//         "Structured JSON output",
//         "Intelligent field recognition",
//         "Context-aware processing"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg",
//       icon: Zap,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Human Review",
//       description: "When AI confidence is low, output is routed to expert human reviewers for validation and correction.",
//       details: [
//         "Expert quality assurance",
//         "Manual validation process",
//         "Error correction and feedback",
//         "Continuous improvement loop"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756977051/human_in_loop_not_edited_e8s6bf.svg",
//       icon: Users,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Post-Processing",
//       description: "JSON output undergoes validation, normalization, and compliance checks to ensure accuracy and consistency.",
//       details: [
//         "Data validation algorithms",
//         "Format standardization",
//         "Compliance verification",
//         "Final quality checks"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg",
//       icon: Shield,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Final Result",
//       description: "A verified, structured file processed by AI for speed and reviewed by humans for accuracy.",
//       details: [
//         "High-quality output guarantee",
//         "Structured data format",
//         "Ready for integration",
//         "Comprehensive documentation"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg",
//       icon: Check,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Client Approval",
//       description: "Clients review the final output and approve or request modifications based on their requirements.",
//       details: [
//         "Interactive review interface",
//         "Approval workflow management",
//         "Revision request handling",
//         "Client feedback integration"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073807/client_approval_1_iq7tnl.svg",
//       icon: Users,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Report Download",
//       description: "Once approved, reports are available for download in multiple formats for analysis and integration.",
//       details: [
//         "Multiple export formats",
//         "Instant download access",
//         "Integration-ready files",
//         "Comprehensive reporting"
//       ],
//       image: "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg",
//       icon: ArrowRight,
//       color: "from-red-500 to-red-600",
//       bgColor: "bg-red-50"
//     }
//   ];

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying) {
//       autoPlayRef.current = setInterval(() => {
//         setActiveStep(prev => {
//           const next = prev + 1;
//           if (next >= steps.length) {
//             setIsAutoPlaying(false);
//             return 0;
//           }
//           return next;
//         });
//       }, 2000);
//     } else {
//       clearInterval(autoPlayRef.current);
//     }

//     return () => clearInterval(autoPlayRef.current);
//   }, [isAutoPlaying, steps.length]);

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const stepIndex = parseInt(entry.target.dataset.stepIndex);
          
//           if (entry.isIntersecting) {
//             setVisibleSteps(prev => {
//               if (!prev.includes(stepIndex)) {
//                 const newVisible = [...prev, stepIndex].sort((a, b) => a - b);
//                 if (activeStep === -1) {
//                   setActiveStep(stepIndex);
//                 }
//                 return newVisible;
//               }
//               return prev;
//             });
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     stepsRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, [activeStep]);

//   return (
//    <div className="bg-white">
//       {/* Enhanced Header Section */}
//       <div className="max-w-6xl mx-auto px-4 py-20">
//         <div className="text-center mb-20">
          
//           <h1 className="text-5xl font-bold text-red-400 mb-6 tracking-tight">Our Process</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A comprehensive 9-step workflow designed to transform your data with precision, security, and reliability
//           </p>
//           <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
//             <div className="flex items-center space-x-2">
//               <Shield className="w-4 h-4 text-red-600" />
//               <span>Enterprise Security</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Clock className="w-4 h-4 text-red-600" />
//               <span>Real-time Processing</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="w-4 h-4 text-red-600" />
//               <span>Human-AI Collaboration</span>
//             </div>
//           </div>
//         </div>

//       {/* Process Flow Visualization */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* Flow Path Container */}
//         <div className="relative">
//           {/* Curved Path SVG */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ height: `${steps.length * 200}px` }}>
//             <defs>
//               <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#f63b3bff" stopOpacity="0.3" />
//                 <stop offset="50%" stopColor="#f65c5cff" stopOpacity="0.3" />
//                 <stop offset="100%" stopColor="#d40606ff" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>
//             <path
//               d={`M 100 50 ${steps.map((_, i) => {
//                 const y = i * 200 + 100;
//                 const x = i % 2 === 0 ? 100 : window.innerWidth - 200;
//                 return `Q ${window.innerWidth / 2} ${y - 50} ${x} ${y}`;
//               }).join(' ')}`}
//               stroke="url(#pathGradient)"
//               strokeWidth="3"
//               fill="none"
//               strokeDasharray="10,5"
//               className="animate-pulse"
//             />
//           </svg>

//           {/* Step Cards */}
//           <div className="space-y-8 lg:space-y-16">
//             {steps.map((step, index) => {
//               const isVisible = visibleSteps.includes(index);
//               const isActive = index === activeStep;
//               const isCompleted = index < activeStep;
//               const IconComponent = step.icon;
//               const isEven = index % 2 === 0;
              
//               return (
//                 <div
//                   key={step.id}
//                   ref={el => {
//                     stepsRefs.current[index] = el;
//                     if (el) el.dataset.stepIndex = index;
//                   }}
//                   className={`relative transition-all duration-1000 ease-out ${
//                     isVisible 
//                       ? 'opacity-100 translate-y-0 scale-100' 
//                       : 'opacity-0 translate-y-20 scale-95'
//                   }`}
//                   onMouseEnter={() => setHoveredStep(index)}
//                   onMouseLeave={() => setHoveredStep(null)}
//                 >
//                   <div className={`flex flex-col lg:flex-row items-center gap-8 ${
//                     isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                   }`}>
                    
//                     {/* Step Number & Icon */}
//                     <div className="relative flex-shrink-0">
//                       <div className={`w-16 h-16 rounded-3xl border-4 flex items-center justify-center transition-all duration-500 ${
//                         isActive 
//                           ? `bg-gradient-to-br ${step.color} border-white shadow-2xl scale-110` 
//                           : isCompleted
//                           ? 'bg-slate-700 border-slate-600 shadow-lg'
//                           : 'bg-white border-slate-200 shadow-md'
//                       }`}>
//                         <div className="text-center">
//                           <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
//                             isActive || isCompleted ? 'text-red-600' : 'text-slate-400'
//                           }`} />
//                           <div className={`text-sm font-bold ${
//                             isActive || isCompleted ? 'text-red-600' : 'text-slate-600'
//                           }`}>
//                             {step.number}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Status Indicator */}
//                       <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         isCompleted 
//                           ? 'bg-green-500 scale-100' 
//                           : isActive 
//                           ? 'bg-blue-500 scale-100 animate-pulse' 
//                           : 'bg-slate-300 scale-0'
//                       }`}>
//                         {isCompleted ? (
//                           <Check className="w-4 h-4 text-white" />
//                         ) : (
//                           <div className="w-2 h-2 bg-white rounded-full" />
//                         )}
//                       </div>

//                       {/* Connection Arrow */}
//                       {index < steps.length - 1 && (
//                         <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-500 ${
//                           isCompleted || isActive ? 'opacity-100' : 'opacity-30'
//                         }`}>
//                           <ChevronRight className={`w-6 h-6 rotate-90 ${
//                             isCompleted || isActive ? 'text-blue-500' : 'text-slate-300'
//                           }`} />
//                         </div>
//                       )}
//                     </div>

//                     {/* Content Card */}
//                     <div className={`flex-1 max-w-2xl transition-all duration-500 ${
//                       isActive ? 'scale-105' : 'scale-100'
//                     }`}>
//                       <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
//                         isActive 
//                           ? `${step.bgColor} border-2 border-slate-300 shadow-2xl` 
//                           : hoveredStep === index
//                           ? 'bg-white border-2 border-slate-200 shadow-xl'
//                           : 'bg-white border border-slate-100 shadow-md'
//                       }`}>
                        
//                         {/* Card Content */}
//                         <div className="p-8">
//                           <div className="flex items-start justify-between mb-6">
//                             <div className="flex-1">
//                               <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
//                               <p className="text-slate-600 leading-relaxed">{step.description}</p>
//                             </div>
                            
//                             {/* Image */}
//                             <div className={`ml-6 w-24 h-24 flex-shrink-0 transition-all duration-300 ${
//                               hoveredStep === index ? 'scale-110' : 'scale-100'
//                             }`}>
//                               <img
//                                 src={step.image}
//                                 alt={step.title}
//                                 className="w-full h-full object-contain"
//                               />
//                             </div>
//                           </div>

//                           {/* Details - Show on active or hover */}
//                           <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-500 ${
//                             isActive || hoveredStep === index 
//                               ? 'opacity-100 max-h-96' 
//                               : 'opacity-0 max-h-0 overflow-hidden'
//                           }`}>
//                             {step.details.map((detail, idx) => (
//                               <div
//                                 key={idx}
//                                 className={`flex items-start space-x-3 p-3 bg-white/70 rounded-lg transition-all duration-300 ${
//                                   isActive || hoveredStep === index ? 'translate-x-0' : '-translate-x-4'
//                                 }`}
//                                 style={{ 
//                                   transitionDelay: `${idx * 100}ms` 
//                                 }}
//                               >
//                                 <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${step.color}`} />
//                                 <span className="text-sm text-slate-700 font-medium">{detail}</span>
//                               </div>
//                             ))}
//                           </div>

//                           {/* Progress Bar */}
//                           <div className={`mt-6 transition-all duration-500 ${
//                             isActive ? 'opacity-100' : 'opacity-0'
//                           }`}>
                           
//                             <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
//                               <div 
//                                 className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
//                                 style={{ width: isActive ? '100%' : '0%' }}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* Hover Glow Effect */}
//                         <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-300 ${
//                           hoveredStep === index ? 'opacity-5' : ''
//                         }`} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

  
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AdvancedProcessFlow;