// 1. Create a named function to reverse a string.
function reverseString(str: string): string {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log("Reverse string:", reverseString("TypeScript"));

// 2. Create a named function to reverse a single word.
function reverseWord(word: string): string {
    return reverseString(word);
}
console.log("Reverse word:", reverseWord("Hello"));

// 3. Create a named function to reverse a sentence.
function reverseSentence(sentence: string): string {
    return sentence.split(" ").reverse().join(" ");
}
console.log("Reverse sentence:", reverseSentence("QA Automation Practice"));

// 4. Create a named function to reverse array of text.
function reverseArrayText(items: string[]): string[] {
    return items.reverse();
}
console.log("Reverse array:", reverseArrayText(["A", "B", "C"]));

// 5. Create a named function to reverse a number.
function reverseNumber(num: number): number {
    return Number(reverseString(String(num)));
}
console.log("Reverse number:", reverseNumber(12345));
