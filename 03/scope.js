/**Global Scope */
let a = 82
// var c = 27  /**We do not use var because it does not print the global scope value */

if (true) {   /**Block Scope */
    let a = 28
    const b = 20
    var c = 10
    console.log("INNER:", a);
    
}

console.log(a);
// console.log(c);
