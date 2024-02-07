let str1 ="Akshay";
let str2="Verma";
let str3="Be proud of who you are!"
let str4=`Nory was a Catholic because her mother was a Catholic and Nory's mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.`
/*
console.log(str1.charAt(2)); // O/p->s charAt() is used to get character value at index where can add index within ().


console.log(str1.concat(` ${str2}`)); // O/p-> Akshay Verma. Concat() method is used to concatenate multiple strings.

console.log(str3.endsWith("are!")); //O/p -> true endsWith() string method is used to check if whether a string ends with given characters of the string in i/p.
console.log(str3.endsWith('you')); //O/p -> false

console.log(str3.includes("proud")); // O/p -> true includes() method is used to find whether a piece of string is included in a string or not. Its case-sensitive
console.log(str3.includes("my")); // O/p -> false



console.log(str1.indexOf('s')); // O/p-> 2 indexOf method is used to get index of a character in our string. We can pass char value with () to get their index.



console.log(str4.lastIndexOf('Catholic')); // O/p -> 178 lastIndexOf() is used to get index value of last occurance of a substring.



console.log(str1.padEnd(9,123)); // O/p -> Akshay123 padEnd(1,2) in (), first value is The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. then we need to add string we need to add to our string.



console.log(str1.padStart(9,'123')); // O/p->123Akshay padStart() is as well same as padEnd, here string is added to start.



console.log(str1.repeat(3)); // O/p -> AkshayAkshayAkshay repeat() helps in repeating certain string where we add no. of repetition in(). It basically concatinates with our string.



console.log(str1.replace('Akshay','Verma')); //O/p -> Verma replace() is used to replace a substring with new string. We can add both values in ().



console.log(str4.replaceAll("Catholic","Temple")); // -> replaceAll() will replace all provided substring with new substring that we provide.



console.log(str3.search("proud")); // O/p -> 3 search() helps to find a substring in a string. If provided substring is not present, we will not get error. instead we get -1 as O/p.


// slice() method is extract piece of our string based on index value we provide. below are thhe index values we can provide.
console.log(str3.slice(3)); // Here we provided starting value which is 3, so we will get o/p strating from index 3. Since we have not provided any end value, we will get whole string from start index.
console.log(str3.slice(0)); // Here we will get whole string as start value is 0 and we have not provided end value so it will print whole string.
console.log(str3.slice(0,3)); // Here it will print from start as index is 0 and will end at index 3.
console.log(str3.slice(-20)); // when we provide negative value, then string index is counted from last where last character is 0.
console.log(str3.slice(-20,-18));


// split() is used to create divide a string into a list based on divide value we provide. O/p generally comes in array form.
console.log(str3.split(' ')); // Here we provide space(' ') as our split value, so we will get our O/p as -> [ 'Be', 'proud', 'of', 'who', 'you', 'are!' ]
console.log('Be-Yourself'.split('-')); // Here we provide -('-') as our split value, so we will get our O/p as -> [ 'Be', 'Yourself' ]



console.log(str3.startsWith('Be')); // O/p->true startsWith() is same as endsWith, only difference is it search for required value at start of the string.



console.log(str1.substring(1)); // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

console.log("AKSHAY".toLowerCase()); //toLowerCase() turns all characters of a string to lower case characters.

console.log("akshay".toUpperCase());//toUpperCase() turns all characters of a string to upper case characters.

console.log("        Akshay        ".trim()); // trim() is used to clear all backspaces from start and end of a string.
console.log("        Akshay".trimStart()); // trimStart() is used to clear all backspaces from start.
console.log("  Akshay     ".trimEnd()); // trimEnd() is used to clear all backspaces from end.

*/