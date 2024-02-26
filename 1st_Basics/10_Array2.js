//this will continue the array part-2 concepts.

const marvel_heros =["thor","IronMan","spiderMan"]
const dc_heros = ["superMan","flash","batman"]
//here push will not merge the marvel_heros && dc_heros into a single element.....the dc_heros element will be 3rd element of marvel_heros.

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros =marvel_heros.concat(dc_heros)
// console.log(all_heros);

const famous_heros =[...marvel_heros, ...dc_heros]
// console.log(famous_heros);

const another_array = [1,2,3,[4,5,6],7,[5,6,[8,9]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


//convert values into arrays

// console.log(Array.isArray("Ashish"))
// console.log(Array.from("Ashish"))


//convert variables values into array
let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));