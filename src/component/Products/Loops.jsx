import VisualDataGif from "../../assests/images/mlloops.gif";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  RefreshCw,
  Zap,
  Users,
  Cloud,
  Settings,
 
} from "lucide-react";
import { Link } from "react-router-dom";
import ExternalLink from '../ExternalLink';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MLloOpsContent = () => {
  const features = [
    {
      icon: <Zap className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
      title: "AI as the Maker",
      description:
        "Powerful AI processing vast amounts of data with efficiency, precision, and speed. Performs heavy lifting of data extraction and structuring at lightning speed.",
    },
    {
      icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
      title: "Human as the Checker",
      description:
        "Domain experts review and refine AI outputs, adding accuracy and insight. This human touch enhances AI performance through continuous feedback and learning.",
    },
    {
      icon: <RefreshCw className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
      title: "Continuous Learning",
      description:
        "Each human correction feeds back into the AI, enabling continuous improvement. The AI becomes more adept at handling complex data while experts focus on strategic insights.",
    },
  ];

  const workflow = [
    {
      title: "Client Requirements",
      description:
        "Clear understanding of client requirements to ensure outcomes align with business goals.",
    },
    {
      title: "Project Creation",
      description:
        "Collaboration with client admins and AI practitioners to set up and scope each project.",
    },
    {
      title: "MLStack API Integration",
      description:
        "Deep customization with MLStack APIs for text, voice, and vision data processing.",
    },
    {
      title: "Quality Control",
      description:
        "Validation checkers from both client experts and RBG team ensure data accuracy.",
    },
    {
      title: "Data Processing",
      description:
        "Automated and manual data ingestion, transforming unstructured data into structured outputs.",
    },
    {
      title: "Validation & Correction",
      description:
        "Human checkers validate and refine the structured data for maximum accuracy.",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Enhanced Efficiency",
      description:
        "Combines AI speed with human expertise for higher quality outcomes",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      title: "Continuous Learning",
      description:
        "AI learns from human corrections, constantly improving accuracy",
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-600" />,
      title: "Flexible Deployment",
      description: "Deploy in-house, on private cloud, or public cloud",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "End-to-End Management",
      description: "Single platform for the complete ML lifecycle",
    },
  ];

  const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* First wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-slow fill-green-50/30"
        />
      </svg>

      {/* Second wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-medium fill-Primary/20"
        />
      </svg>

      {/* Third wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,293.3C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-fast fill-green-100/40"
        />
      </svg>
    </div>
  );

  const FloatingDots = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute h-3 w-3 bg-Primary/30 rounded-full top-20 left-1/4 animate-float-slow"></div>
      <div className="absolute h-2 w-2 bg-green-200/40 rounded-full top-40 right-1/3 animate-float-medium"></div>
      <div className="absolute h-4 w-4 bg-Primary/20 rounded-full bottom-40 left-1/3 animate-float-fast"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-b from-white to-Secondary/30 overflow-hidden py-12 md:py-24 px-4"
        {...fadeIn}
      >
        <WaveBackground />
        <FloatingDots />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-Poppins">
              MLloOps
              <span className="text-xl sm:text-2xl align-super">™</span>
            </h1>
            <p className="text-bold md:text-xl text-green-700 mt-4 font-OpenSans">
              The Future of AI-Human Collaboration for Machine Learning
              Workflows
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 md:order-1 relative z-10 mix-blend-multiply">
              <img
                src={VisualDataGif}
                alt="Visual representation of data"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
           
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
  <div className="order-2 md:order-1 space-y-4 md:space-y-6">
    <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-Primary/10">
      <p className="text-base md:text-lg text-gray-700 leading-relaxed font-OpenSans">
        Imagine a world where AI and humans work hand-in-hand, each
        enhancing the other's strengths to achieve seamless data
        extraction and analysis. That's MLloOps™ a platform where{" "}
        <span className="font-semibold">
          AI and human expertise come together in perfect harmony
        </span>{" "}
        to unlock new possibilities in machine learning workflows.
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 font-OpenSans">
        MLloOps™ is a single, integrated platform designed for all
        stakeholders in AI projects, from data scientists and
        engineers to business leaders and domain experts. It
        streamlines and automates critical ML workflows while
        keeping human expertise at the center, enabling a smooth
        flow from unstructured data to actionable insights.
      </p>
      
      {/* Added button container */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link to="/Contact"
         
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
        >
          Request for a Demo
        </Link>
        <ExternalLink
  href="https://mlloops.rbg.ai/"
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
>
  Get Started with MLloOps™
</ExternalLink>


      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </motion.section>
      {/* ... existing hero section content ... */}

      {/* Key Features Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
          >
            Key Features
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
          >
            MLloOps™ Workflow
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-green-50 rounded-xl p-6 border-2 border-green-100"
                transition={{ delay: index * 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
          >
            Why Choose MLloOps™?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md p-6"
                transition={{ delay: index * 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-2">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={cardVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            The Perfect Harmony of AI and Human Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            MLloOps™ represents the future of data extraction—a new standard
            where AI and human intelligence work together, creating results that
            are greater than the sum of their parts.
          </p>
          <ExternalLink
  href="https://mlloops.rbg.ai/"
  target="_blank" 
  rel="noopener noreferrer" >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
            >
              Get Started with MLloOps™
            </motion.div> 
            </ExternalLink>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MLloOpsContent;
