import { chromium, expect, test } from "@playwright/test";

test.only(`TC_1:Chrome: Lead to opportunity Conversion`, async ({page}) =>{
    page.setDefaultTimeout(20000);
//Login to Salesforce
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("ramya@testleaf.com");
await page.locator("#password").fill("Password@1");
await page.waitForTimeout(5000);
await page.locator("#Login").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);


//Click AppLauncher
await page.click(".appLauncher button");
await page.getByText("View All").click();

//Click on the Marketing application
await page.getByPlaceholder("Search apps or items...").fill("Service",{timeout:10000});
await page.locator("[role='application'] one-app-launcher-app-tile").first().click({timeout:12000});

//Click Lead from Marketing dashboard
await page.locator("//*[text()='Cases']/..").click();

//Click on the New button to create a lead.
await page.locator("//a[@title='New']").click({timeout:3000});

//Enter Case Details
await page.click("//button[@aria-label='Case Origin']")
await page.click("//span[text()='Phone']");

//Save
await page.click("//button[text()='Save']");

//Assert the Toast message
await expect(page.locator('.toastMessage')).toBeVisible();

//Enter contact details
await page.click("//*[@title='Edit Contact Name']/span");
await page.click("//input[@placeholder='Search Contacts...']");
await page.click("[title='New Contact']")

// await page.locator("//input[@placeholder='Ramya S Dinesh']").first().click();

//Enter Contact details
await page.locator("//button[@name='salutation']").click();
await page.locator("//span[text()='Mrs.']").click();

//Enter First & Last Name
let fName = "Ramya S Dinesh";
let lName = "Contact";
await page.locator('[name=firstName]').fill(fName,{timeout:5000});
await page.locator('[name=lastName]').fill(lName,{timeout:5000});

//Save the Details
await page.locator("//*[text()='Contact Information']/../..//following::*[@name='SaveEdit']").click();

})




