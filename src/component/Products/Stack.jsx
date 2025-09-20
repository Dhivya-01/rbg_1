// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useSearchParams } from "react-router-dom";
// import {
//   FileText,
//   MessageCircle,
//   Camera,
//   Database,
//   Cloud,
//   Settings,
//   Scale,
//   Network,
//   BarChart,
//   X,
// } from "lucide-react";
// import VisualDataGif from "../../assests/images/Stack.gif";
// import { Link } from "react-router-dom";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const MLStackPage = () => {
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   const slugify = (value) =>
//     String(value || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//   const stacks = [
//     {
//       title: "TextStack",
//       icon: FileText,
//       description:
//         "Dive into a world of rich textual data analysis. Our APIs empower you to categorize, extract, translate, and summarize text, providing a robust foundation for everything from customer feedback analysis to document intelligence.",
//       services: [
//         {
//           name: "Text Classifier",
//           description:
//             "Automatically organize and label text based on content, context, or tone.",
//         },
//         {
//           name: "Text Extractor",
//           description:
//             "Identify and extract key information such as entities, keywords, or specific fields from documents.",
//         },
//         {
//           name: "Text Translator",
//           description:
//             "Break language barriers with seamless translation across multiple languages.",
//         },
//         {
//           name: "Text Summarizer",
//           description:
//             "Condense long texts into concise, informative summaries.",
//         },
//       ],
//     },
//     {
//       title: "VoiceStack",
//       icon: MessageCircle,
//       description:
//         "VoiceStack brings voice data to life with APIs that transcribe, enhance, recognize, and synthesize speech. Tailored for applications in customer support, media, and beyond, VoiceStack makes your voice data accessible and actionable.",
//       services: [
//         {
//           name: "Voice Transcriber",
//           description:
//             "Convert spoken language into text accurately and efficiently.",
//         },
//         {
//           name: "Voice Enhancer",
//           description:
//             "Improve voice clarity by reducing background noise and refining audio quality.",
//         },
//         {
//           name: "Voice Recognition",
//           description:
//             "Identify speakers and understand voice patterns for security, customer profiling, and more.",
//         },
//         {
//           name: "Voice Diarizer",
//           description:
//             "Distinguish and label individual speakers within conversations.",
//         },
//         {
//           name: "Voice Classifier",
//           description:
//             "Categorize voice data based on mood, tone, or other acoustic features.",
//         },
//         {
//           name: "Voice Synthesizer",
//           description:
//             "Generate natural-sounding speech for text-to-speech applications.",
//         },
//       ],
//     },
//     {
//       title: "VisionStack",
//       icon: Camera,
//       description:
//         "VisionStack leverages computer vision to interpret and organize visual data. From transcribing visual content to detecting objects and segments, VisionStack turns images into structured, usable data.",
//       services: [
//         {
//           name: "Vision Transcriber",
//           description:
//             "Extract text and information from visual content, enhancing accessibility and archiving.",
//         },
//         {
//           name: "Vision Classifier",
//           description:
//             "Identify and categorize objects within images for streamlined image recognition.",
//         },
//         {
//           name: "Vision Segmenter",
//           description:
//             "Divide images into meaningful segments for granular analysis.",
//         },
//         {
//           name: "Vision Detector",
//           description:
//             "Detect objects, faces, or items in real-time for security, retail, and more.",
//         },
//         {
//           name: "Table Extractor",
//           description:
//             "Convert tables and structured visual data into usable, digital formats.",
//         },
//       ],
//     },
//   ];

//   const features = [
//     {
//       icon: Database,
//       title: "Dockerized and Auto-Scalable Microservices",
//       description:
//         "APIs are delivered as containerized microservices, allowing auto-scaling to handle diverse workloads and complex application orchestration.",
//     },
//     {
//       icon: Cloud,
//       title: "Flexible Deployment Options",
//       description:
//         "Whether your infrastructure is hosted in-house, on private clouds, or public clouds, MLStack provides seamless adaptability to meet your security and compliance requirements.",
//     },
//     {
//       icon: Settings,
//       title: "KPI-Driven & Unique Capabilities",
//       description:
//         "MLStack stands out with its Own Your Model (OYM) approach, giving you full control over model customization and continuous learning capabilities.",
//     },
//     {
//       icon: Network,
//       title: "Integration with MLloOps™",
//       description:
//         "Enabling automated lifecycle management for machine learning operations, ensuring efficient model monitoring, updating, and deployment.",
//     },
//   ];

//   // Scroll to a target stack section and highlight it when `?stack=` is present
//   useEffect(() => {
//     // Only react on the MLStack page
//     if (!location.pathname.match(/\/MLStack$/i)) return;

//     const target = searchParams.get("stack");
//     if (!target) return;

//     const id = slugify(target);
//     const el = document.getElementById(id);
//     if (el) {
//       setHighlightedId(id);
//       // Smooth scroll into view
//       el.scrollIntoView({ behavior: "smooth", block: "start" });

//       // Optional small offset to account for sticky navbar
//       setTimeout(() => {
//         window.scrollBy({ top: -80, left: 0, behavior: "auto" });
//       }, 400);

//       // Remove highlight after a short delay
//       const timeout = setTimeout(() => setHighlightedId(null), 2200);
//       return () => clearTimeout(timeout);
//     }
//   }, [location.pathname, searchParams]);

//   const WaveBackground = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* First wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-slow fill-green-50/30"
//         />
//       </svg>

//       {/* Second wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-medium fill-Primary/20"
//         />
//       </svg>

//       {/* Third wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,293.3C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-fast fill-green-100/40"
//         />
//       </svg>
//     </div>
//   );

//   const FloatingDots = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute h-3 w-3 bg-Primary/30 rounded-full top-20 left-1/4 animate-float-slow"></div>
//       <div className="absolute h-2 w-2 bg-green-200/40 rounded-full top-40 right-1/3 animate-float-medium"></div>
//       <div className="absolute h-4 w-4 bg-Primary/20 rounded-full bottom-40 left-1/3 animate-float-fast"></div>
//     </div>
//   );

//   const WireframePreview = ({ service, onClose }) => {
//     if (!service) return null;
//     const closeButtonRef = useRef(null);
//     useEffect(() => {
//       // Focus close button for accessibility
//       closeButtonRef.current?.focus();
//     }, []);
//     return (
//       <div className="fixed inset-0 z-50 flex items-stretch md:items-center justify-center">
//         <div className="absolute inset-0 bg-black/50" onClick={onClose} />
//         <motion.div
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="wireframe-title"
//           className="relative bg-white rounded-none md:rounded-xl shadow-2xl w-full h-[100dvh] md:w-[95vw] md:max-w-5xl md:h-auto md:max-h-[85vh] overflow-hidden"
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 20, scale: 0.98 }}
//           transition={{ duration: 0.2 }}
//         >
//           <div className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-6 py-3 border-b bg-gray-50 pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]">
//             <div>
//               {/* <p className="text-xs uppercase tracking-wider text-gray-500">Wireframe Preview</p> */}
//               <h3 id="wireframe-title" className="text-lg md:text-xl font-semibold text-gray-800">{service.stackTitle} • {service.name}</h3>
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close preview"
//               className="p-2 rounded-lg hover:bg-gray-200/60 transition-colors focus:outline-none"
//               ref={closeButtonRef}
//             >
//               <X className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>

//           <div className="p-3 md:p-6 bg-white overflow-y-auto overscroll-contain max-h-[calc(100dvh-56px)] md:max-h-[calc(85vh-56px)] pb-[env(safe-area-inset-bottom)]">
//             {/* Browser chrome */}
//             <div className="border rounded-lg overflow-hidden">
//               <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b">
//                 <span className="h-3 w-3 rounded-full bg-red-400" />
//                 <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                 <span className="h-3 w-3 rounded-full bg-green-400" />
//                 <div className="ml-3 h-5 flex-1 rounded bg-white border shadow-inner" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-12">
//                 {/* Sidebar */}
//                 <div className="col-span-1 md:col-span-2 md:border-r p-3 space-y-3 bg-gray-50">
//                   <div className="h-9 rounded-md bg-white border" />
//                   <div className="space-y-2">
//                     <div className="h-3 rounded bg-gray-200" />
//                     <div className="h-3 w-3/4 rounded bg-gray-200" />
//                     <div className="h-3 w-2/3 rounded bg-gray-200" />
//                     <div className="h-3 w-1/2 rounded bg-gray-200" />
//                   </div>
//                   <div className="pt-2 space-y-2">
//                     <div className="h-3 rounded bg-gray-200" />
//                     <div className="h-3 w-2/3 rounded bg-gray-200" />
//                   </div>
//                 </div>

//                 {/* Main content */}
//                 <div className="col-span-1 md:col-span-10 p-4 md:p-6 space-y-4">
//                   {/* Header */}
//                   <div className="flex flex-col md:flex-row md:items-center gap-3">
//                     <div className="h-7 w-48 rounded bg-gray-200" />
//                     <div className="flex-1" />
//                     <div className="h-9 flex-1 md:flex-none md:w-72 rounded-md bg-white border" />
//                   </div>

//                   {/* Cards */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     <div className="aspect-video rounded-lg border bg-white p-3 space-y-2">
//                       <div className="h-4 w-1/2 rounded bg-gray-200" />
//                       <div className="h-3 w-3/4 rounded bg-gray-100" />
//                       <div className="h-3 w-2/3 rounded bg-gray-100" />
//                     </div>
//                     <div className="aspect-video rounded-lg border bg-white p-3 space-y-2">
//                       <div className="h-4 w-1/2 rounded bg-gray-200" />
//                       <div className="h-3 w-3/4 rounded bg-gray-100" />
//                       <div className="h-3 w-2/3 rounded bg-gray-100" />
//                     </div>
//                     <div className="aspect-video rounded-lg border bg-white p-3 space-y-2">
//                       <div className="h-4 w-1/2 rounded bg-gray-200" />
//                       <div className="h-3 w-3/4 rounded bg-gray-100" />
//                       <div className="h-3 w-2/3 rounded bg-gray-100" />
//                     </div>
//                   </div>

//                   {/* Table */}
//                   <div className="border rounded-lg overflow-hidden">
//                     <div className="grid grid-cols-6 bg-gray-50 border-b">
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column A</div>
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column B</div>
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column C</div>
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column D</div>
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column E</div>
//                       <div className="p-3 text-xs font-semibold text-gray-500">Column F</div>
//                     </div>
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <div key={i} className="grid grid-cols-6 border-b last:border-b-0">
//                         <div className="p-3">
//                           <div className="h-3 w-2/3 bg-gray-100 rounded" />
//                         </div>
//                         <div className="p-3">
//                           <div className="h-3 w-1/2 bg-gray-100 rounded" />
//                         </div>
//                         <div className="p-3">
//                           <div className="h-3 w-3/4 bg-gray-100 rounded" />
//                         </div>
//                         <div className="p-3">
//                           <div className="h-3 w-1/3 bg-gray-100 rounded" />
//                         </div>
//                         <div className="p-3">
//                           <div className="h-3 w-1/2 bg-gray-100 rounded" />
//                         </div>
//                         <div className="p-3">
//                           <div className="h-3 w-2/3 bg-gray-100 rounded" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setSelectedService(null);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   // Lock background scroll when modal open
//   useEffect(() => {
//     if (selectedService) {
//       const originalOverflow = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = originalOverflow;
//       };
//     }
//   }, [selectedService]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <motion.section
//         className="relative bg-gradient-to-b from-white to-Secondary/30 overflow-hidden py-12 md:py-24 px-4"
//         {...fadeIn}
//       >
//         <WaveBackground />
//         <FloatingDots />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 md:mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-Poppins">
//               MLStack
//             </h1>
//             <p className="text-bold md:text-xl text-green-600 mt-4 font-OpenSans">
//               Stack of Machine Learned APIs for Structuring the Unstructured
//               Data
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="order-2 md:order-1 space-y-4 md:space-y-6">
//               <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-Primary/10">
//                 <p className="text-base md:text-lg text-gray-700 leading-relaxed font-OpenSans">
//                   In the modern data-driven landscape, unstructured data—whether
//                   from text, voice, or images—holds valuable insights but often
//                   remains untapped. MLStack is here to bridge that gap. Designed
//                   with advanced deep learning capabilities, MLStack transforms
//                   unstructured data into actionable, structured formats,
//                   enabling seamless integration into your business intelligence,
//                   analytics, and automation pipelines.
//                 </p>
//                 <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 font-OpenSans">
//                   The primary tech from the MLstack aid in solving the business
//                   challenges of evolving industries across various sectors. We{" "}
//                   <span className="font-semibold text-bold">
//                     democratize disruptive Generative AI solutions
//                   </span>{" "}
//                   for sustainable business growth.
//                 </p>
//               </div>
//             </div>
//             <div className="order-1 md:order-2">
//               <motion.div
//                 className="relative"
//                 // whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="relative z-0 mix-blend-multiply">
//                   <img
//                     src={VisualDataGif}
//                     alt="Visual representation of data"
//                     className="w-full h-auto object-contain"
//                   />
//                   {/* Add a subtle gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-tr from-Secondary/20 to-transparent mix-blend-overlay rounded-xl"></div>
//                 </div>
//                 {/* Add a blob shape behind the image */}
//                 <div className="absolute inset-0 -z-10">
//                   <svg
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full"
//                   >
//                     <path
//                       fill="#EFF0FF"
//                       d="M45.5,-57.1C59.3,-47.3,71.3,-33.5,76.4,-16.8C81.5,-0.1,79.8,19.4,71.2,35.5C62.6,51.6,47.1,64.2,29.5,70.7C11.9,77.2,-7.9,77.5,-27.2,71.9C-46.5,66.3,-65.3,54.7,-76.2,37C-87.1,19.2,-90.1,-4.7,-83.1,-24.9C-76.1,-45,-59,-61.3,-41.3,-69.8C-23.5,-78.3,-4.9,-78.9,11,-73.4C26.9,-67.9,41.1,-56.3,45.5,-57.1Z"
//                       transform="translate(100 100)"
//                       className="animate-blob"
//                     />
//                   </svg>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Stack Sections */}
//       {stacks.map((stack, index) => {
//         const sectionId = slugify(stack.title);
//         const isHighlighted = highlightedId === sectionId;
//         return (
//         <motion.section
//           key={stack.title}
//           id={sectionId}
//           className={`py-12 md:py-20 px-4 ${
//             isHighlighted
//               ? "ring-4 ring-green-400/80 rounded-2xl bg-green-50/40"
//               : ""
//           }`}
//           {...fadeIn}
//           transition={{ delay: index * 0.2 }}
//           whileHover="hover"
//         >
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 md:mb-12">
//               <stack.icon className="w-8 h-8 md:w-12 md:h-12 text-green-600" />
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
//                   {stack.title}
//                 </h2>
//                 <p className="text-base md:text-lg text-gray-600">
//                   {stack.description}
//                 </p>
//               </div>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               {stack.services.map((service, serviceIndex) => (
//                 <motion.div
//                   key={service.name}
//                   className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: serviceIndex * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover="hover"
//                   onClick={() => setSelectedService({
//                     stackTitle: stack.title,
//                     name: service.name,
//                     description: service.description,
//                   })}
//                 >
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
//                     {service.name}
//                   </h3>
//                   <p className="text-sm md:text-base text-gray-600">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//         );
//       })}

