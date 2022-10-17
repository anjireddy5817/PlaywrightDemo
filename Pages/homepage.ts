import { Page, expect } from "@playwright/test";
export default class HomePage{
    constructor(public page: Page){
        this.page = page;
    }
    async clickOnSpecialHotMenu(){
        console.log(": Clicking on the special hot menu link")
        this.page.click("(//span[text()[normalize-space()='Special']])[2]")
    }
    async verifyPageTitle(expTitle:string){
        console.log(": Verifying the page title")
        await expect(this.page).toHaveTitle(expTitle);
    }
}