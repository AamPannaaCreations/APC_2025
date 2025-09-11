// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { Code, Share2, User, Palette, TrendingUp, Clock } from "lucide-react";

// // interface Service {
// //   id: number;
// //   title: string;
// //   description: string;
// //   icon: React.ReactNode;
// // }

// // interface Client {
// //   name: string;
// //   color: string;
// // }

// // const servicesData: Service[] = [
// //   {
// //     id: 1,
// //     title: "Web Design & Development",
// //     description: "Creating modern, responsive websites and web applications with cutting-edge technologies.",
// //     icon: <Code size={32} />
// //   },
// //   {
// //     id: 2,
// //     title: "Social Media Management",
// //     description: "Strategic social media planning and content creation to boost your online presence.",
// //     icon: <Share2 size={32} />
// //   },
// //   {
// //     id: 3,
// //     title: "Personal Branding",
// //     description: "Build a strong personal brand that resonates with your target audience.",
// //     icon: <User size={32} />
// //   },
// //   {
// //     id: 4,
// //     title: "UI/UX Design",
// //     description: "Intuitive and beautiful user interface designs that enhance user experience.",
// //     icon: <Palette size={32} />
// //   },
// //   {
// //     id: 5,
// //     title: "Digital Marketing",
// //     description: "Comprehensive digital marketing strategies to grow your business online.",
// //     icon: <TrendingUp size={32} />
// //   },
// // ];

// // const clientLogos: Client[] = [
// //   { name: "ClayLab", color: "#3B82F6" },
// //   { name: "Wolnut", color: "#10B981" },
// //   { name: "Jyotsna Singh", color: "#8B5CF6" },
// //   { name: "CreatorDesk", color: "#F59E0B" },
// //   { name: "Little Pineapple", color: "#EF4444" },
// //   { name: "aksh-e-sarfiri", color: "#06B6D4" },
// //   { name: "Josh App", color: "#84CC16" },
// //   { name: "kancha", color: "#F97316" },
// //   { name: "Luminary Pathways", color: "#EC4899" },
// //   { name: "Minsstance", color: "#6366F1" },
// //   { name: "One7 Sports", color: "#14B8A6" },
// // ];

// // const Services: React.FC = () => {
// //   const [activeIndex, setActiveIndex] = useState<number>(0);

