let fruits: string[] = ["Apple", "Banana", "Mango"];

fruits.push("Orange");   // add to end
fruits.unshift("Grapes"); // add to start
console.log("After add:", fruits);

fruits.pop();            // remove last
fruits.shift();          // remove first
console.log("After remove:", fruits);

console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Includes Banana?", fruits.includes("Banana"));
console.log("Length of array:", fruits.length);

fruits.sort();
console.log("Sorted:", fruits);