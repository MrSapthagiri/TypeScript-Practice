export {};

// ============================================================
// ANONYMOUS FUNCTION SYNTAX
// Flow: input → function() stored in variable → output
// Shape: const name = function(param: type): returnType { return value; };
// ============================================================

// EASY LEVEL — simple anonymous functions
const greetMorning = function (name: string): string {
  return `Good morning, ${name}!`;
};
const greetEvening = function (name: string): string {
  return `Good evening, ${name}!`;
};
const addTwo = function (a: number, b: number): number {
  return a + b;
};
const squareNum = function (x: number): number {
  return x * x;
};
const isEvenNum = function (n: number): boolean {
  return n % 2 === 0;
};

console.log("E1:", greetMorning("Arun"));
console.log("E2:", greetEvening("Meena"));
console.log("E3 Add:", addTwo(10, 5));
console.log("E4 Square:", squareNum(6));
console.log("E5 Even:", isEvenNum(10));

// MEDIUM LEVEL — control flow + loops inside anonymous function
const evenOrOdd = function (n: number): string {
  if (n % 2 === 0) return "Even";
  return "Odd";
};

const getGrade = function (marks: number): string {
  switch (true) {
    case marks >= 90: return "A";
    case marks >= 75: return "B";
    case marks >= 50: return "C";
    default: return "F";
  }
};

const sumUpTo = function (n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
};

const findMaxNum = function (nums: number[]): number {
  let max = nums[0];
  for (const n of nums) {
    if (n > max) max = n;
  }
  return max;
};

const countVowelsInText = function (text: string): number {
  let count = 0;
  for (const ch of text) {
    if ("aeiouAEIOU".includes(ch)) count++;
  }
  return count;
};

console.log("M1:", evenOrOdd(8), evenOrOdd(5));
console.log("M2 Grade:", getGrade(88));
console.log("M3 Sum:", sumUpTo(5));
console.log("M4 Max:", findMaxNum([4, 9, 2, 7]));
console.log("M5 Vowels:", countVowelsInText("Hello"));

// HIGH LEVEL — objects, nested loops, array methods
type SimplePerson = { name: string; age: number };

const checkAdult = function (person: SimplePerson): string {
  if (person.age >= 18) return `${person.name} is Adult`;
  return `${person.name} is Minor`;
};

const filterPositives = function (nums: number[]): number[] {
  const result: number[] = [];
  for (const n of nums) {
    if (n > 0) result.push(n);
  }
  return result;
};

const processNumbers = function (nums: number[]): number {
  return nums
    .map(function (n) { return n * n; })
    .filter(function (n) { return n > 10; })
    .reduce(function (acc, n) { return acc + n; }, 0);
};

const sum2DArray = function (matrix: number[][]): number {
  let total = 0;
  for (const row of matrix) {
    for (const val of row) total += val;
  }
  return total;
};

console.log("H1:", checkAdult({ name: "Amy", age: 20 }));
console.log("H2 Positives:", filterPositives([-1, 3, 0, 8]));
console.log("H3 Process:", processNumbers([2, 3, 4, 5]));
console.log("H4 Sum2D:", sum2DArray([[1, 2], [3, 4]]));
