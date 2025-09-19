// import VisualDataGif from "../../assests/images/mlloops.gif";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   RefreshCw,
//   Zap,
//   Users,
//   Cloud,
//   Settings,
 
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import ExternalLink from '../ExternalLink';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
// };
// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const MLloOpsContent = () => {
//   const features = [
//     {
//       icon: <Zap className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "AI as the Maker",
//       description:
//         "Powerful AI processing vast amounts of data with efficiency, precision, and speed. Performs heavy lifting of data extraction and structuring at lightning speed.",
//     },
//     {
//       icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "Human as the Checker",
//       description:
//         "Domain experts review and refine AI outputs, adding accuracy and insight. This human touch enhances AI performance through continuous feedback and learning.",
//     },
//     {
//       icon: <RefreshCw className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "Continuous Learning",
//       description:
//         "Each human correction feeds back into the AI, enabling continuous improvement. The AI becomes more adept at handling complex data while experts focus on strategic insights.",
//     },
//   ];

//   const workflow = [
//     {
//       title: "Client Requirements",
//       description:
//         "Clear understanding of client requirements to ensure outcomes align with business goals.",
//     },
//     {
//       title: "Project Creation",
//       description:
//         "Collaboration with client admins and AI practitioners to set up and scope each project.",
//     },
//     {
//       title: "MLStack API Integration",
//       description:
//         "Deep customization with MLStack APIs for text, voice, and vision data processing.",
//     },
//     {
//       title: "Quality Control",
//       description:
//         "Validation checkers from both client experts and RBG team ensure data accuracy.",
//     },
//     {
//       title: "Data Processing",
//       description:
//         "Automated and manual data ingestion, transforming unstructured data into structured outputs.",
//     },
//     {
//       title: "Validation & Correction",
//       description:
//         "Human checkers validate and refine the structured data for maximum accuracy.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <CheckCircle className="w-6 h-6 text-green-600" />,
//       title: "Enhanced Efficiency",
//       description:
//         "Combines AI speed with human expertise for higher quality outcomes",
//     },
//     {
//       icon: <RefreshCw className="w-6 h-6 text-green-600" />,
//       title: "Continuous Learning",
//       description:
//         "AI learns from human corrections, constantly improving accuracy",
//     },
//     {
//       icon: <Cloud className="w-6 h-6 text-green-600" />,
//       title: "Flexible Deployment",
//       description: "Deploy in-house, on private cloud, or public cloud",
//     },
//     {
//       icon: <Settings className="w-6 h-6 text-green-600" />,
//       title: "End-to-End Management",
//       description: "Single platform for the complete ML lifecycle",
//     },
//   ];

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
//               MLloOps
//               <span className="text-xl sm:text-2xl align-super">™</span>
//             </h1>
//             <p className="text-bold md:text-xl text-green-700 mt-4 font-OpenSans">
//               The Future of AI-Human Collaboration for Machine Learning
//               Workflows
//             </p>
//           </div>

//           {/* Content Grid */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//             {/* Left side - Image */}
//             <div className="order-2 md:order-1 relative z-10 mix-blend-multiply">
//               <img
//                 src={VisualDataGif}
//                 alt="Visual representation of data"
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* Right side - Content */}
           
//             <div className="order-1 md:order-2 space-y-4 md:space-y-6">
//   <div className="order-2 md:order-1 space-y-4 md:space-y-6">
//     <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-Primary/10">
//       <p className="text-base md:text-lg text-gray-700 leading-relaxed font-OpenSans">
//         Imagine a world where AI and humans work hand-in-hand, each
//         enhancing the other's strengths to achieve seamless data
//         extraction and analysis. That's MLloOps™ a platform where{" "}
//         <span className="font-semibold">
//           AI and human expertise come together in perfect harmony
//         </span>{" "}
//         to unlock new possibilities in machine learning workflows.
//       </p>
//       <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 font-OpenSans">
//         MLloOps™ is a single, integrated platform designed for all
//         stakeholders in AI projects, from data scientists and
//         engineers to business leaders and domain experts. It
//         streamlines and automates critical ML workflows while
//         keeping human expertise at the center, enabling a smooth
//         flow from unstructured data to actionable insights.
//       </p>
      
//       {/* Added button container */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-6">
      // <Link to="/Contact"
         
      //     className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
      //   >
      //     Request for a Demo
      //   </Link>
//         <ExternalLink
//   href="https://mlloops.rbg.ai/"
//   target="_blank" 
//   rel="noopener noreferrer" 
//   className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
// >
//   Get Started with MLloOps™
// </ExternalLink>


//       </div>
//     </div>
//   </div>
// </div>
//           </div>
//         </div>
//       </motion.section>
//       {/* ... existing hero section content ... */}

