// runTests.ts
import { LoginTest } from "./loginTest";
import { SmokeSuite } from "./smokeSuite";

console.log("\n=== AUTOMATION TEST SUITE STARTED ===");

const tests = [
  new LoginTest("Chrome"),
  new SmokeSuite("Edge"),
];

for (const test of tests) {
  console.log("\n--------------------------------------");
  test.runTest();
  console.log("--------------------------------------\n");
}

console.log("ALL TESTS EXECUTED SUCCESSFULLY ");
