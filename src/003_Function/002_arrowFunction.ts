export {};

// ============================================================
// ARROW FUNCTION SYNTAX (=>)
// Flow: input → arrow function → output
// Shape: const name = (param: type): returnType => expression;
// ============================================================


// ============================================================
// EASY LEVEL — simple math, one line, basic data types
// Types used: number, string, boolean
// ============================================================

// E1. Square — number in, number out
// Flow: x → x * x
const square_value = (x: number): number => x * x;
console.log("E1 Square:", square_value(5));

// E2. Cube — number in, number out
// Flow: x → x * x * x
const cube = (x: number): number => x * x * x;
console.log("E2 Cube:", cube(3));

// E3. Double — number in, number out
// Flow: x → x * 2
const double_value = (x: number): number => x * 2;
console.log("E3 Double:", double_value(8));

// E4. Triple — number in, number out
// Flow: x → x * 3
const triple = (x: number): number => x * 3;
console.log("E4 Triple:", triple(4));

// E5. Half — number in, number out
// Flow: x → x / 2
const half = (x: number): number => x / 2;
console.log("E5 Half:", half(10));

// E6. Greet — string in, string out
// Flow: name → "Hello, name"
const greetByName = (name: string): string => `Hello, ${name}`;
console.log("E6 Greet:", greetByName("Sapthagiri"));

// E7. Is positive — number in, boolean out
// Flow: n → n > 0 → true/false
const isPositiveNum = (n: number): boolean => n > 0;
console.log("E7 IsPositive:", isPositiveNum(5), isPositiveNum(-3));


// ============================================================
// MEDIUM LEVEL — control flow + loops + mixed data types
// Types used: number, string, boolean, number[], string[]
// ============================================================

// M1. IF / ELSE — check even or odd
// Flow: n → if n % 2 === 0 → "Even" else "Odd"
const evenOrOdd = (n: number): string => {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log("M1 EvenOrOdd:", evenOrOdd(10), evenOrOdd(7));

// M2. TERNARY — short if/else in one line
// Flow: score → score >= 50 ? "Pass" : "Fail"
const checkPass = (score: number): string =>
  score >= 50 ? "Pass" : "Fail";
console.log("M2 CheckPass:", checkPass(75), checkPass(30));

// M3. SWITCH — grade from marks
// Flow: marks → switch case → grade letter
const getGrade = (marks: number): string => {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 75:
      return "B";
    case marks >= 50:
      return "C";
    default:
      return "F";
  }
};
console.log("M3 Grade:", getGrade(92), getGrade(60), getGrade(40));

// M4. FOR loop — sum numbers from 1 to n
// Flow: start at 1 → loop to n → add each → return total
const sumUpTo = (n: number): number => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};
console.log("M4 SumUpTo:", sumUpTo(5)); // 1+2+3+4+5 = 15

// M5. WHILE loop — count digits in a number
// Flow: divide by 10 until 0 → count each step
const countDigits = (num: number): number => {
  let n = Math.abs(num);
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count === 0 ? 1 : count;
};
console.log("M5 CountDigits:", countDigits(12345), countDigits(0));

// M6. FOR-OF loop — find max in number array
// Flow: loop each item → keep largest value
const findMaxNum = (nums: number[]): number => {
  let max = nums[0];
  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }
  return max;
};
console.log("M6 FindMax:", findMaxNum([3, 9, 1, 7, 5]));

// M7. Array + IF — filter positive numbers
// Flow: loop array → if n > 0 → keep in new array
const getPositives = (nums: number[]): number[] => {
  const result: number[] = [];
  for (const n of nums) {
    if (n > 0) {
      result.push(n);
    }
  }
  return result;
};
console.log("M7 Positives:", getPositives([-2, 5, 0, 8, -1, 3]));

// M8. String array + loop — count vowels
// Flow: loop each char → if vowel → count++
const countVowelsInText = (text: string): number => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const ch of text) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
};
console.log("M8 Vowels:", countVowelsInText("TypeScript"));

// M9. Object type — check adult or minor
// Flow: age → if age >= 18 → "Adult" else "Minor"
type SimplePerson = { name: string; age: number };

const checkAdult = (person: SimplePerson): string => {
  if (person.age >= 18) {
    return `${person.name} is Adult`;
  }
  return `${person.name} is Minor`;
};
console.log("M9 Adult:", checkAdult({ name: "John", age: 25 }));
console.log("M9 Adult:", checkAdult({ name: "Amy", age: 15 }));


// ============================================================
// HIGH LEVEL — combine control flow, loops, arrays, objects
// Types used: number[], string[], object[], union, generic
// ============================================================

