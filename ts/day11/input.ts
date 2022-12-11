export type Monkey = {
  items: number[];
  operation: {
    type: "*" | "+";
    number: number | "self";
  };
  isDivisibleBy: number;
  ifTrue: number;
  ifFalse: number;
  totalInspectedItems: number;
};

const monkeys: Monkey[] = [
  {
    items: [80],
    operation: {
      type: "*",
      number: 5,
    },
    isDivisibleBy: 2,
    ifTrue: 4,
    ifFalse: 3,
    totalInspectedItems: 0,
  },

  {
    items: [75, 83, 74],
    operation: {
      type: "+",
      number: 7,
    },
    isDivisibleBy: 7,
    ifTrue: 5,
    ifFalse: 6,
    totalInspectedItems: 0,
  },

  {
    items: [86, 67, 61, 96, 52, 63, 73],
    operation: {
      type: "+",
      number: 5,
    },
    isDivisibleBy: 3,
    ifTrue: 7,
    ifFalse: 0,
    totalInspectedItems: 0,
  },

  {
    items: [85, 83, 55, 85, 57, 70, 85, 52],
    operation: {
      type: "+",
      number: 8,
    },
    isDivisibleBy: 17,
    ifTrue: 1,
    ifFalse: 5,
    totalInspectedItems: 0,
  },

  {
    items: [67, 75, 91, 72, 89],
    operation: {
      type: "+",
      number: 4,
    },
    isDivisibleBy: 11,
    ifTrue: 3,
    ifFalse: 1,
    totalInspectedItems: 0,
  },

  {
    items: [66, 64, 68, 92, 68, 77],
    operation: {
      type: "*",
      number: 2,
    },
    isDivisibleBy: 19,
    ifTrue: 6,
    ifFalse: 2,
    totalInspectedItems: 0,
  },

  {
    items: [97, 94, 79, 88],
    operation: {
      type: "*",
      number: "self",
    },
    isDivisibleBy: 5,
    ifTrue: 2,
    ifFalse: 7,
    totalInspectedItems: 0,
  },

  {
    items: [77, 85],
    operation: {
      type: "+",
      number: 6,
    },
    isDivisibleBy: 13,
    ifTrue: 4,
    ifFalse: 0,
    totalInspectedItems: 0,
  },
];

export default monkeys;
