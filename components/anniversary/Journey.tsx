'use client';
import CircularGallery from "@/components/CircularGallery";
import { RetroGrid } from "@/components/ui/retro-grid"

export default function Journey() {
return (
  <div className="bg-[#FFF1C3] " style={{ height: "600px", position: "relative" }}>
    <h1 className="text-center font-semibold text-6xl text-[#8C6400]">Our Journey in moments</h1>
    <div className="relative h-[900px] w-full overflow-hidden">
      <RetroGrid />
    </div>
    
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}>
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
        scrollSpeed={2}
      />
    </div>
  </div>
)};