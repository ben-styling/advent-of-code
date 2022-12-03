import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  getCommonLetters,
  getCompartments,
  getLetterPriority,
  solve,
} from "./part1.ts";

Deno.test("getCompartments", () => {
  const result = getCompartments("vJrwpWtwJgWrhcsFMMfFFhFp");
  assertEquals(result, ["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
});

Deno.test("Get common letters", () => {
  const result = getCommonLetters("vJrwpWtwJgWr", "hcsFMMfFFhFp");
  assertEquals(result, ["p"]);
});

Deno.test("Get common letters", () => {
  const result = getCommonLetters("jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL");
  assertEquals(result, ["L"]);
});

Deno.test("Get common letters", () => {
  const result = getCommonLetters("qwergasdfzxcvp", "hjlkyonmbip");
  assertEquals(result, ["p"]);
});

Deno.test("getLetterPriority", () => {
  Deno.test("A", () => {
    const result = getLetterPriority("A");
    assertEquals(result, 27);
  });

  Deno.test("s", () => {
    const result = getLetterPriority("s");
    assertEquals(result, 19);
  });

  Deno.test("Z", () => {
    const result = getLetterPriority("Z");
    assertEquals(result, 52);
  });

  Deno.test("a", () => {
    const result = getLetterPriority("a");
    assertEquals(result, 1);
  });

  Deno.test("z", () => {
    const result = getLetterPriority("z");
    assertEquals(result, 26);
  });
});

Deno.test("solve", () => {
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
  const result = solve(input);
  assertEquals(result, 157);
});
