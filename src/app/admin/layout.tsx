'use client';

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { User, Home, NotebookPen, FileText, LogOut } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { AuthGuard } from "@/components/admin/authGuard";
import toast from "react-hot-toast";

const NAV_LINKS = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Employees", href: "/admin/employee", icon: User },
  { name: "Workshop", href: "/admin/workshop", icon: NotebookPen },
  { name: "Blogs", href: "/admin/blog", icon: FileText },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

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
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
          <div className="flex">
            <Link href="/admin">
              <Image
                src="/aampannalogo-svg.png"
                alt="Admin Logo"
                width={100}
                height={80}
                priority
                className="mr-4"
              />
            </Link>
          </div>
          <Button 
            variant="default" 
            className="hover:cursor-pointer flex items-center gap-2"
            onClick={handleLogout}
          > 
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </header>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-sm">
            <nav className="mt-6 px-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-5 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {link.icon && <link.icon className="inline-block mr-2" />}
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto px-6 py-6">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Breadcrumb />
            </div>
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}