// function curriedAdd(a){
//     return function (b){
//     return function(c){
//     return a+b+c;
// }
// }
// }console.log(curriedAdd(2)(3)(4))





// // Using ES6 arrow functions for currying

// const curriedAddES6 = a => b=>c> a+b+c;

// console.log(curriedAddES6(2) (3) (4)); // Output: 9




// function curried(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(curried(2) (3) (4));




// // Using ES6 arrow functions for currying
// const curriedAddES6 = a => b=>c=> a+b+c;
// console.log(curriedAddES6(2) (3) (4)); // Output: 9




//example

// const multiply=a=>b=>a*b
// const double =multiply(2)
// const triple= multiply(3)
// console.log(double(5)) //10
// console.log(triple(5)) //15



//Example
const greet= greeting => name => `${greeting}, ${name}!`; 
const sayHello= greet("Hello"); 
console.log(sayHello("Alice")); // Output: "Hello, Alicel"
const discount = rate => price => price - (price * rate);
const tenPercentDiscount = discount(0.10);
console.log(tenPercentDiscount(100)); // Output: 90
console.log(tenPercentDiscount(200)); // Output: 180