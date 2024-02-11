/*
Q1. Q1. Get user to input a number using prompt("Enter a Number:"). Check if number is a multiple of 5 or not? 


const userAsk=prompt(`Enter a number: `);
    if (!isNaN(userAsk) && userAsk !== '' && userAsk !== null) {
        let number = parseFloat(userAsk);
if(userAsk%5==0){
    console.log(`Your number ${userAsk} is a multiple of 5.`);
}
else if(userAsk%5!==0){
    console.log(`Your number ${userAsk} is not a multiple of 5.`);
}
}
else
{
    console.log(`Please enter a valid input.`)
}

console.log(typeof userAsk);

Q2. Write a code which can give grades to students according to their marks.
- 90-100 (A)
- 70-89 (B)
- 60-69 (C)
- 50-59 (D)
- 0-49 (F)


let userMarks=prompt(`Please enter your marks. (0-100): `)
if(userMarks >= 0 && userMarks <= 49){
    console.log(`Your grade is F. Marks-${userMarks}`);
}
else if(userMarks >= 50 && userMarks <= 59){
    console.log(`Your grade is D. Marks-${userMarks}`);
}
else if(userMarks >= 60 && userMarks <= 69){
    console.log(`Your grade is C. Marks-${userMarks}`);
}
else if(userMarks >= 70 && userMarks <= 89){
    console.log(`Your grade is B. Marks-${userMarks}`);
}
else if(userMarks >= 90 && userMarks <= 100){
    console.log(`Your grade is A. Marks-${userMarks}`);
}
else{
    console.log(`Please enter valid marks.`);
}

Q3. Finds the largest between two number by using “>” and “=” operator in JavaScript. 


let userNum1=prompt(`Please enter number 1 :`)
let userNum2=prompt(`Please enter number 2 :`)
if(userNum1>userNum2){
    console.log(`Number 1 ${userNum1} is largest.`)
}
else if(userNum2>userNum1){
    console.log(`Number 2 ${userNum2} is largest.`)
}
else{
    console.log(`Both Numbers are equal.`)
}

Q4. Write a JS code to print numbers from 1 to 10 using for and while loop. 

// for loop
for (let i=1;i<=10;i++){
    console.log(i);
} 

//while loop

let i=1;
while(i<=10){
    console.log(i);
    i++;
} 

Q5. Print Odd numbers between 7 to 31 using For and While.

//For loop
for(i=7;i<=31;i++){
    if(i%2!==0){
    console.log(i);
}
} 

//While loop
let i=7;
while(i<=31){
    if(i%2!==0){
    console.log(i);
}
    i++;
} 

Q6. Print Even numbers from 12 to 20 

//for loop
for(i=12;i<=20;i++){
    if(i%2==0){
    console.log(i);
}
}


//while loop
let i=12;
while(i<=20){
    if(i%2==0){
    console.log(i);
}
    i++;
} 

Q7. Iterate through all numbers from 1 to 45. Print the following:

For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz” 


for(i=1;i<=45;i++){
    if(i%3==0 && i%5==0){
        console.log(`FizzBuzz`)
    }
    else if(i%3==0){
        console.log(`Fizz`);
    }
    else if(i%5==0){
        console.log(`Buzz`);
    }
    else{console.log(i);}
}

Q8. You have a string str="Akshay". Print all characters of this string. 

let myFName=`Akshay`;
for(char of myFName){
    console.log(char);
}
//For
let myFName="Akshay";
for(i=0;i<myFName.length;i++){
   console.log(myFName[i]);
}

Q9. Lets improvise above ask. create prompt for user to add their name and print their name letter along with indexes.

let userName=prompt(`Please Enter your name: `)
let idx=0;
for(i of userName){
    console.log(`index for char ${i} is ${idx}.`);
    idx++;
} 

Q10. Print all the elements of the following array 
var thisIsAnArray = ["element1", "element2", "element3", "element4"]; 


let thisIsAnArray = ["element1", "element2", "element3", "element4"]; 
for(i of thisIsAnArray){
    console.log(i);
}

Q11. Use For-in to get key and values of a product(anything) 


const iphone12={
    Name:'iphone12',
    color:'black',
    price:12000,
    offer:20
}
for(i in iphone12){
    console.log(`key is ${i} and value is ${iphone12[i]}`);
}

Q12. Create a game where you give any random number. Ask user to guess a number untill user pick matches my number.


let randNum=22;
let userNum=prompt('Please enter a number: ');
while(randNum!=userNum){
    userNum=prompt(`Your guess is wrong. Please try again.`)
}
console.log(`You Won. Your number is lucky number ${userNum}`);

Q13. Find average marks of entire class with marks=[85,97,44,37,76,60] 

let classMarks=[85,97,44,37,76,60];
let totalMarks=0;
//for of
for(marks of classMarks){
    totalMarks += marks;
}
console.log(totalMarks);
let avgMarks=totalMarks/classMarks.length;
console.log(avgMarks);

//for loop

let classMarks=[85,97,44,37,76,60];
let i=0;
let totalMarks=0;
for(i=0;i<classMarks.length;i++){
   totalMarks +=classMarks[i]
}
console.log(`totalMarks is ${totalMarks}`);
let avgMarks=totalMarks/classMarks.length;
console.log(`Average marks id ${avgMarks}`);

//while loop

let classMarks=[85,97,44,37,76,60];
let i=0;
let totalMarks=0;
while(i<classMarks.length){
    totalMarks += classMarks[i];
    i++;
} 
console.log(totalMarks);
let avgMarks=totalMarks/classMarks.length;
console.log(avgMarks);

Q 14.- For a given array with prices of 5 items -> [250,650,300,900,50]
All items have an offer of 10% off.
Change the array to store final price after offer applied. 


//for of

let currentPrice=[250,650,300,900,50];
let i=0
for(price of currentPrice){
    let offer=price/10;
    currentPrice[i] -= offer;
    i++;
}
console.log(currentPrice);

//for loop

let currentPrice=[250,650,300,900,50];
for(i=0;i<currentPrice.length;i++){
    let offer=currentPrice[i]/10;
    currentPrice[i] -= offer;
}
console.log(currentPrice);



//while loop

let currentPrice=[250,650,300,900,50];
let i=0;
while(i<currentPrice.length){
    //console.log(currentPrice[i]);
    let offer=currentPrice[i]/10;
    //console.log(offer);
    currentPrice[i] -= offer;
    i++;
}
console.log(currentPrice);

Q 15. We have below employee salaries. There is an yearly hike of 10% for each employee. 
Create a program where there is an increment of 10% for every empSalary and then update the new salary in below array.


//for of loop
let empSalary=[10000,20000,10000,30000,20000,25000];
let i=0;
for(salary of empSalary){
    //console.log(salary);
    let increment=(10*salary)/100;
    //console.log(increment);
    empSalary[i] += increment;
    i++
}

// for loop

let empSalary=[10000,20000,10000,30000,20000,25000];
for(i=0;i<empSalary.length;i++){
    //console.log(empSalary[i]);
    let increment= (10*empSalary[i])/100;
    //console.log(increment)
    empSalary[i] += increment;
}
console.log(empSalary);
console.log(empSalary)


//while loop

let empSalary=[10000,20000,10000,30000,20000,25000];
let i=0;
while(i<empSalary.length){
    //console.log(empSalary[i]);
    let increment=(10*empSalary[i])/100;
    //console.log(increment);
    empSalary[i] += increment;
    i++;
}
console.log(empSalary);

Q 16- Create an array to store companies -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix.
- Remove first company from array. 
- Remove Uber and add Ola in its place. 
- Add amazon at the end. 


const companies=['Bloomberg', 'Microsoft', 'Uber', 'Google','IBM', 'Netflix']
//1. Remove first company from array.
// companies.shift();
// console.log(companies);
//2. Remove Uber and add Ola in its place.
// companies.splice(2,1,'Ola');
// console.log(companies);
//3. Add amazon at the end
companies.push('amazon');
console.log(companies);


*/ 

