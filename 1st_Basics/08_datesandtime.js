// Dates
//In JavaScript month starts from 0 ex- 0-jan, 1-feb.......

let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toISOString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//++++ ways to declare date in Js ++++
let myNewDate = new Date(1985, 1, 5)
console.log(myNewDate.toDateString());

let myNewDate1 = new Date(1985, 1, 6)
console.log(myNewDate1.toDateString());

let myNewDate2 = new Date(1999, 5, 19)
console.log(myNewDate2.toDateString());


// want to declare more specific dates into Js +++++++++
//mm-dd-yy
let myNewDate3 = new Date('02-20-2024')
console.log(myNewDate3.toLocaleDateString());

//timestamps for quiz app, who give faster answer

let myTimeStamps = Date.now()
console.log(myTimeStamps);
//to get exact seconds we use floor function
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());




//++++ these all about the Basics Date && Time in JavaScript ++++++++