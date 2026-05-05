//for this function first arguement should be always object for which this is referred. second arguement is functions accepting arguement


var obj1={
    c:100
}
var obj2={
    c:500
}
function add(x,y){
    console.log(x+y+this.c);
}

add.call(obj1,10,20);
add.call(obj2,10,20);