//       {/* Features Section */}
//       <motion.section className="bg-gray-50 py-12 md:py-20 px-4" {...fadeIn}>
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-8 md:mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             whileHover="hover"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               State-of-the-Art Technology
//             </h2>
//             <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Our MLStack leverages State-of-the-Art (SOTA) Deep Learning
//               algorithms to bring unparalleled accuracy and efficiency to
//               analytics tasks.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover="hover"
//               >
//                 <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm md:text-base text-gray-600">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section {...fadeIn}>
//         <section className="py-12 md:py-20 bg-white">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//               Transform Your Unstructured Data Today
//             </h2>
//             <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
//               Elevate your business intelligence with advanced AI-driven
//               structuring capabilities that offer unmatched precision and
//               adaptability.
//             </p>
//             <Link to="/Contact">
//               <div className="inline-block bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-green-800 transition-colors cursor-pointer text-base md:text-lg">
//               Request for a Demo
//               </div>
//             </Link>
//           </div>
//         </section>
//       </motion.section>
//       <AnimatePresence>
//         {selectedService && (
//           <WireframePreview
//             service={selectedService}
//             onClose={() => setSelectedService(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MLStackPage;





// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
// import { useLocation, useSearchParams } from "react-router-dom";
// import {
//   FileText,
//   MessageCircle,
//   Camera,
//   Database,
//   Cloud,
//   Settings,
//   Scale,
//   Network,
//   BarChart,
//   X,
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronDown,
//   Star,
//   TrendingUp,
//   Shield,
//   Zap,
//   Globe,
//   Users,
//   Award,
//   Lightbulb,
//   Target,
//   Code,
//   Cpu,
//   Brain,
//   Lock,
//   Check,
//   ExternalLink,
//   Download,
//   Share2,
//   BookOpen,
//   Eye
// } from "lucide-react";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const MLStackPage = () => {
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [expandedStack, setExpandedStack] = useState(null);
//   const location = useLocation();
//   const [searchParams] = useSearchParams();
//   const { scrollYProgress } = useScroll();
//   const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

//   const slugify = (value) =>
//     String(value || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//   const stacks = [
//     {
//       title: "TextStack",
//       icon: FileText,
//       color: "from-blue-500 to-indigo-600",
//       bgGradient: "from-blue-50 to-indigo-100",
//       description: "Transform unstructured text data into actionable insights with our comprehensive suite of natural language processing APIs.",
//       longDescription: "Dive into a world of rich textual data analysis. Our APIs empower you to categorize, extract, translate, and summarize text, providing a robust foundation for everything from customer feedback analysis to document intelligence. Built with state-of-the-art transformer models and fine-tuned for enterprise applications.",
//       stats: { accuracy: "98.5%", languages: "100+", processed: "1B+" },
//       useCases: ["Customer Support Automation", "Document Processing", "Content Moderation", "Legal Document Analysis"],
//       services: [
//         {
//           name: "Text Classifier",
//           description: "Automatically organize and label text based on content, context, or tone with industry-leading accuracy.",
//           features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy support"],
//           accuracy: "97.8%",
//           responseTime: "< 200ms"
//         },
//         {
//           name: "Text Extractor",
//           description: "Identify and extract key information such as entities, keywords, or specific fields from documents.",
//           features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
//           accuracy: "96.5%",
//           responseTime: "< 150ms"
//         },
//         {
//           name: "Text Translator",
//           description: "Break language barriers with seamless translation across 100+ languages with cultural context awareness.",
//           features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
//           accuracy: "94.2%",
//           responseTime: "< 300ms"
//         },
//         {
//           name: "Text Summarizer",
//           description: "Condense long texts into concise, informative summaries while preserving key insights.",
//           features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
//           accuracy: "92.1%",
//           responseTime: "< 500ms"
//         },
//       ],
//     },
//     {
//       title: "VoiceStack",
//       icon: MessageCircle,
//       color: "from-green-500 to-teal-600",
//       bgGradient: "from-green-50 to-teal-100",
//       description: "Unlock the power of voice data with advanced speech processing capabilities for transcription, enhancement, and synthesis.",
//       longDescription: "VoiceStack brings voice data to life with APIs that transcribe, enhance, recognize, and synthesize speech. Tailored for applications in customer support, media, and beyond, VoiceStack makes your voice data accessible and actionable with enterprise-grade security and scalability.",
//       stats: { accuracy: "97.2%", languages: "85+", hours: "10M+" },
//       useCases: ["Call Center Analytics", "Voice Assistants", "Meeting Transcription", "Audio Content Creation"],
//       services: [
//         {
//           name: "Voice Transcriber",
//           description: "Convert spoken language into text accurately and efficiently with real-time processing capabilities.",
//           features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
//           accuracy: "97.2%",
//           responseTime: "Real-time"
//         },
//         {
//           name: "Voice Enhancer",
//           description: "Improve voice clarity by reducing background noise and refining audio quality using AI-powered filtering.",
//           features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
//           accuracy: "95.8%",
//           responseTime: "< 1s"
//         },
//         {
//           name: "Voice Recognition",
//           description: "Identify speakers and understand voice patterns for security, customer profiling, and personalization.",
//           features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
//           accuracy: "94.7%",
//           responseTime: "< 2s"
//         },
//         {
//           name: "Voice Diarizer",
//           description: "Distinguish and label individual speakers within conversations for meeting analysis and call monitoring.",
//           features: ["Multi-speaker detection", "Timeline generation", "Speaker clustering", "Confidence scoring"],
//           accuracy: "93.4%",
//           responseTime: "< 3s"
//         },
//         {
//           name: "Voice Classifier",
//           description: "Categorize voice data based on mood, tone, or other acoustic features for sentiment analysis.",
//           features: ["Emotion classification", "Tone analysis", "Stress detection", "Custom categories"],
//           accuracy: "91.6%",
//           responseTime: "< 500ms"
//         },
//         {
//           name: "Voice Synthesizer",
//           description: "Generate natural-sounding speech for text-to-speech applications with customizable voices.",
//           features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
//           accuracy: "96.3%",
//           responseTime: "< 2s"
//         },
//       ],
//     },
//     {
//       title: "VisionStack",
//       icon: Camera,
//       color: "from-purple-500 to-pink-600",
//       bgGradient: "from-purple-50 to-pink-100",
//       description: "Transform visual data into structured insights with computer vision APIs for detection, classification, and analysis.",
//       longDescription: "VisionStack leverages computer vision to interpret and organize visual data. From transcribing visual content to detecting objects and segments, VisionStack turns images into structured, usable data with pixel-perfect accuracy and real-time processing capabilities.",
//       stats: { accuracy: "99.1%", formats: "20+", images: "500M+" },
//       useCases: ["Retail Automation", "Medical Imaging", "Security Systems", "Quality Control"],
//       services: [
//         {
//           name: "Vision Transcriber",
//           description: "Extract text and information from visual content, enhancing accessibility and archiving with OCR technology.",
//           features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
//           accuracy: "99.1%",
//           responseTime: "< 1s"
//         },
//         {
//           name: "Vision Classifier",
//           description: "Identify and categorize objects within images for streamlined image recognition and content management.",
//           features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
//           accuracy: "97.9%",
//           responseTime: "< 400ms"
//         },
//         {
//           name: "Vision Segmenter",
//           description: "Divide images into meaningful segments for granular analysis and precise object boundary detection.",
//           features: ["Semantic segmentation", "Instance segmentation", "Panoptic segmentation", "Custom masks"],
//           accuracy: "95.6%",
//           responseTime: "< 800ms"
//         },
//         {
//           name: "Vision Detector",
//           description: "Detect objects, faces, or items in real-time for security, retail, and automation applications.",
//           features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
//           accuracy: "96.8%",
//           responseTime: "< 100ms"
//         },
//         {
//           name: "Table Extractor",
//           description: "Convert tables and structured visual data into usable, digital formats with high precision.",
//           features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
//           accuracy: "94.3%",
//           responseTime: "< 2s"
//         },
//       ],
//     },
//   ];

//   const features = [
//     {
//       icon: Database,
//       title: "Dockerized Microservices Architecture",
//       description: "Auto-scalable containerized services with Kubernetes orchestration for handling massive workloads and ensuring 99.9% uptime.",
//       details: ["Docker containerization", "Kubernetes orchestration", "Auto-scaling capabilities", "Load balancing", "Health monitoring"]
//     },
//     {
//       icon: Cloud,
//       title: "Multi-Cloud Deployment",
//       description: "Deploy seamlessly across AWS, Azure, GCP, or on-premises infrastructure with consistent performance and security.",
//       details: ["Cloud-agnostic deployment", "Hybrid cloud support", "Edge computing ready", "Multi-region availability", "Disaster recovery"]
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security & Compliance",
//       description: "Bank-grade security with SOC2, GDPR, and HIPAA compliance, featuring end-to-end encryption and audit trails.",
//       details: ["End-to-end encryption", "SOC2 Type II compliant", "GDPR ready", "Role-based access control", "Audit logging"]
//     },
//     {
//       icon: Zap,
//       title: "Real-time Processing Engine",
//       description: "Process data at lightning speed with our optimized inference engine, delivering results in milliseconds.",
//       details: ["Sub-second response times", "Batch processing", "Stream processing", "GPU acceleration", "Caching layer"]
//     },
//     {
//       icon: Brain,
//       title: "Advanced AI Models",
//       description: "State-of-the-art transformer models and neural networks trained on diverse datasets for maximum accuracy.",
//       details: ["Transformer architecture", "Custom model training", "Transfer learning", "Model versioning", "A/B testing"]
//     },
//     {
//       icon: Network,
//       title: "MLOps Integration",
//       description: "Seamless integration with MLOps pipelines for automated model monitoring, updating, and deployment.",
//       details: ["CI/CD pipelines", "Model monitoring", "Automated retraining", "Version control", "Performance tracking"]
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO, TechCorp",
//       company: "Fortune 500 Technology Company",
//       content: "MLStack transformed our document processing workflow. We've seen a 300% improvement in efficiency and 99% accuracy in data extraction.",
//       rating: 5,
//       avatar: "SJ"
//     },
//     {
//       name: "Michael Chen",
//       role: "Head of AI",
//       company: "Global Financial Services",
//       content: "The voice analytics capabilities helped us understand customer sentiment better than ever before. ROI was evident within weeks.",
//       rating: 5,
//       avatar: "MC"
//     },
//     {
//       name: "Elena Rodriguez",
//       role: "Product Manager",
//       company: "Healthcare Innovation Inc",
//       content: "Vision APIs have revolutionized our medical imaging workflow. The accuracy and speed are unmatched in the industry.",
//       rating: 5,
//       avatar: "ER"
//     }
//   ];

//   const metrics = [
//     { label: "API Calls Processed", value: "10B+", icon: Database },
//     { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
//     { label: "Languages Supported", value: "100+", icon: Globe },
//     { label: "Enterprise Clients", value: "500+", icon: Users },
//     { label: "Average Response Time", value: "<200ms", icon: Zap },
//     { label: "Data Processed Daily", value: "1TB+", icon: BarChart }
//   ];

//   // Scroll to target stack section
//   useEffect(() => {
//     if (!location.pathname.match(/\/MLStack$/i)) return;
//     const target = searchParams.get("stack");
//     if (!target) return;

