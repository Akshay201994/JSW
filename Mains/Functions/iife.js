/*
Immediate Invoked Function Expressions(IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
The name IIFE is promoted by Ben Alman in his blog.

general expression

((){})() 
(function add(a,b){
    console.log(a+b);
})()                    // using this way, we can immediately invoke our function.

// to pass arguments, we can pass it normally like we do while calling function by providing arguments within second ().


(function add(a,b){
    console.log(a+b);
})(2,3);

// Now lets create another iife and run both at once.

(function mul(x,y){
    console.log(x*y);
})(2,3)             // This will not run as we have not ended our first created iife with ';'. We need to end it in order to run both iife.



// Using iife for arrow function.

((a,b)=>{
    console.log(a+b);
})(2,3) 

// Creating an object in function

let a=()=>({UserName:'Akshay'})
console.log(a());

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

Because our application could include many functions and global variables from different source files, 
it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, 
we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function a(){              // This is a named function as we have given it a name-a
    console.log('Hey')
})();                       // When writing 2 iife. functions, we need to end first function by (;), other wise we will get error.

(()=>{                      // This is not a named function as we haven't given any name to our created function
    console.log('Hi');
})()

Now how to pass arguments and parameter when using iife function.

((a,b)=>{console.log(a+b)})(2,3);

*/