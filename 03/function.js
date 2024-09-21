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
console.log(result);

function login(username){
    return `${username} currently login`
}
console.log(login("wasim"));
