// const userEmail = "wasim@gmail.com"  /**email is present */
// const userEmail = ""  /**print else statement */
const userEmail = [] /**print if statement */

// if (userEmail) {
//     console.log("User email is present");
    
// } else {
//     console.log("User email is not present");
    
// }


// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", " ", "false", [], {}, function(){}

//Checking empty array
const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array is empty");
    
}

//Checking empty Object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")