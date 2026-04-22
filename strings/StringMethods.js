//1.charAt() , 2.toLowerCase(), 3.toUpperCase(), 4.replaceAll(), 5.slice(), 6.substring(), 8.replace(), 9.trim()
// charAt()
//whenever from a string if we need to extract a special character we use charAt(0 method).
console.log("charAt():")
let str="Bharath"
console.log(str.length)
console.log(str.charAt())
console.log(str.charAt(2))
//=======================================================================
//toLowerCase()
// all the charecters of the string will be connverted to Lower case.
console.log("toLowerCase():")
let str1="BhArAtH"
console.log(str1.toLowerCase())
//=======================================================================
//toUpperCase()
// all the charecters of the string will be converted to upper case
console.log("toUpperCase():")
let str2="BhArAtH"
console.log(str2.toUpperCase())
//=======================================================================
//SubString()
// its almost similar to slice(),the difference between substring and slice() is substring doesn't support -ve indexes.
console.log("SubString():")
let str3="Welcome to JavaScript"
console.log(str3.substring(3, 21))
console.log(str3.substring(11))
console.log(str3.substring(21,3,-1))
//========================================================================
//slice()
// when ever we want to extract a substring from a string we can use slice().
// slice(begin_index)
// slice(begin_index,end_index)
// it will accepts negative index it starts extraction from -2 index till the end and it ignores the value present at the index -2.
console.log("slice()")
let str4="Welcome to JAvaScript"
console.log(str4.slice(3,21))
console.log(str4.slice(-3))
//==========================================================================
//replace()
// when we want to replace a particular string with new string we use replace method().
console.log("replace()")
let str5="Welcome to JavaScript"
console.log(str5.replace("JavaScript","JS"))
console.log(str5.replaceAll("Welcome","hello Welcome"))
//===========================================================================
//replaceAll()
//to replace all the occurence which new string we can't use replace() rather we should use replaceAll() method.
console.log("replaceAll()")
let str7="Welcome to JavaScript, Welcome to JS"
console.log(str7.replaceAll("Welcome","hello Welcome"))
//trim()
//inorder to remove the whitespaces from the string we use trim() will remove only whitrspaces before and after the string and it won't remove the whitespaces present between the strings.
console.log("trim():")
let str6="  welcome to JS  "
console.log(str6.trimStart())
console.log(str6.trimEnd())
//===========================================================================
//Concat()
// it is used to concat two string.
console.log("Concat()")
strr1="hello"
strr2="world"
console.log(strr1.concat(" ",strr2))
