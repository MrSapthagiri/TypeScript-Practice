// baseTest.ts
export class BaseTest {
  protected testId: string;
  protected testName: string;
  protected status: string;
  protected startTime: Date;
  protected endTime: Date;
  protected screenshotPath: string;

  constructor(testId: string, testName: string) {
    this.testId = testId;
    this.testName = testName;
    this.status = "Not Executed";
    this.screenshotPath = "";
    this.startTime = new Date();
    this.endTime = new Date();
  }

  openBrowser(browser: string): void {
    console.log(`Launching ${browser} browser...`);
  }

  closeBrowser(): void {
    console.log("Closing browser...");
  }

  takeScreenshot(fileName: string): void {
    this.screenshotPath = `screenshots/${fileName}_${Date.now()}.png`;
    console.log(`Screenshot captured: ${this.screenshotPath}`);
  }

  markStatus(status: string): void {
    this.status = status;
  }

  printSummary(): void {
    this.endTime = new Date();
    console.log(`\n TEST SUMMARY`);
    console.log(` Test ID: ${this.testId}`);
    console.log(` Name: ${this.testName}`);
    console.log(` Start Time: ${this.startTime.toLocaleTimeString()}`);
    console.log(` End Time: ${this.endTime.toLocaleTimeString()}`);
    console.log(` Status: ${this.status}`);
    console.log(` Screenshot: ${this.screenshotPath}`);
  }
}
