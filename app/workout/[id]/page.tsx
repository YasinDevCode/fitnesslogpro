import WorkoutDetails from "@/components/workout/WorkoutDetails";

interface WorkoutDetailsPageProps{
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps){
  const { id } = await params;

  return <WorkoutDetails id={id}/>;
}