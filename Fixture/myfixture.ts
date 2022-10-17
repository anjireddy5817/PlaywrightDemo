import {test as myTest} from "@playwright/test";
import RegisterPage from "../Pages/registerpage";
import LoginPage from "../Pages/loginpage";
import HomePage from "../Pages/homepage";
import SpecialHotPage from "../Pages/specialhotpage";
import CommonMethods from "../CommonActions/commonaction";
type pages =({
    registerPage: RegisterPage,
    loginPage: LoginPage,
    homePage: HomePage,
    specialHotPage: SpecialHotPage
    commonMethods: CommonMethods;
})
const testPages = myTest.extend<pages>({
    registerPage: async({page},use)=>{
        await use(new RegisterPage(page))
    },
    loginPage: async ({page},use)=>{
        await use(new LoginPage(page))
    },
    homePage: async ({page},use)=>{
        await use(new HomePage(page))
    },
    specialHotPage: async ({page},use)=>{
        await use(new SpecialHotPage(page))
    },
    commonMethods: async ({page},use)=>{
        await use(new CommonMethods(page))
    }
})
export const test = testPages;
export const expect = testPages.expect;
