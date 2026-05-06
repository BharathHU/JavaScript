// # these are the way to handel the asynchronous operation.are
// # A promise is js object that links producing code and consuming code that represent a value may be available now or in the future or never 

// The promise obj can be in any 3 CustomStateSet
// 1.Pending
// 2.fullfill
// 3.rejected
                              
                            //                      Promise
                            //                         |
                            //                         |
                            // ---------------------------------------------------
                            // |                       |                          |
                            // |                       |                          |
                        // fullfilled               pending                      rejected 
                        //      |                                                   |
                        // resolve()                                             reject()
                        //      |                                                   |
                        //   then()                                                catch()
//user a promise using promise constructor take a function with two parameter reduce reject here the promise will be resolve or it will be rejected

// ***imp // fetch() ---> works as promise entire code pf promise inside fetch() present.
let promDemo = new Promise((resolve, reject) => {
    
    if (false) {
        resolve('promise fulfilled')
    }
    else {
        reject('promise rejected')
    }

})
promDemo
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})

