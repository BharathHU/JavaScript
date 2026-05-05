var obj1 = {
     c: 100 
    }
var obj2 = { 
    c: 500
 }

function fnAdd(x, y) {
    let z = x + y + this.c
    console.log(z)
}

// Bind with obj1
let fn1 = fnAdd.bind(obj1)
fn1(10, 10)   // 10 + 10 + 100 = 120

// Bind with obj2
let fn2 = fnAdd.bind(obj2)
fn2(10, 10)   // 10 + 10 + 500 = 520

// Bind with arguments
let fn3 = fnAdd.bind(obj2, 5, 6)
fn3()         // 5 + 6 + 500 = 511

// Override binding
let fn4 = fnAdd.bind(obj1)
fn4(10, 10)   // 120