//       {/* Key Features Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             Key Features
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-white rounded-xl shadow-lg p-6 md:p-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Workflow Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20 bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             MLloOps™ Workflow
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
//           >
//             {workflow.map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-green-50 rounded-xl p-6 border-2 border-green-100"
//                 transition={{ delay: index * 0.2 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
//                     {index + 1}
//                   </span>
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-3">
//                     {step.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             Why Choose MLloOps™?
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
//           >
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-white rounded-lg shadow-md p-6"
//                 transition={{ delay: index * 0.2 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center mb-4">
//                   {benefit.icon}
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-2">
//                     {benefit.title}
//                   </h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-gray-600">
//                   {benefit.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Final CTA Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20 bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           variants={cardVariants}
//           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//             The Perfect Harmony of AI and Human Expertise
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
//             MLloOps™ represents the future of data extraction—a new standard
//             where AI and human intelligence work together, creating results that
//             are greater than the sum of their parts.
//           </p>
//           <ExternalLink
//   href="https://mlloops.rbg.ai/"
//   target="_blank" 
//   rel="noopener noreferrer" >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
//             >
//               Get Started with MLloOps™
//             </motion.div> 
//             </ExternalLink>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };

// export default MLloOpsContent;



import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  RefreshCw,
  Zap,
  Users,
  Cloud,
  Settings,
  FileText,
  Mic,
  Image,
  Download,
  ArrowRight,
  Play,
  Shield,
  Brain,
  Workflow,
  Database,
  Eye,
  UserCheck,
  Crown,
  User,
  ChevronDown,
  Monitor,
  Globe,
  Lock,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,  Pause 
} from "lucide-react";
import ExternalLink from '../ExternalLink';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
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
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const MLloOpsContent = () => {
  const [activeProcessing, setActiveProcessing] = useState(0);
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);

  // Processing types with input/output combinations
  const processingTypes = [
    {
      input: "PDF Documents",
      icon: <FileText className="w-6 h-6" />,
      processes: [
        { step: "PreProcessor", description: "Document parsing and structure analysis" },
        { step: "Transcriber", description: "Text extraction and recognition" },
        { step: "Extractor", description: "Data mining and content identification" },
        { step: "Post Processor", description: "Data cleaning and formatting" }
      ],
      outputs: ["JSON", "Structured Text", "Database Records", "CSV"],
      description: "Transform PDF documents into structured, searchable data formats"
    },
    {
      input: "Audio Files",
      icon: <Mic className="w-6 h-6" />,
      processes: [
        { step: "Audio Analysis", description: "Sound quality and format detection" },
        { step: "Speech Recognition", description: "Voice-to-text conversion" },
        { step: "Content Extraction", description: "Key information identification" },
        { step: "Format Conversion", description: "Multi-format output generation" }
      ],
      outputs: ["Audio Files", "Text Transcripts", "Image Summaries", "JSON Data"],
      description: "Convert audio content into multiple accessible formats with AI precision"
    },
    {
      input: "Image Files",
      icon: <Image className="w-6 h-6" />,
      processes: [
        { step: "Computer Vision", description: "Visual content analysis" },
        { step: "OCR Processing", description: "Text recognition from images" },
        { step: "Content Analysis", description: "Object and context identification" },
        { step: "Data Structuring", description: "Information organization" }
      ],
      outputs: ["Extracted Text", "PDF Reports", "JSON Data", "Structured Tables"],
      description: "Extract and structure information from images using advanced computer vision"
    }
  ];

  // User roles
  const userRoles = [
    {
      role: "Super Admin",
      icon: <Crown className="w-5 h-5" />,
      permissions: ["Complete system oversight", "User management across all levels", "Global configuration settings", "Advanced analytics and reporting"],
      responsibilities: "Manages the entire MLloOps ecosystem with full control over all operations and user access."
    },
    {
      role: "Admin",
      icon: <Shield className="w-5 h-5" />,
      permissions: ["Project creation and management", "Team member oversight", "Quality control processes", "Client communication"],
      responsibilities: "Oversees daily operations, manages project workflows, and ensures quality standards are met."
    },
    {
      role: "User",
      icon: <User className="w-5 h-5" />,
      permissions: ["Data processing tasks", "Review and validation", "Basic reporting", "Team collaboration"],
      responsibilities: "Performs data processing tasks, validates AI outputs, and collaborates on project completion."
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Processing",
      description: "Advanced artificial intelligence handles the heavy lifting of data extraction, processing vast amounts of information with unprecedented speed and accuracy.",
      stats: "Process 1000+ files simultaneously"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Human Validation",
      description: "Expert human reviewers ensure accuracy and provide domain-specific insights, creating a perfect balance between automation and expertise.",
      stats: "99.2% accuracy with human oversight"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-green-600" />,
      title: "Continuous Improvement",
      description: "Machine learning algorithms continuously evolve based on human feedback, improving processing accuracy and efficiency over time.",
      stats: "15% improvement monthly"
    },
  ];


