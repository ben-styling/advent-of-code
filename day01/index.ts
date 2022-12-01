export const getMostCalories = (input: string) => {
  const elves = input.split("\n\n");

  const elvesWithCalories = elves
    .map((elf) =>
      elf.split("\n").reduce((total, calories) => total + +calories, 0)
    )
    .sort((a, b) => b - a);

  const mostCalories = elvesWithCalories[0];

  return mostCalories;
};

export const getTopThreeElvesCalorieTotal = (input: string) => {
  const elves = input.split("\n\n");

  const elvesWithCalories = elves
    .map((elf) =>
      elf.split("\n").reduce((total, calories) => total + +calories, 0)
    )
    .sort((a, b) => b - a);

  const calorieTotal =
    elvesWithCalories[0] + elvesWithCalories[1] + elvesWithCalories[2];

  return calorieTotal;
};
