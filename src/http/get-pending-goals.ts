type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch("http://localhost:8080/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
}
