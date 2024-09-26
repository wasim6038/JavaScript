/**Global Scope */
let a = 82
// var c = 27  /**We do not use var because it does not print the global scope value */

if (true) {   /**Block Scope */
    let a = 28
    const b = 20
    var c = 10
    // console.log("INNER:", a);
    
}

// console.log(a);
// console.log(c);


function one(){
    const username = "Wasim"

    function two(){
        const password = "@123"
        console.log(username);
        
    }
    // console.log(password);    /**error because of scope */
    two()
}
// one()

if (true) {
    const username = "wasim"
    if (username === "wasim") {
        const password = " ansari"
        console.log(username + password);
    }
    // console.log(password);   /**error because of scope */
    
}
// console.log(username);   /**error because of scope */

