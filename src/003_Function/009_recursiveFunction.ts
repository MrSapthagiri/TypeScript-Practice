export {};

// ============================================================
// RECURSIVE FUNCTION
// Flow: function calls itself until base case stops it
// Shape: function name(n): type { if (base) return x; return ... name(n-1); }
// ============================================================

// EASY LEVEL — basic recursion
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
function sumToN(n: number): number {
  return n <= 0 ? 0 : n + sumToN(n - 1);
}
function power(base: number, exp: number): number {
  return exp === 0 ? 1 : base * power(base, exp - 1);
}
function countdown(n: number): number {
  return n <= 0 ? 0 : n + countdown(n - 1);
}
function fibonacci(n: number): number {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("E1 Factorial:", factorial(5));
console.log("E2 SumToN:", sumToN(5));
console.log("E3 Power:", power(2, 4));
console.log("E4 Countdown:", countdown(4));
console.log("E5 Fibonacci:", fibonacci(6));

// MEDIUM LEVEL — recursion + control flow
function countDownPrint(n: number): number {
  if (n <= 0) return 0;
  return n + countDownPrint(n - 1);
}

function sumDigits(n: number): number {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

function reverseNumber(n: number, acc: number = 0): number {
  if (n === 0) return acc;
  return reverseNumber(Math.floor(n / 10), acc * 10 + (n % 10));
}

function isPalindromeNum(n: number, left?: number, right?: number): boolean {
  const str = String(n);
  const l = left ?? 0;
  const r = right ?? str.length - 1;
  if (l >= r) return true;
  if (str[l] !== str[r]) return false;
  return isPalindromeNum(n, l + 1, r - 1);
}

function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log("M1:", countDownPrint(5));
console.log("M2 SumDigits:", sumDigits(12345));
console.log("M3 Reverse:", reverseNumber(12345));
console.log("M4 Palindrome:", isPalindromeNum(121));
console.log("M5 GCD:", gcd(48, 18));

// HIGH LEVEL — recursion on arrays and nested data
function sumArray(nums: number[], index: number = 0): number {
  if (index >= nums.length) return 0;
  return nums[index] + sumArray(nums, index + 1);
}

function flattenArray(arr: (number | number[])[], result: number[] = []): number[] {
  for (const item of arr) {
    if (Array.isArray(item)) flattenArray(item, result);
    else result.push(item);
  }
  return result;
}

function binarySearch(nums: number[], target: number, low = 0, high = nums.length - 1): number {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) return mid;
  if (nums[mid] > target) return binarySearch(nums, target, low, mid - 1);
  return binarySearch(nums, target, mid + 1, high);
}

function towerOfHanoi(n: number, from: string, to: string, aux: string, moves: string[] = []): string[] {
  if (n === 1) {
    moves.push(`Move disk 1 from ${from} to ${to}`);
    return moves;
  }
  towerOfHanoi(n - 1, from, aux, to, moves);
  moves.push(`Move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, aux, to, from, moves);
  return moves;
}

console.log("H1 SumArray:", sumArray([1, 2, 3, 4]));
console.log("H2 Flatten:", flattenArray([1, [2, 3], [4, [5]]]));
console.log("H3 Search:", binarySearch([1, 3, 5, 7, 9], 7));
console.log("H4 Hanoi:", towerOfHanoi(3, "A", "C", "B"));
