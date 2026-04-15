let user={
    name:"Bharath",
    age:22
}
Object.seal(user)
console.log(user.age)
console.log(user)
user.city="Mysuru"
console.log(user)