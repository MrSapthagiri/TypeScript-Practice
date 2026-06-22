// ======================================
// EMPLOYEE MANAGEMENT SYSTEM - TASKS
// ======================================

// Question 1:
// Create variables for Employee Name, ID, Department and Salary.

let employeeName: string = "John";
let employeeId: number = 101;
let department: string = "QA";
let salary: number = 50000;
//Output:
console.log("Employee Name:", employeeName);
console.log("Employee ID:", employeeId);
console.log("Department:", department);
console.log("Salary:", salary);
//output:
// Employee Name: John
// Employee ID: 101
// Department: QA
// Salary: 50000

// Question 2:
// Check whether employee is eligible for bonus.
// Condition: Salary > 40000

if (salary > 40000) {
    console.log("Bonus Eligible");
} else {
    console.log("Not Eligible");
}
//output: Bonus Eligible


// Question 3:
// Check whether employee is Senior or Junior.
// Condition: Experience >= 5 years

let experience: number = 6;

if (experience >= 5) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}
//output: Senior Employee


// Question 4:
// Check employee work location.

let location: string = "Chennai";

if (location === "Chennai") {
    console.log("Work From Office");
} else {
    console.log("Remote Employee");
}
//output: Work From Office


// Question 5:
// Calculate annual salary.

let monthlySalary: number = 60000;

let annualSalary = monthlySalary * 12;

console.log(annualSalary);
//Output: 720000
