//  A synchronous function is one that runs in a single thread and completes its execution before moving on to the next Task.
//  apply it block other operation untill the current task is completed.TaskControllersynchronous programming means code execute line by line,
// that is one task at a time and each line waits for the previous line to complete beore executing. 
// ==================================================================================================
// only one operation happen at a Time.
// no parallel execution allowed
//  if any task takes time to complete, it will block the entire program untill that task is finished.

console.log("Start")
function demo(){
    console.log("Demo function is running!!!")

}
demo()
console.log("End")