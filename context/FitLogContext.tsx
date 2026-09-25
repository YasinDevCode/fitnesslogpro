"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { PlanWorkout, Workout } from "@/types/workout";

interface FitLogContextType {
  plan: PlanWorkout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;

  toast: string;
  clearToast: () => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<PlanWorkout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [toast, setToast] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) {
        return;
      }

      try {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
          const parsedPlan = JSON.parse(storedPlan);

          if (Array.isArray(parsedPlan)) {
            setPlan(parsedPlan);
          }
        }

        if (storedSaved) {
          const parsedSaved = JSON.parse(storedSaved);

          if (Array.isArray(parsedSaved)) {
            setSaved(parsedSaved);
          }
        }
      } catch (error) {
        console.error("Failed to load FitLog data:", error);
      } finally {
        setIsHydrated(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [isHydrated, plan]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [isHydrated, saved]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) {
      showToast("Today's plan is limited to 5 workouts");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      showToast("Workout is already in today's plan");
      return;
    }

    setPlan((previous) => [
      ...previous,
      {
        ...workout,
        done: false,
      },
    ]);

    showToast("Added to today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("Workout is already saved");
      return;
    }

    setSaved((previous) => [...previous, workout]);

    showToast("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showToast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showToast("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setPlan((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              done: true,
            }
          : item
      )
    );

    showToast("Workout marked as done");
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((item) => item.id === id);
  };

  const clearToast = () => {
    setToast("");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
        toast,
        clearToast,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}