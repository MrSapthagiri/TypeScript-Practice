export {};

// ============================================================
// filter() — search, match, and validate data
// Easy → Medium → High: find records that meet rules
// ============================================================

// EASY LEVEL — number and string filters
const nums: number[] = [-5, 0, 3, 8, -2, 15];
const positives = nums.filter(function (n) {
  return n > 0;
});
console.log("E1 Positives:", positives);

const emails: string[] = ["giri@test.com", "bad-email", "sam@qa.com"];
const validEmails = emails.filter(function (email) {
  return email.includes("@") && email.includes(".");
});
console.log("E2 Valid Emails:", validEmails);

// MEDIUM LEVEL — filter by property
type Product = { name: string; inStock: boolean; rating: number };
const products: Product[] = [
  { name: "Phone", inStock: true, rating: 4.5 },
  { name: "Tablet", inStock: false, rating: 4.0 },
  { name: "Watch", inStock: true, rating: 3.2 },
  { name: "Laptop", inStock: true, rating: 4.8 },
];

const availableTopRated = products.filter(function (p) {
  return p.inStock && p.rating >= 4.0;
});
console.log("M1 Available Top Rated:", availableTopRated);

// HIGH LEVEL — automation test filtering
type TestRun = {
  suite: string;
  name: string;
  status: "passed" | "failed" | "skipped";
  durationMs: number;
};

const runs: TestRun[] = [
  { suite: "Login", name: "valid user", status: "passed", durationMs: 1200 },
  { suite: "Login", name: "invalid pwd", status: "failed", durationMs: 800 },
  { suite: "Cart", name: "add item", status: "passed", durationMs: 2500 },
  { suite: "Cart", name: "remove item", status: "skipped", durationMs: 0 },
  { suite: "Checkout", name: "payment", status: "failed", durationMs: 5000 },
];

const failedInLogin = runs.filter(function (run) {
  return run.suite === "Login" && run.status === "failed";
});
console.log("H1 Failed Login Tests:", failedInLogin);

const slowPassed = runs.filter(function (run) {
  return run.status === "passed" && run.durationMs > 2000;
});
console.log("H2 Slow Passed:", slowPassed);

const uniqueSuites = [...new Set(runs.map(function (r) { return r.suite; }))];
const suiteFailures = uniqueSuites.filter(function (suite) {
  return runs.some(function (r) {
    return r.suite === suite && r.status === "failed";
  });
});
console.log("H3 Suites With Failures:", suiteFailures);
