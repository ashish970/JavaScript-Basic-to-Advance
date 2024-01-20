//console.log("Datatypes-summary in JavaScript");

//Notes snippet of Js
// JavaScript is a dynamically types language because we don't need to define the type, so, it is dynamically types language.
//function ka return object function hota hai

//Examples =>
const score = 100
const scoreValue = 100.5

const isLoggedIn =  false
const isLoggedOut = true
const outsideTemp = null
let userEmail;



//declare symbol
//symbol usecase to give unique id
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const number = 1234554345988
const bigNumber = 398127835589568754
//console.log(number);
//console.log(bigNumber);



//there is two type of Datatypes i.e
// 1. Primitive datatype
// 2. Non-Primitive datatype or       Reference type same thing

// primitive datatype
//7 types => string, Number, Boolean, Null, undefined, symbol, BigInt.


//Reference type(Non-Primitive datatype)
//Non-Primitive ka return type object hi ata hai
// Array, Objects, Function

//arrays
const heros = ["captain Marvel", "Thor","Iron Man"]
//objects
let myObj = {
    name:"Ashish kumar",
    age: 23,
    place:"ranchi"
}
//console.log(myObj);

// we can store function into a variable

let myFunction = function(){
}

//console.log("Function into a variable");

// how to check what type of datatype it is

// console.log(typeof outsideTemp);
// console.log(typeof isLoggedOut);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);

console.log(typeof String);
console.log(typeof Number);
console.log(typeof Boolean);
console.log(typeof Null);
console.log(typeof undefined);
console.log(typeof symbol);
console.log(typeof BigInt);