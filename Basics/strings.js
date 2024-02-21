/* Lets understand Strings and some string methods which we can use.
MDN reff link- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

Strings are pieces of texts that should be written within quotes('',"",``). 

We should always write these codes within above shown quotes as line without quotes will be interpreted as a 
variable name, property name, reserved word, or similar.

We can write our strings in single quotes('...'), double quotes("...") and back ticks(`...`)

string written within back ticks `` are known as template literals. These have special type of properties.

Using back tick `` to write our string is recommended as its cleaner when compare to other quotes.

inside template liter, we can print our variable as. well by adding placeholder `${variable}`.

let a=3
let b=2
console.log(`Sum of ${a} and ${b} is ${a+b}.`)

we can join strings as well.
let a="Hi";
let b="Yo";
console.log(a+b); // it will give Hi Yo. Basically it will merge both strings on adding.

we can add multiline strings in 2 ways.

1. using back ticks `` by just entering and writing on a new line

console.log(`Hi My Name is
Akshay`);

2. by using escape character \n if we are writing our string within quotes ""

console.log("Hi My Name is \n Akshay");
console.log('Hi My name is \n Akshay');

* If we have started our string with single quote, then we need to make sure we dont add single quote within our string to
mention anything. Instead we should use doublw quote "". Same goes vice versa.

If you have a numeric variable that you want to convert to a string or a string variable that you want to convert to a number, 
you can use the following two constructs:

The Number() function converts anything passed to it into a number if it can.

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number


Conversely, the String() function converts its argument to a string. 

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

These constructs can be really useful in some situations. For example, if a user enters a number into a form's text field, 
it's a string. However, if you want to add this number to something, you'll need it to be a number, so you could pass it 
through Number() to handle this.

*/