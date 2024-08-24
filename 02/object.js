// Singelton
// Object.create   

// Object literals
const sym = Symbol("key1")
const user ={
    name: "wasim",
    email: "wasim@gmail.com",
    age: 22,
    location: "ranchi",
    visitingDays: ["Tuesday", "Friday", "Saturday"],
    [sym]: "key2"
}

console.log(user.email);
console.log(user[sym]);
console.log(user["location"]);  /**other method of accessing onject */

user.name = "ansari"  /**changing the valueof an object */
console.log(user);

Object.freeze(user)  /**do not change the value of keys after this */
user.name = "akram"
console.log(user);

