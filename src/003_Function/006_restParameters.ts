// 1. Create a named function using rest parameter to find sum.
function sum(...nums: number[]): number {
    return nums.reduce((acc, value) => acc + value, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));

// 2. Create a named function using rest parameter to multiply all numbers.
function multiplyAll(...nums: number[]): number {
    return nums.reduce((acc, value) => acc * value, 1);
}
console.log("Product:", multiplyAll(2, 3, 4));

// 3. Create a named function using rest parameter to join words.
function joinWords(...words: string[]): string {
    return words.join(" ");
}
console.log("Words:", joinWords("Type", "Script", "Practice"));

// 4. Create a named function using rest parameter to find maximum value.
function findMax(...nums: number[]): number {
    return Math.max(...nums);
}
console.log("Max:", findMax(10, 25, 5, 40));

// 5. Create a named function using rest parameter to find minimum value.
function findMin(...nums: number[]): number {
    return Math.min(...nums);
}
console.log("Min:", findMin(10, 25, 5, 40));
