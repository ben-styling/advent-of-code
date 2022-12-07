export const createDirObject = (input: string) => {
  const lines = input.split("\n");
  const root: Record<string, any> = { "/": {} };
  const currentDir = [];

  for (const line of lines) {
    if (line.startsWith("$ cd ")) {
      const dir = line.replace("$ cd ", "");
      if (dir === "..") {
        currentDir.pop();
      } else {
        currentDir.push(dir);
      }
      continue;
    }
    if (line.startsWith("$ ls")) {
      continue;
    }
    if (line.startsWith("dir ")) {
      const dir = line.replace("dir ", "");
      const tempRef = currentDir.reduce((acc, i) => acc[i], root);
      tempRef[dir] = {};
      continue;
    }
    const [size, file] = line.split(" ");
    const tempRef = currentDir.reduce((acc, i) => acc[i], root);
    tempRef[file] = Number(size);
  }
  return root;
};

const getDirSize = (obj: Record<string, any>, size: number) => {
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const fileOrDir = obj[key];
    if (key !== "size" && typeof fileOrDir === "number") {
      size = size + fileOrDir;
    } else {
      size = getDirSize(fileOrDir, size);
    }
  }
  return size;
};

export const augmentWithSizes = (obj: Record<string, any>) => {
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const element = obj[key];
    if (key !== "size" && typeof element !== "number") {
      key;
      const test = element.a;

      // test
      augmentWithSizes(element);
    }
  }
  const size = getDirSize(obj, 0);
  obj.size = size;
};

const countSizesUnderThreshold = (obj: Record<string, any>, total: number) => {
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const element = obj[key];
    if (key === "size" && element < 100000) {
      total = total + element;
    }
    if (typeof element === "number") {
      continue;
    }
    total = countSizesUnderThreshold(element, total);
  }
  return total;
};

export const solve = (input: string) => {
  const dir = createDirObject(input);

  augmentWithSizes(dir);

  const totalSize = countSizesUnderThreshold(dir, 0);

  return totalSize;
};

// console.log(solve(await Deno.readTextFile("day07/input.txt")));
