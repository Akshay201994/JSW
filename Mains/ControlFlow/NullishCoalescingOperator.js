/*                                      Nullish coalescing operator (??)

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

*/

let num1;
let num2
num1= null ?? 10;
num2= undefined ?? 20;
num3= 20 ?? null;
num4= 10 ?? 20;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);