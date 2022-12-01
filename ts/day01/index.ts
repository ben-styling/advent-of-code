export const getMostCalories = (input: string) =>
  Math.max(
    ...input
      .split("\n\n")
      .map((snack) =>
        snack.split("\n").reduce((total, calories) => total + +calories, 0)
      )
  );

export const getTopThreeElvesCalorieTotal = (input: string) => {
  const sortedTotals = input
    .split("\n\n")
    .map((snack) =>
      snack.split("\n").reduce((total, calories) => total + +calories, 0)
    )
    .sort((a, b) => b - a);

  return sortedTotals[0] + sortedTotals[1] + sortedTotals[2];
};
