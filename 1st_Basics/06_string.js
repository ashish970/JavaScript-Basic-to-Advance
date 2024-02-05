//String in js
//we can write string in("",'') js both are correct.
//we can use , also to concatenate

const name = 'Ashish'
const repoCount = 40
//console.log(name + repoCount);  //this is called concat
//but this above concatenate is old. Now, we use backticks(``).
//it's called string interpolation.(complex word)



//Now the modern way to write the concatenate code is

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //this is the latest way to concatenate, and it's called string interpolation.


//other way to declare string using object
const discordName = new String('Welcome to my gaming channel')
//console.log(discordName);

// console.log(discordName[5]);
// console.log(discordName.__proto__);

//all these are methods and (to are functions)
// console.log(discordName.length);
// console.log(discordName.toUpperCase());
// console.log(discordName.charAt(6));
// console.log(discordName.indexOf('o'));


const newString = discordName.substring(1,5)
//console.log(newString);

const anotherString = discordName.slice(0,9)
//console.log(anotherString);

//trim uses for the line spacing && line terminating only.
const newStringOne = "    Ashish     "
// console.log(newStringOne);
// console.log(newStringOne.trim());


// const url = "http://ashish9709%20.github.io"
// console.log(url.replace('%20', '40'))
// console.log(url.includes('ashish9709'));
// console.log(url.includes('sundar'));


//find string length
function length(){
    //console.log("hellomynameisandmyrepocountis".length);
}
length();



//JavaScript String Methods
//Method- 1 Slice(start Index, end Index)method
let a = "Hello Ashish full stack developer"
// console.log(a.slice(0,9));
// console.log(a.slice(9,20));

let b ='JaiShreeRam'
// console.log(b.slice(0,10));
// console.log(b.slice(5,10));


//Method- 2 Substring(start Index, end Index)method
let str1 = "welcome to my channel"
//console.log(str1.substring(0,9));


//Method- 3 Substr(start,length)method
let str2 = "hello,family,poor"
//console.log(str2.substr(6,15));


//Method- 4 JavaScript replace(replaceValue, replaceWithValue)method.
let str3 = "Java, python, JavaScript";
let part = str3.replace("JavaScript","Ruby");
//console.log(part);


//Method- 5 JavaScript replaceAll method.
let str4 = "Ram, Mohan, Sohit, Rohit, Sohit, Ajay"
let all = str4.replaceAll("Sohit", "Ashish")
//console.log(all);

//Method 6: JavaScript toUpperCase(stringVariable)
let str5 = "hello everyone my name is ashish"
let uppercase = str5.toUpperCase(str5)
//console.log(uppercase);


//Method 7: JavaScript toLowerCase(stringVariable)
let str6 = "WELCOME EVERYONE TO MY GAMING CHANNEL"
let lowercase = str6.toLowerCase(str6)
//console.log(lowercase);


//Method 8: JavaScript concat(objectOfString) Method
let str7 = "This is my github account"
let anotherstr = " and my repository count is 40"
//console.log(str7.concat(anotherstr));


//Method 9: JavaScript trim() method
let str8 = "   NewDelhi is the best city of India   ";
let trimmedstr = str8.trim()
//console.log(trimmedstr);


//Method 10: JavaScript trimStart() Method
let str9 = "     living in roorkee  "
let newstr = str9.trimStart()
//console.log(newstr);


//Method 11: JavaScript trimEnd() method
let str10 = " hello ramesh where are you   ? "
let endtrim = str10.trimEnd()
//console.log(endtrim);


//Method 12:  JavaScript charAt(indexOfCharacter) Method
let str11 = "gfg is the best platform to learn computer science"
let sen = "Ashish is learning at gfg platform"
// console.log(str11.charAt(9));
// console.log(sen.charAt(13));


//Method 13: JavaScript charCodeAt(indexOfCharacter) Method
let str12 = "gfg is the best platform to learn computer science"
let sent = "Ashish is learning at gfg platform"
// console.log(str11.charCodeAt(9));
// console.log(sen.charCodeAt(13));

//Method 14: JavaScript split(character) Method
let str13 = "Hello-how-are-you"
console.log(str13.split("-"));

//this  is above the basic methods in JavaScript.....