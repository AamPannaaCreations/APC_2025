"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Split pathname into segments and filter out empty strings
  const segments = pathname.split("/").filter(Boolean);
  
  // Build breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = index === segments.length - 1;
    
    return {
      label,
      href,
      isLast,
    };
  });

  return (
    <nav className="flex items-center space-x-2 text-sm ">
      <Link
        href="/admin"
        className="flex items-center transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          {item.isLast ? (
            <span className="font-medium ">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className=" transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}