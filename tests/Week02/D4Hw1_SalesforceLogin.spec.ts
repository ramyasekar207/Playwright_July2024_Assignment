import { chromium, test } from "@playwright/test";

test(`TC_1:Salesforce Login`, async ({}) =>{
 const browser = await chromium.launch({headless: false});
 const browserContext = await browser.newContext();
 const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("ramya@testleaf.com");
    await page.locator("#password").fill("Password@1");
   await page.waitForTimeout(5000);
   await page.locator("#Login").click();
   await page.waitForTimeout(5000);
   console.log(`Page URL : ${page.url()}`);
   await page.close();
   await browserContext.close();
   await browser.close();



})