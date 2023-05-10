import { expect, Locator, Page } from "@playwright/test";

export class GoogleMainPage {
  private readonly page: Page;
  private readonly searchTextArea: Locator;
  private readonly searchButton: Locator;
  private readonly sideTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextArea = page.locator("textarea[class = 'gLFyf']");
    this.searchButton = page.locator("input[class= 'gNO89b']");
    this.sideTitle = page.locator("css=h2[data-attrid='title']");
  }

  async navigateToMainPage(): Promise<void> {
    await this.page.goto("https://www.google.com");
  }

  async lookForAWord(word: string): Promise<void> {
    await this.searchTextArea.fill(word);
    await this.page.mouse.click(200, 200);
    await this.searchButton.nth(1).click();
  }

  async vefifySideTitleHasSearchedWord(word: string): Promise<void> {
    await expect(this.sideTitle).toHaveText(word);
  }
}
