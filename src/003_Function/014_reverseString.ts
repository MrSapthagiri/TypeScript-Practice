export {};

// ============================================================
// STRING REVERSE — loops + functions
// Flow: string → loop chars → build reversed string
// ============================================================

// EASY LEVEL
function reverseString(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}
function reverseWord(word: string): string { return reverseString(word); }
function reverseNumber(num: number): number { return Number(reverseString(String(num))); }

console.log("E1:", reverseString("TypeScript"));
console.log("E2:", reverseWord("Hello"));
console.log("E3:", reverseNumber(12345));

// MEDIUM LEVEL — control flow + for-of
function reverseSentence(sentence: string): string {
  const words = sentence.split(" ");
  const reversed: string[] = [];
  for (let i = words.length - 1; i >= 0; i--) reversed.push(words[i]);
  return reversed.join(" ");
}

function reverseArrayText(items: string[]): string[] {
  const copy = [...items];
  return copy.reverse();
}

function isPalindrome(str: string): boolean {
  const clean = str.toLowerCase().replace(/\s/g, "");
  return clean === reverseString(clean);
}

function countChars(str: string): number {
  let count = 0;
  for (const _ of str) count++;
  return count;
}

console.log("M1:", reverseSentence("QA Automation Practice"));
console.log("M2:", reverseArrayText(["A", "B", "C"]));
console.log("M3 Palindrome:", isPalindrome("level"));
console.log("M4 Chars:", countChars("Hello"));

// HIGH LEVEL — reverse words in sentence, 2D char matrix
function reverseWordsKeepOrder(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");
}

function reverseMatrix(rows: string[][]): string[][] {
  const result: string[][] = [];
  for (let i = rows.length - 1; i >= 0; i--) {
    const row: string[] = [];
    for (let j = rows[i].length - 1; j >= 0; j--) row.push(rows[i][j]);
    result.push(row);
  }
  return result;
}

function reverseEachLine(text: string): string {
  const lines = text.split("\n");
  const reversed: string[] = [];
  for (const line of lines) reversed.push(reverseString(line));
  return reversed.join("\n");
}

console.log("H1:", reverseWordsKeepOrder("Hello World TS"));
console.log("H2:", reverseMatrix([["a", "b"], ["c", "d"]]));
console.log("H3:", reverseEachLine("abc\ndef"));
