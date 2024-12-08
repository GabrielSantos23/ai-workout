"use client";

import { useState } from "react";
import { DashboardLayout } from "@/app/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dumbbell, Clock, Zap, CheckCircle2, RotateCcw } from "lucide-react";

// Mock data for the workout
const workoutData = {
  id: "1",
  name: "Full Body Strength",
  description: "A comprehensive workout targeting all major muscle groups",
  duration: 45,
  difficulty: "Intermediate",
  exercises: [
    { id: "1", name: "Squats", sets: 3, reps: 12, weight: 50 },
    { id: "2", name: "Bench Press", sets: 3, reps: 10, weight: 60 },
    { id: "3", name: "Deadlifts", sets: 3, reps: 8, weight: 80 },
    { id: "4", name: "Shoulder Press", sets: 3, reps: 10, weight: 30 },
    { id: "5", name: "Pull-ups", sets: 3, reps: 8, weight: 0 },
    { id: "6", name: "Lunges", sets: 3, reps: 12, weight: 20 },
  ],
};

export default function WorkoutPage() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const handleNextExercise = () => {
    if (currentExercise < workoutData.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
    setCompletedExercises([
      ...completedExercises,
      workoutData.exercises[currentExercise].id,
    ]);
  };

  const handlePreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const resetWorkout = () => {
    setCurrentExercise(0);
    setCompletedExercises([]);
  };

  const progress =
    (completedExercises.length / workoutData.exercises.length) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {workoutData.name}
          </h1>
          <p className="text-muted-foreground">{workoutData.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Workout Overview</CardTitle>
              <CardDescription>
                Track your progress through the workout
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span>{workoutData.duration} minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Dumbbell className="w-5 h-5 text-muted-foreground" />
                  <span>{workoutData.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-muted-foreground" />
                  <span>{workoutData.exercises.length} exercises</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Exercise</CardTitle>
              <CardDescription>Follow along with your workout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-4">
                {workoutData.exercises[currentExercise].name}
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">
                    {workoutData.exercises[currentExercise].sets}
                  </div>
                  <div className="text-sm text-muted-foreground">Sets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {workoutData.exercises[currentExercise].reps}
                  </div>
                  <div className="text-sm text-muted-foreground">Reps</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {workoutData.exercises[currentExercise].weight}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Weight (lbs)
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousExercise}
                disabled={currentExercise === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNextExercise}
                disabled={currentExercise === workoutData.exercises.length - 1}
              >
                {currentExercise === workoutData.exercises.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Workout Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="exercises">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
              </TabsList>
              <TabsContent value="exercises">
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  {workoutData.exercises.map((exercise, index) => (
                    <div
                      key={exercise.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center space-x-2">
                        {completedExercises.includes(exercise.id) ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                        )}
                        <span>{exercise.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {exercise.sets} x {exercise.reps} @ {exercise.weight}lbs
                      </span>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="instructions">
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Warm up with 5-10 minutes of light cardio.</li>
                    <li>
                      Perform each exercise for the prescribed sets and reps.
                    </li>
                    <li>Rest 60-90 seconds between sets.</li>
                    <li>Focus on proper form and controlled movements.</li>
                    <li>
                      Increase weight when you can complete all sets and reps
                      with good form.
                    </li>
                    <li>Cool down with 5-10 minutes of stretching.</li>
                    <li>Stay hydrated throughout your workout.</li>
                    <li>Listen to your body and adjust as needed.</li>
                  </ol>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={resetWorkout}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Workout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
