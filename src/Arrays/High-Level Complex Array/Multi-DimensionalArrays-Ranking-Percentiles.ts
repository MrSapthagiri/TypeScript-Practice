type Result = {
  studentId: number;
  name: string;
  marks: number[];
};

let results: Result[] = [
  { studentId: 1, name: "Alice", marks: [80, 75, 92] },
  { studentId: 2, name: "Bob", marks: [65, 70, 68] },
  { studentId: 3, name: "Charlie", marks: [95, 90, 98] },
  { studentId: 4, name: "David", marks: [50, 55, 60] },
  { studentId: 5, name: "Eve", marks: [85, 88, 90] }
];

// Compute average per student
let performance = results.map(r => {
  let avg = r.marks.reduce((sum, m) => sum + m, 0) / r.marks.length;
  return { ...r, avg };
});

// Sort by rank
performance.sort((a, b) => b.avg - a.avg);

// Calculate percentile cutoff (top 20%)
let cutoffIndex = Math.floor(performance.length * 0.2);
let toppers = performance.slice(0, cutoffIndex + 1);

console.log("=== Student Ranking ===");
console.table(performance);

console.log("\n=== Toppers (Top 20%) ===");
console.table(toppers);
