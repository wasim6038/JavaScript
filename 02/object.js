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





// const newUser = new Object()   /**constructor type or singelton */
const newUser = {}

newUser.id = "5474"
newUser.name = "Akram"
newUser.isLoggedIn = true

// console.log(newUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "wasim",
            lastname: "akram"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}   /**spread operator */
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(newUser);

console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));

console.log(newUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]