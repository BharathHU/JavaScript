// Shallow copy

// *A shallow copy is a copy of an object where only first level of the objects is duplicated but
//  the nested(inner) objects or refernece are not copied, they are just refernece
let orginal={
    name:"Virat",
    age:30,
    city:"Delhi",
    addres:{
        street:"5th Avenue",
        number:12345678
    }
}
let ShallowCopy=Object.assign({},orginal)
ShallowCopy.name="Rohit"
ShallowCopy.addres.number=456789
console.log("Orginal copy:",orginal)
console.log("Shallow copy",ShallowCopy)

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
let numbers=[1,2,[3,4],5,6]

let copynumbers=numbers.slice();

console.log("Orginal numbers",numbers)
console.log("Shallow Copy",copynumbers)

copynumbers[2][0]=300
copynumbers[0]=100

console.log("Orginal numbers after change",numbers)
console.log("Shallow Copy after change",copynumbers)