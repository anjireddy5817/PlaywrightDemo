import { expect, Page } from "@playwright/test";
export default class LoginPage{
    constructor(public page: Page) {
        this.page = page;
    }
    async login(email:string, password: string){
        await this.enterEmailAddress(email);
        await this.enterPassword(password);
        this.clickOnLogin();
    }
    async enterEmailAddress(email:string){
        console.log(": Entering the email address:"+email);
        await this.page.locator('[placeholder="E-Mail Address"]').click();
        await this.page.locator('[placeholder="E-Mail Address"]').fill(email);
    }
    async enterPassword(password:string){
        console.log(": Entering the password:"+password);
        await this.page.locator('[placeholder="Password"]').click();
        await this.page.locator('[placeholder="Password"]').fill(password);
        await this.page.waitForTimeout(3000);
    }
    async clickOnLogin(){
        console.log(": Clicking on the login button")
        const ele = this.page.locator("input[type='submit']");
        await ele?.click();
    }
    async verifyPageTitle(expTitle:string){
        console.log(": Verifying the page title");
        await expect(this.page).toHaveTitle(expTitle);
    }
    async verifyShopbyCategoryLabel(expLabel:string){
        console.log(": Verifying the shop by category label");
        const label = this.page.locator("//a[contains(.,'Shop by Category')]");
        await expect.soft(label).toHaveText(expLabel);
    }
}