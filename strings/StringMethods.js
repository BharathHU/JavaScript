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

console.log("slice()")
let str4="Welcome to JAvaScript"
console.log(str4.slice(3,21))
console.log(str4.slice(-3))
//==========================================================================
//replace()
console.log("replace()")
let str5="Welcome to JavaScript"
console.log(str5.replace("JavaScript","JS"))
