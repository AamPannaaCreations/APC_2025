"use client";

import Link from "next/link";

export default function WorkshopBanner() {

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#E8DDB5] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 text-base md:text-lg">
            Qurious about Workshop? |
            <Link href="/workshop" className="hover:underline ml-2">
              Join Now
            </Link>
          </h3>
        </div>
        
      </div>
    </div>
  );
}