/* Usually in Javascript, we can change data type by adding datatype(value)

let a='43' // Here we have created a variable a and added a number but within '' to make it a string value.
console.log(a);
console.log(typeof a) // If we will print our variable a, it will give output 43 only but when we will check type of our variable a, then it will give us string as we have added it within ''


// Now lets convert above data type to number.

// a=Number(a);
// console.log(a);
// console.log(typeof a);

// lets try to convert some more data types

isActive=true;
console.log(typeof isActive); // Lets change this DT to number. 

isActive=true;
let a=Number(isActive);
console.log(typeof a,a); // So we can see if we change isActive to Number where value is true, then o/p will be 1. Similarly, we will get o/p 0 if boolean value is False.

let str=''
console.log(typeof str,str); // Here type is string and value will be nothing as we created an empty string.


// Now lets try to convert an empty string to boolean data type.

let str='';
let b=Boolean(str);
console.log(typeof b,b); // So we can see boolean value of empty string is False.



let str='Akshay';
let b=Boolean(str);
console.log(typeof b,b); // Here we can see boolean value is True when we are adding any value in our string.

*/