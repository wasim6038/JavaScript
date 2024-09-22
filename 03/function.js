/**Function defination */
function myName(){
    console.log("Wasim");
    console.log("Ansari");
    console.log("Wanar");
}
myName  /**reference of function not execution */
// myName()   /**calling function or excution */

// function addnumbers(num1, num2){
//     console.log(num1 + num2);    
// }
function addNumbers(num1, num2){
    // let result = num1 + num2 
    // return result
    return num1 + num2  /**In short way */
}
const result = addNumbers(7, 6)
// console.log(result);

function login(username){
    return `${username} currently login`
}
// console.log(login("wasim"));

//rest operator are used when we do not know thehow many number are come
function calculatePrice(...num){      /**... use as rest operator */
    return num
}
// console.log(calculatePrice(71, 500, 450));

/** Handle object in a function */
const users = {
    username: "Wasim",
    price: 200
}
function handleObject(anynumber){
    // console.log(`Username is ${anynumber.username} and total bill is ${anynumber.price}`);
}
// handleObject(users)
// also declare the object in calling function.
handleObject({
    username: "Ansari",
    price: 1000
})

/** Hsndle array in a function */
const myArrary = [200, 702, 150, 756, 129]
function handleArray(anyarray){
    return anyarray[3]
}
// console.log(handleArray(myArrary));
// also declare array in calling function.
console.log(handleArray([420, 456, 128, 489,127]));

