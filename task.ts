// /******************************************************************
// 1. Create a variable called score and assign 75.
// Check whether score is greater than 50.
// Print Pass or Fail.
// ******************************************************************/

// let score: number = 75;

// if (score > 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// /*
// Output:
// Pass

// Explanation:
// Since score (75) is greater than 50,
// the condition is true and "Pass" is printed.
// */


// /******************************************************************
// 2. Create a variable called temperature and assign 35.
// Hot if temperature is greater than 30,
// otherwise print Normal.
// ******************************************************************/

// let temperature: number = 35;

// if (temperature > 30) {
//     console.log("Hot");
// } else {
//     console.log("Normal");
// }

// /*
// Output:
// Hot

// Explanation:
// 35 is greater than 30,
// therefore "Hot" is printed.
// */


// /******************************************************************
// 3. Create a variable called browser and assign "Chrome".
// Use switch statement.
// ******************************************************************/

// let browser: string = "Chrome";

// switch (browser) {
//     case "Chrome":
//         console.log("Google Chrome Browser");
//         break;

//     case "Firefox":
//         console.log("Mozilla Firefox Browser");
//         break;

//     case "Edge":
//         console.log("Microsoft Edge Browser");
//         break;

//     default:
//         console.log("Browser Not Supported");
// }

// /*
// Output:
// Google Chrome Browser

// Explanation:
// The value of browser is "Chrome",
// so the Chrome case executes.
// */


// /******************************************************************
// 4. Using for loop print numbers from 1 to 20.
// ******************************************************************/

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// /*
// Output:
// 1
// 2
// 3
// ...
// 20

// Explanation:
// The loop starts at 1 and continues
// until 20.
// */


// /******************************************************************
// 5. Calculate the sum of numbers from 1 to 10.
// ******************************************************************/

// let sum1: number = 0;

// sum1 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;

// console.log("Sum =", sum1);

// /*
// Output:
// Sum = 55

// Explanation:
// Adding all numbers from 1 to 10
// results in 55.
// */


// /******************************************************************
// 6. Using for loop Calculate the sum of numbers from 1 to 10.
// ******************************************************************/

// let sum2: number = 0;

// for (let i = 1; i <= 10; i++) {
//     sum2 += i;
// }

// console.log("Sum using for loop =", sum2);

// /*
// Output:
// Sum using for loop = 55

// Explanation:
// Each number from 1 to 10 is added
// to sum2 using a loop.
// */


// /******************************************************************
// 7. Print multiplication table of 5.
// ******************************************************************/

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// /*
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Explanation:
// The loop multiplies 5 with numbers
// from 1 to 10.
// */


// /******************************************************************
// 8. Print all even numbers between 1 and 20 using while loop.
// ******************************************************************/

// let evenNum: number = 2;

// while (evenNum <= 20) {
//     console.log(evenNum);
//     evenNum += 2;
// }

// /*
// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// Explanation:
// Starts from 2 and increases by 2
// until 20.
// */


// /******************************************************************
// 9. Use do-while loop to print numbers from 5 to 1.
// ******************************************************************/

// let num: number = 5;

// do {
//     console.log(num);
//     num--;
// } while (num >= 1);

// /*
// Output:
// 5
// 4
// 3
// 2
// 1

// Explanation:
// The do-while loop executes first,
// then checks the condition.
// */


// /******************************************************************
// 10. Print all even numbers between 1 and 20 using while loop.
// ******************************************************************/

// let n: number = 1;

// while (n <= 20) {
//     if (n % 2 === 0) {
//         console.log(n);
//     }
//     n++;
// }

// /*
// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// Explanation:
// The loop checks each number.
// If divisible by 2, it prints the number.
// */


// *****************************************************************************************************

// // ======================================
// // EMPLOYEE MANAGEMENT SYSTEM - TASKS
// // ======================================

// // Question 1:
// // Create variables for Employee Name, ID, Department and Salary.

// let employeeName: string = "John";
// let employeeId: number = 101;
// let department: string = "QA";
// let salary: number = 50000;
// //Output:
// console.log("Employee Name:", employeeName);
// console.log("Employee ID:", employeeId);
// console.log("Department:", department);
// console.log("Salary:", salary);
// //output:
// // Employee Name: John
// // Employee ID: 101
// // Department: QA
// // Salary: 50000

// // Question 2:
// // Check whether employee is eligible for bonus.
// // Condition: Salary > 40000

// if (salary > 40000) {
//     console.log("Bonus Eligible");
// } else {
//     console.log("Not Eligible");
// }
// //output: Bonus Eligible


