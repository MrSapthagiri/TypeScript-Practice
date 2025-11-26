type Item = {
  id: number;
  name: string;
  stock: number;
  reorderLevel: number;
};

let inventory: Item[] = [
  { id: 101, name: "Laptop", stock: 25, reorderLevel: 10 },
  { id: 102, name: "Mouse", stock: 5, reorderLevel: 15 },
  { id: 103, name: "Keyboard", stock: 30, reorderLevel: 20 },
  { id: 104, name: "Monitor", stock: 8, reorderLevel: 10 }
];

// Total stock
let totalStock = inventory.reduce((sum, item) => sum + item.stock, 0);

// Low stock alerts
let lowStockItems = inventory.filter(i => i.stock < i.reorderLevel);

console.log("=== Inventory Summary ===");
console.log("Total Stock:", totalStock);
console.log("\nLow Stock Items:", lowStockItems);
