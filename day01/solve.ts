import { getMostCalories, getTopThreeElvesCalorieTotal } from "./index.ts";

console.log(getMostCalories(await Deno.readTextFile("day01/input.txt")));

console.log(
  getTopThreeElvesCalorieTotal(await Deno.readTextFile("day01/input.txt"))
);
