// "use client";
// import React from "react";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import { Carousel } from "flowbite-react";
// import TextType from "../../components/ui/Text";


// export function Carouselflow() {
//   return (
//     <div className="flex flex-col overflow-hidden">
      // <ContainerScroll
      //   titleComponent={
      //     <>
      //       <h1 className="text-8xl font-semibold text-black dark:text-white">
      //         Unleash the power of <br />
      //         <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
      //           MLloOps
      //         </span>
      //       </h1>
      //     </>
      //   }
      // >
      //   <img
      //     src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
      //     alt="hero"
      //     height={720}
      //     width={1400}
      //     className="mx-auto rounded-2xl object-cover h-full object-left-top"
      //     draggable={false}
      //   />
      // </ContainerScroll>

    
//       <section className="relative px-8 py-10 bg-white overflow-hidden">
//   {/* Background decorative elements */}

 
//   <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-purple-50 opacity-40"></div>
  
//   <div className="relative max-w-4xl mx-auto">
//     <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
      
// <h1>
// <TextType 
//   text={[
   
//     "Why choose MLloOps?"
//   ]}
//   typingSpeed={50}
//   loop={false}
//   pauseDuration={0} // no pause
//   showCursor={true}
// />
// </h1>
// <p>
// <TextType 
//   text={[
   
//     "Manage, monitor, and optimize your machine learning workflows seamlessly with our enterprise-grade platform."
//   ]}
//   typingSpeed={50}
//   loop={false}
//   pauseDuration={0} // no pause
//   showCursor={true}
// />
// </p>
      
//       <div className="mt-10 flex flex-wrap justify-center gap-4">
//         {[
//           { label: "Efficiency", value: "40%" },
//           { label: "Performance", value: "99.9%" },
//           { label: "Adoption", value: "2K+" }
//         ].map((stat, index) => (
//           <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg text-center transition-colors duration-300 hover:bg-blue-50">
//             <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//             <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>
      
      
//     </div>
//   </div>
// </section>
//     </div>
//   );
// }


// export default Carouselflow






// "use client";
// import React from "react";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import { Carousel } from "flowbite-react";
// import TextType from "../../components/ui/Text";

// export function Carouselflow() {
//   return (
//     <div className="flex flex-col overflow-hidden relative">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none ">
//         <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-30 to-red-50">
//           {/* Floating animated shapes */}
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//           <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
//         </div>
//       </div>

//       {/* Vertical CTA Buttons */}
//       <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
//         {/* Contact Button */}
//         <button className="group relative bg-white hover:bg-rose-50 text-rose-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
//           <svg 
//             className="w-6 h-6" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
//             />
//           </svg>
//           {/* Tooltip */}
//           <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             Contact Us
//           </div>
//         </button>

//         {/* Email Button */}
//         <button className="group relative bg-white hover:bg-rose-50 text-rose-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
//           <svg 
//             className="w-6 h-6" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
//             />
//           </svg>
//           {/* Tooltip */}
//           <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             Email Us
//           </div>
//         </button>

//         {/* WhatsApp Button (optional) */}
//         <button className="group relative bg-white hover:bg-rose-50 text-rose-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
//           <svg 
//             className="w-6 h-6" 
//             fill="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
//           </svg>
//           {/* Tooltip */}
//           <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             WhatsApp
//           </div>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="relative ">
//         <ContainerScroll
//           titleComponent={
//             <>
//               <h1 className="text-8xl font-semibold text-black dark:text-white">
//                 Unleash the power of <br />
//                 <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                   MLloOps
//                 </span>
//               </h1>
//             </>
//           }
//         >
//           <img
//             src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
//             alt="hero"
//             height={720}
//             width={1400}
//             className="mx-auto rounded-2xl object-cover h-full object-left-top"
//             draggable={false}
//           />
//         </ContainerScroll>

//         <section className="relative px-8 py-10 bg-transparent overflow-hidden">
//           {/* Background decorative elements */}
//           <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-rose-100 opacity-40"></div>
          
//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-10 border border-rose-100 transform transition-all duration-300 hover:shadow-xl hover:bg-white/90">
              
//               <h1>
//                 <TextType 
//                   text={[
//                     "Why choose MLloOps?"
//                   ]}
//                   typingSpeed={50}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={true}
//                 />
//               </h1>
              
