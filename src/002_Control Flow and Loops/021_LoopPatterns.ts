// ========================================
// ADVANCED LOOP PATTERNS & FUNCTIONAL PROGRAMMING
// ========================================

// Sample data
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 3, name: "Desk", price: 300, category: "Furniture", inStock: false },
    { id: 4, name: "Chair", price: 150, category: "Furniture", inStock: true },
    { id: 5, name: "Monitor", price: 400, category: "Electronics", inStock: true }
];

// ========== TRADITIONAL LOOPS ==========

// 1. FOR LOOP - Classic iteration
console.log("\n=== FOR LOOP ===");
for (let i = 0; i < products.length; i++) {
    console.log(`${i}: ${products[i].name} - $${products[i].price}`);
}

// 2. WHILE LOOP - Condition-based
console.log("\n=== WHILE LOOP ===");
let index = 0;
while (index < 3) {
    console.log(products[index].name);
    index++;
}

// 3. DO-WHILE LOOP - Executes at least once
console.log("\n=== DO-WHILE LOOP ===");
let count = 0;
do {
    console.log(`Attempt ${count + 1}`);
    count++;
} while (count < 3);

// ========== ARRAY ITERATION ==========

// 4. FOR-OF LOOP - Iterate over values
console.log("\n=== FOR-OF LOOP ===");
for (const product of products) {
    if (product.inStock) {
        console.log(`${product.name} is available`);
    }
}

// 5. FOR-IN LOOP - Iterate over keys (not recommended for arrays)
console.log("\n=== FOR-IN LOOP (Object) ===");
const user = { name: "John", age: 30, email: "john@test.com" };
for (const key in user) {
    console.log(`${key}: ${user[key as keyof typeof user]}`);
}

// 6. FOREACH - Side effects
console.log("\n=== FOREACH ===");
products.forEach((product, index) => {
    console.log(`[${index}] ${product.name}: $${product.price}`);
});

// ========== FUNCTIONAL PROGRAMMING ==========

// 7. MAP - Transform each element
console.log("\n=== MAP - Transform ===");
const productNames = products.map(p => p.name);
console.log(productNames);

const discountedPrices = products.map(p => ({
    name: p.name,
    originalPrice: p.price,
    discountedPrice: p.price * 0.9
}));
console.log(discountedPrices);

// 8. FILTER - Select elements
console.log("\n=== FILTER - Select ===");
const inStockProducts = products.filter(p => p.inStock);
console.log("In Stock:", inStockProducts.map(p => p.name));

const expensiveItems = products.filter(p => p.price > 200);
console.log("Expensive (>$200):", expensiveItems.map(p => p.name));

// 9. REDUCE - Aggregate to single value
console.log("\n=== REDUCE - Aggregate ===");

// Sum of all prices
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price:", totalPrice);

// Count by category
const categoryCount = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("Count by category:", categoryCount);

// Group by category
const groupedByCategory = products.reduce((acc, p) => {
    if (!acc[p.category]) {
        acc[p.category] = [];
    }
    acc[p.category].push(p);
    return acc;
}, {} as Record<string, Product[]>);
console.log("Grouped by category:", Object.keys(groupedByCategory));

// 10. FIND - Get first match
console.log("\n=== FIND - First Match ===");
const firstExpensive = products.find(p => p.price > 500);
console.log("First item > $500:", firstExpensive?.name);

// 11. FINDINDEX - Get index of first match
console.log("\n=== FINDINDEX ===");
const indexOfChair = products.findIndex(p => p.name === "Chair");
console.log("Chair is at index:", indexOfChair);

// 12. SOME - Check if any element matches
console.log("\n=== SOME - Any Match ===");
const hasExpensive = products.some(p => p.price > 1000);
console.log("Has items > $1000:", hasExpensive);

// 13. EVERY - Check if all elements match
console.log("\n=== EVERY - All Match ===");
const allInStock = products.every(p => p.inStock);
console.log("All in stock:", allInStock);

// 14. FLATMAP - Map and flatten
console.log("\n=== FLATMAP ===");
const reviews = [
    { productId: 1, scores: [5, 4, 5] },
    { productId: 2, scores: [3, 4] }
];
const allScores = reviews.flatMap(r => r.scores);
console.log("All scores flattened:", allScores);

// 15. SORT - Order elements
console.log("\n=== SORT ===");
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price:", sortedByPrice.map(p => `${p.name}: $${p.price}`));

// 16. REVERSE - Reverse order
console.log("\n=== REVERSE ===");
const reversed = [...products].reverse();
console.log("Last product:", reversed[0].name);

// ========== CHAINING OPERATIONS ==========

// 17. CHAIN MULTIPLE OPERATIONS
console.log("\n=== CHAINING ===");
const result = products
    .filter(p => p.inStock)                              // Only in stock
    .map(p => ({ ...p, price: p.price * 0.9 }))         // Apply 10% discount
    .filter(p => p.price < 500)                          // Under $500
    .sort((a, b) => a.price - b.price)                   // Sort by price
    .map(p => `${p.name}: $${p.price.toFixed(2)}`);      // Format

console.log("Filtered & Sorted:", result);

// ========== ADVANCED PATTERNS ==========

// 18. RECURSE - Recursive iteration
function deepPrint(obj: any, depth = 0) {
    const indent = "  ".repeat(depth);
    
    if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                console.log(`${indent}${key}:`);
                deepPrint(obj[key], depth + 1);
            } else {
                console.log(`${indent}${key}: ${obj[key]}`);
            }
        }
    }
}

console.log("\n=== RECURSION ===");
deepPrint({ name: "John", address: { city: "NYC", zip: "10001" } });

// 19. GENERATE WITH GENERATOR (Advanced)
console.log("\n=== GENERATOR ===");
function* generateNumbers(max: number) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}

for (const num of generateNumbers(5)) {
    console.log(num);
}

// 20. BREAK AND CONTINUE
console.log("\n=== BREAK & CONTINUE ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;  // Skip 5
    if (i === 8) break;     // Exit at 8
    console.log(i);
}

// 21. LABELED BREAK (Advanced)
console.log("\n=== LABELED BREAK ===");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log(`Breaking at i=${i}, j=${j}`);
            break outerLoop;  // Break outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// 22. DESTRUCTURING IN LOOPS
console.log("\n=== DESTRUCTURING IN LOOPS ===");
for (const { name, price } of products.slice(0, 3)) {
    console.log(`${name}: $${price}`);
}

// 23. WITH ENTRIES()
console.log("\n=== ENTRIES() ===");
for (const [index, product] of products.entries()) {
    if (index < 3) console.log(`#${index}: ${product.name}`);
}