//     const id = slugify(target);
//     const el = document.getElementById(id);
//     if (el) {
//       setHighlightedId(id);
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => {
//         window.scrollBy({ top: -80, left: 0, behavior: "auto" });
//       }, 400);
//       const timeout = setTimeout(() => setHighlightedId(null), 2200);
//       return () => clearTimeout(timeout);
//     }
//   }, [location.pathname, searchParams]);

//   // Enhanced background animations
//   const AnimatedBackground = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-green-50/30" />
      
//       {/* Floating orbs */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className={`absolute rounded-full bg-gradient-to-r ${
//             i % 3 === 0 ? 'from-blue-200/20 to-purple-200/20' :
//             i % 3 === 1 ? 'from-green-200/20 to-teal-200/20' :
//             'from-purple-200/20 to-pink-200/20'
//           }`}
//           style={{
//             width: `${Math.random() * 200 + 50}px`,
//             height: `${Math.random() * 200 + 50}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3]
//           }}
//           transition={{
//             duration: 10 + Math.random() * 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       ))}

//       {/* Grid pattern */}
//       <svg className="absolute inset-0 w-full h-full opacity-5">
//         <defs>
//           <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#grid)" />
//       </svg>
//     </div>
//   );

//   // Enhanced service modal
//   const ServiceModal = ({ service, onClose }) => {
//     if (!service) return null;
//     const modalRef = useRef(null);

//     useEffect(() => {
//       modalRef.current?.focus();
//     }, []);

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//         <motion.div 
//           className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
//           onClick={onClose}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         />
        
//         <motion.div
//           ref={modalRef}
//           className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.9, y: 20 }}
//           transition={{ type: "spring", damping: 25, stiffness: 300 }}
//         >
//           {/* Header */}
//           <div className="sticky top-0 z-10 bg-gradient-to-r from-gray-50 to-white border-b px-6 py-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{service.stackTitle}</p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
//             {/* Service Overview */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">Overview</h4>
//                 <p className="text-gray-700 mb-4">{service.description}</p>
                
//                 {/* Performance Metrics */}
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="bg-green-50 p-3 rounded-lg">
//                     <div className="text-2xl font-bold text-green-600">{service.accuracy}</div>
//                     <div className="text-sm text-gray-600">Accuracy</div>
//                   </div>
//                   <div className="bg-blue-50 p-3 rounded-lg">
//                     <div className="text-2xl font-bold text-blue-600">{service.responseTime}</div>
//                     <div className="text-sm text-gray-600">Response Time</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Interactive Demo Area */}
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
//                 <h4 className="text-lg font-semibold mb-4">Interactive Demo</h4>
//                 <div className="space-y-4">
//                   <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 text-center">
//                     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                     <p className="text-sm text-gray-600">Upload your data to test</p>
//                     <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                       Try Demo
//                     </button>
//                   </div>
//                   <div className="text-xs text-gray-500 text-center">
//                     Demo uses sample data for testing purposes
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="mb-8">
//               <h4 className="text-lg font-semibold mb-4">Key Features</h4>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {service.features?.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     <span className="text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Code Example */}
//             <div className="mb-8">
//               <h4 className="text-lg font-semibold mb-4">API Example</h4>
//               <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
//                 <div className="text-gray-500"># Example API call</div>
//                 <div>curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
//                 <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
//                 <div className="ml-4">-H "Content-Type: application/json" \</div>
//                 <div className="ml-4">-d '{"{"}"data": "your_input_data"{"}"}'</div>
//               </div>
//             </div>

//             {/* Documentation Links */}
//             <div className="flex flex-wrap gap-3">
//               <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                 <BookOpen className="w-4 h-4" />
//                 <span>View Documentation</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <Download className="w-4 h-4" />
//                 <span>Download SDK</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <ExternalLink className="w-4 h-4" />
//                 <span>Live Demo</span>
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   };

//   // Enhanced stack card component
//   const StackCard = ({ stack, index }) => {
//     const cardRef = useRef(null);
//     const isInView = useInView(cardRef, { once: true, amount: 0.3 });
//     const isExpanded = expandedStack === index;

//     return (
//       <motion.section
//         ref={cardRef}
//         id={slugify(stack.title)}
//         className={`py-20 px-4 relative overflow-hidden ${
//           highlightedId === slugify(stack.title)
//             ? "ring-4 ring-green-400/80 rounded-2xl bg-green-50/40"
//             : ""
//         }`}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ delay: index * 0.2, duration: 0.8 }}
//       >
//         {/* Background gradient */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${stack.bgGradient} opacity-30`} />
        
//         <div className="relative max-w-7xl mx-auto">
//           {/* Stack Header */}
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: index * 0.2 + 0.3 }}
//           >
//             <div className="flex items-center justify-center mb-6">
//               <div className={`p-4 rounded-2xl bg-gradient-to-r ${stack.color} shadow-lg`}>
//                 <stack.icon className="w-12 h-12 text-white" />
//               </div>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{stack.title}</h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">{stack.description}</p>
            
//             {/* Stats */}
//             <div className="flex justify-center space-x-8 mb-8">
//               {Object.entries(stack.stats).map(([key, value]) => (
//                 <div key={key} className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">{value}</div>
//                   <div className="text-sm text-gray-600 capitalize">{key}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Expand/Collapse Button */}
//             <button
//               onClick={() => setExpandedStack(isExpanded ? null : index)}
//               className="flex items-center space-x-2 mx-auto px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <span className="font-medium">Learn More</span>
//               <motion.div
//                 animate={{ rotate: isExpanded ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ChevronDown className="w-4 h-4" />
//               </motion.div>
//             </button>
//           </motion.div>

//           {/* Expanded Content */}
//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="overflow-hidden"
//               >
//                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12">
//                   <div className="grid md:grid-cols-2 gap-8 mb-8">
//                     <div>
//                       <h3 className="text-2xl font-bold mb-4">Deep Dive</h3>
//                       <p className="text-gray-700 mb-6">{stack.longDescription}</p>
                      
//                       <h4 className="text-lg font-semibold mb-3">Use Cases</h4>
//                       <ul className="space-y-2">
//                         {stack.useCases.map((useCase, idx) => (
//                           <li key={idx} className="flex items-center space-x-2">
//                             <Target className="w-4 h-4 text-green-600" />
//                             <span className="text-gray-700">{useCase}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
//                       <h4 className="text-lg font-semibold mb-4">Architecture</h4>
//                       <div className="space-y-4">
//                         {['Input Processing', 'AI Model Inference', 'Post Processing', 'Output Generation'].map((step, idx) => (
//                           <div key={idx} className="flex items-center space-x-3">
//                             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                               {idx + 1}
//                             </div>
//                             <span className="text-gray-700">{step}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Services Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {stack.services.map((service, serviceIndex) => (
//               <motion.div
//                 key={service.name}
//                 className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/50"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ delay: index * 0.2 + serviceIndex * 0.1 + 0.5 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 onClick={() => setSelectedService({
//                   stackTitle: stack.title,
//                   ...service
//                 })}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                     {service.name}
//                   </h3>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//                 </div>
                
//                 <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                
//                 <div className="flex items-center justify-between text-sm">
//                   <div className="flex items-center space-x-4">
//                     <span className="text-green-600 font-medium">{service.accuracy} accuracy</span>
//                     <span className="text-blue-600 font-medium">{service.responseTime}</span>
//                   </div>
//                   <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
//                 </div>

//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     );
//   };

//   const Upload = ({ className }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//     </svg>
//   );

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setSelectedService(null);
//         setExpandedStack(null);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   // Lock background scroll when modal open
//   useEffect(() => {
//     if (selectedService) {
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = "unset";
//       };
//     }
//   }, [selectedService]);

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <AnimatedBackground />
        
//         {/* Progress indicator */}
//         <motion.div 
//           className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform-gpu z-50"
//           style={{ scaleX: scrollYProgress }}
//           initial={{ scaleX: 0 }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             {/* Hero badge */}
//             <motion.div
//               className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <Award className="w-4 h-4 text-yellow-500" />
//               <span className="text-sm font-medium text-gray-700">Industry Leading AI Platform</span>
//             </motion.div>

//             <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 font-Poppins tracking-tight">
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
//                 MLStack
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-4xl mx-auto">
//               Transform Unstructured Data into 
//               <span className="font-semibold text-blue-600"> Actionable Insights</span>
//             </p>
            
//             <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Enterprise-grade AI APIs for Text, Voice, and Vision processing with 
//               state-of-the-art accuracy and lightning-fast performance
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//               <motion.button
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Play className="w-5 h-5" />
//                 <span>Start Free Trial</span>
//               </motion.button>
              
//               <motion.button
//                 className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <BookOpen className="w-5 h-5" />
//                 <span>View Documentation</span>
//               </motion.button>
//             </div>

//             {/* Metrics Overview */}
//             <motion.div
//               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               {metrics.map((metric, index) => (
//                 <motion.div
//                   key={metric.label}
//                   className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.8 + index * 0.1 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
//                   <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
//                   <div className="text-sm text-gray-600">{metric.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown className="w-6 h-6 text-gray-400" />
//         </motion.div>
//       </section>

//       {/* Stack Sections */}
//       {stacks.map((stack, index) => (
//         <StackCard key={stack.title} stack={stack} index={index} />
//       ))}

//       {/* Enhanced Features Section */}
//       <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Enterprise-Grade Architecture
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Built for scale, security, and performance with cutting-edge technology stack
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
//                     <feature.icon className="w-8 h-8 text-white" />
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 <div className="space-y-2">
//                   {feature.details?.map((detail, idx) => (
//                     <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
//                       <Check className="w-4 h-4 text-green-500" />
//                       <span>{detail}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by Industry Leaders
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               See how organizations are transforming their data workflows with MLStack
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                     {testimonial.avatar}
//                   </div>
//                   <div className="ml-4">
//                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                     <div className="text-xs text-gray-500">{testimonial.company}</div>
//                   </div>
//                 </div>
                
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <p className="text-gray-700 italic">"{testimonial.content}"</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
        
//         {/* Animated background elements */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-white/20 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -100],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Ready to Transform Your Data?
//             </h2>
//             <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//               Join thousands of organizations already using MLStack to unlock the power of their unstructured data
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <motion.button
//                 className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Zap className="w-5 h-5" />
//                 <span>Start Free Trial</span>
//               </motion.button>
              
//               <motion.button
//                 className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Users className="w-5 h-5" />
//                 <span>Schedule Demo</span>
//               </motion.button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-2xl font-bold">30-Day</div>
//                 <div className="text-sm opacity-80">Free Trial</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold">24/7</div>
//                 <div className="text-sm opacity-80">Support</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold">99.9%</div>
//                 <div className="text-sm opacity-80">Uptime SLA</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold">SOC2</div>
//                 <div className="text-sm opacity-80">Compliant</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Service Modal */}
//       <AnimatePresence>
//         {selectedService && (
//           <ServiceModal
//             service={selectedService}
//             onClose={() => setSelectedService(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MLStackPage;



// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useSearchParams } from "react-router-dom";
// import {
//   FileText,
//   MessageCircle,
//   Camera,
//   Database,
//   Cloud,
//   Settings,
//   Network,
//   X,
//   ArrowRight,
//   ChevronDown,
//   Check,
//   ExternalLink,
//   BookOpen,
//   Eye,
//   Zap,
//   Shield,
//   Users,
//   Target,
//   Award,
//   TrendingUp
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   hover: {
//     y: -2,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// const MLStackPage = () => {
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [expandedStack, setExpandedStack] = useState(null);
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   const slugify = (value) =>
//     String(value || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//   const stacks = [
//     {
//       title: "TextStack",
//       icon: FileText,
//       description: "Transform unstructured text data into actionable insights with comprehensive natural language processing APIs.",
//       longDescription: "Advanced text processing capabilities including classification, extraction, translation, and summarization. Built with state-of-the-art transformer models for enterprise applications with multilingual support and custom domain adaptation.",
//       stats: [
//         { label: "Accuracy", value: "98.5%" },
//         { label: "Languages", value: "100+" },
//         { label: "Processed Daily", value: "1B+ docs" }
//       ],
//       services: [
//         {
//           name: "Text Classifier",
//           description: "Automatically organize and label text based on content, context, or tone with industry-leading accuracy.",
//           features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy"],
//           metrics: { accuracy: "97.8%", speed: "< 200ms" }
//         },
//         {
//           name: "Text Extractor", 
//           description: "Identify and extract key information such as entities, keywords, or specific fields from documents.",
//           features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
//           metrics: { accuracy: "96.5%", speed: "< 150ms" }
//         },
//         {
//           name: "Text Translator",
//           description: "Break language barriers with seamless translation across 100+ languages with cultural context awareness.",
//           features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
//           metrics: { accuracy: "94.2%", speed: "< 300ms" }
//         },
//         {
//           name: "Text Summarizer",
//           description: "Condense long texts into concise, informative summaries while preserving key insights.",
//           features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
//           metrics: { accuracy: "92.1%", speed: "< 500ms" }
//         },
//       ],
//     },
//     {
//       title: "VoiceStack",
//       icon: MessageCircle,
//       description: "Unlock the power of voice data with advanced speech processing capabilities for transcription, enhancement, and synthesis.",
//       longDescription: "Comprehensive voice processing suite enabling real-time transcription, speaker identification, voice enhancement, and synthesis. Optimized for enterprise applications with noise reduction, multi-language support, and custom voice models.",
//       stats: [
//         { label: "Accuracy", value: "97.2%" },
//         { label: "Languages", value: "85+" },
//         { label: "Hours Processed", value: "10M+" }
//       ],
//       services: [
//         {
//           name: "Voice Transcriber",
//           description: "Convert spoken language into text accurately and efficiently with real-time processing capabilities.",
//           features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
//           metrics: { accuracy: "97.2%", speed: "Real-time" }
//         },
//         {
//           name: "Voice Enhancer",
//           description: "Improve voice clarity by reducing background noise and refining audio quality using AI-powered filtering.",
//           features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
//           metrics: { accuracy: "95.8%", speed: "< 1s" }
//         },
//         {
//           name: "Voice Recognition",
//           description: "Identify speakers and understand voice patterns for security, customer profiling, and personalization.",
//           features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
//           metrics: { accuracy: "94.7%", speed: "< 2s" }
//         },
//         {
//           name: "Voice Synthesizer",
//           description: "Generate natural-sounding speech for text-to-speech applications with customizable voices.",
//           features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
//           metrics: { accuracy: "96.3%", speed: "< 2s" }
//         },
//       ],
//     },
//     {
//       title: "VisionStack",
//       icon: Camera,
//       description: "Transform visual data into structured insights with computer vision APIs for detection, classification, and analysis.",
//       longDescription: "Advanced computer vision capabilities for object detection, image classification, OCR, and visual content analysis. Supports real-time processing with high accuracy for enterprise applications across various industries.",
//       stats: [
//         { label: "Accuracy", value: "99.1%" },
//         { label: "Formats", value: "20+" },
//         { label: "Images Processed", value: "500M+" }
//       ],
//       services: [
//         {
//           name: "Vision Transcriber",
//           description: "Extract text and information from visual content, enhancing accessibility and archiving with OCR technology.",
//           features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
//           metrics: { accuracy: "99.1%", speed: "< 1s" }
//         },
//         {
//           name: "Vision Classifier",
//           description: "Identify and categorize objects within images for streamlined image recognition and content management.",
//           features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
//           metrics: { accuracy: "97.9%", speed: "< 400ms" }
//         },
//         {
//           name: "Vision Detector",
//           description: "Detect objects, faces, or items in real-time for security, retail, and automation applications.",
//           features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
//           metrics: { accuracy: "96.8%", speed: "< 100ms" }
//         },
//         {
//           name: "Table Extractor",
//           description: "Convert tables and structured visual data into usable, digital formats with high precision.",
//           features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
//           metrics: { accuracy: "94.3%", speed: "< 2s" }
//         },
//       ],
//     },
//   ];

//   const features = [
//     {
//       icon: Database,
//       title: "Dockerized Microservices",
//       description: "Auto-scalable containerized services with Kubernetes orchestration for handling massive workloads.",
//     },
//     {
//       icon: Cloud,
//       title: "Multi-Cloud Deployment", 
//       description: "Deploy seamlessly across AWS, Azure, GCP, or on-premises infrastructure with consistent performance.",
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Bank-grade security with SOC2, GDPR compliance, featuring end-to-end encryption and audit trails.",
//     },
//     {
//       icon: Network,
//       title: "MLOps Integration",
//       description: "Seamless integration with MLOps pipelines for automated model monitoring, updating, and deployment.",
//     },
//   ];

//   const metrics = [
//     { label: "API Calls Processed", value: "10B+", icon: Database },
//     { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
//     { label: "Average Response", value: "<200ms", icon: Zap },
//     { label: "Enterprise Clients", value: "500+", icon: Users },
//   ];

//   // Scroll to target section
//   useEffect(() => {
//     if (!location.pathname.match(/\/MLStack$/i)) return;
//     const target = searchParams.get("stack");
//     if (!target) return;

//     const id = slugify(target);
//     const el = document.getElementById(id);
//     if (el) {
//       setHighlightedId(id);
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => {
//         window.scrollBy({ top: -80, left: 0, behavior: "auto" });
//       }, 400);
//       const timeout = setTimeout(() => setHighlightedId(null), 2200);
//       return () => clearTimeout(timeout);
//     }
//   }, [location.pathname, searchParams]);

//   // Service Detail Modal
//   const ServiceModal = ({ service, onClose }) => {
//     if (!service) return null;
//     const modalRef = useRef(null);

//     useEffect(() => {
//       modalRef.current?.focus();
//     }, []);

    

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//         <motion.div 
//           className="absolute inset-0 bg-black/50" 
//           onClick={onClose}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         />
        
//         <motion.div
//           ref={modalRef}
//           className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.2 }}
//         >
//           {/* Header */}
//           <div className="sticky top-0 z-10 bg-white border-b px-6 py-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{service.stackTitle}</p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
//             {/* Overview */}
//             <div className="mb-6">
//               <h4 className="text-lg font-medium mb-3 text-gray-900">Overview</h4>
//               <p className="text-gray-700 leading-relaxed">{service.description}</p>
//             </div>

//             {/* Performance Metrics */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="text-2xl font-semibold text-gray-900">{service.metrics?.accuracy}</div>
//                 <div className="text-sm text-gray-600">Accuracy Rate</div>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="text-2xl font-semibold text-gray-900">{service.metrics?.speed}</div>
//                 <div className="text-sm text-gray-600">Response Time</div>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-medium mb-3 text-gray-900">Key Features</h4>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {service.features?.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                     <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
//                     <span className="text-sm text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* API Example */}
//             <div className="mb-6">
//               <h4 className="text-lg font-medium mb-3 text-gray-900">API Usage</h4>
//               <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
//                 <div className="text-gray-400 mb-2"># cURL Example</div>
//                 <div className="text-green-400">curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
//                 <div className="ml-4 text-blue-300">-H "Authorization: Bearer YOUR_API_KEY" \</div>
//                 <div className="ml-4 text-blue-300">-H "Content-Type: application/json" \</div>
//                 <div className="ml-4 text-yellow-300">-d '{"{"}"data": "your_input_data"{"}"}'</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap gap-3">
//               <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
//                 <BookOpen className="w-4 h-4" />
//                 <span>Documentation</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <ExternalLink className="w-4 h-4" />
//                 <span>Try Demo</span>
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setSelectedService(null);
//         setExpandedStack(null);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   useEffect(() => {
//     if (selectedService) {
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = "unset";
//       };
//     }
//   }, [selectedService]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div {...fadeIn}>
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//               MLStack
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light">
//               Stack of Machine Learning APIs for Structuring Unstructured Data
//             </p>
//             <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Enterprise-grade AI APIs for Text, Voice, and Vision processing with 
//               state-of-the-art accuracy and lightning-fast performance.
//             </p>
//   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/Contact">
//                 <motion.button
//                     className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Get Started
//                 </motion.button>
//               </Link>
//               <motion.button
//                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 View Documentation
//               </motion.button>
//             </div>
//             {/* Key Metrics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 bg-slate-100 p-4 rounded-lg">
//               {metrics.map((metric, index) => (
//                 <motion.div
//                   key={metric.label}
//                   className="text-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                 >
//                   <metric.icon className="w-6 h-6 text-green-800 mx-auto mb-2" />
//                   <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
//                   <div className="text-sm text-gray-600">{metric.label}</div>
//                 </motion.div>
//               ))}
//             </div>

          
//           </motion.div>
//         </div>
//       </section>

//       {/* Stack Sections */}
//       {stacks.map((stack, index) => {
//         const sectionId = slugify(stack.title);
//         const isHighlighted = highlightedId === sectionId;
//         const isExpanded = expandedStack === index;
        
//         return (
//           <motion.section
//             key={stack.title}
//             id={sectionId}
//             className={`py-20 px-4 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} ${
//               isHighlighted ? 'ring-2 ring-green-500 ring-inset' : ''
//             }`}
//             {...fadeIn}
//             transition={{ delay: index * 0.2 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               {/* Stack Header */}
//               <div className="text-center mb-16">
//                 <div className="flex justify-center mb-6">
//                   <div className="p-4 rounded-xl">
//                     <stack.icon className="w-10 h-10 text-green-800" />
//                   </div>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {stack.title}
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//                   {stack.description}
//                 </p>

//                 {/* Stack Stats */}
//                 <div className="flex justify-center space-x-8 mb-8">
//                   {stack.stats.map((stat, idx) => (
//                     <div key={idx} className="text-center">
//                       <div className="text-xl font-semibold text-green-600">{stat.value}</div>
//                       <div className="text-lg text-black-600">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setExpandedStack(isExpanded ? null : index)}
//                   className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   <span className="text-sm font-medium">
//                     {isExpanded ? 'Show Less' : 'Learn More'}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: isExpanded ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown className="w-4 h-4 text-green-600" />
//                   </motion.div>
//                 </button>
//               </div>

//               {/* Expanded Content */}
//               <AnimatePresence>
//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden mb-16"
//                   >
//                     <div className="bg-white p-8 rounded-lg border border-green-600">
//                       <p className="text-gray-700 leading-relaxed">{stack.longDescription}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Services Grid */}
//               <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
//                 {stack.services.map((service, serviceIndex) => (
//                   <motion.div
//                     key={service.name}
//                     className="group bg-white p-6 rounded-lg border border-grey-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: serviceIndex * 0.1 }}
//                     onClick={() => setSelectedService({
//                       stackTitle: stack.title,
//                       ...service
//                     })}
//                   >
//                     <div className="flex items-start justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
//                         {service.name}
//                       </h3>
//                       <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
//                     </div>
                    
//                     <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//                       {service.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between text-md text-green-800">
//                       <span >{service.metrics?.accuracy} accuracy</span>
//                       <span>{service.metrics?.speed}</span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         );
//       })}

//       {/* Features Section */}
//       <motion.section className="py-20 px-4 bg-gray-50" {...fadeIn}>
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Enterprise-Grade Infrastructure
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Built for scale, security, and performance with modern architecture
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="bg-white p-6 rounded-lg border border-gray-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-4">
//                     <feature.icon className="w-6 h-6 text-green-800" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//     <motion.section
//       className="py-20 px-6 bg-white text-black max-w-4xl mt-4 mb-4 mx-auto rounded-2xl shadow-lg"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <motion.div
//         variants={cardVariants}
//         className="text-center"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Ready to Transform Your Data Processing?
//         </h2>
//         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//           Experience the power of AI-human collaboration with MLloOps™. Process any format,
//           manage any scale, deliver precise results—all through one intelligent platform.
//         </p>
    
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
//           >
//             Start Free Trial
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
//           >
//             Schedule Demo
//           </motion.button>
//         </div>
//       </motion.div>
//     </motion.section>
    

//       {/* Service Modal */}
//       <AnimatePresence>
//         {selectedService && (
//           <ServiceModal
//             service={selectedService}
//             onClose={() => setSelectedService(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MLStackPage;



// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useSearchParams } from "react-router-dom";
// import {
//   FileText,
//   MessageCircle,
//   Camera,
//   Database,
//   Cloud,
//   Settings,
//   Network,
//   X,
//   ArrowRight,
//   ChevronDown,
//   Check,
//   ExternalLink,
//   BookOpen,
//   Eye,
//   Zap,
//   Shield,
//   Users,
//   Target,
//   Award,
//   TrendingUp,
//   Play,
//   Code2,
//   Sparkles
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   hover: {
//     y: -4,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     },
//   },
// };

// // Enhanced Service Card with Classic Blur Effect
// const ServiceCard = ({ service, stackTitle, onServiceClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Sample images for demonstration - replace with actual service images
//   const sampleImages = [
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
//     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
//     "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop",
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
//   ];

//   return (
//     <motion.div
//       className="group relative bg-white rounded-lg border border-gray-100 hover:border-gray-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg"
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       variants={cardVariants}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Main Content */}
//       <div className="relative p-6">
//         {/* Service Header */}
//         <div className="flex items-start justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
//             {service.name}
//           </h3>
//           <motion.div
//             animate={{
//               x: isHovered ? 5 : 0,
//               rotate: isHovered ? 45 : 0
//             }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
//           </motion.div>
//         </div>
        
//         {/* Service Description */}
//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {service.description}
//         </p>
        
//         {/* Service Metrics */}
//         <div className="flex items-center justify-between text-sm mb-4">
//           <span className="text-green-600 font-medium">{service.metrics?.accuracy} accuracy</span>
//           <span className="text-gray-500">{service.metrics?.speed}</span>
//         </div>

//         {/* Feature Pills */}
//         <div className="flex flex-wrap gap-2">
//           {service.features?.slice(0, 2).map((feature, index) => (
//             <span
//               key={index}
//               className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200"
//             >
//               {feature}
//             </span>
//           ))}
//           {service.features?.length > 2 && (
//             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-200">
//               +{service.features.length - 2} more
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Classic Blur Overlay */}
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
//           >
//             {/* Sample Images Grid */}
//             {/* <motion.div 
//               className="grid grid-cols-2 gap-2 mb-6 w-full max-w-[200px]"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1, duration: 0.3 }}
//             >
//               {sampleImages.slice(0, 4).map((src, index) => (
//                 <motion.div
//                   key={index}
//                   className="aspect-square overflow-hidden rounded-lg shadow-md"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
//                 >
//                   <img
//                     src={src}
//                     alt={`${service.name} preview ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div> */}

//             {/* View More Button */}
//             <motion.button
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.3, type: "spring", stiffness: 200 }}
//               className="group/btn flex items-center space-x-2 bg-Primary  text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onServiceClick({
//                   stackTitle,
//                   ...service
//                 });
//               }}
//             >
//               <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//               <span>View More</span>
//               <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
//             </motion.button>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ y: 15, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.3 }}
//               className="mt-4 grid grid-cols-2 gap-6 text-center"
//             >
//               <div className="text-center">
//                 <div className="text-lg font-bold text-green-600">{service.metrics?.accuracy}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-lg font-bold text-blue-600">{service.metrics?.speed}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Response</div>
//               </div>
//             </motion.div>

