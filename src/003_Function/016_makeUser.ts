export {};

// ============================================================
// MAKE USER / OBJECT FACTORY FUNCTIONS
// Flow: params → return object
// ============================================================

// EASY LEVEL
function makeUser(name: string, age: number, city: string) {
  return { id: 1, name, age, city, active: true };
}
function makeGuest(name: string) {
  return { id: 0, name, role: "Guest", active: false };
}
function makeAdmin(name: string, department: string) {
  return { id: 100, name, department, role: "Admin", active: true };
}

console.log("E1:", makeUser("Arun", 22, "Chennai"));
console.log("E2:", makeGuest("Visitor"));
console.log("E3:", makeAdmin("Meena", "QA"));

// MEDIUM LEVEL — control flow in factory
function makeEmployee(name: string, role: string, salary: number) {
  const level = salary >= 60000 ? "Senior" : "Junior";
  return { name, role, salary, level, active: true };
}

function makeStudent(name: string, course: string, year: number) {
  const status = year >= 3 ? "Final Year" : "Ongoing";
  return { name, course, year, status, active: true };
}

function makeAccountHolder(name: string, balance: number) {
  const type = balance >= 10000 ? "Premium" : "Standard";
  return { name, balance, type };
}

function buildUsers(...names: string[]) {
  const users = [];
  for (let i = 0; i < names.length; i++) {
    users.push({ id: i + 1, name: names[i], active: true });
  }
  return users;
}

console.log("M1:", makeEmployee("John", "Developer", 70000));
console.log("M2:", makeStudent("Kavi", "TypeScript", 2));
console.log("M3:", makeAccountHolder("Ravi", 15000));
console.log("M4:", buildUsers("Anu", "Ben", "Cara"));

// HIGH LEVEL — typed factories with validation
type UserProfile = { id: number; name: string; email: string; role: string; active: boolean };

function createUser(name: string, email: string, role: string = "User"): UserProfile | string {
  if (!email.includes("@")) return "Invalid email";
  if (name.length < 2) return "Invalid name";
  return { id: Date.now(), name, email, role, active: true };
}

function createUsersFromData(data: { name: string; email: string }[]): UserProfile[] {
  const users: UserProfile[] = [];
  for (const item of data) {
    const user = createUser(item.name, item.email);
    if (typeof user !== "string") users.push(user);
  }
  return users;
}

function updateUser(user: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...user, ...updates };
}

console.log("H1:", createUser("John", "john@mail.com", "Admin"));
console.log("H2:", createUsersFromData([
  { name: "Anu", email: "anu@mail.com" },
  { name: "X", email: "bad" },
]));
console.log("H3:", updateUser(
  { id: 1, name: "John", email: "j@mail.com", role: "User", active: true },
  { role: "Admin" }
));
