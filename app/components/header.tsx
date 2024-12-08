"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <header className="py-6 px-6 sticky top-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center">
            AI
          </div>
          Workout Planner
        </Link>
        <div className="flex items-center gap-4">
          {!session ? (
            <>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:text-white/80"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-white">{session.user?.name}</p>
              <Button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-500 text-white"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
