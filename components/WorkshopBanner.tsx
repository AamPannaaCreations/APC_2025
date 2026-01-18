"use client";

import Link from "next/link";

export default function WorkshopBanner() {


  // useEffect(() => {
  //   // Fetch workshop data from API
  //   const fetchWorkshop = async () => {
  //     try {
  //       const response = await fetch("/api/v1/workshop");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setWorkshop(data);
          
  //         // Check if user has dismissed this workshop
  //         const dismissed = localStorage.getItem(`workshop-dismissed-${data.id}`);
  //         if (!dismissed) {
  //           setIsVisible(true);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching workshop:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchWorkshop();
  // }, []);

  // const handleDismiss = () => {
  //   if (workshop) {
  //     localStorage.setItem(`workshop-dismissed-${workshop.id}`, "true");
  //   }
  //   setIsVisible(false);
  // };

  // if (isLoading || !isVisible || !workshop) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#E8DDB5] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 text-base md:text-lg">
            Personal Branding Workshop |
            <Link href="/workshop" className="hover:underline ml-2">
              Live Now
            </Link>
          </h3>
        </div>
        
      </div>
    </div>
  );
}