import { Page } from "@playwright/test";
export default class SpecialHotPage{
    constructor(public page: Page){
        this.page = page;
    }
    async addtheProductToTheCart(){
        console.log(": Mouse Hover on the product and click on add to cart button")
        await this.page.hover("//div[@class='image']/a",{strict:false});
        await this.page.waitForTimeout(3000);
        await this.page.locator("(//button[@title='Add to Cart']//i)[1]").first().click();
    }
    async isToastVisible(){
        console.log(": Verifying view cart toast is avialable")
        const toast = this.page.locator("//a[contains(.,'View Cart')]");
        await toast?.waitFor({state:"visible"});
        return toast;
    }
}