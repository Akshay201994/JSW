// Basically Datatypes are of 2 types-> Primitive and Non Primitive. We can say these 2 types decides How we data is stored and can be accessed from our memory.

// Javascript is Dynamically typed language as we dont define data type while declaring variable.

/* 1. Primitive(these are call by value. basically reference of variable is provided that we store and not the original)
 7 types:

 - String
 console.log("Akshay")
 - Number
 console.log(21)
 - Null
 let a=null;
 console.log(a)
 - Boolean
 isActive=true;
 console.log(isActive)
 - Symbol (used to create any value special/unique)
 let a=symbol(123)
 let b=symbol(123)

-- Here we have added same value 123 but values will be different as symbol have change the, to a unique value.

 - Undefined
 let a =undefined;
 console.log(a)

 - BigInt
 let a=32892882948923492482849284928n
 console.log(a)
*/

/* 2. Reference Type - Also known as Non Primitive Data Type.

- Array
let myDestinations=['Malan','Kolkata','Mandarmani','Lakshadweep']
- Objects
let myProfile={
    Name:"Akshay",
    Age:29,
    Followers:280,
    Following:100
}
- Functions
function myFunction(){
    //my code
}
*/

/* Now lets understand how to get type of our data type.

to get type of our datatype, we can simply execute typeOf "Akshay"/or any value/variable.

lets try it for all datatypes we discussed above
*/

let str="Akshay";
let num=29;
isActive=true;
let bigNum=2392838n;
let val=null;
let ud;
let userName=Symbol('erty123');
let myLocations=['Andaman','Lakshadweep','Mandarmani','malana','Tosh'];
let myProfile={
    Name:'Akshay',
    Age:29,
    Followers:290,
    Following:100
}
function sayHello(){
    console.log("Hello Earth");
}

// We created variables using all above discussed data types. Now lets use typeOf to check their return type.
//                         Return Type     
console.log(typeof str); //String
console.log(typeof num); //Number
console.log(typeof isActive); //boolean
console.log(typeof bigNum); //bigint
console.log(typeof val); //object
console.log(typeof ud); //undefined
console.log(typeof userName); //symbol
console.log(typeof myLocations); //object
console.log(typeof myProfile); //object
console.log(typeof sayHello); //function