"use client";

import { Header } from "./components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, Brain, Clock, Settings, Star } from "lucide-react";
import placeholder from "../public/workout_placeholder.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 border border-[#6D28D9]/20 rounded-full px-4 py-2">
                  <span className="bg-[#6D28D9] w-2 h-2 rounded-full"></span>
                  <span className="text-sm">AI-Powered Workout Plans</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight">
                  Transform Your Fitness Journey with AI
                </h1>
                <p className="text-xl text-gray-400">
                  Get personalized workout plans tailored to your goals,
                  experience, and schedule
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-8"
                  >
                    <Link href="/create-workout">Start Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-gray-800 text-white hover:bg-gray-800"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-purple-600 rounded-lg blur-3xl opacity-20"></div>
                <Card className="relative bg-gray-900/50 border-gray-800 p-8 backdrop-blur-sm">
                  <Image
                    src={placeholder}
                    alt="Workout Preview"
                    className="rounded-lg w-full"
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Dumbbell className="w-8 h-8 text-[#6D28D9]" />,
                  title: "Personalized Plans",
                  description:
                    "AI-generated workouts based on your fitness level and goals",
                },
                {
                  icon: <Brain className="w-8 h-8 text-[#6D28D9]" />,
                  title: "Smart Adaptation",
                  description: "Workouts that evolve as you progress",
                },
                {
                  icon: <Clock className="w-8 h-8 text-[#6D28D9]" />,
                  title: "Flexible Scheduling",
                  description:
                    "Plans that fit your available time and preferences",
                },
                {
                  icon: <Settings className="w-8 h-8 text-[#6D28D9]" />,
                  title: "Equipment Options",
                  description: "Workouts adapted to your available equipment",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 p-6 hover:bg-gray-900/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#6D28D9]/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Trusted by Fitness Enthusiasts
              </h2>
              <p className="text-gray-400">
                Join thousands of satisfied users who have transformed their
                fitness journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Sarah L.",
                  role: "Marathon Runner",
                  quote:
                    "The AI-generated plans have significantly improved my endurance. I've shaved 15 minutes off my marathon time!",
                  rating: 5,
                },
                {
                  name: "Mike T.",
                  role: "Bodybuilder",
                  quote:
                    "I've seen more muscle growth in 3 months using this app than I did in a year of self-guided workouts.",
                  rating: 5,
                },
                {
                  name: "Emily R.",
                  role: "Yoga Instructor",
                  quote:
                    "The flexibility of the app is amazing. It adapts perfectly to my ever-changing schedule.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">
                10,000+ users have achieved their fitness goals!
              </p>
              <div className="flex justify-center items-center gap-8 mb-8">
                {["Nike", "Adidas", "Under Armour", "Reebok"].map(
                  (partner, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                      <img
                        src={`/placeholder.svg`}
                        alt={`${partner} logo`}
                        className="h-8"
                      />
                    </div>
                  )
                )}
              </div>
              <Button
                asChild
                size="lg"
                className="bg-[#6D28D9] hover:bg-[#5B21B6]"
              >
                <Link href="/signup">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6D28D9]/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-400">
                Choose the plan that fits your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Free</h3>
                    <p className="text-gray-400">Perfect for getting started</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Basic workout plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Limited customization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Progress tracking
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gray-800 hover:bg-gray-700"
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#6D28D9] text-white text-sm px-4 py-1">
                    Popular
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Pro</h3>
                    <p className="text-gray-400">
                      For serious fitness enthusiasts
                    </p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-400">/year</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Advanced AI workout plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Full customization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D28D9]"></div>
                      Advanced analytics
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-[#6D28D9] hover:bg-[#5B21B6]"
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question:
                    "How does the AI create personalized workout plans?",
                  answer:
                    "Our AI analyzes your fitness goals, experience level, available equipment, and schedule to create a tailored workout plan. It continuously adapts based on your progress and feedback.",
                },
                {
                  question: "Can I use the app if I'm a beginner?",
                  answer:
                    "Our AI adapts to all fitness levels, from complete beginners to advanced athletes. It will create a plan that matches your current abilities and helps you progress safely.",
                },
                {
                  question: "How often are the workout plans updated?",
                  answer:
                    "The AI continuously learns from your progress and adjusts your plan accordingly. You can expect weekly updates to your workout plan, ensuring it remains challenging and effective.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes, we offer a 14-day free trial of our Pro plan. This allows you to experience all the advanced features before committing to a subscription.",
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer:
                    "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to Pro features until the end of your current billing period.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-purple-600 opacity-10"></div>
              <div className="relative z-10">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Transform Your Fitness Journey?
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Join thousands of users who have already achieved their
                    fitness goals with AI-powered workout plans.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#6D28D9] hover:bg-[#5B21B6]"
                  >
                    <Link href="/signup">Start Your Journey</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-gray-400 hover:text-white"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-gray-400 hover:text-white"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Workout Planner. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
