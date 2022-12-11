const isWorkCycle = (c: number) => c === 20 || (c - 20) % 40 === 0;

export const solve = (input: string) => {
  let x = 1;
  let cycle = 0;
  return input.split("\n").reduce((acc, instruction) => {
    const doWork = () => {
      acc = acc + x * cycle;
    };
    if (instruction === "noop") {
      cycle++;
      if (isWorkCycle(cycle)) doWork();
      return acc;
    }
    const [_, add] = instruction.split(" ");
    cycle++;
    if (isWorkCycle(cycle)) doWork();
    cycle++;
    if (isWorkCycle(cycle)) doWork();
    console.log("cycle", cycle);
    x = x + Number(add);
    return acc;
  }, 0);
};

console.log(solve(await Deno.readTextFile("day10/input.txt")));