//               <p>
//                 <TextType 
//                   text={[
//                     "Manage, monitor, and optimize your machine learning workflows seamlessly with our enterprise-grade platform."
//                   ]}
//                   typingSpeed={50}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={true}
//                 />
//               </p>
              
//               <div className="mt-10 flex flex-wrap justify-center gap-4">
//                 {[
//                   { label: "Efficiency", value: "40%" },
//                   { label: "Performance", value: "99.9%" },
//                   { label: "Adoption", value: "2K+" }
//                 ].map((stat, index) => (
//                   <div key={index} className="px-6 py-3 bg-rose-50/50 rounded-lg text-center transition-colors duration-300 hover:bg-rose-100/70 backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                     <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Carouselflow;



// "use client";
// import React, { useEffect, useState } from "react";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import TextType from "../../components/ui/Text";

// export function Carouselflow() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsLoaded(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50/30">
//       {/* Dynamic Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         {/* Animated Grid */}
//         <div className="absolute inset-0 opacity-[0.03]" 
//              style={{
//                backgroundImage: `linear-gradient(rgba(251, 113, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.3) 1px, transparent 1px)`,
//                backgroundSize: '50px 50px',
//                animation: 'gridMove 20s linear infinite'
//              }} 
//         />
        
//         {/* Floating Particles */}
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-float-random"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${i * 2}s`,
//               animationDuration: `${8 + Math.random() * 4}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Compact Floating CTA Panel */}
//       <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-3">
//         <div className="flex justify-between items-center gap-2">
//           {[
//             { icon: "📞", label: "Call" },
//             { icon: "📧", label: "Email" },
//             { icon: "💬", label: "Chat" },
//             { icon: "🚀", label: "Start", primary: true }
//           ].map((item, idx) => (
//             <button 
//               key={idx}
//               className={`flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl transition-all duration-300 active:scale-95 ${
//                 item.primary 
//                   ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
//                   : 'bg-rose-50 text-rose-600 border border-rose-100'
//               }`}
//             >
//               <span className="text-lg mb-1">{item.icon}</span>
//               <span className="text-xs font-medium">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Desktop Floating CTA Panel */}
//       <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-2">
//         <div className="flex flex-col space-y-2">
//           {[
//             { icon: "📞", label: "Call", detail: "+1-555-0123" },
//             { icon: "📧", label: "Email", detail: "hi@mllops.com" },
//             { icon: "💬", label: "Chat", detail: "Live support" },
//             { icon: "🚀", label: "Start", detail: "Free trial", primary: true }
//           ].map((item, idx) => (
//             <div key={idx} className="group relative">
//               <button className={`w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-lg font-medium shadow-lg hover:shadow-xl ${
//                 item.primary 
//                   ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600' 
//                   : 'bg-white hover:bg-rose-50 text-rose-600 border border-rose-100'
//               }`}>
//                 {item.icon}
//               </button>
              
//               {/* Desktop Tooltip */}
//               <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
//                 <div className="font-semibold">{item.label}</div>
//                 <div className="text-gray-300">{item.detail}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Compact Main Content */}
//       <div className={`relative  transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
//         {/* Hero Section - More Compact */}
//         <div className="pt-8 pb-4">
//           <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-8xl font-semibold text-black dark:text-white">
//               Unleash the power of <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 MLloOps
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <img
//           src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
          
//         </div>

//         {/* Compact Value Proposition Section */}
//         <section className="py-8 px-4">
//           <div className="max-w-6xl mx-auto">
            
//             {/* Animated Features Cards */}
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 <TextType 
//                   text={["Why choose MLloOps?"]}
//                   typingSpeed={80}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 <TextType 
//                   text={["Streamline your ML operations with our intelligent platform"]}
//                   typingSpeed={40}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </p>
//             </div>

