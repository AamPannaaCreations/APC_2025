import Image from "next/image";
export const dynamic = "force-static";

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
