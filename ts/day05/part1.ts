export const createStackArray = (input: string[]) => {
  const stacks: string[][] = new Array(Math.floor(input[0].length / 3)).fill(
    []
  );

  input.forEach((line) => {
    [...line].forEach((character, characterIndex) => {
      if ((characterIndex - 1) % 4 === 0) {
        if (!Number(character)) {
          const index = (characterIndex - 1) / 4;
          stacks[index] = [...(stacks[index] ?? []), character];
        }
      }
    });
  });

  stacks.forEach(
    (stack, index) =>
      (stacks[index] = stack.reverse().filter((c: string) => c !== " "))
  );

  return stacks;
};

const moveStack = (originalStacks: string[][], instruction: string) => {
  const stacks = [...originalStacks.map((s) => [...s])];
  const matches = instruction.match(/\d+/g);
  const amount = Number(matches?.[0]);
  const from = Number(matches?.[1]);
  const to = Number(matches?.[2]);

  if (!amount || !from || !to) return stacks;

  for (let i = 0; i < amount; i++) {
    const popped = stacks[from - 1].pop();
    if (popped) {
      stacks[to - 1].push(popped);
    }
  }

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

// console.log(solve(await Deno.readTextFile("day05/input.txt")));
