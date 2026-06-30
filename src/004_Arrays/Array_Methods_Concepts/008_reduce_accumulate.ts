export {};

// ============================================================
// reduce() — accumulate totals, group, build objects
// Easy → Medium → High: one value from many items
// ============================================================

// EASY LEVEL — sum, min, concatenate
const expenses: number[] = [200, 150, 500, 75];
const totalExpense = expenses.reduce(function (acc, amount) {
  return acc + amount;
}, 0);
console.log("E1 Total Expense:", totalExpense);

const letters: string[] = ["T", "y", "p", "e", "S", "c", "r", "i", "p", "t"];
const word = letters.reduce(function (acc, ch) {
  return acc + ch;
}, "");
console.log("E2 Word:", word);

// MEDIUM LEVEL — min/max, average in one pass
const temps: number[] = [32, 28, 35, 30, 29];
const stats = temps.reduce(function (acc, temp) {
  acc.sum += temp;
  acc.min = temp < acc.min ? temp : acc.min;
  acc.max = temp > acc.max ? temp : acc.max;
  acc.count++;
  return acc;
}, { sum: 0, min: Infinity, max: -Infinity, count: 0 });

console.log("M1 Stats:", {
  avg: stats.sum / stats.count,
  min: stats.min,
  max: stats.max,
});

// HIGH LEVEL — group employees by department
type Worker = { name: string; dept: string; salary: number };
const team: Worker[] = [
  { name: "Arun", dept: "QA", salary: 50000 },
  { name: "Meena", dept: "Dev", salary: 70000 },
  { name: "Kavi", dept: "QA", salary: 55000 },
  { name: "Riya", dept: "Dev", salary: 72000 },
];

type DeptSummary = Record<string, { count: number; totalSalary: number }>;

const deptReport = team.reduce(function (acc: DeptSummary, worker) {
  if (!acc[worker.dept]) {
    acc[worker.dept] = { count: 0, totalSalary: 0 };
  }
  acc[worker.dept].count++;
  acc[worker.dept].totalSalary += worker.salary;
  return acc;
}, {});

console.log("H1 Dept Report:", deptReport);

const testDurations = [1.2, 0.8, 2.5, 1.0, 3.1];
const durationReport = testDurations.reduce(function (acc, d) {
  if (d < 1) acc.fast++;
  else if (d <= 2) acc.medium++;
  else acc.slow++;
  acc.total += d;
  return acc;
}, { fast: 0, medium: 0, slow: 0, total: 0 });

console.log("H2 Duration Report:", durationReport);
