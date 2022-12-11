import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { Coords, moveHead, moveTail, solve } from "./part2.ts";

const input = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

Deno.test("moves", () => {
  let head: [number, number] = [0, 0];
  let tail: [number, number] = [0, 0];
  head = moveHead(head, "U");
  assertEquals(head, [1, 0]);
  tail = moveTail(head, tail);
  assertEquals(tail, [0, 0]);

  head = moveHead(head, "U");
  assertEquals(head, [2, 0]);
  tail = moveTail(head, tail);
  assertEquals(tail, [1, 0]);

  head = moveHead(head, "U");
  assertEquals(head, [3, 0]);
  tail = moveTail(head, tail);
  assertEquals(tail, [2, 0]);

  head = moveHead(head, "R");
  assertEquals(head, [3, 1]);
  tail = moveTail(head, tail);
  assertEquals(tail, [2, 0]);

  head = moveHead(head, "R");
  assertEquals(head, [3, 2]);
  tail = moveTail(head, tail);
  assertEquals(tail, [3, 1]);

  head = moveHead(head, "R");
  assertEquals(head, [3, 3]);
  tail = moveTail(head, tail);
  assertEquals(tail, [3, 2]);
});

Deno.test("jump", () => {
  let tail: Coords = [0, 1];
  tail = moveTail([2, 0], tail);
  assertEquals(tail, [1, 0]);
});

Deno.test("solve", () => {
  assertEquals(solve(`R 10`), 2);
});
Deno.test("solve", () => {
  assertEquals(solve(`R 11`), 3);
});
Deno.test("solve", () => {
  assertEquals(solve(`R 11\nU 1`), 3);
});
Deno.test("solve", () => {
  assertEquals(solve(`R 5\nU 8\nL 3`), 1);
});

Deno.test("solve", () => {
  assertEquals(solve(`R 5\nU 8\nL 8`), 4);
});

Deno.test("solve", () => {
  assertEquals(solve(input), 36);
});
