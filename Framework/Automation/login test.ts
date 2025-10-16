// loginTest.ts
import { UITest } from "./uiTest";

export class LoginTest extends UITest {
  private username: string;
  private password: string;

  constructor(browser: string) {
    super("TC001", "Valid Login Test", browser, "https://app.testsite.com/login");
    this.username = "testUser";
    this.password = "Test@123";
  }

  runTest(): void {
    this.openBrowser(this.browser);
    this.navigateTo();

    console.log("\n--- EXECUTING LOGIN TEST ---");
    this.type("#username", this.username);
    this.type("#password", this.password);
    this.click("#loginButton");
    this.verifyText("#welcomeMsg", "Welcome testUser");

    this.takeScreenshot("ValidLogin");
    this.markStatus("Passed");
    this.closeBrowser();
    this.printSummary();
  }
}
