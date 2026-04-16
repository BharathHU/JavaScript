// 1.push()
// 2.pop()
// 3.unshift()
// 4.shift()
// 5.indexOf()
// 6.lastindexOf()
// 7.join()
// 8.includes()
// 9.reverse()
// 10.slice()
// 11.splice()
//==================================================================================================================================
 //1.push()
 console.log("push():")

 var arr=[]
 arr.push(10)
 console.log(arr)
 arr.push("Bharath")
 console.log(arr)
 arr.push(true)
 console.log(arr)
 arr.push(143)
 console.log(arr)
console.log("=========================================================")

 //2.pop()
 console.log("pop():")

 var arr1=[10,"Sachin",true,15.6789,"Dhoni","y"]
 console.log(arr1)
 arr1.pop()
 console.log(arr1)
 arr1.pop()
 console.log(arr1)
 //==========================================================================================================

 //unshift()
 console.log("unshift()")
 var arr2=[10,"Sachin",true,27.90]
 console.log(arr2)
 arr2.unshift("virat")
 console.log(arr2)
 arr2.unshift(18)
 console.log(18)
 //==================================================================================

 //shift()
 console.log("shift()")

 var arr3=[10,"Sachin",true,15.6789,"Virat","y"]
 console.log(arr3)
 arr3.shift()
 console.log(arr3)
 arr3.shift()
 console.log(arr3)
 arr3.shift()
 console.log(arr3)
 //=======================================================================================================

 //indexOf()
 console.log("indexOf()")
 var arr4=[10,"Sachin",true,15.6789,"Virat","y"]
 console.log(arr4)
 console.log(arr4.indexOf(true))
 console.log(arr4.indexOf("asd"))
 //=============================================================================================

 //lastindexOf()
 console.log("lastindexOf()")
 var arr5=["raj",100,"rahul","Sachin",true,100,99]
 console.log(arr5.lastIndexOf("Sachin"))
 console.log(arr5.lastIndexOf(100))
 console.log(arr5.lastIndexOf(true))
 console.log(arr5.lastIndexOf(99))
 console.log(arr5.lastIndexOf("rahul"))
 console.log(arr5.lastIndexOf("raj"))
//========================================================================================================
 //join()
 console.log("join()")
 var arr6=["raj",100,"rahul","Sachin",true,100,99]
 console.log(arr6.join())
 console.log(arr6.join("@"))
 console.log(arr.join("$"))

 //====================================================================
 console.log("reverse()")

 var arr7=["raj",100,"rahul","Sachin",true,100,99]
 console.log(arr7)
 res=arr6.reverse()
 console.log(res)

//==================================================================================
 //includes()
 var arr8=["raj",100,"rahul","Sachin",true,100,99]
 console.log(arr8)
 console.log(arr8.includes(100))
 console.log(arr8.includes("Nishchii"))

 //=====================================================================================
 //slice()
 console.log("slice()")

 var arr9=["raj",100,"rahul","Sachin",true,100,99]
 console.log(arr9)
 console.log(arr9.slice(3))
 console.log(slice(2,5))
 console.log(arr9)




