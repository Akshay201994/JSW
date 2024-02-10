/*
Objects Constructor -> The Object() constructor turns the input into an object. Its behavior depends on the input's type.

const b=new Object(); // We have created an object using an object constructor sicne we havent passed any value, this will be an empty object.
// Object created with onject constructor is a singleton Object.

const c={} // We can create an object using this way as well.
// Object created abovge is a non singleton object.

// Now lets add key values to our object b created using constructor.

b.Name="Akshay";
b.Age=29;

console.log(b);

Now lets add multilevel objects within an object. Nesting in Objects


const myProfile={
    Name:{
        UserName:{
            firstName:'Akshay',
            lastName:'Verma'
        }
    },
    Age:29,
    Follow:{
        followers:250,
        following:100
    },
    isActive:true
}

console.log(myProfile);

// If we want to access last name and followers key from myProfile object.

console.log(myProfile.Name.UserName.lastName);
console.log(myProfile.Follow.followers);


// Now We want to merge 2 or more objects into 1 object. We can either do it by assign() or spread operator.

const myDetail={
    name:"Akshay",
    age:29,
    dob:'20/09/1994'
}

const myProfile={
    Username:"Kushpuff2094",
    followers:250,
    isActive:true
}

console.log(myDetail)
console.log(myProfile)

// Now we want to merge both myDetail and myProfile objects.

//lets use assign() where we can use Object.assign(target object,source object). Here source object key:values will merge inside target object.
// We can add an empty object as a target object and then add our source objects so we will have a new target object. Also we need to assign it to a new object as it returns the value.

// const myFullDetail=Object.assign({},myDetail,myProfile);
// console.log(myFullDetail);

// Or else we can use spread operator {...obj1,...obj2,... so on} like we used in array which is more easy.

const myFullDetail={...myDetail,...myProfile};
console.log(myFullDetail);

There will be cases when we will get our objects in Array form. So how can we get our data from an object inside an array

//Lets create an array first with objects inside.

const users=[
    {
        id:101,
        Name:"Akshay"
    },
    {
        id:102,
        Name:"Rahul"
    },
    {
        id:103,
        Name:"Priya"
    }
]
//Above we can see an array having multiple objects.Lets get Name for id 102. We can get it first in array form then using object way. arrayName[index of object we want].object key

console.log(users[1].Name);

---** Object Keys and values are stored in form of arrays when we try to access them in form of Object.keys(objectName) or Object.values(objectName)

Lets see it with below examples.


const googleProduct={
    Name:"Google Pixel 6 Pro",
    color:"Whitesand",
    memory:'256GB',
    price:72000
}

console.log(Object.keys(googleProduct));
console.log(Object.values(googleProduct));

- The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const googleProduct={
    Name:"Google Pixel 6 Pro",
    color:"Whitesand",
    memory:'256GB',
    price:72000
}
console.log(Object.entries(googleProduct));


- Sometime, if we have to apply loop on an object having some key value pairs, so to avoid any system crash issue, 
we can check whether our property is present inside our object or not using hasOwnProperty('key'). It will give o/p in boolean form, if its true then we can move ahead with our loop.

const googleProduct={
    Name:"Google Pixel 6 Pro",
    color:"Whitesand",
    memory:'256GB',
    price:72000
}
console.log(googleProduct.hasOwnProperty('memory')); // will give true as memory key is there in our object.
console.log(googleProduct.hasOwnProperty('age')); // will give false as age key is not there in our object.
*/