import { expect, test } from "@playwright/test";

test(`D5 : HW-PlaywrightLocators`, async ({page}) => {

//Navigate into Leaftaps applicaion by using given credentials     
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.getByLabel("Username").fill("Demosalesmanager");
await page.getByLabel("Password").fill("crmsfa");
await page.click(".decorativeSubmit");

//Click CRMSFA
await page.click(".crmsfa");
        
//Click Lead 
await page.getByRole("link",{name:'Leads'}).click();

//Create Create Lead 
await page.getByRole("link",{name:'Create Lead'}).click();

//Enter company details
await page.fill("#createLeadForm_companyName", "RBS")
await page.fill("#createLeadForm_firstName","Ramya S");
await page.fill("#createLeadForm_lastName","Dinesh");
await page.fill("#createLeadForm_personalTitle","Mrs");
await page.fill("#createLeadForm_generalProfTitle","Mrs. Ramya");
await page.fill("#createLeadForm_annualRevenue","1000");
await page.fill("#createLeadForm_departmentName","Automation Testing");
await page.fill("#createLeadForm_primaryPhoneNumber","9988776655");
  
await page.click("[name='submitButton']");

//Assertions
const companyName = (await page.locator("#viewLead_companyName_sp").innerText()).split(" ");
console.log(`CompanyName : ${companyName[0]}`);
expect(companyName[0]).toContain('RBS');

await expect(page.locator("#viewLead_firstName_sp")).toHaveText('Ramya S');
console.log(`FirstName : ${await page.locator("#viewLead_firstName_sp").innerText()}`);
await expect(page.locator("#viewLead_lastName_sp")).toHaveText('Dinesh');
console.log(`LastName : ${await page.locator("#viewLead_lastName_sp").innerText()}`);
await expect(page.locator("#viewLead_statusId_sp")).toHaveText('Assigned');
console.log(`Status : ${await page.locator("#viewLead_statusId_sp").innerText()}`);

console.log(`Page URL : ${page.url()}`);




    
    
    
    
})

/**
 * name
 */


