// Question: How to find the largest number in an array?
// Answer: Iterate through the array and keep track of the maximum value found.

// Example:
function findLargest(arr: number[]): number {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Test Example
const nums = [10, 5, 8, 22, 3];
console.log('Largest number:', findLargest(nums)); // Output: 22
