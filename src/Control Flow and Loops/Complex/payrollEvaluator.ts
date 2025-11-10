enum Role { Junior = 'Junior', Senior = 'Senior', Manager = 'Manager' }

interface Employee {
	id: number;
	name: string;
	role: Role;
	baseSalary: number;
	hoursWorked: number; // per month
	department: string;
}


const employees: Employee[] = [
{ id: 1, name: 'Arun', role: Role.Manager, baseSalary: 120000, hoursWorked: 190, department: 'Engineering' },
{ id: 2, name: 'Priya', role: Role.Senior, baseSalary: 80000, hoursWorked: 178, department: 'Engineering' },
{ id: 3, name: 'Vikram', role: Role.Junior, baseSalary: 40000, hoursWorked: 160, department: 'Support' },
{ id: 4, name: 'Kavya', role: Role.Senior, baseSalary: 85000, hoursWorked: 205, department: 'Design' }
];


function overtimePay(hours: number, baseSalary: number): number {
const standard = 180;
if (hours <= standard) return 0;
const extra = hours - standard;
// hourly rate = (baseSalary / 180)
return extra * (baseSalary / standard) * 1.5;
}


function taxFor(salary: number): number {
// progressive slabs
if (salary <= 25000) return salary * 0.05;
if (salary <= 75000) return 1250 + (salary - 25000) * 0.1;
return 6250 + (salary - 75000) * 0.2;
}


function evaluatePayroll(list: Employee[]) {
const deptTotals: Record<string, number> = {};
for (const e of list) {
const ot = overtimePay(e.hoursWorked, e.baseSalary);
let gross = e.baseSalary + ot;
// role based bonus
switch (e.role) {
case Role.Manager:
gross += gross * 0.15; break;
case Role.Senior:
gross += gross * 0.08; break;
case Role.Junior:
default:
gross += gross * 0.03; break;
}


const tax = taxFor(gross);
const net = gross - tax;


console.log(`${e.name} (${e.department}) => Base: ${e.baseSalary.toFixed(0)}, OT: ${ot.toFixed(0)}, Gross: ${gross.toFixed(0)}, Tax: ${tax.toFixed(0)}, Net: ${net.toFixed(0)}`);


deptTotals[e.department] = (deptTotals[e.department] || 0) + net;
}


console.log('\nDepartment Net Payouts:');
for (const d in deptTotals) console.log(` ${d}: ${deptTotals[d].toFixed(0)}`);
}


evaluatePayroll(employees);