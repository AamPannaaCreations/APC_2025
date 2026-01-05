"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  type: "banner" | "popup";
}

export default function WorkshopBanner() {
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch workshop data from API
    const fetchWorkshop = async () => {
      try {
        const response = await fetch("/api/v1/workshop");
        if (response.ok) {
          const data = await response.json();
          setWorkshop(data);
          
          // Check if user has dismissed this workshop
          const dismissed = localStorage.getItem(`workshop-dismissed-${data.id}`);
          if (!dismissed) {
            setIsVisible(true);
          }
        }
      } catch (error) {
        console.error("Error fetching workshop:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkshop();
  }, []);

  const handleDismiss = () => {
    if (workshop) {
      localStorage.setItem(`workshop-dismissed-${workshop.id}`, "true");
    }
    setIsVisible(false);
  };

  if (isLoading || !isVisible || !workshop) return null;

  // Popup Modal
  if (workshop.type === "popup") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative max-w-2xl w-full mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {workshop.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {workshop.description}
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              📅 {new Date(workshop.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {workshop.link && (
              <a
                href={workshop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Register Now
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Banner
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg animate-in slide-in-from-top duration-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-4">
          <span className="text-2xl">🎓</span>
          <div>
            <h3 className="font-bold text-lg">{workshop.title}</h3>
            <p className="text-sm opacity-90">{workshop.description}</p>
            <p className="text-xs opacity-80 mt-1">
              📅 {new Date(workshop.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        {workshop.link && (
          <a
            href={workshop.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mr-4"
          >
            Learn More
          </a>
        )}

        <button
          onClick={handleDismiss}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}