// // Question 3:
// // Check whether employee is Senior or Junior.
// // Condition: Experience >= 5 years

// let experience: number = 6;

// if (experience >= 5) {
//     console.log("Senior Employee");
// } else {
//     console.log("Junior Employee");
// }
// //output: Senior Employee


// // Question 4:
// // Check employee work location.

// let location: string = "Chennai";

// if (location === "Chennai") {
//     console.log("Work From Office");
// } else {
//     console.log("Remote Employee");
// }
// //output: Work From Office


// // Question 5:
// // Calculate annual salary.

// let monthlySalary: number = 60000;

// let annualSalary = monthlySalary * 12;

// console.log(annualSalary);
// //Output: 720000


// // Question 6:
// // Print all employee names.

// let employees: string[] = [
//     "John",
//     "David",
//     "Alex",
//     "Sam"
// ];

// for (let emp of employees) {
//     console.log(emp);
// }
// //Output:
// // John
// // David
// // Alex
// // Sam

// // Question 7:
// // Find highest salary from employee list.

// let salaries: number[] = [
//     35000,
//     50000,
//     70000,
//     45000,
//     90000
// ];

// console.log(Math.max(...salaries));


// // Question 8:
// // Count employees in a team.

// let teamMembers = [
//     "John",
//     "Alex",
//     "David",
//     "Smith",
//     "Sam"
// ];

// console.log(teamMembers.length);


// // Question 9:
// // Check employee attendance percentage.

// let attendance = 92;

// if (attendance >= 90) {
//     console.log("Excellent");
// } else if (attendance >= 75) {
//     console.log("Good");
// } else {
//     console.log("Needs Improvement");
// }


// // Question 10:
// // Calculate project completion percentage.

// let completedTasks = 45;
// let totalTasks = 50;

// let completion =
//     (completedTasks / totalTasks) * 100;

// console.log(completion + "%");


// // Question 11:
// // Check sprint status.

// let sprintStatus = "Completed";

// switch (sprintStatus) {
//     case "Completed":
//         console.log("Ready for Release");
//         break;

//     case "In Progress":
//         console.log("Development Ongoing");
//         break;

//     default:
//         console.log("Status Unknown");
// }


// // Question 12:
// // Employee object creation.

// let employee = {
//     id: 101,
//     name: "John",
//     department: "QA",
//     designation: "Automation Engineer",
//     salary: 70000
// };

// console.log(employee);


// // Question 13:
// // Find employees eligible for promotion.
// // Experience > 5 years

// let employeeExperience = [2, 4, 6, 8, 3];

// for (let exp of employeeExperience) {
//     if (exp > 5) {
//         console.log("Promotion Eligible");
//     }
// }


// // Question 14:
// // Print release numbers.

// for (let release = 1; release <= 5; release++) {
//     console.log("Release V" + release);
// }


// // Question 15:
// // Calculate overtime pay.

// let overtimeHours = 12;
// let ratePerHour = 500;

// let overtimePay =
//     overtimeHours * ratePerHour;

// console.log(overtimePay);


// // Question 16:
// // Check project budget approval.

// let projectBudget = 1000000;

// if (projectBudget > 500000) {
//     console.log("Manager Approval Required");
// } else {
//     console.log("Auto Approved");
// }


// // Question 17:
// // Print all departments.

// let departments = [
//     "QA",
//     "Development",
//     "DevOps",
//     "Support"
// ];

// departments.forEach(department => {
//     console.log(department);
// });


// // Question 18:
// // Find duplicate employee IDs.

// let empIds = [
//     101,
//     102,
//     103,
//     101,
//     104,
//     102
// ];

// let duplicates =
//     empIds.filter(
//         (id, index) =>
//             empIds.indexOf(id) !== index
//     );

// console.log(duplicates);


// // Question 19:
// // Create function to calculate Hike.

// function calculateHike(
//     salary: number
// ): number {
//     return salary * 0.10;
// }

// console.log(calculateHike(50000));


// // Question 20:
// // Create function to check employee eligibility.

// function isEligibleForPromotion(
//     experience: number
// ): boolean {
//     return experience >= 5;
// }

// console.log(
//     isEligibleForPromotion(6)
// );



// let fruits = ["apple", "banana", "orange"];
// let fruitObject = fruits.reduce<Record<string, boolean>>((acc, item) => {
// acc[item] = true;
// rlineturn acc;
// }, {});


// console.log (fruitObject);

const names: string[] = ["giri", "sam", "amy"];
const capitalized = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log("E2 Capitalized:", capitalized);
