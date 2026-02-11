"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Buildspace Member",
    description: "Startup program participant",
    time: "2024",
    icon: "🚀",
    color: "#00BBF0",
  },
  {
    name: "Favcy Venture Builder",
    description: "Startup acceleration program",
    time: "2024",
    icon: "🏗️",
    color: "#2C73D2",
  },
  {
    name: "Microsoft Founder Hub",
    description: "Startup ecosystem member",
    time: "2024",
    icon: "💻",
    color: "#0081CF",
  },
  {
    name: "Netherlands Digital Magazine",
    description: "International feature",
    time: "2024",
    icon: "🌍",
    color: "#C34A36",
  },
  {
    name: "Evolve & Execute Podcast",
    description: "Founder insights",
    time: "2025",
    icon: "🎙️",
    color: "#00C2A8",
  },
  {
    name: "The INK Post Feature",
    description: "Entrepreneur spotlight",
    time: "2025",
    icon: "🖋️",
    color: "#6A4C93",
  },
  {
    name: "Little Pineapple LLC",
    description: "Business feature",
    time: "2024",
    icon: "🍍",
    color: "#FF9671",
  },
  {
    name: "WEP Feature",
    description: "Women entrepreneurship platform",
    time: "2025",
    icon: "🌸",
    color: "#F9A1BC",
  },
  {
    name: "Guest Speaker – Pilani College",
    description: "Invited engineering talk",
    time: "2024",
    icon: "🏫",
    color: "#4CAF50",
  },
  {
    name: "BITS Pilani Incubator Mentor",
    description: "Startup mentorship role",
    time: "2024",
    icon: "🎓",
    color: "#1E88E5",
  },
   {
    name: "Featured in Mint",
    description: "Views on marketing in VC firms",
    time: "2025",
    icon: "📰",
    color: "#00C9A7",
  },
  {
    name: "Dreams Talks Speaker",
    description: "Shared founder journey",
    time: "2025",
    icon: "🎤",
    color: "#FFB800",
  },
  {
    name: "Audience Reports Feature",
    description: "Insights as a founder",
    time: "2025",
    icon: "📊",
    color: "#845EC2",
  },
  {
    name: "Pitch Cafe Podcast USA",
    description: "Discussed AI tools",
    time: "2024",
    icon: "🎧",
    color: "#FF6F91",
  },
  {
    name: "Women Startup Stories",
    description: "Founder spotlight",
    time: "2024",
    icon: "👩‍💼",
    color: "#4D96FF",
  },
  {
    name: "Women Who Inspire Series",
    description: "Entrepreneur feature",
    time: "2024",
    icon: "✨",
    color: "#FFC75F",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[100px] lg:h-[500px] w-full flex-col px-4 overflow-hidden",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
