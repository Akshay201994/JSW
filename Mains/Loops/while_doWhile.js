/* while syntax

while (condition) {
    
}
Here we need to provide initial value along with condition and stopping value as well

// print table from 1 to 5 using while loop

let i=1
while(i<=5){
    console.log(`Table of ${i} is`)
    let j=1
    while(j<=10){
        console.log(`${i}*${j}=${i*j}`)
        j++;
    }
    i++;
}

// Do-while loop is used when first work will be done, then condition will be checked.

General syntax for do-while loop

do {
    
} while (condition);

let i=1;
do{
    console.log(`value of i is ${i}`)
    i++;
}while(i<=5)

// now if we change condition to something which is false, still statement within do block will run atleast 1 time as condition will be checked after that.

let i=1
do{
    console.log(`value of i is ${i}`)
    i++
}while(i<0);*/