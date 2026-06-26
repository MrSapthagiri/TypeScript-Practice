export {};

// ============================================================
// FUNCTION OVERLOADING
// Flow: same name, different param types → different return types
// Shape: function name(a: number, b: number): number;
//        function name(a: string, b: string): string;
//        function name(a, b) { ... implementation ... }
// ============================================================

// EASY LEVEL — overload number vs string
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") return `${a} ${b}`;
  if (typeof a === "number" && typeof b === "number") return a + b;
  return "Invalid combination";
}

function merge(a: number, b: number): number;
function merge(a: string, b: string): string;
function merge(a: number | string, b: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") return a.toUpperCase() + b.toUpperCase();
  if (typeof a === "number" && typeof b === "number") return a * b;
  return "Invalid merge";
}

console.log("E1:", combine(3, 4));
console.log("E1:", combine("Hello", "World"));
console.log("E2:", merge(5, 6));
console.log("E2:", merge("qa", "dev"));

// MEDIUM LEVEL — overload + control flow
function formatValue(value: number): string;
function formatValue(value: string): string;
function formatValue(value: boolean): string;
function formatValue(value: number | string | boolean): string {
  if (typeof value === "number") return `Number: ${value}`;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return `Text: ${value}`;
}

function compareValues(a: number, b: number): string;
function compareValues(a: string, b: string): string;
function compareValues(a: number | string, b: number | string): string {
  return a === b ? "Equal" : "Not Equal";
}

function display(value: boolean): string;
function display(value: number): string;
function display(value: string): string;
function display(value: boolean | number | string): string {
  switch (typeof value) {
    case "boolean": return `Bool: ${value}`;
    case "number": return `Num: ${value}`;
    default: return `Str: ${value}`;
  }
}

console.log("M1:", formatValue(100), formatValue("Hi"), formatValue(true));
console.log("M2:", compareValues("QA", "QA"), compareValues(5, 8));
console.log("M3:", display(42), display("Test"), display(false));

// HIGH LEVEL — overload with arrays and objects
function process(input: number[]): number;
function process(input: string[]): string;
function process(input: { name: string; score: number }[]): string[];
function process(input: number[] | string[] | { name: string; score: number }[]): number | string | string[] {
  if (typeof input[0] === "number") {
    let sum = 0;
    for (const n of input as number[]) sum += n;
    return sum;
  }
  if (typeof input[0] === "string") {
    return (input as string[]).join("-");
  }
  const result: string[] = [];
  for (const item of input as { name: string; score: number }[]) {
    result.push(`${item.name}: ${item.score >= 50 ? "Pass" : "Fail"}`);
  }
  return result;
}

function convert(value: number): string;
function convert(value: string): number;
function convert(value: number | string): number | string {
  if (typeof value === "number") return String(value);
  return Number(value);
}

console.log("H1 Sum:", process([1, 2, 3, 4]));
console.log("H2 Join:", process(["Type", "Script"]));
console.log("H3 Report:", process([
  { name: "Anu", score: 85 },
  { name: "Ben", score: 40 },
]));
console.log("H4:", convert(42), convert("100"));
