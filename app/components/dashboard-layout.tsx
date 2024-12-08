"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Dumbbell,
  History,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useSession, signOut } from "next-auth/react";
import ProtectedRoute from "./ProtectedRoute";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "/dashboard",
    },
    {
      title: "Workouts",
      icon: <Dumbbell className="w-5 h-5" />,
      href: "/dashboard/workouts",
    },
    {
      title: "History",
      icon: <History className="w-5 h-5" />,
      href: "/dashboard/history",
    },
    {
      title: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "/dashboard/settings",
    },
  ];

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-[#0F0F0F]">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 z-50 flex w-64 flex-col bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 transition-transform duration-200 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center text-sm">
                AI
              </div>
              Workout
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <ScrollArea className="flex-1 px-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:text-white hover:bg-[#6D28D9]/10"
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </nav>
          </ScrollArea>
          <div className="p-4 mt-auto border-t border-gray-800">
            <Button
              onClick={() => signOut({ callbackUrl: "/" })}
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-400 hover:text-white"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div
          className={cn(
            "flex-1 transition-all duration-200 ease-in-out",
            isSidebarOpen ? "lg:ml-64" : "ml-0"
          )}
        >
          <header className="sticky top-0 z-40 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
            <div className="flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="hidden lg:flex"
              >
                <Menu className="h-6 w-6" />
              </Button>
              {/* Add any other header content here */}
            </div>
          </header>
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
