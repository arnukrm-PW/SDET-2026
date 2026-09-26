const{test:setup,expect}=require('@playwright/test')
const{base_URL,SD_username,SD_password}=require('../utils/envConfig')

const authFile="utils/.auth/.user.json"
setup("test with StorageState",async ({page})=>{
    await page.goto(base_URL)
    await page.getByPlaceholder('Username').fill(SD_username)
    await page.getByPlaceholder('Password').fill(SD_password)
    await page.locator('input[data-test="login-button"]').click()
    await expect(page.getByText('Products')).toBeVisible()
    await page.context().storageState({path:authFile})


})