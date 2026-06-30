export {};

// ============================================================
// ARRAY reduce() — combine all elements into ONE value
// Flow: array → reduce(callback, initialValue) → single result
// Shape: array.reduce((acc, item, index, arr) => newAcc, start);
// acc = accumulator (running total / combined value)
// ============================================================

// EASY LEVEL — sum, product, find max
const numbers: number[] = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (acc, n) {
  return acc + n;
}, 0);
console.log("E1 Sum:", sum);

const product = numbers.reduce(function (acc, n) {
  return acc * n;
}, 1);
console.log("E2 Product:", product);

const max = [10, 45, 23, 67, 12].reduce(function (acc, n) {
  return n > acc ? n : acc;
}, 0);
console.log("E3 Max:", max);

// MEDIUM LEVEL — strings, averages, counting
const words: string[] = ["Hello", " ", "World"];
const sentence = words.reduce(function (acc, word) {
  return acc + word;
}, "");
console.log("M1 Sentence:", sentence);

const marks: number[] = [80, 90, 75, 85];
const average = marks.reduce(function (acc, mark, _, arr) {
  return acc + mark / arr.length;
}, 0);
console.log("M2 Average:", average);

const items: string[] = ["apple", "banana", "apple", "orange", "banana"];
const countMap = items.reduce(function (acc: Record<string, number>, item) {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log("M3 Count Map:", countMap);

// HIGH LEVEL — flatten, group by, complex objects
const nested: number[][] = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce(function (acc: number[], row) {
  return acc.concat(row);
}, []);
console.log("H1 Flattened:", flat);

type Sale = { category: string; amount: number };
const sales: Sale[] = [
  { category: "Electronics", amount: 5000 },
  { category: "Books", amount: 800 },
  { category: "Electronics", amount: 3000 },
  { category: "Books", amount: 400 },
];

const byCategory = sales.reduce(function (
  acc: Record<string, number>,
  sale
) {
  acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
  return acc;
}, {});
console.log("H2 By Category:", byCategory);

const pipeline = [2, 3, 4, 5].reduce(function (acc, n) {
  const squared = n * n;
  if (squared > 10) acc.push(squared);
  return acc;
}, [] as number[]);
console.log("H3 Filter+Reduce:", pipeline);
