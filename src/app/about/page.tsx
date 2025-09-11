// "use client";

// import Image from "next/image";

// const About = () => {
//   return (
//     // <div className="fade-in">
//     //   {/* Hero Section */}
//     //   <section className="py-20">
//     //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     //       <h1 className="text-5xl font-bold text-primary mb-8">About Us</h1>
//     //       <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//     //         Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum
//     //         egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.
//     //         Id sed montes.
//     //       </p>
//     //     </div>
//     //   </section>

//     //   {/* Mission Section */}
//     //   <section className="py-16 bg-muted/20">
//     //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//     //         <div>
//     //           <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
//     //           <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//     //             Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum
//     //             egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.
//     //           </p>
//     //           <p className="text-lg text-muted-foreground leading-relaxed">
//     //             Id sed montes. Consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas
//     //             orci netus feugiat ut egestas.
//     //           </p>
//     //         </div>
//     //         <div className="aspect-square bg-gray-200 rounded-lg"></div>
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Values Section */}
//     //   <section className="py-20">
//     //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //       <h2 className="text-4xl font-bold text-primary text-center mb-16">Our Values</h2>
//     //       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//     //         <div className="text-center">
//     //           <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
//     //             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
//     //             </svg>
//     //           </div>
//     //           <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
//     //           <p className="text-muted-foreground">
//     //             We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
//     //           </p>
//     //         </div>
//     //         <div className="text-center">
//     //           <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
//     //             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
//     //             </svg>
//     //           </div>
//     //           <h3 className="text-xl font-bold text-primary mb-4">Collaboration</h3>
//     //           <p className="text-muted-foreground">
//     //             We believe in the power of teamwork and foster an environment of open communication.
//     //           </p>
//     //         </div>
//     //         <div className="text-center">
//     //           <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
//     //             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//     //             </svg>
//     //           </div>
//     //           <h3 className="text-xl font-bold text-primary mb-4">Quality</h3>
//     //           <p className="text-muted-foreground">
//     //             We are committed to delivering excellence in every project, no matter the size or complexity.
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </div>

//     <div className="min-h-screen  ">
//       {/* Main Content */}
//       <main className="container mx-auto px-8 py-12">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <div className="flex justify-center items-center space-x-8 mb-8">
//             <Image
//               src="/our-story-hero-section.svg"
//               alt="Aam Pannaa"
//               width={550}
//               height={260}
//               // className="rounded-full"
//             />
//           </div>

//           <h1 className="text-7xl font-serif font-bold  mb-4">Our Story</h1>
//           <p className="text-6xl italic mt-4">
//             "Turning bland into brand, the Aam Pannaa way!"
//           </p>
//         </div>

//         {/* The Spark Section */}
//         <section className="max-w-7xl mb-16 mx-auto ">
//           <h2 className="text-4xl font-serif font-bold  mb-8">
//             The Spark of Aam Pannaa
//           </h2>

//           <div className="flex items-start space-x-8">
//             <div className="flex-1">
//               <p className=" leading-relaxed text-lg">
//                 Picture this: a chilly winter night, with Digvijay and Nikita
//                 cozied up by the family fireplace, the air swirling with stories
//                 and laughter. Nikita leans in, eyes shining, and confides, "I've
//                 always wanted to build something creative, something that's
//                 really ours." Digvijay doesn't skip a beat. With a playful wink,
//                 he says, "Why don't we name it after our favorite fruit—Aam?"
//               </p>
//               <br />
//               <p className=" leading-relaxed text-lg">
//                 Suddenly, the room bursts with memories: sticky fingers from
//                 mango slices, noisy summer afternoons, and the fun tang of aam
//                 panna. That was the spark. Right there, Aam Pannaa Creations
//                 came alive, born from warm nostalgia and a desire to do things
//                 differently.
//               </p>
//             </div>

//             <div className="w-48 h-48 relative  hover:scale-105 duration-300">
//               <Image
//                 src="/our-story-male-image.svg"
//                 alt="Aam Pannaa"
//                 width={550}
//                 height={260}
//                 // className="rounded-full"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Adding Flavor Section */}
//         <section className=" mx-auto max-w-7xl mb-16">
//           <h2 className="text-4xl font-serif font-bold mb-8 text-center">
//             Adding Flavor to Startups
//           </h2>

//           <div className="flex items-center space-x-8">
//             <div className="w-48 h-48 relative transform hover:scale-105 transition-all duration-300">
//               <Image
//                 src="/our-story-female-image.svg"
//                 alt="Aam Pannaa"
//                 width={405}
//                 height={560}
//                 // className="rounded-full"
//               />
//             </div>

