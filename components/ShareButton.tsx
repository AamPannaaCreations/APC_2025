"use client";

import { Button } from "@/components/ui/button";
import { FaShare } from "react-icons/fa";
import toast from "react-hot-toast";

type ShareButtonProps = {
  title: string;
  description: string;
};

export default function ShareButton({ title, description }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: window.location.href,
      }).catch((error) => console.log("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="hover:cursor-pointer ml-auto gap-2"
      onClick={handleShare}
    >
      <FaShare className="h-4 w-4" />
      Share
    </Button>
  );
}