// H1. Nested loop — multiplication table for one number
// Flow: outer i from 1 to 10 → inner calc i * n → build table
const multiplicationTable = (n: number): string[] => {
  const table: string[] = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} x ${i} = ${n * i}`);
  }
  return table;
};
console.log("H1 Table:", multiplicationTable(5));

// H2. FizzBuzz with arrow + for loop
// Flow: 1 to n → if div by 15 "FizzBuzz" / 3 "Fizz" / 5 "Buzz" / else number
const fizzBuzz = (limit: number): (string | number)[] => {
  const result: (string | number)[] = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log("H2 FizzBuzz:", fizzBuzz(15));

// H3. Array of objects — find employees with salary > amount
// Flow: loop employees → if salary > min → add to result
type SalaryEmployee = { id: number; name: string; salary: number };

const filterBySalary = (staff: SalaryEmployee[], minSalary: number): SalaryEmployee[] => {
  const filtered: SalaryEmployee[] = [];
  for (const emp of staff) {
    if (emp.salary >= minSalary) {
      filtered.push(emp);
    }
  }
  return filtered;
};

const salaryStaff: SalaryEmployee[] = [
  { id: 1, name: "Ravi", salary: 45000 },
  { id: 2, name: "Priya", salary: 62000 },
  { id: 3, name: "Kumar", salary: 38000 },
];
console.log("H3 FilterSalary:", filterBySalary(salaryStaff, 50000));

// H4. Chained arrow — map + filter + reduce
// Flow: numbers → square → keep > 20 → sum all
const processNumbers = (nums: number[]): number =>
  nums
    .map((n) => n * n)
    .filter((n) => n > 20)
    .reduce((acc, n) => acc + n, 0);
console.log("H4 Process:", processNumbers([2, 3, 4, 5, 6]));

// H5. 2D array — sum all values in nested array
// Flow: outer loop rows → inner loop cols → add each value
const sum2DArray = (matrix: number[][]): number => {
  let total = 0;
  for (const row of matrix) {
    for (const val of row) {
      total += val;
    }
  }
  return total;
};
console.log("H5 Sum2D:", sum2DArray([[1, 2], [3, 4], [5, 6]]));

// H6. Switch + string — calculator
// Flow: operator switch → add/sub/mul/div → return result
const calcNumbers = (
  a: number,
  b: number,
  operator: "+" | "-" | "*" | "/"
): number | string => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
};
console.log("H6 Calc:", calcNumbers(10, 5, "+"), calcNumbers(10, 0, "/"));

// H7. Generic arrow — find first match in any array
// Flow: loop items → if match condition → return item
const findFirst = <T>(items: T[], match: (item: T) => boolean): T | undefined => {
  for (const item of items) {
    if (match(item)) {
      return item;
    }
  }
  return undefined;
};
console.log("H7 FindFirst:", findFirst([10, 25, 30, 45], (n) => n > 20));
console.log("H7 FindFirst:", findFirst(["cat", "dog", "bird"], (s) => s.length > 3));

// H8. Recursive arrow — factorial
// Flow: n <= 1 → 1 | else n * factorial(n-1)
const calcFactorial = (n: number): number =>
  n <= 1 ? 1 : n * calcFactorial(n - 1);
console.log("H8 Factorial:", calcFactorial(5));

// H9. Closure — arrow returns arrow (discount calculator)
// Flow: makeDiscount(10) → returns fn → fn(200) → price - 10%
const makeDiscount = (percent: number) => (price: number): number => {
  if (percent < 0 || percent > 100) {
    return price;
  }
  return price - (price * percent) / 100;
};
const applyTenPercentOff = makeDiscount(10);
console.log("H9 Discount:", applyTenPercentOff(200));

// H10. Full pipeline — students report
// Flow: filter passed → map to grade → reduce average marks
type ClassStudent = { name: string; marks: number; passed: boolean };

const studentReport = (classList: ClassStudent[]): { names: string[]; avgMarks: number } => {
  const passedStudents = classList.filter((s) => s.passed);
  const names = passedStudents.map((s) => s.name);
  const avgMarks =
    passedStudents.length === 0
      ? 0
      : passedStudents.reduce((acc, s) => acc + s.marks, 0) / passedStudents.length;
  return { names, avgMarks };
};

const classList: ClassStudent[] = [
  { name: "Anu", marks: 85, passed: true },
  { name: "Ben", marks: 40, passed: false },
  { name: "Cara", marks: 72, passed: true },
  { name: "Dan", marks: 91, passed: true },
];
console.log("H10 Report:", studentReport(classList));
