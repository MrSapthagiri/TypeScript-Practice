// ------------------------------------------
// HIGH LEVEL TYPESCRIPT VARIABLE & DATA TYPE QUESTIONS
// ------------------------------------------

// Q1: Create a tuple describing Giri's user profile and log each element
let giriProfileHL: [string, number, boolean] = ["Giri", 25, true];
console.log("Q1:", giriProfileHL);

// Q2: Use a union type variable to store multiple possible types for Giri
let giriStatusHL: string | number | boolean = "Active";
console.log("Q2:", giriStatusHL);

// Q3: Create a readonly object for Giri’s account settings
let giriSettings: Readonly<{ theme: string; notifications: boolean }> = {
    theme: "dark",
    notifications: true
};
console.log("Q3:", giriSettings);

// Q4: Create an enum for Giri’s roles in a system
enum Roles { Admin = "ADMIN", User = "USER", Tester = "TESTER" }
let giriRoleHL: Roles = Roles.Tester;
console.log("Q4:", giriRoleHL);

// Q5: Create a nested object type describing Giri’s address
let giriAddress: {
    city: string;
    pin: number;
    geo: { lat: number; long: number };
} = {
    city: "Chennai",
    pin: 600001,
    geo: { lat: 78.01, long: 45.11 }
};
console.log("Q5:", giriAddress);

// Q6: Create a generic type for Giri’s response structure
type GiriApiResponse<T> = { data: T; success: boolean };
let giriApi: GiriApiResponse<string> = { data: "User created", success: true };
console.log("Q6:", giriApi);

// Q7: Store a function reference inside a variable
let greetGiri: (name: string) => string = (name) => `Hello ${name}`;
console.log("Q7:", greetGiri("Giri"));

// Q8: Use a mapped type to allow optional fields for Giri
type Optional<T> = { [P in keyof T]?: T[P] };
let partialGiri: Optional<{ id: number; email: string }> = { id: 101 };
console.log("Q8:", partialGiri);

// Q9: Use the `unknown` type and narrow it
let giriInput: unknown = "Giri_User";
console.log("Q9:", giriInput);

// Q10: Use the never type with exhaustive checking
let giriCheck = (x: string | number): never | void => {
    if (typeof x === "string") console.log("Q10:", x);
    else if (typeof x === "number") console.log("Q10:", x);
    else {
        let n: never = x;
        console.log("Q10:", n);
    }
};

// Q11: Create a complex array type storing different datatypes
let giriMultiList: (string | number | boolean | object)[] = [
    "Giri", 101, true, { dept: "QA" }
];
console.log("Q11:", giriMultiList);

// Q12: Store function overload signatures in a variable
type Over = {
    (x: number): number;
    (x: string): string;
};
let giriOver: Over = (x: any) => x;
console.log("Q12:", giriOver("Giri"));

// Q13: Deep nested object with multiple levels
let deepData: {
    user: {
        name: string;
        records: {
            lastLogin: string;
            devices: string[];
        };
    };
} = {
    user: {
        name: "Giri",
        records: { lastLogin: "2025-11-12", devices: ["Mobile", "Laptop"] }
    }
};
console.log("Q13:", deepData);

// Q14: Create a function type variable with generic constraint
let giriGenericFn: <T extends string | number>(value: T) => T = (v) => v;
console.log("Q14:", giriGenericFn("Giri"));

// Q15: Create a tuple with rest elements
let giriRestTuple: [string, ...number[]] = ["Giri", 10, 20, 30];
console.log("Q15:", giriRestTuple);

// Q16: Create a Record type for storing Giri’s scores
let giriScores: Record<string, number> = {
    test1: 88,
    test2: 93,
    test3: 78
};
console.log("Q16:", giriScores);

// Q17: Use keyof with variable to dynamically pick a type
type UserObj = { name: string; age: number; active: boolean };
let giriKey: keyof UserObj = "age";
console.log("Q17:", giriKey);

// Q18: Create a variable with a recursive type
type NestedList = (number | NestedList)[];
let giriNestedNumbers: NestedList = [1, [2, [3, 4]]];
console.log("Q18:", giriNestedNumbers);

// Q19: Create interface and assign data to a variable
interface GiriInfo {
    id: number;
    name: string;
    dept: string;
}
let giriObj: GiriInfo = { id: 11, name: "Giri", dept: "Automation" };
console.log("Q19:", giriObj);

// Q20: Class-based typed variable
class GiriClass {
    user: string;
    level: number;
    constructor(u: string, l: number) { this.user = u; this.level = l; }
}
let giriInstance: GiriClass = new GiriClass("Giri", 5);
console.log("Q20:", giriInstance);

// Q21: Use conditional types inside a variable type
type IsNumber<T> = T extends number ? "num" : "other";
let giriCond: IsNumber<number> = "num";
console.log("Q21:", giriCond);

// Q22: Create an array of tuple objects
let giriTupleArr: [string, number][] = [
    ["Score1", 88], ["Score2", 95]
];
console.log("Q22:", giriTupleArr);

// Q23: Variable storing a function returning another function
let giriHigherOrder: (x: string) => () => string =
    (x) => () => `Hello ${x}`;
console.log("Q23:", giriHigherOrder("Giri")());

// Q24: Complex union with nested objects
let giriUnion: { name: string } | { id: number; dept: string } = {
    id: 101,
    dept: "QA"
};
console.log("Q24:", giriUnion);

// Q25: Variable using readonly array type
let giriReadOnlyArr: readonly string[] = ["Giri", "Automation", "TS"];
console.log("Q25:", giriReadOnlyArr);
