const accountId = 345278
let accountEmail = "ashish9gps@gmail.com"
var accountPassword = "123456"
accountCity = "Ranchi"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope

               &&
               
another concept if we declared variable without any value it
will show "undefined" 

*/

//  accountId = 78  //not allowed because const is fixed can't be changed
//  console.log(accountId);

// console.log(accountId);

// accountEmail = "hiteshchoudhary.google.com"
// console.log(accountEmail);

 accountPassword = "3333300"
 console.log(accountPassword);


accountCity ="Jaipur"

// there is a another way to display console.log items  i.e.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])