// 1. Create a named function to add two numbers.
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log("Add:", addNumbers(8, 2));

// 2. Create a named function to multiply two numbers.
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}
console.log("Multiply:", multiplyNumbers(8, 2));

// 3. Create a named function to subtract two numbers.
function subtractNumbers(a: number, b: number): number {
    return a - b;
}
console.log("Subtract:", subtractNumbers(8, 2));

// 4. Create a named function to divide two numbers.
function divideNumbers(a: number, b: number): number {
    return b !== 0 ? a / b : 0;
}
console.log("Divide:", divideNumbers(8, 2));

// 5. Create a named function for custom calculation.
function customOperation(a: number, b: number): number {
    return a + b * 2;
}
console.log("Custom:", customOperation(8, 2));
