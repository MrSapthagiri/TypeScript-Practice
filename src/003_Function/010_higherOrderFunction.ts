export {};

// ============================================================
// HIGHER-ORDER FUNCTION
// Flow: function receives another function → calls it → returns result
// Shape: function apply(a, b, op: (x,y)=>result) { return op(a,b); }
// ============================================================

// EASY LEVEL — pass simple operation functions
function applyAdd(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}
function applyCompare(a: number, b: number, op: (x: number, y: number) => boolean): boolean {
  return op(a, b);
}
function repeatAction(times: number, action: () => void): void {
  for (let i = 0; i < times; i++) action();
}
function transformValue(x: number, fn: (n: number) => number): number {
  return fn(x);
}
function greetWith(fn: (name: string) => string, name: string): string {
  return fn(name);
}

console.log("E1 Add:", applyAdd(8, 2, (x, y) => x + y));
console.log("E2 Mul:", applyAdd(8, 2, (x, y) => x * y));
console.log("E3 Compare:", applyCompare(10, 5, (x, y) => x > y));
console.log("E4 Transform:", transformValue(5, (n) => n * n));
console.log("E5 Greet:", greetWith((n) => `Hi ${n}`, "Arun"));

// MEDIUM LEVEL — HOF + control flow + loops
function filterArray(nums: number[], test: (n: number) => boolean): number[] {
  const result: number[] = [];
  for (const n of nums) {
    if (test(n)) result.push(n);
  }
  return result;
}

function mapArray(nums: number[], mapper: (n: number) => number): number[] {
  const result: number[] = [];
  for (const n of nums) result.push(mapper(n));
  return result;
}

function reduceArray(nums: number[], reducer: (acc: number, n: number) => number, start: number): number {
  let acc = start;
  for (const n of nums) acc = reducer(acc, n);
  return acc;
}

function runIf(condition: boolean, action: () => void): void {
  if (condition) action();
}

function compose(f: (n: number) => number, g: (n: number) => number): (n: number) => number {
  return (n) => f(g(n));
}

console.log("M1 Filter:", filterArray([1, 2, 3, 4, 5], (n) => n % 2 === 0));
console.log("M2 Map:", mapArray([1, 2, 3], (n) => n * 10));
console.log("M3 Reduce:", reduceArray([1, 2, 3, 4], (acc, n) => acc + n, 0));
runIf(true, () => console.log("M4 Condition ran"));
console.log("M5 Compose:", compose((n) => n + 1, (n) => n * 2)(5));

// HIGH LEVEL — HOF with objects and chained callbacks
type EmployeeRecord = { name: string; salary: number };

function sortBy<T>(items: T[], compare: (a: T, b: T) => number): T[] {
  return [...items].sort(compare);
}

function pipeline(nums: number[], ...fns: ((n: number[]) => number[])[]): number[] {
  let result = nums;
  for (const fn of fns) result = fn(result);
  return result;
}

function processEmployees(
  list: EmployeeRecord[],
  filter: (e: EmployeeRecord) => boolean,
  mapper: (e: EmployeeRecord) => string
): string[] {
  const result: string[] = [];
  for (const emp of list) {
    if (filter(emp)) result.push(mapper(emp));
  }
  return result;
}

const staff: EmployeeRecord[] = [
  { name: "Anu", salary: 45000 },
  { name: "Ben", salary: 62000 },
  { name: "Cara", salary: 38000 },
];

console.log("H1 Sort:", sortBy(staff, (a, b) => b.salary - a.salary));
console.log("H2 Pipeline:", pipeline(
  [1, 2, 3, 4, 5],
  (arr) => arr.filter((n) => n % 2 === 0),
  (arr) => arr.map((n) => n * n)
));
console.log("H3 Staff:", processEmployees(
  staff,
  (e) => e.salary >= 50000,
  (e) => `${e.name}: ₹${e.salary}`
));
