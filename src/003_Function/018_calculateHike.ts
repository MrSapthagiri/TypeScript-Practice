export {};

// ============================================================
// SALARY / HIKE CALCULATIONS
// Flow: salary in → formula → result out
// ============================================================

// EASY LEVEL
function calculateHike(salary: number): number { return salary * 0.10; }
function calculateBonus(salary: number): number { return salary * 0.05; }
function calculateAnnualSalary(monthlySalary: number): number { return monthlySalary * 12; }
function calculateTax(salary: number): number { return salary * 0.15; }
function calculateNetSalary(gross: number, tax: number): number { return gross - tax; }

console.log("E1 Hike:", calculateHike(50000));
console.log("E2 Bonus:", calculateBonus(50000));
console.log("E3 Annual:", calculateAnnualSalary(60000));
console.log("E4 Tax:", calculateTax(70000));
console.log("E5 Net:", calculateNetSalary(70000, 10500));

// MEDIUM LEVEL — control flow + switch for tax slabs
function calculateHikeByRating(salary: number, rating: number): number {
  if (rating >= 4) return salary * 0.15;
  if (rating >= 3) return salary * 0.10;
  return salary * 0.05;
}

function calculateTaxSlab(income: number): number {
  switch (true) {
    case income <= 250000: return 0;
    case income <= 500000: return income * 0.05;
    case income <= 1000000: return income * 0.15;
    default: return income * 0.30;
  }
}

function calculateTotalPay(salary: number, bonus: number, tax: number): number {
  return salary + bonus - tax;
}

function sumSalaries(...salaries: number[]): number {
  let total = 0;
  for (const s of salaries) total += s;
  return total;
}

function averageSalary(salaries: number[]): number {
  if (salaries.length === 0) return 0;
  return sumSalaries(...salaries) / salaries.length;
}

console.log("M1 Hike:", calculateHikeByRating(50000, 4));
console.log("M2 Tax:", calculateTaxSlab(600000));
console.log("M3 Total:", calculateTotalPay(50000, 2500, 7500));
console.log("M4 Sum:", sumSalaries(40000, 50000, 60000));
console.log("M5 Avg:", averageSalary([40000, 50000, 60000]));

// HIGH LEVEL — full payroll for employee list
type PayrollEmployee = { name: string; salary: number; rating: number };

function buildPayroll(list: PayrollEmployee[]): { name: string; gross: number; net: number }[] {
  const report = [];
  for (const emp of list) {
    const hike = calculateHikeByRating(emp.salary, emp.rating);
    const gross = emp.salary + hike;
    const tax = calculateTaxSlab(gross);
    report.push({ name: emp.name, gross, net: gross - tax });
  }
  return report;
}

function totalPayrollCost(list: PayrollEmployee[]): number {
  const payroll = buildPayroll(list);
  let total = 0;
  for (const row of payroll) total += row.net;
  return total;
}

const team: PayrollEmployee[] = [
  { name: "Anu", salary: 50000, rating: 4 },
  { name: "Ben", salary: 45000, rating: 3 },
  { name: "Cara", salary: 60000, rating: 5 },
];

console.log("H1 Payroll:", buildPayroll(team));
console.log("H2 Total cost:", totalPayrollCost(team));
