import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";


import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { AvatarCircles } from "../ui/avatar-circles";
import { AnimatedHighlightedAreaChart } from "./Chart";
import { AnimatedListDemo } from "./List";
import { OrbitingCirclesDemo } from "./OrbitingCircles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "15+ Overseas Collaborations",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <AnimatedListDemo className="absolute top-4 right-2 h-[450px] w-full border-none [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "10+ Services",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "5+ Countries",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <Globe />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "20+ Clients",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "10 Lakhs+ Impressions ",
    description:
      "short description.",
    href: "/",
    cta: "Learn more",
    background: <AnimatedHighlightedAreaChart />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <section className="min-h-screen bg-[#FFF1C3] flex items-center justify-center">
      <BentoGrid className=" lg:grid-rows-2 px-4 lg:px-32 ">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
