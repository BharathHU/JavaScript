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

//filter()
//used to filter elements or data from the array based on certain condition filter callback function
//  will return always boolean value  it will not alter original array it will create new array
console.log("filter()")
var arr3=[101,300,456,654,339,600]
var newar=arr3.filter(function(ele,index){
    return ele>200
})
console.log(newar)
console.log(arr3)

//===========================================================
let person=[{name:"raj",age:44},
    {name:"Ramu",age:45},
    {name:"raaj",age:18},
    {name:"kaaka",age:16},
    {name:"xyz",agr:13},
    {name:"raajuu",age:19},
    {name:"Ramya",age:22}]
newper=person.filter(function(ele,index){
    return ele.age>18
})
console.log(newper)

//reduce()
//it is used to reduce the array to one single value reduce mathod is such a
//a method which accepts a callback function as the parameter(1st para)(2ndpara)initial value.
console.log("reduce()")
let n=[10,20,30,40,50,60,70]
let res=n.reduce(function(prev,curre){
  return prev+curre
})
let res1=n.reduce(function(prev,curre){
  return prev-curre
})
let res2=n.reduce(function(prev,curre){
  return prev*curre
})
console.log(res2)
console.log(res)
console.log(res1)
/*sort()*/
/*if we want to sort the elements of an array in ascending or descending order we can use sort() method*/
console.log("--------------------------------------------------")
console.log("sort() method")
var names=["Sachin","Akash","Virat","zijay","Goutham"]
console.log(names.sort())

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
var array1=[10,2,5,17]
console.log(array1.sort())

array1.sort((a,b)=>{
    return a-b
})
console.log(array1)