const CarouselStyle = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  
   const videos = [
    { 
      title: 'Platform Overview', 
      duration: '2:45',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.jpg' // Auto-generated thumbnail
    },
    { 
      title: 'AI Processing Demo', 
      duration: '3:20',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.mp4', // Same video for demo
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.jpg'
    },
    { 
      title: 'Human Collaboration', 
      duration: '1:55',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.jpg'
    },
    { 
      title: 'Results Dashboard', 
      duration: '2:10',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.mp4', // Same video for demo
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.jpg'
    }
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
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Explore Our Platform
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
                  {/* Play/Pause Button */}
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

                  {/* Navigation Buttons */}
                  <motion.button
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
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div>

          {/* Video Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};





//   const CarouselStyle = () => {
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
  
  // const videos = [
  //   { 
  //     title: 'Platform Overview', 
  //     duration: '2:45',
  //     url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.mp4',
  //     thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.jpg' // Auto-generated thumbnail
  //   },
  //   { 
  //     title: 'AI Processing Demo', 
  //     duration: '3:20',
  //     url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.mp4', // Same video for demo
  //     thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.jpg'
  //   },
  //   { 
  //     title: 'Human Collaboration', 
  //     duration: '1:55',
  //     url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.mp4',
  //     thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.jpg'
  //   },
  //   { 
  //     title: 'Results Dashboard', 
  //     duration: '2:10',
  //     url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.mp4', // Same video for demo
  //     thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.jpg'
  //   }
  // ];

//   const handlePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleVideoChange = (index) => {
//     setCurrentVideo(index);
//     setIsPlaying(false);
//     // Reset video when switching
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0;
//       }
//     }, 100);
//   };

//   useEffect(() => {
//     // Reset playing state when video changes
//     setIsPlaying(false);
//   }, [currentVideo]);

//   return (
//     <motion.section
//       className="py-20 px-4 bg-gray-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold text-black mb-4">
//             Explore Our Platform
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Multiple perspectives, one powerful solution
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Main video player */}
//           <motion.div
//             className="bg-black rounded-3xl overflow-hidden mb-8 shadow-2xl"
//             key={currentVideo}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative aspect-video">
//               {/* Actual Video Element */}
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-cover"
//                 poster={videos[currentVideo].thumbnail}
//                 onPlay={() => setIsPlaying(true)}
//                 onPause={() => setIsPlaying(false)}
//                 onEnded={() => setIsPlaying(false)}
//                 controls={isPlaying}
//                 playsInline
//                 preload="metadata"
//               >
//                 <source src={videos[currentVideo].url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* Custom Play Button Overlay */}
//               {!isPlaying && (
//                 <motion.div 
//                   className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
//                   onClick={handlePlayPause}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl hover:bg-white transition-all duration-300"
//                   >
//                     <Play className="w-16 h-16 text-gray-900 ml-2" />
//                   </motion.button>
//                 </motion.div>
//               )}

//               {/* Video Loading State */}
//               <motion.div 
//                 className="absolute inset-0 flex items-center justify-center bg-gray-800"
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{ delay: 0.5, duration: 0.3 }}
//               >
//                 <div className="flex items-center space-x-2 text-white">
//                   <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
//                   <span>Loading video...</span>
//                 </div>
//               </motion.div>
//             </div>
            
//             {/* Video Info Bar */}
//             <div className="p-6 bg-gray-900 text-white">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h3>
//                   <span className="text-gray-400">{videos[currentVideo].duration}</span>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   {/* Play/Pause Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handlePlayPause}
//                     className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//                   >
//                     {isPlaying ? (
//                       <Pause className="w-5 h-5" />
//                     ) : (
//                       <Play className="w-5 h-5" />
//                     )}
//                   </motion.button>