// //   // Auto carousel effect
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % servicesData.length);
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const generateCircularIcons = () => {
// //     const radius = 200;
// //     const totalIcons = servicesData.length;
// //     const angleStep = 180 / (totalIcons - 1);
// //     const startAngle = -90;

// //     return servicesData.map((service, index) => {
// //       const angle = startAngle + index * angleStep;
// //       const x = Math.cos((angle * Math.PI) / 150) * radius;
// //       const y = Math.sin((angle * Math.PI) / 170) * radius;

// //       return {
// //         ...service,
// //         active: index === activeIndex,
// //         x: x,
// //         y: y,
// //       };
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen ">

// //       {/* Desktop Version - Fixed visibility */}
// //       <div className="hidden lg:flex items-center justify-between min-h-screen relative overflow-hidden left-0 ">

// //         {/* Left Side - Circular Layout - Completely attached to left wall */}
// //         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-full flex items-center ">
// //           <div className="relative w-full h-80 flex items-center justify-center ml-[-60px]">
// //             {generateCircularIcons().map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="absolute transition-all duration-700 ease-out cursor-pointer group"
// //                 style={{
// //                   left: `calc(50% + ${item.x}px)`,
// //                   top: `calc(50% + ${item.y}px)`,
// //                   transform: `translate(-50%, -50%) ${
// //                     item.active ? "scale(1.15)" : "scale(1)"
// //                   }`,
// //                 }}
// //                 onClick={() => setActiveIndex(index)}
// //               >
// //                 <div
// //                   className={`
// //                     w-30 h-30 rounded-2xl shadow-lg flex items-center justify-center
// //                     transition-all duration-700 border-2
// //                     ${
// //                       item.active
// //                         ? "bg-gradient-to-br from-orange-400 to-pink-500 border-white shadow-2xl"
// //                         : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl"
// //                     }
// //                     group-hover:scale-105
// //                   `}
// //                 >
// //                   <div className={item.active ? "text-white" : "text-gray-600 group-hover:text-orange-500"}>
// //                     {item.icon}
// //                   </div>
// //                 </div>
                
// //                 {/* Service title below icon */}
// //                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-28">
// //                   <p className={`text-xs text-center font-medium transition-colors duration-300 ${
// //                     item.active ? "text-orange-600" : "text-gray-500"
// //                   }`}>
// //                     {/* {item.title} */}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
            
// //             {/* Center decoration */}
// //             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //               <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Center Content - Properly centered */}
// //         <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-8">
// //           <div className="text-center space-y-6">
// //             <div className="overflow-hidden">
// //               <h2 className="text-4xl xl:text-7xl font-bold text-gray-800 leading-tight transition-all duration-700 transform">
// //                 {servicesData[activeIndex].title}
// //               </h2>
// //             </div>
// //             <div className="overflow-hidden">
// //               <p className="text-gray-600 leading-relaxed text-lg xl:text-xl transition-all duration-700 transform">
// //                 {servicesData[activeIndex].description}
// //               </p>
// //             </div>
            
// //             {/* Progress indicators */}
// //             <div className="flex justify-center gap-2 pt-4">
// //               {servicesData.map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                     index === activeIndex ? "bg-orange-500 scale-125" : "bg-gray-300"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side - Client Logos - Completely attached to right wall */}
// //         <div className="absolute right-0 top-0 h-screen overflow-hidden w-40">
// //           <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent z-10 backdrop-blur-sm"></div>
// //           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent z-10 backdrop-blur-sm"></div>

// //           <div className="animate-scroll-vertical pt-8 mr-4">
// //             {/* First set */}
// //             {clientLogos.map((client, i) => (
// //               <div
// //                 key={`first-${i}`}
// //                 className="flex-shrink-0 w-32 h-20 border border-gray-200 rounded-xl mb-4 mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
// //               >
// //                 <div
// //                   className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
// //                   style={{ backgroundColor: client.color }}
// //                 >
// //                   {client.name.charAt(0)}
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Duplicate for seamless loop */}
// //             {clientLogos.map((client, i) => (
// //               <div
// //                 key={`second-${i}`}
// //                 className="flex-shrink-0 w-32 h-20 border border-gray-200 rounded-xl mb-4 mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
// //               >
// //                 <div
// //                   className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
// //                   style={{ backgroundColor: client.color }}
// //                 >
// //                   {client.name.charAt(0)}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>

// //       {/* Tablet Version */}
// //       <div className="md:block lg:hidden hidden">
// //         <div className="h-screen flex flex-col items-center justify-center px-8">
// //           {/* Top Icons Row */}
// //           <div className="flex justify-center gap-6 mb-12">
// //             {servicesData.map((service, index) => (
// //               <div
// //                 key={index}
// //                 className={`
// //                   w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center
// //                   transition-all duration-500 cursor-pointer border-2
// //                   ${
// //                     index === activeIndex
// //                       ? "bg-gradient-to-br from-orange-400 to-pink-500 border-white shadow-2xl scale-110"
// //                       : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl hover:scale-105"
// //                   }
// //                 `}
// //                 onClick={() => setActiveIndex(index)}
// //               >
// //                 <div className={index === activeIndex ? "text-white" : "text-gray-600"}>
// //                   {service.icon}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Center Content */}
// //           <div className="text-center max-w-2xl">
// //             <h2 className="text-4xl font-bold text-gray-800 mb-6">
// //               {servicesData[activeIndex].title}
// //             </h2>
// //             <p className="text-gray-600 leading-relaxed text-xl">
// //               {servicesData[activeIndex].description}
// //             </p>
// //           </div>

