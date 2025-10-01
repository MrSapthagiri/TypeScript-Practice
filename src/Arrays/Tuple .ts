//Tuple (Fixed-Length Array with Types)

let user: [string, number, boolean] = ["Alice", 25, true];
console.log("Tuple User:", user);

// Destructuring
let [name, age, active] = user;
console.log(`Name: ${name}, Age: ${age}, Active: ${active}`);
