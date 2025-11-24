//--------------------------------------------
// 1. Number variable
//--------------------------------------------
let age: number = 25;
console.log(age);

//--------------------------------------------
// 2. String variable
//--------------------------------------------
let userName: string = "Giri";
console.log(userName);

//--------------------------------------------
// 3. Boolean variable
//--------------------------------------------
let isActive: boolean = true;
console.log(isActive);

//--------------------------------------------
// 4. var example
//--------------------------------------------
var x = 10;
x = 20;
console.log(x);

//--------------------------------------------
// 5. let example
//--------------------------------------------
let y = 5;
y = 15;
console.log(y);

//--------------------------------------------
// 6. const example
//--------------------------------------------
const pi = 3.14;
console.log(pi);

//--------------------------------------------
// 7. any type
//--------------------------------------------
let data: any = "Giri";
console.log(data);
data = 200;
console.log(data);

//--------------------------------------------
// 8. Union type
//--------------------------------------------
let value: number | string = 10;
console.log(value);
value = "Giri";
console.log(value);

//--------------------------------------------
// 9. Number array
//--------------------------------------------
let marks: number[] = [80, 90, 100];
console.log(marks);

//--------------------------------------------
// 10. String array
//--------------------------------------------
let users: string[] = ["Giri", "Sam"];
console.log(users);

//--------------------------------------------
// 11. Generic array
//--------------------------------------------
let ids: Array<number> = [1, 2, 3];
console.log(ids);

//--------------------------------------------
// 12. Tuple
//--------------------------------------------
let user: [string, number] = ["Giri", 24];
console.log(user);

//--------------------------------------------
// 13. Null type
//--------------------------------------------
let empty: null = null;
console.log(empty);

//--------------------------------------------
// 14. Undefined type
//--------------------------------------------
let notSet: undefined = undefined;
console.log(notSet);

//--------------------------------------------
// 15. Object type
//--------------------------------------------
let person: { name: string; age: number } = {
  name: "Giri",
  age: 24
};
console.log(person);

//--------------------------------------------
// 16. Optional property
//--------------------------------------------
let emp: { id: number; email?: string } = { id: 101 };
console.log(emp);

//--------------------------------------------
// 17. Enum
//--------------------------------------------
enum Status {
  Active,
  Inactive,
  Pending
}
let giriStatus: Status = Status.Active;
console.log(giriStatus);

//--------------------------------------------
// 18. Function return type
//--------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

//--------------------------------------------
// 19. Void function
//--------------------------------------------
function greet(): void {
  console.log("Hello Giri!");
}
greet();

//--------------------------------------------
// 20. Template string
//--------------------------------------------
let message = `Welcome, ${userName}!`;
console.log(message);

//--------------------------------------------
// 21. Readonly array
//--------------------------------------------
const giriIds: readonly number[] = [1, 2, 3];
console.log(giriIds);

//--------------------------------------------
// 22. Type alias
//--------------------------------------------
type GiriType = { id: number; username: string };
let giriUser: GiriType = { id: 1, username: "giri" };
console.log(giriUser);

//--------------------------------------------
// 23. Nested object
//--------------------------------------------
let giriProfile = {
  name: "Giri",
  address: { city: "Chennai", pincode: 600028 }
};
console.log(giriProfile);

//--------------------------------------------
// 24. Union array
//--------------------------------------------
let giriCombo: (number | string)[] = ["Giri", 200];
console.log(giriCombo);

//--------------------------------------------
// 25. Tuple with optional
//--------------------------------------------
let giriTuple: [string, number?] = ["Giri"];
console.log(giriTuple);
