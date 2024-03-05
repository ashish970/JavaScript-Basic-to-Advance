//In this file we are going to study truthy && falsy in javascript...

// const userEmail = "A@ashish.ai"
const userEmail = ""

if(userEmail){
    console.log("got user email");
}
else
{
    console.log("Don't have user email");
}

//falsy values:-
//false , 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values:-
//jo falsy nhi hai woh truthy hai like ....
// "0", 'false'/"false", " ", [], {}, function(){}


//important concept :-
//Nullish Coalescing Operator (??): null undefined...yeh concept null or undefined ke liye bna hai...

let val1;
// val1 = 11 ?? 10
val1 = null ?? 10

console.log(val1);


//Ternary operator...
// condition ? true : false

const iceCreamPrice = 200

iceCreamPrice <= 90 ? console.log("less than 90") : console.log("more than 90");