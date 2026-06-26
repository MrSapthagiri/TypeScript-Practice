export {};

// ============================================================
// OPTIONAL PARAMETER SYNTAX (?)
// Flow: optional arg missing → use fallback logic
// Shape: function name(required: type, optional?: type): returnType
// ============================================================

// EASY LEVEL — simple optional strings
function fullName(first: string, last?: string): string {
  return last ? `${first} ${last}` : first;
}
function buildAddress(city: string, state?: string): string {
  return state ? `${city}, ${state}` : city;
}
function formatPhone(countryCode: string, number?: string): string {
  return number ? `${countryCode}-${number}` : countryCode;
}
function showProfile(name: string, age?: number): string {
  return age ? `${name} (${age})` : name;
}
function createLabel(title: string, subtitle?: string): string {
  return subtitle ? `${title}: ${subtitle}` : title;
}

console.log("E1:", fullName("John"));
console.log("E1:", fullName("John", "Doe"));
console.log("E2:", buildAddress("Chennai"));
console.log("E3:", formatPhone("+91"));
console.log("E4:", showProfile("Giri"));
console.log("E5:", createLabel("QA Report"));

// MEDIUM LEVEL — optional + control flow + loops
function greetUser(name: string, title?: string): string {
  if (title) return `Hello, ${title} ${name}`;
  return `Hello, ${name}`;
}

function calcTotal(price: number, tax?: number, discount?: number): number {
  let total = price;
  if (tax) total += (price * tax) / 100;
  if (discount) total -= (price * discount) / 100;
  return total;
}

function joinParts(...parts: (string | undefined)[]): string {
  let result = "";
  for (const part of parts) {
    if (part) result += part + " ";
  }
  return result.trim();
}

function findInArray(nums: number[], target?: number): number | string {
  if (target === undefined) return "No target given";
  for (const n of nums) {
    if (n === target) return n;
  }
  return "Not found";
}

function describeNumber(n: number, label?: string): string {
  const type = n % 2 === 0 ? "Even" : "Odd";
  return label ? `${label}: ${n} is ${type}` : `${n} is ${type}`;
}

console.log("M1:", greetUser("Ravi", "Mr"));
console.log("M2 Total:", calcTotal(1000, 18, 5));
console.log("M3:", joinParts("Type", "Script", undefined, "Practice"));
console.log("M4:", findInArray([1, 2, 3], 2));
console.log("M5:", describeNumber(7, "Check"));

// HIGH LEVEL — optional params with objects and switch
type EmployeeInfo = { name: string; dept?: string; salary?: number };

function buildEmployee(name: string, dept?: string, salary?: number): EmployeeInfo {
  const emp: EmployeeInfo = { name };
  if (dept) emp.dept = dept;
  if (salary) emp.salary = salary;
  return emp;
}

function getGrade(marks: number, gradeScale?: "strict" | "normal"): string {
  const scale = gradeScale ?? "normal";
  switch (scale) {
    case "strict":
      if (marks >= 95) return "A";
      if (marks >= 80) return "B";
      return "C";
    default:
      if (marks >= 90) return "A";
      if (marks >= 75) return "B";
      if (marks >= 50) return "C";
      return "F";
  }
}

function filterEmployees(
  list: EmployeeInfo[],
  minSalary?: number
): EmployeeInfo[] {
  const result: EmployeeInfo[] = [];
  for (const emp of list) {
    if (minSalary === undefined || (emp.salary && emp.salary >= minSalary)) {
      result.push(emp);
    }
  }
  return result;
}

const staff: EmployeeInfo[] = [
  { name: "Anu", dept: "QA", salary: 45000 },
  { name: "Ben", salary: 62000 },
  { name: "Cara", dept: "Dev" },
];

console.log("H1:", buildEmployee("John", "IT", 50000));
console.log("H2:", getGrade(88), getGrade(88, "strict"));
console.log("H3:", filterEmployees(staff, 50000));
