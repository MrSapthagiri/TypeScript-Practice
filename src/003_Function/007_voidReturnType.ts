export {};

// ============================================================
// VOID RETURN TYPE
// Flow: input → function runs side effect → no return value
// Shape: function name(param: type): void { console.log(...); }
// ============================================================

// EASY LEVEL — simple logging
function logMessage(msg: string): void { console.log("E1 Log:", msg); }
function logError(error: string): void { console.log("E2 Error:", error); }
function logWarning(warning: string): void { console.log("E3 Warning:", warning); }
function logSuccess(message: string): void { console.log("E4 Success:", message); }
function logInfo(info: string): void { console.log("E5 Info:", info); }

logMessage("Application started");
logError("Invalid input");
logWarning("Low disk space");
logSuccess("Test passed");
logInfo("User logged in");

// MEDIUM LEVEL — void + control flow + loops
function logIfPositive(n: number): void {
  if (n > 0) console.log("M1 Positive:", n);
  else console.log("M1 Not positive:", n);
}

function logGrade(marks: number): void {
  switch (true) {
    case marks >= 90: console.log("M2 Grade: A"); break;
    case marks >= 75: console.log("M2 Grade: B"); break;
    case marks >= 50: console.log("M2 Grade: C"); break;
    default: console.log("M2 Grade: F");
  }
}

function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) console.log("M3 ", i);
}

function printArray(nums: number[]): void {
  for (const n of nums) console.log("M4 ", n);
}

function logPerson(name: string, age: number): void {
  console.log(`M5 Name: ${name}, Age: ${age}`);
}

logIfPositive(5);
logIfPositive(-3);
logGrade(82);
printNumbers(5);
printArray([10, 20, 30]);
logPerson("John", 25);

// HIGH LEVEL — void with objects and nested loops
type TaskItem = { id: number; title: string; done: boolean };

function printTaskList(tasks: TaskItem[]): void {
  for (const task of tasks) {
    const status = task.done ? "Done" : "Pending";
    console.log(`H1 [${task.id}] ${task.title} - ${status}`);
  }
}

function printMatrix(matrix: number[][]): void {
  for (const row of matrix) {
    let line = "";
    for (const val of row) line += val + " ";
    console.log("H2", line.trim());
  }
}

function logReport(title: string, ...lines: string[]): void {
  console.log(`H3 === ${title} ===`);
  for (const line of lines) console.log("H3 ", line);
}

const tasks: TaskItem[] = [
  { id: 1, title: "Write tests", done: true },
  { id: 2, title: "Fix bug", done: false },
];
printTaskList(tasks);
printMatrix([[1, 2], [3, 4]]);
logReport("Daily", "Login OK", "Tests passed", "Deploy ready");
