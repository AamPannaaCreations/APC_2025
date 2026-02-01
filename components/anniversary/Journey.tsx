// // "use client";
// // import CircularGallery from "@/components/CircularGallery";
// // import { RetroGrid } from "@/components/ui/retro-grid";

// // export default function Journey() {
// //   return (
// //     <section id="journey"
// //       className="bg-[#FFF1C3] py-20 min-h-screen"
// //       style={{ height: "600px", position: "relative" }}
// //     >
// //       <h1 className="text-center font-semibold text-6xl text-[#8C6400] mb-24">
// //         Our Journey in moments
// //       </h1>
// //       <div className="relative h-[900px] w-full overflow-hidden">
// //         <RetroGrid />
// //       </div>

// //       <div
// //         className="inset-0 flex items-center justify-center pointer-events-none "
// //         style={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           zIndex: 10,
// //         }}
// //       >
// //         <CircularGallery
// //           bend={3}
// //           textColor="#ffffff"
// //           borderRadius={0.05}
// //           scrollEase={0.02}
// //           scrollSpeed={2}
// //         />
// //       </div>
// //     </section>
// //   );
// // }













// "use client";
// import CircularGallery from "@/components/CircularGallery";
// import { RetroGrid } from "@/components/ui/retro-grid";

// export default function Journey() {
//   return (
//     <section id="journey"
//       className="bg-[#FFF1C3]  min-h-screen"
//       style={{ height: "600px", position: "relative" }}
//     >
//       <h1 className="text-center font-semibold text-6xl text-[#8C6400] pt-16">
//         Our Journey in moments
//       </h1>
//       <div className="relative h-[900px] w-full overflow-hidden">
//         <RetroGrid />
//       </div>

//       <div
//         className="inset-0 flex items-center justify-center pointer-events-none"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 10,
//         }}
//       >
//         <CircularGallery
//           bend={3}
//           textColor="#ffffff"
//           borderRadius={0.05}
//           scrollEase={0.02}
//           scrollSpeed={2}
//         />
//       </div>
//     </section>
//   );
// }







"use client";

import CircularGallery from "@/components/CircularGallery";
import { RetroGrid } from "@/components/ui/retro-grid";
import { isMobile } from 'react-device-detect';


export default function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-[#FFF1C3] py-20 md:py-24 overflow-hidden"
    >
      {/* TOP RETRO GRID */}
      <div className="absolute rotate-180 top-0 left-0 w-full h-32 md:h-40">
        <RetroGrid />
      </div>

      {/* HEADING */}
      <h1 className="relative z-10 text-center font-semibold text-4xl sm:text-5xl md:text-6xl text-[#8C6400]">
        Our Journey in moments
      </h1>

      {/* GALLERY */}
      <div className="relative z-10 flex items-center justify-center h-[360px] sm:h-[420px] md:h-[500px]">
        <CircularGallery
          /* MOBILE FIRST */
          bend={ isMobile ? 1.8 : 3}
          scrollSpeed={isMobile ? 1.2 : 2}
          scrollEase={0.04}
          borderRadius={0.1}
          textColor="#8C6400"

          /* DESKTOP OVERRIDES */
          // className="md:[--bend:3] md:[--scrollSpeed:2]"
        />
      </div>

      {/* BOTTOM RETRO GRID */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40">
        <RetroGrid />
      </div>
    </section>
  );
}
