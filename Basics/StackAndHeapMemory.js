/* We have 2 kind of memories in JavaScript
1. Stack Memory
2. Heap Memory

1. Stack Memory is a type of memory where if we define a variable and assign it some value. Later we try to make some update
in our value, then we will get a copy of the variable created and changes will be made there. All Primitive Data types gets stored
in Stack Memory.

So here we create a variable and store a name:

let fullName='Akshay'
Now lets create another variable and store our first variable there.
let otherName=fullName;

Here if we will print otherName, it will print fullName only.
Now lets make change to our second created variable.

otherName='Akshay Verma'

now lets print otherName--> We will get updated name 'Akshay Verma'

But if we will print original variable fullName, then it will print original value only and not the updated one.

* Its because changes happened in copy of our original variable and not with the original one, so original value will remain intact.



let fullName="Akshay"
let otherName=fullName;
otherName="Akshay Verma";
console.log(fullName); // Original
console.log(otherName); // Copy

*/

/*
2. Heap memory- Heap memory is a memory where if we make changes to our data, then it will get reference of original data
All changes made will happen on Original value only and no copy is created here unlike stack memory.
All Non-Primitive Data Types are stored in Heap memory.

Lets understand by creating an object which comes under Non-Primitive Data type.

let myProfile={
    Name:'AKshay',
    Age:29,
    userName:'kushpuffmusic',
    Followers:250
}

let updatedProfile=myProfile;

console.log(updatedProfile);
updatedProfile.Name='Akshay Verma';
console.log(updatedProfile); // Here we can see Name is updated to new name in our second created object.
console.log(myProfile); // changes occured in original object as well as it comes under heap memory. where no matter how many
// new objects we create but it will always make changes to original object and will take reference from original object only.



let myOldProfile={
    Name:'Akshay',
    Age:29
}
//console.log(myOldProfile);
let myNewProfile=myOldProfile;
//console.log(myNewProfile);
myNewProfile['Name']='Akshay Verma';
//console.log(myNewProfile);
//console.log(myOldProfile);

// To add key/value pair to our object, we will first declare our key and then assign it a value like below.

const bKey='isSingle';
myNewProfile[bKey]=true;
console.log(myNewProfile);

// Another way is by using Spread operator.
const myNeuProfile={...myNewProfile,'Followers':230};
console.log(myNeuProfile);

*/