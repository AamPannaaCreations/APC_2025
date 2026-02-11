"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

import {
  HiHome,
  HiInformationCircle,
  HiCog,
  HiUserGroup,
  HiDocumentText,
  HiChat,
  HiChevronDown,
} from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolkitExpanded, setIsToolkitExpanded] = useState(false);

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  const toolkitItems = [
    {
      href: "/toolkit/seo-tools",
      title: "Workshop",
      description: "Optimize your website for search engines",
    },
    {
      href: "/toolkit/design-resources",
      title: "Resume Builder",
      description: "Templates and design assets",
    },
    {
      href: "/toolkit/marketing-tools",
      title: "Marketing Tools",
      description: "Tools to boost your marketing",
    },
    {
      href: "/toolkit/analytics",
      title: "Analytics",
      description: "Track and analyze your performance",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleToolkit = () => {
    setIsToolkitExpanded(!isToolkitExpanded);
  };

  // Enhanced smooth scroll function
  const smoothScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      // Calculate offset to account for navbar height
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle smooth scroll to contact form when on home page
  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault(); // Prevent default link behavior
      smoothScrollToForm();
    }
    // If on different page, let Link handle navigation to /#contact-form
  };

  // Handle scroll to form when coming from another page
  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#contact-form") {
      // Wait for page to load completely
      const timer = setTimeout(() => {
        smoothScrollToForm();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* <WorkshopBanner /> */}
      <nav className="fixed left-0 right-0 z-[50] bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]">
        <div className="container mx-auto px-4 h-12 relative flex items-center justify-center py-2">
          <div className="text-center flex flex-row items-center justify-center">
            <Image
              src="/new-banner.png"
              alt='Best Marketing Agency in India'
              width={40}
              height={20}
              priority
              className="animate-pulse"
            />
            <h3 className="font-bold text-gray-800 text-base md:text-xl ml-2">
              Qurious about Workshop? |
              <Link href="/workshop" className="hover:underline ml-2 animate-pulse text-red-600 font-bold">
                Join Now
              </Link>
            </h3>
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 font-semibold">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <Image
                src="/aampannalogo-svg.png"
                alt="Aam Pannaa Creations | Best Marketingg Agency in India"
                width={90}
                height={32}
                className="w-auto h-8 sm:h-10"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-bricolage ">
              <Link
                href="/"
                className={`flex items-center gap-2  text-lg font-extralight hover:font-semibold transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <HiHome className="w-5 h-5" />
                Home
              </Link>
              <Link
                href="/about"
                className={`flex items-center gap-2 
                   text-lg font-extralight hover:font-semibold transition-colors hover:text-primary ${
                     isActive("/about")
                       ? "text-primary"
                       : "text-muted-foreground"
                   }`}
              >
                <HiInformationCircle className="w-5 h-5" />
                Our Story
              </Link>
              <Link
                href="/services"
                className={`flex items-center gap-2  text-lg font-extralight hover:font-semibold transition-colors hover:text-primary ${
                  isActive("/services")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <HiCog className="w-5 h-5" />
                Services
              </Link>

              {/* Tool Kit with Dropdown using shadcn/ui */}
              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`flex items-center gap-2 text-lg font-extralight hover:font-semibold transition-colors hover:text-primary bg-transparent ${
                        isActive("/toolkit")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <FaTools className="w-5 h-5" />
                      Tool Kit
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {toolkitItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}

              <Link
                href="/team"
                className={`flex items-center gap-2  text-lg font-extralight hover:font-semibold transition-colors hover:text-primary ${
                  isActive("/team") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <HiUserGroup className="w-5 h-5" />
                Our team
              </Link>
              <Link
                href="/blog"
                className={`flex items-center gap-2 text-lg font-extralight hover:font-semibold transition-colors hover:text-primary ${
                  isActive("/blog") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <HiDocumentText className="w-5 h-5" />
                Blog
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Link
              href="/#contact-form"
              onClick={handleContactClick}
              // className="text-black hover:cursor-pointer bg-[#FFD500] rounded-2xl px-4 py-2 h-8 hidden sm:flex items-center gap-2 minimal-button minimal-button-primary text-sm lg:text-base"
              // >
              className="hover:cursor-pointer relative  rounded-full bg-[#FF69B4] text-black font-medium text-lg sm:flex item-center  gap-2 px-2 py-1 hidden
        shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
            >
              <HiChat className="w-5 h-5 mt-1 " />
              {`Let's chat`}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={closeMobileMenu}>
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}

      {/* Mobile sliding panel */}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Image
              src="/aampannalogo-svg.png"
              alt="Aam Pannaa Creations | Best Marketing Agency in India"
              width={80}
              height={28}
              className="w-auto h-7"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* Home Link */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                isActive("/")
                  ? "text-primary bg-accent shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              <HiHome className="w-5 h-5 mr-3" />
              <span className="flex-1">Home</span>
            </Link>

            {/* Services Link */}
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                isActive("/services")
                  ? "text-primary bg-accent shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              <HiCog className="w-5 h-5 mr-3" />
              <span className="flex-1">Services</span>
            </Link>

            {/* Tool Kit Dropdown */}
            <div className="space-y-2">
              <button
                onClick={toggleToolkit}
                className={`group flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname.startsWith("/toolkit")
                    ? "text-primary bg-accent shadow-sm"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                <FaTools className="w-5 h-5 mr-3" />
                <span className="flex-1 text-left">Tool Kit</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isToolkitExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Toolkit Submenu */}
              {isToolkitExpanded && (
                <div className="ml-4 space-y-1 animate-slideDown">
                  {toolkitItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Team Link */}
            <Link
              href="/team"
              onClick={closeMobileMenu}
              className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                isActive("/team")
                  ? "text-primary bg-accent shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              <HiUserGroup className="w-5 h-5 mr-3" />
              <span className="flex-1">Our team</span>
            </Link>

            {/* Blog Link */}
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                isActive("/blog")
                  ? "text-primary bg-accent shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              <HiDocumentText className="w-5 h-5 mr-3" />
              <span className="flex-1">Blog</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="p-4 border-t border-border font-bricolage ">
            <Link
              href="/#contact-form"
              onClick={(e) => {
                closeMobileMenu();
                if (pathname === "/") {
                  e.preventDefault();
                  setTimeout(() => smoothScrollToForm(), 400);
                }
              }}
              className="w-full flex items-center justify-center gap-2 minimal-button minimal-button-primary transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <HiChat className="w-5 h-5" />
              {`Let's chat`}
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      {/* <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style> */}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
