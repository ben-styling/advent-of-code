import input, { type Monkey } from "./input.ts";

export const monkeyRun = (monkey: Monkey) => {
  if (monkey.items.length === 0) return;
  let itemWorryLevel = monkey.items.shift();
  if (!itemWorryLevel) throw new Error("No worries");
  // bored monkeys

  if (monkey.operation.number === "self") {
    itemWorryLevel = itemWorryLevel * itemWorryLevel;
  } else {
    itemWorryLevel =
      monkey.operation.type === "*"
        ? itemWorryLevel * monkey.operation.number
        : itemWorryLevel + monkey.operation.number;
  }

  itemWorryLevel = Math.floor(itemWorryLevel / 3);

  const throwToMonkey =
    itemWorryLevel % monkey.isDivisibleBy === 0
      ? monkey.ifTrue
      : monkey.ifFalse;

  return { itemWorryLevel, throwToMonkey };
};

export const solve = () => {
  // input.split("\n\n").forEach((block) => {
  //   const [monkey, items, operation, test, ifTrue, ifFalse] = block.split("\n");
  // });

  const monkeys = [...input];

  for (let i = 0; i < 20; i++) {
    for (let i = 0; i < monkeys.length; i++) {
      const monkey = monkeys[i];
      while (monkey.items.length > 0) {
        const results = monkeyRun(monkey);
        if (!results) continue;
        monkey.totalInspectedItems++;
        const { itemWorryLevel, throwToMonkey } = results;
        monkeys[throwToMonkey].items.push(itemWorryLevel);
      }
    }
  }

  const sortedMonkeys = monkeys.sort(
    (a, b) => b.totalInspectedItems - a.totalInspectedItems
  );

  return (
    sortedMonkeys[0].totalInspectedItems * sortedMonkeys[1].totalInspectedItems
  );
};

console.log(solve());
