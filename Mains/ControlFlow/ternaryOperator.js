/*                                              Ternary Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition
followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative 
to an if...else statement.

*/

// Syntax - condition ? trueStatement : falseStatement

const score=1200 
score<1200 ? console.log('loss'):console.log('won');