import { getMostCalories } from "./index.ts";

console.log(getMostCalories(await Deno.readTextFile("day01/input.txt")));
