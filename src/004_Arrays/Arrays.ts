
// ===============================
// Sample dataset (real-world style)
// ===============================

type Employee = {
  id: number;
  name: string;
  role: string;
  salary: number;
  active: boolean;
  skills: string[];
};

const employees: Employee[] = [
  { id: 1, name: "Arun", role: "Developer", salary: 50000, active: true, skills: ["JS", "TS"] },
  { id: 2, name: "Kumar", role: "Tester", salary: 40000, active: false, skills: ["Testing"] },
  { id: 3, name: "Raj", role: "Developer", salary: 70000, active: true, skills: ["React", "TS"] },
  { id: 4, name: "Siva", role: "Manager", salary: 90000, active: true, skills: ["Leadership"] },
  { id: 5, name: "Vicky", role: "Developer", salary: 65000, active: false, skills: ["Node", "TS"] },
];

// ==========================
// 1–15 👉 forEach (Advanced)
// ==========================

employees.forEach(e => console.log(e.name));

employees.forEach(e => console.log(e.role, e.salary));

employees.forEach(e => console.log(`${e.name} - ${e.active}`));

employees.forEach(e => {
  if (e.active) console.log("Active:", e.name);
});

employees.forEach(e => console.log(e.skills));

employees.forEach(e => console.log(e.salary + 5000));

employees.forEach(e => console.log(`${e.name} earns ${e.salary}`));

employees.forEach(e => console.log(e.role.toUpperCase()));

employees.forEach(e => console.log(e.id * 10));

employees.forEach(e => console.log(e.skills.length));

employees.forEach(e => console.log(e.name.charAt(0)));

employees.forEach(e => console.log(`${e.name} => ${e.role}`));

employees.forEach(e => {
  if (e.salary > 60000) console.log("High salary:", e.name);
});

employees.forEach(e => console.log({ id: e.id, name: e.name }));

employees.forEach(e => console.log("Employee:", e));


// ==========================
// 16–30 👉 map (Transform)
// ==========================

const names = employees.map(e => e.name);

const salaries = employees.map(e => e.salary * 1.1);

const roles = employees.map(e => e.role.toLowerCase());

const ids = employees.map(e => e.id * 100);

const activeFlags = employees.map(e => e.active);

const nameRole = employees.map(e => `${e.name}-${e.role}`);

const skillCount = employees.map(e => e.skills.length);

const bonusSalary = employees.map(e => e.salary + 10000);

const upperNames = employees.map(e => e.name.toUpperCase());

const roleTag = employees.map(e => ({ role: e.role }));

const simplified = employees.map(e => ({
  id: e.id,
  name: e.name,
}));

const salaryTax = employees.map(e => e.salary * 0.9);

const experienceMock = employees.map(e => ({
  name: e.name,
  exp: e.salary > 60000 ? "Senior" : "Junior",
}));

const formatted = employees.map(e => `${e.name} (${e.role})`);

const skillText = employees.map(e => e.skills.join(","));


// ==========================
// 31–45 👉 filter (Advanced)
// ==========================

const activeEmployees = employees.filter(e => e.active);

const developers = employees.filter(e => e.role === "Developer");

const highSalary = employees.filter(e => e.salary > 60000);

const lowSalary = employees.filter(e => e.salary < 60000);

const devActive = employees.filter(e => e.role === "Developer" && e.active);

const hasTS = employees.filter(e => e.skills.includes("TS"));

const hasReact = employees.filter(e => e.skills.includes("React"));

const multiSkill = employees.filter(e => e.skills.length > 1);

const nameStartsA = employees.filter(e => e.name.startsWith("A"));

const idEven = employees.filter(e => e.id % 2 === 0);

const salaryRange = employees.filter(e => e.salary >= 50000 && e.salary <= 80000);

const inactive = employees.filter(e => !e.active);

const managers = employees.filter(e => e.role === "Manager");

const skillNode = employees.filter(e => e.skills.includes("Node"));

const topEarners = employees.filter(e => e.salary >= 70000);

