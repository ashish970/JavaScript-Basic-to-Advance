//This is on going topic Object part-2
//on first part we learned about literals and this part of object we will learn about singleton in Js.

// const tinderUser = {}  //both the way we can declare object,....just the difference is it's a non-singleton object

//It's a singleton object
//const tinderUser = new Object()
//console.log(tinderUser);


const tinderUser = {}

tinderUser.id = "@23abc"
tinderUser.name = "Ashish Kumar"
tinderUser.isLoggedIn = false
tinderUser.location = "roorkee"

// console.log(tinderUser);

//nesting object...means object ke andar object
const regularUser = {
    email: "somethingemail.com",
    fullName: {
        userFullName: {
            firstName: "Ashish",
            lastName: "Kumar"
        }
    }
}
// console.log(regularUser.fullName);


//merge two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj14 = {obj1, obj2}
// console.log(obj14);
const objresult = Object.assign({},obj1, obj2,obj3)
console.log(objresult);

//spread operator
const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);



//to find key && values from objects imp concept
// console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


//how to find the property value
// console.log(tinderUser.hasOwnProperty('location'));




//++++++ Objects destructuring
const course = {
    courseName: "JavaScript in depth",
    price : "999",
    courseInstructor: "Ashish"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);



//how to write jason
// {
//     "name": "Ashish kumar",
//     "Age" : "23",
//     "location" : "delhi"
// }



//this is all about basics of objects in JavaScript