// Question: How to check if a number is prime?
// Answer: A prime number is only divisible by 1 and itself. Check divisibility from 2 up to the square root of the number.

// Example:
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Test Example
const testNum = 17;
console.log(`${testNum} is prime:`, isPrime(testNum)); // Output: 17 is prime: true