//             {/* Decorative Elements */}
//             <motion.div 
//               className="absolute top-4 right-4"
//               initial={{ opacity: 0, rotate: -180 }}
//               animate={{ opacity: 0.3, rotate: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               <Sparkles className="w-5 h-5 text-green-500" />
//             </motion.div>
            
//             <motion.div 
//               className="absolute bottom-4 left-4"
//               initial={{ opacity: 0, rotate: 180 }}
//               animate={{ opacity: 0.2, rotate: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <Sparkles className="w-4 h-4 text-blue-500" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Subtle Glow Effect */}
//       <div className={`absolute inset-0 bg-gradient-to-r from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`} />
//     </motion.div>
//   );
// };

// // Enhanced Modal with Images and Classic Design
// const ServiceModal = ({ service, onClose }) => {
//   if (!service) return null;
//   const modalRef = useRef(null);

//   // Sample detailed images for the modal
//   const detailImages = [
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
//   ];

//   useEffect(() => {
//     modalRef.current?.focus();
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <motion.div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
//         onClick={onClose}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       />
      
//       <motion.div
//         ref={modalRef}
//         className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-gray-200"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
//               <p className="text-green-600 font-medium mt-1">{service.stackTitle} Service</p>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
//               aria-label="Close modal"
//             >
//               <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
//             </button>
//           </div>
//         </div>

//         <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
//           {/* Image Gallery */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">Service Overview</h4>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//               {detailImages.map((src, index) => (
//                 <motion.div
//                   key={index}
//                   className="aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <img
//                     src={src}
//                     alt={`${service.name} feature ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Overview */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">Description</h4>
//             <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
//           </div>

//           {/* Performance Metrics */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
//               <div className="text-3xl font-bold text-green-600 mb-2">{service.metrics?.accuracy}</div>
//               <div className="text-sm text-green-700 font-medium uppercase tracking-wide">Accuracy Rate</div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
//               <div className="text-3xl font-bold text-blue-600 mb-2">{service.metrics?.speed}</div>
//               <div className="text-sm text-blue-700 font-medium uppercase tracking-wide">Response Time</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
//               <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
//               <div className="text-sm text-purple-700 font-medium uppercase tracking-wide">Uptime</div>
//             </div>
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
//               <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
//               <div className="text-sm text-orange-700 font-medium uppercase tracking-wide">Support</div>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h4>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {service.features?.map((feature, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
//                 >
//                   <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-700 font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* API Example */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">API Integration</h4>
//             <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
//               <div className="text-gray-400 mb-3 font-sans font-medium">cURL Example:</div>
//               <div className="space-y-1">
//                 <div className="text-green-400">curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
//                 <div className="ml-4 text-blue-300">-H "Authorization: Bearer YOUR_API_KEY" \</div>
//                 <div className="ml-4 text-blue-300">-H "Content-Type: application/json" \</div>
//                 <div className="ml-4 text-yellow-300">-d '{"{"}"data": "your_input_data"{"}"}'</div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
//             <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl">
//               <BookOpen className="w-5 h-5" />
//               <span>Documentation</span>
//             </button>
//             <button className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium">
//               <ExternalLink className="w-5 h-5" />
//               <span>Try Demo</span>
//             </button>
//             <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
//               <Code2 className="w-5 h-5" />
//               <span>Code Samples</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const MLStackPage = () => {
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [expandedStack, setExpandedStack] = useState(null);
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   const slugify = (value) =>
//     String(value || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//   // Your existing stacks data...
//   const stacks = [
//     {
//       title: "TextStack",
//       icon: FileText,
//       description: "Transform unstructured text data into actionable insights with comprehensive natural language processing APIs.",
//       longDescription: "Advanced text processing capabilities including classification, extraction, translation, and summarization. Built with state-of-the-art transformer models for enterprise applications with multilingual support and custom domain adaptation.",
//       stats: [
//         { label: "Accuracy", value: "98.5%" },
//         { label: "Languages", value: "100+" },
//         { label: "Processed Daily", value: "1B+ docs" }
//       ],
//       services: [
//         {
//           name: "Text Classifier",
//           description: "Automatically organize and label text based on content, context, or tone with industry-leading accuracy.",
//           features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy"],
//           metrics: { accuracy: "97.8%", speed: "< 200ms" }
//         },
//         {
//           name: "Text Extractor", 
//           description: "Identify and extract key information such as entities, keywords, or specific fields from documents.",
//           features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
//           metrics: { accuracy: "96.5%", speed: "< 150ms" }
//         },
//         {
//           name: "Text Translator",
//           description: "Break language barriers with seamless translation across 100+ languages with cultural context awareness.",
//           features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
//           metrics: { accuracy: "94.2%", speed: "< 300ms" }
//         },
//         {
//           name: "Text Summarizer",
//           description: "Condense long texts into concise, informative summaries while preserving key insights.",
//           features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
//           metrics: { accuracy: "92.1%", speed: "< 500ms" }
//         },
//       ],
//     },
//     {
//       title: "VoiceStack",
//       icon: MessageCircle,
//       description: "Unlock the power of voice data with advanced speech processing capabilities for transcription, enhancement, and synthesis.",
//       longDescription: "Comprehensive voice processing suite enabling real-time transcription, speaker identification, voice enhancement, and synthesis. Optimized for enterprise applications with noise reduction, multi-language support, and custom voice models.",
//       stats: [
//         { label: "Accuracy", value: "97.2%" },
//         { label: "Languages", value: "85+" },
//         { label: "Hours Processed", value: "10M+" }
//       ],
//       services: [
//         {
//           name: "Voice Transcriber",
//           description: "Convert spoken language into text accurately and efficiently with real-time processing capabilities.",
//           features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
//           metrics: { accuracy: "97.2%", speed: "Real-time" }
//         },
//         {
//           name: "Voice Enhancer",
//           description: "Improve voice clarity by reducing background noise and refining audio quality using AI-powered filtering.",
//           features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
//           metrics: { accuracy: "95.8%", speed: "< 1s" }
//         },
//         {
//           name: "Voice Recognition",
//           description: "Identify speakers and understand voice patterns for security, customer profiling, and personalization.",
//           features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
//           metrics: { accuracy: "94.7%", speed: "< 2s" }
//         },
//         {
//           name: "Voice Synthesizer",
//           description: "Generate natural-sounding speech for text-to-speech applications with customizable voices.",
//           features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
//           metrics: { accuracy: "96.3%", speed: "< 2s" }
//         },
//       ],
//     },
//     {
//       title: "VisionStack",
//       icon: Camera,
//       description: "Transform visual data into structured insights with computer vision APIs for detection, classification, and analysis.",
//       longDescription: "Advanced computer vision capabilities for object detection, image classification, OCR, and visual content analysis. Supports real-time processing with high accuracy for enterprise applications across various industries.",
//       stats: [
//         { label: "Accuracy", value: "99.1%" },
//         { label: "Formats", value: "20+" },
//         { label: "Images Processed", value: "500M+" }
//       ],
//       services: [
//         {
//           name: "Vision Transcriber",
//           description: "Extract text and information from visual content, enhancing accessibility and archiving with OCR technology.",
//           features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
//           metrics: { accuracy: "99.1%", speed: "< 1s" }
//         },
//         {
//           name: "Vision Classifier",
//           description: "Identify and categorize objects within images for streamlined image recognition and content management.",
//           features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
//           metrics: { accuracy: "97.9%", speed: "< 400ms" }
//         },
//         {
//           name: "Vision Detector",
//           description: "Detect objects, faces, or items in real-time for security, retail, and automation applications.",
//           features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
//           metrics: { accuracy: "96.8%", speed: "< 100ms" }
//         },
//         {
//           name: "Table Extractor",
//           description: "Convert tables and structured visual data into usable, digital formats with high precision.",
//           features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
//           metrics: { accuracy: "94.3%", speed: "< 2s" }
//         },
//       ],
//     },
//   ];

//   const features = [
//     {
//       icon: Database,
//       title: "Dockerized Microservices",
//       description: "Auto-scalable containerized services with Kubernetes orchestration for handling massive workloads.",
//     },
//     {
//       icon: Cloud,
//       title: "Multi-Cloud Deployment", 
//       description: "Deploy seamlessly across AWS, Azure, GCP, or on-premises infrastructure with consistent performance.",
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Bank-grade security with SOC2, GDPR compliance, featuring end-to-end encryption and audit trails.",
//     },
//     {
//       icon: Network,
//       title: "MLOps Integration",
//       description: "Seamless integration with MLOps pipelines for automated model monitoring, updating, and deployment.",
//     },
//   ];

//   const metrics = [
//     { label: "API Calls Processed", value: "10B+", icon: Database },
//     { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
//     { label: "Average Response", value: "<200ms", icon: Zap },
//     { label: "Enterprise Clients", value: "500+", icon: Users },
//   ];

//   // Scroll to target section
//   useEffect(() => {
//     if (!location.pathname.match(/\/MLStack$/i)) return;
//     const target = searchParams.get("stack");
//     if (!target) return;

//     const id = slugify(target);
//     const el = document.getElementById(id);
//     if (el) {
//       setHighlightedId(id);
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => {
//         window.scrollBy({ top: -80, left: 0, behavior: "auto" });
//       }, 400);
//       const timeout = setTimeout(() => setHighlightedId(null), 2200);
//       return () => clearTimeout(timeout);
//     }
//   }, [location.pathname, searchParams]);

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setSelectedService(null);
//         setExpandedStack(null);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   useEffect(() => {
//     if (selectedService) {
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = "unset";
//       };
//     }
//   }, [selectedService]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div {...fadeIn}>
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//               MLStack
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light">
//               Stack of Machine Learning APIs for Structuring Unstructured Data
//             </p>
//             <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Enterprise-grade AI APIs for Text, Voice, and Vision processing with 
//               state-of-the-art accuracy and lightning-fast performance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/Contact">
//                 <motion.button
//                   className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Get Started
//                 </motion.button>
//               </Link>
//               <motion.button
//                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 View Documentation
//               </motion.button>
//             </div>
            
//             {/* Key Metrics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 bg-slate-100 p-4 rounded-lg">
//               {metrics.map((metric, index) => (
//                 <motion.div
//                   key={metric.label}
//                   className="text-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                 >
//                   <metric.icon className="w-6 h-6 text-green-800 mx-auto mb-2" />
//                   <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
//                   <div className="text-sm text-gray-600">{metric.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stack Sections */}
//       {stacks.map((stack, index) => {
//         const sectionId = slugify(stack.title);
//         const isHighlighted = highlightedId === sectionId;
//         const isExpanded = expandedStack === index;
        
//         return (
//           <motion.section
//             key={stack.title}
//             id={sectionId}
//             className={`py-20 px-4 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} ${
//               isHighlighted ? 'ring-2 ring-green-500 ring-inset' : ''
//             }`}
//             {...fadeIn}
//             transition={{ delay: index * 0.2 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               {/* Stack Header */}
//               <div className="text-center mb-16">
//                 <div className="flex justify-center mb-6">
//                   <div className="p-4 rounded-xl">
//                     <stack.icon className="w-10 h-10 text-green-800" />
//                   </div>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {stack.title}
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//                   {stack.description}
//                 </p>

//                 {/* Stack Stats */}
//                 <div className="flex justify-center space-x-8 mb-8">
//                   {stack.stats.map((stat, idx) => (
//                     <div key={idx} className="text-center">
//                       <div className="text-xl font-semibold text-green-600">{stat.value}</div>
//                       <div className="text-lg text-black-600">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setExpandedStack(isExpanded ? null : index)}
//                   className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   <span className="text-sm font-medium">
//                     {isExpanded ? 'Show Less' : 'Learn More'}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: isExpanded ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown className="w-4 h-4 text-green-600" />
//                   </motion.div>
//                 </button>
//               </div>

//               {/* Expanded Content */}
//               <AnimatePresence>
//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden mb-16"
//                   >
//                     <div className="bg-white p-8 rounded-lg border border-green-600">
//                       <p className="text-gray-700 leading-relaxed">{stack.longDescription}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Enhanced Services Grid */}
//               <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
//                 {stack.services.map((service, serviceIndex) => (
//                   <ServiceCard
//                     key={service.name}
//                     service={service}
//                     stackTitle={stack.title}
//                     onServiceClick={setSelectedService}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         );
//       })}

//       {/* Features Section */}
//       <motion.section className="py-20 px-4 bg-gray-50" {...fadeIn}>
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Enterprise-Grade Infrastructure
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Built for scale, security, and performance with modern architecture
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="bg-white p-6 rounded-lg border border-gray-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-4">
//                     <feature.icon className="w-6 h-6 text-green-800" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         className="py-20 px-6 bg-white text-black max-w-4xl mt-4 mb-4 mx-auto rounded-2xl shadow-lg"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           variants={cardVariants}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Transform Your Data Processing?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             Experience the power of AI-human collaboration with MLloOps™. Process any format,
//             manage any scale, deliver precise results—all through one intelligent platform.
//           </p>
    
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
//             >
//               Start Free Trial
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
//             >
//               Schedule Demo
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Enhanced Service Modal */}
//       <AnimatePresence>
//         {selectedService && (
//           <ServiceModal
//             service={selectedService}
//             onClose={() => setSelectedService(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MLStackPage;




// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useSearchParams } from "react-router-dom";
// import {
//   FileText,
//   MessageCircle,
//   Camera,
//   Database,
//   Cloud,
//   Settings,
//   Network,
//   X,
//   ArrowRight,
//   ChevronDown,
//   Check,
//   ExternalLink,
//   BookOpen,
//   Eye,
//   Zap,
//   Shield,
//   Users,
//   Target,
//   Award,
//   TrendingUp,
//   Play,
//   Code2,
//   Sparkles
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   hover: {
//     y: -4,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     },
//   },
// };

// // Service Images Data - Replace with your actual Cloudinary URLs
// const serviceImages = {
//   // TextStack images
//   "Text Classifier": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/Text_to_Text_aiziq5.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/Text_to_Text_aiziq5.png",
      
//     ]
//   },
//   "Text Extractor": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
      
//     ]
//   },
//   "Text Translator": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/Text_to_Text_aiziq5.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/Text_to_Text_aiziq5.png",
      
//     ]
//   },
//   "Text Summarizer": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/PDF_to_Text_lynske.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196840/PDF_to_Text_lynske.png",
     
//     ]
//   },
//   // VoiceStack images
//   "Voice Transcriber": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196838/Audio_to_Text_coxcbr.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196838/Audio_to_Text_coxcbr.png",
      
//     ]
//   },
//   "Voice Enhancer": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
   
//     ]
//   },
//   "Voice Recognition": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196838/Audio_to_Text_coxcbr.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196838/Audio_to_Text_coxcbr.png",
      
//     ]
//   },
//   "Voice Synthesizer": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196836/Text_to_Audio_ncjnck.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196836/Text_to_Audio_ncjnck.png",
     
//     ]
//   },
//   // VisionStack images
//   "Vision Transcriber": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
     
//     ]
//   },
//   "Vision Classifier": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",

//     ]
//   },
//   "Vision Detector": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196837/Image_to_Image_zwqk8b.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196837/Image_to_Image_zwqk8b.png",
      
//     ]
//   },
//   "Table Extractor": {
//     preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196884/Table_Extractor_preview.png",
//     gallery: [
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196884/Table_Extractor_preview.png",
   
//     ]
//   }
// };

// // Enhanced Service Card with Real Images
// const ServiceCard = ({ service, stackTitle, onServiceClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Get service-specific images
//   const serviceImageData = serviceImages[service.name];
//   const previewImage = serviceImageData?.preview || "https://via.placeholder.com/300x200?text=No+Image";

//   return (
//     <motion.div
//       className="group relative bg-white rounded-lg border border-gray-100 hover:border-gray-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg"
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       variants={cardVariants}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Main Content */}
//       <div className="relative p-6">
//         {/* Service Preview Image */}
//         <div className="mb-4 overflow-hidden rounded-lg">
//           <motion.img
//             src={previewImage}
//             alt={`${service.name} preview`}
//             className="w-full h-32 object-cover"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/300x200?text=Service+Preview";
//             }}
//           />
//         </div>

//         {/* Service Header */}
//         <div className="flex items-start justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
//             {service.name}
//           </h3>
//           <motion.div
//             animate={{
//               x: isHovered ? 5 : 0,
//               rotate: isHovered ? 45 : 0
//             }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
//           </motion.div>
//         </div>
        
//         {/* Service Description */}
//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {service.description}
//         </p>
        
//         {/* Service Metrics */}
//         <div className="flex items-center justify-between text-sm mb-4">
//           <span className="text-green-600 font-medium">{service.metrics?.accuracy} accuracy</span>
//           <span className="text-gray-500">{service.metrics?.speed}</span>
//         </div>

//         {/* Feature Pills */}
//         <div className="flex flex-wrap gap-2">
//           {service.features?.slice(0, 2).map((feature, index) => (
//             <span
//               key={index}
//               className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200"
//             >
//               {feature}
//             </span>
//           ))}
//           {service.features?.length > 2 && (
//             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-200">
//               +{service.features.length - 2} more
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Classic Blur Overlay */}
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
//           >
//             {/* Service Image Grid */}
//             {/* <motion.div 
//               className="grid grid-cols-2 gap-2 mb-6 w-full max-w-[200px]"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1, duration: 0.3 }}
//             >
//               {serviceImageData?.gallery?.slice(0, 4).map((src, index) => (
//                 <motion.div
//                   key={index}
//                   className="aspect-square overflow-hidden rounded-lg shadow-md"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
//                 >
//                   <img
//                     src={src}
//                     alt={`${service.name} preview ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/100x100?text=No+Image";
//                     }}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div> */}

//             {/* View More Button */}
//             <motion.button
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.3, type: "spring", stiffness: 200 }}
//               className="group/btn flex items-center space-x-2 bg-Primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onServiceClick({
//                   stackTitle,
//                   ...service,
//                   images: serviceImageData
//                 });
//               }}
//             >
//               <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//               <span>View More</span>
//               <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
//             </motion.button>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ y: 15, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.3 }}
//               className="mt-4 grid grid-cols-2 gap-6 text-center"
//             >
//               <div className="text-center">
//                 <div className="text-lg font-bold text-green-600">{service.metrics?.accuracy}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-lg font-bold text-blue-600">{service.metrics?.speed}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Response</div>
//               </div>
//             </motion.div>

//             {/* Decorative Elements */}
//             <motion.div 
//               className="absolute top-4 right-4"
//               initial={{ opacity: 0, rotate: -180 }}
//               animate={{ opacity: 0.3, rotate: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               <Sparkles className="w-5 h-5 text-green-500" />
//             </motion.div>
            
//             <motion.div 
//               className="absolute bottom-4 left-4"
//               initial={{ opacity: 0, rotate: 180 }}
//               animate={{ opacity: 0.2, rotate: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <Sparkles className="w-4 h-4 text-blue-500" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Subtle Glow Effect */}
//       <div className={`absolute inset-0 bg-gradient-to-r from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`} />
//     </motion.div>
//   );
// };

// // Enhanced Modal with Real Images
// const ServiceModal = ({ service, onClose }) => {
//   if (!service) return null;
//   const modalRef = useRef(null);

//   // Get service images from the passed service data
//   const serviceImageData = service.images || serviceImages[service.name];
//   const galleryImages = serviceImageData?.gallery || [];

//   useEffect(() => {
//     modalRef.current?.focus();
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <motion.div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
//         onClick={onClose}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       />
      
//       <motion.div
//         ref={modalRef}
//         className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-gray-200"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
//               <p className="text-green-600 font-medium mt-1">{service.stackTitle} Service</p>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
//               aria-label="Close modal"
//             >
//               <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
//             </button>
//           </div>
//         </div>

//         <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
//           {/* Image Gallery - Using Real Service Images */}
//           {galleryImages.length > 0 && (
//             <div className="mb-8">
//               <h4 className="text-xl font-semibold mb-4 text-gray-900">Service Overview</h4>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                 {galleryImages.map((src, index) => (
//                   <motion.div
//                     key={index}
//                     className="aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.3 }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <img
//                       src={src}
//                       alt={`${service.name} feature ${index + 1}`}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/600x400?text=Service+Image";
//                       }}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Overview */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">Description</h4>
//             <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
//           </div>

//           {/* Performance Metrics */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
//               <div className="text-3xl font-bold text-green-600 mb-2">{service.metrics?.accuracy}</div>
//               <div className="text-sm text-green-700 font-medium uppercase tracking-wide">Accuracy Rate</div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
//               <div className="text-3xl font-bold text-blue-600 mb-2">{service.metrics?.speed}</div>
//               <div className="text-sm text-blue-700 font-medium uppercase tracking-wide">Response Time</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
//               <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
//               <div className="text-sm text-purple-700 font-medium uppercase tracking-wide">Uptime</div>
//             </div>
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
//               <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
//               <div className="text-sm text-orange-700 font-medium uppercase tracking-wide">Support</div>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h4>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {service.features?.map((feature, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
//                 >
//                   <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-700 font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* API Example */}
//           <div className="mb-8">
//             <h4 className="text-xl font-semibold mb-4 text-gray-900">API Integration</h4>
//             <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
//               <div className="text-gray-400 mb-3 font-sans font-medium">cURL Example:</div>
//               <div className="space-y-1">
//                 <div className="text-green-400">curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
//                 <div className="ml-4 text-blue-300">-H "Authorization: Bearer YOUR_API_KEY" \</div>
//                 <div className="ml-4 text-blue-300">-H "Content-Type: application/json" \</div>
//                 <div className="ml-4 text-yellow-300">-d '{"{"}"data": "your_input_data"{"}"}'</div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
//             <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl">
//               <BookOpen className="w-5 h-5" />
//               <span>Documentation</span>
//             </button>
//             <button className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium">
//               <ExternalLink className="w-5 h-5" />
//               <span>Try Demo</span>
//             </button>
//             <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
//               <Code2 className="w-5 h-5" />
//               <span>Code Samples</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Your existing MLStackPage component remains the same, just replace the ServiceCard and ServiceModal components
// const MLStackPage = () => {
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [expandedStack, setExpandedStack] = useState(null);
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   // ... rest of your existing MLStackPage code remains exactly the same ...

//   const slugify = (value) =>
//     String(value || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//   const stacks = [
//     // Your existing stacks data...
//     {
//       title: "TextStack",
//       icon: FileText,
//       description: "Transform unstructured text data into actionable insights with comprehensive natural language processing APIs.",
//       longDescription: "Advanced text processing capabilities including classification, extraction, translation, and summarization. Built with state-of-the-art transformer models for enterprise applications with multilingual support and custom domain adaptation.",
//       stats: [
//         { label: "Accuracy", value: "98.5%" },
//         { label: "Languages", value: "100+" },
//         { label: "Processed Daily", value: "1B+ docs" }
//       ],
//       services: [
//         {
//           name: "Text Classifier",
//           description: "Automatically organize and label text based on content, context, or tone with industry-leading accuracy.",
//           features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy"],
//           metrics: { accuracy: "97.8%", speed: "< 200ms" }
//         },
//         {
//           name: "Text Extractor", 
//           description: "Identify and extract key information such as entities, keywords, or specific fields from documents.",
//           features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
//           metrics: { accuracy: "96.5%", speed: "< 150ms" }
//         },
//         {
//           name: "Text Translator",
//           description: "Break language barriers with seamless translation across 100+ languages with cultural context awareness.",
//           features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
//           metrics: { accuracy: "94.2%", speed: "< 300ms" }
//         },
//         {
//           name: "Text Summarizer",
//           description: "Condense long texts into concise, informative summaries while preserving key insights.",
//           features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
//           metrics: { accuracy: "92.1%", speed: "< 500ms" }
//         },
//       ],
//     },
//     {
//       title: "VoiceStack",
//       icon: MessageCircle,
//       description: "Unlock the power of voice data with advanced speech processing capabilities for transcription, enhancement, and synthesis.",
//       longDescription: "Comprehensive voice processing suite enabling real-time transcription, speaker identification, voice enhancement, and synthesis. Optimized for enterprise applications with noise reduction, multi-language support, and custom voice models.",
//       stats: [
//         { label: "Accuracy", value: "97.2%" },
//         { label: "Languages", value: "85+" },
//         { label: "Hours Processed", value: "10M+" }
//       ],
//       services: [
//         {
//           name: "Voice Transcriber",
//           description: "Convert spoken language into text accurately and efficiently with real-time processing capabilities.",
//           features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
//           metrics: { accuracy: "97.2%", speed: "Real-time" }
//         },
//         {
//           name: "Voice Enhancer",
//           description: "Improve voice clarity by reducing background noise and refining audio quality using AI-powered filtering.",
//           features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
//           metrics: { accuracy: "95.8%", speed: "< 1s" }
//         },
//         {
//           name: "Voice Recognition",
//           description: "Identify speakers and understand voice patterns for security, customer profiling, and personalization.",
//           features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
//           metrics: { accuracy: "94.7%", speed: "< 2s" }
//         },
//         {
//           name: "Voice Synthesizer",
//           description: "Generate natural-sounding speech for text-to-speech applications with customizable voices.",
//           features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
//           metrics: { accuracy: "96.3%", speed: "< 2s" }
//         },
//       ],
//     },
//     {
//       title: "VisionStack",
//       icon: Camera,
//       description: "Transform visual data into structured insights with computer vision APIs for detection, classification, and analysis.",
//       longDescription: "Advanced computer vision capabilities for object detection, image classification, OCR, and visual content analysis. Supports real-time processing with high accuracy for enterprise applications across various industries.",
//       stats: [
//         { label: "Accuracy", value: "99.1%" },
//         { label: "Formats", value: "20+" },
//         { label: "Images Processed", value: "500M+" }
//       ],
//       services: [
//         {
//           name: "Vision Transcriber",
//           description: "Extract text and information from visual content, enhancing accessibility and archiving with OCR technology.",
//           features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
//           metrics: { accuracy: "99.1%", speed: "< 1s" }
//         },
//         {
//           name: "Vision Classifier",
//           description: "Identify and categorize objects within images for streamlined image recognition and content management.",
//           features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
//           metrics: { accuracy: "97.9%", speed: "< 400ms" }
//         },
//         {
//           name: "Vision Detector",
//           description: "Detect objects, faces, or items in real-time for security, retail, and automation applications.",
//           features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
//           metrics: { accuracy: "96.8%", speed: "< 100ms" }
//         },
//         {
//           name: "Table Extractor",
//           description: "Convert tables and structured visual data into usable, digital formats with high precision.",
//           features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
//           metrics: { accuracy: "94.3%", speed: "< 2s" }
//         },
//       ],
//     },
//   ];

