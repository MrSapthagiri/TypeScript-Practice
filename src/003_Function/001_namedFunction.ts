// 1. Create a named function to add two numbers.
function add(a: number, b: number): number {
    return a + b;
}
console.log("Add:", add(10, 5));

// 2. Create a named function to subtract two numbers.
function subtract(a: number, b: number): number {
    return a - b;
}
console.log("Subtract:", subtract(10, 5));

// 3. Create a named function to multiply two numbers.
function multiply(a: number, b: number): number {
    return a * b;
}
console.log("Multiply:", multiply(10, 5));

// 4. Create a named function to divide two numbers.
function divide(a: number, b: number): number {
    return b !== 0 ? a / b : 0;
}
console.log("Divide:", divide(10, 5));

// 5. Create a named function to find modulus of two numbers.
function modulus(a: number, b: number): number {
    return a % b;
}
console.log("Modulus:", modulus(10, 3));
