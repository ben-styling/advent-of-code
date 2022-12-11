import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { solve, updateTail } from "./part1.ts";

const input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

Deno.test("solve", () => {
  const head: [number, number] = [0, 0];
  const tail: [number, number] = [0, 0];
  let result = updateTail(head, tail, "U");
  assertEquals(result, [
    [1, 0],
    [0, 0],
  ]);
  result = updateTail(result[0], result[1], "U");
  assertEquals(result, [
    [2, 0],
    [1, 0],
  ]);
  result = updateTail(result[0], result[1], "U");
  assertEquals(result, [
    [3, 0],
    [2, 0],
  ]);
  result = updateTail(result[0], result[1], "R");
  assertEquals(result, [
    [3, 1],
    [2, 0],
  ]);
});

Deno.test("solve", () => {
  assertEquals(solve(input), 13);
});