//                   {/* Navigation Buttons */}
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     onClick={() => handleVideoChange(Math.max(0, currentVideo - 1))}
//                     disabled={currentVideo === 0}
//                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     onClick={() => handleVideoChange(Math.min(videos.length - 1, currentVideo + 1))}
//                     disabled={currentVideo === videos.length - 1}
//                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Video thumbnails */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {videos.map((video, index) => (
//               <motion.div
//                 key={index}
//                 className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
//                   index === currentVideo 
//                     ? 'ring-4 ring-blue-500 shadow-lg' 
//                     : 'hover:ring-2 hover:ring-gray-300'
//                 }`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => handleVideoChange(index)}
//               >
//                 <div className="relative aspect-video bg-gray-300">
//                   {/* Video Thumbnail */}
//                   <img 
//                     src={video.thumbnail} 
//                     alt={video.title}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       // Fallback to a placeholder if thumbnail fails
//                       e.target.src = `https://via.placeholder.com/320x180/374151/ffffff?text=${encodeURIComponent(video.title)}`;
//                     }}
//                   />
//                   {/* Play icon overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <div className={`rounded-full p-2 ${
//                       index === currentVideo ? 'bg-blue-500' : 'bg-white/80'
//                     }`}>
//                       <Play className={`w-4 h-4 ${
//                         index === currentVideo ? 'text-white' : 'text-gray-700'
//                       }`} />
//                     </div>
//                   </div>
//                   {/* Current video indicator */}
//                   {index === currentVideo && (
//                     <div className="absolute top-2 left-2">
//                       <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//                         Now Playing
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-3 bg-white">
//                   <h4 className="text-sm font-medium text-gray-900 truncate">
//                     {video.title}
//                   </h4>
//                   <p className="text-xs text-gray-500">{video.duration}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Video Progress Indicators */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {videos.map((_, index) => (
//               <motion.button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === currentVideo ? 'bg-blue-500' : 'bg-gray-300'
//                 }`}
//                 onClick={() => handleVideoChange(index)}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.8 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };



  //  const CarouselStyle = () => {
  //   const [currentVideo, setCurrentVideo] = useState(0);
  //   const videos = [
  //     { title: 'Platform Overview', duration: '2:45' },
  //     { title: 'AI Processing Demo', duration: '3:20' },
  //     { title: 'Human Collaboration', duration: '1:55' },
  //     { title: 'Results Dashboard', duration: '2:10' }
  //   ];

  //   return (
  //     <motion.section
  //       className="py-20 px-4 bg-gray-50"
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 1 }}
  //     >
  //       <div className="max-w-6xl mx-auto">
  //         <motion.div
  //           className="text-center mb-12"
  //           initial={{ y: 30, opacity: 0 }}
  //           animate={{ y: 0, opacity: 1 }}
  //           transition={{ duration: 0.8 }}
  //         >
  //           <h2 className="text-4xl font-bold text-black mb-4">
  //             Explore Our Platform
  //           </h2>
  //           <p className="text-gray-600 text-lg">
  //             Multiple perspectives, one powerful solution
  //           </p>
  //         </motion.div>

  //         <div className="relative">
  //           {/* Main video */}
  //           <motion.div
  //             className="bg-black rounded-3xl overflow-hidden mb-8"
  //             key={currentVideo}
  //             initial={{ opacity: 0, scale: 0.95 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.5 }}
  //           >
  //             <div className="aspect-video flex items-center justify-center">
  //               <motion.button
  //                 whileHover={{ scale: 1.05 }}
  //                 whileTap={{ scale: 0.95 }}
  //                 className="bg-green-600 rounded-full p-6"
  //               >
  //                 <Play className="w-16 h-16 text-white ml-2" />
  //               </motion.button>
  //             </div>
              
  //             <div className="p-6 bg-gray-900 text-white">
  //               <h3 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h3>
  //               <div className="flex justify-between items-center">
  //                 <span className="text-gray-400">{videos[currentVideo].duration}</span>
  //                 <div className="flex gap-4">
  //                   <motion.button
  //                     whileHover={{ scale: 1.1 }}
  //                     onClick={() => setCurrentVideo(Math.max(0, currentVideo - 1))}
  //                     disabled={currentVideo === 0}
  //                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50"
  //                   >
  //                     <ChevronLeft className="w-5 h-5" />
  //                   </motion.button>
  //                   <motion.button
  //                     whileHover={{ scale: 1.1 }}
  //                     onClick={() => setCurrentVideo(Math.min(videos.length - 1, currentVideo + 1))}
  //                     disabled={currentVideo === videos.length - 1}
  //                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50"
  //                   >
  //                     <ChevronRight className="w-5 h-5" />
  //                   </motion.button>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>

  //           {/* Video thumbnails */}
  //           <div className="grid grid-cols-4 gap-4">
  //             {videos.map((video, index) => (
  //               <motion.div
  //                 key={index}
  //                 className={`cursor-pointer rounded-lg overflow-hidden ${
  //                   index === currentVideo ? 'ring-4 ring-green-500' : ''
  //                 }`}
  //                 whileHover={{ scale: 1.05 }}
  //                 onClick={() => setCurrentVideo(index)}
  //               >
  //                 <div className="aspect-video bg-gray-300 flex items-center justify-center">
  //                   <Play className="w-6 h-6 text-gray-600" />
  //                 </div>
  //                 <div className="p-3 bg-white">
  //                   <h4 className="text-sm font-medium text-gray-900 truncate">
  //                     {video.title}
  //                   </h4>
  //                   <p className="text-xs text-gray-500">{video.duration}</p>
  //                 </div>
  //               </motion.div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </motion.section>
  //   );
  // };


  const workflow = [
    {
      id: 1,
      title: "Requirements Analysis",
      description: "Comprehensive understanding of client needs, data types, and desired outcomes",
      icon: <Eye className="w-5 h-5" />,
      details: [
        "Initial client consultation and needs assessment",
        "Data format analysis and compatibility review",
        "Output requirements specification",
        "Timeline and resource planning"
      ]
    },
    {
      id: 2,
      title: "Project Configuration",
      description: "Custom setup tailored to specific client requirements and data processing needs",
      icon: <Settings className="w-5 h-5" />,
      details: [
        "Custom workflow design and configuration",
        "User role assignment and access control",
        "Integration with client systems",
        "Quality parameters definition"
      ]
    },
    {
      id: 3,
      title: "Data Ingestion",
      description: "Secure upload and preprocessing of client data across multiple formats",
      icon: <Database className="w-5 h-5" />,
      details: [
        "Multi-format file upload and validation",
        "Data security and encryption protocols",
        "Batch processing capabilities",
        "Real-time status monitoring"
      ]
    },
    {
      id: 4,
      title: "AI Processing",
      description: "Advanced machine learning algorithms process and extract structured data",
      icon: <Workflow className="w-5 h-5" />,
      details: [
        "Automated content extraction and analysis",
        "Multi-stage processing pipeline",
        "Error detection and handling",
        "Progress tracking and reporting"
      ]
    },
    {
      id: 5,
      title: "Quality Validation",
      description: "Human experts review and refine AI-generated outputs for maximum accuracy",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Expert human review and validation",
        "Error correction and refinement",
        "Quality score assignment",
        "Feedback integration for AI learning"
      ]
    },
    {
      id: 6,
      title: "Output Delivery",
      description: "Processed data delivered in client-specified formats with comprehensive reporting",
      icon: <Download className="w-5 h-5" />,
      details: [
        "Multiple output format options",
        "Comprehensive processing reports",
        "Secure delivery mechanisms",
        "Post-delivery support and maintenance"
      ]
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Efficiency",
      description: "Combines AI speed with human expertise for superior results",
      metric: "300% faster than traditional methods"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Superior Accuracy",
      description: "Human oversight ensures precision and domain-specific accuracy",
      metric: "99.2% accuracy rate maintained"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Flexible Deployment",
      description: "Deploy on-premise, private cloud, or public cloud infrastructure",
      metric: "Multiple deployment options available"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Complete Visibility",
      description: "Real-time monitoring and comprehensive analytics dashboard",
      metric: "24/7 system monitoring and reporting"
    },
  ];

  const deploymentOptions = [
    {
      title: "On-Premise Deployment",
      icon: <Lock className="w-6 h-6" />,
      description: "Complete control over data and infrastructure with maximum security",
      features: ["Full data control", "Custom security protocols", "Dedicated resources", "Offline capabilities"]
    },
    {
      title: "Private Cloud",
      icon: <Cloud className="w-6 h-6" />,
      description: "Secure cloud environment with dedicated resources and enhanced scalability",
      features: ["Dedicated infrastructure", "Enhanced security", "Scalable resources", "Remote accessibility"]
    },
    {
      title: "Public Cloud",
      icon: <Globe className="w-6 h-6" />,
      description: "Cost-effective solution with global accessibility and automatic scaling",
      features: ["Cost optimization", "Global access", "Automatic scaling", "Maintenance-free"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto">
        
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MLloOps
              <span className="text-xl align-super text-green-600">™</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-Human Collaborative Platform for Advanced Machine Learning Workflows
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </motion.button> */}
                      <ExternalLink
  href="https://mlloops.rbg.ai/"
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
>
  Get Started with MLloOps™
</ExternalLink>
              <Link to="/Contact"
         
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
        >
          Request for a Demo
        </Link>
            </motion.div>
          </div>
  <CarouselStyle/>
          {/* Platform Overview */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                The Perfect Harmony of AI and Human Expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                MLloOps™ combines the speed and scale of artificial intelligence with the precision and insight of human expertise. 
                Our platform processes multiple data formats—PDF documents, audio files, and images—transforming unstructured 
                information into structured, actionable data through an intelligent workflow that learns and improves continuously.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-gray-600">Files processed simultaneously</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">99.2%</div>
                  <div className="text-gray-600">Accuracy rate maintained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">300%</div>
                  <div className="text-gray-600">Faster than traditional methods</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="py-2 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Core Features
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-green-600">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Processing Types Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
          >
            Multi-Format Processing Capabilities
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            Transform any data format into structured, actionable information with our comprehensive processing pipeline
          </motion.p>
          
          {/* Processing Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 inline-flex border border-gray-200">
              {processingTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProcessing(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeProcessing === index 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {type.icon}
                  {type.input}
                </button>
              ))}
            </div>
          </div>

          {/* Active Processing Type Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcessing}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {processingTypes[activeProcessing].input} Processing
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {processingTypes[activeProcessing].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-black mb-4">Output Formats:</h4>
                    <div className="flex flex-wrap gap-3">
                      {processingTypes[activeProcessing].outputs.map((output, oIndex) => (
                        <span
                          key={oIndex}
                          className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg font-medium"
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-6">Processing Pipeline:</h4>
                  <div className="space-y-4">
                    {processingTypes[activeProcessing].processes.map((process, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                          {pIndex + 1}
                        </div>
                        <div>
                          <h5 className="font-semibold text-black">{process.step}</h5>
                          <p className="text-gray-600 text-sm">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* User Roles Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Role-Based Access Control
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {userRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-green-600">{role.icon}</div>
                    <h3 className="text-xl font-bold text-black">{role.role}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{role.responsibilities}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-black mb-4">Key Permissions:</h4>
                  <ul className="space-y-3">
                    {role.permissions.map((permission, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Complete MLloOps™ Workflow
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="space-y-4"
          >
            {workflow.map((step, index) => (
              <motion.div
                key={step.id}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedWorkflow(expandedWorkflow === step.id ? null : step.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-black text-lg">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      expandedWorkflow === step.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedWorkflow === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-6">
                          <h4 className="font-semibold text-black mb-4">Detailed Process:</h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {step.details.map((detail, dIndex) => (
                              <li key={dIndex} className="flex items-start gap-3 text-sm text-gray-600">
                                <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Why Choose MLloOps™?
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-green-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Deployment Options */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Flexible Deployment Options
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-green-600 mb-6">{option.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
    <motion.section
  className="py-20 px-6 bg-white text-black max-w-4xl mt-2 mb-4 mx-auto rounded-2xl shadow-lg"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div
    variants={cardVariants}
    className="text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Transform Your Data Processing?
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Experience the power of AI-human collaboration with MLloOps™. Process any format,
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

    </div>
  );
};

export default MLloOpsContent;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Play, Pause, Volume2, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

// const VideoSection = () => {
//   const [selectedStyle, setSelectedStyle] = useState('floating');
//   const [isPlaying, setIsPlaying] = useState(false);

//   const styles = [
//     { id: 'floating', name: 'Floating Video' },
//     { id: 'splitscreen', name: 'Split Screen' },
//     { id: 'carousel', name: 'Video Carousel' },
//     { id: 'fullscreen', name: 'Fullscreen Hero' },
//     { id: 'grid', name: 'Video Grid' }
//   ];

  // const FloatingVideoStyle = () => (
  //   <motion.section
  //     className="py-20 px-4 relative overflow-hidden"
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 1 }}
  //   >
  //     {/* Background particles */}
  //     <div className="absolute inset-0">
  //       {[...Array(20)].map((_, i) => (
  //         <motion.div
  //           key={i}
  //           className="absolute w-2 h-2 bg-green-200 rounded-full"
  //           initial={{ 
  //             x: Math.random() * window.innerWidth, 
  //             y: Math.random() * window.innerHeight,
  //             opacity: 0
  //           }}
  //           animate={{ 
  //             x: Math.random() * window.innerWidth,
  //             y: Math.random() * window.innerHeight,
  //             opacity: [0, 1, 0]
  //           }}
  //           transition={{
  //             duration: 4 + Math.random() * 2,
  //             repeat: Infinity,
  //             delay: Math.random() * 2
  //           }}
  //         />
  //       ))}
  //     </div>

  //     <div className="max-w-7xl mx-auto relative z-10">
  //       <motion.div
  //         className="relative"
  //         initial={{ y: 100, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         transition={{ duration: 0.8, delay: 0.2 }}
  //       >
  //         {/* Floating video container */}
  //         <motion.div
  //           className="relative mx-auto max-w-4xl"
  //           animate={{ 
  //             y: [0, -10, 0],
  //             rotateY: [0, 2, 0, -2, 0]
  //           }}
  //           transition={{
  //             duration: 6,
  //             repeat: Infinity,
  //             ease: "easeInOut"
  //           }}
  //         >
  //           {/* Glowing background */}
  //           <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-lg opacity-30"></div>
            
  //           {/* Video container */}
  //           <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
  //             <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
  //               <motion.div
  //                 whileHover={{ scale: 1.1 }}
  //                 whileTap={{ scale: 0.95 }}
  //                 className="bg-green-600 rounded-full p-6 cursor-pointer"
  //               >
  //                 <Play className="w-12 h-12 text-white ml-1" />
  //               </motion.div>
  //             </div>
              
  //             {/* Video controls overlay */}
  //             <motion.div
  //               className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ delay: 1 }}
  //             >
  //               <div className="flex items-center justify-between text-white">
  //                 <h3 className="text-xl font-semibold">MLloOps Platform Demo</h3>
  //                 <div className="flex items-center gap-4">
  //                   <Volume2 className="w-5 h-5" />
  //                   <Maximize className="w-5 h-5" />
  //                 </div>
  //               </div>
  //             </motion.div>
  //           </div>
  //         </motion.div>
  //       </motion.div>
  //     </div>
  //   </motion.section>
  // );

