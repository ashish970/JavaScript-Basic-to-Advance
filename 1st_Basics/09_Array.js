//Array in JavaScript

const Array1 = [1,2,3,4,5,7, true, "Ashish"]//this is array within square brackets & inside the brackets we can add any type of data like number, boolean, strings
//JavaScript array ka resizeable it means elements can be add after the declaration also.

//NOTE: JavaScript array-copy-operations create shallow copies-shallow copies means => A shallow copy of an object is a copy whose properties share the same references.


const myArray = [0,1,2,3,4,5]
//console.log(myArray[5]);

const myHero = ['IronMan', 'Thor', 'Captain America']
//console.log(myHero);



//Array methods in js
//push method,pop method,unshift method,shift method, join method
//slice && splice method

// myArray.push(6)
// myArray.push(7)
// myArray.pop()


// myArray.unshift(8)
// myArray.shift()

//const newArr = myArray.join()

// console.log(myArray);
//console.log(newArr);
// console.log(myArray.includes(7));
// console.log(myArray.indexOf(6));


//slice && splice

//console.log("A" ,myArray);

const myNewArr = myArray.slice(1,3)
 //console.log(myNewArr);
// console.log("B", myArray);

const myNewArr2 = myArray.splice(1,3)
// console.log(myNewArr2);
// console.log(myArray);

//slice()
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(1, 3); // [2, 3]
// console.log(newArray);

//splice()
const nxtArray = [1,2,3,4,5];
nxtArray.splice(1,3)
console.log(nxtArray);




