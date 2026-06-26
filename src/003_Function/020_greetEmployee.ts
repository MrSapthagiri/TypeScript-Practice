export {};

// ============================================================
// GREET EMPLOYEE — string functions + control flow
// Flow: name + role → greeting string
// ============================================================

// EASY LEVEL
function greetEmployee(name: string): string { return `Hello, ${name}`; }
function greetManager(name: string): string { return `Good day, Manager ${name}`; }
function greetDeveloper(name: string): string { return `Welcome Developer ${name}`; }
function greetTester(name: string): string { return `Hello QA Engineer ${name}`; }
function greetIntern(name: string): string { return `Hi Intern ${name}, welcome aboard`; }

console.log("E1:", greetEmployee("John"));
console.log("E2:", greetManager("Meena"));
console.log("E3:", greetDeveloper("Arun"));
console.log("E4:", greetTester("Kavi"));
console.log("E5:", greetIntern("Sam"));

// MEDIUM LEVEL — switch by role + time of day
function greetByRole(name: string, role: string): string {
  switch (role.toLowerCase()) {
    case "manager": return greetManager(name);
    case "developer": return greetDeveloper(name);
    case "tester": return greetTester(name);
    case "intern": return greetIntern(name);
    default: return greetEmployee(name);
  }
}

function greetByTime(name: string, hour: number): string {
  if (hour < 12) return `Good morning, ${name}!`;
  if (hour < 17) return `Good afternoon, ${name}!`;
  return `Good evening, ${name}!`;
}

function greetFormal(name: string, title?: string): string {
  if (title) return `Dear ${title} ${name}, welcome.`;
  return `Dear ${name}, welcome.`;
}

function greetTeam(...names: string[]): string[] {
  const greetings: string[] = [];
  for (const name of names) greetings.push(greetEmployee(name));
  return greetings;
}

function greetIfActive(name: string, active: boolean): string {
  return active ? `Welcome back, ${name}!` : `Account inactive, ${name}.`;
}

console.log("M1:", greetByRole("Ravi", "developer"));
console.log("M2:", greetByTime("Anu", 14));
console.log("M3:", greetFormal("John", "Mr"));
console.log("M4:", greetTeam("A", "B", "C"));
console.log("M5:", greetIfActive("Sam", true));

// HIGH LEVEL — personalized greeting from employee object
type GreetEmployee = { name: string; role: string; department: string; active: boolean; joinYear: number };

function buildGreeting(emp: GreetEmployee): string {
  if (!emp.active) return greetIfActive(emp.name, false);
  const years = new Date().getFullYear() - emp.joinYear;
  const base = greetByRole(emp.name, emp.role);
  if (years >= 5) return `${base} — ${years} years in ${emp.department}!`;
  return `${base} — ${emp.department} team.`;
}

function greetAll(list: GreetEmployee[]): string[] {
  const messages: string[] = [];
  for (const emp of list) messages.push(buildGreeting(emp));
  return messages;
}

const team: GreetEmployee[] = [
  { name: "Anu", role: "tester", department: "QA", active: true, joinYear: 2018 },
  { name: "Ben", role: "intern", department: "Dev", active: true, joinYear: 2024 },
  { name: "Cara", role: "manager", department: "Ops", active: false, joinYear: 2015 },
];

console.log("H1:", buildGreeting(team[0]));
console.log("H2 All:", greetAll(team));
