import React from "react";
import { clientTestimonials } from "@/data/testimonials";


interface Testimonials {
  id: number;
  title: string;
  role: string;
  description: string;
}

const TestimonialsPage: React.FC = () => {
  // Sample data - replace with your actual portfolioItems data


  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="36" cy="24" r="1" fill="white" fillOpacity="0.3" />
                <circle cx="6" cy="44" r="1" fill="white" fillOpacity="0.3" />
                <circle cx="36" cy="6" r="1" fill="white" fillOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-black/10 backdrop-blur-sm border border-black/20">
              <svg
                className="w-10 h-10 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 14.97,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,8.64 5.47,5.69 7.85,3.85L4.93,5.82Z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Client Testimonials
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Discover what our amazing clients say about their experience
              working with us. Real stories, real results, real satisfaction.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Testimonials Flex Container - Your original structure enhanced */}

          {/* <div className="flex flex-wrap justify-center gap-6 lg:gap-8"> */}
            {/* {clientTestimonials.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              > */}

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6">
            {clientTestimonials.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-0 break-inside-avoid mb-6"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >

               
                {/* Gradient overlay for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote decoration */}
                <div className="absolute top-4 left-4 text-gray-200 group-hover:text-blue-200 transition-colors duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <div className="relative p-6 sm:p-8">
                  {/* Header with avatar and rating */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Avatar placeholder with gradient */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {item.title?.charAt(0) || "U"}
                        </span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Star rating with improved styling */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-4 h-4 text-yellow-400 drop-shadow-sm"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="space-y-4">
                    {/* Name with enhanced typography */}
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.role && (
                        <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                          {item.role}
                        </p>
                      )}
                    </div>

                    {/* Testimonial text with better readability */}
                    <div className="relative">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {`"${item.description}"`}
                      </p>
                      {/* Gradient fade for long text */}
                      {/* <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-50"></div> */}
                    </div>
                  </div>

                  {/* Footer section with enhanced styling */}
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client Testimonial
                      </span>

                      {/* Verified badge */}
                      <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect decoration */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200"></div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-20">
            <div className="  bg-[#FFD500] max-w-7xl mx-auto backdrop-blur-sm rounded-3xl p-12 border border-black/10">
              <h3 className="text-3xl font-bold text-black mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                {`Experience the same level of excellence and dedication that our
                clients rave about. Let's create something amazing together.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="hover:cursor-pointer group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-black font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
