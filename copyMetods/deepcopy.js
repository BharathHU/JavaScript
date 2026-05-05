let orginal={
    name:"Virat",
    age:30,
    city:"Delhi",
    addres:{
        street:"5th Avenue",
        number:12345678
    }
}
let deeepCopy=JSON.parse(JSON.stringify(orginal))
deeepCopy.addres.number=456789
console.log("Orginal copy:",orginal)
console.log("Deep copy",deeepCopy)
console.log("===================================================================================")
let numbers=[1,2,[3,4],5,6]

let deepCopy=JSON.parse(JSON.stringify(numbers))

deepCopy[2][0]=30
console.log("Orginal numbers",numbers)
console.log("Deep Copy",deepCopy)