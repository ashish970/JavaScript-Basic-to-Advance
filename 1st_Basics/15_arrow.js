//In this file we are going to study (this) keyword and arrow function in js

//this keyword current context ki baat krta hai

const user = {
    username:"Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},${this.price}, welcome to my portfolio`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Jai Shree Ram"
// user.welcomeMessage()
// console.log(this);

//E.g.:-
function coffee(){
    console.log(this);
}
// coffee()

//now,let's study (arrow) function...
//In this arrow function function keyword removed and just a symbol (=>) will be there...
const chai = () => {
    console.log(this);
}
chai()

//arrow function basic syntax :-
// () => {}
//add two number using arrow function
// const addTwoNumber = (num1, num2) => {
//     return num1 + num2
// }

//implicit return in arrow function isme {} parenthesis ki jaroorat nhi hai ex. below
//and explicit m return keyword lagana padta h imp hai
// const addTwoNumber = (num1, num2) => num1 + num2
//ek aur tareeka hai...jo jada react m use hota hai
const addTwoNumber1 = (num1, num2) => (num1 + num2)
console.log(addTwoNumber1(20,90))


//this is all about the basics of this and arrow function in javascript...