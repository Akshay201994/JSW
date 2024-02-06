fullName='AkshayVerma'; // Not recommended
var emailId='akshayonkeys@gmail.com'; // Used before modern javascript, but recommended to not use now because of its global scope nature
let contactNo=8447117892; //is recommended in declaring variables as its a block scope where variable cant be re-declared but value can be updated.
const age=29; // this is recommended when we know our variable is having a constant value and it should not be changed anyhow.
let hobby; // Here we just declared the variable but nt provided any value. This is. possible in jS. if we will try to print it, it will give undefined as o/p.

// 2 ways of printing our output on console string.

/* console.log(fullName);  We can do this when we have to print single statemnt or less statements. */

console.table([fullName,emailId,contactNo,age,hobby]); // It will provide me output in table format and will print all required result added in array form.