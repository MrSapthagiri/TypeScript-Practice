// uiTest.ts
import { BaseTest } from "./baseTest";

export class UITest extends BaseTest {
  protected browser: string;
  protected url: string;

  constructor(testId: string, testName: string, browser: string, url: string) {
    super(testId, testName);
    this.browser = browser;
    this.url = url;
  }

  navigateTo(): void {
    console.log(`Navigating to: ${this.url}`);
  }

  click(selector: string): void {
    console.log(`Clicking element: ${selector}`);
  }

  type(selector: string, text: string): void {
    console.log(`Typing "${text}" in ${selector}`);
  }

  verifyText(selector: string, expected: string): void {
    console.log(`Verifying text in ${selector} equals "${expected}"`);
  }
}
