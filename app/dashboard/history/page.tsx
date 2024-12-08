"use client";

import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";

// Mock data for workout history
const workoutHistory = [
  {
    id: "1",
    name: "Full Body Strength",
    date: "2023-06-01",
    duration: 45,
    calories: 320,
    difficulty: "Intermediate",
  },
  {
    id: "2",
    name: "HIIT Cardio Blast",
    date: "2023-06-03",
    duration: 30,
    calories: 280,
    difficulty: "Advanced",
  },
  {
    id: "3",
    name: "Yoga Flow",
    date: "2023-06-05",
    duration: 60,
    calories: 200,
    difficulty: "Beginner",
  },
  {
    id: "4",
    name: "Core Crusher",
    date: "2023-06-07",
    duration: 20,
    calories: 150,
    difficulty: "Intermediate",
  },
  {
    id: "5",
    name: "Upper Body Power",
    date: "2023-06-09",
    duration: 40,
    calories: 300,
    difficulty: "Advanced",
  },
  {
    id: "6",
    name: "Lower Body Sculpt",
    date: "2023-06-11",
    duration: 50,
    calories: 350,
    difficulty: "Intermediate",
  },
  {
    id: "7",
    name: "Full Body Strength",
    date: "2023-06-13",
    duration: 45,
    calories: 330,
    difficulty: "Intermediate",
  },
  {
    id: "8",
    name: "HIIT Cardio Blast",
    date: "2023-06-15",
    duration: 30,
    calories: 290,
    difficulty: "Advanced",
  },
];

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);

  const filteredWorkouts = workoutHistory.filter(
    (workout) =>
      workout.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (difficultyFilter === "all" || workout.difficulty === difficultyFilter) &&
      (!dateFilter || workout.date === format(dateFilter, "yyyy-MM-dd"))
  );

  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
      return direction === "ascending" ? -1 : 1;
    }
    if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
      return direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workout History</h1>
          <p className="text-muted-foreground">
            View and analyze your past workouts.
          </p>
        </div>

        <Card className="">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine your workout history view</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Input
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
              <Select
                value={difficultyFilter}
                onValueChange={setDifficultyFilter}
              >
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !dateFilter && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFilter ? (
                      format(dateFilter, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFilter}
                    onSelect={setDateFilter}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {dateFilter && (
                <Button
                  variant="ghost"
                  onClick={() => setDateFilter(undefined)}
                >
                  Clear Date Filter
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workout Log</CardTitle>
            <CardDescription>Your completed workouts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="w-[200px] cursor-pointer"
                    onClick={() => requestSort("name")}
                  >
                    Workout Name
                    {sortConfig?.key === "name" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp className="inline ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="inline ml-2 h-4 w-4" />
                      ))}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => requestSort("date")}
                  >
                    Date
                    {sortConfig?.key === "date" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp className="inline ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="inline ml-2 h-4 w-4" />
                      ))}
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer"
                    onClick={() => requestSort("duration")}
                  >
                    Duration (min)
                    {sortConfig?.key === "duration" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp className="inline ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="inline ml-2 h-4 w-4" />
                      ))}
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer"
                    onClick={() => requestSort("calories")}
                  >
                    Calories Burned
                    {sortConfig?.key === "calories" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp className="inline ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="inline ml-2 h-4 w-4" />
                      ))}
                  </TableHead>
                  <TableHead className="text-right">Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedWorkouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell className="font-medium">
                      {workout.name}
                    </TableCell>
                    <TableCell>{workout.date}</TableCell>
                    <TableCell className="text-right">
                      {workout.duration}
                    </TableCell>
                    <TableCell className="text-right">
                      {workout.calories}
                    </TableCell>
                    <TableCell className="text-right">
                      {workout.difficulty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {sortedWorkouts.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted-foreground">
                  No workouts found. Try adjusting your filters.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
