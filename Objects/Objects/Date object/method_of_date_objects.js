var date = new Date() // create a new date object with the current date and time
console.log(date)
//methods of data objects
//1. getDate() method is used to get the current date
var currentDate = date.getDate()
console.log(currentDate) // print the current date

//2. getMonth() method is used to get the current month (note month always strats with 0)
var currentMonth = date.getMonth()
console.log(currentMonth) // print the current month

//3. getDay() method is used to get the current day of the week
var currentDay = date.getDay()
console.log(currentDay) // print the current day of the week

//4. getFullYear() method is used to get the current year
var currentYear = date.getFullYear()
console.log(currentYear) // print the current year

//5. getHours() method is used to get the current hours
var currentHours = date.getHours()
console.log(currentHours) // print the current hours

//6. getMinutes() method is used to get the current minutes
var currentMinutes = date.getMinutes()
console.log(currentMinutes) // print the current minutes

//7. getSeconds() method is used to get the current seconds
var currentSeconds = date.getSeconds()
console.log(currentSeconds) // print the current seconds