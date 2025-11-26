// Basic array
let numbers: number[] = [1, 2, 3, 4, 5];

// Using generic type
let names: Array<string> = ["Giri", "Suganthan", "Prasath"];

// Mixed type (union)
let mixed: (string | number)[] = ["Test", 100, "QA", 200];

// Empty array with push
let tasks: string[] = [];
tasks.push("Login Test");
tasks.push("Signup Test");

console.log(numbers);
console.log(names);
console.log(mixed);
console.log(tasks);
