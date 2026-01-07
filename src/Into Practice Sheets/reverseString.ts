// Question: How to reverse a string in TypeScript?
// Answer: You can reverse a string by converting it to an array, reversing the array, and joining it back to a string.

// Example:
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Test Example
const input = "TypeScript";
console.log('Reversed string:', reverseString(input)); 

// Output: tpircSpeyT