// //           {/* Bottom Client Logos */}
// //           <div className="mt-12 w-full overflow-hidden">
// //             <div className="flex animate-scroll-horizontal">
// //               {clientLogos.concat(clientLogos).map((client, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex-shrink-0 w-24 h-16 border border-gray-200 rounded-lg mx-2 bg-white shadow-sm flex items-center justify-center"
// //                 >
// //                   <div
// //                     className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-xs"
// //                     style={{ backgroundColor: client.color }}
// //                   >
// //                     {client.name.charAt(0)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Version */}
// //       <div className="md:hidden min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-8">
// //         {/* Header */}
// //         <div className="text-center mb-8 px-4">
// //           <h1 className="text-2xl font-bold text-gray-800 mb-2">Our Services</h1>
// //           <p className="text-gray-600 text-sm">Tap on any service to learn more</p>
// //         </div>

// //         {/* Service Cards Grid */}
// //         <div className="grid grid-cols-2 gap-4 px-4 mb-8">
// //           {servicesData.map((service, index) => (
// //             <div
// //               key={index}
// //               className={`
// //                 p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer
// //                 ${
// //                   index === activeIndex
// //                     ? "bg-gradient-to-br from-orange-400 to-pink-500 border-orange-300 shadow-2xl scale-105"
// //                     : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
// //                 }
// //               `}
// //               onClick={() => setActiveIndex(index)}
// //             >
// //               <div className="flex flex-col items-center text-center space-y-3">
// //                 <div className={`
// //                   w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
// //                   ${index === activeIndex ? "bg-white/20" : "bg-gray-100"}
// //                 `}>
// //                   <div className={index === activeIndex ? "text-white" : "text-gray-600"}>
// //                     {service.icon}
// //                   </div>
// //                 </div>
// //                 <h3 className={`
// //                   text-sm font-semibold leading-tight transition-colors duration-300
// //                   ${index === activeIndex ? "text-white" : "text-gray-800"}
// //                 `}>
// //                   {service.title}
// //                 </h3>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Active Service Description */}
// //         <div className="px-4 mb-8">
// //           <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //             <div className="flex items-start gap-4">
// //               <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
// //                 <div className="text-white">
// //                   {servicesData[activeIndex].icon}
// //                 </div>
// //               </div>
// //               <div>
// //                 <h3 className="text-lg font-bold text-gray-800 mb-2">
// //                   {servicesData[activeIndex].title}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed text-sm">
// //                   {servicesData[activeIndex].description}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Progress Bar */}
// //         <div className="px-4 mb-8">
// //           <div className="flex justify-center gap-2">
// //             {servicesData.map((_, index) => (
// //               <div
// //                 key={index}
// //                 className={`h-1 rounded-full transition-all duration-500 ${
// //                   index === activeIndex ? "bg-orange-500 w-8" : "bg-gray-300 w-2"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Client Logos Section */}
// //         <div className="px-4">
// //           <h3 className="text-lg font-bold text-gray-800 text-center mb-6">Trusted by Amazing Clients</h3>
          
// //           <div className="relative overflow-hidden h-32 rounded-2xl">
// //             <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
// //             <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
            
// //             <div className="grid grid-cols-3 gap-3 animate-fade-cycle">
// //               {clientLogos.slice(0, 9).map((client, i) => (
// //                 <div
// //                   key={i}
// //                   className="w-full h-16 border border-gray-200 rounded-xl bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
// //                 >
// //                   <div
// //                     className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
// //                     style={{ backgroundColor: client.color }}
// //                   >
// //                     {client.name.charAt(0)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Action */}
// //         <div className="px-4 mt-8">
// //           <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
// //             Get Started Today
// //           </button>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes scroll-vertical {
// //           0% { transform: translateY(0); }
// //           100% { transform: translateY(-50%); }
// //         }
        
// //         @keyframes scroll-horizontal {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
        
// //         @keyframes fade-cycle {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0.7; }
// //         }

// //         .animate-scroll-vertical {
// //           animation: scroll-vertical 25s linear infinite;
// //         }
        
// //         .animate-scroll-horizontal {
// //           animation: scroll-horizontal 30s linear infinite;
// //         }
        
// //         .animate-fade-cycle {
// //           animation: fade-cycle 4s ease-in-out infinite;
// //         }
// //       `}</style>

// //     </div>
// //   );
// // };

// // export default Services;




// import React, { useState, useEffect } from 'react';

