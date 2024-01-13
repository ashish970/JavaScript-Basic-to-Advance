//this file will based on comparison of operators
//Examples-1
 console.log(2 > 1);
 console.log(2 >= 1);
 console.log(2 == 1);
 console.log(2 < 1);
 console.log(2 <= 1);
 console.log(2 != 1);

//these above examples are very simple.

//Examples-2
//these Ex-2 comparisons creates confusions sometimes
 console.log("2" > 1);
 console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

 console.log(undefined == 0 );


 console.log("2" == 2);  //it will give true
 console.log("2" === 2); // it will give false because, === is strictly equal to and it compares both datatype and value.

console.log(1==1);
console.log(1===1);
console.log("3" === 3);
console.log(3 === 3);


//Example-3

console.log(123 == "123"); //output : true
console.log(123 === "123"); //output: false, :because of strictly equals to conceopt in Js where this operator checks both data && datatypes.

