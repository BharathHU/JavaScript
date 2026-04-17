// forEach()
// we can access every elements in array
console.log("forEach()")
var arr=["raj",100,"rahul",true]
arr.forEach(function(ele,index){
    console.log(ele,index)
})
console.log(arr)
//==================================================
let arr1=['Bharath',100,true,200,777,false,'raj']
arr1.forEach(function(ele,index){
    console.log(ele + " " + index)
})
let data=[{name:"Bharath",age:22},
    {name:"Nischitha",age:22},
{name:"Nibha",age:2},
{name:"Arya",age:1}
]
data.forEach(function(ele,index){
console.log(data)
})
data.forEach((ele,index)=>{
    console.log(ele.name+" "+ele.age+" "+index)
})
//==========================================================
//map()
// it should be return some value returned value alwayes added in new array map() will not alter original array.
console.log("map()")
var arr2=[101,102,103,104,105]
var newarr2=arr2.map(function(element,index){
    return element*10
})
console.log("The newarray:"+newarr2)
console.log("The original Array:"+arr2)

let emp=[{id:101,salary:20000},
    {id:102,salary:30000},
    {id:103,salary:40000},
    {id:104,salary:45000}]
let nemp=emp.map(function(element,index){
return element.salary*13
})
console.log(nemp)
console.log(emp)

