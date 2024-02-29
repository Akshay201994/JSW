/* Use of if,else if and else statements */

let userName='Akshay'
let password='klkl';
if (userName=='Akshay' && password=='oppo'){
    console.log(`User ${userName} logged in`)
}
else if(userName=='Akshay' && password!='oppo'){
    console.log(`Password incorrect. Please try again`)
}
else if(userName!='Akshay'){
    console.log(`Username is incorrect. Please try again.`)
}
else{
    console.log(`Invalid Input.`)
}