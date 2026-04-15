let person={
    name:"Bharath",
    age:22,
    gender:"Male",
    skills:["HTML","CSS","JavScript","React.js"],
    addr:{
        street:"Gubbi Thothadappa Streeet",
        cross:"2nd Cross",
        main:"3rd main",
        city:"Bengaluru"
    },
    eat:function(){
console.log(this.name+"is eating")
  }
}
console.log(person)
console.log(person.age)
console.log(person.addr.city)
let keys=Object.keys(person)
console.log(keys)
let keyss=Object.values(person)
console.log(keyss)
  