// const TextAnimationsDemo = () => {
//   const [currentDemo, setCurrentDemo] = useState(0);
  
//   const demos = [
//     { name: 'Typewriter', id: 'typewriter' },
//     { name: 'Fade Words', id: 'fadeWords' },
//     { name: 'Slide Up', id: 'slideUp' },
//     { name: 'Text Reveal', id: 'textReveal' },
//     { name: 'Split Letters', id: 'splitLetters' },
//     { name: 'Glitch Effect', id: 'glitch' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-white mb-4">Text Animation Showcase</h1>
//           <p className="text-gray-300">Different ways to animate text for engaging web experiences</p>
//         </div>

//         {/* Demo Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {demos.map((demo, index) => (
//             <button
//               key={demo.id}
//               onClick={() => setCurrentDemo(index)}
//               className={`px-6 py-3 rounded-full transition-all duration-300 ${
//                 currentDemo === index
//                   ? 'bg-purple-600 text-white shadow-lg'
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }`}
//             >
//               {demo.name}
//             </button>
//           ))}
//         </div>

//         {/* Animation Demos */}
//         <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
//           {currentDemo === 0 && <TypewriterDemo />}
//           {currentDemo === 1 && <FadeWordsDemo />}
//           {currentDemo === 2 && <SlideUpDemo />}
//           {currentDemo === 3 && <TextRevealDemo />}
//           {currentDemo === 4 && <SplitLettersDemo />}
//           {currentDemo === 5 && <GlitchDemo />}
//         </div>

//         {/* Code Examples */}
//         <div className="mt-12 bg-gray-900 rounded-2xl p-6">
//           <h3 className="text-xl font-semibold text-white mb-4">How it's done:</h3>
//           <div className="bg-black rounded-lg p-4 overflow-x-auto">
//             <CodeExample currentDemo={currentDemo} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // 1. Typewriter Effect
// const TypewriterDemo = () => {
//   const [displayText, setDisplayText] = useState('');
//   const fullText = "We create amazing digital experiences that captivate and inspire.";
  
//   useEffect(() => {
//     let currentIndex = 0;
//     const timer = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setDisplayText(fullText.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(timer);
//         // Reset after completion
//         setTimeout(() => {
//           setDisplayText('');
//           currentIndex = 0;
//         }, 2000);
//       }
//     }, 50);
    
//     return () => clearInterval(timer);
//   }, []);
  
//   return (
//     <div className="text-center">
//       <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
//         {displayText}
//         <span className="animate-pulse">|</span>
//       </h2>
//     </div>
//   );
// };

// // 2. Fade Words Effect
// const FadeWordsDemo = () => {
//   const words = ["Beautiful", "websites", "start", "with", "great", "typography"];
//   const [visibleWords, setVisibleWords] = useState([]);
  
//   useEffect(() => {
//     setVisibleWords([]);
//     words.forEach((_, index) => {
//       setTimeout(() => {
//         setVisibleWords(prev => [...prev, index]);
//       }, index * 300);
//     });
//   }, []);
  
//   return (
//     <div className="text-center">
//       <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//         {words.map((word, index) => (
//           <span
//             key={index}
//             className={`inline-block mr-4 transition-all duration-500 ${
//               visibleWords.includes(index)
//                 ? 'opacity-100 transform translate-y-0'
//                 : 'opacity-0 transform translate-y-4'
//             }`}
//           >
//             {word}
//           </span>
//         ))}
//       </h2>
//     </div>
//   );
// };

// // 3. Slide Up Effect
// const SlideUpDemo = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     setIsVisible(false);
//     const timer = setTimeout(() => setIsVisible(true), 200);
//     return () => clearTimeout(timer);
//   }, []);
  
//   return (
//     <div className="text-center overflow-hidden">
//       <h2 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-1000 ${
//         isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
//       }`}>
//         Slide into view
//       </h2>
//       <p className={`text-xl text-gray-300 mt-6 transition-all duration-1000 delay-300 ${
//         isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
//       }`}>
//         With smooth animations
//       </p>
//     </div>
//   );
// };

// // 4. Text Reveal Effect
// const TextRevealDemo = () => {
//   const [revealed, setRevealed] = useState(false);
  
//   useEffect(() => {
//     setRevealed(false);
//     const timer = setTimeout(() => setRevealed(true), 300);
//     return () => clearTimeout(timer);
//   }, []);
  
//   return (
//     <div className="text-center">
//       <div className="relative inline-block">
//         <h2 className="text-4xl md:text-6xl font-bold text-white">
//           Hidden text reveals
//         </h2>
//         <div className={`absolute inset-0 bg-purple-600 transition-all duration-1000 ${
//           revealed ? 'transform translate-x-full' : 'transform translate-x-0'
//         }`}></div>
//       </div>
//     </div>
//   );
// };

// // 5. Split Letters Effect
// const SplitLettersDemo = () => {
//   const text = "AMAZING";
//   const [animatedLetters, setAnimatedLetters] = useState([]);
  
//   useEffect(() => {
//     setAnimatedLetters([]);
//     text.split('').forEach((_, index) => {
//       setTimeout(() => {
//         setAnimatedLetters(prev => [...prev, index]);
//       }, index * 100);
//     });
//   }, []);
  
//   return (
//     <div className="text-center">
//       <h2 className="text-4xl md:text-6xl font-bold">
//         {text.split('').map((letter, index) => (
//           <span
//             key={index}
//             className={`inline-block transition-all duration-500 ${
//               animatedLetters.includes(index)
//                 ? 'text-yellow-400 transform rotate-0 scale-100 opacity-100'
//                 : 'text-gray-600 transform rotate-12 scale-150 opacity-0'
//             }`}
//             style={{ transitionDelay: `${index * 50}ms` }}
//           >
//             {letter}
//           </span>
//         ))}
//       </h2>
//     </div>
//   );
// };

// // 6. Glitch Effect
// const GlitchDemo = () => {
//   const [glitching, setGlitching] = useState(false);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlitching(true);
//       setTimeout(() => setGlitching(false), 200);
//     }, 2000);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className="text-center">
//       <h2 className={`text-4xl md:text-6xl font-bold text-white relative ${
//         glitching ? 'animate-pulse' : ''
//       }`}>
//         <span className={`${glitching ? 'text-red-500' : ''}`}>
//           GLITCH EFFECT
//         </span>
//         {glitching && (
//           <>
//             <span className="absolute top-0 left-0 text-cyan-400 opacity-70 transform translate-x-1">
//               GLITCH EFFECT
//             </span>
//             <span className="absolute top-0 left-0 text-yellow-400 opacity-70 transform -translate-x-1">
//               GLITCH EFFECT
//             </span>
//           </>
//         )}
//       </h2>
//     </div>
//   );
// };

// // Code Examples
// const CodeExample = ({ currentDemo }) => {
//   const codeExamples = [
//     `// Typewriter Effect
// const [displayText, setDisplayText] = useState('');
// const fullText = "Your text here...";

// useEffect(() => {
//   let currentIndex = 0;
//   const timer = setInterval(() => {
//     if (currentIndex <= fullText.length) {
//       setDisplayText(fullText.slice(0, currentIndex));
//       currentIndex++;
//     }
//   }, 50);
//   return () => clearInterval(timer);
// }, []);`,

//     `// Fade Words Effect
// const words = ["Word", "by", "word", "animation"];
// const [visibleWords, setVisibleWords] = useState([]);

// useEffect(() => {
//   words.forEach((_, index) => {
//     setTimeout(() => {
//       setVisibleWords(prev => [...prev, index]);
//     }, index * 300);
//   });
// }, []);

// // CSS
// .word {
//   transition: all 0.5s ease;
//   opacity: 0;
//   transform: translateY(20px);
// }
// .word.visible {
//   opacity: 1;
//   transform: translateY(0);
// }`,

//     `// Slide Up Effect
// const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   setTimeout(() => setIsVisible(true), 200);
// }, []);

// // CSS
// .slide-up {
//   transition: all 1s ease;
//   transform: translateY(100%);
//   opacity: 0;
// }
// .slide-up.visible {
//   transform: translateY(0);
//   opacity: 1;
// }`,

//     `// Text Reveal Effect
// const [revealed, setRevealed] = useState(false);

// useEffect(() => {
//   setTimeout(() => setRevealed(true), 300);
// }, []);

// // CSS
// .text-reveal {
//   position: relative;
//   overflow: hidden;
// }
// .reveal-overlay {
//   position: absolute;
//   inset: 0;
//   background: #8b5cf6;
//   transition: transform 1s ease;
//   transform: translateX(${revealed ? '100%' : '0'});
// }`,

//     `// Split Letters Effect
// const text = "AMAZING";
// const [animatedLetters, setAnimatedLetters] = useState([]);

// useEffect(() => {
//   text.split('').forEach((_, index) => {
//     setTimeout(() => {
//       setAnimatedLetters(prev => [...prev, index]);
//     }, index * 100);
//   });
// }, []);`,

//     `// Glitch Effect CSS
// .glitch {
//   position: relative;
// }
// .glitch::before,
// .glitch::after {
//   content: attr(data-text);
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// .glitch::before {
//   color: #ff0000;
//   animation: glitch-1 0.3s infinite;
// }
// .glitch::after {
//   color: #00ffff;
//   animation: glitch-2 0.3s infinite;
// }

// @keyframes glitch-1 {
//   0%, 100% { transform: translate(0); }
//   20% { transform: translate(-2px, 2px); }
//   40% { transform: translate(-2px, -2px); }
//   60% { transform: translate(2px, 2px); }
//   80% { transform: translate(2px, -2px); }
// }`
//   ];
  
//   return (
//     <pre className="text-green-400 text-sm overflow-x-auto">
//       <code>{codeExamples[currentDemo]}</code>
//     </pre>
//   );
// };

// export default TextAnimationsDemo;









"use client";
import React, { useState, useEffect } from 'react';

const TextAnimationsDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  
  const demos = [
    { name: 'Typewriter', id: 'typewriter' },
    { name: 'Fade Words', id: 'fadeWords' },
    { name: 'Slide Up', id: 'slideUp' },
    { name: 'Text Reveal', id: 'textReveal' },
    { name: 'Split Letters', id: 'splitLetters' },
    { name: 'Glitch Effect', id: 'glitch' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Text Animation Showcase</h1>
          <p className="text-gray-300">Different ways to animate text for engaging web experiences</p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setCurrentDemo(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                currentDemo === index
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {demo.name}
            </button>
          ))}
        </div>

        {/* Animation Demos */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
          {currentDemo === 0 && <TypewriterDemo />}
          {currentDemo === 1 && <FadeWordsDemo />}
          {currentDemo === 2 && <SlideUpDemo />}
          {currentDemo === 3 && <TextRevealDemo />}
          {currentDemo === 4 && <SplitLettersDemo />}
          {currentDemo === 5 && <GlitchDemo />}
        </div>

        {/* Code Examples */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How it&apos;s done:</h3>
          <div className="bg-black rounded-lg p-4 overflow-x-auto">
            <CodeExample currentDemo={currentDemo} />
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. Typewriter Effect
const TypewriterDemo = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "We create amazing digital experiences that captivate and inspire.";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        // Reset after completion
        setTimeout(() => {
          setDisplayText('');
          currentIndex = 0;
        }, 2000);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [fullText]);
  
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
};

// 2. Fade Words Effect
const FadeWordsDemo = () => {
  const words = ["Beautiful", "websites", "start", "with", "great", "typography"];
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  
  useEffect(() => {
    setVisibleWords([]);
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, index * 300);
    });
  }, [words]);
  
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block mr-4 transition-all duration-500 ${
              visibleWords.includes(index)
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
};