//   const SplitScreenStyle = () => (
//     <motion.section
//       className="py-20 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content Side */}
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-black mb-6">
//               See MLloOps in Action
//             </h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Watch how our AI-Human collaborative platform transforms your workflow. 
//               From document processing to data extraction, see the magic happen in real-time.
//             </p>
//             <div className="space-y-4">
//               {['Real-time Processing', 'Smart Collaboration', 'Instant Results'].map((feature, i) => (
//                 <motion.div
//                   key={feature}
//                   className="flex items-center gap-3"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + i * 0.1 }}
//                 >
//                   <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                   <span className="text-gray-700">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Video Side */}
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
//               <div className="aspect-video flex items-center justify-center">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white bg-opacity-20 backdrop-blur-md rounded-full p-8"
//                   onClick={() => setIsPlaying(!isPlaying)}
//                 >
//                   {isPlaying ? 
//                     <Pause className="w-12 h-12 text-white" /> : 
//                     <Play className="w-12 h-12 text-white ml-1" />
//                   }
//                 </motion.button>
//               </div>
//             </div>
            
//             {/* Decorative elements */}
//             <motion.div
//               className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20"
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 8, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30"
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );

  // const CarouselStyle = () => {
  //   const [currentVideo, setCurrentVideo] = useState(0);
  //   const videos = [
  //     { title: 'Platform Overview', duration: '2:45' },
  //     { title: 'AI Processing Demo', duration: '3:20' },
  //     { title: 'Human Collaboration', duration: '1:55' },
  //     { title: 'Results Dashboard', duration: '2:10' }
  //   ];

  //   return (
  //     <motion.section
  //       className="py-20 px-4 bg-gray-50"
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 1 }}
  //     >
  //       <div className="max-w-6xl mx-auto">
  //         <motion.div
  //           className="text-center mb-12"
  //           initial={{ y: 30, opacity: 0 }}
  //           animate={{ y: 0, opacity: 1 }}
  //           transition={{ duration: 0.8 }}
  //         >
  //           <h2 className="text-4xl font-bold text-black mb-4">
  //             Explore Our Platform
  //           </h2>
  //           <p className="text-gray-600 text-lg">
  //             Multiple perspectives, one powerful solution
  //           </p>
  //         </motion.div>

  //         <div className="relative">
  //           {/* Main video */}
  //           <motion.div
  //             className="bg-black rounded-3xl overflow-hidden mb-8"
  //             key={currentVideo}
  //             initial={{ opacity: 0, scale: 0.95 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.5 }}
  //           >
  //             <div className="aspect-video flex items-center justify-center">
  //               <motion.button
  //                 whileHover={{ scale: 1.05 }}
  //                 whileTap={{ scale: 0.95 }}
  //                 className="bg-green-600 rounded-full p-6"
  //               >
  //                 <Play className="w-16 h-16 text-white ml-2" />
  //               </motion.button>
  //             </div>
              
  //             <div className="p-6 bg-gray-900 text-white">
  //               <h3 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h3>
  //               <div className="flex justify-between items-center">
  //                 <span className="text-gray-400">{videos[currentVideo].duration}</span>
  //                 <div className="flex gap-4">
  //                   <motion.button
  //                     whileHover={{ scale: 1.1 }}
  //                     onClick={() => setCurrentVideo(Math.max(0, currentVideo - 1))}
  //                     disabled={currentVideo === 0}
  //                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50"
  //                   >
  //                     <ChevronLeft className="w-5 h-5" />
  //                   </motion.button>
  //                   <motion.button
  //                     whileHover={{ scale: 1.1 }}
  //                     onClick={() => setCurrentVideo(Math.min(videos.length - 1, currentVideo + 1))}
  //                     disabled={currentVideo === videos.length - 1}
  //                     className="p-2 rounded-full bg-gray-800 disabled:opacity-50"
  //                   >
  //                     <ChevronRight className="w-5 h-5" />
  //                   </motion.button>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>

  //           {/* Video thumbnails */}
  //           <div className="grid grid-cols-4 gap-4">
  //             {videos.map((video, index) => (
  //               <motion.div
  //                 key={index}
  //                 className={`cursor-pointer rounded-lg overflow-hidden ${
  //                   index === currentVideo ? 'ring-4 ring-green-500' : ''
  //                 }`}
  //                 whileHover={{ scale: 1.05 }}
  //                 onClick={() => setCurrentVideo(index)}
  //               >
  //                 <div className="aspect-video bg-gray-300 flex items-center justify-center">
  //                   <Play className="w-6 h-6 text-gray-600" />
  //                 </div>
  //                 <div className="p-3 bg-white">
  //                   <h4 className="text-sm font-medium text-gray-900 truncate">
  //                     {video.title}
  //                   </h4>
  //                   <p className="text-xs text-gray-500">{video.duration}</p>
  //                 </div>
  //               </motion.div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </motion.section>
  //   );
  // };

