//Object.freeze()
// # object.freeze(object_name)
// # obeject.freeze() is a method used to freeze an object
// # you cannot add new properties
// # you cannot remove existing properties
// # you cannot change the values of existing properties
// # you cannot reassign or reconfigure any property
const user1={name:"Raj",age:21}
Object.freeze(user1) // if you freeze object if you do any updates it will not happend bcz the object was freezed.
user1.name="Bharath"
user1.city="Mumbai"
delete user1.age
console.log(user1)