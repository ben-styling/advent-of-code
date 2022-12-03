import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { solve } from "./part2.ts";

Deno.test("solve", () => {
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
  const result = solve(input);
  assertEquals(result, 70);
});
