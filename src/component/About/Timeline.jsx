// import { useState, useEffect, useRef } from "react";
// import {
//   ArrowUp,
//   Clock,
//   Building,
//   TrendingUp,
//   Code,
//   Briefcase,
//   Rocket,
//   Layers,
//   Users,
//   Database,
//   Building2,
//   FlaskConical,
//   Lightbulb,
//   FileSignature,
//   Handshake,
//   ServerCog,
// } from "lucide-react";

// function Component() {
//   const [active, setActive] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const timelineRef = useRef(null);
//   const [animatedItems, setAnimatedItems] = useState([]);

//   const timeline = [
//     {
//       year: 2020,
//       milestone: "Stealth Mode",
//       description: "Big ideas, quietly building the future",
//       resources: 2,
//       icon: <FlaskConical strokeWidth={1.5} />,
//     },
//     {
//       year: 2021,
//       milestone: "Incorporated",
//       description: "From vision to venture — officially in the game",
//       resources: 6,
//       work_locations: 1,
//       icon: <Building2 strokeWidth={1.5} />,
//     },
//     {
//       year: 2022,
//       milestone: "MLStack Launch",
//       description: "Laying the foundation for scalable machine learning",
//       resources: 12,
//       work_locations: 2,
//       icon: <Database strokeWidth={1.5} />,
//     },
//     {
//       year: 2023,
//       milestone: "Early Clients",
//       description: "Powering innovation at the world’s most admired workplaces",
//       resources: 15,
//       work_locations: 3,
//       icon: <Handshake strokeWidth={1.5} />,
//     },
//     {
//       year: 2024,
//       milestone: "MLloOps Launch",
//       description: "Operationalizing ML at enterprise scale",
//       resources: 17,
//       work_locations: 3,
//       icon: <Rocket strokeWidth={1.5} />,
//     },
//     {
//       year: 2025,
//       milestone: "Growth Phase",
//       description: "Scaling impact — from niche to necessity",
//       resources: 20,
//       work_locations: 3,
//       icon: <TrendingUp strokeWidth={1.5} />,
//     },
//   ];

//   // Handle intersection observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);

//           // Animate items one by one
//           const timer = setTimeout(() => {
//             const animations = [];
//             timeline.forEach((_, index) => {
//               setTimeout(() => {
//                 setAnimatedItems((prev) => [...prev, index]);
//               }, index * 300);
//             });
//           }, 200);

//           return () => clearTimeout(timer);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current);
//     }

//     return () => {
//       if (timelineRef.current) {
//         observer.unobserve(timelineRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="font-sans max-w-7xl mx-auto px-4 py-12" ref={timelineRef}>
//       {/* Header with animated underline */}
//       <div className="flex justify-between items-center mb-16">
//         <h1 className="text-6xl font-bold relative">
//           <span
//             className={`inline-block transition-all duration-700 ease-out ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             Growing
//           </span>
//           <div
//             className={`absolute bottom-0 left-0 h-1 bg-blue-200 dark:bg-white transition-all duration-1000 ease-out ${
//               isVisible ? "w-full" : "w-0"
//             }`}
//           ></div>
//         </h1>

//         <div
//           className={`flex items-center gap-2 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
//           }`}
//         >
//           <ArrowUp size={16} className="animate-bounce" />
//           <span className="text-xl font-medium">2X Growth Each Year</span>
//         </div>
//       </div>

//       {/* Main timeline section */}
//       <div className="relative">
//         {/* Center vertical line - desktop */}
//         <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300 dark:bg-gray-700">
//           <div
//             className="w-full bg-blue-200 dark:bg-white transition-all duration-2000 ease-out"
//             style={{ height: isVisible ? "100%" : "0%", transitionDelay: "300ms" }}
//           ></div>
//         </div>

