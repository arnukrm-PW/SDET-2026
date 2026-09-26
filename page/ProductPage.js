const productLoc = require('../locators/productLoc')
const{productList,products}=require('../test-Data/productData')

class ProductPage{
    constructor(page){
        this.page=page
       
    }
    async countProducts(){
         const productInventory = await this.page.locator(productLoc.productName)
   const count = await productInventory.count()
   console.log(`count: ${count}`)
   return count
    }

    async getAllProductsName(){
 const productName = await this.page.locator(productLoc.productName)
   const count = await productName.count()
   console.log(`count: ${count}`)
    for(let i=0;i<count;i++){
        const product = await productName.nth(i).textContent()
        console.log(`productName ${i+1} : ${product}`)
    }
 }
    async getAllProductsAndPriceValue(){
 const productName = await this.page.locator(productLoc.productName)
 const productPrice= await this.page.locator(productLoc.productPrice)
   const count = await productName.count()
   console.log(`count: ${count}`)
    for(let i=0;i<count;i++){
        const product = await productName.nth(i).textContent()
        const price = await productPrice.nth(i).textContent()
        console.log(`productName ${i+1} : ${product} : ${price}`)
    }
 }
async findProductByNameandClickATC(productName){
    await this.page.locator(productLoc.productInventory).filter({hasText:productName}).locator(productLoc.productATC).click()
}

}
module.exports=ProductPage