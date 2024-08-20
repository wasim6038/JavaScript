"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // It is not working because we use nodejs not browser

console.log(3 + 3) // code readability should be high

console.log("Wasim")


let name = "wasim"
let age = 25
let isLoggedIn = true
let state;

// Some Datatypes are

// number => 2 to power 53 (range)
// bigint => use for bigger number out of the number range
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


/**Two types of datatypes */
// Primitive
// 7 types :- number, string, boolean, null, undefined, symbol, bigInt

// Reference (Non Primitive)
// Array, Object, Function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory :- Stack and Heap

// Primitive datatypes use stack memory
// copy of the data
let num1 = "wasim"
let num2 = num1
num2 = "ansari"

console.log(num1);
console.log(num2);


// Non primitive datatypes use heap memory
// reference of the data
let myName = {
    email : "wasim@googl.com",
    id : "19348"
}

let myName1 = myName
myName.email = "ansari@gmail.com"  /** It also change the main value */

console.log(myName);
console.log(myName1);