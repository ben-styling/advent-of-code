import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { getScore } from "./index.ts";

Deno.test("Should return correct score", () => {
  const exampleInput = "A Y\nB X\nC Z\n";
  const result = getScore(exampleInput);
  assertEquals(result, 15);
});
Deno.test("Should return correct score", () => {
  const exampleInput = "A Y\nB X\nC Z\nC X\n";
  const result = getScore(exampleInput);
  assertEquals(result, 22);
});
