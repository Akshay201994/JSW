/*                                       Maps in Javascript
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

Map objects are collections of key-value pairs. A key in the Map may only occur once; 
it is unique in the Map's collection.

const myProfileMap=new Map()
myProfileMap.set('Name','Akshay Verma')
myProfileMap.set('Age',29)
myProfileMap.set('Followers',290)

console.log(myProfileMap);

// Note** if we add duplicate valued, it wont be print as map onluy take unique values.

const myProfileMap=new Map()
myProfileMap.set('Name','Akshay Verma')
myProfileMap.set('Age',29)
myProfileMap.set('Followers',290)
myProfileMap.set('Name','Akshay Verma') // This wont be printed and its a duplicate key which is already used.

console.log(myProfileMap);

*/