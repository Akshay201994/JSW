/************************************************** Objects****************************************************** 

An object is a collection of related data and/or functionality. 
These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

We add data in our objects in key:value form where our key can be termed as a variable and then we can assign it a value.

These key:value pairs in objects are written within curly braces {}

we can create an empty object by creating an object and assigning it with empty curly braces.



let obj={};
console.log(obj); // This is our empty object

// Now lets give some key values to our object

obj={
    Name:"Akshay",
    Age:29
}
console.log(obj);
//We can get value for our specific key by passing key to our object in 2 ways. below are 2 ways.

console.log(obj.Name); // Here we have used (object.key) to get our key
console.log(obj["Age"]); // Here we have use (object['key']) to get our value

*   We need to understand that we have not used ("") for our key while getting value with object.key whereas we have used
    ("") while getting our object while using object["key"]. This is because of JS syntax where it take key as a string when
    adding it within square brackets []

Lets create an object with using all datatypes to understand how we can get value.


let avatar=Symbol(123);

const myProfile ={
    name: "Akshay",         //string
    age: 29,                //Number
    isActive: false,        //Boolean
    followers: null,        //Null
    following: undefined,   //undefined
    notifications: 2n,      //BigInt
    [avatar]: 'av123',  //Symbol.                       // Here we have declared before and then added it in our object by adding symbol varial name within square brackets []
    topFriends: ["Rahul","Anjali","Lakhan"] // Array
}

//console.log(myProfile.avatar); // If we are using our symbol using object.key, then it will give us undefined as output. So we have to use square brackets here.

console.log(`Datatype for ${myProfile[avatar]} is ${typeof(myProfile[avatar])}`);
console.log(myProfile[avatar]);
console.log(myProfile);

* Freezing an Object- As we can change value for our key after we declared aan object. What if there are some keys where we want to freeze their values and dont want any change to happen.
Here we can freeze that key

let avatar=Symbol(123);
const myProfile ={
    name: "Akshay",         //string
    age: 29,                //Number
    isActive: false,        //Boolean
    followers: null,        //Null
    following: undefined,   //undefined
    notifications: 2n,      //BigInt
    [avatar]: 'av123',  //Symbol.                       // Here we have declared before and then added it in our object by adding symbol variable name within square brackets []
    topFriends: ["Rahul","Anjali","Lakhan"] // Array
}
//First lets change value for followers.

myProfile["followers"]=250;
console.log(myProfile);

// Now lets freeze our object as we dont want any further changes to happen to our object properties. We can use object.freeze(objectName) to freeze our object.

Object.freeze(myProfile);

//Now we have freeze our object myPorfile. lets make a change again to our followers and Name key.

myProfile['followers']=300;
myProfile['Name']="Akshay Verma";
console.log(myProfile);  // Here we will get same value before freeze even after updating values for name and followers as freeze wont allow any chnages to occur.

Now lets add a greeting function to our object.


let avatar=Symbol(123);
const myProfile ={
    name: "Akshay",         //string
    age: 29,                //Number
    isActive: false,        //Boolean
    followers: null,        //Null
    following: undefined,   //undefined
    notifications: 2n,      //BigInt
    [avatar]: 'av123',  //Symbol.                       // Here we have declared before and then added it in our object by adding symbol variable name within square brackets []
    topFriends: ["Rahul","Anjali","Lakhan"] // Array
}

myProfile.greeting=function(){
    console.log("Hey Akshay. have a great day.")
}

console.log(myProfile.greeting());

// Now lets create another function where we will use our key as well. We will use this.key instead of objectname.key to get our value as we are using it within our function which is declared with our object name, so it knows which object is being used here,

myProfile.greet=function(){
    console.log(`Hey ${this.name}. Have a Great Day ahead.`)
}

console.log(myProfile.greet()); 

// We can add new key value to our object in below ways.

let myProfile={
    Name:"Akshay",
    Age:29
}


let newKey='Contact'
myProfile[newKey]='844xxx';

let newProfile={
    ...myProfile,Address:'dsdsd'
}
console.log(newProfile); */