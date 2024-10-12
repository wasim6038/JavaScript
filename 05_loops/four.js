// For..in loop

//For object we use for..in loop
const myObject = {
    'name1': "wasim",
    'name2': "Akram"
}
for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`);
    
}

// Using for..in loop in array
const myArray = [1, 3, 2, 5, 9]
for (const key in myArray) {
    // console.log(myArray[key]);
    // console.log(`${key} is index of ${myArray[key]}`);
    
}

// Using for..in loop in map
const map = new Map()
map.set("IN", "India")
map.set("D", "Dubai")
map.set("C", "China")
for (const key in map) {
    // console.log(key);
    /**Map is not iterable */
    
}