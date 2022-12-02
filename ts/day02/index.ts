const scoreValues = new Map();
scoreValues.set("A", 1);
scoreValues.set("B", 2);
scoreValues.set("C", 3);
scoreValues.set("X", 1);
scoreValues.set("Y", 2);
scoreValues.set("Z", 3);

const scoreChart = [
  [3, 0, 6],
  [6, 3, 0],
  [0, 6, 3],
];

const getTurnScore = (turn: string) => {
  const [opponent, player] = turn.split(" ");
  return (
    scoreValues.get(player) +
    scoreChart[scoreValues.get(player) - 1][scoreValues.get(opponent) - 1]
  );
};

export const getScore = (input: string) => {
  return input
    .split("\n")
    .filter((turn) => turn.length > 0)
    .reduce((acc, turn) => acc + getTurnScore(turn), 0);
};

const outcomeMap = new Map();
outcomeMap.set("X", 0);
outcomeMap.set("Y", 3);
outcomeMap.set("Z", 6);

const scoreChart2 = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
];

const getTurnScore2 = (turn: string) => {
  const [opponent, outcome] = turn.split(" ");
  const outcomeScore = outcomeMap.get(outcome);

  const moveScore =
    scoreChart2[scoreValues.get(opponent) - 1].findIndex(
      (i) => i === outcomeScore
    ) + 1;

  return outcomeScore + moveScore;
};
export const getScore2 = (input: string) => {
  return input
    .split("\n")
    .filter((turn) => turn.length > 0)
    .reduce((acc, turn) => acc + getTurnScore2(turn), 0);
};

// console.log(getScore2(await Deno.readTextFile("day02/input.txt")));
