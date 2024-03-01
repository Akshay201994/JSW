/* forEach loop

The forEach() method of Array instances executes a provided function once for each array element.

// basic Synatx
array.forEach(element => {
    
});


let heroNames=['Spiderman','Superman','Shaktiman','flash','Batman']
heroNames.forEach((item)=>{
    console.log(item)})


let profile=[
    {
        Name:'Akshay',
        Age:29,
        Followers:290
    },
    {
        Name:'Rahul',
        Age:30,
        Followers:300
    },
    {
        Name:'Neha',
        Age:26,
        Followers:210
    }
]
profile.forEach((requiredProfile)=>{
    console.log(requiredProfile.Age);
}) // lets create objects within array
 */


let arr=['My','Name','is','Akshay']
arr.forEach((items)=>{
    console.log(items)
})