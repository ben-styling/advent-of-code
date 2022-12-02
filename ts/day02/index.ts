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

console.log(getScore(await Deno.readTextFile("day02/input.txt")));
