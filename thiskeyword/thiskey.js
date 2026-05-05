let person={
    name:"John",
    age:30,
    city:"New York",
    place:"USA",
    details:function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.place);
        console.log("name is "+this.name+" age is "+this.age+" city is "+this.city+" place is "+this.place);
    }
}
person.details();