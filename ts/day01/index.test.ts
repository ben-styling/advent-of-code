import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { getMostCalories, getTopThreeElvesCalorieTotal } from "./index.ts";

Deno.test("Find the elf carrying the most calories & return calories", () => {
  assertEquals(getMostCalories("1\n\n2\n\n3\n\n4\n\n5"), 5);
  assertEquals(getMostCalories("1\n1\n1\n1\n1\n1\n1\n\n2\n\n3\n\n4\n\n5"), 7);
  assertEquals(getMostCalories("1"), 1);
  assertEquals(getMostCalories("1\n\n25"), 25);
  assertEquals(getMostCalories("1\n\n1000\n\n25"), 1000);
});

Deno.test(
  "Find the top three elves carrying the most calories & return total calories",
  () => {
    assertEquals(
      getTopThreeElvesCalorieTotal("1\n\n2\n\n3\n\n4\n\n5\n\n6"),
      15
    );
    assertEquals(
      getTopThreeElvesCalorieTotal("1\n\n1000\n\n2\n\n3\n\n4"),
      1007
    );
  }
);
