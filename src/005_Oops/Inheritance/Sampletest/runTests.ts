// runTests====Execution file
import { LoginTest } from "./loginTest";
import { ProductTest } from "./productTest";

const loginTest = new LoginTest("Chrome");
const productTest = new ProductTest("Edge");

console.log("\n=== 🧪 Running Login Tests ===");
loginTest.testValidLogin();
loginTest.testInvalidLogin();

console.log("\n=== 🧪 Running Product Tests ===");
productTest.testAddToCart();
productTest.testCheckout();
