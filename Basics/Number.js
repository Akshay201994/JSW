/*
const a=90;
console.log(a); // We have declared a constant a and assigned it value 90

const a=new Number(900); // Here we have declared a variable and assigned a Datatype to it with Number. Number will be stored as an object here.
console.log(a);



// Number methods

const num=800;
console.log(num.toString()); // Here we have applied toString method to set our Number as a String value. Now we can apply string methods here as well


 const num=100;
 console.log(num.toFixed(2)); // Here we can set decimal values to a number and add how decimal digits we want in our number within ()
 const num1=100.6789;
 console.log(num1.toFixed(2)); // O/p-> 100.68(round off)

≈

// toPrecision() To get precise value after rounding off. Here it will start counting from first character, so we need to take care while adding precision value in our() and it should be after decimal point
// Also it returns value in String type.
const a=100.7808;
const b=23.5689;
console.log(a.toPrecision(3));
console.log(b.toPrecision(3));


// toLocaleString- to get comas(,) within our number to make it more readable.

let a=1000000;
console.log(a.toLocaleString()); // It will give 1,000,000 as O/p. It will take number in US standard so will add commas accordingly.
//If we want to add commas(,) in Indian way, we can pass 'en-IN' within our method parenthesis()
let b=1000000;
console.log(b.toLocaleString('en-IN')); // Here O/p will be 10,00,000

*********** We can check more number methods in MDN refference and using browser console to see prototypes. **************

********************************************* Maths ******************************************************

console.log(Math.abs(-56)); // Math.abs() will give absolute result, means it will change any negative number to a positive number.
console.log(Math.round(1.29)); // Round off basically round off a decimal number to a whole number based on first decimal value, if its < 5 then will give floor value otherwise ceil value.
console.log(Math.round(1.69)); // will give 2 as first decimal value is > 5.
console.log(Math.ceil(1.29)); // Even thou first decimal value is less than 5, still it will give 2 as O/p as ceil method round of number to next larger number.
console.log(Math.floor(1.9)); // Even thou first decimal digit is 9 which is greater than 5 and after round off it should be 2, but still it will give 1 due to floor method as it takes low value.
console.log(Math.min(2,4,5,6)); //Math.min() gives lowest digit of all the numbers givem=n.
console.log(Math.max(2,4,5,6,1)); //Math.max() will give largest number of all numbers given.

// Random method

console.log(Math.random()); // Random method gives any value between 0 and 1. Note It can be 0 as well.

// Now if we need to have random number between 1 and 10. What we will do?

let min=1; //We have min range 1 and max range 10 and we need to have random number between 1 to 10.
let max=10;
// first we will multiply our random number to 10 so we will get number greater than 1. But if we have 
// any random number having 0s in first 2 decimal placed, then we will get 0 only. So to be on safe side, we will add that number with 1 as well.
console.log(Math.floor(Math.random()*10)+1); // To remove decimals, we can add Math.floor() method.



// Now we have to print any random number between 10 and 20. create a code using random method.

let min=10;
let max=20;

console.log(Math.floor(Math.random()*10)+min);// This will give our number between 10 and 20.

*/