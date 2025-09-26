// ===============================
// TypeScript Practice Sheet (25 Questions)
// ===============================
// Q1. Variables: var, let, const
var x = 10;
var y = 20;
var z = 30;
x = 15;
y = 25;
// z = 35; ❌ Error
console.log("Q1:", x, y, z);
// Q2. String, Number, Boolean
var name1 = "Alice";
var age1 = 25;
var isStudent = true;
console.log("Q2:", "".concat(name1, " is ").concat(age1, " years old. Student: ").concat(isStudent));
// Q3. Any Type
var data1 = "Hello";
console.log("Q3:", data1);
data1 = 123;
console.log("Q3:", data1);
data1 = false;
console.log("Q3:", data1);
// Q4. Undefined and Null
var a1 = undefined;
var b1 = null;
console.log("Q4:", a1, b1);
// Q5. Number Array
var number = [10, 20, 30, 40];
console.log("Q5:");
numbers.forEach(function (num) { return console.log(num); });
// Q6. String Array
var cities = ["Delhi", "Mumbai", "Chennai"];
console.log("Q6:", cities.join(", "));
// Q7. Tuple
var student = [1, "Rahul"];
console.log("Q7:", "ID: ".concat(student[0], ", Name: ").concat(student[1]));
// Q8. Tuple with Multiple Types
var employee = [101, "Arun", true];
console.log("Q8:", employee);
// Q9. Enum Example
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log("Q9:", move);
// Q10. Enum with Custom Values
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
var response = Status.Success;
console.log("Q10:", response);
// Q11. Type Inference
var message = "Hello TS";
// message = 123; ❌ Error
console.log("Q11:", message);
// Q12. Type Assertion
var data2 = "Hello TypeScript";
var strLength = data2.length;
console.log("Q12:", strLength);
// Q13. Union Type Variable
var value;
value = "Hello";
console.log("Q13:", value);
value = 123;
console.log("Q13:", value);
// Q14. Union Type Function
function printId(id) {
    console.log("Q14: ID =", id);
}
printId("ABC123");
printId(101);
var worker = { name: "John", empId: 101 };
console.log("Q15:", worker);
var userId = "U123";
var orderId = 456;
console.log("Q16:", userId, orderId);
var student1 = { id: 1, name: "Kiran", age: 21 };
console.log("Q17:", student1);
// Q18. Object
var person = {
    name: "Raj",
    age: 30
};
console.log("Q18:", person);
var myCar = { brand: "Toyota", year: 2022 };
console.log("Q19:", myCar);
var dog = {
    name: "Dog",
    sound: function () { return console.log("Q20: Woof Woof"); }
};
dog.sound();
var user1 = { id: 1, name: "Alice" };
console.log("Q21:", user1);
var book = { isbn: 12345, title: "TS Basics" };
// book.isbn = 67890; ❌ Error
console.log("Q22:", book);
var emp = { name: "Ravi", empId: 101 };
console.log("Q23:", emp);
var students = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Rahul" }
];
console.log("Q24:", students);
function printProduct(p) {
    console.log("Q25: ID: ".concat(p.id, ", Name: ").concat(p.name, ", Price: ").concat(p.price));
}
var p1 = { id: 101, name: "Laptop", price: 50000 };
printProduct(p1);
// Install TypeScript globally
// npm install -g typescript
tsc;
"src/Into Practice Sheets/relativeCoding.ts";
// Run the compiled JavaScript file
node;
"src/Into Practice Sheets/relativeCoding.js";
