import { Page,expect, Locator } from "@playwright/test";
export default class CommonMethods{
    
    
    constructor(public page: Page){
        this.page = page;

    }
    async click(Locator:string){
        this.page.click(Locator);
    }
}
