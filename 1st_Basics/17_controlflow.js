//In this file we are going to study the concept of control flow in JavaScript
// if statement syntax
// if (true){

// }

// const temperature = 40
// if(temperature <  50){
//     console.log("less than 50");
// }
// else{
//     console.log("Temperature is normal");
// }

// console.log("temperature is greater than 50");

//conditions:- <, >, <=, >=, ==, !=, ===, !==
//var ka scope completely global hai

//scope related
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);

//shorthand notation
//isme scope use nhi kiya hai maan lete h ki scope hai
const balance = 1000
if(balance > 500) console.log("available");

//agar multiple line likhna hai toh..but koi recommended nhi karta hai isko aise likne ke liye
// if(balance > 600) console.log("paise hai"), console.log("ache paise hai");

//nested condition

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("user can buy the course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

//this is all about conditions in js..