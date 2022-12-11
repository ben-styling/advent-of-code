type Monkey = {
  items: number[];
  operation: {
    type: "*" | "+";
    number: number | "old";
  };
  isDivisibleBy: number;
  ifTrue: number;
  ifFalse: number;
  totalInspectedItems: number;
};

const textInput = await Deno.readTextFile("day11/input.txt");

const monkeys = textInput.split("\n\n").map((block) => {
  const [_, line_items, line_operation, line_test, line_ifTrue, line_ifFalse] =
    block.split("\n");
  const operation = Number(
    line_operation.split("Operation: new = old ")[1].split(" ")[1]
  );
  const monkey: Monkey = {
    items: line_items
      .split(": ")[1]
      .split(", ")
      .map((i: string) => Number(i)),
    operation: {
      type: line_operation.includes("+") ? "+" : "*",
      number: isNaN(operation) ? "old" : operation,
    },
    isDivisibleBy: Number(line_test.split("Test: divisible by ")[1]),
    ifTrue: parseInt(line_ifTrue.split("If true: throw to monkey ")[1]),
    ifFalse: parseInt(line_ifFalse.split("If false: throw to monkey ")[1]),
    totalInspectedItems: 0,
  };
  return monkey;
});

const divisor = monkeys.reduce((acc, monkey) => {
  return acc * monkey.isDivisibleBy;
}, 1);

const monkeyRun = (monkey: Monkey) => {
  if (monkey.items.length === 0) throw new Error("No items?!");
  let itemWorryLevel = monkey.items.shift();
  if (typeof itemWorryLevel === "undefined") throw new Error("No worries");

  if (monkey.operation.number === "old") {
    itemWorryLevel = itemWorryLevel * itemWorryLevel;
  } else {
    itemWorryLevel =
      monkey.operation.type === "*"
        ? itemWorryLevel * monkey.operation.number
        : itemWorryLevel + monkey.operation.number;
  }

  itemWorryLevel %= divisor;
  const throwToMonkey =
    itemWorryLevel % monkey.isDivisibleBy === 0
      ? monkey.ifTrue
      : monkey.ifFalse;

  monkey.totalInspectedItems++;

  return { itemWorryLevel, throwToMonkey };
};

const solve = () => {
  for (let i = 0; i < 10000; i++) {
    for (let i = 0; i < monkeys.length; i++) {
      const monkey = monkeys[i];
      while (monkey.items.length > 0) {
        const { itemWorryLevel, throwToMonkey } = monkeyRun(monkey);
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
