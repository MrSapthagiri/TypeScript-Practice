// Basic Arrays in TypeScript

export function basicsDemo(): void {
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: Array<string> = ["Alice", "Bob", "Charlie"];
  let mixed: (string | number)[] = ["Test", 100, "QA", 200];

  console.log("Numbers:", numbers);
  console.log("Names:", names);
  console.log("Mixed:", mixed);

  // Adding elements
  numbers.push(6);
  names.unshift("Zara");

  console.log("Updated Numbers:", numbers);
  console.log("Updated Names:", names);
}
