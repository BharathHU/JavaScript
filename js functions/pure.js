//Pure function

// const greeting= name=> `Hello, ${name}`

// console.log(greeting("Alice"))

//Welle, Alice!

//Fure function is a function that always produces the same output for the same Irput

//and has no side effects (does not modify any external state)


//Impure function

let count=0
const increaseCounter=value => count += value
console.log (increaseCounter(1))//1
console.log (increaseCounter(1))//2