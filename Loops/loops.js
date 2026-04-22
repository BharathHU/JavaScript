// Loops are used to complete repetative tasks easily instead of manually repeating the task we must take advantages of loops.
// types of loops
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop

//=============================================================
//for loop
// it is used to execute a block of code for a specific number of times.
console.log("for loop():")
for(var i=0;i<=10; i++){
    console.log(i)
}
//==============================================================
//while loop
// it is used to execute a block of code as long as the specified condition is true.
console.log("while loop():")
let count=0
while (count <10){
    console.log("The count is:"+count)
    count++
}
//================================================================
//do while loop
// it is used to execute a block of code at least once and then it will check the condition if the condition is true then it will execute the block of code again and it will continue until the condition becomes false.
console.log("do while loop():")
let num=0
do{
    console.log("The number is:"+num)
    num++
}
while(num<10)
//================================================================
// for in loop
// we can iterate the object and we can get the access of all keys of object properties mainly this loop will access the key of the object.
console.log("for in loop():")
var obj={name:"Bharath",
    age:22,
    city:"Bangalore",
    profession:"Software Engineer",
    company:"ABC",
    salary:"xyz",
    height:5.9,
    weight:65
}
for(let key in obj){
    console.log(key)
for (let value in obj){
    console.log(obj[value])
}
}
//===================================================================
// for of loop
// we can iterate through the array and we can access of all the elements in an array.
console.log("for of loop():")
var arr=["Bharath",100,true,200,777,false,'raj']
for(var a of arr){
    console.log(a)
}
