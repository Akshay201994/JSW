/*
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
All values are truthy unless they are defined as falsy. That is, all values are truthy except 
false, 0, -0, 0n, "", null, undefined, NaN, and document.all.


const fname='Akshay';
if(fname){
    console.log(`userName is ${fname}`)
}
else{
    console.log(`user name not available.`)
}

// here we havent provided any value in our if condition but it is assumed that condition is true since there is some
// value existing in the string. If it would've been empty, then statement would've been considered false as below.


const fname=''; // empty array[] will be a true statement.
if(fname){
    console.log(`userName is ${fname}`)
}
else{
    console.log(`user name not available.`)
}


//check if empty array and empty object length is 0 or npt with if-else condition.

let eA=[]
let eO={}
if(eA.length===0 && Object.keys(eO).length===0){
    console.log(`Array eA and Object eO are empty.`)
}
else{
    console.log(`something is fishy.`)
}
*/