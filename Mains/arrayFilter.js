/* ****************************************************** Array Filter **********************************

The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.

Syntax
filter(callbackFn)
filter(callbackFn, thisArg)


let mySuperheroes=['Ironman','Superman','Spiderman','flash','Shaktiman']

const newSuperheroes=mySuperheroes.filter((hero)=>{
    return hero.length>=8;
})
console.log(newSuperheroes);

let num=[213,434,54590,349,12,5,3,8,909,4758]
console.log(num.filter((newNum)=>newNum<=100));

Q- Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const num=[23,1,3,4,2,0,-4,-6,45]
const newNum=num.filter((numm)=>{
    return numm>=5
})
console.log(newNum);

Q- Given an array of numbers, return a new array that only includes the even numbers.

const num=[2,3,24,5,56,7,78,9,90]
const newNum=num.filter((evn)=>{
    return evn%2==0;
})
console.log(newNum);

Q- Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length


const fName=['Akshay','bose','Ram','Rahul','Rohit','akjkjckjsk']
const newName=fName.filter((shortName)=>{
    return shortName.length<=5;
})
console.log(newName);

Q- Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


const stars=[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const members=stars.filter((validMember)=>{
    return validMember.member===true;
})
console.log(members);

Q- Make a filtered list of all the people who are old enough to see The Matrix (older than 18)


const age=[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const allowedMembers=age.filter((ag)=>{
    return ag.age>=18
})
console.log(allowedMembers);

*/
const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

//Q1- Get characters with mass greater than 100.

const characMass=characters.filter((charac)=>{
    return charac.mass>100;
})
// console.log(characMass);

//Q2- Get characters with height less than 200

const characHeight=characters.filter((char)=>{
    return char.height<200;
})
//console.log(characHeight);

//Q3. Get all male characters

const charMale=characters.filter((gen)=>{
    return gen.gender=='male';
})
//console.log(charMale);

//Q4. Get all female characters

const charFemale=characters.filter((g)=>{
    return g.gender=='female';
})

console.log(charFemale);