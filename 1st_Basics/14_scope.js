//In this file we are going to study the concept of scopes in js....

// let a = 10
// var b = 20
// const c = 30
// console.log(a);
// console.log(b);
// console.log(c);

//yeh teeno variable ka scope hai.....let understand what exactly mean of this...

if(true) {
    let a = 10
    var b = 20
    const c = 30
}
 //console.log(a); In this case it throws error i.e. a is not defined and it's right the scope of (a) within the scope...

//console.log(b); here It cause    the main difference btn this three variable in js...o/t gives 20 It means var has out of the scope.
 //console.log(c); c is not defined the o/t is like this and it's right the const also have limited scope

 //so that's why (var) mostly doesn't prefer because of the scope....

 //one more concept the scopes are different for the node environment and the chrome engine environment....


 //*** this is all about basics of scope***//

 //Now, this topic about nested scope
 function one(){
    const username = "Ashish"


    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
 }

 one()


//****** Interesting *******/

function addone(num){
    return num + 1
}
addone(3)

const addTwo = function(num){
    return num + 2
}
addTwo(5)


//this is all about basics.....