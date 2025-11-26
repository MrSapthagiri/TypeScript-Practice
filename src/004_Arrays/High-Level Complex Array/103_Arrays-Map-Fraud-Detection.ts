type Transaction = {
  id: number;
  type: "credit" | "debit";
  amount: number;
  location: string;
};

let transactions: Transaction[] = [
  { id: 1, type: "debit", amount: 500, location: "Delhi" },
  { id: 2, type: "debit", amount: 1500, location: "Mumbai" },
  { id: 3, type: "credit", amount: 2000, location: "Delhi" },
  { id: 4, type: "debit", amount: 10000, location: "Dubai" }
];

// Detect suspicious (debit > 5000 or foreign location)
let suspicious = transactions.filter(
  t => (t.type === "debit" && t.amount > 5000) || t.location !== "Delhi"
);

console.log("=== Suspicious Transactions ===");
console.log(suspicious);
