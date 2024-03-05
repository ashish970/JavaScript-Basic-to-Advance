//In this file we are going to study the concept of loop in Js...
//for loop

for (let i = 0; i<= 20; i++) {
    const element = i;
    if (i == 5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
}


//nested for loops
for (let i = 1; i<=10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j= 1; j<=10; j++) {
        // console.log(`inner loop value : ${j}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash", "ironMan", "shaktiMan"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


//break and continue
//agar loop mein kahi pe bhi break lag gya ha toh woh whi break kar jayega
//break
for (let i = 0; i <=20; i++){
    if(i == 10){
    //console.log('detected 15');
    break;
    }

    //console.log(`value of i is  ${i}`);
}

//agar continue use kiya h toh wha se agee continue krega
for (let i = 0; i <=20; i++){
    if(i == 15){
    console.log('detected 15');
    continue
    }

    console.log(`value of i is  ${i}`);
}