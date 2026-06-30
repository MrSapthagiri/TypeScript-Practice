export {};

// ============================================================
// ARRAY forEach() — iterate every element (no return value)
// Flow: array → forEach(callback) → runs function on each item
// Shape: array.forEach((item, index, arr) => { ... });
// Note: forEach does NOT return a new array (returns undefined)
// ============================================================

// EASY LEVEL — print items, simple loops
const fruits: string[] = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
  console.log("E1 Fruit:", fruit);
});

const nums: number[] = [10, 20, 30];
nums.forEach(function (n, i) {
  console.log(`E2 Index ${i} = ${n}`);
});

const colors = ["Red", "Green", "Blue"];
colors.forEach((color) => console.log("E3 Color:", color));

// MEDIUM LEVEL — modify external variables, sum, count
let total = 0;
const prices: number[] = [100, 250, 75, 300];
prices.forEach(function (price) {
  total += price;
});
console.log("M1 Total Price:", total);

let evenCount = 0;
const values: number[] = [1, 4, 7, 8, 10, 3];
values.forEach(function (n) {
  if (n % 2 === 0) evenCount++;
});
console.log("M2 Even Count:", evenCount);

const skills: string[] = ["Selenium", "Playwright", "Cypress"];
const upperSkills: string[] = [];
skills.forEach(function (skill) {
  upperSkills.push(skill.toUpperCase());
});
console.log("M3 Upper Skills:", upperSkills);

// HIGH LEVEL — objects, nested data, side effects
type Student = { name: string; marks: number };

const students: Student[] = [
  { name: "Arun", marks: 85 },
  { name: "Meena", marks: 92 },
  { name: "Kavi", marks: 78 },
];

students.forEach(function (student, index) {
  const status = student.marks >= 80 ? "Pass" : "Needs Improvement";
  console.log(`H1 [${index}] ${student.name}: ${status}`);
});

const orders: { id: number; amount: number }[] = [
  { id: 101, amount: 500 },
  { id: 102, amount: 1200 },
  { id: 103, amount: 350 },
];

let grandTotal = 0;
orders.forEach(function (order) {
  grandTotal += order.amount;
  console.log(`H2 Order #${order.id} → ₹${order.amount}`);
});
console.log("H2 Grand Total:", grandTotal);

const matrix: number[][] = [[1, 2], [3, 4], [5, 6]];
matrix.forEach(function (row, rowIndex) {
  row.forEach(function (cell, colIndex) {
    console.log(`H3 [${rowIndex}][${colIndex}] = ${cell}`);
  });
});
