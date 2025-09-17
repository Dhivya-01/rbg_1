// import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion"; // Import framer-motion
// import { useInView } from "react-intersection-observer"; // For triggering animations on scroll
// import { useState, useEffect } from "react";

// // Custom ScrollToTopLink component with animation
// const ScrollToTopLink = ({ to, children, className }) => {
//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.2 },
//       }}
//       whileTap={{ scale: 0.95 }} // Added for mobile feedback
//     >
//       <Link to={to} className={className} onClick={handleClick}>
//         {children}
//       </Link>
//     </motion.div>
//   );
// };

// // Animated social icon component
// const AnimatedSocialIcon = ({ href, children, hoverColor }) => {
//   return (
//     <motion.a
//       href={href}
//       className={`cursor-pointer hover:${hoverColor} text-2xl md:text-3xl`}
//       whileHover={{
//         scale: 1.2,
//         rotate: [0, -10, 10, -10, 0],
//         transition: { duration: 0.5 },
//       }}
//       whileTap={{ scale: 0.9 }} // Added for mobile feedback
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.a>
//   );
// };

// // Animated list item component
// const AnimatedListItem = ({ index, children }) => {
//   return (
//     <motion.li
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="hover:scale-105 duration-300"
//     >
//       {children}
//     </motion.li>
//   );
// };

// export default function Footer() {
//   const linkedln = "https://in.linkedin.com/company/rbgai";
//   const youtube = "https://www.youtube.com/c/RBGAI";
//   const github = "https://github.com/rbg-research";

//   // External portal link
//   const attendancePortal = "https://e-connect.rbg.ai/";

//   const products = [
//     { name: "MLloOps", path: "/MLloOps" },
//     { name: "MLStack", path: "/MLStack" },
//   ];

//   const solutions = [
//     { name: "DHVANI", path: "/Dhvani" },
//     { name: "Deed Parser", path: "/DeedParser" },
//     { name: "Know Voice", path: "/KnowVoice" },
//     { name: "Captcha Solver", path: "/CaptchaSolver" },
//     { name: "Form Extractor", path: "/FormExtractor" },
//   ];

//   const internalPortals = [
//     { name: "E-Connect Portal", url: "https://e-connect.rbg.ai/" },
//   ];

//   // State for screen size
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if we're on a mobile device
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Initial check
//     checkMobile();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkMobile);

//     // Clean up
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Use intersection observer to trigger animations when footer is in view
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Different animation variants for mobile and desktop
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: isMobile ? 0.1 : 0.2, // Faster stagger on mobile
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: isMobile ? 0.3 : 0.5 }, // Faster animations on mobile
//     },
//   };

//   // Mobile-specific variants
//   const mobileColumnVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: {
//       opacity: 1,
//       height: "auto",
//       transition: { duration: 0.5 },
//     },
//   };

