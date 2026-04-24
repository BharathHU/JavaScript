// What is Object.assign() method?
//Object.assign(target,source)copies the own enumerable properties from one or more source object to a target.
let target={
    name:"bharath",
    age:23,
    gender:"Male"
}
let source={
    country:"India",
    occupation:"Development"
}
console.log(target)
console.log(source)
res=Object.assign(target,source)
console.log(res)