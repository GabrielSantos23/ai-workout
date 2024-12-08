"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(name, email, password);

      if (!response.ok) {
        setError(data.message || "An error occurred during registration");
      } else {
        console.log("Response data:", data);
        router.push("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F]">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>
              Create a new account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  disabled={isLoading}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <LoaderCircle className=" text-white animate-spin" />
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#6D28D9] hover:underline">
                Login here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
