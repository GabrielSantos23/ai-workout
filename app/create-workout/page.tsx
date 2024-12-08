"use client";

import { useState } from "react";
import { Header } from "../components/header";
import { Stepper } from "../components/stepper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
  { id: 1, title: "Basic Info" },
  { id: 2, title: "Fitness Level" },
  { id: 3, title: "Goals" },
  { id: 4, title: "Schedule" },
  { id: 5, title: "Equipment" },
  { id: 6, title: "Health" },
];

const fitnessLevels = ["Beginner", "Intermediate", "Advanced"];
const timeSlots = [
  "15-30 minutes",
  "30-45 minutes",
  "45-60 minutes",
  "60+ minutes",
];
const equipmentOptions = [
  { id: "dumbbells", label: "Dumbbells" },
  { id: "bands", label: "Resistance Bands" },
  { id: "gym", label: "Gym Access" },
  { id: "bodyweight", label: "Bodyweight Only" },
  { id: "other", label: "Other Equipment" },
];

export default function CreateWorkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessLevel: "",
    goals: "",
    timePerSession: "",
    equipment: [] as string[],
    limitations: "",
    experience: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F]">
      <Header />
      <main className="flex-grow p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            className="mb-6 sm:mb-8"
          />

          <Card className="bg-gray-900/50 border-gray-800 p-4 sm:p-6">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Basic Information
                  </h2>
                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="Enter your height"
                        value={formData.height}
                        onChange={(e) =>
                          setFormData({ ...formData, height: e.target.value })
                        }
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Enter your weight"
                        value={formData.weight}
                        onChange={(e) =>
                          setFormData({ ...formData, weight: e.target.value })
                        }
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Fitness Level
                  </h2>
                  <div className="space-y-4">
                    <Label>Select your fitness level</Label>
                    <RadioGroup
                      value={formData.fitnessLevel}
                      onValueChange={(value) =>
                        setFormData({ ...formData, fitnessLevel: value })
                      }
                      className="grid gap-2 sm:grid-cols-3"
                    >
                      {fitnessLevels.map((level) => (
                        <div
                          key={level}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem value={level} id={level} />
                          <Label htmlFor={level}>{level}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Tell us about your fitness experience
                      </Label>
                      <Textarea
                        id="experience"
                        placeholder="Describe your fitness background..."
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="bg-gray-800 border-gray-700 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Fitness Goals
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="goals">
                      What are your main fitness goals?
                    </Label>
                    <Textarea
                      id="goals"
                      placeholder="E.g., weight loss, muscle gain, improved endurance..."
                      value={formData.goals}
                      onChange={(e) =>
                        setFormData({ ...formData, goals: e.target.value })
                      }
                      className="bg-gray-800 border-gray-700 min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Time Availability
                  </h2>
                  <div className="space-y-4">
                    <Label>How much time can you dedicate per session?</Label>
                    <RadioGroup
                      value={formData.timePerSession}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timePerSession: value })
                      }
                      className="grid gap-2 sm:grid-cols-2"
                    >
                      {timeSlots.map((slot) => (
                        <div key={slot} className="flex items-center space-x-2">
                          <RadioGroupItem value={slot} id={slot} />
                          <Label htmlFor={slot}>{slot}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Available Equipment
                  </h2>
                  <div className="space-y-4">
                    <Label>Select all equipment you have access to:</Label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {equipmentOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={option.id}
                            checked={formData.equipment.includes(option.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  equipment: [...formData.equipment, option.id],
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  equipment: formData.equipment.filter(
                                    (id) => id !== option.id
                                  ),
                                });
                              }
                            }}
                          />
                          <Label htmlFor={option.id}>{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Health Considerations
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="limitations">
                      Do you have any physical limitations or injuries we should
                      know about?
                    </Label>
                    <Textarea
                      id="limitations"
                      placeholder="E.g., knee pain, back problems, recent injuries..."
                      value={formData.limitations}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          limitations: e.target.value,
                        })
                      }
                      className="bg-gray-800 border-gray-700 min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-gray-700 hover:bg-gray-800 w-full sm:w-auto"
                >
                  Previous
                </Button>
                {currentStep === steps.length ? (
                  <Button
                    type="submit"
                    className="bg-[#6D28D9] hover:bg-[#5B21B6] w-full sm:w-auto"
                  >
                    Create Workout Plan
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#6D28D9] hover:bg-[#5B21B6] w-full sm:w-auto"
                  >
                    Next Step
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
}
