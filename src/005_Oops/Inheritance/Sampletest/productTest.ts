// productTest.ts----Another Child class
import { BaseTest } from "./baseTest";

export class ProductTest extends BaseTest {
  constructor(browser: string) {
    super(browser);
  }

  testAddToCart(): void {
    this.openApplication();
    console.log("🛒 Searching for product: 'Wireless Mouse'");
    console.log("🛒 Adding product to cart...");
    console.log("✅ Product added successfully!");
    this.captureScreenshot("AddToCart");
    this.closeApplication();
  }

  testCheckout(): void {
    this.openApplication();
    console.log("💳 Proceeding to checkout...");
    console.log("✅ Checkout successful!");
    this.captureScreenshot("Checkout");
    this.closeApplication();
  }
}
