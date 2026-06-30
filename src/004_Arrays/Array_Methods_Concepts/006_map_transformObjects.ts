export {};

// ============================================================
// map() — transform object arrays (common real-world pattern)
// Easy → Medium → High: shape data for UI, API, reports
// ============================================================

// EASY LEVEL — extract one field
type Person = { name: string; age: number };
const people: Person[] = [
  { name: "Giri", age: 24 },
  { name: "Sam", age: 30 },
  { name: "Amy", age: 19 },
];

const names = people.map(function (p) {
  return p.name;
});
console.log("E1 Names:", names);

const ages = people.map((p) => p.age);
console.log("E2 Ages:", ages);

// MEDIUM LEVEL — build new object shape
type Employee = { id: number; name: string; salary: number };
const employees: Employee[] = [
  { id: 1, name: "Arun", salary: 50000 },
  { id: 2, name: "Meena", salary: 65000 },
];

type Payslip = { empId: number; empName: string; monthly: number };
const payslips: Payslip[] = employees.map(function (emp) {
  return {
    empId: emp.id,
    empName: emp.name,
    monthly: Math.round(emp.salary / 12),
  };
});
console.log("M1 Payslips:", payslips);

// HIGH LEVEL — nested map for 2D data
type TestCase = { id: string; title: string; tags: string[] };
const testCases: TestCase[] = [
  { id: "TC01", title: "Login", tags: ["smoke", "auth"] },
  { id: "TC02", title: "Checkout", tags: ["regression", "payment"] },
];

const report = testCases.map(function (tc) {
  return {
    id: tc.id,
    title: tc.title.toUpperCase(),
    tagCount: tc.tags.length,
    tagList: tc.tags.map(function (t) { return `#${t}`; }).join(" "),
  };
});
console.log("H1 Test Report:", report);

const csvRows = employees.map(function (emp) {
  return [emp.id, emp.name, emp.salary].join(",");
});
console.log("H2 CSV:", csvRows.join("\n"));
