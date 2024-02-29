/*
Basic syntax --> for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
} 

// get first 20 numbers(0-20)

for(i=0;i<=20;i++){
    console.log(i);
}

// now create code to print table from 1 to 20.

for(i=1;i<=20;i++){
    console.log(`Table of ${i} is below:`)
    for(j=1;j<=10;j++){
        console.log(`${i} * ${j}=${i*j}`)
    }
}

// take number from 1 to 10 and add each number from 1 to 10.
for(i=1;i<=10;i++){
    console.log(`Result for number ${i} is:`)
    for(j=1;j<=10;j++){
        console.log(`${i} + ${j}=${i+j}`)
    }
}

Use of break and continue keywords


// break keyword is used when we want to end the code at some point even if there are few piece of codes that are 
// there to run after that code.

//create a code to print table from 1 to 5

for(i=1;i<=5;i++){
    console.log(`Table of ${i} is:`)
    for(j=1;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}

// Now end the table as soon it reaches 5.

for(i=1;i<=10;i++){
    if(i==6){
        break;
    }
    console.log(`Table of ${i} is:`)
    for(j=1;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}

// continue keyword is used to skip a specific event\value

// now skip table of 5 from 1 to 10

for(i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(`Table of ${i} is:`)
    for(j=1;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}
*/