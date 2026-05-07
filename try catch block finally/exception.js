// whenever we feel some part of code may cause prblm we must enclose the part of code with the try.
// * so if any pblm occuerse try is designed in such a way that it throws the exception object outside which
// later will be caught by the catch() by using try-catch syntax we can avoid our progs getting terminated abruptly.
// Syntax:
// try{
//     code
// }
// catch(err){
//     to catch the error expression
// }

try{
    var num=20;
    fname="Bharath"
    age=22
    console.log('num'/num)
    console.log(fname)
    console.log(age)
}
catch(err){
    console.log(err)
}
finally{
    console.log("Finally excecuted")
}