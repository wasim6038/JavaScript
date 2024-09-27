const user = {
    username: "wanar",
    password: "nar",

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to our website `);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "wasim"
// user.welcomeMessage()

// function wanar(){
//     let username = "anas"
//     console.log(this.username);
    
// }
// wanar()

// const wanar = function(){
//     let username = "anas"
//     console.log(this.username);
// }

/**Arrow function */
const wanar = () => {
    let username = "anas"
    console.log(this.username);
}
// wanar()

/**Explicit return */
// const addNumber = (num1, num2) => {
//     return num1 + num2
// }

/**Implicit return */
// const addNumber = (num1, num2) => num1 + num2

// const addNumber = (num1, num2) => (num1 + num2)

/**Return Object */
const addNumber = (num1, num2) => ({username: "ansrai"})

console.log(addNumber(4, 9));
