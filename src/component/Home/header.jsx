// "use client";



// // this is a client component
// import { useEffect } from "react";
// import {Link} from "react-router-dom";
// import { ShineBorder, TypeWriter } from "@/components/ui/hero-designali";
// import { Plus } from "lucide-react"; 

// import { Button } from "@/components/ui/button"; 

// export const Hero = () => {
//   const talkAbout = [
//     "Graphic Design",
//     "Branding",
//     "Web Design",
//     "Web Develop",
//     "Marketing",
//     "UI UX",
//     "Social Media",
//   ];

// //   useEffect(() => {
// //     renderCanvas();
// //   }, []);

//   return (
//     <main className="overflow-hidden">
//     <section id="home">
//    <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full  dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
//       <div className="flex flex-col items-center justify-center px-6 text-center">
//         <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-40">
//           <div className="relative flex items-center rounded-full border bg-popover px-3 py-1 text-xs text-primary/60">
//             Introducing Dicons.
//             <Link
//               href="/products/dicons"
//               rel="noreferrer"
//               className="ml-1 flex items-center font-semibold"
//             >
//               <div
//                 className="absolute inset-0 hover:font-semibold hover:text-ali flex"
//                 aria-hidden="true"
//               />
//               Explore <span aria-hidden="true"></span>
//             </Link>
//           </div>
//         </div>

//         <div className="mx-auto max-w-5xl">
//                      <div className="border-text-red-500 relative mx-auto h-full bg-background border py-12 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">

//             <h1 className="flex flex-col text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
//               <Plus
//                 strokeWidth={4}
//                 className="text-text-red-500 absolute -left-5 -top-5 h-10 w-10"
//               />
//               <Plus
//                 strokeWidth={4}
//                 className="text-text-red-500 absolute -bottom-5 -left-5 h-10 w-10"
//               />
//               <Plus
//                 strokeWidth={4}
//                 className="text-text-red-500 absolute -right-5 -top-5 h-10 w-10"
//               />
//               <Plus
//                 strokeWidth={4}
//                 className="text-text-red-500 absolute -bottom-5 -right-5 h-10 w-10"
//               />
//               <span>
//                 Your complete platform for the{" "}
//                 <span className="text-red-500">Design.</span>
//               </span>
//             </h1>
//             <div className="flex items-center mt-4 justify-center gap-1">
//               <span className="relative flex h-3 w-3 items-center justify-center">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
//               </span>
//               <p className="text-xs text-green-500">Available Now</p>
//             </div>
//           </div>

//           <h1 className="mt-8 text-2xl md:text-2xl">
//             Welcome to my creative playground! I&#39;m{" "}
//             <span className="text-red-500 font-bold">Ali </span>
//           </h1>

//           <p className="text-primary/60 py-4">
//             I craft enchanting visuals for brands, and conjure design resources
//             to empower others. I am an expert in design like{" "}
//             <span className="text-blue-500 font-semibold">
//               <TypeWriter strings={talkAbout} />
//             </span>.
//           </p>
//           <div className="flex items-center justify-center gap-2">
//             <Link href="/graphic">
//               <ShineBorder
//                 borderWidth={3}
//                 className="border cursor-pointer h-auto w-auto p-2 bg-white/5 backdrop-blur-md dark:bg-black/5"
//                 color={["#FF007F", "#39FF14", "#00FFFF"]}
//               >
//                 <Button className="w-full rounded-xl" >
//                   Start Posting
//                 </Button>
//               </ShineBorder>
//             </Link> 
//             <Link href={"https://cal.com/aliimam/designali"} target="_blank">
//               <Button className="rounded-xl" variant="outline">Book a call</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
      
//     </section>
//     <img
//         width={1512}
//         height={550}
//         className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
//         src="https://raw.githubusercontent.com/designali-in/designali/refs/heads/main/apps/www/public/images/gradient-background-top.png"
//         alt=""
//         role="presentation"
//         priority
//       />
//      </main>
//   );
// };

// export default Hero



// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import InputLabel from "@mui/material/InputLabel";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import visuallyHidden from "@mui/utils/visuallyHidden";
// import { styled } from "@mui/material/styles";

