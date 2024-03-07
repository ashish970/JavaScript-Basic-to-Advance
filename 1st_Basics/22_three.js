//In this file we are going to study for the concept of (for of)..

//for of
//["","",""]
//[{},{},{}]

//for of mein iteration konsa element p lagana hai woh pta krte hai
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Welcome My Friends"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}


//map ke bare mein in js...map khudme ek object hai
//Map

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")

console.log(map);



//for in... yeh use hota hai object ki key print karwane ke liye

//create an object
const myObject = {
    js: "JavaScript",
    cpp: "c++",
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject);
    console.log(`${key} shortcut for ${myObject}[key]`);
}

//for in array le liye kaam karta hai let's check..

const programming = ["js", "ruby", "python", "swift"]

for (const key in programming) {
    //console.log('The language for programming is:', programming[key]);
}



//let study the concept of (for each)

const coding = ["js","ruby","java","python", "cpp"]

coding.forEach(function (value){
    console.log(value);
})



//this is all about the concept of Iterations in JavaScript...