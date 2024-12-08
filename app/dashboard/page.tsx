"use client";

import { DashboardLayout } from "../components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Activity, TrendingUp, Users, Calendar } from "lucide-react";
import ProtectedRoute from "../components/ProtectedRoute";

// Sample data for the charts
const workoutData = [
  { name: "Mon", workouts: 3 },
  { name: "Tue", workouts: 5 },
  { name: "Wed", workouts: 4 },
  { name: "Thu", workouts: 6 },
  { name: "Fri", workouts: 4 },
  { name: "Sat", workouts: 7 },
  { name: "Sun", workouts: 5 },
];

const recentActivities = [
  {
    id: 1,
    type: "Completed Workout",
    name: "Full Body Strength",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "Achievement Unlocked",
    name: "7 Day Streak",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "New Personal Best",
    name: "Bench Press: 185lbs",
    time: "Yesterday",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Workouts
              </CardTitle>
              <Activity className="w-4 h-4 text-[#6D28D9]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Streak
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-[#6D28D9]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-gray-400">Personal best: 14 days</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Workout Minutes
              </CardTitle>
              <Calendar className="w-4 h-4 text-[#6D28D9]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">860</div>
              <p className="text-xs text-gray-400">This month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Goals Completed
              </CardTitle>
              <Users className="w-4 h-4 text-[#6D28D9]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/5</div>
              <p className="text-xs text-gray-400">60% completion rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Chart */}
          <Card className="col-span-2 bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Workout Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Bar
                      dataKey="workouts"
                      fill="#6D28D9"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/placeholder.svg" alt="Activity" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-sm text-gray-400">{activity.name}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Monthly Goal Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Workouts Completed</div>
                    <div className="text-sm text-gray-400">15/20</div>
                  </div>
                  <Progress value={75} className="bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Weight Goal</div>
                    <div className="text-sm text-gray-400">8/10 kg</div>
                  </div>
                  <Progress value={80} className="bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Cardio Minutes</div>
                    <div className="text-sm text-gray-400">120/150</div>
                  </div>
                  <Progress value={80} className="bg-gray-800" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Upcoming Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Upper Body Strength",
                    time: "Tomorrow, 9:00 AM",
                    duration: "45 min",
                  },
                  {
                    name: "HIIT Cardio",
                    time: "Wed, 10:30 AM",
                    duration: "30 min",
                  },
                  {
                    name: "Lower Body Focus",
                    time: "Thu, 9:00 AM",
                    duration: "50 min",
                  },
                ].map((workout, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium">{workout.name}</p>
                      <p className="text-xs text-gray-400">{workout.time}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-400">
                      {workout.duration}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full bg-[#6D28D9] hover:bg-[#5B21B6]">
                  Start New Workout
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-800 hover:bg-gray-800"
                >
                  View Workout History
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-800 hover:bg-gray-800"
                >
                  Update Goals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