//         {/* Alternating items - desktop */}
//         <div className="hidden md:block relative">
//           <div className="space-y-12">
//             {timeline.map((item, index) => {
//               const isLeft = index % 2 === 0;
//               return (
//                 <div key={index} className="relative" onMouseEnter={() => setActive(index)}>
//                   {/* Center diamond node */}
//                   <div className="absolute left-1/2 -translate-x-1/2 top-3">
//                     <div className="w-10 h-10 rotate-45 rounded-md border border-red-500 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-center">
//                       <div className="-rotate-45">{item.icon}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     {isLeft ? (
//                       <div className="w-1/2 pr-12 relative">
//                         <span className="absolute top-6 right-0 w-10 h-px bg-gray-300 dark:bg-gray-700"></span>
//                         <div
//                           className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-700 ease-out ${
//                             active === index ? "shadow-lg -translate-y-2" : ""
//                           } ${
//                             animatedItems.includes(index)
//                               ? "opacity-100 translate-x-0"
//                               : "opacity-0 -translate-x-8"
//                           }`}
//                           style={{ transitionDelay: `${index * 100}ms` }}
//                         >
//                           <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{item.year}</div>
//                           <h3 className="text-xl font-bold mb-1">{item.milestone}</h3>
//                           <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
//                           <div className="space-y-3">
//                             <div>
//                               <div className="flex justify-between text-sm mb-1">
//                                 <span>Team</span>
//                                 <span>{item.resources}</span>
//                               </div>
//                               <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                 <div
//                                   className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                                   style={{
//                                     width: animatedItems.includes(index) ? `${(item.resources / 23) * 100}%` : "0%",
//                                     transitionDelay: `${index * 100 + 300}ms`,
//                                   }}
//                                 ></div>
//                               </div>
//                             </div>
//                             {item.work_locations && (
//                               <div>
//                                 <div className="flex justify-between text-sm mb-1">
//                                   <span>Locations</span>
//                                   <span>{item.work_locations}</span>
//                                 </div>
//                                 <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                   <div
//                                     className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                                     style={{
//                                       width: animatedItems.includes(index) ? `${(item.work_locations / 4) * 100}%` : "0%",
//                                       transitionDelay: `${index * 100 + 500}ms`,
//                                     }}
//                                   ></div>
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="w-1/2"></div>
//                     )}

//                     {!isLeft ? (
//                       <div className="w-1/2 pl-12 relative">
//                         <span className="absolute top-6 left-0 w-10 h-px bg-gray-300 dark:bg-gray-700"></span>
//                         <div
//                           className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-700 ease-out ${
//                             active === index ? "shadow-lg -translate-y-2" : ""
//                           } ${
//                             animatedItems.includes(index)
//                               ? "opacity-100 translate-x-0"
//                               : "opacity-0 translate-x-8"
//                           }`}
//                           style={{ transitionDelay: `${index * 100}ms` }}
//                         >
//                           <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{item.year}</div>
//                           <h3 className="text-xl font-bold mb-1">{item.milestone}</h3>
//                           <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
//                           <div className="space-y-3">
//                             <div>
//                               <div className="flex justify-between text-sm mb-1">
//                                 <span>Team</span>
//                                 <span>{item.resources}</span>
//                               </div>
//                               <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                 <div
//                                   className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                                   style={{
//                                     width: animatedItems.includes(index) ? `${(item.resources / 23) * 100}%` : "0%",
//                                     transitionDelay: `${index * 100 + 300}ms`,
//                                   }}
//                                 ></div>
//                               </div>
//                             </div>
//                             {item.work_locations && (
//                               <div>
//                                 <div className="flex justify-between text-sm mb-1">
//                                   <span>Locations</span>
//                                   <span>{item.work_locations}</span>
//                                 </div>
//                                 <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                   <div
//                                     className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                                     style={{
//                                       width: animatedItems.includes(index) ? `${(item.work_locations / 4) * 100}%` : "0%",
//                                       transitionDelay: `${index * 100 + 500}ms`,
//                                     }}
//                                   ></div>
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="w-1/2"></div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile timeline - vertical layout */}
//         <div className="md:hidden relative">
//           {/* Vertical connecting line */}
//           <div className="absolute left-10 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700">
//             <div
//               className="w-full bg-blue-200 dark:bg-white transition-all duration-2000 ease-out"
//               style={{
//                 height: isVisible ? "100%" : "0%",
//                 transitionDelay: "300ms",
//               }}
//             ></div>
//           </div>

