import { expect, test } from "@playwright/test";

test(`D5: Create New Account`, async ({page}) => {

//Navigate into Leaftaps applicaion by using given credentials     
await page.goto("https://login.salesforce.com/");
// await page.fill("#username","ramya@testleaf.com")
// await page.fill("#password","Password@1")
// await page.click("#Login");

await page.getByLabel("Username").fill("ramya@testleaf.com");
await page.getByLabel("Password").fill("Password@1");
await page.click("#Login");

//Assert page Title
await expect(page).toHaveTitle('Home | Salesforce');

console.log(`Page Title : ${await page.title()}`);

//Click AppLauncher
await page.click(".appLauncher button");

await page.getByText("View All").click();

//Click on the Service application

await page.getByPlaceholder("Search apps or items...").fill("Service");

await page.waitForTimeout(3000);

await page.locator("[role='application'] one-app-launcher-app-tile").first().click();

//Click Accounts link in Services Application
await page.click("[title='Accounts']")

//New Account Creation
// await page.getByRole("link", {name : 'New'}).waitFor({timeout:5000});

await page.click("div[title='New']");

await page.locator("input[name='Name']").fill("Ramya Account");

await page.click("[name='SaveEdit']");

await expect(page.locator(".toastMessage")).toHaveText(`Account "Ramya Account" was created.`)

await page.waitForTimeout(3000);
 
})