//   const FullscreenHeroStyle = () => (
//     <motion.section
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Video background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
//         <motion.div
//           className="absolute inset-0 opacity-30"
//           animate={{
//             background: [
//               'linear-gradient(45deg, #059669, #3b82f6)',
//               'linear-gradient(90deg, #3b82f6, #8b5cf6)',
//               'linear-gradient(135deg, #8b5cf6, #059669)',
//               'linear-gradient(45deg, #059669, #3b82f6)'
//             ]
//           }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />
//       </div>

//       {/* Content overlay */}
//       <div className="relative z-10 text-center text-white px-4">
//         <motion.h2
//           className="text-5xl md:text-7xl font-bold mb-6"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Experience MLloOps
//         </motion.h2>
        
//         <motion.p
//           className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           The future of AI-Human collaboration starts here
//         </motion.p>

//         <motion.div
//           className="relative max-w-2xl mx-auto"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <motion.button
//             className="bg-white bg-opacity-20 backdrop-blur-md rounded-full p-12 border border-white border-opacity-30"
//             whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
//             whileTap={{ scale: 0.9 }}
//             animate={{
//               boxShadow: [
//                 '0 0 20px rgba(255,255,255,0.3)',
//                 '0 0 60px rgba(5,150,105,0.5)',
//                 '0 0 20px rgba(255,255,255,0.3)'
//               ]
//             }}
//             transition={{
//               boxShadow: { duration: 3, repeat: Infinity }
//             }}
//           >
//             <Play className="w-16 h-16 text-white ml-2" />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="flex flex-col items-center">
//           <span className="text-sm mb-2">Scroll to explore</span>
//           <div className="w-px h-8 bg-white opacity-50"></div>
//         </div>
//       </motion.div>
//     </motion.section>
//   );

