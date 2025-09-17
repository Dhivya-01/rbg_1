// import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
// import logo from "../assests/images/rbg.jpeg";
// import { CiMenuBurger } from "react-icons/ci";
// import { FaWindowClose } from "react-icons/fa";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";
// import { useState, useEffect, useRef } from "react";
// import { FileInput, Bot, Image } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Custom hook to handle scrolling to top
// const useScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);
// };

// export default function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [toggleButton, setButton] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [theme, setTheme] = useState("light"); // light or dark theme
//   const menuRef = useRef(null);

//   const solutionPaths = [
//     "/Dhvani",
//     "/DeedParser",
//     "/KnowVoice",
//     "/CaptchaSolver",
//     "/FormExtractor",
//   ];
//   const isActiveSolution = solutionPaths.includes(location.pathname);
//   const productsPaths = ["/MLStack", "/MLloOps"];
//   const isActiveProducts = productsPaths.includes(location.pathname);

//   useScrollToTop();

//   // Handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (toggleButton) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [toggleButton]);

//   const handleToggle = () => {
//     setButton((state) => !state);
//     setActiveDropdown(null);
//   };

//   const handleThemeToggle = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const handleDropdownToggle = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   const handleNavigate = () => {
//     navigate("/");
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     setButton(false);
//   };

//   const handleLinkClick = () => {
//     setButton(false);
//     setActiveDropdown(null);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const MicrophoneIcon = ({ color = "#e0f2ff", textColor = "#1a73e8" }) => (
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-full`}
//       style={{ backgroundColor: color }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="h-5 w-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
//         />
//       </svg>
//     </div>
//   );

//   const DocumentIcon = ({ color = "#e3f2fd", textColor = "#2962ff" }) => (
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-lg`}
//       style={{ backgroundColor: color }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke={textColor}
//         className="h-5 w-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//         />
//       </svg>
//     </div>
//   );

//   const VoiceIcon = ({ color = "#f3e5f5", textColor = "#9c27b0" }) => (
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-full`}
//       style={{ backgroundColor: color }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke={textColor}
//         className="h-5 w-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 8v4m0 4h.01M12 3a9 9 0 110 18 9 9 0 010-18z"
//         />
//       </svg>
//     </div>
//   );

//   const CaptchaIcon = ({ color = "#fff3e0", textColor = "#ff9800" }) => (
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-lg`}
//       style={{ backgroundColor: color }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke={textColor}
//         className="h-5 w-5"
//       >
//         <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//         <circle cx="8.5" cy="8.5" r="1.5" />
//         <circle cx="15.5" cy="8.5" r="1.5" />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8.5 15.5h7"
//         />
//       </svg>
//     </div>
//   );

