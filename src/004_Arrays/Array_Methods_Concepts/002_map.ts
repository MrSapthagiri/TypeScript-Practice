export {};

// ============================================================
// ARRAY map() — transform each element → new array (same length)
// Flow: array → map(callback) → new array with transformed values
// Shape: array.map((item, index, arr) => transformedValue);
// ============================================================

// EASY LEVEL — basic number and string transforms
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log("E1 Doubled:", doubled);

const names: string[] = ["giri", "sam", "amy"];
const capitalized = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log("E2 Capitalized:", capitalized);

const scores: number[] = [80, 90, 75];
const bonusScores = scores.map((score) => score + 5);
console.log("E3 Bonus Scores:", bonusScores);

// MEDIUM LEVEL — objects, booleans, index usage
const prices: number[] = [100, 200, 150];
const withGst = prices.map(function (price) {
  return Math.round(price * 1.18);
});
console.log("M1 With GST:", withGst);

const ages: number[] = [15, 22, 30, 17];
const adultFlags = ages.map(function (age) {
  return age >= 18;
});
console.log("M2 Adult Flags:", adultFlags);

const items: string[] = ["Pen", "Book", "Bag"];
const numberedItems = items.map(function (item, index) {
  return `${index + 1}. ${item}`;
});
console.log("M3 Numbered:", numberedItems);

// HIGH LEVEL — object arrays, type transformations
type Product = { id: number; name: string; price: number };
type ProductSummary = { label: string; total: number };

const products: Product[] = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const summaries: ProductSummary[] = products.map(function (p) {
  return { label: p.name, total: p.price * 1.18 };
});
console.log("H1 Summaries:", summaries);

const testCases: { id: string; steps: string[] }[] = [
  { id: "TC01", steps: ["Open app", "Login"] },
  { id: "TC02", steps: ["Add item", "Checkout"] },
];

const stepCounts = testCases.map(function (tc) {
  return { id: tc.id, stepCount: tc.steps.length };
});
console.log("H2 Step Counts:", stepCounts);

const matrix: number[][] = [[1, 2], [3, 4]];
const rowSums = matrix.map(function (row) {
  return row.reduce(function (acc, n) { return acc + n; }, 0);
});
console.log("H3 Row Sums:", rowSums);