//   // Animated section for mobile accordion effect
//   const AnimatedSection = ({ title, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return isMobile ? (
//       <motion.div className="border-b border-gray-200 py-3">
//         <motion.div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//           whileTap={{ scale: 0.98 }}
//         >
//           <h3 className="text-xl font-bold">{title}</h3>
//           <motion.span
//             animate={{ rotate: isOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             ▼
//           </motion.span>
//         </motion.div>
//         <motion.div
//           variants={mobileColumnVariants}
//           initial="hidden"
//           animate={isOpen ? "visible" : "hidden"}
//           className="overflow-hidden"
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     ) : (
//       <motion.div className="space-y-4" variants={itemVariants}>
//         <motion.h3
//           className="text-xl font-bold"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           {title}
//         </motion.h3>
//         {children}
//       </motion.div>
//     );
//   };

//   return (
//     <motion.div
//       className="bg-gray-100"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       ref={ref}
//     >
//       <motion.div
//         className="px-5 md:px-20 py-5 mt-10 md:py-10 text-left max-w-7xl w-full mx-auto bg-gray-100 rounded flex flex-col space-y-10 font-Inter text-zinc-600"
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         {/* Social Links Section with wave animation */}
//         <motion.div
//           className="flex items-start space-x-5 md:space-x-10 text-left text-lg font-Poppins md:text-2xl"
//           variants={itemVariants}
//         >
//           <motion.span
//             className="font-semibold text-zinc-800"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Follow us on
//           </motion.span>
//           <AnimatedSocialIcon href={github} hoverColor="text-green-600">
//             <FaGithub />
//           </AnimatedSocialIcon>
//           <AnimatedSocialIcon href={linkedln} hoverColor="text-blue-700">
//             <FaLinkedin />
//           </AnimatedSocialIcon>
//           <AnimatedSocialIcon href={youtube} hoverColor="text-red-600">
//             <FaYoutube />
//           </AnimatedSocialIcon>
//         </motion.div>

//         <motion.hr variants={itemVariants} />

//         {/* Main content with responsive layout */}
//         <motion.div
//           className={
//             isMobile
//               ? "flex flex-col space-y-2"
//               : "grid grid-cols-1 md:grid-cols-4 gap-8"
//           }
//           variants={itemVariants}
//         >
//           {/* More About Us Column */}
//           {isMobile ? (
//             <AnimatedSection title="More About Us">
//               <div className="flex flex-col space-y-3 mt-3">
//                 <ScrollToTopLink className="hover:text-red-600" to="/">
//                   Home
//                 </ScrollToTopLink>
//                 <ScrollToTopLink className="hover:text-red-600" to="research">
//                   Research
//                 </ScrollToTopLink>
//                 <ScrollToTopLink className="hover:text-red-600" to="about">
//                   About us
//                 </ScrollToTopLink>
//                 <ScrollToTopLink className="hover:text-red-600" to="contact">
//                   Contact us
//                 </ScrollToTopLink>
//                 <ScrollToTopLink className="hover:text-red-600" to="gallery">
//                   Gallery
//                 </ScrollToTopLink>
//               </div>
//             </AnimatedSection>
//           ) : (
//             <motion.div
//               className="flex flex-col space-y-3"
//               variants={itemVariants}
//             >
//               <motion.h3
//                 className="text-xl font-bold"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 More About Us
//               </motion.h3>
//               <ScrollToTopLink className="hover:text-red-600" to="/">
//                 Home
//               </ScrollToTopLink>
//               <ScrollToTopLink className="hover:text-red-600" to="research">
//                 Research
//               </ScrollToTopLink>
//               <ScrollToTopLink className="hover:text-red-600" to="about">
//                 About us
//               </ScrollToTopLink>
//               <ScrollToTopLink className="hover:text-red-600" to="contact">
//                 Contact us
//               </ScrollToTopLink>
//               <ScrollToTopLink className="hover:text-red-600" to="gallery">
//                 Gallery
//               </ScrollToTopLink>
//             </motion.div>
//           )}

//           {/* Products Column */}
//           <AnimatedSection title="Products">
//             <motion.ul className="space-y-2 mt-3">
//               {products.map((product, index) => (
                // <AnimatedListItem key={index} index={index}>
                  // <ScrollToTopLink
                  //   to={product.path}
                  //   className="hover:text-green-600"
                  // >
                  //   {product.icon}
                  //   <span>{product.name}</span>
                  // </ScrollToTopLink>
                // </AnimatedListItem>
//               ))}
//             </motion.ul>
//           </AnimatedSection>

//           {/* Solutions Column */}
//           <AnimatedSection title="Solutions">
//             <motion.ul className="space-y-2 mt-3">
//               {solutions.map((solution, index) => (
//                 <AnimatedListItem key={index} index={index}>
                  // <ScrollToTopLink
                  //   to={solution.path}
                  //   className="hover:text-blue-700"
                  // >
                  //   {solution.icon}
                  //   <span>{solution.name}</span>
                  // </ScrollToTopLink>
//                 </AnimatedListItem>
//               ))}
//             </motion.ul>
//           </AnimatedSection>

//           {/* Employee Portal Column */}
//           <AnimatedSection title="Employee Portal">
//             <motion.ul className="space-y-2 mt-3">
//               {internalPortals.map((portal, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-red-600 hover:scale-105 duration-300"
//                 >
//                   <a
//                     href={portal.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer hover:text-red-600"
//                   >
//                     {portal.name}
//                   </a>
//                 </li>
//               ))}
//             </motion.ul>
//           </AnimatedSection>
//         </motion.div>

//         <motion.hr variants={itemVariants} />

//         {/* Footer Bottom Section */}
//         <motion.div
//           className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"
//           variants={itemVariants}
//         >
//           <motion.div
//             className="flex space-x-10"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }} // Added for mobile feedback
//           >
//             <Link
//               to="/"
//               className="font-semibold hover:text-blue-700 duration-300"
//             >
//               RBG.AI
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex flex-1 justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//           >
//             <p className="text-center">
//               © 2021 - 2025 RBG.AI All rights reserved
//             </p>
//           </motion.div>

//           <motion.div
//             className={`flex ${isMobile ? "flex-col space-y-2" : "gap-4"}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <ScrollToTopLink
//               className="font-medium text-zinc-700 hover:text-blue-700"
//               to="/policy"
//             >
//               Privacy Policy
//             </ScrollToTopLink>
//             <ScrollToTopLink
//               className="font-medium text-zinc-700 hover:text-blue-700"
//               to="/Terms"
//             >
//               Terms of Service
//             </ScrollToTopLink>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }


import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Youtube, ArrowUp, Mail, Phone, MapPin, ExternalLink, Zap } from "lucide-react";

