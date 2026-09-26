const{test,expect}=require('../fixture/loginFixture')
const{productList,products}=require('../test-Data/productData')

test('TC_01 validate login test with fixture',async({loggedInPage})=>{
    await expect(loggedInPage.page).toHaveTitle("Swag Labs")
    //await loggedInPage.pause()
})
test('TC_02 Extract all product count.',async({loggedInPage})=>{
   // await loggedInPage.page.pause()
   await loggedInPage.countProducts()

})
test('TC_03 Extract all the products name',async({loggedInPage})=>{
 //await loggedInPage.page.pause()
    await loggedInPage.getAllProductsName()

})
test('TC_04 Extract all the products and Price Value',async({loggedInPage})=>{
 //await loggedInPage.page.pause()
    await loggedInPage.getAllProductsAndPriceValue()

})
test('TC_05 find single Product By Name and Click ATC',async({loggedInPage})=>{
 //await loggedInPage.page.pause()
    await loggedInPage.findProductByNameandClickATC(products.bagpack)

})
test('TC_06 find Multiple Product By Name and Click ATC',async({loggedInPage})=>{
// await loggedInPage.page.pause()
    await loggedInPage.findProductByNameandClickATC(products.Jacket)
    await loggedInPage.findProductByNameandClickATC(products.bikeLight)
    await loggedInPage.findProductByNameandClickATC(products.bagpack)

})