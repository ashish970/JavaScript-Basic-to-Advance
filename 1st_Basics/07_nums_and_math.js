//In this we are going to study about the basic concept of nums && maths

const scorecard = 300
//console.log(scorecard);

const newscore = new Number(400)
//console.log(newscore);

// console.log(newscore.toString().length);
// console.log(newscore.toFixed(3)); //toFixed method mostly use when we make E-Commerce application while calculating gst to fixed the large number.


const sndnum = 34.67
//console.log(sndnum.toFixed(5));

const thrdnum = 145.578
//console.log(thrdnum.toPrecision(3));


const fournum = 1000000
//console.log(fournum.toLocaleString('en-IN'));




//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(6));
// console.log(Math.round(8.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(7,5,7,9,4));
// console.log(Math.max(8,3,5,1,9,20));

//console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

