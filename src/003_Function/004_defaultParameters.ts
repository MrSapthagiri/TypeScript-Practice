export {};

// ============================================================
// DEFAULT PARAMETER SYNTAX
// Flow: no arg passed → use default value → return result
// Shape: function name(param: type = defaultValue): returnType
// ============================================================

// EASY LEVEL — string defaults
function greetUser(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}
function setCity(city: string = "Chennai"): string {
  return `City: ${city}`;
}
function setRole(role: string = "Engineer"): string {
  return `Role: ${role}`;
}
function setLanguage(lang: string = "English"): string {
  return `Language: ${lang}`;
}
function setStatus(status: string = "Active"): string {
  return `Status: ${status}`;
}

console.log("E1:", greetUser());
console.log("E1:", greetUser("Selvam"));
console.log("E2:", setCity());
console.log("E3:", setRole());
console.log("E4:", setLanguage());
console.log("E5:", setStatus());

// MEDIUM LEVEL — number defaults + control flow
function calcDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}

function buildMessage(name: string = "User", score: number = 0): string {
  if (score >= 50) return `${name} passed with ${score}`;
  return `${name} needs improvement (${score})`;
}

function repeatWord(word: string = "Hi", times: number = 3): string {
  let result = "";
  for (let i = 0; i < times; i++) result += word + " ";
  return result.trim();
}

function createRange(start: number = 1, end: number = 5): number[] {
  const nums: number[] = [];
  for (let i = start; i <= end; i++) nums.push(i);
  return nums;
}

function logLevel(message: string, level: string = "INFO"): void {
  console.log(`M5 [${level}]: ${message}`);
}

console.log("M1 Discount:", calcDiscount(200));
console.log("M2 Message:", buildMessage());
console.log("M3 Repeat:", repeatWord());
console.log("M4 Range:", createRange());
logLevel("Server started");

// HIGH LEVEL — object defaults + loops + switch
type UserProfile = { name: string; role: string; active: boolean };

function createProfile(
  name: string = "Guest",
  role: string = "User",
  active: boolean = true
): UserProfile {
  return { name, role, active };
}

function applyTax(amount: number, rate: number = 18): number {
  switch (true) {
    case rate <= 0: return amount;
    case rate >= 100: return 0;
    default: return amount + (amount * rate) / 100;
  }
}

function buildTable(n: number = 5, limit: number = 10): string[] {
  const table: string[] = [];
  for (let i = 1; i <= limit; i++) {
    table.push(`${n} x ${i} = ${n * i}`);
  }
  return table;
}

function filterByMinScore(
  scores: number[],
  minScore: number = 50
): number[] {
  const passed: number[] = [];
  for (const s of scores) {
    if (s >= minScore) passed.push(s);
  }
  return passed;
}

console.log("H1 Profile:", createProfile());
console.log("H2 Tax:", applyTax(1000));
console.log("H3 Table:", buildTable());
console.log("H4 Passed:", filterByMinScore([40, 55, 72, 30]));
