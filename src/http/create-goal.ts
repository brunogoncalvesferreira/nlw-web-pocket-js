interface CreateGoalResponse {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalResponse) {
  await fetch("http://localhost:8080/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  });
}