//   const features = [
//     {
//       icon: Database,
//       title: "Dockerized Microservices",
//       description: "Auto-scalable containerized services with Kubernetes orchestration for handling massive workloads.",
//     },
//     {
//       icon: Cloud,
//       title: "Multi-Cloud Deployment", 
//       description: "Deploy seamlessly across AWS, Azure, GCP, or on-premises infrastructure with consistent performance.",
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Bank-grade security with SOC2, GDPR compliance, featuring end-to-end encryption and audit trails.",
//     },
//     {
//       icon: Network,
//       title: "MLOps Integration",
//       description: "Seamless integration with MLOps pipelines for automated model monitoring, updating, and deployment.",
//     },
//   ];

//   const metrics = [
//     { label: "API Calls Processed", value: "10B+", icon: Database },
//     { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
//     { label: "Average Response", value: "<200ms", icon: Zap },
//     { label: "Enterprise Clients", value: "500+", icon: Users },
//   ];

//   // Scroll to target section
//   useEffect(() => {
//     if (!location.pathname.match(/\/MLStack$/i)) return;
//     const target = searchParams.get("stack");
//     if (!target) return;

//     const id = slugify(target);
//     const el = document.getElementById(id);
//     if (el) {
//       setHighlightedId(id);
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => {
//         window.scrollBy({ top: -80, left: 0, behavior: "auto" });
//       }, 400);
//       const timeout = setTimeout(() => setHighlightedId(null), 2200);
//       return () => clearTimeout(timeout);
//     }
//   }, [location.pathname, searchParams]);

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setSelectedService(null);
//         setExpandedStack(null);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   useEffect(() => {
//     if (selectedService) {
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = "unset";
//       };
//     }
//   }, [selectedService]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div {...fadeIn}>
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//               MLStack
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light">
//               Stack of Machine Learning APIs for Structuring Unstructured Data
//             </p>
//             <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Enterprise-grade AI APIs for Text, Voice, and Vision processing with 
//               state-of-the-art accuracy and lightning-fast performance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/Contact">
//                 <motion.button
//                   className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Get Started
//                 </motion.button>
//               </Link>
//               <motion.button
//                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 View Documentation
//               </motion.button>
//             </div>
            
//             {/* Key Metrics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 bg-slate-100 p-4 rounded-lg">
//               {metrics.map((metric, index) => (
//                 <motion.div
//                   key={metric.label}
//                   className="text-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                 >
//                   <metric.icon className="w-6 h-6 text-green-800 mx-auto mb-2" />
//                   <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
//                   <div className="text-sm text-gray-600">{metric.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stack Sections */}
//       {stacks.map((stack, index) => {
//         const sectionId = slugify(stack.title);
//         const isHighlighted = highlightedId === sectionId;
//         const isExpanded = expandedStack === index;
        
//         return (
//           <motion.section
//             key={stack.title}
//             id={sectionId}
//             className={`py-20 px-4 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} ${
//               isHighlighted ? 'ring-2 ring-green-500 ring-inset' : ''
//             }`}
//             {...fadeIn}
//             transition={{ delay: index * 0.2 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               {/* Stack Header */}
//               <div className="text-center mb-16">
//                 <div className="flex justify-center mb-6">
//                   <div className="p-4 rounded-xl">
//                     <stack.icon className="w-10 h-10 text-green-800" />
//                   </div>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {stack.title}
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//                   {stack.description}
//                 </p>

//                 {/* Stack Stats */}
//                 <div className="flex justify-center space-x-8 mb-8">
//                   {stack.stats.map((stat, idx) => (
//                     <div key={idx} className="text-center">
//                       <div className="text-xl font-semibold text-green-600">{stat.value}</div>
//                       <div className="text-lg text-black-600">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setExpandedStack(isExpanded ? null : index)}
//                   className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   <span className="text-sm font-medium">
//                     {isExpanded ? 'Show Less' : 'Learn More'}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: isExpanded ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown className="w-4 h-4 text-green-600" />
//                   </motion.div>
//                 </button>
//               </div>

//               {/* Expanded Content */}
//               <AnimatePresence>
//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden mb-16"
//                   >
//                     <div className="bg-white p-8 rounded-lg border border-green-600">
//                       <p className="text-gray-700 leading-relaxed">{stack.longDescription}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Enhanced Services Grid with Real Images */}
//               <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
//                 {stack.services.map((service, serviceIndex) => (
//                   <ServiceCard
//                     key={service.name}
//                     service={service}
//                     stackTitle={stack.title}
//                     onServiceClick={setSelectedService}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         );
//       })}

//       {/* Features Section */}
//       <motion.section className="py-20 px-4 bg-gray-50" {...fadeIn}>
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Enterprise-Grade Infrastructure
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Built for scale, security, and performance with modern architecture
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="bg-white p-6 rounded-lg border border-gray-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-4">
//                     <feature.icon className="w-6 h-6 text-green-800" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         className="py-20 px-6 bg-white text-black max-w-4xl mt-4 mb-4 mx-auto rounded-2xl shadow-lg"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           variants={cardVariants}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Transform Your Data Processing?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             Experience the power of AI-human collaboration with MLloOps™. Process any format,
//             manage any scale, deliver precise results—all through one intelligent platform.
//           </p>
    
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
//             >
//               Start Free Trial
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
//             >
//               Schedule Demo
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Enhanced Service Modal with Real Images */}
//       <AnimatePresence>
//         {selectedService && (
//           <ServiceModal
//             service={selectedService}
//             onClose={() => setSelectedService(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MLStackPage;



import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  FileText,
  MessageCircle,
  Camera,
  Database,
  Cloud,
  Settings,
  Network,
  X,
  ArrowRight,
  ChevronDown,
  Check,
  ExternalLink,
  BookOpen,
  Eye,
  Zap,
  Shield,
  Users,
  Target,
  Award,
  TrendingUp,
  Play,
  Code2,
  Sparkles,ChevronLeft,ChevronRight,Pause
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
  },
};

// Floating particles animation
const FloatingParticles = ({ count = 6 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-300 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Service Images Data - Replace with your actual Cloudinary URLs
const serviceImages = {
  "Text Classifier": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348885/Text_Classifier_vjct5m.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348885/Text_Classifier_vjct5m.png",
    ]
  },
  "Text Extractor": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348978/Text_Extractor_tvsoim.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348978/Text_Extractor_tvsoim.png",
    ]
  },
  "Text Translator": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349030/Text_Translator_m6cmif.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349030/Text_Translator_m6cmif.png",
    ]
  },
  "Text Summarizer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349084/Text_Summarizer_c5rjuw.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349084/Text_Summarizer_c5rjuw.png",
    ]
  },
  "Voice Transcriber": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349129/Voice_Transcriber_pe5obo.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349129/Voice_Transcriber_pe5obo.png",
    ]
  },
  "Voice Enhancer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
    ]
  },
  "Voice Recognition": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352016/Voice_Recognition_db0pxf.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352016/Voice_Recognition_db0pxf.png",
    ]
  },
  "Voice Synthesizer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352115/Voice_Synthesizer_i2kjbc.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352115/Voice_Synthesizer_i2kjbc.png",
    ]
  },
  "Vision Transcriber": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196841/Image_to_Text_rseyyf.png",
    ]
  },
  "Vision Classifier": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352186/Vision_Classifier_psxvaa.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352186/Vision_Classifier_psxvaa.png",
    ]
  },
  "Vision Detector": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352229/Vision_Detector_fgeqqn.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352229/Vision_Detector_fgeqqn.png",
    ]
  },
  "Table Extractor": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352267/Table_Extractor_jcm8m0.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352267/Table_Extractor_jcm8m0.png",
    ]
  }
};

const CarouselStyle = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  
   const videos = [
    { 
      title: 'Platform Overview', 
      duration: '2:45',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758358981/MLloOps_Changed_images_wzknfo.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758358981/MLloOps_Changed_images_wzknfo.jpg' // Auto-generated thumbnail
    },
    // { 
    //   title: 'AI Processing Demo', 
    //   duration: '3:20',
    //   url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.mp4', // Same video for demo
    //   thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.jpg'
    // },
    // { 
    //   title: 'Human Collaboration', 
    //   duration: '1:55',
    //   url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.mp4',
    //   thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.jpg'
    // },
    // { 
    //   title: 'Results Dashboard', 
    //   duration: '2:10',
    //   url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.mp4', // Same video for demo
    //   thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.jpg'
    // }
  ];

  const handlePlayClick = async () => {
    if (!videoRef.current) return;
    
    try {
      setIsLoading(true);
      
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure video is loaded
        await videoRef.current.load();
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Video play error:', error);
      // Fallback: try to play without await
      if (!isPlaying) {
        videoRef.current.play().catch(e => console.error('Fallback play failed:', e));
      }
    } finally {
      setIsLoading(false);
    }
  };
    const handleVideoChange = (index) => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setCurrentVideo(index);
      setIsPlaying(false);
      setIsLoading(false);
    };
  
    // Video event handlers
    const handleVideoPlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
  
    const handleVideoPause = () => {
      setIsPlaying(false);
    };
  
    const handleVideoEnded = () => {
      setIsPlaying(false);
    };
  
    const handleVideoLoadStart = () => {
      setIsLoading(true);
    };
  
    const handleVideoCanPlay = () => {
      setIsLoading(false);
    };
  
    return (
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto bg-gray-50">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Explore Our Stack Platform
            </h2>
            <p className="text-gray-600 text-lg">
              Multiple perspectives, one powerful solution
            </p>
          </motion.div>
  
          <div className="relative">
            {/* Main video player */}
            <motion.div
              className="bg-black rounded-xl overflow-hidden mb-8 shadow-xl"
              key={currentVideo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-video bg-gray-900">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={videos[currentVideo].thumbnail}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnded}
                  onLoadStart={handleVideoLoadStart}
                  onCanPlay={handleVideoCanPlay}
                  playsInline
                  preload="metadata"
                  style={{ display: isPlaying ? 'block' : 'block' }}
                >
                  <source src={videos[currentVideo].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
  
                {/* Large Play Button Overlay - Fixed Click Handler */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
                      onClick={handlePlayClick}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="relative flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isLoading ? (
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-gray-900"></div>
                          </div>
                        ) : (
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:bg-white transition-all duration-300">
                            <Play className="w-8 h-8 text-gray-900 ml-2" fill="currentColor" />
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
  
                {/* Video Controls Overlay (when playing) */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div 
                      className="absolute inset-0 bg-transparent cursor-pointer z-5"
                      onClick={handlePlayClick}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              {/* Video Info Bar */}
              <div className="p-6 bg-gray-900 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h3>
                    <span className="text-gray-400">{videos[currentVideo].duration}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                   
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayClick}
                      disabled={isLoading}
                      className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      ) : isPlaying ? (
                        <Pause className="w-5 h-5" fill="currentColor" />
                      ) : (
                        <Play className="w-5 h-5" fill="currentColor" />
                      )}
                    </motion.button>
  
               
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleVideoChange(Math.max(0, currentVideo - 1))}
                      disabled={currentVideo === 0}
                      className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleVideoChange(Math.min(videos.length - 1, currentVideo + 1))}
                      disabled={currentVideo === videos.length - 1}
                      className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button> */}
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Video thumbnails */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentVideo 
                      ? 'ring-4 ring-blue-500 shadow-lg' 
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVideoChange(index)}
                >
                  <div className="relative aspect-video bg-gray-300">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className={`rounded-full p-2 ${
                        index === currentVideo ? 'bg-blue-500' : 'bg-white/80'
                      }`}>
                        <Play className={`w-4 h-4 ${
                          index === currentVideo ? 'text-white' : 'text-gray-700'
                        }`} fill="currentColor" />
                      </div>
                    </div>
                    {index === currentVideo && (
                      <div className="absolute top-2 left-2">
                        <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          {isPlaying ? 'Now Playing' : 'Selected'}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-3 bg-white">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500">{video.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div> */}
  
            {/* Video Progress Indicators */}
            {/* <div className="flex justify-center mt-6 space-x-2">
              {videos.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentVideo ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleVideoChange(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div> */}
          </div>
        </div>
      </motion.section>
    );
  };

