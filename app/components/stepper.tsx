"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="flex items-center">
              {/* Line before */}
              {index !== 0 && (
                <div
                  className={cn(
                    "h-[2px] w-24 lg:w-32 -translate-x-1/2",
                    index <= currentStep ? "bg-[#6D28D9]" : "bg-gray-700"
                  )}
                />
              )}
              {/* Step circle */}
              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2",
                  index < currentStep
                    ? "border-[#6D28D9] bg-[#6D28D9] text-white"
                    : index === currentStep
                    ? "border-[#6D28D9] bg-gray-900 text-white"
                    : "border-gray-700 bg-gray-900 text-gray-400"
                )}
              >
                {index < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm">{step.id}</span>
                )}
              </div>
              {/* Line after */}
              {index !== steps.length - 1 && (
                <div
                  className={cn(
                    "h-[2px] w-24 lg:w-32 translate-x-1/2",
                    index < currentStep ? "bg-[#6D28D9]" : "bg-gray-700"
                  )}
                />
              )}
            </div>
            <div className="mt-2 text-center">
              <div
                className={cn(
                  "text-sm font-medium",
                  index <= currentStep ? "text-white" : "text-gray-400"
                )}
              >
                {step.title}
              </div>
              {step.description && (
                <div className="mt-1 text-xs text-gray-400">
                  {step.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
