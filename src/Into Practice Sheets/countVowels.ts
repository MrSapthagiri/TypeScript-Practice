// Question: How to count vowels in a string?
// Answer: Iterate through the string and count characters that are vowels (a, e, i, o, u).

// Example:
function countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Test Example
const testStr = "Hello World";
console.log('Number of vowels:', countVowels(testStr)); // Output: 3
