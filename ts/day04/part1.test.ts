import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { solve } from "./part1.ts";

Deno.test("solve", () => {
  const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  const result = solve(input);
  assertEquals(result, 2);
});
