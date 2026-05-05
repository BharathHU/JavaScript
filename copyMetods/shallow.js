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