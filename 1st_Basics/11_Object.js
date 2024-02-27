//In this we are going to start objects in Javascript

//to declare objects there is two ways i.e. via- literals && contructor
//agar object literals se banega toh singleton nhi banega but.... agar object contructor se bna hai toh singleton banega.

Object.create    //this is called contructor method to create object


//Object literals

const mySym = Symbol("key1")


//this is how object created
const jsUser = {
    name:"Ashish",
    "full name": "Ashish Kumar",
    [mySym]:"mykey1", //It's a syntax for symbol
    age: 22,
    location:"Ranchi",
    email:"ashish@google.com",
    isLoggedIn:false,
    lastLoginDays:["Tuesday","Wednesday","Saturday"]
}
// console.log(jsUser);
//how to access object....
// console.log(jsUser.email); //max people access objects via this way...It's not a wrong way but there is different way to access object.

//The other ways to access object is :-

console.log(jsUser["location"]);
// console.log(jsUser["ful name"]);
// console.log(jsUser[mySym]);


//how to change the value of objects

jsUser.email = "ashish9gps@gmail.com" //it will overwrite the email and changed it.
console.log(jsUser);
jsUser.age = 45
// console.log(jsUser);

//how to freeze data in object i.e it will not change

Object.freeze(jsUser)
jsUser.location = "Uttarakhand"
// console.log(jsUser);


//This is all about the basics of object in Javascript