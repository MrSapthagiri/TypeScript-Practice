export {};

// ============================================================
// REAL-WORLD: QA / Automation — all 4 methods together
// forEach | map | filter | reduce — Easy → Medium → High
// ============================================================

type TestResult = {
  id: string;
  name: string;
  suite: string;
  passed: boolean;
  durationSec: number;
};

const results: TestResult[] = [
  { id: "T01", name: "Login valid", suite: "Auth", passed: true, durationSec: 1.2 },
  { id: "T02", name: "Login invalid", suite: "Auth", passed: true, durationSec: 0.9 },
  { id: "T03", name: "Add to cart", suite: "Cart", passed: false, durationSec: 2.1 },
  { id: "T04", name: "Remove item", suite: "Cart", passed: true, durationSec: 1.5 },
  { id: "T05", name: "Payment flow", suite: "Checkout", passed: false, durationSec: 4.0 },
  { id: "T06", name: "Order confirm", suite: "Checkout", passed: true, durationSec: 2.8 },
];

// EASY LEVEL — forEach: print each test
console.log("=== E1: All Tests ===");
results.forEach(function (test, i) {
  const icon = test.passed ? "✓" : "✗";
  console.log(`  ${i + 1}. [${icon}] ${test.name}`);
});

// EASY LEVEL — map: get test names only
const testNames = results.map(function (t) { return t.name; });
console.log("E2 Test Names:", testNames);

// MEDIUM LEVEL — filter: failed tests only
const failedTests = results.filter(function (t) { return !t.passed; });
console.log("M1 Failed:", failedTests.map(function (t) { return t.name; }));

// MEDIUM LEVEL — filter + map: passed test IDs
const passedIds = results
  .filter(function (t) { return t.passed; })
  .map(function (t) { return t.id; });
console.log("M2 Passed IDs:", passedIds);

// HIGH LEVEL — reduce: full suite report
type SuiteReport = Record<string, { total: number; passed: number; failed: number }>;

const suiteReport = results.reduce(function (acc: SuiteReport, test) {
  if (!acc[test.suite]) {
    acc[test.suite] = { total: 0, passed: 0, failed: 0 };
  }
  acc[test.suite].total++;
  if (test.passed) acc[test.suite].passed++;
  else acc[test.suite].failed++;
  return acc;
}, {});

console.log("H1 Suite Report:", suiteReport);

// HIGH LEVEL — chain: average duration of passed tests per suite
const suites = [...new Set(results.map(function (r) { return r.suite; }))];

suites.forEach(function (suite) {
  const avgDuration = results
    .filter(function (r) { return r.suite === suite && r.passed; })
    .map(function (r) { return r.durationSec; })
    .reduce(function (acc, d, _, arr) {
      return arr.length === 0 ? 0 : acc + d / arr.length;
    }, 0);

  console.log(`H2 ${suite} avg passed duration: ${avgDuration.toFixed(2)}s`);
});

// HIGH LEVEL — reduce: overall pass rate
const passRate = results.reduce(function (acc, test) {
  acc.total++;
  if (test.passed) acc.passed++;
  return acc;
}, { total: 0, passed: 0 });

const percentage = ((passRate.passed / passRate.total) * 100).toFixed(1);
console.log(`H3 Overall Pass Rate: ${percentage}% (${passRate.passed}/${passRate.total})`);
