// # Asynchronous programming in js is a non-blocking execution model where long running task can be executed in the 
// background without blocking the main thread.means other operation can continue to run.
// # Asynchronous programming is used with long-running tasks like network requests,file operations Timers,etc

// Node:
// # in js Asynchronous programming execution take care by the event loop
// # event loop is part of the js runtime environment

console.log("Start")
function demo(){
    setTimeout(function(){
        console.log("Demo function is running")
    },2000);
}
demo();
console.log("End")