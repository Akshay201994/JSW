/* For-in mainly used for Objects as well as arrays. Lets check below 
let myProfile={
    Name:'Akshay Verma',
    Age:29,
    Followers:290
}
for(const profile in myProfile){
    console.log(`${profile} is ${myProfile[profile]}`);
}
*/
// Array

let myHeroes=['Batman','Superman','Flash']
let i=1;
for(const heroes in myHeroes){
    console.log(`my Number ${i} Hero is ${myHeroes[heroes]}`);
    i++
}

// Note** We cant get Map values using For-In loop