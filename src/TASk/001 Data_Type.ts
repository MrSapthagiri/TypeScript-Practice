// ===============================
// TypeScript Practice Sheet (25 Questions)
// ===============================

// Q1. Variables: var, let, const
var x: number = 10;
let y: number = 20;
const z: number = 30;
x = 15;
y = 25;
// z = 35; // ❌ Error: Cannot assign to 'z' because it is a constant.
console.log("Q1:", x, y, z);

// Q2. String, Number, Boolean
let name1: string = "Alice";
let age1: number = 25;
let isStudent: boolean = true;
console.log("Q2:", `${name1} is ${age1} years old. Student: ${isStudent}`);

// Q3. Any Type
let data1: any = "Hello";
console.log("Q3:", data1);
data1 = 123;
console.log("Q3:", data1);
data1 = false;
console.log("Q3:", data1);

// Q4. Undefined and Null
let a1: undefined = undefined;
let b1: null = null;
console.log("Q4:", a1, b1);

// Q5. Number Array
let numbers: number[] = [10, 20, 30, 40];
console.log("Q5:");
numbers.forEach(num => console.log(num));

// Q6. String Array
let cities: string[] = ["Delhi", "Mumbai", "Chennai"];
console.log("Q6:", cities.join(", "));

// Q7. Tuple
let student: [number, string] = [1, "Rahul"];
console.log("Q7:", `ID: ${student[0]}, Name: ${student[1]}`);

// Q8. Tuple with Multiple Types
let employee: [number, string, boolean] = [101, "Arun", true];
console.log("Q8:", employee);

// Q9. Enum Example
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Left;
console.log("Q9:", move);

// Q10. Enum with Custom Values
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
let response: Status = Status.Success;
console.log("Q10:", response);

// Q11. Type Inference
let message = "Hello TS";
// message = 123; ❌ Error
console.log("Q11:", message);

// Q12. Type Assertion
let data2: any = "Hello TypeScript";
let strLength: number = (data2 as string).length;
console.log("Q12:", strLength);

// Q13. Union Type Variable
let value: string | number;
value = "Hello";
console.log("Q13:", value);
value = 123;
console.log("Q13:", value);

// Q14. Union Type Function
function printId(id: string | number) {
  console.log("Q14: ID =", id);
}
printId("ABC123");
printId(101);

// Q15. Intersection Type
type Person = { name: string };
type Employee = { empId: number };
let worker: Person & Employee = { name: "John", empId: 101 };
console.log("Q15:", worker);

// Q16. Type Alias for Union
type ID = string | number;
let userId: ID = "U123";
let orderId: ID = 456;
console.log("Q16:", userId, orderId);

// Q17. Type Alias for Object
type StudentType = {
  id: number;
  name: string;
  age: number;
};
let student1: StudentType = { id: 1, name: "Kiran", age: 21 };
console.log("Q17:", student1);

// Q18. Object
let person: { name: string; age: number } = {
  name: "Raj",
  age: 30
};
console.log("Q18:", person);

// Q19. Interface
interface Car {
  brand: string;
  year: number;
}
let myCar: Car = { brand: "Toyota", year: 2022 };
console.log("Q19:", myCar);

// Q20. Interface with Method
interface Animal {
  name: string;
  sound(): void;
}
let dog: Animal = {
  name: "Dog",
  sound: () => console.log("Q20: Woof Woof")
};
dog.sound();

// Q21. Optional Properties
interface User {
  id: number;
  name: string;
  email?: string;
}
let user1: User = { id: 1, name: "Alice" };
console.log("Q21:", user1);

// Q22. Readonly Property
interface Book {
  readonly isbn: number;
  title: string;
}
let book: Book = { isbn: 12345, title: "TS Basics" };
// book.isbn = 67890; ❌ Error
console.log("Q22:", book);

// Q23. Interface Inheritance
interface Person2 {
  name: string;
}
interface Employee2 extends Person2 {
  empId: number;
}
let emp: Employee2 = { name: "Ravi", empId: 101 };
console.log("Q23:", emp);

// Q24. Array of Objects
interface Student2 {
  id: number;
  name: string;
}
let students: Student2[] = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Rahul" }
];
console.log("Q24:", students);

// Q25. Function with Interface Parameter
interface Product {
  id: number;
  name: string;
  price: number;
}
function printProduct(p: Product) {
  console.log(`Q25: ID: ${p.id}, Name: ${p.name}, Price: ${p.price}`);
}
let p1: Product = { id: 101, name: "Laptop", price: 50000 };
printProduct(p1);

