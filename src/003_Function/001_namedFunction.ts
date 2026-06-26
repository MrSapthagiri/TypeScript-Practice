export {};

// ============================================================
// NAMED FUNCTION SYNTAX
// Flow: input → function name() → return output
// Shape: function name(param: type): returnType { return value; }
// ============================================================

// EASY LEVEL — basic math, number type
function add(a: number, b: number): number { return a + b; }
function subtract(a: number, b: number): number { return a - b; }
function multiply(a: number, b: number): number { return a * b; }
function divide(a: number, b: number): number { return b !== 0 ? a / b : 0; }
function modulus(a: number, b: number): number { return a % b; }

console.log("E1 Add:", add(10, 5));
console.log("E2 Subtract:", subtract(10, 5));
console.log("E3 Multiply:", multiply(10, 5));
console.log("E4 Divide:", divide(10, 5));
console.log("E5 Modulus:", modulus(10, 3));

// MEDIUM LEVEL — control flow + string/boolean types
function evenOrOdd(n: number): string {
  if (n % 2 === 0) return "Even";
  return "Odd";
}

function checkPass(score: number): string {
  return score >= 50 ? "Pass" : "Fail";
}

function getGrade(marks: number): string {
  switch (true) {
    case marks >= 90: return "A";
    case marks >= 75: return "B";
    case marks >= 50: return "C";
    default: return "F";
  }
}

function sumUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

function greetByName(name: string): string {
  return `Hello, ${name}`;
}

function isPositiveNum(n: number): boolean {
  return n > 0;
}

console.log("M1 EvenOrOdd:", evenOrOdd(10), evenOrOdd(7));
console.log("M2 Pass:", checkPass(75), checkPass(30));
console.log("M3 Grade:", getGrade(92), getGrade(55));
console.log("M4 SumUpTo:", sumUpTo(5));
console.log("M5 Greet:", greetByName("Sapthagiri"));
console.log("M6 Positive:", isPositiveNum(5), isPositiveNum(-2));

// HIGH LEVEL — loops, arrays, objects
function findMaxInArray(nums: number[]): number {
  let max = nums[0];
  for (const n of nums) {
    if (n > max) max = n;
  }
  return max;
}

function countVowels(text: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const ch of text) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

type SimplePerson = { name: string; age: number };
function checkAdult(person: SimplePerson): string {
  if (person.age >= 18) return `${person.name} is Adult`;
  return `${person.name} is Minor`;
}

function fizzBuzzList(limit: number): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}

function sum2DArray(matrix: number[][]): number {
  let total = 0;
  for (const row of matrix) {
    for (const val of row) total += val;
  }
  return total;
}

console.log("H1 Max:", findMaxInArray([3, 9, 1, 7]));
console.log("H2 Vowels:", countVowels("TypeScript"));
console.log("H3 Adult:", checkAdult({ name: "John", age: 25 }));
console.log("H4 FizzBuzz:", fizzBuzzList(15));
console.log("H5 Sum2D:", sum2DArray([[1, 2], [3, 4]]));
