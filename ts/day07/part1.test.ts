import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { createDirObject, solve } from "./part1.ts";
const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const directoryAsObject = {
  "/": {
    a: {
      e: {
        i: 584,
      },
      f: 29116,
      g: 2557,
      "h.lst": 62596,
    },
    "b.txt": 14848514,
    "c.dat": 8504156,
    d: {
      j: 4060174,
      "d.log": 8033020,
      "d.ext": 5626152,
      k: 7214296,
    },
  },
};

Deno.test("createDirObject", () => {
  assertEquals(createDirObject(input), directoryAsObject);
});
Deno.test("solve", () => {
  assertEquals(solve(input), 95437);
});
