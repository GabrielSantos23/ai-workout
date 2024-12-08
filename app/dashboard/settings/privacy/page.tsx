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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function PrivacySettingsPage() {
  const [publicProfile, setPublicProfile] = useState(false);
  const [dataSharing, setDataSharing] = useState("minimal");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update privacy settings)
    console.log("Privacy settings updated:", { publicProfile, dataSharing });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Privacy Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your privacy and data sharing preferences.
          </p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Privacy Preferences</CardTitle>
              <CardDescription>
                Control your privacy settings and data sharing options.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="public-profile"
                  className="flex flex-col space-y-1"
                >
                  <span>Public Profile</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Allow others to view your profile
                  </span>
                </Label>
                <Switch
                  id="public-profile"
                  checked={publicProfile}
                  onCheckedChange={setPublicProfile}
                />
              </div>
              <div className="space-y-3">
                <Label>Data Sharing</Label>
                <RadioGroup value={dataSharing} onValueChange={setDataSharing}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="minimal" id="minimal" />
                    <Label htmlFor="minimal">
                      Minimal - Only essential data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <Label htmlFor="balanced">
                      Balanced - Improve your experience
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full" id="full" />
                    <Label htmlFor="full">
                      Full - Help improve our services
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Privacy Settings</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
