// 1. Create an overloaded named function to combine numbers or strings.
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "string" && typeof b === "string") {
        return `${a} ${b}`;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return "Invalid combination";
}
console.log(combine(3, 4));
console.log(combine("Hello", "World"));

// 2. Create an overloaded named function to merge values.
function merge(a: number, b: number): number;
function merge(a: string, b: string): string;
function merge(a: number | string, b: number | string): number | string {
    if (typeof a === "string" && typeof b === "string") {
        return a.toUpperCase() + b.toUpperCase();
    }
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    return "Invalid merge";
}
console.log(merge(5, 6));

// 3. Create an overloaded named function to format number or string.
function formatValue(value: number): string;
function formatValue(value: string): string;
function formatValue(value: number | string): string {
    return typeof value === "number" ? `Number: ${value}` : `Text: ${value}`;
}
console.log(formatValue(100));

// 4. Create an overloaded named function to compare two values.
function compareValues(a: number, b: number): string;
function compareValues(a: string, b: string): string;
function compareValues(a: number | string, b: number | string): string {
    return a === b ? "Equal" : "Not Equal";
}
console.log(compareValues("QA", "QA"));

// 5. Create an overloaded named function to display different types.
function display(value: boolean): string;
function display(value: number): string;
function display(value: string): string;
function display(value: boolean | number | string): string {
    return `Value: ${value}`;
}
console.log(display(true));
