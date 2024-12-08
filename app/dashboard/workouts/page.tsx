"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/app/components/dashboard-layout";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dumbbell, Clock, Zap, ArrowRight } from "lucide-react";
import ProtectedRoute from "@/app/components/ProtectedRoute";

// Mock data for workouts
const workouts = [
  {
    id: "1",
    name: "Full Body Strength",
    description: "A comprehensive workout targeting all major muscle groups",
    duration: 45,
    difficulty: "Intermediate",
    exercises: 6,
  },
  {
    id: "2",
    name: "HIIT Cardio Blast",
    description:
      "High-intensity interval training to boost cardiovascular fitness",
    duration: 30,
    difficulty: "Advanced",
    exercises: 8,
  },
  {
    id: "3",
    name: "Yoga Flow",
    description: "A balanced yoga session for flexibility and mindfulness",
    duration: 60,
    difficulty: "Beginner",
    exercises: 10,
  },
  {
    id: "4",
    name: "Core Crusher",
    description: "Focused abdominal and lower back strengthening routine",
    duration: 20,
    difficulty: "Intermediate",
    exercises: 5,
  },
  {
    id: "5",
    name: "Upper Body Power",
    description: "Intense upper body workout for building strength",
    duration: 40,
    difficulty: "Advanced",
    exercises: 7,
  },
  {
    id: "6",
    name: "Lower Body Sculpt",
    description: "Target your legs and glutes with this effective routine",
    duration: 50,
    difficulty: "Intermediate",
    exercises: 6,
  },
];

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filteredWorkouts = workouts.filter(
    (workout) =>
      workout.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (difficultyFilter === "all" || workout.difficulty === difficultyFilter)
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Workouts</h1>
          <Button>Create Workout</Button>
        </div>

        <div className="flex space-x-4">
          <Input
            placeholder="Search workouts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <Card key={workout.id} className="bg-gray-900/50">
              <CardHeader>
                <CardTitle>{workout.name}</CardTitle>
                <CardDescription>{workout.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{workout.duration} min</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="w-4 h-4 mr-1" />
                    <span>{workout.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    <span>{workout.exercises} exercises</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/workouts/${workout.id}`}>
                    View Workout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No workouts found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