// const StyledBox = styled("div")(({ theme }) => ({
//   alignSelf: "center",
//   width: "100%",
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: (theme.vars || theme).shape.borderRadius,
//   outline: "6px solid",
//   outlineColor: "hsla(220, 25%, 80%, 0.2)",
//   border: "1px solid",
//   borderColor: (theme.vars || theme).palette.grey[200],
//   boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
//   backgroundImage: `url(https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png)`,
//   backgroundSize: "cover",
//   [theme.breakpoints.up("sm")]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
//   ...theme.applyStyles("dark", {
//     boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
//    backgroundImage: `url(https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png)`,
//     outlineColor: "hsla(220, 20%, 42%, 0.1)",
//     borderColor: (theme.vars || theme).palette.grey[700],
//   }),
// }));



// export default function Hero() {
//   return (
//     <Box
//       id="hero"
//       sx={(theme) => ({
//         width: "100%",
//         backgroundRepeat: "no-repeat",
//         backgroundImage:
//           "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(356, 100%, 90%, 1.00), transparent)",
//         ...theme.applyStyles("dark", {
//           backgroundImage:
//             "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(0, 100%, 16%, 1.00), transparent)",
//         }),
//       })}
//     >
//       <Container
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           pt: { xs: 14, sm: 20 },
//           pb: { xs: 8, sm: 12 },
//         }}
//       >
//         <Stack
//           spacing={2}
//           useFlexGap
//           sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
//         >
//          <Typography
//   variant="h1"
//   sx={{
//     fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
//     fontWeight: 400,
//     lineHeight: 1.15,
//     textAlign: "left"
//   }}
// >
//   AI speed and human<br />
//   precision come together<br />
//   <Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>
//     in MLloOps
//   </Box>
// </Typography>

//           <Typography
//             sx={{
//               textAlign: "center",
//               color: "text.secondary",
//               width: { sm: "100%", md: "80%" },
//             }}
//           >
//             Explore our cutting-edge dashboard, delivering high-quality solutions
//             tailored to your needs. Elevate your experience with top-tier features
//             and services.
//           </Typography>
//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             spacing={1}
//             useFlexGap
//             sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
//           >
//             <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
//               Email
//             </InputLabel>
//             <TextField
//               id="email-hero"
//               hiddenLabel
//               size="small"
//               variant="outlined"
//               aria-label="Enter your email address"
//               placeholder="Your email address"
//               fullWidth
//               slotProps={{
//                 htmlInput: {
//                   autoComplete: "off",
//                   "aria-label": "Enter your email address",
//                 },
//               }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               sx={{ minWidth: "fit-content" }}
//             >
//               Start now
//             </Button>
//           </Stack>
//           <Typography
//             variant="caption"
//             color="text.secondary"
//             sx={{ textAlign: "center" }}
//           >
//             By clicking &quot;Start now&quot; you agree to our&nbsp;
//             <Link href="#" color="primary">
//               Terms & Conditions
//             </Link>
//             .
//           </Typography>
//         </Stack>
//         <StyledBox id="image" />
//       </Container>
//     </Box>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";

// const StyledBox = styled("div")(({ theme }) => ({
//   alignSelf: "center",
//   width: "100%",
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: theme.shape.borderRadius,
//   outline: "6px solid",
//   outlineColor: "hsla(220, 25%, 80%, 0.2)",
//   border: "1px solid",
//   borderColor: theme.palette.grey[200],
//   boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
//   backgroundImage: `url(https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png)`,
//   backgroundSize: "cover",
//   [theme.breakpoints.up("sm")]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
// }));

// export default function Hero() {
//   const phrases = [
//     "Confidence-Driven Workflows.",
//     "AI-Powered Automation.",
//     "Structured Data Solutions.",
//     "Continuous Model Learning.",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % phrases.length);
//     }, 2500); // change every 2.5 seconds
//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   return (
//     <div id="hero" className="w-full">
//       <div className="max-w-6xl mx-auto flex flex-col items-center pt-14 sm:pt-20 pb-8 sm:pb-12 px-4">
//         <div className="flex flex-col items-center space-y-4 w-full sm:w-4/5">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-left">
//             AI speed and human<br />
//             precision come together<br />
//             <span className="text-blue-600 dark:text-blue-400">in MLloOps</span>
//           </h1>

