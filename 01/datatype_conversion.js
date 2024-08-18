let score = "33xyz"

//console.log(typeof score);
// console.log(typeof(score)); Both work same

let valueInNumber = Number(score)  /* It convert any datatype to number */
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*After conversion into number output of different datatype */
// "33" => 33
// "33abc" => NaN(Not a number)
//  true => 1; false => 0

let isLoggedIn = 548

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*After conversion into boolean */
// 1 => true; 0 => false
// "" => false
// "wasim" => true
// any number except 0 and 1 => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);