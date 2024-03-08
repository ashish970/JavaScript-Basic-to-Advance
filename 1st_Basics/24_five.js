//In this we are going to study map method in js...
//we can use simaltaneously map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const result =myNumbers.map( (numbers) => numbers + 10)
//console.log(result);


//Now, we learn the concept of (reduce) in JavaScript...
//reduce in js...
//const myNums = [1,2,30]

// const total = myNums.reduce( function(accumulator, currentValue){
//     console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue
// }, 3)
// console.log(total);

//same above code using arrow function...
const mytotal = myNumbers.reduce( (accumulator,currentValue) => accumulator+currentValue , 0)
console.log(mytotal);


//So, this is it for this file...

                    //  ++++++++++++++++++++ :) +++++++++++++++++++