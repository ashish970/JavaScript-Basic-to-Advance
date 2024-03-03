// Immediately invoked function Expression (IIFE)

// function chai(){
//     console.log('DB Connected');
// }
// chai()

(function chai(){
    console.log('DB Connected');
})()

//  ()- first parenthesis tell about function definition
//  ()- second parenthesis tell about function definition

//using arrow function
( () => {
    console.log('DB Connected two');
})()