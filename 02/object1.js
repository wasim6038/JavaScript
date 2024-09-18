//const newUser = new Object()  /**singelton or constructor type */

const newUser = {}  /**create an object */

newUser.id = 5
newUser.name = "Wasim"
newUser.email = "wasim@gmail.com"

// console.log(newUser);

// nesting objects 
const dailyUser = {
    name: "wasim",
    item: {
        item1: {
            itemName: "abc",
            price: 300
        },
        item2: {
            itemName: "bc",
            price: 400
        }
    }
}
// console.log(dailyUser);
// console.log(dailyUser.item.item2);

/**Adding two or more objects */
const obj1 = {1: "b", 2: "k"}
const obj2 = {3: "w", 4: "j"}
const obj3 = {5: "a", 6: "r"}

// Methods of adding objects

// const obj4 = {obj1, obj2, obj3}  /**1*/

// const obj4 = Object.assign({}, obj1, obj2, obj3)  /**2*/

const obj4 = {...obj1, ...obj2, ...obj3}   /**3 and best method */  /**Spread operator */

// console.log(obj4);

// by accessing data from database
const users = [
    {
        id: 1,
        name: "wasim"
    },
    {
        id: 2,
        name: "akram"
    },
    {
        id: 3,
        name: "ansari"
    }
]

// console.log(users[2].name);
// console.log(users[2].id);

console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

console.log(newUser.hasOwnProperty("nam"));  /**For checking the property is present or not */
