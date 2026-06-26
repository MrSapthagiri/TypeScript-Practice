export {};

// ============================================================
// CLOSURE — function returns another function
// Flow: outer(factor) → inner remembers factor → inner(x) uses it
// Shape: function outer(a) { return function inner(b) { return a + b; }; }
// ============================================================

// EASY LEVEL — simple closures
function multiplier(factor: number) {
  return (x: number) => x * factor;
}
function adder(n: number) {
  return (x: number) => x + n;
}
function greeter(prefix: string) {
  return (name: string) => `${prefix}, ${name}!`;
}
function counter() {
  let count = 0;
  return () => ++count;
}
function makeLogger(tag: string) {
  return (msg: string): void => console.log(`[${tag}] ${msg}`);
}

const double = multiplier(2);
const triple = multiplier(3);
const addTen = adder(10);
const sayHello = greeter("Hello");
const next = counter();
const appLog = makeLogger("APP");

console.log("E1 Double:", double(10));
console.log("E2 Triple:", triple(10));
console.log("E3 AddTen:", addTen(5));
console.log("E4:", sayHello("Arun"));
console.log("E5 Counter:", next(), next(), next());
appLog("Started");

// MEDIUM LEVEL — closure + control flow
function makeValidator(min: number, max: number) {
  return (value: number): boolean => {
    if (value < min) return false;
    if (value > max) return false;
    return true;
  };
}

function makeDiscount(percent: number) {
  return (price: number): number => {
    if (percent < 0 || percent > 100) return price;
    return price - (price * percent) / 100;
  };
}

function makeRepeater(word: string) {
  return (times: number): string => {
    let result = "";
    for (let i = 0; i < times; i++) result += word + " ";
    return result.trim();
  };
}

function makeAccumulator() {
  let total = 0;
  return (n: number): number => {
    total += n;
    return total;
  };
}

const isValidScore = makeValidator(0, 100);
const tenOff = makeDiscount(10);
const repeatHi = makeRepeater("Hi");
const acc = makeAccumulator();

console.log("M1 Valid:", isValidScore(75), isValidScore(150));
console.log("M2 Discount:", tenOff(200));
console.log("M3:", repeatHi(3));
console.log("M4 Acc:", acc(10), acc(20), acc(5));

// HIGH LEVEL — closure with objects and private state
type BankAccount = { deposit: (n: number) => number; withdraw: (n: number) => string | number; balance: () => number };

function createAccount(initial: number = 0): BankAccount {
  let balance = initial;
  return {
    deposit(n: number): number {
      if (n > 0) balance += n;
      return balance;
    },
    withdraw(n: number): string | number {
      if (n > balance) return "Insufficient funds";
      balance -= n;
      return balance;
    },
    balance(): number {
      return balance;
    },
  };
}

function createGradeChecker(passMark: number) {
  const history: number[] = [];
  return {
    check(marks: number): string {
      history.push(marks);
      return marks >= passMark ? "Pass" : "Fail";
    },
    getHistory(): number[] {
      return [...history];
    },
  };
}

function createFilter(min: number) {
  return (nums: number[]): number[] => {
    const result: number[] = [];
    for (const n of nums) {
      if (n >= min) result.push(n);
    }
    return result;
  };
}

const account = createAccount(1000);
const gradeChecker = createGradeChecker(50);
const filterAbove20 = createFilter(20);

console.log("H1 Deposit:", account.deposit(500));
console.log("H1 Withdraw:", account.withdraw(200));
console.log("H1 Balance:", account.balance());
console.log("H2:", gradeChecker.check(72), gradeChecker.check(40));
console.log("H2 History:", gradeChecker.getHistory());
console.log("H3:", filterAbove20([5, 15, 25, 30, 10]));
