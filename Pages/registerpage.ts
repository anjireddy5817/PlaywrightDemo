import {Page} from "@playwright/test";
import CommonMethods from "../CommonActions/commonaction";
import {test, expect} from "../Fixture/myfixture";

export default class RegisterPage{
    constructor(public page: Page){
        this.page = page;
    }
    async enterFirstName(firstname:string) {
        console.log(": Entering the firstname:"+firstname);
        const ele = this.page.locator("#input-firstname");
        await ele?.fill(firstname);
    }
    async enterLastName(lastname:string){
        console.log(": Entering the lastname:"+lastname);
        const ele = this.page.locator("#input-lastname")
        await ele?.fill(lastname);
    }
    async enterEmail(email:string){
        console.log(": Entering the email:"+email);
        const ele = this.page.locator("#input-email");
        await ele?.fill(email);
    }
    async enterTelephone(telephone:string){
        console.log(": Entering the telephone:"+telephone);
        const ele = this.page.locator("#input-telephone");
        await ele?.fill(telephone);
    }
    async enterPassword(password:string){
        console.log(": Entering the password:"+password);
        const ele = this.page.locator("#input-password");
        await ele?.fill(password);
    }
    async enterConfirmPassword(confirmpassword:string){
        console.log(": Entering the confirm password:"+confirmpassword);
        const ele = this.page.locator("#input-confirm");
        await ele?.fill(confirmpassword);
    }
    isSubscribeChecked(){
        console.log(": Verifying the subscribe radio button");
        const ele = this.page.locator("label[for='input-newsletter-no']");
        return ele;
    }
    async agreePrivacyPolicy(){
        console.log(": Clicking on the agree privacy policy checkbox");
        const ele = this.page.locator("label[for='input-agree']");
        await ele?.check();
    }
    async clickContinueButton(){
        console.log(": Clicking on the continue button");
        const ele = this.page.locator("input[type='submit']");
        await ele?.click();
    }
    async verifyAccountCreationSuccessMessage(expText:string){
        console.log(": Verifying the account creation success message")
        const ele = this.page.locator("//h1[text()=' Your Account Has Been Created!']");
        await expect(ele).toHaveText(expText);
    }
}
