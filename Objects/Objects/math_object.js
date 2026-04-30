// math is an inbuild object in JS which can be used to perform some specific math operation


console.log(Math.PI) // print value of PI
console.log(Math.sqrt(16)) // print the square root of num
console.log(Math.pow(2, 3)) // print the power of power
console.log(Math.round(4.6)) // round the nearest number
console.log(Math.trunc(4.6)) // floor it to nearest integer value and remove the decimal part
console.log(Math.sign(-5)) // if the number is positive it will return 1, if the number is negative it will return -1 and if the number is 0 it will return 0
console.log(Math.sign(1773)) // print the number is negative or positive
console.log(Math.random()) // print the random number


//generate random number between 1 to 6
console.log(Math.floor(Math.random() * 6) + 1) 

//generate random number between 1 to 100
console.log(Math.floor(Math.random() * 100) + 1)

//generate random number between 1 to 50 using trunc
console.log(Math.trunc(Math.random() * 50) + 1)
