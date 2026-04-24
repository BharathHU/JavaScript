function switchCase(value){
    switch(value){
        case "gm":{
            console.log("Good Morning")
            break;
        }
        case "ga":{
            console.log("Good Afternoon")
            break;
        }
        case "ge":{
            console.log("Good Evening")
            break;
        }
    }
}
switchCase("gm")
switchCase("GA".toLowerCase())