//             <div className="flex-1">
//               <p className=" leading-relaxed text-lg">
//                 So, what keeps Digvijay and Nikita inspired? For them, this
//                 venture is so much more than just business—it's like mixing the
//                 perfect glass of aam panna: a bit of tradition, a splash of
//                 creativity, and loads of zest. They love taking plain ideas and
//                 turning them into something unforgettable, just like adding
//                 masala to a classic summer drink. Every project, every campaign,
//                 it's their way of sharing that childhood magic and energy with
//                 people who want their own flavor of success. With Aam Pannaa
//                 Creations, there's always room for new ideas and a promise that
//                 they'll never be dull.
//               </p>
//             </div>
//           </div>
//         </section>

//       </main>

//       <div className=" items-center bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4]">
//           <div className="mx-auto px-4 md:px-6 lg:px-8 mb-10 ">
//             <Image
//               src="/our-story-combined.svg"
//               alt="Aam Pannaa"
//               width={761}
//               height={450}
//             />
//           </div>
//         </div>
//     </div>
//   );
// };

// export default About;

// UPPER ONE IS DONE ONLY FEW CHANGES ARE PENDING, SO THIS DOWN HERE IS FOR FINAL TOUCHES
"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Hero Section */}
        <div className="text-center mb-16 font-bricolage ">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/ourStory/our-story-hero-section.svg"
              alt="Aam Pannaa"
              width={550}
              height={260}
              className="max-w-full h-auto"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mt-4 px-4">
            {' "Turning bland into brand, the Aam Pannaa way!" '}
          </p>
        </div>


        {/* The Spark Section */}
        <section className="max-w-7xl mb-16 mx-auto font-bricolage ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-8">
            The Spark of Aam Pannaa
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-1 order-2 lg:order-1 textr-xl ">
              <p className="leading-relaxed text-2xl mb-4">
                {` Picture this: a chilly winter night, with Digvijay and Nikita
                cozied up by the family fireplace, the air swirling with stories
                and laughter. Nikita leans in, eyes shining, and confides, "I've
                always wanted to build something creative, something that's
                really ours." Digvijay doesn't skip a beat. With a playful wink,
                he says, "Why don't we name it after our favorite fruit, Aam?" `}
              </p>
              <p className="leading-relaxed text-2xl ">
                {` Suddenly, the room bursts with memories: sticky fingers from
                mango slices, noisy summer afternoons, and the fun tang of aam
                panna. That was the spark. Right there, Aam Pannaa Creations
                came alive, born from warm nostalgia and a desire to do things
                differently. `}
              </p>
            </div>

            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative order-1 lg:order-2 flex-shrink-0 group">
              {/* <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative order-1 lg:order-2 flex-shrink-0 group"> */}

              <div className="relative w-full h-full transform hover:scale-110 transition-all duration-300 ease-in-out">
                {/* Original image - hidden on hover */}
                <Image
                  src="/ourStory/our-story-male-image.svg"
                  alt="Digvijay"
                  fill
                  className="object-contain "
                />
                {/* Extra SVG that appears on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <Image
                    src="/ourStory/our-story-male-image-2.svg"
                    alt="Digvijay"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl mb-16 font-bricolage ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-8 text-end">
            Adding Flavor to Startups
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative flex-shrink-0 group">
              <div className="relative w-full h-full transform hover:scale-110 transition-all duration-300 ease-in-out ">
                <Image
                  src="/ourStory/our-story-female-image.svg"
                  alt="Nikita"
                  fill
                  className="object-contain"
                />
                {/* Extra SVG that appears on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <Image
                    src="/ourStory/our-story-female-image-2.svg"
                    alt="Heart icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="leading-relaxed text-2xl mb-4">
                {` So, what keeps Digvijay and Nikita inspired? For them, this
                venture is so much more than just business. It's like mixing the
                perfect glass of aam panna: a bit of tradition, a splash of
                creativity, and loads of zest. They love taking plain ideas and
                turning them into something unforgettable, just like adding
                masala to a classic summer drink. `}
              </p>
              <p className="leading-relaxed text-2xl ">
                {` Every project, every campaign, it's their way of sharing that
                childhood magic and energy with people who want their own flavor
                of success. With Aam Pannaa Creations, there's always room for
                new ideas and a promise that they'll never be dull. `}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Combined Image Section */}
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">
        <div className="flex justify-center items-center px-4">
          <div className="max-w-4xl w-full relative group">
            <div className="transform hover:scale-110 transition-all duration-300 ease-in-out">
              <Image
                src="/ourStory/our-story-combined.svg"
                alt="Aam Pannaa Team"
                width={761}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Extra SVG that appears on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <Image
                src="/ourStory/our-story-combined-2.svg"
                alt="Aam Pannaa Team Hover"
                width={761}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
