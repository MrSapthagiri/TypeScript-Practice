// 1. Create a generic named function for number identity.
function identityNumber(value: number): number {
    return value;
}
console.log("Number:", identityNumber(42));

// 2. Create a generic named function for string identity.
function identityString(value: string): string {
    return value;
}
console.log("String:", identityString("TypeScript"));

// 3. Create a generic named function for boolean identity.
function identityBoolean(value: boolean): boolean {
    return value;
}
console.log("Boolean:", identityBoolean(true));

// 4. Create a generic named function to wrap value in array.
function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log("Array wrap:", wrapInArray<number>(99));

// 5. Create a generic named function to get first item from array.
function firstItem<T>(items: T[]): T {
    return items[0];
}
console.log("First item:", firstItem<string>(["QA", "Dev", "Ops"]));
