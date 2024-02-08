/* ********************************************************* Arrays *************************************************\

1. Arrays are resizable and can contain a mix of different data types. 
eg- [1,2,"Akshay",true,["3,"Verma",false]]

let arr1= [1,2,"Akshay",true,[3,"Verma",false]];
console.log(arr1);

2. Arrays are not associative arrays, we need to get array values by passing index value where that value is situated within close brackets [].

let Heroes=["Batman","Thor","Spiderman"];
console.log(Heroes[1]); // Here we have to get value at index 1 of our array which is Thor. So we can access array elements by passing their index value.


Arrays are zero indexed. This means first element of an array is situated at 0th index, second element is at 1st index and so on.
To get number of all elements within an array, we can use length property. arr1.length.
It will give total number of elememnts within our array. And last element index will be length of an array-1 as first element is starting from 0 index.


let arr1=[1,2,3,4,5,"Akshay",true,[8,9,10]];
console.log(arr1.length); // we will get 8 even though if we will count, then we can see there are 10 elements generally but if we see at last 3 elements[8,9,10]
// They are inside an array and an array within an array is considered to be a single element.
console.log(arr1[0]) // This will give us 1 as we have 1 at our index 0.
console.log(arr1[7]) // This will give our last element[8,9,10] as we know last element index is total length-1. ie 8-1.

JavaScript array-copy operations create shallow copies not deep copies.

Shallow copy means, data is being stored in Heap memory unlike Stack memory which have deep copies.

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. As a result, when you change either the source or the copy, 
you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, 
in which the source and copy are completely independent. (MDN reff.)

So if we are doing any changes in our array even if stored it in a new variable, then also original array will get changed.

Lets understand practically

let Heroes=["Ironman","Spiderman","Shaktiman"];
// console.log(Heroes);
console.log(Heroes.shift());
console.log(Heroes);

************************************************* Array Methods ***************************************************

1. push()-> Add an element at end of our array.

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes);
Heroes.push("Doga");
console.log(Heroes);

2. pop() -> removes last element of an array

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes);
Heroes.pop();
console.log(Heroes);

3. unshift(element needs to be added) -> We can add element at start.

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes);
Heroes.unshift("Nagraj");
console.log(Heroes);

4. shift() -> Removes first element from array

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes);
Heroes.shift();
console.log(Heroes);

5. includes(element we need to check is present in array or not)

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes.includes("Batman")); //true as Batman is present in list
console.log(Heroes.includes("Sabu")); //false as Sabu is not present in our list

6. indexOf() -> we can check index of any element in our list

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
console.log(Heroes.indexOf("Shaktiman"));

7. tojoin() -> Helps in turning an array to a string

let Heroes=["Spiderman","Batman","Shaktiman","Flash"]
let updatedHeroes=Heroes.join();
console.log(indianHeroes);

8. concat() ->is used to concatenate 2 arrays together

let heroes=["Spiderman","Batman","Flash"]
let indianHeroes=["Shaktiman","Nagraj","Doga"]
console.log(indianHeroes.concat(heroes));

9. slice(a,b) -> using slice method, we can get a piece of our array.
Here a is the index from where we want to see our element.
b will provide us stopping value which will show us element 1 place before it

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.slice(2,4);
console.log(updatedHeroes);

Here, starting index is 2 so we got Doga which is at index 2 but ending value is 4, so we must've this thing in our mind 
that why we are not getting 4th index element Batman, instead we gettimng only 3rd element Spiderman.
Thats because last value will always show us element that is placed at 1 index before.

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.slice(2);
console.log(updatedHeroes);
--> Output- [ 'Doga', 'Spiderman', 'Batman', 'Flash' ] (We have not provided end value so it will print all values till end)

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.slice();
console.log(updatedHeroes);
--> Output- [ 'Shaktiman', 'Nagraj', 'Doga', 'Spiderman', 'Batman', 'Flash' ] (It will print all values if no input is provided)

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.slice(-1);
console.log(updatedHeroes);
--> Output- [ 'Flash' ] (It will print last value as negative number means it will count from reverse order.)

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.slice(-4,-2);
console.log(updatedHeroes);


10. splice(a,b,c) -> Splice basically helps in showing,removing and updating an element. 
- At a, we will provide an index value from where we want change to happen.
- At b, we will provide index value till where we want to delete our elements where 1 index will be element itself and increment values will delete further elements.
- At c, we will provide new element that needs to be updated to our array/

let heroes=["Shaktiman","Nagraj","Doga","Spiderman","Batman","Flash"]
let updatedHeroes=heroes.splice(2,2,"Sabu");
console.log(updatedHeroes);
console.log(heroes);

11. Spread Operator- (...arrName) Spread operator is used to basicaally merge 2 arrays in 1 array. its same as concat but easy to write.

const fruits=["apple","mango","papaya","banana"];
const veggies=["potato","tomato","onion","carrot"];
const finalList=[...fruits, ...veggies];
console.log(fruits);
console.log(veggies);
console.log(finalList);

12. flat()- This method is used to Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth(within parentheis()).

const arr1=[1,2,3,[4,5,6],7,[8,[9,[10,12],13,14],11]]
arr2=arr1.flat(1) // infinity will search till first depth.
arr3=arr1.flat(2) // infinity will search till second depth.
arr4=arr1.flat(Infinity) // infinity will search till last depth.

console.log(arr2);
console.log(arr3);
console.log(arr4);

array.from() --->  console.log(Array.from("Akshay")); //Will take every literal of element and will create that an individual part of an array
array.of() --->  console.log(Array.of("Akshay")); // Will take each element and will make that a part of an array.
*/



