import {expect, test} from "../Fixture/myfixture";
import UtilityMethods from "../Utility/utilitymethods";
import Env from "../Utility/environment";
import * as data from "../testdata/register.json";

function delay(abc: number){
    return new Promise(resolve => setTimeout(resolve,abc));
}

const ut = new UtilityMethods(); 
const fname  = ut.getRandomString(10);
const lname  = ut.getRandomString(10);
const phoneNumber = ut.getRandomMobileNumber(10).toString();
const emailAddress = ut.getRandomEmail();

test.describe('page object model test demo', async ()=>{
    test('Registe test_01', async({page, registerPage})=>{
        await page.goto(`${Env.testURL}route=account/register`);
        await registerPage.enterFirstName(fname);
        await registerPage.enterLastName(lname);
        await registerPage.enterEmail(emailAddress);
        await registerPage.enterTelephone(phoneNumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.agreePrivacyPolicy();
        await registerPage.clickContinueButton();
        await registerPage.verifyAccountCreationSuccessMessage("Your Account Has Been Created!");
    })
    test('Login test-02', async({page, loginPage})=>{
        await page.goto(`${Env.testURL}route=account/login`);
        await loginPage.enterEmailAddress(emailAddress);
        await loginPage.enterPassword(data.password);
        await loginPage.clickOnLogin();
        await loginPage.verifyPageTitle("My Account");
        await loginPage.verifyShopbyCategoryLabel("Shop by Catego");
    })
    test('Add to cart test-03', async({page, loginPage, homePage, specialHotPage})=>{
        await page.goto(`${Env.testURL}route=account/login`);

//        loginPage.login(emailAddress,data.password);

        await loginPage.enterEmailAddress(emailAddress);
        await loginPage.enterPassword(data.password);
        await loginPage.clickOnLogin();


        await homePage.clickOnSpecialHotMenu();
        await homePage.verifyPageTitle("Special Offers");
        await specialHotPage.addtheProductToTheCart();
        const iscartVisible = await specialHotPage.isToastVisible(); 
        await expect(iscartVisible).toBeVisible();
    })
    test.skip('Login test-04', async({page, loginPage})=>{
        await page.goto(`${Env.testURL}route=account/login`);
        await loginPage.enterEmailAddress(emailAddress);
        await loginPage.enterPassword(data.password);
        await loginPage.clickOnLogin();
        await loginPage.verifyPageTitle("My Account");
        await loginPage.verifyShopbyCategoryLabel("Shop by Catego");
    })
})
