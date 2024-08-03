import { expect, test } from "@playwright/test";

test(`D6: Create New Account`, async ({page}) => {

    page.setDefaultTimeout(60000);
//Navigate into Leaftaps applicaion by using given credentials    
const url = "https://login.salesforce.com/" 
await page.goto(url);
await page.getByLabel("Username").fill("ramya@testleaf.com");
console.log(await page.locator("#signup_link").innerText());
console.log(await page.locator("#username").inputValue());

console.log(url);

})