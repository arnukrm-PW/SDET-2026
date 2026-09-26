const products = {
    bagpack:"Sauce Labs Backpack",
    bikeLight:"Sauce Labs Bike Light",
    tShirt:"Sauce Labs Bolt T-Shirt",
    Jacket:"Sauce Labs Fleece Jacket",
    onesie:"Sauce Labs Onesie",
    test:"Test.allTheThings() T-Shirt (Red)"
}
const productList={
    single:[products.bagpack

    ],
    multiple:[
       products.bagpack,
       products.Jacket,
       products.bikeLight 
    ]
    
}
module.exports={productList,products}