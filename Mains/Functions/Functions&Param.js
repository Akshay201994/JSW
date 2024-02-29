/*
//Add Function

function addF(a,b){
    console.log(a+b);
}

addF(2,7);

// Values within parenthesis(a,b) when we are defining a fucntion are knows as Parameters.
// Values within parenthesis(2,7) when we are calling a fucntion to get output are known as arguments.

Generally, if we will try to store above function in a variable and will try to print result, we wont be getting desired output.

function addFirstMethod(a,b) {
    console.log(a+b);
}

//addFirstMethod(2,3); //This will work but if we will store this function within a variable, we will get error.

let result=addFirstMethod(2,3);
console.log(result); // Here we will get undefined as result as we have just printed the output in function we defined but have not returned the v alue.

// Lets create a function and return our value this time so that we can store it later on.

//First way where we can store our o/p in a variable.
function mulSecondWay(a,b) {
    let result=a*b;
    return result;
    //sdskkskkc.      // NOTE- Anything written after return will not be valid and will not executed.
}

let result=mulSecondWay(3,4);
console.log(result);

//Second way to use return is just directly using it without creating any variable within our function.

function mulThirdWay(a,b) {
    return a*b;
}
const result=mulThirdWay(34,2);
console.log(result);


// Create a welcome message when user logged in

function userWelcome(username) {
    return `Hi ${username}. Hope You have a great Day.`
}

let userN=prompt("Please Enter your Name");
console.log(userWelcome(userN));

// Now lets see what if user dont pass any input. We will get undefined. We need to fix that issue.

function userWelcome(username) {
    if(username===undefined  //Also can be written as if(!username)){
        return `Please enter a Username`;
    }
    return `Hi ${username}. Hope You have a great Day.`
}

const greet=userWelcome('Akshay');
console.log(greet);           // This code will help to handle error as well when there is no input passed.

// Use of rest operator(...) when we have to pass multiple arguments and dont know about the quantity, like shopping cart

//Take multiple values into cart and add them to get total amount.

function cartAdd(...val1){
    return val1;
}
const cartValue=cartAdd(200,300,400,500,1000)
let totalValue=0;
for(value of cartValue){
    totalValue += value;
}
console.log(totalValue);

//Use of functions in object

let myProfile={
    Name:'Akshay',
    Age:29,
    followers:299
}

function profile(anyObject){
    console.log(`Name of User is ${anyObject.Name}. His Age is ${anyObject.Age}. User ${anyObject.Name} is having ${anyObject.followers} followers.`)
}

profile(myProfile);

// Use of function in Arrays

let myArray=[100,200,300,400];
function arr(getArray){
    console.log(getArray[2]);
}
 arr(myArray);
 function cartPrices(...val1){
    return val1;
 }

 let totalCartValue=cartPrices(100,200,300,500,1000);
 let totalValue=0;
 for(value of totalCartValue){
    totalValue += value
 }
 console.log(totalValue); */