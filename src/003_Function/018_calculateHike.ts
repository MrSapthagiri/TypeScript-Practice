// 1. Create a named function to calculate salary hike.
function calculateHike(salary: number): number {
    return salary * 0.10;
}
console.log("Hike:", calculateHike(50000));

// 2. Create a named function to calculate salary bonus.
function calculateBonus(salary: number): number {
    return salary * 0.05;
}
console.log("Bonus:", calculateBonus(50000));

// 3. Create a named function to calculate annual salary.
function calculateAnnualSalary(monthlySalary: number): number {
    return monthlySalary * 12;
}
console.log("Annual:", calculateAnnualSalary(60000));

// 4. Create a named function to calculate tax on salary.
function calculateTax(salary: number): number {
    return salary * 0.15;
}
console.log("Tax:", calculateTax(70000));

// 5. Create a named function to calculate net salary after tax.
function calculateNetSalary(gross: number, tax: number): number {
    return gross - tax;
}
console.log("Net:", calculateNetSalary(70000, 10500));
