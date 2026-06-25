// 1. Create a named function to find sum of array values.
function getSum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
console.log("Sum:", getSum([10, 20, 30, 40, 50]));

// 2. Create a named function to find average of array values.
function getAverage(arr: number[]): number {
    return getSum(arr) / arr.length;
}
console.log("Average:", getAverage([10, 20, 30, 40, 50]));

// 3. Create a named function to find maximum value in array.
function getMax(arr: number[]): number {
    return Math.max(...arr);
}
console.log("Max:", getMax([10, 20, 30, 40, 50]));

// 4. Create a named function to find minimum value in array.
function getMin(arr: number[]): number {
    return Math.min(...arr);
}
console.log("Min:", getMin([10, 20, 30, 40, 50]));

// 5. Create a named function to find count of array items.
function getCount(arr: number[]): number {
    return arr.length;
}
console.log("Count:", getCount([10, 20, 30, 40, 50]));
