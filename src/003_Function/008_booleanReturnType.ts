export {};

// ============================================================
// BOOLEAN RETURN TYPE
// Flow: input → condition check → true or false
// Shape: function name(param: type): boolean { return condition; }
// ============================================================

// EASY LEVEL — simple boolean checks
function isEven(n: number): boolean { return n % 2 === 0; }
function isOdd(n: number): boolean { return n % 2 !== 0; }
function isPositive(n: number): boolean { return n > 0; }
function isNegative(n: number): boolean { return n < 0; }
function isZero(n: number): boolean { return n === 0; }

console.log("E1 Even:", isEven(10));
console.log("E2 Odd:", isOdd(7));
console.log("E3 Positive:", isPositive(5));
console.log("E4 Negative:", isNegative(-3));
console.log("E5 Zero:", isZero(0));

// MEDIUM LEVEL — boolean + control flow + loops
function isPassing(score: number): boolean {
  if (score >= 50) return true;
  return false;
}

function isVowel(ch: string): boolean {
  return "aeiouAEIOU".includes(ch);
}

function hasEven(nums: number[]): boolean {
  for (const n of nums) {
    if (n % 2 === 0) return true;
  }
  return false;
}

function allPositive(nums: number[]): boolean {
  for (const n of nums) {
    if (n <= 0) return false;
  }
  return true;
}

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".");
}

console.log("M1 Pass:", isPassing(75), isPassing(30));
console.log("M2 Vowel:", isVowel("a"), isVowel("z"));
console.log("M3 HasEven:", hasEven([1, 3, 5, 8]));
console.log("M4 AllPositive:", allPositive([1, 2, 3]));
console.log("M5 Email:", isValidEmail("test@mail.com"));

// HIGH LEVEL — boolean with objects and complex logic
type UserAccount = { name: string; age: number; active: boolean };

function isAdult(user: UserAccount): boolean {
  return user.age >= 18 && user.active;
}

function canPromote(experience: number, rating: number): boolean {
  if (experience >= 5 && rating >= 4) return true;
  if (experience >= 8) return true;
  return false;
}

function containsKeyword(text: string, ...keywords: string[]): boolean {
  for (const word of keywords) {
    if (text.toLowerCase().includes(word.toLowerCase())) return true;
  }
  return false;
}

function isPalindrome(str: string): boolean {
  const clean = str.toLowerCase().replace(/\s/g, "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log("H1 Adult:", isAdult({ name: "John", age: 25, active: true }));
console.log("H2 Promote:", canPromote(6, 4));
console.log("H3 Keyword:", containsKeyword("TypeScript Practice", "script", "java"));
console.log("H4 Palindrome:", isPalindrome("level"));
