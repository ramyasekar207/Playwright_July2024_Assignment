import { chromium, expect, test } from "@playwright/test";

test.only(`01_D10:ServiceNow Login page`, async ({context,page}) =>{

    await page.goto("https://account.servicenow.com/sign-in");
    await page.fill("input[id=email]","ramyasekar207@gmail.com");
    /******Shadow Dom *****/
    await page.locator('.sign-in-form #submit_form').click();

    await page.waitForTimeout(3000);
    
    await page.locator('wc-input #password').first().fill('Password@1');

    await page.locator('#submit_form').getByRole('button', { name: 'Sign In' }).click();



    
    
    // await page.locator(".sign-in-form").filter({hasText:'Continue'}).click();

    await page.waitForTimeout(5000);



})