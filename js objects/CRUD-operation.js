//create
let product={
    pname:"I phone",
    price:120000,
    rate:4.5,
    stock:true,
    cotegory:"Electronics"
}
console.log(product)

//read
console.log(product.pname)
console.log(product['price'])
console.log(product.price)

//update

console.log(product)
product.pname="Samsung"
product.rating=5
console.log(product)