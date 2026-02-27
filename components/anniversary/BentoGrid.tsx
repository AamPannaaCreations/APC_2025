import {
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  PersonIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { AnimatedHighlightedAreaChart } from "./Chart";
import { AnimatedListDemo } from "./List";

const features = [
  {
    Icon: FileTextIcon,
    name: "15+ Overseas Collaborations",
    description: "Collaborate with teams across the globe seamlessly.",
    href: "/home",
    cta: "Learn more",
    background: <AnimatedListDemo className="absolute top-4 right-2 h-[450px] w-full border-none [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "10+ Services",
    description: "We offer a wide range of services to meet your needs, from strategy to execution.",
    href: "/home",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "5+ Countries",
    description: "Our global presence spans multiple continents, allowing us to serve clients worldwide.",
    href: "/home",
    cta: "Learn more",
    background: <Globe />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: PersonIcon,
    name: "20+ Clients",
    description: "We have successfully served over 20 clients, delivering exceptional results.",
    href: "/home",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: ArrowTopRightIcon,
    name: "10 Lakhs+ Impressions ",
    description:
      "Our campaigns have reached over 10 lakhs people, creating significant impact.",
    href: "/home",
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
