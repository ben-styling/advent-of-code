import { augmentWithSizes, createDirObject } from "./part1.ts";

export const solve = (input: string) => {
  const dir = createDirObject(input);
  augmentWithSizes(dir);

  const totalSize = 70000000;
  const totalSizeNeeded = 30000000;
  const totalSizeUsed = dir["/"].size;
  const sizeRemaining = totalSize - totalSizeUsed;

  const sizeNeeded = totalSizeNeeded - sizeRemaining;

  const dirsSmallerThanNeeded: number[] = [];
  function collectSizes(dir: Record<string, any>) {
    for (const key in dir) {
      if (Object.prototype.hasOwnProperty.call(dir, key)) {
        const dirOrSizeOrFile = dir[key];
        if (key === "size") {
          if (dirOrSizeOrFile <= sizeNeeded) continue;
          dirsSmallerThanNeeded.push(dirOrSizeOrFile);
          continue;
        }
        if (typeof dirOrSizeOrFile === "number") {
          continue;
        }
        collectSizes(dirOrSizeOrFile);
      }
    }
  }
  collectSizes(dir);

  return Math.min(...dirsSmallerThanNeeded);
};

console.log(solve(await Deno.readTextFile("day07/input.txt")));
