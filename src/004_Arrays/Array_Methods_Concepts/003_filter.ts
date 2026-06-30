export {};

// ============================================================
// ARRAY filter() — keep elements that pass a condition
// Flow: array → filter(callback) → new array (subset)
// Shape: array.filter((item, index, arr) => boolean);
// Returns true = keep item | false = remove item
// ============================================================

// EASY LEVEL — simple number and string conditions
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log("E1 Evens:", evens);

const words: string[] = ["cat", "elephant", "dog", "hippopotamus"];
const longWords = words.filter(function (word) {
  return word.length > 3;
});
console.log("E2 Long Words:", longWords);

const scores: number[] = [45, 78, 92, 55, 88];
const passed = scores.filter((score) => score >= 50);
console.log("E3 Passed:", passed);

// MEDIUM LEVEL — objects, multiple conditions
const prices: number[] = [100, 250, 75, 500, 120];
const affordable = prices.filter(function (price) {
  return price >= 100 && price <= 300;
});
console.log("M1 Affordable:", affordable);

type Employee = { name: string; dept: string; active: boolean };
const staff: Employee[] = [
  { name: "Arun", dept: "QA", active: true },
  { name: "Meena", dept: "Dev", active: false },
  { name: "Kavi", dept: "QA", active: true },
];

const activeQa = staff.filter(function (emp) {
  return emp.dept === "QA" && emp.active;
});
console.log("M2 Active QA:", activeQa);

const mixed: (string | number)[] = ["Test", 100, "QA", 200, "Auto"];
const onlyStrings = mixed.filter(function (item): item is string {
  return typeof item === "string";
});
console.log("M3 Only Strings:", onlyStrings);

// HIGH LEVEL — nested arrays, complex business rules
type Order = { id: number; amount: number; status: string };

const orders: Order[] = [
  { id: 101, amount: 500, status: "completed" },
  { id: 102, amount: 50, status: "completed" },
  { id: 103, amount: 1200, status: "pending" },
  { id: 104, amount: 800, status: "completed" },
];

const highValueCompleted = orders.filter(function (order) {
  return order.status === "completed" && order.amount >= 500;
});
console.log("H1 High Value Orders:", highValueCompleted);

const matrix: number[][] = [[1, 0, 3], [0, 5, 0], [7, 8, 9]];
const nonZeroRows = matrix.filter(function (row) {
  return row.some(function (n) { return n !== 0; });
});
console.log("H2 Non-Zero Rows:", nonZeroRows);

type TestResult = { name: string; passed: boolean; duration: number };
const results: TestResult[] = [
  { name: "Login Test", passed: true, duration: 2.5 },
  { name: "Checkout Test", passed: false, duration: 5.1 },
  { name: "Search Test", passed: true, duration: 1.8 },
];

const fastPassed = results.filter(function (r) {
  return r.passed && r.duration < 3;
});
console.log("H3 Fast Passed Tests:", fastPassed);
