type EmployeeRecord = {
  id: number;
  name: string;
  role: string;
  active: boolean;
};

let employees: EmployeeRecord[] = [
  { id: 1, name: "Giri", role: "Tester", active: true },
  { id: 2, name: "ravi", role: "Developer", active: false },
  { id: 3, name: "Charan", role: "Manager", active: true }
];

// filter active employees
let activeEmployees = employees.filter(emp => emp.active);

// map to get only names
let employeeNames = employees.map(emp => emp.name);

// find by role
let manager = employees.find(emp => emp.role === "Manager");

console.log("Active Employees:", activeEmployees);
console.log("Employee Names:", employeeNames);
console.log("Manager:", manager);

export {};
