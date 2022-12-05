import { createStackArray } from "./part1.ts";

const moveStack = (originalStacks: string[][], instruction: string) => {
  const stacks = [...originalStacks.map((s) => [...s])];
  const matches = instruction.match(/\d+/g);
  const amount = Number(matches?.[0]);
  const from = Number(matches?.[1]);
  const to = Number(matches?.[2]);

  if (!amount || !from || !to) return stacks;

  const movedStacks = stacks[from - 1].splice(
    stacks[from - 1].length - amount,
    amount
  );

  stacks[to - 1].push(...movedStacks);

  return stacks;
};

export const solve = (input: string) => {
  const [stackInput, instructionInput] = input.split("\n\n");
  let stacks = createStackArray(stackInput.split("\n"));
  instructionInput.split("\n").forEach((instruction) => {
    stacks = moveStack(stacks, instruction);
  });

  const result = stacks.reduce((acc, cur) => {
    if (cur[cur.length - 1]) {
      return acc + cur[cur.length - 1];
    }
    return acc;
  }, "");

  return result;
};

console.log(solve(await Deno.readTextFile("day05/input.txt")));