//             {/* Compact Feature Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//               {[
//                 { 
//                   icon: "⚡", 
//                   title: "40% Faster", 
//                   subtitle: "Model Deployment",
//                   color: "from-yellow-400 to-orange-500"
//                 },
//                 { 
//                   icon: "🚀", 
//                   title: "99.9% Uptime", 
//                   subtitle: "Reliable Infrastructure",
//                   color: "from-blue-400 to-purple-500"
//                 },
//                 { 
//                   icon: "👥", 
//                   title: "2K+ Users", 
//                   subtitle: "Growing Community",
//                   color: "from-green-400 to-teal-500"
//                 }
//               ].map((feature, idx) => (
//                 <div 
//                   key={idx}
//                   className={`group relative p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isLoaded ? 'animate-slide-up' : ''}`}
//                   style={{ animationDelay: `${idx * 200}ms` }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
//                   <div className="relative  text-center">
//                     <div className="text-3xl mb-3 group-hover:animate-bounce">{feature.icon}</div>
//                     <div className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</div>
//                     <div className="text-sm text-gray-600">{feature.subtitle}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Compact CTA Section */}
//             <div className="bg-gradient-to-r from-rose-50/50 via-white/80 to-pink-50/50 backdrop-blur-md rounded-2xl border border-white/50 p-8 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
//               <p className="text-gray-600 mb-6">Join thousands of ML engineers worldwide</p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <button className="group px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center gap-2">
//                   <span>Start Free Trial</span>
//                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </button>
                
//                 <button className="px-8 py-3 border-2 border-rose-200 text-rose-600 rounded-full hover:bg-rose-50 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                   <span>Book Demo</span>
//                 </button>
//               </div>

//               <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
//                 <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span>No credit card • 14-day trial • Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Advanced CSS Animations */}
//       <style jsx>{`
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         @keyframes float-random {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-10px) translateX(-15px); }
//           75% { transform: translateY(-30px) translateX(5px); }
//         }
        
//         @keyframes slide-up {
//           0% { opacity: 0; transform: translateY(40px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes gradient-x {
//           0%, 100% { background-size: 200% 200%; background-position: left center; }
//           50% { background-size: 200% 200%; background-position: right center; }
//         }
        
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//           background-size: 200% 200%;
//         }
        
//         .animate-float-random {
//           animation: float-random 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Carouselflow;




// "use client";
// import React, { useEffect, useState } from "react";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import TextType from "../../components/ui/Text";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, ExternalLink } from "lucide-react";



// export function Carouselflow() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const navigate = useNavigate();


//   useEffect(() => {
//     setIsLoaded(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);


//   const openChatbot = () => {
//     console.log('Navigating to chatbot...');
//     navigate('/chatbot');
//   };


//   return (
//     <div className="relative  overflow-hidden ">
//       {/* Background animations - keep your existing code */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         <div className="absolute inset-0 opacity-[0.03]" 
//              style={{
//                backgroundImage: `linear-gradient(rgba(251, 113, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.3) 1px, transparent 1px)`,
//                backgroundSize: '50px 50px',
//                animation: 'gridMove 20s linear infinite'
//              }} 
//         />
        
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-20 animate-float-random"
//             // style={{
//             //   left: `${Math.random() * 100}%`,
//             //   top: `${Math.random() * 100}%`,
//             //   animationDelay: `${i * 2}s`,
//             //   animationDuration: `${8 + Math.random() * 4}s`
//             // }}
//           />
//         ))}
//       </div>


//       {/* Mobile Bottom CTA Bar */}
//       <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-3">
//         <div className="flex justify-between items-center gap-2">
//           {[
//             { icon: "📞", label: "Call", action: () => window.open('tel:+15550123') },
//             { icon: "📧", label: "Email", action: () => window.open('mailto:hi@mllops.com') },
//             { icon: "💬", label: "Chat", action: openChatbot },
//             { icon: "🚀", label: "Start", primary: true, action: openChatbot }
//           ].map((item, idx) => (
//             <button 
//               key={idx}
//               onClick={item.action}
//               className={`flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl transition-all duration-300 active:scale-95 ${
//                 item.primary 
//                   ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white' 
//                   : 'bg-rose-50 text-rose-600 border border-rose-100'
//               }`}
//             >
//               <span className="text-lg mb-1">{item.icon}</span>
//               <span className="text-xs font-medium">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>