//           {/* Timeline items - mobile */}
//           <div className="space-y-12">
//             {timeline.map((item, index) => (
//               <div key={index} className="relative">
//                 {/* Icon with year */}
//                 <div className="flex items-center mb-4">
//                   <div
//                     className={`relative flex items-center justify-center w-20 h-20 rounded-full border border-red-500 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-500 ${
//                       animatedItems.includes(index)
//                         ? "opacity-100"
//                         : "opacity-0"
//                     }`}
//                   >
//                     {item.icon}
//                     <div className="absolute -bottom-8 left-0 right-0 text-center font-medium">
//                       {item.year}
//                     </div>
//                   </div>

//                   <div className="ml-6">
//                     <h3
//                       className={`text-xl font-bold transition-all duration-500 ${
//                         animatedItems.includes(index)
//                           ? "opacity-100 translate-x-0"
//                           : "opacity-0 -translate-x-4"
//                       }`}
//                     >
//                       {item.milestone}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Content card - mobile */}
//                 <div
//                   className={`ml-28 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-700 ease-out ${
//                     animatedItems.includes(index)
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-8"
//                   }`}
//                   style={{ transitionDelay: `${index * 100 + 200}ms` }}
//                 >
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                     {item.description}
//                   </p>

//                   {/* Progress bars */}
//                   <div className="space-y-3">
//                     <div>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span>Team</span>
//                         <span>{item.resources}</span>
//                       </div>
//                       <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                         <div
//                           className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                           style={{
//                             width: animatedItems.includes(index)
//                               ? `${(item.resources / 23) * 100}%`
//                               : "0%",
//                             transitionDelay: `${index * 100 + 400}ms`,
//                           }}
//                         ></div>
//                       </div>
//                     </div>

//                     {item.work_locations && (
//                       <div>
//                         <div className="flex justify-between text-sm mb-1">
//                           <span>Locations</span>
//                           <span>{item.work_locations}</span>
//                         </div>
//                         <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                           <div
//                             className="h-full bg-blue-200 dark:bg-white rounded-full transition-all duration-1000 ease-out"
//                             style={{
//                               width: animatedItems.includes(index)
//                                 ? `${(item.work_locations / 4) * 100}%`
//                                 : "0%",
//                               transitionDelay: `${index * 100 + 600}ms`,
//                             }}
//                           ></div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Growth metrics */}
//       <div
//         className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//         style={{ transitionDelay: "800ms" }}
//       >
//         <div className="border border-red-500 dark:border-gray-700 p-6 rounded-lg group hover:shadow-lg transition-all duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold">Team Growth</h3>
//             <div className="p-2 rounded-full border border-red-500 dark:border-gray-700 group-hover:border-red-500 dark:group-hover:border-white transition-all duration-300">
//               <Rocket size={24} className="group-hover:animate-pulse" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold">2 to 20</p>
//           <div className="mt-4 h-1 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
//             <div className="h-full bg-blue-200 dark:bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
//           </div>
//         </div>

//         <div className="border border-red-500 dark:border-gray-700 p-6 rounded-lg group hover:shadow-lg transition-all duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold">Global Presence</h3>
//             <div className="p-2 rounded-full border border-red-500 dark:border-gray-700 group-hover:border-red-500 dark:group-hover:border-white transition-all duration-300">
//               <Building size={24} className="group-hover:animate-pulse" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold">3 Locations</p>
//           <div className="mt-4 h-1 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
//             <div className="h-full bg-blue-200 dark:bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
//           </div>
//         </div>

//         <div className="border border-red-500 dark:border-gray-700 p-6 rounded-lg group hover:shadow-lg transition-all duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold">Product Suite</h3>
//             <div className="p-2 rounded-full border border-red-500 dark:border-gray-700 group-hover:border-red-500 dark:group-hover:border-white transition-all duration-300">
//               <Code size={24} className="group-hover:animate-pulse" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold">2 Platforms</p>
//           <div className="mt-4 h-1 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
//             <div className="h-full bg-blue-200 dark:bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Component;


import { useState, useEffect, useRef } from "react";

