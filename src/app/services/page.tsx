// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const Projects = () => {
//   const [isClient, setIsClient] = useState(false);
//   const horizontalRef = useRef<HTMLElement>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Web Design & Development",
//       icon: "/services/Code.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Lagun Advisor",
//       projectDes: "A platform for personalized travel recommendations.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 2,
//       title: "Social Media Management",
//       icon: "/services/Social media.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nam pata naahi ha mereko",
//       projectDes: "nam ke description vej dena.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 3,
//       title: "Personal Branding",
//       icon: "/services/Personal branding.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "data nahi mila haa avi tak",
//       projectDes: " milega fir dal dun ga.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 4,
//       title: "UI/UX Design and Development",
//       icon: "/services/UX Design.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nahi pata avi ",
//       projectDes: " happy ganesh pujaaa ",
//       liveLink: " ",
//     },
//     {
//       id: 5,
//       title: "Digital Marketing",
//       icon: "/services/Mentorship and consultancy.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Content Creator",
//       projectDes: "Creating engaging content for various platforms.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 6,
//       title: "Podcast editing",
//       icon: "/services/Podcast editing.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: " hamko v karna ha podcast",
//       projectDes: "chalo binith ek podcast krte haain",
//       liveLink: "https://lagunadvisor.com",
//     },
//   ];

//   const portfolioItems = [
//     { id: 1, title: "Title", description: "Description" },
//     { id: 2, title: "Title", description: "Description" },
//     { id: 3, title: "Title", description: "Description" },
//     { id: 4, title: "Title", description: "Description" },
//   ];

// interface Client {
//   img: string;
//   name: string;
// }

// const clientLogos: Client[] = [
//   {
//     img:"/clientLogos/claylab.png",
//     name :"ClayLab"
//   },
//   {
//     img:"/clientLogos/WolnutLogo.png",
//     name :"Wolnut"
//   },
//   {
//     img:"/clientLogos/Jyotsnasingh.png",
//     name :"Jyotsna Singh"
//   },
//   {
//     img:"/clientLogos/image.png",
//     name :"CreatorDesk"
//   },
//   {
//     img:"/clientLogos/littlepineapple.png",
//     name :"Little Pineapple"
//   },
//   {
//     img:"/clientLogos/aksh-e-sarfiri.png",
//     name: "aksh-e-sarfiri"
//   },
//   {
//     img: "/clientLogos/josh.png",
//     name: "Josh App"
//   },
//   {
//     img: "/clientLogos/kancha.png",
//     name: "kancha"
//   },
//   {
//     img: "/clientLogos/luminaryPathways.png",
//     name: "Luminary Pathwayst"
//   },
//   {
//     img:"/clientLogos/minsstance.png",
//     name: "Minsstance"
//   },
//   {
//     img: "/clientLogos/one7logo.png",
//     name: "One7 Sports"
//   },

// ]

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient || !horizontalRef.current) return;

//     /* eslint-disable @typescript-eslint/no-explicit-any */

//     let gsap: any;
//     let ScrollTrigger: any;

//     const initializeGSAP = async () => {
//       try {
//         // Dynamic imports
//         const gsapModule = await import("gsap");
//         const scrollTriggerModule = await import("gsap/ScrollTrigger");

//         gsap = gsapModule.gsap || gsapModule.default;
//         ScrollTrigger =
//           scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

//         if (!gsap || !ScrollTrigger) {
//           console.error("Failed to load GSAP libraries");
//           return;
//         }

//         // Register ScrollTrigger plugin
//         gsap.registerPlugin(ScrollTrigger);

//         // Horizontal Scroll Animation
//         const sections = gsap.utils.toArray(".panel");
//         if (sections.length > 0 && horizontalRef.current) {
//           gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//               trigger: horizontalRef.current,
//               pin: true,
//               scrub: 0.5, // Lower = smoother (try 0.1 to 1) & Higer > 1 = Faster
//               snap: 1 / (sections.length - 1),
//               end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
//             },
//           });
//         }

//         ScrollTrigger.refresh();
//       } catch (error) {
//         console.error("Error initializing GSAP:", error);
//       }
//     };

//     initializeGSAP();

//     // Cleanup function
//     return () => {
//       try {
//         if (ScrollTrigger) {
//           ScrollTrigger.killAll();
//         }
//       } catch (error) {
//         console.error("Error during cleanup:", error);
//       }
//     };
//   }, [isClient]);