// Enhanced Service Card with subtle animations
// Enhanced Service Card with light hover animation and visible background
const ServiceCard = ({ service, stackTitle, onServiceClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const serviceImageData = serviceImages[service.name];
  const previewImage = serviceImageData?.preview || "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <motion.div
      className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-2 -right-2 w-20 h-20 bg-gray-100 rounded-full opacity-30"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.4 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.2,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </div>

      {/* Main Content - Always Visible */}
      <div className="relative p-6 z-10"  onClick={(e) => {
                  e.stopPropagation();
                  onServiceClick({
                    stackTitle,
                    ...service,
                    images: serviceImageData
                  });
                }}>
        {/* Service Preview Image */}
        <div className="mb-4 overflow-hidden rounded-lg bg-gray-50">
          <motion.img
            src={previewImage}
            alt={`${service.name} preview`}
            className="w-full h-32 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200?text=Service+Preview";
            }}
          />
        </div>

        {/* Service Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {service.name}
          </h3>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              rotate: isHovered ? 45 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </motion.div>
        </div>
        
        {/* Service Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {service.description}
        </p>
        
        {/* Service Metrics */}
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-700 font-medium">{service.metrics?.accuracy} accuracy</span>
          <span className="text-gray-500">{service.metrics?.speed}</span>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features?.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200"
            >
              {feature}
            </span>
          ))}
          {service.features?.length > 2 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-200">
              +{service.features.length - 2} more
            </span>
          )}
        </div>

        {/* View Details Button - Only shows on hover with light animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className="flex justify-center"
            >
              <motion.button
                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onServiceClick({
                    stackTitle,
                    ...service,
                    images: serviceImageData
                  });
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Eye className="w-4 h-4" />
                </motion.div>
                <span>View Details</span>
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Light Hover Effect Overlay - Very subtle */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-transparent to-gray-200/10 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle border glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Decorative corner elements that animate on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div 
              className="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div 
              className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-500 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// const ServiceCard = ({ service, stackTitle, onServiceClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const serviceImageData = serviceImages[service.name];
//   const previewImage = serviceImageData?.preview || "https://via.placeholder.com/300x200?text=No+Image";

//   return (
//     <motion.div
//       className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       variants={cardVariants}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50" />
      
//       {/* Subtle floating elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute -top-2 -right-2 w-20 h-20 bg-gray-100 rounded-full opacity-30"
//           animate={{
//             scale: isHovered ? 1.1 : 1,
//             opacity: isHovered ? 0.4 : 0.3,
//           }}
//           transition={{ duration: 0.3 }}
//         />
//         <motion.div
//           className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-20"
//           animate={{
//             scale: isHovered ? 1.2 : 1,
//             opacity: isHovered ? 0.3 : 0.2,
//           }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative p-6 z-10">
//         {/* Service Preview Image */}
//         <div className="mb-4 overflow-hidden rounded-lg bg-gray-50">
//           <motion.img
//             src={previewImage}
//             alt={`${service.name} preview`}
//             className="w-full h-32 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/300x200?text=Service+Preview";
//             }}
//           />
//         </div>

//         {/* Service Header */}
//         <div className="flex items-start justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
//             {service.name}
//           </h3>
//           <motion.div
//             animate={{
//               x: isHovered ? 5 : 0,
//               rotate: isHovered ? 45 : 0
//             }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
//           </motion.div>
//         </div>
        
//         {/* Service Description */}
//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {service.description}
//         </p>
        
//         {/* Service Metrics */}
//         <div className="flex items-center justify-between text-sm mb-4">
//           <span className="text-gray-700 font-medium">{service.metrics?.accuracy} accuracy</span>
//           <span className="text-gray-500">{service.metrics?.speed}</span>
//         </div>

//         {/* Feature Pills */}
//         <div className="flex flex-wrap gap-2">
//           {service.features?.slice(0, 2).map((feature, index) => (
//             <span
//               key={index}
//               className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200"
//             >
//               {feature}
//             </span>
//           ))}
//           {service.features?.length > 2 && (
//             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-200">
//               +{service.features.length - 2} more
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Hover Overlay */}
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-20"
//           >
//             {/* View More Button */}
//             <motion.button
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.3, type: "spring", stiffness: 200 }}
//               className="group/btn flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onServiceClick({
//                   stackTitle,
//                   ...service,
//                   images: serviceImageData
//                 });
//               }}
//             >
//               <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//               <span>View Details</span>
//               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
//             </motion.button>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ y: 15, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.3 }}
//               className="mt-4 grid grid-cols-2 gap-6 text-center"
//             >
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-700">{service.metrics?.accuracy}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-600">{service.metrics?.speed}</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Response</div>
//               </div>
//             </motion.div>

//             {/* Decorative Elements */}
//             <motion.div 
//               className="absolute top-4 right-4"
//               initial={{ opacity: 0, rotate: -180 }}
//               animate={{ opacity: 0.2, rotate: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <Sparkles className="w-5 h-5 text-gray-500" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Subtle border glow */}
//       <div className={`absolute inset-0 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl`} />
//     </motion.div>
//   );
// };

// Enhanced Modal with visible background content
// Enhanced Modal with larger images and optimized spacing
const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;
  const modalRef = useRef(null);

  const serviceImageData = service.images || serviceImages[service.name];
  const galleryImages = serviceImageData?.gallery || [];

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
      {/* Background with backdrop filter - content remains visible */}
      <motion.div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        ref={modalRef}
        className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden border border-gray-200"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Compact Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{service.name}</h3>
              <p className="text-gray-600 font-medium text-sm">{service.stackTitle} Service</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-80px)]">
          {/* Large Image Gallery - Primary Focus */}
          {galleryImages.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Service Preview</h4>
              
              {/* Single Large Featured Image for Mobile, Grid for Desktop */}
              <div className="space-y-4">
                {/* Main Featured Image - Extra Large */}
                <motion.div
                  className="w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={galleryImages[0]}
                    alt={`${service.name} main preview`}
                    className="w-full h-full object-contain bg-white filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/1200x600?text=Service+Preview";
                    }}
                  />
                </motion.div>

                {/* Additional Images - Larger Grid */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {galleryImages.slice(1).map((src, index) => (
                      <motion.div
                        key={index}
                        className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={src}
                          alt={`${service.name} feature ${index + 2}`}
                          className="w-full h-full object-contain bg-white filter grayscale hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x450?text=Service+Image";
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Compact Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Description</h4>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{service.description}</p>
          </div>

          {/* Compact Performance Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">{service.metrics?.accuracy}</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">{service.metrics?.speed}</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Response</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-150 p-3 md:p-4 rounded-lg border border-gray-200">
            <div className="text-xl md:text-2xl font-bold text-gray-700">&gt;95%</div>
<div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Uptime</div>

            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">24/7</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Support</div>
            </div>
          </div>

          {/* Compact Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {service.features?.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 p-2 md:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compact API Example */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">API Integration</h4>
            <div className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2 font-sans font-medium text-xs">cURL Example:</div>
              <div className="space-y-1">
                <div className="text-green-400 break-all">curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
                <div className="ml-2 text-blue-300">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="ml-2 text-blue-300">-H "Content-Type: application/json" \</div>
                <div className="ml-2 text-yellow-300">-d '{"{"}"data": "your_input_data"{"}"}'</div>
              </div>
            </div>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 pt-4 border-t border-gray-200">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Documentation</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>Try Demo</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
              <Code2 className="w-4 h-4" />
              <span>Code Samples</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Stack = () => {
  const [highlightedId, setHighlightedId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [expandedStack, setExpandedStack] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const slugify = (value) =>
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const stacks = [
    {
      title: "TextStack",
      icon: FileText,
      description: "Transform unstructured text data into actionable insights with comprehensive natural language processing APIs.",
      longDescription: "Advanced text processing capabilities including classification, extraction, translation, and summarization. Built with state-of-the-art transformer models for enterprise applications with multilingual support and custom domain adaptation.",
      stats: [
        { label: "Accuracy", value: ">95%" },
        { label: "Languages", value: "100+" },
        { label: "Processed Daily", value: "1B+ docs" }
      ],
      services: [
        {
          name: "Text Classifier",
          description: "Automatically organize and label text based on content, context, or tone with industry-leading accuracy.",
          features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy"],
          metrics: { accuracy: ">95%", speed: "< 200ms" }
        },
        {
          name: "Text Extractor", 
          description: "Identify and extract key information such as entities, keywords, or specific fields from documents.",
          features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
          metrics: { accuracy: ">95%", speed: "< 150ms" }
        },
        {
          name: "Text Translator",
          description: "Break language barriers with seamless translation across 100+ languages with cultural context awareness.",
          features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
          metrics: { accuracy: ">95%", speed: "< 300ms" }
        },
        {
          name: "Text Summarizer",
          description: "Condense long texts into concise, informative summaries while preserving key insights.",
          features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
          metrics: { accuracy: ">95%", speed: "< 500ms" }
        },
      ],
    },
    {
      title: "VoiceStack",
      icon: MessageCircle,
      description: "Unlock the power of voice data with advanced speech processing capabilities for transcription, enhancement, and synthesis.",
      longDescription: "Comprehensive voice processing suite enabling real-time transcription, speaker identification, voice enhancement, and synthesis. Optimized for enterprise applications with noise reduction, multi-language support, and custom voice models.",
      stats: [
        { label: "Accuracy", value: ">95%" },
        { label: "Languages", value: "85+" },
        { label: "Hours Processed", value: "10M+" }
      ],
      services: [
        {
          name: "Voice Transcriber",
          description: "Convert spoken language into text accurately and efficiently with real-time processing capabilities.",
          features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
          metrics: { accuracy: ">95%", speed: "Real-time" }
        },
        {
          name: "Voice Enhancer",
          description: "Improve voice clarity by reducing background noise and refining audio quality using AI-powered filtering.",
          features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
          metrics: { accuracy: ">95%", speed: "< 1s" }
        },
        {
          name: "Voice Recognition",
          description: "Identify speakers and understand voice patterns for security, customer profiling, and personalization.",
          features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
        {
          name: "Voice Synthesizer",
          description: "Generate natural-sounding speech for text-to-speech applications with customizable voices.",
          features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
      ],
    },
    {
      title: "VisionStack",
      icon: Camera,
      description: "Transform visual data into structured insights with computer vision APIs for detection, classification, and analysis.",
      longDescription: "Advanced computer vision capabilities for object detection, image classification, OCR, and visual content analysis. Supports real-time processing with high accuracy for enterprise applications across various industries.",
      stats: [
       { label: "Accuracy", value: ">95%" },
        { label: "Formats", value: "20+" },
        { label: "Images Processed", value: "500M+" }
      ],
      services: [
        {
          name: "Vision Transcriber",
          description: "Extract text and information from visual content, enhancing accessibility and archiving with OCR technology.",
          features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
          metrics: { accuracy: ">95%", speed: "< 1s" }
        },
        {
          name: "Vision Classifier",
          description: "Identify and categorize objects within images for streamlined image recognition and content management.",
          features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
          metrics: { accuracy: ">95%", speed: "< 400ms" }
        },
        {
          name: "Vision Detector",
          description: "Detect objects, faces, or items in real-time for security, retail, and automation applications.",
          features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
          metrics: { accuracy: ">95%", speed: "< 100ms" }
        },
        {
          name: "Table Extractor",
          description: "Convert tables and structured visual data into usable, digital formats with high precision.",
          features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
      ],
    },
  ];

  const features = [
    {
      icon: Database,
      title: "Dockerized Microservices",
      description: "Auto-scalable containerized services with Kubernetes orchestration for handling massive workloads.",
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Deployment", 
      description: "Deploy seamlessly across AWS, Azure, GCP, or on-premises infrastructure with consistent performance.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2, GDPR compliance, featuring end-to-end encryption and audit trails.",
    },
    {
      icon: Network,
      title: "MLOps Integration",
      description: "Seamless integration with MLOps pipelines for automated model monitoring, updating, and deployment.",
    },
  ];

  const metrics = [
    { label: "API Calls Processed", value: "10B+", icon: Database },
    { label: "Uptime Guarantee", value: ">95%", icon: Shield },
    { label: "Average Response", value: "<200ms", icon: Zap },
    { label: "Enterprise Clients", value: "500+", icon: Users },
  ];

  // Scroll to target section
  useEffect(() => {
    if (!location.pathname.match(/\/MLStack$/i)) return;
    const target = searchParams.get("stack");
    if (!target) return;

    const id = slugify(target);
    const el = document.getElementById(id);
    if (el) {
      setHighlightedId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollBy({ top: -80, left: 0, behavior: "auto" });
      }, 400);
      const timeout = setTimeout(() => setHighlightedId(null), 2200);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedService(null);
        setExpandedStack(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating background particles */}
      <FloatingParticles count={8} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-Primary mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              MLStack
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Stack of Machine Learning APIs for Structuring Unstructured Data
            </motion.p>
            {/* <motion.p 
              className="text-Primary mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Enterprise-grade AI APIs for Text, Voice, and Vision processing with 
              state-of-the-art accuracy and lightning-fast performance.
            </motion.p> */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link to="/Contact">
                <motion.button
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.button
                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Documentation
              </motion.button>
            </motion.div>
              <CarouselStyle/>
            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <metric.icon className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-green-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stack Sections */}
      {stacks.map((stack, index) => {
        const sectionId = slugify(stack.title);
        const isHighlighted = highlightedId === sectionId;
        const isExpanded = expandedStack === index;
        
        return (
          <motion.section
            key={stack.title}
            id={sectionId}
            className={`py-20 px-4 relative ${index % 2 === 1 ? 'bg-white/50' : 'bg-gray-100/30'} ${
              isHighlighted ? 'ring-2 ring-gray-400 ring-inset' : ''
            }`}
            {...fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            {/* Section background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20" />
            
            <div className="max-w-6xl mx-auto relative">
              {/* Stack Header */}
              <div className="text-center mb-16">
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200">
                    <stack.icon className="w-10 h-10 text-green-800" />
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {stack.title}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {stack.description}
                </motion.p>

                {/* Stack Stats */}
                <motion.div 
                  className="flex justify-center space-x-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {stack.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-semibold text-green-700">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.button
                  onClick={() => setExpandedStack(isExpanded ? null : index)}
                  className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-sm font-medium">
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-16"
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{stack.longDescription}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Services Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {stack.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={service.name}
                    service={service}
                    stackTitle={stack.title}
                    onServiceClick={setSelectedService}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Features Section */}
      <motion.section className="py-20 px-4 bg-white/30 relative" {...fadeIn}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-transparent to-gray-100/50" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and performance with modern architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:bg-white/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-green-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-white/60 backdrop-blur-sm text-black max-w-4xl mt-8 mb-8 mx-auto rounded-2xl shadow-lg border border-gray-200 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 rounded-2xl" />
        <motion.div
          variants={cardVariants}
          className="text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Data Processing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-human collaboration with MLStack™. Process any format,
            manage any scale, deliver precise results—all through one intelligent platform.
          </p>
    
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stack;
