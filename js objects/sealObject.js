let user={
    name:"Bharath",
    age:22,
    xyz:"abc"
}
Object.seal(user)
console.log(user.age)
console.log(user) //allowed we can access 
user.city="Mysuru"
console.log(user)//not allowed
// {
//     name:"kaka",  //not allowed
//     age:33  // we can't modify or we can't insert
// }