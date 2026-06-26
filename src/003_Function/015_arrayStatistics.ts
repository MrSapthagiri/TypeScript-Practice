export {};

// ============================================================
// ARRAY STATISTICS — loops + reduce on number[]
// Flow: array → loop/reduce → single stat value
// ============================================================

// EASY LEVEL
function getSum(arr: number[]): number { return arr.reduce((a, b) => a + b, 0); }
function getAverage(arr: number[]): number { return getSum(arr) / arr.length; }
function getMax(arr: number[]): number { return Math.max(...arr); }
function getMin(arr: number[]): number { return Math.min(...arr); }
function getCount(arr: number[]): number { return arr.length; }

const sample = [10, 20, 30, 40, 50];
console.log("E1 Sum:", getSum(sample));
console.log("E2 Avg:", getAverage(sample));
console.log("E3 Max:", getMax(sample));
console.log("E4 Min:", getMin(sample));
console.log("E5 Count:", getCount(sample));

// MEDIUM LEVEL — control flow + loops
function getMedian(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) return (sorted[mid - 1] + sorted[mid]) / 2;
  return sorted[mid];
}

function countAbove(arr: number[], threshold: number): number {
  let count = 0;
  for (const n of arr) {
    if (n > threshold) count++;
  }
  return count;
}

function getRange(arr: number[]): number {
  return getMax(arr) - getMin(arr);
}

function getPassCount(scores: number[], passMark: number = 50): number {
  let count = 0;
  for (const s of scores) {
    if (s >= passMark) count++;
  }
  return count;
}

function classifyScores(scores: number[]): { pass: number[]; fail: number[] } {
  const pass: number[] = [];
  const fail: number[] = [];
  for (const s of scores) {
    if (s >= 50) pass.push(s);
    else fail.push(s);
  }
  return { pass, fail };
}

console.log("M1 Median:", getMedian([10, 20, 30, 40, 50]));
console.log("M2 Above30:", countAbove(sample, 30));
console.log("M3 Range:", getRange(sample));
console.log("M4 Pass:", getPassCount([40, 55, 72, 30]));
console.log("M5:", classifyScores([40, 55, 72, 30]));

// HIGH LEVEL — full stats report object
type StatsReport = { sum: number; avg: number; min: number; max: number; count: number };

function buildStatsReport(arr: number[]): StatsReport {
  return {
    sum: getSum(arr),
    avg: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    count: getCount(arr),
  };
}

function normalizeScores(scores: number[]): number[] {
  const max = getMax(scores);
  const result: number[] = [];
  for (const s of scores) result.push(Math.round((s / max) * 100));
  return result;
}

function groupByRange(arr: number[]): Record<string, number[]> {
  const groups: Record<string, number[]> = { low: [], mid: [], high: [] };
  for (const n of arr) {
    if (n < 30) groups.low.push(n);
    else if (n <= 70) groups.mid.push(n);
    else groups.high.push(n);
  }
  return groups;
}

console.log("H1 Report:", buildStatsReport(sample));
console.log("H2 Normalized:", normalizeScores([40, 80, 60]));
console.log("H3 Groups:", groupByRange([10, 45, 75, 90, 25]));
