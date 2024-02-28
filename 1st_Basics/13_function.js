//In this file we are going to start from the topic function....

//agar mujhe mera naam likhna h toh mai aise likhunga bina function ka use kre
// console.log("A");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("s");
// console.log("h");
//but yeh bahot lenghty ho jayega

//So, we use function for this problems

function sayMyName() {
   console.log("A");
   console.log("s");
   console.log("h");
   console.log("i");
   console.log("s");
   console.log("h");
}
// sayMyName()



//let's add two number in function

// function addTwoNumber(number1, number2){
//      console.log(number1 + number2);
// }


//different ways to declare function
function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(2,3)
// console.log("Result: ",result);

//eg:-
function loginUserMessage(username = "Ram"){
    if (username === undefined){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ashish"));
// console.log(loginUserMessage())

//this is all about basics of functions.....



//Now, further within the function
// suppose we want to add the cart price using function

function getCartPrice(...num1) {
    return num1
}
console.log(getCartPrice(200,299,400,600,900,400,500));

//one more concept in this...
//in this function the first two value will go into val1, val2 and others goes into ...  i.e. rest operator.....it's a imp concept
function getAnotherCartPrice(val1, val2,...num1) {
    return num1
}

console.log(getAnotherCartPrice(200,498,2000,4000,4999));


//Now, let study about the concept of objects in function

const user = {
    username:"Ashish",
    price:2000
}
//yeh object ko function mein kaise pass/handle kiya jata hai

function handleObjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObjects(user)
//other ways to handle
handleObjects ({
    username:"Sam",
    price:3000
})


//get data from array using function
const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));


//this is all about basics concept of functions.....