import { expect, test } from "@playwright/test";

test(`Edit Lead`, async ({page}) => {
  
//Navigate into Leaftaps applicaion by using given credentials     
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.getByLabel("Username").fill("Demosalesmanager");
await page.getByLabel("Password").fill("crmsfa");
await page.click(".decorativeSubmit");

//Click CRMSFA
await page.click(".crmsfa");
        
//Click Lead 
await page.getByRole("link",{name:'Leads'}).click();

//Find Leads
await page.getByRole("link",{name : 'Find Leads'}).click();

//Enter the details in Find Leads
// await page.getByLabel("First name:").fill("Ramya S");
// await page.locator("[name='firstName']").filter({hasText:"padding-left:155px"}).fill("Ramya S");
await page.locator("[name='firstName']").last().fill("Ramya S");

/** Enter Find Leads */
await page.getByRole("button",{name:'Find Leads'}).click();
// await page.getByLabel("button",{name:'Find Leads'}).click()

await page.locator(".x-grid3-td-partyId.x-grid3-cell-first a").first().click();

//Edit in 'View Lead' page
await page.getByRole("link",{name : "Edit"}).click();

//Edit the details
const compName = page.locator("#updateLeadForm_companyName");
await compName.fill("Natwest");

await page.fill("#updateLeadForm_annualRevenue","2000");
await page.fill("#updateLeadForm_departmentName","Updated: Automation Testing");
await page.fill("#updateLeadForm_description","Adding description");

//Click Update
await page.click("[value='Update']");

//Assert values
const updatedCompName = (await page.locator("#viewLead_companyName_sp").innerText()).split(" ");
updatedCompName[0];
await expect(updatedCompName[0]).toContain("Natwest");

console.log(`Page URL : ${page.url()}`);

})