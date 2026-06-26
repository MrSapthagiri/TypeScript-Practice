export {};

// ============================================================
// GENERIC FUNCTION <T>
// Flow: any type in → same type preserved → out
// Shape: function name<T>(value: T): T { return value; }
// ============================================================

// EASY LEVEL — basic generic identity
function identityNumber(value: number): number { return value; }
function identityString(value: string): string { return value; }
function identityBoolean(value: boolean): boolean { return value; }
function wrapInArray<T>(value: T): T[] { return [value]; }
function firstItem<T>(items: T[]): T | undefined { return items[0]; }

console.log("E1:", identityNumber(42));
console.log("E2:", identityString("TypeScript"));
console.log("E3:", identityBoolean(true));
console.log("E4:", wrapInArray<number>(99));
console.log("E5:", firstItem<string>(["QA", "Dev", "Ops"]));

// MEDIUM LEVEL — generic + control flow + loops
function identity<T>(value: T): T { return value; }

function findInList<T>(items: T[], match: (item: T) => boolean): T | undefined {
  for (const item of items) {
    if (match(item)) return item;
  }
  return undefined;
}

function filterList<T>(items: T[], test: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of items) {
    if (test(item)) result.push(item);
  }
  return result;
}

function mapList<T, R>(items: T[], mapper: (item: T) => R): R[] {
  const result: R[] = [];
  for (const item of items) result.push(mapper(item));
  return result;
}

function getLast<T>(items: T[]): T | undefined {
  if (items.length === 0) return undefined;
  return items[items.length - 1];
}

console.log("M1:", identity<number>(100));
console.log("M2:", findInList([10, 25, 30], (n) => n > 20));
console.log("M3:", filterList(["cat", "dog", "bird"], (s) => s.length > 3));
console.log("M4:", mapList([1, 2, 3], (n) => n * 2));
console.log("M5:", getLast(["a", "b", "c"]));

// HIGH LEVEL — generic with objects and pairs
type KeyValue<K, V> = { key: K; value: V };

function makePair<K, V>(key: K, value: V): KeyValue<K, V> {
  return { key, value };
}

function pluck<T, K extends keyof T>(items: T[], field: K): T[K][] {
  const result: T[K][] = [];
  for (const item of items) result.push(item[field]);
  return result;
}

function groupBy<T>(items: T[], getKey: (item: T) => string): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  for (const item of items) {
    const key = getKey(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  }
  return groups;
}

type Product = { name: string; category: string; price: number };

const products: Product[] = [
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Laptop", category: "Electronics", price: 900 },
];

console.log("H1:", makePair("id", 101));
console.log("H2 Names:", pluck(products, "name"));
console.log("H3 Groups:", groupBy(products, (p) => p.category));
