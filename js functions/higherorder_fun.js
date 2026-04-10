function operate(a, b, operation){
    return operation(a, b)
}
function add(x, y){
    return x + y
}
console.log(operate(10, 5, add))