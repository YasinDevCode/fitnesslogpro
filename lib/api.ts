import { Workout } from "@/types/workout";

const API_URL =
  "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(
  id: string
): Promise<Workout> {
  try {
    const response = await fetch(
      `${API_URL}/${id}`
    );

    if (response.ok) {
      return response.json();
    }
  } catch {
    // fallback below
  }

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    throw new Error("Workout not found");
  }

  return workout;
}