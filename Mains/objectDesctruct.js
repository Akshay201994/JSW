const myProfile={
    Name:'Akshay',
    Age:29,
    isActive:true
}
// const {isActive}=myProfile
// console.log(isActive);
// We can give our key destructure a name as well if key is complex

const {isActive:Active}=myProfile
console.log(Active);

Learn about basics of API and Json Files