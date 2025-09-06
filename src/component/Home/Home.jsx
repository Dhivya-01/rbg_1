import Section from "./Section";
import Slider from "./Slider";
import Clients from "./Clients";
import Header from "../Header";
import { useContext, useEffect } from "react";
import { HomeContext } from "../Context/Context";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import Hero from "../../components/hero-section-9"
import  EmptyStateShowcase   from "./Content"
import Demo from "./Demo"
import Carouselflow from "./Caurosal"
import Flow from "./Flow"
import Circular from "./Circular"
import BentoGrid1  from "../../components/bento-grid"
import {Process} from "./Process"
import {Work } from "./Work"
import { Achievements } from "./Achievements";
import Features from "./Features"
import  Details from "./Details"
import Proof from "./Proof"
import Pricing from "./Pricing"
import FAQ from "./FAQ"
import Timelinedemo from "./Timeline"
import Testimonials from  "./ScrollCard"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  const data = {
    content:
      "Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows",
    description: "Let's Structure the Unstructured.",
    button: "Get Started",
  };

  const { section } = useContext(HomeContext);

  // Fade-in animation for the header
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {/* <Header data={data} /> */}
           <Carouselflow/>
        {/* <Hero/> */}
        <Features/>
        {/* <Details/> */}
         <Timelinedemo/>
          <Testimonials/>
        <Proof/>
        <Pricing/>
        <FAQ/>
        {/* <EmptyStateShowcase/> */}
        
        <Demo/>
     
      </motion.div>

      {/* <div data-aos="fade-up">
        <Slider />
      </div> */}
{/* <Flow/> */}
<Circular/>
<BentoGrid1 />
{/* <Achievements/> */}
{/* <Work/> */}
{/* <Process/> */}
      {/* {section.map((item, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration="1200"
        >
          <Section item={item} index={index} />
        </div>
      ))} */}

      <div data-aos="zoom-in" data-aos-duration="1000">
        <Clients />
      </div>
    </>
  );
}


// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Sparkles, Zap, Shield, ArrowRight, Menu, X } from 'lucide-react';
// import Prism from './Prism';
// import DarkVeil from './DarkVeil';
// import Aurora from './Aurora';


// const ModernAILanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div >
//       {/* Animated Background Elements */}
//      <div className="fixed inset-0 w-full h-full -z-40">
//   {/* <Prism
//     animationType="rotate"
//     timeScale={0.5}
//     height={3.5}
//     baseWidth={5.5}
//     scale={3.6}
//     hueShift={0}
//     colorFrequency={1}
//     noise={0.5}
//     glow={1}
//   /> */}
//    {/* <DarkVeil /> */}
//   <Aurora
//   colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
//   blend={0.5}
//   amplitude={1.0}
//   speed={0.5}
// />
// </div>

//       <div className="fixed inset-0 pointer-events-none">
//         {/* Floating Orbs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-25 animate-pulse delay-2000"></div>
        
//         {/* Dynamic Mouse-Following Element */}
//         <div 
//           className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm opacity-30 transition-all duration-300 ease-out pointer-events-none"
//           style={{
//             transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px)`,
//           }}
//         ></div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-30"></div>
//       </div>

    

//       {/* Hero Section */}
//       <section className="relative px-6 py-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <div className="space-y-8 animate-fade-in">
//               <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
//                 <Zap className="w-4 h-4 text-blue-500 mr-2" />
//                 <span className="text-sm font-medium text-blue-700">MLloOps Platform</span>
//               </div>
              
//               <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
//                 <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-white">
//                   Neural AI and
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent animate-gradient">
//                   ML Assistant
//                 </span>
//                 <br />
//                 <span className="text-gray-900">are now</span>
//                 <br />
                
//               </h1>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
//                 Experience up to <span className="font-bold text-gray-900">3× better code quality</span> and smarter 
//                 assistance for real-world development tasks with revolutionary AI capabilities.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
//                   Try 
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 rounded-2xl font-semibold hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//                   Watch Demo
//                 </button>
//               </div>
              
//               <div className="flex items-center space-x-8 pt-8">
//                 <div className="flex items-center space-x-2 text-green-600">
//                   <Shield className="w-5 h-5" />
//                   <span className="font-medium">Enterprise Ready</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-blue-600">
//                   <Zap className="w-5 h-5" />
//                   <span className="font-medium">Lightning Fast</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-purple-600">
//                   <Sparkles className="w-5 h-5" />
//                   <span className="font-medium">Secure & Compliant</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Interactive Visual */}
//             <div className="relative">
//               <div className="relative w-full h-96 lg:h-[500px]">
//                 {/* Main Card */}
//                 <div 
//                   className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 p-8 transform hover:rotate-1 transition-all duration-500"
//                   style={{
//                     transform: `perspective(1000px) rotateY(${mousePos.x * 0.01}deg) rotateX(${mousePos.y * -0.01}deg)`
//                   }}
//                 >
//                   <div className="space-y-6">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                       <span className="text-gray-500 text-sm ml-4">Intelligent AI Stacks</span>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <h3 className="text-2xl font-bold text-gray-900">For Developers</h3>
//                       <p className="text-gray-600">Experience the future of AI with our comprehensive product ecosystem designed for modern businesses.</p>
                      
//                       <div className="space-y-3">
//                         <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group">
//                           <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
//                             <span className="text-white font-bold">ML</span>
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">MLStack Text Stack</p>
//                             <p className="text-sm text-gray-600">Extract insights from text with intelligent classification</p>
//                           </div>
//                           <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
//                         </div>
                        
//                         <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer group">
//                           <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
//                             <span className="text-white font-bold">IMG</span>
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">MLStack Image Stack</p>
//                             <p className="text-sm text-gray-600">Analyze and recognize images with advanced detection</p>
//                           </div>
//                           <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
//                         </div>
                        
//                         <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group">
//                           <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
//                             <span className="text-white font-bold">VIS</span>
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">MLStack Vision Stack</p>
//                             <p className="text-sm text-gray-600">Track and monitor visual data for deeper insights</p>
//                           </div>
//                           <ArrowRight className="w-4 h-4 text-green-500 group-hover:translate-x-1 transition-transform" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Floating Elements */}
//                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-lg animate-bounce"></div>
//                 <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl shadow-lg animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <p className="text-gray-500 mb-4">Enjoy building software</p>
//           <button className="group px-12 py-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center mx-auto">
//             Get Started
//             <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
//           </button>
//         </div>
        
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-6 h-6 text-gray-400" />
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .hover\:shadow-3xl:hover {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ModernAILanding;

