// 1. Create a recursive named function to find factorial.
function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("Factorial 5:", factorial(5));

// 2. Create a recursive named function to find sum from 1 to n.
function sumToN(n: number): number {
    return n <= 0 ? 0 : n + sumToN(n - 1);
}
console.log("Sum to 5:", sumToN(5));

// 3. Create a recursive named function to find power of a number.
function power(base: number, exp: number): number {
    return exp === 0 ? 1 : base * power(base, exp - 1);
}
console.log("2 power 4:", power(2, 4));

// 4. Create a recursive named function to find countdown sum.
function countdown(n: number): number {
    return n <= 0 ? 0 : n + countdown(n - 1);
}
console.log("Countdown sum 4:", countdown(4));

// 5. Create a recursive named function to find fibonacci number.
function fibonacci(n: number): number {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci 6:", fibonacci(6));