//       {/* Desktop Floating CTA Panel */}
//       <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2  bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-2">
//         <div className="flex flex-col space-y-2">
//           {[
//             { icon: "📞", label: "Call", detail: "+1-555-0123", action: () => window.open('tel:+15550123') },
//             { icon: "📧", label: "Email", detail: "hi@mllops.com", action: () => window.open('mailto:hi@mllops.com') },
//             { icon: "💬", label: "Chat", detail: "Live support", action: openChatbot },
//             { icon: "🚀", label: "Start", detail: "Free trial", primary: true, action: openChatbot }
//           ].map((item, idx) => (
//             <div key={idx} className="group relative">
//               <button 
//                 onClick={item.action}
//                 className={`w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-lg font-medium shadow-lg hover:shadow-xl ${
//                   item.primary 
//                     ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white hover:from-rose-600 hover:to-red-600' 
//                     : 'bg-white hover:bg-rose-50 text-rose-600 border border-rose-100'
//                 }`}
//               >
//                 {item.icon}
//               </button>
              
//               <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
//                 <div className="font-semibold">{item.label}</div>
//                 <div className="text-gray-300">{item.detail}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       {/* Your existing content sections */}
//       <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//         <div className="pt-8 pb-4">
//           <ContainerScroll
//             titleComponent={
//               <>
//                 <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black dark:text-white">
//                  Transform with<br />
//                   <span className="text-2xl sm:text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                     MLloOps™
//                   </span>
//                 </h1>
//               </>
//             }
//           >
//             <div className="relative">
//               <img
//                 src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
//                 alt="hero"
//                 height={720}
//                 width={1400}
//                 className="mx-auto rounded-2xl object-cover h-full object-left-top"
//                 draggable={false}
//               />
//             </div>
//           </ContainerScroll>
//         </div>


//         {/* Rest of your existing content */}
//         <section className="py-8 px-4 pb-24 md:pb-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                 <TextType 
//                   text={["Why choose MLloOps?"]}
//                   typingSpeed={80}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//                 <TextType 
//                   text={["Streamline your ML operations with our intelligent platform"]}
//                   typingSpeed={40}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </p>
//             </div>


//             {/* Feature cards and CTA section with updated button */}
//             <div className="bg-gradient-to-r from-rose-50/50 via-white/80 to-red-50/50 backdrop-blur-md rounded-2xl border border-white/50 p-6 sm:p-8 text-center">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-6">Join thousands of ML engineers worldwide</p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 {/* <button 
//                   onClick={openChatbot}
//                   className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-full hover:from-rose-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
//                 >
//                   <span>Start Free Trial</span>
//                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </button>
                
//                 <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-rose-200 text-rose-600 rounded-full hover:bg-rose-50 transition-all duration-300 hover:scale-105 font-semibold flex items-center justify-center gap-2">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                   <span>Book Demo</span>
//                 </button> */}
                 
//       <button
//     onClick={() => navigate("/MLloOps")}
//     className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
//   >
//     Get Started Today
//     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//   </button>

//   {/* Contact Us Button */}
//   <a
//     href="https://mlloops.rbg.ai/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50"
//   >
//     <ExternalLink className="w-5 h-5 mr-2" />
//     Let’s Start with MLloOps
//   </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>


//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         @keyframes float-random {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-10px) translateX(-15px); }
//           75% { transform: translateY(-30px) translateX(5px); }
//         }
        
//         .animate-float-random {
//           animation: float-random 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


// export default Carouselflow;



"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import TextType from "../../components/ui/Text";
// import { useNavigate } from "react-router-dom"; // Commented out for artifact compatibility
import { ArrowRight, ExternalLink, Phone, Mail, MessageCircle, Rocket, X } from "lucide-react";

