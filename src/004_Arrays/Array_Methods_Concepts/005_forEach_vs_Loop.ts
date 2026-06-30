export {};

// ============================================================
// forEach vs for / for-of — when to use each
// forEach: clean callback style, no break/continue
// for/for-of: full control (break, continue, async await)
// ============================================================

const tools: string[] = ["Selenium", "Playwright", "Cypress", "API"];

// EASY LEVEL — same task, different syntax
console.log("--- E1: for loop ---");
for (let i = 0; i < tools.length; i++) {
  console.log(`  [${i}] ${tools[i]}`);
}

console.log("--- E2: for-of loop ---");
for (const tool of tools) {
  console.log("  Tool:", tool);
}

console.log("--- E3: forEach ---");
tools.forEach(function (tool, i) {
  console.log(`  [${i}] ${tool}`);
});

// MEDIUM LEVEL — forEach cannot break early; for loop can
const nums: number[] = [1, 2, 3, 4, 5, 6];
let forLoopSum = 0;
for (const n of nums) {
  if (n > 4) break;
  forLoopSum += n;
}
console.log("M1 for-of sum (stops at 4):", forLoopSum);

let forEachSum = 0;
nums.forEach(function (n) {
  if (n <= 4) forEachSum += n;
});
console.log("M2 forEach sum (same logic):", forEachSum);

// HIGH LEVEL — building arrays: map is better than forEach+push
type User = { id: number; name: string; active: boolean };
const users: User[] = [
  { id: 1, name: "Arun", active: true },
  { id: 2, name: "Meena", active: false },
  { id: 3, name: "Kavi", active: true },
];

const activeNamesViaForEach: string[] = [];
users.forEach(function (user) {
  if (user.active) activeNamesViaForEach.push(user.name);
});

const activeNamesViaFilter = users
  .filter(function (u) { return u.active; })
  .map(function (u) { return u.name; });

console.log("H1 forEach+push:", activeNamesViaForEach);
console.log("H2 filter+map:", activeNamesViaFilter);