// Animated Background Component - matching landing page
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
  );
};
// Custom ScrollToTopLink component with animation
const ScrollToTopLink = ({ to, children, className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }} // Added for mobile feedback
    >
      <Link to={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    </motion.div>
  );
};
// Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } hover:-translate-y-1`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Link Component with unique micro-animations
const AnimatedLink = ({ href, children, external = false }) => {
  const handleClick = (e) => {
    if (!external) {
      e.preventDefault();
      // Handle internal routing here
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="group relative text-slate-600 hover:text-blue-600 transition-all duration-500 flex items-center gap-2 overflow-hidden"
    >
      <span className="relative transform transition-transform duration-300 group-hover:translate-x-1">
        {children}
        {/* Animated underline with wave effect */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
        {/* Shimmer effect */}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
        {/* Glow effect */}
        <span className="absolute -inset-1 bg-blue-100/0 group-hover:bg-blue-100/20 rounded transition-all duration-300 -z-10"></span>
      </span>
      {external && (
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transform rotate-0 group-hover:rotate-12 transition-all duration-300" />
      )}
    </a>
  );
};

// Social Icon Component with enhanced animations
const SocialIcon = ({ href, icon: Icon, label, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:shadow-lg overflow-hidden"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-slate-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-500"></div>
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-xl border-2 border-blue-400/0 group-hover:border-blue-400/30 group-hover:scale-110 transition-all duration-500"></div>
      {/* Shine effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
    </a>
  );
};

// Newsletter Component with enhanced animations
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
        Stay Updated
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Get the latest updates on MLloOps and AI innovations.
      </p>
      <div className="space-y-3">
        <div className="group relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm  "
          />
          <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
          {/* Input glow effect */}
          
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubscribed}
          className="group w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden relative"
        >
          <span className="relative z-10">
            {isSubscribed ? "Successfully Subscribed! ✓" : "Contact Us"}
          </span>
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
        </button>
      </div>
    </div>
  );
};

// Feature Badge Component with micro-animations
const FeatureBadge = ({ icon: Icon, text }) => {
  return (
    <div className="group inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium border border-blue-200/50 hover:bg-blue-200/50 hover:border-blue-300/50 transition-all duration-500 cursor-pointer overflow-hidden relative">
      <Icon className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
      <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 group-hover:from-blue-400/10 group-hover:via-blue-400/20 group-hover:to-blue-400/10 transition-all duration-500"></div>
    </div>
  );
};

export default function ModernFooter() {
  const products = [
    { name: "MLloOps", path: "/MLloOps" },
    { name: "MLStack", path: "/MLStack" },
  ];

  const solutions = [
    { name: "DHVANI", path: "/Dhvani" },
    { name: "Deed Parser", path: "/DeedParser" },
    { name: "Know Voice", path: "/KnowVoice" },
    { name: "Captcha Solver", path: "/CaptchaSolver" },
    { name: "Form Extractor", path: "/FormExtractor" },
  ];

  const company = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/policy" },
    { name: "Terms of Service", path: "/Terms" },
  ];

  return (
    <>
      <ScrollToTop />
      
      {/* Main Footer */}
      <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
        <AnimatedBackground />
        
        {/* Top decorative line */}

        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-6 gap-8 mb-10">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group hover:shadow-xl hover:scale-110 transition-all duration-500">
                    <span className="text-white font-bold text-lg group-hover:rotate-12 transition-transform duration-500">R</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    RBG.AI
                  </span>
                </div>

                {/* Feature Badge */}
                <div className="group">
                  <FeatureBadge icon={Zap} text="AI-Powered ML Operations" />
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  MLloOps™ revolutionizes machine learning operations by combining cutting-edge AI automation with human expertise.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Get in Touch</h4>
                <div className="space-y-2">
                  <div className="group flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">contact@rbg.ai</span>
                  </div>
                  <div className="group flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">+91 XXX XXX XXXX</span>
                  </div>
                  <div className="group flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Follow Us</h4>
                <div className="flex space-x-3">
                  <SocialIcon 
                    href="https://github.com/rbg-research" 
                    icon={Github} 
                    label="GitHub"
                    hoverColor="hover:text-slate-800"
                  />
                  <SocialIcon 
                    href="https://in.linkedin.com/company/rbgai" 
                    icon={Linkedin} 
                    label="LinkedIn"
                    hoverColor="hover:text-blue-600"
                  />
                  <SocialIcon 
                    href="https://www.youtube.com/c/RBGAI" 
                    icon={Youtube} 
                    label="YouTube"
                    hoverColor="hover:text-red-600"
                  />
                </div>
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Products
              </h3>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <ScrollToTopLink
                    to={product.path}
                    className="hover:text-green-600"
                  >
                    {product.icon}
                    <span>{product.name}</span>
                  </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <ScrollToTopLink
                    to={solution.path}
                    className="hover:text-blue-700"
                  >
                    {solution.icon}
                    <span>{solution.name}</span>
                  </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    {/* <AnimatedLink href={item.path}>
                      <span className="font-medium">{item.name}</span>
                    </AnimatedLink> */}
                    <ScrollToTopLink
                    to={item.path}
                    className="hover:text-blue-700"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </ScrollToTopLink>
                  </li>
                ))}
                <li>
                  <AnimatedLink href="https://e-connect.rbg.ai/" external>
                    <span className="font-medium">E-Connect Portal</span>
                  </AnimatedLink>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <Newsletter />
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 px-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-slate-600 text-center lg:text-left">
              <span className="font-medium">© 2021 - 2025 RBG.AI.</span> All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item, index) => (
                <AnimatedLink key={index} href={item.path}>
                  <span className="font-medium">{item.name}</span>
                </AnimatedLink>
              ))}
            </div>

            {/* Made in India */}
            <div className="group flex items-center space-x-2 text-slate-500 hover:text-red-500 transition-colors duration-300 cursor-pointer">
              <span className="text-sm font-medium">Made with</span>
              <span className="text-red-500 text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">❤️</span>
              <span className="text-sm font-medium">in India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}