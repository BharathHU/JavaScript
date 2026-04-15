var person={
    name:"Bharath",
    age:22,
    addr:"Bengaluru",
    height:"173cm",
    play:function(){
        console.log(this.name+" is playing cricket")

    },
    gender:"Male"
}
let keys=Object.values(person)
console.log(keys)
person.play()