import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import {
  useDisclosure,
} from "@heroui/modal";


export default function WorkshopHero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("lg");
  const [scrollBehavior, setScrollBehavior] = React.useState<
    "inside" | "normal" | "outside" | undefined
  >("outside");

  const handleOpen = (size: string) => {
    // setSize(size);
    onOpen();
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:w-full lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* <Badge variant="secondary" className="mb-4 md:mb-6 inline-flex">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              New Sessions Added
            </Badge> */}

            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              <span className="inline">
                Build skills through{" "}
                <span className="inline-block">
                  <WordRotate
                    duration={1500}
                    words={[
                      "Live Workshops",
                      "Expert Led Sessions",
                      "Hands On Learning",
                    ]}
                  />
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Join expert-led interactive sessions to master social media
              strategies, personal branding, and creative toolkits.
            </p>

            <Button
              className="text-base sm:text-lg md:text-xl hover:cursor-pointer font-bold lg:text-2xl text-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 w-full sm:w-auto"
              // size={"icon"}
              onClick={() =>
                (
                  document.getElementById("my_modal_5") as HTMLDialogElement
                )?.showModal()
              }
            >
              View Schedule
            </Button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              {/* Modal content */}
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="/workshop/worhshop-01.jpg"
                alt="Workshop session"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              {/* <div className="absolute lg:bottom-6 lg:left-6 bottom-5 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-1 lg:p-4 md:p-4 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-1">
                  Interactive Learning Sessions
                </h3>
                <p className="text-sm text-gray-600">
                  Build real-world skills with guided sessions
                </p>
              </div> */}

              <div className="absolute lg:bottom-6 lg:left-6 bottom-5 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 shadow-lg max-w-[85%] sm:max-w-xs md:max-w-sm">
                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base lg:text-lg">
                  Interactive Learning Sessions
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                  Build real-world skills with guided sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