//           <p className="text-center text-gray-600 dark:text-gray-400 text-lg w-full md:w-4/5">
//             MLloOps™ enables faster data processing, improves accuracy, and delivers
//             scalable automation powered by{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 font-semibold text-blue-600 dark:text-blue-400 transition-opacity duration-500">
//                 {phrases[index]}
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-md transform scale-110 animate-pulse opacity-30"></span>
//             </span>
//           </p>

//           <div className="pt-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
//               Get Started with MLloOps
//             </button>
//           </div>

//           <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
//             By clicking "Get Started" you agree to our{" "}
//             <a
//               href="#"
//               className="text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Terms & Conditions
//             </a>
//             .
//           </p>
//         </div>
//         <StyledBox id="image" />
//       </div>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";



// export default function Hero() {
//   const phrases = [
//     "Confidence-Driven Workflows.",
//     "AI-Powered Automation.",
//     "Structured Data Solutions.",
//     "Continuous Model Learning.",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % phrases.length);
//     }, 2500); // change every 2.5 seconds
//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   return (
//     <div id="hero" className="w-full">
//       <div className="max-w-6xl mx-auto flex flex-col items-center pt-14 sm:pt-20 pb-8 sm:pb-12 px-4">
//         <div className="flex flex-col items-center space-y-4 w-full sm:w-4/5">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-left">
//             AI speed and human<br />
//             precision come together<br />
//             <span className="text-blue-600 dark:text-blue-400">in MLloOps</span>
//           </h1>

//           <p className="text-center text-gray-600 dark:text-gray-400 text-lg w-full md:w-4/5">
//             MLloOps™ enables faster data processing, improves accuracy, and delivers
//             scalable automation powered by{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 font-semibold text-blue-600 dark:text-blue-400 transition-opacity duration-500">
//                 {phrases[index]}
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-md transform scale-110 animate-pulse opacity-30"></span>
//             </span>
//           </p>

//           <div className="pt-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
//               Get Started with MLloOps
//             </button>
//           </div>

//           <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
//             By clicking "Get Started" you agree to our{" "}
//             <a
//               href="#"
//               className="text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Terms & Conditions
//             </a>
//             .
//           </p>
//         </div>
      
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, Play, Users, TrendingUp, Shield } from "lucide-react";

// export default function MLloOpsLanding() {
//   const phrases = [
//     "Confidence-Driven Workflows",
//     "AI-Powered Automation", 
//     "Structured Data Solutions",
//     "Continuous Model Learning"
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentPhrase((prev) => (prev + 1) % phrases.length);
//         setIsVisible(true);
//       }, 300);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   const features = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Lightning Fast Processing",
//       description: "Process data at unprecedented speeds with our optimized ML pipelines"
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Precision Accuracy",
//       description: "Achieve human-level precision with AI-enhanced quality control"
//     },
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Scalable Architecture",
//       description: "Seamlessly scale from prototype to production with enterprise-grade infrastructure"
//     }
//   ];

//   const stats = [
//     { number: "99.9%", label: "Accuracy Rate" },
//     { number: "10x", label: "Faster Processing" },
//     { number: "500+", label: "Happy Clients" },
//     { number: "24/7", label: "Support" }
//   ];

//   return (
//     <div className="min-h-screen ">
//       {/* Navigation */}
     

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-1 gap-12 items-center">
//             {/* Left Column - Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
//                 <Zap className="w-4 h-4 mr-2" />
//                 Next-Gen ML Operations Platform
//               </div>

//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                     AI Speed and
//                   </span>
               
//                   <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                     Human Precision
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     in MLloOps
//                   </span>
//                 </h1>

//                 <div className="h-16 flex items-center">
//                   <p className="text-xl text-slate-600 dark:text-slate-300">
//                     Powered by{" "}
//                     <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
//                       <span className="relative">
//                         <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
//                           {phrases[currentPhrase]}
//                         </span>
//                         <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-lg opacity-30 blur animate-pulse"></div>
//                       </span>
//                     </span>
//                   </p>
//                 </div>