//   const FormIcon = ({ color = "#ffebee", textColor = "#f44336" }) => (
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-lg`}
//       style={{ backgroundColor: color }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke={textColor}
//         className="h-5 w-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//         />
//       </svg>
//     </div>
//   );

//   const StackIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
//       />
//     </svg>
//   );

//   const RefreshIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//       />
//     </svg>
//   );

//   const MoonIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="h-5 w-5"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//       />
//     </svg>
//   );

//   const SunIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="h-5 w-5"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//       />
//     </svg>
//   );

//   const solutions = [
//     {
//       path: "/Dhvani",
//       title: "DHVANI",
//       description: "AI Based Voice Recognition System to Combat Cyberfrauds",
//       icon: <MicrophoneIcon className="h-6 w-6" />,
//       color: "green",
//     },
//     {
//       path: "/DeedParser",
//       title: "Deed Parser",
//       description: "GenAI Based Parser for Legal Deeds",
//       icon: <DocumentIcon className="h-6 w-6" />,
//       color: "blue",
//     },
//     {
//       path: "/KnowVoice",
//       title: "Know Voice",
//       description: "Post Call Analytics and Insights",
//       icon: <MicrophoneIcon className="h-6 w-6" />,
//       color: "purple",
//     },
//     {
//       path: "/CaptchaSolver",
//       title: "Captcha Solver",
//       description: "Ethical Bot for Bypassing Captcha",
//       icon: <Image className="h-6 w-6" />,
//       color: "orange",
//     },
//     {
//       path: "/FormExtractor",
//       title: "Form Extractor",
//       description: "Complex Table and Layout to JSON",
//       icon: <DocumentIcon className="h-6 w-6" />,
//       color: "red",
//     },
//   ];

//   const products = [
//     {
//       path: "/MLloOps",
//       title: "MLloOps",
//       description:
//         "Human Machine Loop for Accelerated Machine Learning Workflows",
//       icon: <RefreshIcon />,
//       color: "purple",
//     },
//     {
//       path: "/MLStack",
//       title: "MLStack",
//       description:
//         "Stack of Machine Learned APIs for Structuring the Unstructured Data",
//       icon: <StackIcon />,
//       color: "cyan",
//     },
//   ];

//   // Custom Link component that scrolls to top
//   const ScrollToTopLink = ({ to, children, className }) => {
//     const handleClick = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//       handleLinkClick();
//     };

//     return (
//       <Link to={to} className={className} onClick={handleClick}>
//         {children}
//       </Link>
//     );
//   };

//   // Animation variants
//   const logoAnimation = {
//     hover: { scale: 1.1, rotate: 10, transition: { duration: 0.5 } },
//   };

//   const navbarAnimation = {
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//     hidden: {
//       y: -20,
//       opacity: 0,
//       transition: { duration: 0.3 },
//     },
//   };

//   const dropdownAnimation = {
//     hidden: { opacity: 0, y: -10, height: 0 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       height: "auto",
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.05,
//         when: "beforeChildren",
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       height: 0,
//       transition: { duration: 0.2, when: "afterChildren" },
//     },
//   };

//   const itemAnimation = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//     exit: { opacity: 0, x: -10, transition: { duration: 0.1 } },
//   };

//   const mobileMenuAnimation = {
//     hidden: { x: "100%", opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         staggerChildren: 0.07,
//         when: "beforeChildren",
//       },
//     },
//     exit: {
//       x: "100%",
//       opacity: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         when: "afterChildren",
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
//   };

//   const mobileItemAnimation = {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 400, damping: 40 },
//     },
//     exit: { opacity: 0, x: 30, transition: { duration: 0.2 } },
//   };

//   const getNavbarThemeClass = () => {
//     if (theme === "dark") {
//       return `bg-gray-900 text-white ${
//         isScrolled ? "backdrop-blur-md bg-gray-900/90" : ""
//       }`;
//     }
//     return `bg-white ${isScrolled ? "backdrop-blur-md bg-white/90" : ""}`;
//   };

//   const getMobileThemeClass = () => {
//     return theme === "dark"
//       ? "bg-gray-900 text-white"
//       : "bg-white text-gray-900";
//   };

//   const submenuAnimation = {
//     hidden: { height: 0, opacity: 0 },
//     visible: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   };
//   const getDropdownBgClass = () => {
//     return theme === "dark" ? "bg-gray-800" : "bg-white";
//   };

//   const getItemHoverClass = (color) => {
//     if (theme === "dark") {
//       switch (color) {
//         case "green":
//           return "hover:bg-green-900/20 hover:text-green-400";
//         case "blue":
//           return "hover:bg-blue-900/20 hover:text-blue-400";
//         case "purple":
//           return "hover:bg-purple-900/20 hover:text-purple-400";
//         case "orange":
//           return "hover:bg-orange-900/20 hover:text-orange-400";
//         case "red":
//           return "hover:bg-red-900/20 hover:text-red-400";
//         case "cyan":
//           return "hover:bg-cyan-900/20 hover:text-cyan-400";
//         default:
//           return "hover:bg-gray-800 hover:text-white";
//       }
//     } else {
//       switch (color) {
//         case "green":
//           return "hover:bg-green-50 hover:text-green-600";
//         case "blue":
//           return "hover:bg-blue-50 hover:text-blue-600";
//         case "purple":
//           return "hover:bg-purple-50 hover:text-purple-600";
//         case "orange":
//           return "hover:bg-orange-50 hover:text-orange-600";
//         case "red":
//           return "hover:bg-red-50 hover:text-red-600";
//         case "cyan":
//           return "hover:bg-cyan-50 hover:text-cyan-600";
//         default:
//           return "hover:bg-gray-50 hover:text-gray-900";
//       }
//     }
//   };

//   const getLinkThemeStyle = (isActive, color) => {
//     if (theme === "dark") {
//       return isActive
//         ? `text-${color}-400 border-${color}-500`
//         : "text-gray-300 hover:text-white";
//     }
//     return isActive
//       ? `text-${color}-600 border-${color}-500`
//       : "text-gray-700 hover:text-gray-900";
//   };

//   // ... continuation of your Navbar component

//   // Mobile view navbar
//   return (
//     <>
//       {/* Desktop navbar code remains unchanged */}
//       <motion.nav
//         className={`bg-white z-10 sticky top-0 left-0 max-w-7xl mx-auto rounded-full shadow-lg m-2 hidden md:flex space-x-8 items-center font-Poppins py-4 px-4 md:px-6 lg:px-8`}
//         initial="hidden"
//         animate="visible"
//         variants={navbarAnimation}
//       >
//         <motion.div
//           onClick={handleNavigate}
//           className="cursor-pointer mr-8"
//           whileHover="hover"
//           variants={logoAnimation}
//         >
        //   <motion.img
        //     src={logo}
        //     alt="Logo"
        //     className="rounded-full w-12 h-12 object-cover"
        //   />
        // </motion.div>

//         <ul className="flex flex-1 justify-center" ref={menuRef}>
//           <motion.div
//             className="relative"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <NavLink
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-full transition-all duration-300 ${
//                   isActive
//                     ? `border-b-2 ${
//                         theme === "dark"
//                           ? "text-blue-400 border-blue-500"
//                           : "text-blue-600 border-blue-500"
//                       }`
//                     : `${
//                         theme === "dark"
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`
//                 }`
//               }
//               onClick={handleLinkClick}
//               to={"/"}
//             >
//               Home
//             </NavLink>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative"
//           >
//             <button
//               className={`flex items-center space-x-1 rounded-full px-3 ${
//                 isActiveProducts
//                   ? `border-b-2 ${
//                       theme === "dark"
//                         ? "text-red-400 border-red-500"
//                         : "text-red-600 border-red-500"
//                     }`
//                   : `${
//                       theme === "dark"
//                         ? "text-gray-300 hover:text-white"
//                         : "text-gray-700 hover:text-gray-900"
//                     }`
//               }`}
//               onClick={() => handleDropdownToggle("productsDesktop")}
//               onMouseEnter={() => handleDropdownToggle("productsDesktop")}
//             >
//               <span>AI Stack</span>
//               <motion.div
//                 animate={{
//                   rotate: activeDropdown === "productsDesktop" ? 180 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {activeDropdown === "productsDesktop" ? (
//                   <IoChevronUp className="h-4 w-4" />
//                 ) : (
//                   <IoChevronDown className="h-4 w-4" />
//                 )}
//               </motion.div>
//             </button>

//             <AnimatePresence>
//               {activeDropdown === "productsDesktop" && (
//                 <motion.div
//                   className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 ${getDropdownBgClass()} shadow-xl rounded-xl overflow-hidden z-50 w-72`}
//                   variants={dropdownAnimation}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className={`p-2 grid gap-1`}>
//                     {products.map((product) => (
//                       <motion.div
//                         key={product.path}
//                         variants={itemAnimation}
//                         className="overflow-hidden"
//                       >
//                         <ScrollToTopLink
//                           to={product.path}
//                           className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${getItemHoverClass(
//                             product.color
//                           )}`}
//                         >
//                           <div
//                             className={`flex items-center justify-center w-10 h-10 rounded-full ${
//                               theme === "dark"
//                                 ? `bg-${product.color}-900/30 text-${product.color}-400`
//                                 : `bg-${product.color}-100 text-${product.color}-600`
//                             }`}
//                           >
//                             {product.icon}
//                           </div>
//                           <div>
//                             <div
//                               className={`font-medium ${
//                                 theme === "dark"
//                                   ? "text-white"
//                                   : "text-gray-900"
//                               }`}
//                             >
//                               {product.title}
//                             </div>
//                             <div
//                               className={`text-sm ${
//                                 theme === "dark"
//                                   ? "text-gray-400"
//                                   : "text-gray-500"
//                               }`}
//                             >
//                               {product.description}
//                             </div>
//                           </div>
//                         </ScrollToTopLink>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           <div className="relative">
//             <motion.button
//               // className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
//               className={`flex items-center space-x-1 rounded-full px-3   ${
//                 isActiveSolution
//                   ? `border-b-2 ${
//                       theme === "dark"
//                         ? "text-green-400 border-green-500"
//                         : "text-green-600 border-green-500"
//                     }`
//                   : `${
//                       theme === "dark"
//                         ? "text-gray-300 hover:text-white"
//                         : "text-gray-700 hover:text-gray-900"
//                     }`
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleDropdownToggle("solutionsDesktop")}
//               onMouseEnter={() => handleDropdownToggle("solutionsDesktop")}
//             >
//               <span>Use Cases</span>
//               <motion.div
//                 animate={{
//                   rotate: activeDropdown === "solutionsDesktop" ? 180 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {activeDropdown === "solutionsDesktop" ? (
//                   <IoChevronUp className="h-4 w-4" />
//                 ) : (
//                   <IoChevronDown className="h-4 w-4" />
//                 )}
//               </motion.div>
//             </motion.button>

//             <AnimatePresence>
//               {activeDropdown === "solutionsDesktop" && (
//                 <motion.div
//                   className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 ${getDropdownBgClass()} shadow-xl rounded-xl overflow-hidden z-50 w-80`}
//                   variants={dropdownAnimation}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className="p-2 grid gap-1">
//                     {solutions.map((solution) => (
//                       <motion.div
//                         key={solution.path}
//                         variants={itemAnimation}
//                         className="overflow-hidden"
//                       >
//                         <ScrollToTopLink
//                           to={solution.path}
//                           className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${getItemHoverClass(
//                             solution.color
//                           )}`}
//                         >
//                           <div
//                             className={`flex items-center justify-center w-10 h-10 rounded-full ${
//                               theme === "dark"
//                                 ? `bg-${solution.color}-900/30 text-${solution.color}-400`
//                                 : `bg-${solution.color}-100 text-${solution.color}-600`
//                             }`}
//                           >
//                             {solution.icon}
//                           </div>
//                           <div>
//                             <div
//                               className={`font-medium ${
//                                 theme === "dark"
//                                   ? "text-white"
//                                   : "text-gray-900"
//                               }`}
//                             >
//                               {solution.title}
//                             </div>
//                             <div
//                               className={`text-sm ${
//                                 theme === "dark"
//                                   ? "text-gray-400"
//                                   : "text-gray-500"
//                               }`}
//                             >
//                               {solution.description}
//                             </div>
//                           </div>
//                         </ScrollToTopLink>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <NavLink
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-full transition-all duration-300 ${
//                   isActive
//                     ? `border-b-2 ${
//                         theme === "dark"
//                           ? "text-red-400 border-red-500"
//                           : "text-red-600 border-red-500"
//                       }`
//                     : `${
//                         theme === "dark"
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`
//                 }`
//               }
//               onClick={handleLinkClick}
//               to={"/research"}
//             >
//               Research
//             </NavLink>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <NavLink
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-full transition-all duration-300 ${
//                   isActive
//                     ? `border-b-2 ${
//                         theme === "dark"
//                           ? "text-green-400 border-green-500"
//                           : "text-green-600 border-green-500"
//                       }`
//                     : `${
//                         theme === "dark"
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`
//                 }`
//               }
//               to={"/about"}
//               onClick={handleLinkClick}
//             >
//               About us
//             </NavLink>
//           </motion.div>
//         </ul>
//       </motion.nav>

//       {/* Mobile navbar */}
//       <motion.nav
//         className={`md:hidden ${getNavbarThemeClass()} z-50 sticky top-0 left-0 max-w-7xl mx-auto rounded-full shadow-lg m-2 flex justify-between items-center py-3 px-4`}
//         initial="hidden"
//         animate="visible"
//         variants={navbarAnimation}
//       >
//         <motion.div
//           onClick={handleNavigate}
//           className="cursor-pointer"
//           whileHover="hover"
//           variants={logoAnimation}
//         >
//           <motion.img
//             src={logo}
//             alt="Logo"
//             className="rounded-full w-10 h-10 object-cover"
//           />
//         </motion.div>

//         <motion.button
//           onClick={handleToggle}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="p-2 rounded-full focus:outline-none"
//         >
//           {toggleButton ? (
//             <FaWindowClose className="w-6 h-6" />
//           ) : (
//             <CiMenuBurger className="w-6 h-6" />
//           )}
//         </motion.button>
//       </motion.nav>

//       {/* Mobile menu - using fixed positioning to ensure it always appears */}
//       <AnimatePresence>
//         {toggleButton && (
//           <motion.div
//             className={`fixed inset-0 z-40 ${getMobileThemeClass()} md:hidden overflow-y-auto`}
//             style={{ top: "70px" }} // Adjusted to leave space for the navbar
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={mobileMenuAnimation}
//           >
//             <div className="flex flex-col p-4 h-full pb-24">
//               <motion.div
//                 variants={mobileItemAnimation}
//                 className="py-2"
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <NavLink
//                   className={({ isActive }) =>
//                     `block py-3 px-4 rounded-lg ${
//                       isActive
//                         ? `bg-blue-100 text-blue-600`
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`
//                   }
//                   onClick={handleLinkClick}
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </motion.div>

//               {/* Products dropdown in mobile */}
//               <motion.div variants={mobileItemAnimation} className="py-2">
//                 <button
//                   className={`flex justify-between items-center w-full py-3 px-4 rounded-lg ${
//                     isActiveProducts
//                       ? "bg-red-100 text-red-600"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                   onClick={() => handleDropdownToggle("productsMobile")}
//                 >
//                   <span>AI Stack</span>
//                   <motion.div
//                     animate={{
//                       rotate: activeDropdown === "productsMobile" ? 180 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {activeDropdown === "productsMobile" ? (
//                       <IoChevronUp className="h-5 w-5" />
//                     ) : (
//                       <IoChevronDown className="h-5 w-5" />
//                     )}
//                   </motion.div>
//                 </button>

//                 <AnimatePresence>
//                   {activeDropdown === "productsMobile" && (
//                     <motion.div
//                       variants={submenuAnimation}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="overflow-hidden ml-4 mt-1"
//                     >
//                       {products.map((product) => (
//                         <ScrollToTopLink
//                           key={product.path}
//                           to={product.path}
//                           className={`flex items-center space-x-3 p-3 mb-1 rounded-lg ${getItemHoverClass(
//                             product.color
//                           )}`}
//                         >
//                           <div
//                             className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                               theme === "dark"
//                                 ? `bg-${product.color}-900/30 text-${product.color}-400`
//                                 : `bg-${product.color}-100 text-${product.color}-600`
//                             }`}
//                           >
//                             {product.icon}
//                           </div>
//                           <div className="flex-1">
//                             <div
//                               className={`font-medium ${
//                                 theme === "dark"
//                                   ? "text-white"
//                                   : "text-gray-900"
//                               }`}
//                             >
//                               {product.title}
//                             </div>
//                             <div
//                               className={`text-xs ${
//                                 theme === "dark"
//                                   ? "text-gray-400"
//                                   : "text-gray-500"
//                               }`}
//                             >
//                               {product.description}
//                             </div>
//                           </div>
//                         </ScrollToTopLink>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>

//               {/* Solutions dropdown in mobile */}
//               <motion.div variants={mobileItemAnimation} className="py-2">
//                 <button
//                   className={`flex justify-between items-center w-full py-3 px-4 rounded-lg ${
//                     isActiveSolution
//                       ? "bg-green-100 text-green-600"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                   onClick={() => handleDropdownToggle("solutionsMobile")}
//                 >
//                   <span>Use Cases</span>
//                   <motion.div
//                     animate={{
//                       rotate: activeDropdown === "solutionsMobile" ? 180 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {activeDropdown === "solutionsMobile" ? (
//                       <IoChevronUp className="h-5 w-5" />
//                     ) : (
//                       <IoChevronDown className="h-5 w-5" />
//                     )}
//                   </motion.div>
//                 </button>

//                 <AnimatePresence>
//                   {activeDropdown === "solutionsMobile" && (
//                     <motion.div
//                       variants={submenuAnimation}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="overflow-hidden ml-4 mt-1"
//                     >
//                       {solutions.map((solution) => (
//                         <ScrollToTopLink
//                           key={solution.path}
//                           to={solution.path}
//                           className={`flex items-center space-x-3 p-3 mb-1 rounded-lg ${getItemHoverClass(
//                             solution.color
//                           )}`}
//                         >
//                           <div
//                             className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                               theme === "dark"
//                                 ? `bg-${solution.color}-900/30 text-${solution.color}-400`
//                                 : `bg-${solution.color}-100 text-${solution.color}-600`
//                             }`}
//                           >
//                             {solution.icon}
//                           </div>
//                           <div className="flex-1">
//                             <div
//                               className={`font-medium ${
//                                 theme === "dark"
//                                   ? "text-white"
//                                   : "text-gray-900"
//                               }`}
//                             >
//                               {solution.title}
//                             </div>
//                             <div
//                               className={`text-xs ${
//                                 theme === "dark"
//                                   ? "text-gray-400"
//                                   : "text-gray-500"
//                               }`}
//                             >
//                               {solution.description}
//                             </div>
//                           </div>
//                         </ScrollToTopLink>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>

//               <motion.div
//                 variants={mobileItemAnimation}
//                 className="py-2"
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <NavLink
//                   className={({ isActive }) =>
//                     `block py-3 px-4 rounded-lg ${
//                       isActive
//                         ? "bg-purple-100 text-purple-600"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`
//                   }
//                   onClick={handleLinkClick}
//                   to="/research"
//                 >
//                   Research
//                 </NavLink>
//               </motion.div>

//               <motion.div
//                 variants={mobileItemAnimation}
//                 className="py-2"
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <NavLink
//                   className={({ isActive }) =>
//                     `block py-3 px-4 rounded-lg ${
//                       isActive
//                         ? "bg-green-100 text-green-600"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`
//                   }
//                   onClick={handleLinkClick}
//                   to="/about"
//                 >
//                   About us
//                 </NavLink>
//               </motion.div>

//               {/* Theme toggle in mobile menu */}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import logo from "../assests/images/rbg.jpeg";
// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, Menu, X, Mic, FileText, Image, RotateCcw, Layers } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// // Mock logo - replace with your actual logo


// export default function Navbar() {
//   const [toggleButton, setButton] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef(null);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = toggleButton ? "hidden" : "unset";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [toggleButton]);

//   const handleToggle = () => {
//     setButton(!toggleButton);
//     setActiveDropdown(null);
//   };

//   const handleDropdownToggle = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   const handleLinkClick = () => {
//     setButton(false);
//     setActiveDropdown(null);
//   };

//   const solutions = [
//     {
//       path: "/Dhvani",
//       title: "DHVANI",
//       description: "AI Voice Recognition for Cybersecurity",
//       icon: <Mic className="h-4 w-4" />,
//     },
//     {
//       path: "/DeedParser",
//       title: "Deed Parser",
//       description: "GenAI Legal Document Processing",
//       icon: <FileText className="h-4 w-4" />,
//     },
//     {
//       path: "/knowvoice",
//       title: "Know Voice",
//       description: "Advanced Call Analytics Platform",
//       icon: <Mic className="h-4 w-4" />,
//     },
//     {
//       path: "/CaptchaSolver",
//       title: "Captcha Solver",
//       description: "Intelligent Automation Solution",
//       icon: <Image className="h-4 w-4" />,
//     },
//     {
//       path: "/FormExtractor",
//       title: "Form Extractor",
//       description: "Document Structure Intelligence",
//       icon: <FileText className="h-4 w-4" />,
//     }
//   ];

//   const products = [
//     {
//       path: "/MLloOps",
//       title: "MLloOps",
//       description: "Human-AI Collaboration Platform",
//       icon: <RotateCcw className="h-4 w-4" />,
//     },
//     {
//       path: "/MLStack",
//       title: "MLStack",
//       description: "Unified ML API Infrastructure",
//       icon: <Layers className="h-4 w-4" />,
//     }
//   ];

//   const navItems = [
//     { name: "Home", path: "/", active: true },
//     { 
//       name: "AI Stack", 
//       dropdown: "products", 
//       items: products,
//       active: false 
//     },
//     { 
//       name: "Use Cases", 
//       dropdown: "solutions", 
//       items: solutions,
//       active: false 
//     },
//     { name: "Research", path: "/research", active: false },
//     { name: "About", path: "/about", active: false }
//   ];

//   return (
//     <>
//       {/* Main Navigation Container */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         {/* Background with conditional styling */}
//         <div 
//           className={`absolute inset-0 transition-all duration-500 ${
//             isScrolled 
//               ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
//               : 'bg-transparent'
//           }`} 
//         />

//         {/* Desktop Navigation */}
//         <nav className="relative hidden lg:block">
//           <div className="max-w-6xl mx-auto px-8 py-5">
//             <div className="flex items-center justify-between">
              
//               {/* Logo Section */}
//               <div 
//                 className="flex items-center space-x-3 cursor-pointer group"
//                 onClick={() => console.log('Navigate home')}
//               >
//                 <div className="relative overflow-hidden">
//                   <motion.img
//             src={logo}
//             alt="Logo"
//             className="rounded-full w-12 h-12 object-cover"
//           />
        
//                   <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                 </div>
//                 <div>
//                   <span className="text-lg font-bold text-slate-900 tracking-tight">
//                     RBG.ai
//                   </span>
//                   <div className="text-xs text-slate-500 font-medium -mt-1">
//                     AI SOLUTIONS
//                   </div>
//                 </div>
//               </div>

//               {/* Main Navigation */}
//               <div className="flex items-center space-x-1" ref={menuRef}>
//                 {navItems.map((item, index) => (
//                   <div key={item.name} className="relative">
//                     {item.dropdown ? (
//                       <div className="relative">
//                         <button
//                           className={`
//                             group flex items-center space-x-1 px-4 py-2.5 text-sm font-medium 
//                             transition-all duration-300 rounded-lg relative overflow-hidden
//                             ${item.active 
//                               ? "text-slate-900 bg-slate-100" 
//                               : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//                             }
//                           `}
//                           onClick={() => handleDropdownToggle(item.dropdown)}
//                           onMouseEnter={() => setActiveDropdown(item.dropdown)}
//                           style={{
//                             animationDelay: `${index * 100}ms`
//                           }}
//                         >
//                           <span className="relative z-10">{item.name}</span>
//                           <ChevronDown 
//                             className={`h-3 w-3 transition-all duration-300 relative z-10 ${
//                               activeDropdown === item.dropdown ? 'rotate-180' : ''
//                             }`} 
//                           />
//                           {/* Hover effect */}
//                           <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                         </button>

//                         {/* Dropdown Menu */}
//                         {activeDropdown === item.dropdown && (
//                           <div 
//                             className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
//                             onMouseLeave={() => setActiveDropdown(null)}
//                             style={{
//                               animation: "dropdownSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                             }}
//                           >
//                             <div className="p-2">
//                               {item.items.map((subItem, idx) => (
//                                 <a
//                                   key={subItem.path}
//                                   href={subItem.path}
//                                   className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
//                                   onClick={handleLinkClick}
//                                   style={{
//                                     animationDelay: `${idx * 60}ms`,
//                                     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                                   }}
//                                 >
//                                   <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
//                                     {subItem.icon}
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-slate-900">
//                                       {subItem.title}
//                                     </h3>
//                                     <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600">
//                                       {subItem.description}
//                                     </p>
//                                   </div>
//                                   {/* Subtle animation line */}
//                                   <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//                                 </a>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <a
//                         href={item.path}
//                         className={`
//                           group px-4 py-2.5 text-sm font-medium transition-all duration-300 
//                           rounded-lg relative overflow-hidden block
//                           ${item.active 
//                             ? "text-slate-900 bg-slate-100" 
//                             : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//                           }
//                         `}
//                         onClick={handleLinkClick}
//                         style={{
//                           animationDelay: `${index * 100}ms`
//                         }}
//                       >
//                         <span className="relative z-10">{item.name}</span>
//                         <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="flex items-center">
//                 <button className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//                   <span className="relative z-10">Get Started</span>
//                   <div className="absolute inset-0 bg-slate-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Navigation */}
//         <nav className="relative lg:hidden">
//           <div className="px-4 py-4">
//             <div className="flex items-center justify-between">
              
//               {/* Mobile Logo */}
//               <div className="flex items-center space-x-2">
//                <motion.img
//             src={logo}
//             alt="Logo"
//             className="rounded-full w-12 h-12 object-cover"
//           />
        
//                 <span className="text-lg font-bold text-slate-900">RBG.ai</span>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={handleToggle}
//                 className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
//               >
//                 {toggleButton ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {toggleButton && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div 
//             className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
//             onClick={handleToggle}
//           />
//           <div 
//             className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[calc(100vh-6rem)] overflow-y-auto"
//             style={{
//               animation: "mobileSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//             }}
//           >
//             <div className="p-6">
//               {navItems.map((item, index) => (
//                 <div key={item.name} className="mb-2">
//                   {item.dropdown ? (
//                     <div>
//                       <button
//                         className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
//                         onClick={() => handleDropdownToggle(item.dropdown)}
//                         style={{
//                           animationDelay: `${index * 80}ms`,
//                           animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                         }}
//                       >
//                         <span>{item.name}</span>
//                         <ChevronDown 
//                           className={`h-4 w-4 transition-transform duration-300 ${
//                             activeDropdown === item.dropdown ? 'rotate-180' : ''
//                           }`} 
//                         />
//                       </button>
                      
//                       {activeDropdown === item.dropdown && (
//                         <div className="mt-2 ml-4 space-y-1">
//                           {item.items.map((subItem, idx) => (
//                             <a
//                               key={subItem.path}
//                               href={subItem.path}
//                               className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-xl transition-all duration-300"
//                               onClick={handleLinkClick}
//                               style={{
//                                 animationDelay: `${idx * 60}ms`,
//                                 animation: "slideUp 0.3s ease-out forwards"
//                               }}
//                             >
//                               <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
//                                 {subItem.icon}
//                               </div>
//                               <div>
//                                 <div className="font-medium text-slate-900 text-sm">{subItem.title}</div>
//                                 <div className="text-xs text-slate-500">{subItem.description}</div>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <a
//                       href={item.path}
//                       className="block py-3 px-4 font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
//                       onClick={handleLinkClick}
//                       style={{
//                         animationDelay: `${index * 80}ms`,
//                         animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                       }}
//                     >
//                       {item.name}
//                     </a>
//                   )}
//                 </div>
//               ))}
              
//               {/* Mobile CTA */}
//               <div className="mt-6 pt-6 border-t border-slate-200">
//                 <button 
//                   className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium transition-all duration-300 hover:bg-slate-700"
//                   style={{
//                     animationDelay: `${navItems.length * 80}ms`,
//                     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                   }}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Spacer to prevent content overlap */}
//       <div className="h-16 lg:h-20" />

//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes dropdownSlide {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) translateY(-10px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) translateY(0) scale(1);
//           }
//         }

//         @keyframes mobileSlide {
//           from {
//             opacity: 0;
//             transform: translateY(-20px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .group:hover .absolute {
//           transform: translateX(100%);
//         }
//       `}</style>
//     </>
//   );
// }



// import { Link } from "react-router-dom";
// import logo from "../assests/images/rbg.jpeg";
// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, Menu, X, Mic, FileText, Image, RotateCcw, Layers } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [toggleButton, setButton] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = toggleButton ? "hidden" : "unset";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [toggleButton]);

//   const handleToggle = () => {
//     setButton(!toggleButton);
//     setActiveDropdown(null);
//   };

//   // Custom ScrollToTopLink component with animation
// const ScrollToTopLink = ({ to, children, className, onClick }) => {
//   const handleClick = () => {
//     if (onClick) onClick(); // run extra logic if passed
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
//       whileTap={{ scale: 0.95 }}
//     >
//       <Link to={to} className={className} onClick={handleClick}>
//         {children}
//       </Link>
//     </motion.div>
//   );
// };

//   const handleDropdownToggle = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   // const handleLinkClick = (path) => {
//   //   setButton(false);
//   //   setActiveDropdown(null);
//   //   navigate(path);
//   // };
// const handleLinkClick = (path) => {
//   setButton(false);
//   setActiveDropdown(null);
//   navigate(path);
// };


//   const solutions = [
//     {
//       path: "/Dhvani",
//       title: "DHVANI",
//       description: "AI Voice Recognition for Cybersecurity",
//       icon: <Mic className="h-4 w-4" />,
//     },
//     {
//       path: "/DeedParser",
//       title: "Deed Parser",
//       description: "GenAI Legal Document Processing",
//       icon: <FileText className="h-4 w-4" />,
//     },
//     {
//       path: "/knowvoice",
//       title: "Know Voice",
//       description: "Advanced Call Analytics Platform",
//       icon: <Mic className="h-4 w-4" />,
//     },
//     {
//       path: "/CaptchaSolver",
//       title: "Captcha Solver",
//       description: "Intelligent Automation Solution",
//       icon: <Image className="h-4 w-4" />,
//     },
//     {
//       path: "/FormExtractor",
//       title: "Form Extractor",
//       description: "Document Structure Intelligence",
//       icon: <FileText className="h-4 w-4" />,
//     }
//   ];

//   const products = [
//     {
//       path: "/MLloOps",
//       title: "MLloOps",
//       description: "Human-AI Collaboration Platform",
//       icon: <RotateCcw className="h-4 w-4" />,
//     },
//     {
//       path: "/MLStack",
//       title: "MLStack",
//       description: "Unified ML API Infrastructure",
//       icon: <Layers className="h-4 w-4" />,
//     }
//   ];

//   const navItems = [
//     { name: "Home", path: "/", active: true },
//     { 
//       name: "AI Stack", 
//       dropdown: "products", 
//       items: products,
//       active: false 
//     },
//     { 
//       name: "Use Cases", 
//       dropdown: "solutions", 
//       items: solutions,
//       active: false 
//     },
//     { name: "Research", path: "/research", active: false },
//     { name: "About", path: "/about", active: false }
//   ];

//   return (
//     <>
//       {/* Main Navigation Container */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <div 
//           className={`absolute inset-0 transition-all duration-500 ${
//             isScrolled 
//               ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
//               : 'bg-transparent'
//           }`} 
//         />

//         {/* Desktop Navigation */}
//         <nav className="relative hidden lg:block">
//           <div className="max-w-6xl mx-auto px-8 py-5">
//             <div className="flex items-center justify-between">
              
//               {/* Logo Section */}
//               <div 
//                 className="flex items-center space-x-3 cursor-pointer group"
//                 onClick={() => handleLinkClick("/")}
//               >
//                 <div className="relative overflow-hidden">
//                   <motion.img
//                     src={logo}
//                     alt="Logo"
//                     className="rounded-full w-12 h-12 object-cover"
//                   />        
//                   <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                 </div>
//                 <div>
//                   <span className="text-lg font-bold text-slate-900 tracking-tight">
//                     RBG.ai
//                   </span>
//                   <div className="text-xs text-slate-500 font-medium -mt-1">
//                     AI SOLUTIONS
//                   </div>
//                 </div>
//               </div>

//               {/* Main Navigation */}
//               <div className="flex items-center space-x-1" ref={menuRef}>
//                 {navItems.map((item, index) => (
//                   <div key={item.name} className="relative">
//                     {item.dropdown ? (
//                       <div className="relative">
//                         <button
//                           className={`
//                             group flex items-center space-x-1 px-4 py-2.5 text-sm font-medium 
//                             transition-all duration-300 rounded-lg relative overflow-hidden
//                             ${item.active 
//                               ? "text-slate-900 bg-slate-100" 
//                               : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//                             }
//                           `}
//                           onClick={() => handleDropdownToggle(item.dropdown)}
//                           onMouseEnter={() => setActiveDropdown(item.dropdown)}
//                           style={{
//                             animationDelay: `${index * 100}ms`
//                           }}
//                         >
//                           <span className="relative z-10">{item.name}</span>
//                           <ChevronDown 
//                             className={`h-3 w-3 transition-all duration-300 relative z-10 ${
//                               activeDropdown === item.dropdown ? 'rotate-180' : ''
//                             }`} 
//                           />
//                           <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                         </button>

//                         {/* Dropdown Menu */}
//                         {activeDropdown === item.dropdown && (
//                           <div 
//                             className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
//                             onMouseLeave={() => setActiveDropdown(null)}
//                             style={{
//                               animation: "dropdownSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                             }}
//                           >
                            
//                             <div className="p-2">
//                               {item.items.map((subItem, idx) => (
//                                 // <div
//                                 //   key={subItem.path}
//                                 //   className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 relative overflow-hidden cursor-pointer"
//                                 //   onClick={() => handleLinkClick(subItem.path)}
//                                 //   style={{
//                                 //     animationDelay: `${idx * 60}ms`,
//                                 //     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                                 //   }}
//                                 // >
//                                 //   <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
//                                 //     {subItem.icon}
//                                 //   </div>
//                                 //   <div className="flex-1 min-w-0">
//                                 //     <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-slate-900">
//                                 //       {subItem.title}
//                                 //     </h3>
//                                 //     <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600">
//                                 //       {subItem.description}
//                                 //     </p>
//                                 //   </div>
//                                 //   <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//                                 // </div>
//                                 <ScrollToTopLink
//   to={subItem.path}
//   className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 relative overflow-hidden cursor-pointer"
//   onClick={() => handleLinkClick(subItem.path)}
// >
//   <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
//     {subItem.icon}
//   </div>
//   <div className="flex-1 min-w-0">
//     <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-slate-900">
//       {subItem.title}
//     </h3>
//     <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600">
//       {subItem.description}
//     </p>
//   </div>
//   <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
// </ScrollToTopLink>

//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <div
//                         className={`
//                           group px-4 py-2.5 text-sm font-medium transition-all duration-300 
//                           rounded-lg relative overflow-hidden block cursor-pointer
//                           ${item.active 
//                             ? "text-slate-900 bg-slate-100" 
//                             : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//                           }
//                         `}
//                         onClick={() => handleLinkClick(item.path)}
//                         style={{
//                           animationDelay: `${index * 100}ms`
//                         }}
//                       >
//                         <span className="relative z-10">{item.name}</span>
//                         <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="flex items-center">
//                 <button 
//                   className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//                   onClick={() => handleLinkClick("/get-started")}
//                 >
//                   <span className="relative z-10">Get Started</span>
//                   <div className="absolute inset-0 bg-slate-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Navigation */}
//         <nav className="relative lg:hidden">
//           <div className="px-4 py-4">
//             <div className="flex items-center justify-between">
//               <div 
//                 className="flex items-center space-x-2 cursor-pointer"
//                 onClick={() => handleLinkClick("/")}
//               >
//                 <motion.img
//                   src={logo}
//                   alt="Logo"
//                   className="rounded-full w-12 h-12 object-cover"
//                 />
//                 <span className="text-lg font-bold text-slate-900">RBG.ai</span>
//               </div>
//               <button
//                 onClick={handleToggle}
//                 className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
//               >
//                 {toggleButton ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {toggleButton && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div 
//             className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
//             onClick={handleToggle}
//           />
//           <div 
//             className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[calc(100vh-6rem)] overflow-y-auto"
//             style={{
//               animation: "mobileSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//             }}
//           >
//             <div className="p-6">
//               {navItems.map((item, index) => (
//                 <div key={item.name} className="mb-2">
//                   {item.dropdown ? (
//                     <div>
//                       <button
//                         className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
//                         onClick={() => handleDropdownToggle(item.dropdown)}
//                         style={{
//                           animationDelay: `${index * 80}ms`,
//                           animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                         }}
//                       >
//                         <span>{item.name}</span>
//                         <ChevronDown 
//                           className={`h-4 w-4 transition-transform duration-300 ${
//                             activeDropdown === item.dropdown ? 'rotate-180' : ''
//                           }`} 
//                         />
//                       </button>
//                       {activeDropdown === item.dropdown && (
//                         <div className="mt-2 ml-4 space-y-1">
//                           {item.items.map((subItem, idx) => (
//                             <div
//                               key={subItem.path}
//                               className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-xl transition-all duration-300 cursor-pointer"
//                               onClick={() => handleLinkClick(subItem.path)}
//                               style={{
//                                 animationDelay: `${idx * 60}ms`,
//                                 animation: "slideUp 0.3s ease-out forwards"
//                               }}
//                             >
//                               <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
//                                 {subItem.icon}
//                               </div>
//                               <div>
//                                 <div className="font-medium text-slate-900 text-sm">{subItem.title}</div>
//                                 <div className="text-xs text-slate-500">{subItem.description}</div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div
//                       className="block py-3 px-4 font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 cursor-pointer"
//                       onClick={() => handleLinkClick(item.path)}
//                       style={{
//                         animationDelay: `${index * 80}ms`,
//                         animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                       }}
//                     >
//                       {item.name}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div className="mt-6 pt-6 border-t border-slate-200">
//                 <button 
//                   className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium transition-all duration-300 hover:bg-slate-700"
//                   onClick={() => handleLinkClick("/get-started")}
//                   style={{
//                     animationDelay: `${navItems.length * 80}ms`,
//                     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
//                   }}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Spacer to prevent content overlap */}
//       <div className="h-16 lg:h-20" />

//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes dropdownSlide {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) translateY(-10px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) translateY(0) scale(1);
//           }
//         }
//         @keyframes mobileSlide {
//           from {
//             opacity: 0;
//             transform: translateY(-20px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//         .group:hover .absolute {
//           transform: translateX(100%);
//         }
//       `}</style>
//     </>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import logo from "../assests/images/rbg.jpeg";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Mic, FileText, Image, RotateCcw, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [toggleButton, setButton] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggleButton ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggleButton]);

  const handleToggle = () => {
    setButton(!toggleButton);
    setActiveDropdown(null);
  };

  // Custom ScrollToTopLink component with animation
  const ScrollToTopLink = ({ to, children, className, onClick }) => {
    const handleClick = () => {
      if (onClick) onClick(); // run extra logic if passed
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
        whileTap={{ scale: 0.95 }}
      >
        <Link to={to} className={className} onClick={handleClick}>
          {children}
        </Link>
      </motion.div>
    );
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = (path) => {
    setButton(false);
    setActiveDropdown(null);
    navigate(path);
  };

  const solutions = [
    {
      path: "/Dhvani",
      title: "DHVANI",
      description: "AI Voice Recognition for Cybersecurity",
      icon: <Mic className="h-4 w-4" />,
    },
    {
      path: "/DeedParser",
      title: "Deed Parser",
      description: "GenAI Legal Document Processing",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      path: "/knowvoice",
      title: "Know Voice",
      description: "Advanced Call Analytics Platform",
      icon: <Mic className="h-4 w-4" />,
    },
    {
      path: "/CaptchaSolver",
      title: "Captcha Solver",
      description: "Intelligent Automation Solution",
      icon: <Image className="h-4 w-4" />,
    },
    {
      path: "/FormExtractor",
      title: "Form Extractor",
      description: "Document Structure Intelligence",
      icon: <FileText className="h-4 w-4" />,
    }
  ];

  const products = [
    {
      path: "/MLloOps",
      title: "MLloOps",
      description: "Human-AI Collaboration Platform",
      icon: <RotateCcw className="h-4 w-4" />,
    },
    {
      path: "/MLStack",
      title: "MLStack",
      description: "Unified ML API Infrastructure",
      icon: <Layers className="h-4 w-4" />,
    }
  ];

  // Function to check if current route matches any item in an array
  const isActiveInGroup = (items) => {
    return items.some(item => location.pathname === item.path);
  };

  // Function to check if a specific path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      active: isActivePath("/") 
    },
    { 
      name: "AI Stack", 
      dropdown: "products", 
      items: products,
      active: isActiveInGroup(products) 
    },
    { 
      name: "Use Cases", 
      dropdown: "solutions", 
      items: solutions,
      active: isActiveInGroup(solutions) 
    },
    { 
      name: "Research", 
      path: "/research", 
      active: isActivePath("/research") 
    },
    { 
      name: "About", 
      path: "/about", 
      active: isActivePath("/about") 
    }
  ];

  return (
    <>
      {/* Main Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
              : 'bg-transparent'
          }`} 
        />

        {/* Desktop Navigation */}
        <nav className="relative hidden lg:block">
          <div className="max-w-6xl mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              
              {/* Logo Section */}
              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => handleLinkClick("/")}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={logo}
                    alt="Logo"
                    className="rounded-full w-12 h-12 object-cover"
                  />        
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <div>
                  <span className="text-lg font-bold text-slate-900 tracking-tight">
                    RBG.ai
                  </span>
                  <div className="text-xs text-slate-500 font-medium -mt-1">
                    AI SOLUTIONS
                  </div>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="flex items-center space-x-1" ref={menuRef}>
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          className={`
                            group flex items-center space-x-1 px-4 py-2.5 text-sm font-medium 
                            transition-all duration-300 rounded-lg relative overflow-hidden
                            ${item.active 
                              ? "text-slate-900 bg-slate-100 shadow-sm" 
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }
                          `}
                          onClick={() => handleDropdownToggle(item.dropdown)}
                          onMouseEnter={() => setActiveDropdown(item.dropdown)}
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown 
                            className={`h-3 w-3 transition-all duration-300 relative z-10 ${
                              activeDropdown === item.dropdown ? 'rotate-180' : ''
                            }`} 
                          />
                          <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === item.dropdown && (
                          <div 
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
                            onMouseLeave={() => setActiveDropdown(null)}
                            style={{
                              animation: "dropdownSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                            }}
                          >
                            <div className="p-2">
                              {item.items.map((subItem, idx) => (
                                <ScrollToTopLink
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`group flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 relative overflow-hidden cursor-pointer
                                    ${isActivePath(subItem.path) 
                                      ? "bg-slate-100 text-slate-900" 
                                      : "hover:bg-slate-50"
                                    }
                                  `}
                                  onClick={() => handleLinkClick(subItem.path)}
                                >
                                  <div className={`p-2 rounded-lg transition-all duration-300 
                                    ${isActivePath(subItem.path)
                                      ? "bg-slate-900 text-white"
                                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white"
                                    }
                                  `}>
                                    {subItem.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className={`font-semibold text-sm mb-1 group-hover:text-slate-900 
                                      ${isActivePath(subItem.path) ? "text-slate-900" : "text-slate-900"}
                                    `}>
                                      {subItem.title}
                                    </h3>
                                    <p className={`text-xs leading-relaxed group-hover:text-slate-600
                                      ${isActivePath(subItem.path) ? "text-slate-600" : "text-slate-500"}
                                    `}>
                                      {subItem.description}
                                    </p>
                                  </div>
                                  <div className={`absolute bottom-0 left-4 right-4 h-px transition-transform duration-300
                                    ${isActivePath(subItem.path)
                                      ? "bg-slate-900 scale-x-100"
                                      : "bg-slate-900 transform scale-x-0 group-hover:scale-x-100"
                                    }
                                  `} />
                                </ScrollToTopLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`
                          group px-4 py-2.5 text-sm font-medium transition-all duration-300 
                          rounded-lg relative overflow-hidden block cursor-pointer
                          ${item.active 
                            ? "text-slate-900 bg-slate-100 shadow-sm" 
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          }
                        `}
                        onClick={() => handleLinkClick(item.path)}
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center">
                <button 
                  className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  onClick={() => handleLinkClick("/get-started")}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-slate-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="relative lg:hidden">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleLinkClick("/")}
              >
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="rounded-full w-12 h-12 object-cover"
                />
                <span className="text-lg font-bold text-slate-900">RBG.ai</span>
              </div>
              <button
                onClick={handleToggle}
                className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
              >
                {toggleButton ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {toggleButton && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={handleToggle}
          />
          <div 
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[calc(100vh-6rem)] overflow-y-auto"
            style={{
              animation: "mobileSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
            }}
          >
            <div className="p-6">
              {navItems.map((item, index) => (
                <div key={item.name} className="mb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full py-3 px-4 text-left font-medium rounded-xl transition-all duration-300
                          ${item.active 
                            ? "text-slate-900 bg-slate-100" 
                            : "text-slate-900 hover:bg-slate-50"
                          }
                        `}
                        onClick={() => handleDropdownToggle(item.dropdown)}
                        style={{
                          animationDelay: `${index * 80}ms`,
                          animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.dropdown ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.dropdown && (
                        <div className="mt-2 ml-4 space-y-1">
                          {item.items.map((subItem, idx) => (
                            <div
                              key={subItem.path}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 cursor-pointer
                                ${isActivePath(subItem.path)
                                  ? "bg-slate-100 text-slate-900"
                                  : "hover:bg-slate-50"
                                }
                              `}
                              onClick={() => handleLinkClick(subItem.path)}
                              style={{
                                animationDelay: `${idx * 60}ms`,
                                animation: "slideUp 0.3s ease-out forwards"
                              }}
                            >
                              <div className={`p-1.5 rounded-lg transition-all duration-300
                                ${isActivePath(subItem.path)
                                  ? "bg-slate-900 text-white"
                                  : "bg-slate-100 text-slate-600"
                                }
                              `}>
                                {subItem.icon}
                              </div>
                              <div>
                                <div className={`font-medium text-sm
                                  ${isActivePath(subItem.path) ? "text-slate-900" : "text-slate-900"}
                                `}>
                                  {subItem.title}
                                </div>
                                <div className={`text-xs
                                  ${isActivePath(subItem.path) ? "text-slate-600" : "text-slate-500"}
                                `}>
                                  {subItem.description}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`block py-3 px-4 font-medium rounded-xl transition-all duration-300 cursor-pointer
                        ${item.active 
                          ? "text-slate-900 bg-slate-100" 
                          : "text-slate-900 hover:bg-slate-50"
                        }
                      `}
                      onClick={() => handleLinkClick(item.path)}
                      style={{
                        animationDelay: `${index * 80}ms`,
                        animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      }}
                    >
                      {item.name}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button 
                  className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium transition-all duration-300 hover:bg-slate-700"
                  onClick={() => handleLinkClick("/get-started")}
                  style={{
                    animationDelay: `${navItems.length * 80}ms`,
                    animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20" />

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        @keyframes mobileSlide {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .group:hover .absolute {
          transform: translateX(100%);
        }
      `}</style>
    </>
  );
}