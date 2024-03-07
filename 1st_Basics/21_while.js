//In this file we are going to study the concept of while do while loop in js...
//while loop syntax
// while (condition) {

// }


let index = 0
while (index <=20) {
//console.log(`value of index is ${index}`);
index = index + 1
}


let myArray = ['Flash', 'america', 'batman']
let arr = 0
while (arr < myArray.length) {
    //console.log(` ${myArray[arr]}`);
    arr = arr+1
}


//now the concept is do while loop...
//In do while pehle kaam hoga phir condition check hoga...

let score = 11

do {
    console.log(`score is ${score}`);
    score++
} while (score<=20);



//this is all about the concept of looping in javaScript....