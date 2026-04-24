//Selection Statements or Control Statements
// we  can control the excecution of the program using control or selection statements.we can execute a block of code based on a condition.
//1.if statement
//2.if else statement
//3.nested if statement
//4.else if ladder
function greet(messeges){
    if (messeges=="gm"){
        console.log("Good Morning");
    }
    else if(messeges=="ga"){
        console.log("Good Afternoon");
    }
    else if(messeges=="ge"){
        console.log("Good Evening");
    }
    else if(messeges=="gn"){
        console.log("Good night");
    }
    else{
        console.log("Invalid Massege");
}
}
greet("gm")
greet("GA".toLowerCase())