// 3. Slide Up Effect
const SlideUpDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="text-center overflow-hidden">
      <h2 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-1000 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
      }`}>
        Slide into view
      </h2>
      <p className={`text-xl text-gray-300 mt-6 transition-all duration-1000 delay-300 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
      }`}>
        With smooth animations
      </p>
    </div>
  );
};

// 4. Text Reveal Effect
const TextRevealDemo = () => {
  const [revealed, setRevealed] = useState(false);
  
  useEffect(() => {
    setRevealed(false);
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Hidden text reveals
        </h2>
        <div className={`absolute inset-0 bg-purple-600 transition-all duration-1000 ${
          revealed ? 'transform translate-x-full' : 'transform translate-x-0'
        }`}></div>
      </div>
    </div>
  );
};

// 5. Split Letters Effect
const SplitLettersDemo = () => {
  const text = "AMAZING";
  const [animatedLetters, setAnimatedLetters] = useState<number[]>([]);
  
  useEffect(() => {
    setAnimatedLetters([]);
    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setAnimatedLetters(prev => [...prev, index]);
      }, index * 100);
    });
  }, [text]);
  
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ${
              animatedLetters.includes(index)
                ? 'text-yellow-400 transform rotate-0 scale-100 opacity-100'
                : 'text-gray-600 transform rotate-12 scale-150 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
};

// 6. Glitch Effect
const GlitchDemo = () => {
  const [glitching, setGlitching] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="text-center">
      <h2 className={`text-4xl md:text-6xl font-bold text-white relative ${
        glitching ? 'animate-pulse' : ''
      }`}>
        <span className={`${glitching ? 'text-red-500' : ''}`}>
          GLITCH EFFECT
        </span>
        {glitching && (
          <>
            <span className="absolute top-0 left-0 text-cyan-400 opacity-70 transform translate-x-1">
              GLITCH EFFECT
            </span>
            <span className="absolute top-0 left-0 text-yellow-400 opacity-70 transform -translate-x-1">
              GLITCH EFFECT
            </span>
          </>
        )}
      </h2>
    </div>
  );
};

// Code Examples
const CodeExample = ({ currentDemo }: { currentDemo: number }) => {
  const codeExamples = [
    `// Typewriter Effect
