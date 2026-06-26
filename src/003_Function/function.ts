export {};

// ============================================================
// 003 FUNCTION — MASTER FILE (ALL TYPES)
// Flow: input → function → output
// Levels: EASY → MEDIUM → HIGH
// ============================================================


// ============================================================
// EASY LEVEL — basic syntax, number/string/boolean types
// ============================================================

// Named function
function add(a: number, b: number): number { return a + b; }

// Arrow function
const square = (x: number): number => x * x;

// Anonymous function
const greet_user = function (name: string): string {
  return `Hello, ${name}`;
};

// Default parameter
function greetUser(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}

// Optional parameter
function fullName(first: string, last?: string): string {
  return last ? `${first} ${last}` : first;
}

// Rest parameter
function sum(...nums: number[]): number {
  return nums.reduce((acc, v) => acc + v, 0);
}

// Void return
function logMessage(msg: string): void {
  console.log("Log:", msg);
}

// Boolean return
function isEven(n: number): boolean {
  return n % 2 === 0;
}

console.log("E1 Add:", add(3, 4));
console.log("E2 Square:", square(5));
console.log("E3:", greet_user("Sapthagiri"));
console.log("E4:", greetUser(), greetUser("Selvam"));
console.log("E5:", fullName("John"), fullName("John", "Doe"));
console.log("E6 Sum:", sum(1, 2, 3, 4));
logMessage("TypeScript is cool");
console.log("E8 Even:", isEven(10));


// ============================================================
// MEDIUM LEVEL — control flow + loops + arrays + objects
// ============================================================

// IF / ELSE
function evenOrOdd(n: number): string {
  if (n % 2 === 0) return "Even";
  return "Odd";
}

// Ternary
const checkPass = (score: number): string => score >= 50 ? "Pass" : "Fail";

// SWITCH
function getGrade(marks: number): string {
  switch (true) {
    case marks >= 90: return "A";
    case marks >= 75: return "B";
    case marks >= 50: return "C";
    default: return "F";
  }
}

// FOR loop
function sumUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

// WHILE loop
function countDigits(num: number): number {
  let n = Math.abs(num);
  let count = 0;
  while (n > 0) { count++; n = Math.floor(n / 10); }
  return count === 0 ? 1 : count;
}

// FOR-OF + array
function findMaxNum(nums: number[]): number {
  let max = nums[0];
  for (const n of nums) if (n > max) max = n;
  return max;
}

// Object type
type SimplePerson = { name: string; age: number };
function checkAdult(person: SimplePerson): string {
  if (person.age >= 18) return `${person.name} is Adult`;
  return `${person.name} is Minor`;
}

// Array methods with arrow
let myNumbers: number[] = [1, 2, 3, 4];
const squared = myNumbers.map((n) => n * n);
const evens = myNumbers.filter((n) => n % 2 === 0);
const sumAll = myNumbers.reduce((acc, val) => acc + val, 0);

console.log("M1:", evenOrOdd(10), evenOrOdd(7));
console.log("M2:", checkPass(75), checkPass(30));
console.log("M3:", getGrade(92), getGrade(55));
console.log("M4 SumUpTo:", sumUpTo(5));
console.log("M5 Digits:", countDigits(12345));
console.log("M6 Max:", findMaxNum([3, 9, 1, 7]));
console.log("M7:", checkAdult({ name: "John", age: 25 }));
console.log("M8 Map:", squared, "Filter:", evens, "Reduce:", sumAll);


// ============================================================
// HIGH LEVEL — recursive, HOF, closure, generic, async, pipeline
// ============================================================

// Recursive
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Higher-order function
function applyOperation(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}

// Closure — returns arrow
function multiplier(factor: number) {
  return (x: number) => x * factor;
}
const double = multiplier(2);

// Generic
function identity<T>(value: T): T { return value; }

// FizzBuzz — nested control flow + loop
function fizzBuzz(limit: number): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}

// 2D array — nested loops
function sum2DArray(matrix: number[][]): number {
  let total = 0;
  for (const row of matrix) {
    for (const val of row) total += val;
  }
  return total;
}

// Chained pipeline — map + filter + reduce
const pipelineResult = [1, 2, 3, 4, 5, 6]
  .map((n) => n * n)
  .filter((n) => n > 10)
  .reduce((acc, n) => acc + n, 0);

// Object update with arrow helper
let userPerson = { name: "John", age: 25 };
const updateAge = (person: { name: string; age: number }, newAge: number) => ({
  ...person, age: newAge,
});
userPerson = updateAge(userPerson, 26);

// JSON
const jsonStr = JSON.stringify(userPerson);
const obj = JSON.parse(jsonStr);

// Async arrow
const fetchData = async (): Promise<string> => "Data loaded!";

// Student report — filter + map + reduce
type ClassStudent = { name: string; marks: number; passed: boolean };
const studentReport = (classList: ClassStudent[]) => {
  const passed = classList.filter((s) => s.passed);
  return {
    names: passed.map((s) => s.name),
    avgMarks: passed.length === 0 ? 0 : passed.reduce((a, s) => a + s.marks, 0) / passed.length,
  };
};

console.log("H1 Factorial:", factorial(5));
console.log("H2 Op:", applyOperation(3, 4, (x, y) => x + y));
console.log("H3 Double:", double(10));
console.log("H4 Generic:", identity<number>(42), identity<string>("TS"));
console.log("H5 FizzBuzz:", fizzBuzz(15));
console.log("H6 Sum2D:", sum2DArray([[1, 2], [3, 4]]));
console.log("H7 Pipeline:", pipelineResult);
console.log("H8 User:", userPerson, jsonStr, obj);
fetchData().then((data) => console.log("H9 Async:", data));
console.log("H10 Report:", studentReport([
  { name: "Anu", marks: 85, passed: true },
  { name: "Ben", marks: 40, passed: false },
  { name: "Cara", marks: 72, passed: true },
]));
