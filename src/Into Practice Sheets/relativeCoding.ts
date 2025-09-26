// Question: What is relative coding?
// Answer: Relative coding refers to solving problems by relating them to similar problems or patterns previously encountered. It often involves recognizing similarities and applying known solutions with necessary adjustments.

// Example:
// Problem: Find the sum of all even numbers in an array.
function sumOfEvenNumbers(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// Test Example
const numbers = [1, 2, 3, 4, 5, 6];
console.log('Sum of even numbers:', sumOfEvenNumbers(numbers)); // Output: 12