//                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//                   MLloOps™ revolutionizes machine learning operations by combining cutting-edge AI automation with human expertise, delivering unprecedented speed, accuracy, and scalability for your data workflows.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
//                   Get Started with MLloOps
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
//                   <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
//                   Watch Demo
//                 </button>
//               </div>

//               <div className="flex items-center space-x-6 pt-4">
//                 <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
//                   <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                   No credit card required
//                 </div>
//                 <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
//                   <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                   14-day free trial
//                 </div>
//               </div>
//             </div>

           
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-2">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Preview */}
//       {/* <section id="features" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
//                 Why Choose MLloOps?
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//               Experience the perfect fusion of artificial intelligence and human insight in your machine learning operations
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600">
//                 <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Footer */}
     
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, Play, Users, TrendingUp, Shield } from "lucide-react";

// Animated Background Component
const AnimatedImageBackground = ({ 
  primaryImages = [],
  secondaryImages = [],
  opacity = 0.08,
  primaryCount = 20,
  secondaryCount = 15 
}) => {
  // Default placeholder images if none provided
  const defaultPrimaryImages = [
    "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
    "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
    "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
    "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",

   
  ];

  const defaultSecondaryImages = [
   "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",


   "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
   "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
   "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
    
   
  ];

  const finalPrimaryImages = primaryImages.length > 0 ? primaryImages : defaultPrimaryImages;
  const finalSecondaryImages = secondaryImages.length > 0 ? secondaryImages : defaultSecondaryImages;

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatRight {
          0% { transform: translateX(-120px) translateY(0px) rotate(0deg) scale(0.7); }
          25% { transform: translateX(25vw) translateY(-40px) rotate(90deg) scale(1.3); }
          50% { transform: translateX(50vw) translateY(30px) rotate(180deg) scale(0.9); }
          75% { transform: translateX(75vw) translateY(-20px) rotate(270deg) scale(1.1); }
          100% { transform: translateX(calc(100vw + 120px)) translateY(0px) rotate(360deg) scale(0.7); }
        }
        @keyframes floatLeft {
          0% { transform: translateX(calc(100vw + 120px)) translateY(0px) rotate(360deg) scale(1); }
          25% { transform: translateX(75vw) translateY(35px) rotate(270deg) scale(0.6); }
          50% { transform: translateX(50vw) translateY(-45px) rotate(180deg) scale(1.4); }
          75% { transform: translateX(25vw) translateY(20px) rotate(90deg) scale(0.8); }
          100% { transform: translateX(-120px) translateY(0px) rotate(0deg) scale(1); }
        }
        @keyframes floatDiagonal {
          0% { transform: translateX(-100px) translateY(100vh) rotate(0deg) scale(0.5); }
          33% { transform: translateX(30vw) translateY(70vh) rotate(120deg) scale(1.5); }
          66% { transform: translateX(70vw) translateY(30vh) rotate(240deg) scale(0.7); }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg) scale(0.5); }
        }
        @keyframes floatVertical {
          0% { transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0.8); }
          25% { transform: translateY(75vh) translateX(20px) rotate(90deg) scale(1.2); }
          50% { transform: translateY(50vh) translateX(40px) rotate(180deg) scale(1.6); }
          75% { transform: translateY(25vh) translateX(20px) rotate(270deg) scale(1); }
          100% { transform: translateY(-120px) translateX(0px) rotate(360deg) scale(0.8); }
        }
        @keyframes floatZigzag {
          0% { transform: translateX(-80px) translateY(0px) rotate(0deg) scale(1); }
          20% { transform: translateX(20vw) translateY(-30px) rotate(72deg) scale(0.7); }
          40% { transform: translateX(40vw) translateY(20px) rotate(144deg) scale(1.3); }
          60% { transform: translateX(60vw) translateY(-25px) rotate(216deg) scale(0.9); }
          80% { transform: translateX(80vw) translateY(15px) rotate(288deg) scale(1.1); }
          100% { transform: translateX(calc(100vw + 80px)) translateY(0px) rotate(360deg) scale(1); }
        }
      `}</style>

      {/* Main Background Container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none " style={{ opacity }}>
        {/* Primary Floating Images */}
        {[...Array(primaryCount)].map((_, i) => {
          const animations = ['floatRight', 'floatLeft', 'floatDiagonal', 'floatVertical', 'floatZigzag'];
          const selectedAnimation = animations[i % animations.length];
          
          return (
            <div
              key={`primary-${i}`}
              className="absolute will-change-transform"
              style={{
                top: `${(i * 17 + Math.sin(i) * 20) % 85}%`,
                left: `${(i * 23 + Math.cos(i) * 15) % 85}%`,
                animation: `${selectedAnimation} ${25 + (i % 10) * 2}s linear infinite`,
                animationDelay: `${i * 2}s`,
                zIndex: 1
              }}
            >
              <img 
                src={finalPrimaryImages[i % finalPrimaryImages.length]}
                alt=""
                className="w-64 h-64 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  filter: 'brightness(0.7) contrast(1.2)',
                  mixBlendMode: 'multiply'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                }}
              />
            </div>
          );
        })}

        {/* Secondary Floating Images */}
        {[...Array(secondaryCount)].map((_, i) => {
          const animations = ['floatLeft', 'floatRight', 'floatVertical', 'floatZigzag', 'floatDiagonal'];
          const selectedAnimation = animations[i % animations.length];
          
          return (
            <div
              key={`secondary-${i}`}
              className="absolute will-change-transform"
              style={{
                top: `${(i * 25 + 60 + Math.sin(i + 1) * 25) % 85}%`,
                right: `${(i * 18 + Math.cos(i + 1) * 20) % 85}%`,
                animation: `${selectedAnimation} ${35 + (i % 8) * 3}s linear infinite`,
                animationDelay: `${i * 3.5}s`,
                zIndex: 1
              }}
            >
              <img 
                src={finalSecondaryImages[i % finalSecondaryImages.length]}
                alt=""
                className="w-12 h-12 object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                style={{ 
                  filter: 'brightness(0.8) contrast(1.1)',
                  mixBlendMode: 'multiply'
                }}
                onError={(e) => {
                  console.log('Secondary image failed to load:', e.target.src);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

// Main MLloOps Component
export default function MLloOpsLanding() {
  const phrases = [
    "Confidence-Driven Workflows",
    "AI-Powered Automation", 
    "Structured Data Solutions",
    "Continuous Model Learning"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Processing",
      description: "Process data at unprecedented speeds with our optimized ML pipelines"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Accuracy",
      description: "Achieve human-level precision with AI-enhanced quality control"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Seamlessly scale from prototype to production with enterprise-grade infrastructure"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "10x", label: "Faster Processing" },
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Support" }
  ];

  // Your image URLs - Replace these with your actual image links
  const myPrimaryImages = [
    // "https://your-domain.com/image1.png",
    // "https://your-domain.com/image2.png", 
    // Add your actual image URLs here
  ];

  const mySecondaryImages = [
    // "https://your-domain.com/small-image1.png",
    // "https://your-domain.com/small-image2.png",
    // Add your actual small image URLs here  
  ];

  return (
    <div className="min-h-screen relative">
      {/* Animated Background Component */}
      {/* <AnimatedImageBackground 
        primaryImages={myPrimaryImages}
        secondaryImages={mySecondaryImages}
        opacity={0.25}
        primaryCount={15}
        secondaryCount={10}
      /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 ">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
                <Zap className="w-4 h-4 mr-2" />
                Next-Gen ML Operations Platform
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                    AI Speed and
                  </span>
               
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                    Human Precision
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    in MLloOps
                  </span>
                </h1>

                <div className="h-16 flex items-center">
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Powered by{" "}
                    <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
                      <span className="relative">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                          {phrases[currentPhrase]}
                        </span>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-lg opacity-30 blur animate-pulse"></div>
                      </span>
                    </span>
                  </p>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  MLloOps™ revolutionizes machine learning operations by combining cutting-edge AI automation with human expertise, delivering unprecedented speed, accuracy, and scalability for your data workflows.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Get Started with MLloOps
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  14-day free trial
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}