import React from 'react'

export default function Footer() {
  return (
    <section className="bg-[#FFF1C3] py-16 relative overflow-hidden">
      {/* Diagonal line pattern background */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #8B7355 10px, #8B7355 11px)',
        }} />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Content */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B4100] mb-6">
            Less noise. More results.
          </h2>
          <p className="text-[#5B4100] text-lg md:text-xl mb-8">
            We help founders and teams build clarity, consistency,
            <br className="hidden sm:block" />
            and momentum.
          </p>
          <button className="px-10 py-3 bg-[#8B7355] text-white rounded-full font-medium hover:bg-[#6B5540] transition-all duration-300 hover:scale-105 shadow-lg">
            Work with us
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#5B4100]/20 gap-4">
          <p className="text-[#5B4100] text-sm">
            © {new Date().getFullYear()} Aam Pannaa Creations. All Right Reserved
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#5B4100] text-sm hover:underline transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-[#5B4100] text-sm hover:underline transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}