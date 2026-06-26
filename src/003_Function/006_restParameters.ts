export {};

// ============================================================
// REST PARAMETER SYNTAX (...)
// Flow: many args → collected into array → process → result
// Shape: function name(...items: type[]): returnType
// ============================================================

// EASY LEVEL — basic rest on numbers and strings
function sum(...nums: number[]): number {
  return nums.reduce((acc, v) => acc + v, 0);
}
function multiplyAll(...nums: number[]): number {
  return nums.reduce((acc, v) => acc * v, 1);
}
function joinWords(...words: string[]): string {
  return words.join(" ");
}
function findMaxRest(...nums: number[]): number {
  return Math.max(...nums);
}
function findMinRest(...nums: number[]): number {
  return Math.min(...nums);
}

console.log("E1 Sum:", sum(1, 2, 3, 4));
console.log("E2 Product:", multiplyAll(2, 3, 4));
console.log("E3 Words:", joinWords("Type", "Script", "Practice"));
console.log("E4 Max:", findMaxRest(10, 25, 5, 40));
console.log("E5 Min:", findMinRest(10, 25, 5, 40));

// MEDIUM LEVEL — rest + control flow + loops
function sumEvens(...nums: number[]): number {
  let total = 0;
  for (const n of nums) {
    if (n % 2 === 0) total += n;
  }
  return total;
}

function countPass(...scores: number[]): number {
  let count = 0;
  for (const s of scores) {
    if (s >= 50) count++;
  }
  return count;
}

function mergeLabels(prefix: string, ...labels: string[]): string {
  let result = prefix;
  for (const label of labels) {
    result += ` | ${label}`;
  }
  return result;
}

function findLongest(...words: string[]): string {
  let longest = words[0] ?? "";
  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}

function classifyNumbers(...nums: number[]): { evens: number[]; odds: number[] } {
  const evens: number[] = [];
  const odds: number[] = [];
  for (const n of nums) {
    if (n % 2 === 0) evens.push(n);
    else odds.push(n);
  }
  return { evens, odds };
}

console.log("M1 Evens sum:", sumEvens(1, 2, 3, 4, 5, 6));
console.log("M2 Pass count:", countPass(40, 55, 72, 30));
console.log("M3:", mergeLabels("Report", "QA", "Dev", "Ops"));
console.log("M4 Longest:", findLongest("cat", "elephant", "dog"));
console.log("M5:", classifyNumbers(1, 2, 3, 4, 5));

// HIGH LEVEL — rest + objects + nested processing
type ScoreEntry = { name: string; score: number };

function buildScoreReport(...entries: ScoreEntry[]): string[] {
  const report: string[] = [];
  for (const e of entries) {
    const status = e.score >= 50 ? "Pass" : "Fail";
    report.push(`${e.name}: ${e.score} (${status})`);
  }
  return report;
}

function averageRest(...nums: number[]): number {
  if (nums.length === 0) return 0;
  return sum(...nums) / nums.length;
}

function flattenAndSum(...arrays: number[][]): number {
  let total = 0;
  for (const arr of arrays) {
    for (const n of arr) total += n;
  }
  return total;
}

function logAll(level: string, ...messages: string[]): void {
  for (const msg of messages) {
    console.log(`H4 [${level}] ${msg}`);
  }
}

console.log("H1:", buildScoreReport(
  { name: "Anu", score: 85 },
  { name: "Ben", score: 40 },
  { name: "Cara", score: 72 }
));
console.log("H2 Avg:", averageRest(10, 20, 30));
console.log("H3 Flat sum:", flattenAndSum([1, 2], [3, 4], [5]));
logAll("INFO", "App started", "User logged in", "Ready");
