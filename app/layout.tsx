"use client"; // Indica que este componente deve ser tratado como Client Component

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AI Workout Planner",
//   description: "Personalized workout plans powered by AI",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0F0F0F] text-white`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
