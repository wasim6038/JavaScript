// if 

const temperature = 32

// if (temperature > 35) {
//     console.log("high temperature");
// }else{
//     console.log("Normal temperature");
    
// }

const score = 90

// if (score > 80) {
//     const division = "first"   /**Not using var because of scope  */
//     console.log(`User pass with ${division} division`);
// }
// console.log(`User pass with ${division} division`);  /**not executed because of block scope  */


const balance = 600

// we can write in this format but it is not proper way or format for writing code
// if (balance > 1000) console.log("Sufficient balance"), console.log("more balance");

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("Less than 750");
    
// } else if (balance < 1000) {
//     console.log("less than 1000");
    
// } else{
//     console.log("greater than 1000");
    
// }


const permission = false
const password = false

/**and operatormor, all condition are true */
// if (permission && password ) {
//     console.log("user access the system");
    
// } else{
//     console.log("user not access the system");
    
// }

/**or operatoror, any one condition are true */
if (permission || password) {
    console.log("user access your system");
    
} else {
    console.log("user do not access your system");
    
}