function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  const timeline = [
    {
      year: "2020",
      milestone: "Stealth Mode",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer",
    },
    {
      year: "2021", 
      milestone: "Incorporated",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer",
    },
    {
      year: "2022",
      milestone: "MLStack Launch", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer",
    },
    {
      year: "2023",
      milestone: "Early Clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer", 
    },
    {
      year: "2024",
      milestone: "MLloOps Launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer",
    },
    {
      year: "2025",
      milestone: "Growth Phase", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie auctor tellus lorem, et condimentum neque commodo Integer",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          timeline.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems((prev) => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16  min-h-screen" ref={timelineRef}>
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className="relative mb-20">
                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div 
                    className="absolute top-20 left-1/2 w-1 h-20 transform -translate-x-1/2 z-10"
                    style={{
                      background: 'linear-gradient(180deg, #fb7185 0%, #fb7185 50%, #f97316 100%)',
                      opacity: animatedItems.includes(index) ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      transitionDelay: `${index * 300 + 200}ms`
                    }}
                  />
                )}
                
                <div className="flex items-start relative">
                  {isLeft ? (
                    <>
                      {/* Left side card */}
                      <div className="w-5/12 pr-12">
                        <div
                          className={`bg-white rounded-3xl p-8 shadow-xl border-0 relative transition-all duration-700 ease-out ${
                            animatedItems.includes(index)
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-8"
                          }`}
                          style={{
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                          }}
                        >
                          <p className="text-gray-600 text-base leading-relaxed mb-6">
                            {item.description}
                          </p>
                          <div className="text-center">
                            <h3 className="text-orange-600 font-bold text-lg">
                              {item.milestone}
                            </h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Center circle */}
                      <div className="w-2/12 flex justify-center relative z-20">
                        <div
                          className={`w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl transition-all duration-500 relative ${
                            animatedItems.includes(index) ? "scale-100 opacity-100" : "scale-75 opacity-0"
                          }`}
                          style={{
                            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                          }}
                        >
                          {/* Orange semicircle at top */}
                          <div 
                            className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-24 h-12 rounded-t-full"
                            style={{
                              background: 'linear-gradient(90deg, #fb7185 0%, #f97316 100%)'
                            }}
                          />
                          <div className="text-center relative z-10 bg-white rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="text-orange-600 font-bold text-2xl">
                              {item.year}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      
                      {/* Center circle */}
                      <div className="w-2/12 flex justify-center relative z-20">
                        <div
                          className={`w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl transition-all duration-500 relative ${
                            animatedItems.includes(index) ? "scale-100 opacity-100" : "scale-75 opacity-0"
                          }`}
                          style={{
                            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                          }}
                        >
                          {/* Orange semicircle at top */}
                          <div 
                            className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-24 h-12 rounded-t-full"
                            style={{
                              background: 'linear-gradient(90deg, #fb7185 0%, #f97316 100%)'
                            }}
                          />
                          <div className="text-center relative z-10 bg-white rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="text-orange-600 font-bold text-2xl">
                              {item.year}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side card */}
                      <div className="w-5/12 pl-12">
                        <div
                          className={`bg-white rounded-3xl p-8 shadow-xl border-0 relative transition-all duration-700 ease-out ${
                            animatedItems.includes(index)
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-8"
                          }`}
                          style={{
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                          }}
                        >
                          <p className="text-gray-600 text-base leading-relaxed mb-6">
                            {item.description}
                          </p>
                          <div className="text-center">
                            <h3 className="text-orange-600 font-bold text-lg">
                              {item.milestone}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < timeline.length - 1 && (
                <div 
                  className="absolute left-14 top-28 w-1 h-12 z-10"
                  style={{
                    background: 'linear-gradient(180deg, #fb7185 0%, #f97316 100%)',
                    opacity: animatedItems.includes(index) ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    transitionDelay: `${index * 300 + 200}ms`
                  }}
                />
              )}
              
              <div className="flex items-start gap-8">
                {/* Circle */}
                <div
                  className={`w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl flex-shrink-0 transition-all duration-500 relative ${
                    animatedItems.includes(index) ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                  }}
                >
                  {/* Orange semicircle at top */}
                  <div 
                    className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-24 h-12 rounded-t-full"
                    style={{
                      background: 'linear-gradient(90deg, #fb7185 0%, #f97316 100%)'
                    }}
                  />
                  <div className="text-center relative z-10 bg-white rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="text-orange-600 font-bold text-xl">
                      {item.year}
                    </div>
                  </div>
                </div>
                
                {/* Card */}
                <div
                  className={`bg-white rounded-3xl p-6 shadow-xl border-0 flex-1 transition-all duration-700 ease-out ${
                    animatedItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                  }}
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <h3 className="text-orange-600 font-bold text-base">
                      {item.milestone}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component;