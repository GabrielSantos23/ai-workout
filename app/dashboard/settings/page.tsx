"use client";

import { DashboardLayout } from "../../components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { User, Bell, Lock, HelpCircle } from "lucide-react";

export default function SettingsPage() {
  const settingsCategories = [
    {
      title: "Profile",
      description: "Manage your personal information",
      icon: User,
      href: "/dashboard/settings/profile",
    },
    {
      title: "Notifications",
      description: "Control your notification preferences",
      icon: Bell,
      href: "/dashboard/settings/notifications",
    },
    {
      title: "Privacy",
      description: "Adjust your privacy settings",
      icon: Lock,
      href: "/dashboard/settings/privacy",
    },
    {
      title: "Help & Support",
      description: "Get help or contact support",
      icon: HelpCircle,
      href: "/dashboard/settings/support",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {settingsCategories.map((category, index) => (
            <Card key={index} className="bg-gray-900/50">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={category.href} passHref>
                  <Button className="w-full">
                    <category.icon className="mr-2 h-4 w-4" />
                    Manage
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
