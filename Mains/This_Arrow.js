/* 

'this' keyword is used to refer current context.

The value of this depends on in which context it appears: function, class, or global.

let userProfile={
    fName:'Akshay',
    age:29,
    desc:function(){
        console.log(`User Name is ${this.fName} and their age is ${this.age}`)
        console.log(this);
    }
}
userProfile.desc();
userProfile.fName='Rahul';
userProfile.age=30;
userProfile.desc();≈

// Arrow Function Basic syntax

()=>{ }

We can store above arrow function within a variable as well. Lets create multiplication function using arrow function.

let mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,3));

// Above we used return keyword. But for 1 line code, we can create function without using curly braces and return keyword.
This is known as implicit return.

let mul=(a,b)=>a*b;
console.log(mul(2,3));

// Above we haven't use any curly braces{} or return keyword, still our created function is working. Its because of implicit return.

Also when we are using curly braces {}, we need to use return keyword, whereas its not required when using round brackets() in one line function codes.



let mul=(a,b)=>{a*b};

console.log(mul(2,3)); // This will give undefined as output as we haven't use return keyword as we are using curly braces {}.

//lets use return keyword now.

let mul=(a,b)=>{return a*b};

console.log(mul(2,3)); // Now it will work

// Also for one line code, we can use round brackets() and here we dont need return keyword.


let mul=(a,b)=>( a*b );

console.log(mul(2,3)); // This will work as well.

* So implicit return is known to be when we dont use return keyword whereas when we use return keyword, its known to be explicit return

*/