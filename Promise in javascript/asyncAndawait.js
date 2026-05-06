// async :- declare a function or method as asynchronous and can pause its execution to wait for completion of other process. 
// await :- make a suspension point where execution may wait for the result of async function or methods

async function fun1(){
    //fetch the data from url
    let response = await fetch('https://fakestoreapi.com/products/1');
    //convert the response to json
    let jsonData = await response.json();
    // log the json data
    console.log(jsonData);
    //you can also assign json data to a variable if you want to use it later
    let result = jsonData;
    //log the result
    console.log(result);}
    //call the async function
    fun1();