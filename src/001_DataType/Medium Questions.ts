//--------------------------------------------
// MEDIUM LEVEL 
//--------------------------------------------

// 01. Multiple var + let + const types
var giriAge: number = 24;
let giriCity: string = "Chennai";
const country: string = "India";
console.log(giriAge, giriCity, country);

// 02. Object with full type
let student: { name: string; age: number; isPass: boolean } = {
  name: "Giri",
  age: 24,
  isPass: true
};
console.log(student);

// 03. Array of objects
let team: { user: string; role: string }[] = [
  { user: "Giri", role: "Dev" },
  { user: "Sam", role: "Tester" }
];
console.log(team);

// 04. Function type variable
let greetFunc: (x: string) => void;
greetFunc = (x: string) => console.log("Hi", x);
greetFunc("Giri");

// 05. Enum with string values
enum Role { Admin = "ADMIN", User = "USER" }
let giriRole: Role = Role.Admin;
console.log(giriRole);

// 06. Nested object with array
let project = {
  name: "Automation",
  members: ["Giri", "Robin"],
  completed: false
};
console.log(project);

// 07. Using var inside block scope
var score = 50;
if (true) {
  var score = 80;
}
console.log(score);

// 08. Using let inside block scope
let rank = 10;
if (true) {
  let rank = 20;
}
console.log(rank);

// 09. Map usage
let giriMap = new Map<string, number>();
giriMap.set("marks", 90);
console.log(giriMap);

// 10. Set usage
let giriSet = new Set<string>();
giriSet.add("Giri");
giriSet.add("Sam");
console.log(giriSet);

// 11. Type alias with array
type Skills = string[];
let giriSkills: Skills = ["TS", "JS", "Node"];
console.log(giriSkills);

// 12. Partial type
interface Laptop {
  brand: string;
  price: number;
}
let lap: Partial<Laptop> = { brand: "Dell" };
console.log(lap);

// 13. keyof usage
type Person = { name: string; age: number };
let key: keyof Person = "name";
console.log(key);

// 14. Readonly object
interface User {
  readonly id: number;
  name: string;
}
let u: User = { id: 1, name: "Giri" };
console.log(u);

// 15. Function narrowing
function printValue(v: number | string) {
  if (typeof v === "string") {
    console.log("String:", v);
  } else {
    console.log("Number:", v);
  }
}
printValue("Giri");

// 16. Function returning object
function createUser(id: number, name: string) {
  return { id, name };
}
console.log(createUser(1, "Giri"));

// 17. Generic function
function wrap<T>(value: T): T[] {
  return [value];
}
console.log(wrap("Giri"));

// 18. Generic interface
interface ApiResponse<T> {
  status: number;
  data: T;
}
let apiRes: ApiResponse<string> = {
  status: 200,
  data: "Success"
};
console.log(apiRes);

// 19. Deep merge generic
function mergeObj<T, U>(a: T, b: U) {
  return { ...a, ...b };
}
console.log(mergeObj({ name: "Giri" }, { age: 24 }));

// 20. Complex union array
let mixData: (string | number | boolean)[] = ["Giri", 100, true];
console.log(mixData);

// 21. Object array with types
let tasks: { id: number; title: string; done: boolean }[] = [
  { id: 1, title: "Learn TS", done: false },
  { id: 2, title: "Practice", done: true }
];
console.log(tasks);

// 22. Multi-line function with const + let
function calculate(a: number, b: number) {
  const sum = a + b;
  let result = sum * 2;
  return result;
}
console.log(calculate(10, 20));

// 23. Optional chaining
let empData: { name: string; address: { city?: string } | null } = {
  name: "Giri",
  address: null
};
console.log(empData.address?.city);

// 24. Nullish coalescing
let nullableInfo: string | null = null;
let info = nullableInfo ?? "Default Value";
console.log(info);

// 25. Type assertion
let code: any = "123";
let numValue = code as string;
console.log(numValue);