//   const VideoGridStyle = () => (
//     <motion.section
//       className="py-20 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold text-black mb-4">
//             Multiple Views, One Platform
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Discover every aspect of MLloOps through our comprehensive video series
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             'Platform Overview',
//             'AI Processing',
//             'Human Collaboration',
//             'Data Extraction',
//             'Results Dashboard',
//             'Integration Guide'
//           ].map((title, index) => (
//             <motion.div
//               key={title}
//               className="group cursor-pointer"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//             >
//               <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
//                 <div className="aspect-video flex items-center justify-center">
//                   <motion.div
//                     className="bg-green-600 rounded-full p-4 opacity-0 group-hover:opacity-100"
//                     initial={{ scale: 0 }}
//                     whileHover={{ scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Play className="w-8 h-8 text-white ml-1" />
//                   </motion.div>
//                 </div>
                
//                 <div className="p-6 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
//                   <p className="text-gray-600 text-sm">
//                     Learn about {title.toLowerCase()} in this detailed walkthrough
//                   </p>
//                 </div>
                
//                 {/* Hover overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );

//   const renderSelectedStyle = () => {
//     switch(selectedStyle) {
//       case 'floating': return <FloatingVideoStyle />;
//       case 'splitscreen': return <SplitScreenStyle />;
//       case 'carousel': return <CarouselStyle />;
//       case 'fullscreen': return <FullscreenHeroStyle />;
//       case 'grid': return <VideoGridStyle />;
//       default: return <FloatingVideoStyle />;
//     }
//   };

//   return (
//     <div>
//       {/* Style Selector */}
//       <div className="bg-gray-100 p-6">
//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-xl font-semibold mb-4 text-center">Choose Video Section Style:</h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {styles.map((style) => (
//               <button
//                 key={style.id}
//                 onClick={() => setSelectedStyle(style.id)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                   selectedStyle === style.id
//                     ? 'bg-green-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 {style.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Selected Style */}
//       {renderSelectedStyle()}
//     </div>
//   );
// };

// export default VideoSection;