/* Basically used for arrays,strings,objects

General Syntax 
for (const iterator of object(array/object/string)) {
    
}

// lets try with array

let arr=[1,123,324,5454,8989]
let i=0
for(const num of arr){
    console.log(`value at index ${i} is ${num}.`)
    i++;
}


// lets try with string

const myName='Akshay Verma';
let i=0;
for(letter of myName){
    if(letter==" "){
        continue;
    }
    console.log(`letter at index ${i} is ${letter}`)
    i++;
}

// write code to run your whole name 2 times but second time it should be only your first name

let myName='Akshay Verma'
for(i=0;i<myName.length;i++){
    if(myName[i]==" "){
        continue;
    }
    console.log(myName[i].repeat(2));
}


// ***** MAP ***** Now lets create a map for our profile and print key and values using for of loop

const myProfile=new Map()
myProfile.set('Name','Akshay Verma')
myProfile.set('Age',29)
myProfile.set('Followers',290)

for(const [key,value] of myProfile){
    console.log(`Value for ${key} is ${value}`);
}

*/