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
