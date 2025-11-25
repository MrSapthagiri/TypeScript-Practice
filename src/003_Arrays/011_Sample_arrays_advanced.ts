// Advanced Array Operations

export function advancedDemo(): void {
  let scores: number[] = [80, 92, 65, 100, 88];

  let updatedScores = scores.map(score => score + 5);
  let highScores = scores.filter(score => score > 85);
  let total = scores.reduce((sum, score) => sum + score, 0);
  let average = total / scores.length;
  let topper = scores.find(score => score === 100);

  console.log("\n--- Advanced ---");
  console.log("Updated Scores:", updatedScores);
  console.log("High Scores:", highScores);
  console.log("Total:", total, "Average:", average.toFixed(2));
  console.log("Topper:", topper);

  // Tuple Example
  let user: [string, number, boolean] = ["Alice", 25, true];
  console.log("Tuple User:", user);
}
