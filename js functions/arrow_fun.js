/* Defination: arrow function are introduced es6version keyword is not used to create arrow 
function arrow function are used manily as callback function and also used 
to write short code.*/


/*arrow function*/

// Arrow function without parameters
let fun = () => console.log("I am arrow function")
fun()

// Arrow function with parameters
let add = (x, y) => console.log(x + y)
add(2, 4)

// Arrow function with one parameter
let greet = name => console.log("Hello " + name)
greet("Bharath H U")

// Arrow function with return
let message = () => "Welcome to JavaScript class."
console.log(message())

// Implicit return
let sum = () => 30 + 40
console.log(sum())

// Multiplication
let res = (x, y) => x * y
console.log(res(10, 20))