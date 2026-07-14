// loginTest.ts------Child class (extends BaseTest)
import { BaseTest } from "./baseTest";

export class LoginTest extends BaseTest {
  constructor(browser: string) {
    super(browser); // calling parent constructor
  }

  testValidLogin(): void {
    this.openApplication();
    console.log("Entering valid username and password...");
    console.log("Clicking on login button...");
    console.log("Login successful!");
    this.captureScreenshot("ValidLogin");
    this.closeApplication();
  }

  testInvalidLogin(): void {
    this.openApplication();
    console.log("Entering invalid username or password...");
    console.log("Login failed! Showing error message...");
    this.captureScreenshot("InvalidLogin");
    this.closeApplication();
  }
}
