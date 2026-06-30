export {};

// ============================================================
// CHAIN: map → filter → reduce (Easy to High)
// Most common array pattern in TypeScript / JavaScript
// ============================================================

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// EASY LEVEL — square evens, then sum
const easyResult = numbers
  .filter(function (n) { return n % 2 === 0; })
  .map(function (n) { return n * n; })
  .reduce(function (acc, n) { return acc + n; }, 0);

console.log("E1 Sum of squared evens:", easyResult);

// MEDIUM LEVEL — process scores
const scores: number[] = [45, 78, 92, 55, 88, 33, 95];
const mediumResult = scores
  .filter(function (s) { return s >= 50; })
  .map(function (s) { return s + 5; })
  .reduce(function (acc, s, _, arr) {
    return acc + s / arr.length;
  }, 0);

console.log("M1 Average of boosted passing scores:", mediumResult.toFixed(2));

// HIGH LEVEL — sales pipeline
type Sale = { product: string; qty: number; price: number; region: string };

const sales: Sale[] = [
  { product: "Phone", qty: 2, price: 15000, region: "South" },
  { product: "Case", qty: 5, price: 500, region: "North" },
  { product: "Laptop", qty: 1, price: 55000, region: "South" },
  { product: "Mouse", qty: 10, price: 800, region: "East" },
  { product: "Keyboard", qty: 3, price: 2000, region: "South" },
];

const southRevenue = sales
  .filter(function (s) { return s.region === "South"; })
  .map(function (s) { return s.qty * s.price; })
  .reduce(function (acc, revenue) { return acc + revenue; }, 0);

console.log("H1 South Region Revenue:", southRevenue);

const topProducts = sales
  .map(function (s) {
    return { product: s.product, total: s.qty * s.price };
  })
  .filter(function (item) { return item.total >= 10000; })
  .reduce(function (acc: string[], item) {
    acc.push(`${item.product}: ₹${item.total}`);
    return acc;
  }, []);

console.log("H2 Top Products:", topProducts);

// forEach at the end for logging (side effect only)
console.log("--- All sales breakdown ---");
sales
  .filter(function (s) { return s.qty > 1; })
  .forEach(function (s) {
    console.log(`  ${s.product} x${s.qty} = ₹${s.qty * s.price}`);
  });
