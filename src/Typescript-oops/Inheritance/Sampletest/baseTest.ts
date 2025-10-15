// baseTest.ts
export class BaseTest {
  protected browser: string;

  constructor(browser: string) {
    this.browser = browser;
  }

  openApplication(): void {
    console.log(`🔹 Opening browser: ${this.browser}`);
    console.log("🔹 Launching the application...");
  }

  closeApplication(): void {
    console.log("🔹 Closing the application...");
  }

  captureScreenshot(testName: string): void {
    console.log(`📸 Capturing screenshot for ${testName}`);
  }
}
