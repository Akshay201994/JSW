/*
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
If a variable or expression is not in the current scope, it will not be available for use. 
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

There are 3 types of Scope in JS:
Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.

In addition, variables declared with let or const can belong to an additional scope:

Block scope: The scope created with a pair of curly braces {} (a block). 

var a=10
b=20
let c=30
const d=40

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Above variables comes under Global scope and can be accessed within script/

Now lets have above declared values within a Scope and print them outside scope{}.

if(true){
    var a=10;
    b=20;
    let c=30;
    const d=40;
    console.log(c);
    console.log(d); 
}
// console.log(a);
// console.log(b);
// console.log(c); Here we will get error that c is not defined as we declared c within block scope and it is defined within that scope only.
// console.log(d); Here as well its defined within scope and not outside scope , so we need to pass this statement within scope.



Lets understand scope in nesting for functions and conditions where we will learn that child scope can have access to parent scope
but parent scope cant have access to child scope.

// Function

function one(){
    const username='Akshay'

    function two(){
        const website='google'
        console.log(username);
    }
    console.log(website);

    two()

}
one();

function add(a,b){
    console.log(a+b);

    function mul(x,y){
        let mName="Akshay";
        console.log(x*y);
    }
    //console.log(mName); // Since this is out of scope, thats why mName will be not defined.

    mul(3,4);  // This will work as mul() function is child of parent function add() and will work.
}
add(3,4);*/

// if-else

let a=2;
let b=4;
if(a<b){
    let a=4;
    let b=4;
    console.log(`a is smaller than b`)
    if(a==b){
        console.log(`a is equal to b`)
    }
}
else{
    console.log(`b is smaller than a`);
}