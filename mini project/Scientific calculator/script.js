const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function squareRoot(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function power(){
    try{
        display.value = Math.pow(eval(display.value),2);
    }
    catch{
        display.value = "Error";
    }
}

function sin(){
    try{
        display.value = Math.sin(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function cos(){
    try{
        display.value = Math.cos(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function tan(){
    try{
        display.value = Math.tan(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function log(){
    try{
        display.value = Math.log10(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function ln(){
    try{
        display.value = Math.log(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function factorial(){
    let num = eval(display.value);

    if(num < 0){
        display.value = "Error";
        return;
    }

    let fact = 1;

    for(let i = 1; i <= num; i++){
        fact *= i;
    }

    display.value = fact;
}