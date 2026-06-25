// 1. Create a named function that returns boolean to check even number.
function isEven(n: number): boolean {
    return n % 2 === 0;
}
console.log("10 is even:", isEven(10));

// 2. Create a named function that returns boolean to check odd number.
function isOdd(n: number): boolean {
    return n % 2 !== 0;
}
console.log("7 is odd:", isOdd(7));

// 3. Create a named function that returns boolean to check positive number.
function isPositive(n: number): boolean {
    return n > 0;
}
console.log("5 is positive:", isPositive(5));

// 4. Create a named function that returns boolean to check negative number.
function isNegative(n: number): boolean {
    return n < 0;
}
console.log("-3 is negative:", isNegative(-3));

// 5. Create a named function that returns boolean to check zero.
function isZero(n: number): boolean {
    return n === 0;
}
console.log("0 is zero:", isZero(0));