//   return (
//     <div className="fade-in  ">
//       {/* Main Projects Section */}

//       <h1 className="font-bold text-7xl px-4 sm:px-6 lg:px-20 mt-10 ">
//         Services
//       </h1>

//       <section
//         ref={horizontalRef}
//         className="relative h-screen flex"
//         style={{ width: `${projects.length * 100}vw` }}
//       >
//         <Image
//           src="/servicePage.svg"
//           alt="Description of the image"
//           //  layout="fill"
//           //  objectFit="cover"
//           width={800}
//           height={1100}
//           //  className="absolute  inset-0 -z-5"
//           className="absolute  transform  translate-y translate-x-1/2 -z-10"
//         />

//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="panel flex items-center justify-center w-screen  text-black p-20"
//           >
//             <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Left side - Project image placeholder */}

//               {/* <div className="aspect-video bg-black/20 rounded-lg backdrop-blur-sm"></div> */}

//               <div className="aspect-video bg-black/20 rounded-5xl backdrop-blur-sm flex items-center justify-center">
//                 <Image
//                   src={project.icon}
//                   alt="Description of the image"
//                   layout="fill"
//                   // objectFit="cover"
//                   className="mt-2 object-contain"
//                 />
//               </div>

//               {/* Right side - Project details */}
//               <div className="space-y-6">
//                 <h1 className="text-5xl font-bold">{project.title}</h1>
//                 <p className="text-black/90 leading-relaxed text-lg">
//                   {project.description}
//                 </p>

//                 <h2 className="text-3xl font-bold">
//                   Client: {project.projectName}
//                 </h2>
//                 <p className="text-black/90 leading-relaxed">
//                   {project.projectDes}
//                 </p>
//                 {project.liveLink &&
//                   project.liveLink.trim() &&
//                   project.liveLink !== "https://example.com" && (
//                     <a
//                       href={project.liveLink}
//                       className="inline-block bg-[#000000] text-white px-6 py-3 rounded-lg font-semibold  transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Project
//                     </a>
//                   )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Portfolio Gallery */}
//       <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-16">
//         {/* <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] "> */}

//         <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">

//           <div className="relative overflow-hidden mb-16">

//             <div className="flex animate-scroll">
//               {/* First set of items */}
//                {clientLogos.map((client, i) => (
//                 <div
//                   key={`first-${i}`}
//                   className="flex-shrink-0 w-32 h-32 border-2 ml-6 rounded-lg mb-4 relative overflow-hidden"
//                 >
//                   <Image
//                     src={client.img}
//                     alt={client.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}

