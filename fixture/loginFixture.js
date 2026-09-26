const{test:base,expect}=require('@playwright/test')
const{base_URL,SD_username,SD_password}=require('../utils/envConfig')
const ProductPage = require('../page/ProductPage')

const test = base.extend({
    loggedInPage:async({page},use)=>{
        await page.goto(base_URL)
        await page.getByPlaceholder('Username').fill(SD_username)
        await page.getByPlaceholder('Password').fill(SD_password)
        await page.locator('#login-button').click()
        await expect(page.getByText('Products')).toBeVisible()
        const productPage =new ProductPage(page)
        await use(productPage)

    }
})
module.exports={test,expect}