"use client";

import { ReactNode, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BookUser, Users2Icon , Home, NotebookPen, FileText, LogOut, Menu} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { AuthGuard } from "@/components/admin/authGuard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import toast from "react-hot-toast";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Employees", href: "/admin/employee", icon: Users2Icon },
  { name: "Workshop", href: "/admin/workshop", icon: NotebookPen },
  { name: "Blogs", href: "/admin/blog", icon: FileText },
  { name: "Subscribers", href: "/admin/subscriber", icon: BookUser },
];

interface AdminLayoutProps {
  children: ReactNode;
}

function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <nav className="space-y-1 px-3 py-4">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <link.icon className="h-5 w-5" />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Logged out successfully");
        router.push("/login");
        router.refresh();
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout");
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Top Navbar */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            {/* Left: Logo + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex h-16 items-center border-b px-6">
                    <Link href="/admin" onClick={() => setSidebarOpen(false)}>
                      <Image
                        src="/aampannalogo-svg.png"
                        alt="Admin Logo"
                        width={100}
                        height={40}
                        priority
                      />
                    </Link>
                  </div>
                  <SidebarContent 
                    pathname={pathname} 
                    onClose={() => setSidebarOpen(false)} 
                  />
                </SheetContent>
              </Sheet>

              {/* Logo */}
              <Link href="/admin" className="flex items-center">
                <Image
                  src="/aampannalogo-svg.png"
                  alt="Admin Logo"
                  width={120}
                  height={48}
                  priority
                  className="hidden md:block"
                />
                <Image
                  src="/aampannalogo-svg.png"
                  alt="Admin Logo"
                  width={80}
                  height={32}
                  priority
                  className="md:hidden"
                />
              </Link>
            </div>

            {/* Right: Theme Toggle + Logout */}
            <div className="flex items-center gap-2">
              <AnimatedThemeToggler />
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex md:w-64 md:flex-col border-r bg-background">
            <div className="flex-1 overflow-y-auto">
              <SidebarContent pathname={pathname} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6 md:px-6">
              {/* Breadcrumb */}
              <div className="mb-6">
                <Breadcrumb />
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}