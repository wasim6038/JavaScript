// Immediately Invoked Function Expressions (IIFE)

/** IIFE syntax is ()() in first parenthesis we can define function second parenthesis is used for calling */

(function iife(){
    // named iife
    console.log(`Database Connected`); 
})();   /** ; is used for ending first iife function */

( () => {
    console.log(`Database Connected with server`); 
})();

// iife function with parameter
( (name) => {
    console.log(`Database Connected with ${name} server`); 
})("Google")