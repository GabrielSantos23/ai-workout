"use client";

import { DashboardLayout } from "../../../components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function NotificationSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update notification settings)
    console.log("Notification settings updated:", {
      emailNotifications,
      pushNotifications,
      smsNotifications,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Notification Settings
          </h1>
          <p className="text-muted-foreground">
            Manage how you receive notifications from AI Workout Planner.
          </p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to be notified about updates and reminders.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="email-notifications"
                  className="flex flex-col space-y-1"
                >
                  <span>Email Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications via email
                  </span>
                </Label>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="push-notifications"
                  className="flex flex-col space-y-1"
                >
                  <span>Push Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications on your device
                  </span>
                </Label>
                <Switch
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="sms-notifications"
                  className="flex flex-col space-y-1"
                >
                  <span>SMS Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications via text message
                  </span>
                </Label>
                <Switch
                  id="sms-notifications"
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Preferences</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