export function Carouselflow() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactOpen, setIsContactOpen] = useState(false);
  // const navigate = useNavigate(); // Commented out for artifact compatibility

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openChatbot = () => {
   
  };

  const contactOptions = [
    { 
      id: 'phone',
      icon: Phone, 
      label: "Call", 
      detail: "+1-555-0123", 
      action: () => window.open('tel:+15550123'),
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'email',
      icon: Mail, 
      label: "Email", 
      detail: "hi@mllops.com", 
      action: () => window.open('hr@rbg.ai'),
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 'chat',
      icon: MessageCircle, 
      label: "Chat", 
      detail: "Live support", 
      action: openChatbot,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 'start',
      icon: Rocket, 
      label: "Start", 
      detail: "Free trial", 
      action: openChatbot,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background animations - keep your existing code */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `linear-gradient(rgba(251, 113, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.3) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }} 
        />
        
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-20 animate-float-random"
          />
        ))}
      </div>

      {/* Mobile Floating Contact Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Backdrop overlay when open */}
          {isContactOpen && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsContactOpen(false)}
            />
          )}
          
          {/* Contact options - Mobile */}
          <div className={`absolute bottom-16 right-0 transition-all duration-500 transform ${
            isContactOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-3">
              {contactOptions.map((option, idx) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={option.id}
                    className="transform transition-all duration-300"
                    style={{
                      transitionDelay: isContactOpen ? `${idx * 100}ms` : '0ms'
                    }}
                  >
                    <button
                      onClick={() => {
                        option.action();
                        setIsContactOpen(false);
                      }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative`}
                    >
                      <IconComponent size={20} />
                      
                      {/* Tooltip */}
                      <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        <div className="font-semibold text-xs">{option.label}</div>
                        <div className="text-gray-300 text-xs">{option.detail}</div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main contact button - Mobile */}
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
              isContactOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
            }`}
          >
            {isContactOpen ? (
              <X size={24} />
            ) : (
              <MessageCircle size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Floating Contact Panel */}
      {/* <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
      
          <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            isContactOpen 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-3 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
              {contactOptions.map((option, idx) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={option.id}
                    className="transform transition-all duration-300"
                    style={{
                      transitionDelay: isContactOpen ? `${idx * 100}ms` : '0ms'
                    }}
                  >
                    <button
                      onClick={() => {
                        option.action();
                        setIsContactOpen(false);
                      }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative`}
                    >
                      <IconComponent size={18} />
                      
                  
                      <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        <div className="font-semibold text-sm">{option.label}</div>
                        <div className="text-gray-300 text-xs">{option.detail}</div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

   
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
              isContactOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
            }`}
          >
            {isContactOpen ? (
              <X size={24} />
            ) : (
              <MessageCircle size={24} />
            )}
          </button>
        </div>
      </div> */}

      {/* Desktop Floating Contact Panel */}
<div className="hidden md:flex fixed bottom-20 right-6 z-50">
  <div className="relative">
    {/* Contact options - Desktop */}
    <div
      className={`absolute bottom-16 right-0 transition-all duration-500 transform ${
        isContactOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex flex-col space-y-3 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
        {contactOptions.map((option, idx) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.id}
              className="transform transition-all duration-300"
              style={{
                transitionDelay: isContactOpen ? `${idx * 100}ms` : "0ms",
              }}
            >
              <button
                onClick={() => {
                  option.action();
                  setIsContactOpen(false);
                }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative`}
              >
                <IconComponent size={18} />

                {/* Tooltip */}
                <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  <div className="font-semibold text-sm">{option.label}</div>
                  <div className="text-gray-300 text-xs">{option.detail}</div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>

    {/* Main contact button - Desktop */}
    <button
      onClick={() => setIsContactOpen(!isContactOpen)}
      className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
        isContactOpen ? "rotate-45 scale-110" : "hover:scale-110"
      }`}
    >
      {isContactOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
  </div>
</div>


      {/* Your existing content sections */}
      <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="pt-8 pb-4">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black dark:text-white">
                 Transform with<br />
                  <span className="text-2xl sm:text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    MLloOps™
                  </span>
                </h1>
              </>
            }
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/datwcxi7y/image/upload/v1758274580/GIF_V2_wqinhg.gif"
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </div>
          </ContainerScroll>
        </div>

        {/* Rest of your existing content */}
        <section className="py-8 px-4 pb-24 md:pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                <TextType 
                  text={["Why choose MLloOps?"]}
                  typingSpeed={80}
                  loop={false}
                  pauseDuration={0}
                  showCursor={false}
                />
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                <TextType 
                  text={["Streamline your ML operations with our intelligent platform"]}
                  typingSpeed={40}
                  loop={false}
                  pauseDuration={0}
                  showCursor={false}
                />
              </p>
            </div>

            {/* Feature cards and main CTA section */}
            <div className="bg-gradient-to-r from-rose-50/50 via-white/80 to-red-50/50 backdrop-blur-md rounded-2xl border border-white/50 p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Join thousands of ML engineers worldwide</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                 
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://mlloops.rbg.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Let's Start with MLloOps
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Carouselflow;