const{test,expect}=require('@playwright/test')
const {base_URL,SD_username,SD_password} = require('../utils/envConfig')

test('login to SD with StorageState',async ({page})=>{

    await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page.getByText('Products')).toBeVisible()
    //await page.pause()

})