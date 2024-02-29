/*
The switch statement evaluates an expression, matching the expression's value against a series of case clauses, 
and executes statements after the first case clause with a matching value, until a break statement is encountered. 
The default clause of a switch statement will be jumped to if no case matches the expression's value.

let fname='Akshay'
switch (fname) {
    case 'Rahul':
        console.log(`Rahul is not a member`)
        break;
    case 'Akshay':
        console.log('Akshay is a member')
        break;
    default:
        console.log('invalid input')
        break;
}

// Note- If we remove break in Switch cases, then rest of the below queries will run except Default.

*/