var obj1={
    c:300
}
var obj2={
    c:100
}
function add (a,b){
    console.log(a+b+this.c)
}
add.apply(obj1,[300,500])
add.apply(obj2,[100,100])