const [displayText, setDisplayText] = useState('');
const fullText = "Your text here...";

useEffect(() => {
  let currentIndex = 0;
  const timer = setInterval(() => {
    if (currentIndex <= fullText.length) {
      setDisplayText(fullText.slice(0, currentIndex));
      currentIndex++;
    }
  }, 50);
  return () => clearInterval(timer);
}, []);`,

    `// Fade Words Effect
const words = ["Word", "by", "word", "animation"];
const [visibleWords, setVisibleWords] = useState([]);

useEffect(() => {
  words.forEach((_, index) => {
    setTimeout(() => {
      setVisibleWords(prev => [...prev, index]);
    }, index * 300);
  });
}, []);

// CSS
.word {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
}
.word.visible {
  opacity: 1;
  transform: translateY(0);
}`,

    `// Slide Up Effect
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setTimeout(() => setIsVisible(true), 200);
}, []);

// CSS
.slide-up {
  transition: all 1s ease;
  transform: translateY(100%);
  opacity: 0;
}
.slide-up.visible {
  transform: translateY(0);
  opacity: 1;
}`,

    `// Text Reveal Effect
const [revealed, setRevealed] = useState(false);

useEffect(() => {
  setTimeout(() => setRevealed(true), 300);
}, []);

// CSS
.text-reveal {
  position: relative;
  overflow: hidden;
}
.reveal-overlay {
  position: absolute;
  inset: 0;
  background: #8b5cf6;
  transition: transform 1s ease;
  transform: translateX(\${revealed ? '100%' : '0'});
}`,

    `// Split Letters Effect
const text = "AMAZING";
const [animatedLetters, setAnimatedLetters] = useState([]);

useEffect(() => {
  text.split('').forEach((_, index) => {
    setTimeout(() => {
      setAnimatedLetters(prev => [...prev, index]);
    }, index * 100);
  });
}, []);`,

    `// Glitch Effect CSS
.glitch {
  position: relative;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.glitch::before {
  color: #ff0000;
  animation: glitch-1 0.3s infinite;
}
.glitch::after {
  color: #00ffff;
  animation: glitch-2 0.3s infinite;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}`
  ];
  
  return (
    <pre className="text-green-400 text-sm overflow-x-auto">
      <code>{codeExamples[currentDemo]}</code>
    </pre>
  );
};

export default TextAnimationsDemo;