//               {/* Duplicate set for seamless loop */}
//               {clientLogos.map((client, i) => (
//                 <div
//                   key={`second-${i}`}
//                   className="flex-shrink-0 w-32 h-32 border-2 ml-6 rounded-lg mb-4 relative overflow-hidden"
//                 >
//                   <Image
//                     src={client.img}
//                     alt={client.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform rotate-1 hover:rotate-0 transition-transform duration-300"
//                 style={{
//                   transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)`,
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 <div className="aspect-video bg-gray-400"></div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, j) => (
//                         <svg
//                           key={j}
//                           className="w-3 h-3 text-yellow-400"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                   <h3 className="font-bold mb-1">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {item.description}
//                   </p>
//                   <div className="mt-4 pt-4 border-t border-border">
//                     <span className="text-xs text-muted-foreground">
//                       Description
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { clientTestimonials } from "@/data/testimonials";
import { projects } from "@/data/projects";

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const horizontalRef = useRef<HTMLElement>(null);

  interface Client {
    img: string;
    name: string;
  }

  const clientLogos: Client[] = [
    {
      img: "/clientLogos/claylab.png",
      name: "ClayLab",
    },
    {
      img: "/clientLogos/WolnutLogo.png",
      name: "Wolnut",
    },
    {
      img: "/clientLogos/Jyotsnasingh.png",
      name: "Jyotsna Singh",
    },
    {
      img: "/clientLogos/image.png",
      name: "CreatorDesk",
    },
    {
      img: "/clientLogos/littlepineapple.png",
      name: "Little Pineapple",
    },
    {
      img: "/clientLogos/aksh-e-sarfiri.png",
      name: "aksh-e-sarfiri",
    },
    {
      img: "/clientLogos/josh.png",
      name: "Josh App",
    },
    {
      img: "/clientLogos/kancha.png",
      name: "kancha",
    },
    {
      img: "/clientLogos/luminaryPathways.png",
      name: "Luminary Pathways",
    },
    {
      img: "/clientLogos/minsstance.png",
      name: "Minsstance",
    },
    {
      img: "/clientLogos/one7logo.png",
      name: "One7 Sports",
    },
  ];

  // Check if mobile on client side
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient || !horizontalRef.current || isMobile) return;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    let gsap: any;
    let ScrollTrigger: any;

    const initializeGSAP = async () => {
      try {
        // Dynamic imports
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/ScrollTrigger");

        gsap = gsapModule.gsap || gsapModule.default;
        ScrollTrigger =
          scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

        if (!gsap || !ScrollTrigger) {
          console.error("Failed to load GSAP libraries");
          return;
        }

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Only apply horizontal scroll on desktop
        const sections = gsap.utils.toArray(".panel");
        if (sections.length > 0 && horizontalRef.current && !isMobile) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalRef.current,
              pin: true,
              scrub: 0.5,
              snap: 1 / (sections.length - 1),
              end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
            },
          });
        }

        ScrollTrigger.refresh();
      } catch (error) {
        console.error("Error initializing GSAP:", error);
      }
    };

    initializeGSAP();

    // Cleanup function
    return () => {
      try {
        if (ScrollTrigger) {
          ScrollTrigger.killAll();
        }
      } catch (error) {
        console.error("Error during cleanup:", error);
      }
    };
  }, [isClient, isMobile]);

  // Mobile version with vertical layout
  const MobileProjectsSection = () => (
    <div className="lg:hidden">
      {/* Background image for mobile */}
      <div className="relative">
        <Image
          src="/servicePage.svg"
          alt="Background decoration"
          width={400}
          height={600}
          className="absolute top-0 right-0 opacity-20 -z-10"
        />

        <div className="space-y-8 px-4 sm:px-6 py-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              {/* Project icon */}
              <div className="w-full h-48 bg-black/10 rounded-xl mb-6 relative overflow-hidden">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Project details */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {project.title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Client: {project.projectName}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {project.projectDes}
                  </p>

                  {project.liveLink &&
                    project.liveLink.trim() &&
                    project.liveLink !== "https://example.com" && (
                      <a
                        href={project.liveLink}
                        className="inline-block bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors hover:bg-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Desktop version with horizontal scroll
  const DesktopProjectsSection = () => (
    <section
      ref={horizontalRef}
      className="hidden lg:block relative h-screen"
      style={{ width: isMobile ? "100vw" : `${projects.length * 100}vw` }}
    >
      <Image
        src="/servicePage.svg"
        alt="Background decoration"
        width={800}
        height={1100}
        className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"
      />

      <div className="flex h-full ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" panel flex items-center justify-center w-screen text-black px-8 xl:px-20"
          >
            <div className=" rounded-2xl py-10 px-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
              {/* Project image */}
              <div className="aspect-video rounded-2xl backdrop-blur-sm relative overflow-hidden">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  fill
                  className="object-contain animate-float"
                />
              </div>

              {/* Project details */}
              <div className="space-y-6 font-bricolage ">
                <h1 className="text-3xl xl:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
                <p className="text-black/90 leading-relaxed text-base xl:text-lg">
                  {project.description}
                </p>

                <h2 className="text-2xl xl:text-3xl font-bold">
                  {project.projectName ? (
                    <span>Client : {project.projectName}</span>
                  ) : null}
                </h2>
                <p className="text-black/90 leading-relaxed">
                  {project.projectDes}
                </p>
                {project.liveLink &&
                  project.liveLink.trim() &&
                  project.liveLink !== "https://example.com" && (
                    <a
                      href={project.liveLink}
                      className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="fade-in">
      {/* Conditional rendering based on screen size */}
      <MobileProjectsSection />
      <DesktopProjectsSection />

      {/* Portfolio Gallery */}
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-8 sm:pb-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client logos scroll */}
          <div className="relative overflow-hidden mb-8 sm:mb-16">
            <div className="flex animate-scroll">
              {/* First set of items */}
              {clientLogos.map((client, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 ml-4 sm:ml-6 rounded-lg mb-4 relative overflow-hidden bg-white"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 ml-4 sm:ml-6 rounded-lg mb-4 relative overflow-hidden bg-white"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;
