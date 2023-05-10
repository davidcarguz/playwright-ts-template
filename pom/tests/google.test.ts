import { test } from "@playwright/test";
import { GoogleMainPage } from "../pages/google.main.page";

let googleMainPage: GoogleMainPage;

test.beforeEach(async ({ page }) => {
  googleMainPage = new GoogleMainPage(page);
  await googleMainPage.navigateToMainPage();
});

test.describe("Google main page", () => {
  const countries: string[] = ["Colombia", "Venezuela", "Perú", "Chile"];
  for (const country of countries) {
    test(`search for word ${country}`, async () => {
      await googleMainPage.lookForAWord(country);
      await googleMainPage.vefifySideTitleHasSearchedWord(country);
    });
  }
});
