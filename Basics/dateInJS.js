/*
let todayDate=new Date();  //2024-02-08T06:29:09.358Z
console.log(todayDate); // By default, we can get current date like this but it will be not in a readable way for some parameters.

//so lets convert our date to a string.

console.log(todayDate.toString()); // Thu Feb 08 2024 06:30:29 GMT+0000 (Coordinated Universal Time) Now its more in readable form

// Now lets try some more methods

let todayDate=new Date();
console.log(todayDate.toDateString()); // Thu Feb 08 2024 By using toDateString, we can get date in format day month date year

console.log(todayDate.toLocaleString());

// Type of Date

console.log(typeof todayDate); // Date data type is an Object.

// Now we need to add our date
let todayDate=new Date(2024,1,8,19,19); // We can add our date where format is (yyyy,month(with 0 as jan),date,time)
console.log(todayDate.toLocaleString());


// Date in other format

let decidedDate=new Date("2023-01-08"); // YYYY-MM-DD
console.log(decidedDate.toString());
let newDate=new Date("01-08-2023"); // mm-dd-yyyy
console.log(newDate.toString());



// To get Time stamp

let timeStamp=Date.now();
console.log(currentTime);  // This will give time in milisecond from 1/1/1970, wo we can convert it.

// To get value in seconds.

console.log(Math.floor(currentTime/1000));



let newDate=new Date(1994,4,20,20);
let birthMonth=newDate.getMonth();
let birthDay=newDate.getDay();
// console.log(newDate.toString());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// Now we want month in Jan,feb.. instead of numbers and day in mon,tue...
let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(`I was born on ${newDate.getDate()}th of ${month[birthMonth]} on ${day[birthDay]} at ${newDate.getHours()}Hrs.`);
console.log(`I was born on ${newDate.toLocaleString()}`); 

// Print your birth month where month and day should be by their names.

let myBirthDay=new Date(1994,4,20,20,0)
let months=['January','February','March','April','May','June','July','August','September','October','November','December']
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//console.log(`I was born on ${myBirthDay.toLocaleString()}`);
console.log(`I was born on ${myBirthDay.getDate()}th of ${months[myBirthDay.getMonth()]} on ${days[myBirthDay.getDay()]} at ${myBirthDay.getTimezoneOffset()}`);

*/