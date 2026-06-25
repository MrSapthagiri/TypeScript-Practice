// 1. Create a named function to calculate employee bonus.
function calculateBonus(salary: number, experience: number): number {
    return experience >= 3 ? salary * 0.2 : salary * 0.1;
}
console.log("Bonus:", calculateBonus(60000, 4));

// 2. Create a named function to calculate employee tax.
function calculateTax(salary: number): number {
    if (salary <= 50000) return salary * 0.05;
    if (salary <= 100000) return salary * 0.10;
    return salary * 0.15;
}
console.log("Tax:", calculateTax(60000));

// 3. Create a named function to calculate gross pay.
function calculateGrossPay(salary: number, experience: number): number {
    return salary + calculateBonus(salary, experience);
}
console.log("Gross:", calculateGrossPay(60000, 4));

// 4. Create a named function to calculate net pay.
function calculateNetPay(salary: number, experience: number): number {
    const gross = calculateGrossPay(salary, experience);
    return gross - calculateTax(gross);
}
console.log("Net:", calculateNetPay(60000, 4));

// 5. Create a named function to generate employee pay slip.
function generatePaySlip(name: string, salary: number, experience: number): string {
    const net = calculateNetPay(salary, experience);
    return `${name} net pay: ${net}`;
}
console.log(generatePaySlip("John", 60000, 4));
